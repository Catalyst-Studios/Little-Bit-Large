/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/

let $BeeProvider = Java.loadClass("cy.jdkdigital.productivebees.setup.BeeReloadListener");
let IOType = Java.loadClass("es.degrassi.mmreborn.common.machine.IOType");
let $Integer = Java.loadClass("java.lang.Integer");
let $String = Java.loadClass("java.lang.String");
let LootTable = Java.loadClass('net.minecraft.world.level.storage.loot.LootTable');
let LootParams = Java.loadClass('net.minecraft.world.level.storage.loot.LootParams');
let LootContextParams = Java.loadClass('net.minecraft.world.level.storage.loot.parameters.LootContextParams');
let FakePlayerFactory = Java.loadClass('net.neoforged.neoforge.common.util.FakePlayerFactory');
let GameProfile = Java.loadClass('com.mojang.authlib.GameProfile');
let Vec3 = Java.loadClass('net.minecraft.world.phys.Vec3');
let ModTags = Java.loadClass('cy.jdkdigital.productivebees.init.ModTags');
let ModEntities = Java.loadClass('cy.jdkdigital.productivebees.init.ModEntities');
let Mob = Java.loadClass("net.minecraft.world.entity.Mob");
let EntityType = Java.loadClass('net.minecraft.world.entity.EntityType');
let ItemStack = Java.loadClass('net.minecraft.world.item.ItemStack')
let LootContextParamSets = Java.loadClass('net.minecraft.world.level.storage.loot.parameters.LootContextParamSets')
let InteractionHand = Java.loadClass('net.minecraft.world.InteractionHand')

let JsonParser = Java.loadClass('com.google.gson.JsonParser');

ServerEvents.recipes(catalyst => {

    /**
     * @param {string} beeId - The ID suffix of the bee (e.g., 'phil' for 'productivebees:phil').
     * @param {Array} resultItems - Array of output objects { chance, item: {item/tag: id}, max, min }.
     * Note: The wax  is added automatically.
     */
    const centrifuge = (beeId, resultItems) => {
        // Base wax output included in all recipes
        const allOutputs = [
            { chance: 1.0, item: { tag: "c:waxes" }, max: 1, min: 1 }
        ];

        resultItems.forEach(output => allOutputs.push(output));

        catalyst.custom({
            type: "productivebees:centrifuge",
            fluid: {
                amount: 40,
                fluid: "productivebees:honey"
            },
            ingredient: {
                type: "productivebees:component",
                components: {
                    "productivebees:bee_type": `productivebees:${beeId}`
                },
                items: "productivebees:configurable_comb"
            },
            outputs: allOutputs,
            processingTime: 20
        }).id(`catalyst:productivebees/centrifuge/${beeId}_comb`);
    };
    
    let skip = [
        "kamikaz",
        "beebee",
        "villager",
        "butcher",
        "amber",
        "wanna",
        "quarry"
    ]

    let time = 1200 //ticks
    let beeIds = [];

    const checkCondition = (conditionJson) => {
        let type = conditionJson.get("type").getAsString();

        if(type.includes("mod_loaded"))
        {
            let modId = conditionJson.get("modid").getAsString();
            return Platform.isLoaded(modId);
        }

        if(type.includes("tag_empty"))
        {
            let tag = conditionJson.get("tag").getAsString();
            let ingredient = Ingredient.of('#' + tag);
            let ids = ingredient.getItemIds();

            if(ids.isEmpty()) return true;

            for(let id of ids)
            {
                let idStr = id.toString();
                if(idStr !== "minecraft:air" && 
                   idStr !== "minecraft:barrier" && 
                   idStr !== "" && 
                   !Item.of(idStr).isEmpty())
                {

                    return false; 
                }
            }

            return true;
        }

        if(type.includes("item_exists"))
        {
            let item = conditionJson.get("item").getAsString();
            return !Item.of(item).isEmpty();
        }

        if(type.includes("not"))
        {
            let innerCondition = conditionJson.get("value").getAsJsonObject();
            return !checkCondition(innerCondition);
        }

        if(type.includes("and"))
        {
            let values = conditionJson.getAsJsonArray("values");
            for(let i = 0; i < values.size(); i++)
            {
                if(!checkCondition(values.get(i).getAsJsonObject()))
                {
                    return false;
                }
            }
            return true;
        }

        if(type.includes("or"))
        {
            let values = conditionJson.getAsJsonArray("values");
            for(let i = 0; i < values.size(); i++)
            {
                if(checkCondition(values.get(i).getAsJsonObject()))
                {
                    return true;
                }
            }
            return false;
        }

        return true;
    };

    const isBeeValid = (json) => {
        if (!json.has("conditions")) return true;

        let conditions = json.getAsJsonArray("conditions");
        for(let i = 0; i < conditions.size(); i++)
        {
            let condition = conditions.get(i).getAsJsonObject();
            if(!checkCondition(condition))
            {
                return false;
            }
        }
        return true;
    };

    let resources = catalyst.resourceManager.listResources("productivebees", loc => {
        return loc.getNamespace() === "productivebees" && loc.getPath().endsWith(".json");
    });

    resources.forEach((location, resource) => {
        try {
            let reader = resource.openAsReader();
            let json = JsonParser.parseReader(reader).getAsJsonObject();
            reader.close();

            if(isBeeValid(json))
            {
                let path = location.getPath();
                let pathNoJson = path.replace(".json", "");
                let beeId = pathNoJson.substring(pathNoJson.lastIndexOf('/') + 1);
                beeIds.push(beeId);
            }

        } 
        catch(e)
        {
            console.error(`[CatJS] Error processing bee, please report it ${location}: ${e}`);
        }
    });


    beeIds.forEach(value => {
        try {
            let keyword = value
            let inputEgg = Item.of('productivebees:spawn_egg_configurable_bee', 1, {
                "entity_data": {
                    "id": "productivebees:configurable_bee",
                    "type": `productivebees:${keyword}`
                }
            });
            if(!skip.includes(keyword))
            {
                //The commented one works, but no hearth on emi
                //let outputComb = `64x productivebees:configurable_comb[productivebees:bee_type="productivebees:${keyword}"]`
                let outputComb = Item.of('productivebees:configurable_comb', 64, { "productivebees:bee_type": `productivebees:${keyword}` })
                catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:advanced_apiary", time)
                .progressData(ProgressData.create().x(54).y(20))
                .width(110)
                .height(60)
                .requireEnergyPerTick(20000, 0, 4)
                .requireFluid('1000x productivebees:honey', 25, 40)
                .requireItem(inputEgg, 0, 25, 0)
                .requireItem(`32x minecraft:honeycomb`, 25, 20)
                .produceItem(outputComb, 90, 0)
                .requireFunctionEachTick("apiary_recipe_each")
                .requireFunctionOnEnd("apiary_recipe_end")
                .id(`catalyst:mmr/apiary/${keyword}`)
            }
    
            if(keyword === "wanna")
            {
                catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:advanced_apiary", time)
                .progressData(ProgressData.create().x(54).y(20))
                .width(110)
                .height(60)
                .requireEnergy(20000, 0, 4)
                .requireFluid('1000x productivebees:honey', 25, 40)
                .requireItem(inputEgg, 0, 25, 0)
                .requireItem(`32x minecraft:honeycomb`, 25, 20)
                .produceItem('1x minecraft:rotten_flesh', 90, 0)
                .requireFunctionEachTick("apiary_recipe_each")
                .requireFunctionOnEnd("apiary_recipe_end_wanna")
                .id(`catalyst:mmr/apiary/${keyword}`)
            }

            if(keyword === "quarry")
            {
                catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:advanced_apiary", BASE_TIME)
                    .progressData(ProgressData.create().x(54).y(20))
                    .width(110).height(60)
                    .requireEnergy(ENERGY_COST, 0, 4)
                    .requireFluid('1000x productivebees:honey', 25, 40)
                    .requireItem(inputEgg, 0, 25, 0)
                    .requireItem('32x minecraft:honeycomb', 25, 20)
                    .produceItem('1x minecraft:stone', 90, 0)
                    .requireFunctionEachTick("apiary_recipe_each")
                    .requireFunctionOnEnd("apiary_recipe_end_quarry")
                    .id(`catalyst:mmr/apiary/${keyword}`);
                return;
            }
        }
        catch(error)
        {
            console.warn(`[CatJS] Error on bee ${value}: ${error}`)
        }
    });

    console.log("[CatJS] Finished configurable bees")

    let specialRecipes = [
        {
            beeType: "productivebees:spawn_egg_dye_bee",
            output: "1x minecraft:white_dye",
            onEnd: "apiary_recipe_end_dye"
        },
        {
            beeType: "productivebees:spawn_egg_rancher_bee",
            output: '64x productivebees:comb_milky',
            onEnd: "apiary_recipe_end_rancher"
        },
        {
            beeType: "productivebees:spawn_egg_creeper_bee",
            output: '64x productivebees:comb_powdery',
            onEnd: "apiary_recipe_end_creeper"
        },
        {
            beeType: "productivebees:spawn_egg_quarry_bee",
            output: '1x minecraft:stone',
            onEnd: "apiary_recipe_end_quarry"
        },
        {
            beeType: "minecraft:bee_spawn_egg",
            output: '128x minecraft:honeycomb_block',
            onEnd: "apiary_recipe_end_bee"
        }
    ];

    specialRecipes.forEach(recipe => {
        catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:advanced_apiary", time)
        .progressData(ProgressData.create().x(54).y(20))
        .width(110)
        .height(60)
        .requireEnergy(20000, 0, 4)
        .requireFluid('1000x productivebees:honey', 25, 40)
        .requireItem(`1x ${recipe.beeType}`, 0, 25, 0)
        .requireItem(`32x minecraft:honeycomb`, 25, 20)
        .requireFunctionEachTick("apiary_recipe_each")
        .produceItem(recipe.output, 90, 0)
        .requireFunctionOnEnd(recipe.onEnd)
        .id(`catalyst:mmr/apiary/${recipe.beeType.replace(":", "_")}`);
        
    });

    console.log("[CatJS] Finished special bees")

    // Phil Bee
    centrifuge('phil', [
        { chance: 1.0, item: { item: "minecraft:white_concrete" }, max: 4, min: 1 }
    ]);

    // Allergy Bee (Pollen)
    centrifuge('allergy', [
        { chance: 1.0, item: { item: "productivetrees:pollen" }, max: 6, min: 2 }
    ]);

    // Sponge Bee
    centrifuge('sponge', [
        { chance: 0.25, item: { item: "minecraft:sponge" }, max: 1, min: 1 }
    ]);

    // Sussy Bee
    centrifuge('sussy', [
        { chance: 0.75, item: { item: "minecraft:suspicious_gravel" }, max: 1, min: 1 },
        { chance: 0.75, item: { item: "minecraft:suspicious_sand" }, max: 1, min: 1 }
    ]);

    // Sugarbag Bee
    centrifuge('sugarbag', [
        { chance: 1.0, item: { item: "productivebees:sugarbag_honeycomb" }, max: 2, min: 1 }
    ]);

    // Ribbeet Bee (Froglights)
    centrifuge('ribbeet', [
        { chance: 0.75, item: { item: "minecraft:ochre_froglight" }, max: 2, min: 1 },
        { chance: 0.75, item: { item: "minecraft:pearlescent_froglight" }, max: 2, min: 1 },
        { chance: 0.75, item: { item: "minecraft:verdant_froglight" }, max: 2, min: 1 }
    ]);

    // Water Bee
    centrifuge('water', [
        { chance: 0.75, item: { item: "minecraft:cod" }, max: 4, min: 1 },
        { chance: 0.35, item: { item: "minecraft:pufferfish" }, max: 1, min: 1 },
        { chance: 1.0, item: { item: "minecraft:kelp" }, max: 6, min: 1 },
        { chance: 0.75, item: { item: "minecraft:salmon" }, max: 4, min: 1 },
        { chance: 0.75, item: { item: "minecraft:tropical_fish" }, max: 4, min: 1 }
    ]);

    // Pepto Bismol Bee
    centrifuge('pepto_bismol', [
        { chance: 1.0, item: { item: "productivebees:sugarbag_honeycomb" }, max: 4, min: 2 }
    ]);

    console.log("[CatJS] Finished centrifuges recipes")
})

MMREvents.recipeFunction("apiary_recipe_each", catalyst => {
    let controler = catalyst.machine;
    let level = catalyst.getBlock().getLevel();
    let isRaining = level.isRaining();
    let timeOfDay = level.getDayTime() % 24000;
    let isDay = timeOfDay >= 0 && timeOfDay < 12000;
    let paused = true;

    let weatherTrait = "none";
    let dayTrait = "diurnal";
    let productivityTrait = "normal";

    let inputItems = controler.getItemsStored(IOType.INPUT);
    for (let i = 0; i < inputItems.size(); i++)
    {
        let item = inputItems.get(i);
        if(item && item.id == 'productivebees:honey_treat')
        {
            let geneGroupList = item.componentMap.get("productivebees:gene_group_list");
            if(geneGroupList)
            {
                weatherTrait = "none";
                dayTrait = "diurnal";
                productivityTrait = "normal";
                
                for(let j = 0; j < geneGroupList.size(); j++)
                {
                    let geneGroup = geneGroupList.get(j);
                    let attribute = geneGroup.attribute();
                    let value = geneGroup.value();
                    let purity = geneGroup.purity();
                    
                    if(purity.equals($Integer.valueOf("100")))
                    {
                        let traitValue = value.includes(".") 
                            ? value.toString().split("[.]")[1] 
                            : value;
                            
                        switch(attribute)
                        {
                            case "weather_tolerance":
                                weatherTrait = traitValue;
                            break;
                            case "behavior":
                                dayTrait = traitValue;
                            break;
                            case "productivity":
                                productivityTrait = traitValue;
                            break;
                        }
                    }
                }
            }
        }
    }

    if(isRaining)
    {
        paused = !(weatherTrait === "any" || weatherTrait === "rain");
    }
    else
    {
        paused = !(weatherTrait === "any" || weatherTrait === "none");
    }

    if(!paused)
    {
        if(isDay)
        {
            paused = !(dayTrait === "diurnal" || dayTrait === "metaturnal");
        }
        else
        {
            paused = !(dayTrait === "nocturnal" || dayTrait === "metaturnal");
        }
    }

    if(!paused)
    {
        switch(productivityTrait)
        {
            case "medium":
                catalyst.setBaseSpeed(2.0);
                break;
            case "high":
                catalyst.setBaseSpeed(3.0);
                break;
            case "very_high":
                catalyst.setBaseSpeed(4.0);
                break;
            default:
                catalyst.setBaseSpeed(1.0);
        }
    }

    if(paused)
    {
        catalyst.setBaseSpeed(0.0)
    }

});

const BONUS_VALUES = {
    STANDARD: { sugarbag: 16, medium: 32, high: 64, very_high: 128 },
    VANILLA:  { sugarbag: 64, medium: 64, high: 128, very_high: 192 } //normal bee
};

/**
 * Calculate the total bonus based on the upgrades, genes and sugarbag
 * @param {InputContainer} inputItems - Input items
 * @param {Object} values - STANDARD o VANILLA
 */
function calculateCombBonus(inputItems, values)
{
    let combBonus = 0;
    let upgradeCount = 0;
    let productivityTrait = null;
    let hasSugarbag = false;

    // Recorremos los inputs una sola vez
    for(let i = 0; i < inputItems.size(); i++)
    {
        let item = inputItems.get(i);
        if (!item || item.isEmpty()) continue;

        // Count productivity upgrades
        if (upgradeCount < 4 && item.id == 'productivelib:upgrade_productivity_4') {
            let countToAdd = Math.min(item.count, 4 - upgradeCount);
            upgradeCount += countToAdd;
        }

        //Sugarbag boost
        if (item.id == 'productivebees:sugarbag_honeycomb')
        {
            hasSugarbag = true;
        }

        // 3. Detectar Genes (Honey Treat)
        if(item.id == 'productivebees:honey_treat' && item.componentMap.has("productivebees:gene_group_list"))
        {
            let geneGroupList = item.componentMap.get("productivebees:gene_group_list");
            for(let j = 0; j < geneGroupList.size(); j++)
            {
                let gene = geneGroupList.get(j);
                if(gene.attribute() == "productivity" && gene.purity().equals($Integer.valueOf("100")))
                {
                    let val = gene.value().toString();
                    productivityTrait = val.includes(".") ? val.split(".")[1] : val;
                }
            }
        }
    }

    if (upgradeCount > 0) combBonus += upgradeCount * 16;
    if (hasSugarbag) combBonus += values.sugarbag;
    
    if(productivityTrait)
    {
        if(values[productivityTrait])
        {
            combBonus += values[productivityTrait];
        }
    }

    return combBonus;
}

/**
 * Adds items to the machine controller
 * @param {Controller} machine MMR controller
 * @param {string} itemId String representing the name
 * @param {integer} totalAmount Amount to add, in 64 batches or less
 */
function addStackToMachine(machine, itemId, totalAmount) {
    if (totalAmount <= 0) return;

    let fullStacks = Math.floor(totalAmount / 64);
    let remainder = totalAmount % 64;

    for(let i = 0; i < fullStacks; i++)
    {
        machine.addItem(Item.of(itemId, 64));
    }

    if(remainder > 0)
    {
        machine.addItem(Item.of(itemId, remainder));
    }
}

/**
 * Clear placeholder.
 */
function consumeOutputItem(machine, itemId)
{
    let outputItems = machine.getItemsStored(IOType.OUTPUT);
    for(let i = 0; i < outputItems.size(); i++)
    {
        let item = outputItems.get(i);
        if (item && item.id == itemId && item.count >= 1)
        {
            item.count--;
            return;
        }
    }
}

/**
 * Extract NBT data from the bee egg
 */
function getBeeTypeFromInput(inputItems)
{
    for(let i = 0; i < inputItems.size(); i++)
    {
        let item = inputItems.get(i);
        if(item && item.id == 'productivebees:spawn_egg_configurable_bee' && item.componentMap.has("minecraft:entity_data"))
        {
            if(item.componentMap.has("minecraft:entity_data"))
            {
                let entityData = item.componentMap.get("minecraft:entity_data");
                if(entityData)
                {
                    let beeType = entityData.toString().split("[,]")[1];
                    if(beeType && beeType.includes(':'))
                    {
                        return beeType.split(':')[2].split("\"")[0]
                    }
                }
            }
            
        }
    }
    return null;
}

// "generic" bee
MMREvents.recipeFunction("apiary_recipe_end", catalyst => {
    let inputItems = catalyst.machine.getItemsStored(IOType.INPUT);
    let beeType = getBeeTypeFromInput(inputItems);
    let bonus = calculateCombBonus(inputItems, BONUS_VALUES.STANDARD);

    if(beeType && bonus > 0)
    {
        let itemStr = `productivebees:configurable_comb[productivebees:bee_type="productivebees:${beeType}"]`;
        addStackToMachine(catalyst.machine, itemStr, bonus);
    }
});

// Dye Bee
MMREvents.recipeFunction("apiary_recipe_end_dye", catalyst => {
    consumeOutputItem(catalyst.machine, 'minecraft:white_dye');

    let dyes = Ingredient.of('#c:dyes').getStacks().toArray();
    if (dyes.length === 0) return;

    for(let i = 0; i < 10; i++)
    {
        let randomDye = dyes[Math.floor(Math.random() * dyes.length)].copy();
        randomDye.count = Math.floor(Math.random() * 8) + 1; // +1 para evitar stacks de 0
        catalyst.machine.addItem(randomDye);
    }
});

// Rancher Bee
MMREvents.recipeFunction("apiary_recipe_end_rancher", catalyst => {
    let bonus = calculateCombBonus(catalyst.machine.getItemsStored(IOType.INPUT), BONUS_VALUES.STANDARD);
    addStackToMachine(catalyst.machine, `productivebees:comb_milky`, bonus);
});

// Creeper Bee
MMREvents.recipeFunction("apiary_recipe_end_creeper", catalyst => {
    let bonus = calculateCombBonus(catalyst.machine.getItemsStored(IOType.INPUT), BONUS_VALUES.STANDARD);
    addStackToMachine(catalyst.machine, `productivebees:comb_powdery`, bonus);
});

// Vanilla Bee
MMREvents.recipeFunction("apiary_recipe_end_bee", catalyst => {
    let bonus = calculateCombBonus(catalyst.machine.getItemsStored(IOType.INPUT), BONUS_VALUES.VANILLA);
    addStackToMachine(catalyst.machine, 'minecraft:honeycomb_block', bonus);
});

// Wanna Bee
MMREvents.recipeFunction("apiary_recipe_end_wanna", catalyst => {
    let machine = catalyst.machine;
    let level = catalyst.getBlock().getLevel();
    let inputItems = machine.getItemsStored(IOType.INPUT);

    consumeOutputItem(machine, 'minecraft:rotten_flesh');

    let entityData = null;
    for(let i = 0; i < inputItems.size(); i++)
    {
        let item = inputItems.get(i);
        if(item && item.id === 'productivebees:amber' &&
           item.componentMap.has("minecraft:entity_data"))
        {
            entityData = item.componentMap.get("minecraft:entity_data").copyTag();
            break;
        }
    }

    if(!entityData) return;

    let entityType = EntityType.byString(entityData.getString("id")).orElse(null);
    if(!entityType) return;
    
    let entity = entityType.create(level);
    if(!entity) return;
    
    entity.load(entityData);
    if(!(entity instanceof Mob))
    {
        entity.discard();
        return;
    }

    let lootTable = level.getServer().reloadableRegistries().getLootTable(entity.getLootTable());
    if(lootTable === LootTable.EMPTY)
    {
        entity.discard();
        return;
    }

    let fakePlayer = FakePlayerFactory.get(level, new GameProfile(ModEntities.WANNA_BEE_UUID, "wanna_bee"));
    let pos = catalyst.getBlock().getPos();
    
    let lootContext = new LootParams.Builder(level)
        .withParameter(LootContextParams.LAST_DAMAGE_PLAYER, fakePlayer)
        .withParameter(LootContextParams.DAMAGE_SOURCE, level.damageSources().playerAttack(fakePlayer))
        .withOptionalParameter(LootContextParams.ATTACKING_ENTITY, fakePlayer)
        .withOptionalParameter(LootContextParams.DIRECT_ATTACKING_ENTITY, fakePlayer)
        .withParameter(LootContextParams.TOOL, new ItemStack(Items.DIAMOND_AXE))
        .withParameter(LootContextParams.THIS_ENTITY, entity)
        .withParameter(LootContextParams.ORIGIN, new Vec3(pos.getX() + 0.5, pos.getY() + 0.5, pos.getZ() + 0.5))
        .create(LootContextParamSets.ENTITY);

    let loot = lootTable.getRandomItems(lootContext);

    let allowedLoot = [];
    for(let k = 0; k < loot.size(); k++)
    {
        let stack = loot.get(k);
        try
        {
            if(!stack.is(ModTags.WANNABEE_LOOT_BLACKLIST))
            {
                allowedLoot.push(stack);
            }
        }
        catch(e)
        {
            allowedLoot.push(stack);
        }
    }

    if(allowedLoot.length > 0)
    {
        let random = level.random;
        for(let i = 0; i < 16; i++)
        {
            let randomIndex = random.nextInt(allowedLoot.length);
            machine.addItem(allowedLoot[randomIndex].copy());
        }
    }

    entity.discard();
});

MMREvents.recipeFunction("apiary_recipe_end_quarry", catalyst => {
    let controller = catalyst.machine;
    let inputItems = controller.getItemsStored(IOType.INPUT);

    consumeOutputItem(controller, 'minecraft:stone');

    let bonus = calculateCombBonus(inputItems, BONUS_VALUES.STANDARD);

    let quarryItems = Ingredient.of('#productivebees:flowers/quarry').getStacks().toArray()
        .filter(stack => {
            let id = stack.getId();
            return !['chipped:', 'farmingforblockheads:'].some(mod => id.startsWith(mod));
        });

    if(quarryItems.length === 0) return;

    let cycles = 2 + Math.floor(bonus / 16);
    for(let i = 0; i < cycles; i++)
    {
        let randomStack = quarryItems[Math.floor(Math.random() * quarryItems.length)];
        let amount = Math.floor(Math.random() * 16) + 24;
        addStackToMachine(controller, randomStack.getId(), amount);
    }
});

/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/

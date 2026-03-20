/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/

ServerEvents.recipes(catalyst => {

    const fluids = [
        { fluid: 'industrialforegoing:ether_gas', amount: 5000, x: 20, y: 0},
        { fluid: 'industrialforegoing:meat', amount: 5000, x: 20, y: 20 },
        { fluid: 'minecraft:water', amount: 15000, x: 20, y: 40 },
        { fluid: 'oritech:still_sulfuric_acid', amount: 250, x: 40, y: 0 }
    ];

    const optional_output = {
        item: '1x catalystcore:elemental_emptiness_crystal',
        count: 1,
        chance: 0.005
    };

    const mod_priorities = [
        "minecraft",
        "kubejs",
        "eternalores",
        "mekanism",
        "railcraft",
        "forcecraft",
        "pneumaticcraft",
        "immersiveengineering",
        "oritech",
        "thermal",
        "create",
        "occultism"
    ];

    const special_cases = [
        {input: 'rftoolsbase:dimensionalshard_overworld', output: 'rftoolsbase:dimensionalshard', amount: 1},
        {input: 'rftoolsbase:dimensionalshard_nether', output: 'rftoolsbase:dimensionalshard', amount: 2},
        {input: 'rftoolsbase:dimensionalshard_end', output: 'rftoolsbase:dimensionalshard', amount: 3},
        {input: 'railcraft:firestone_ore', output: 'railcraft:raw_firestone', amount: 2},
        {input: 'eternalores:raw_catalyrium', output: 'eternalores:catalyrium_ingot', amount: 1},
        {input: 'evilcraft:dark_ore_deepslate', output: 'evilcraft:dark_gem', amount: 2},
        {input: 'minecraft:redstone_ore', output: 'minecraft:redstone', amount: 6},
        {input: 'minecraft:deepslate_redstone_ore', output: 'minecraft:redstone', amount: 7},
        {input: 'minecraft:lapis_ore', output: 'minecraft:lapis_lazuli', amount: 6},
        {input: 'minecraft:deepslate_lapis_ore', output: 'minecraft:lapis_lazuli', amount: 7},
        {input: 'minecraft:coal_ore', output: 'minecraft:coal', amount: 3},
        {input: 'minecraft:deepslate_coal_ore', output: 'minecraft:coal', amount: 4},
        {input: 'mysticalagriculture:inferium_ore', output: 'mysticalagriculture:inferium_essence', amount: 12},
        {input: 'mysticalagriculture:deepslate_inferium_ore', output: 'mysticalagriculture:inferium_essence', amount: 16},
        {input: 'mysticalagradditions:nether_inferium_ore', output: 'mysticalagriculture:inferium_essence', amount: 14},
        {input: 'mysticalagradditions:end_inferium_ore', output: 'mysticalagriculture:inferium_essence', amount: 24},
        {input: 'mysticalagriculture:prosperity_ore', output: 'mysticalagriculture:prosperity_shard', amount: 4},
        {input: 'mysticalagriculture:deepslate_prosperity_ore', output: 'mysticalagriculture:prosperity_shard', amount: 6},
        {input: 'mysticalagradditions:nether_prosperity_ore', output: 'mysticalagriculture:prosperity_shard', amount: 6},
        {input: 'mysticalagradditions:end_prosperity_ore', output: 'mysticalagriculture:prosperity_shard', amount: 12},
        {input: 'geore:ancient_debris_shard', output: 'minecraft:netherite_scrap', amount: 1}
    ];

    const blacklist = [
        'geore:unobtainium_shard',
        'geore:vibranium_shard',
        'geore:allthemodium_shard',
        'geore:topaz_shard',
        'geore:monazite_shard',
        'geore:tungsten_shard',
    ];


    const getPriorityItem = (tagString) => {
        let tag = Ingredient.of(tagString);
        let candidates = tag.getItemIds();

        if (candidates.length === 0) return null;

        for(let mod of mod_priorities)
        {
            let found = candidates.find(id => id.startsWith(mod + ':'));
            if(found === "minecraft:barrier") return null;
            if(found) return Item.of(found, 1);
        }

        return Item.of(candidates[0], 1);
    };

    const getRecipeOutput = (recipeType, inputId) => {
        let recipes = catalyst.findRecipes({ type: recipeType, input: inputId });

        if(recipes && !recipes.isEmpty())
        {
            let recipe = recipes.get(0);
            if(recipe.originalRecipeResult)
            {
                return Item.of(recipe.originalRecipeResult, recipe.originalRecipeResult.count);
            }
        }
        return null;
    };

    const getSpecialCasesResult = (inputId) => {
        let case_ = special_cases.find(m => m.input === inputId);
        if(case_)
        {
            return Item.of(case_.output, case_.amount);
        }
        return null;
    };

    const getSmeltingResult = (inputId) => getRecipeOutput('minecraft:smelting', inputId);
    const getEnrichingResult = (inputId) => getRecipeOutput('mekanism:enriching', inputId);
    const getSqueezingResult = (inputId) => getRecipeOutput('integrateddynamics:squeezer', inputId);
    const getEnergizingResult = (inputId) => getRecipeOutput('powah:energizing', inputId);

    /**
     * Gets the result of a recipe given the item id
     * @param {string} inputId Item id (ejem, minecraft:diamond_ore)
     * @param {string} materialName Name without anything (ejem, diamond)
     * @returns 
     */
    const findProcessedOutput = (inputId, materialName) => {
        
        let custom = getSpecialCasesResult(inputId);
        if(custom && !custom.isEmpty()) return custom;

        let squeezing = getSqueezingResult(inputId);
        if (squeezing && !squeezing.isEmpty()) return squeezing;

        let energizing = getEnergizingResult(inputId);
        if (energizing && !energizing.isEmpty()) return energizing;

        let smeltOutput = getSmeltingResult(inputId);
        if(smeltOutput && !smeltOutput.isEmpty()) return smeltOutput;

        let enriching = getEnrichingResult(inputId);
        if (enriching && !enriching.isEmpty()) return enriching;

        //Now we are guessing, bad but works most of the time
        let ingot = getPriorityItem(`#c:ingots/${materialName}`);
        if(ingot && !ingot.isEmpty()) return ingot;

        let gem = getPriorityItem(`#c:gems/${materialName}`);
        if(gem && !gem.isEmpty()) return gem;

        let dust = getPriorityItem(`#c:dusts/${materialName}`);
        if(dust && !dust.isEmpty()) return dust;
        
        let shard = getPriorityItem(`#c:shards/${materialName}`);
        if(shard && !shard.isEmpty()) return shard;

        let crystal = getPriorityItem(`#c:crystals/${materialName}`);
        if(crystal && !crystal.isEmpty()) return crystal;

        return Item.of("minecraft:stone", 1, {lore: {text:"Please report this error"}});
    };

    let processedRecipes = new Set();

    const addCelestialRequirements = (recipeBuilder) => {
        let r = recipeBuilder
            .progressData(ProgressData.create().x(64).y(20))
            .width(110)
            .height(60)
            .requireEnergyPerTick(2500)
        
        fluids.forEach(f => {
            r.requireFluid(`${f.amount}x ${f.fluid}`, f.x, f.y);
        });

        return r;
    };

    const createRecipesForTag = (tagString, multiplier) => {
        Ingredient.of(tagString).getItemIds().forEach(inputId => {
            try {
                if(blacklist.includes(inputId)) return;
                
                let materialName = inputId.split(':')[1]
                .replace('deepslate_', '')
                .replace('nether_', '')
                .replace('end_', '')
                .replace('raw_', '')
                .replace('_ore', '')
                .replace('_block', '')
                .replace('_shard', '');
                
                if(processedRecipes.has(inputId)) return;

                let outputItemRaw = findProcessedOutput(inputId, materialName);
                if(outputItemRaw.isEmpty()) return;

                let original_count = outputItemRaw.count;
                
                processedRecipes.add(inputId);
                [1, 32, 256].forEach(number => {
                    let inputItem = Item.of(inputId, number)
                    if(number > 1)
                    {
                        let outOverworld = outputItemRaw.copy();
                        outOverworld.setCount(original_count * multiplier * number);
                        //if(number === 256) console.log(outOverworld)
                        let recipe = catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:celestial_forge", 400)
                            .requireItem(inputItem, 40, 20) 
                            .produceItem(outOverworld, 90, 20)
                            .produceItem(optional_output.item, optional_output.chance, 90, 40)
                            .priority(number)
                            .hide()
                            .id(`catalyst:mmr/glorified_furnace/every_dimension/${number}/${inputId.replace(":", "-")}_to_${outOverworld.id.replace(":", "-")}`)

                        addCelestialRequirements(recipe);

                        let outNether = outputItemRaw.copy();
                        outNether.setCount(original_count * multiplier * 2 * number);

                        recipe = catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:celestial_forge", 300)
                            .requireItem(inputItem, 40, 20) 
                            .produceItem(outNether, 90, 20)
                            .produceItem(optional_output.item, optional_output.chance, 90, 40)
                            .dimensions(["minecraft:nether"])
                            .priority(number)
                            .hide()
                            .id(`catalyst:mmr/glorified_furnace/nether/${number}/${inputId.replace(":", "-")}_to_${outNether.id.replace(":", "-")}`)

                        addCelestialRequirements(recipe);

                        let outEnd = outputItemRaw.copy();
                        outEnd.setCount(original_count * multiplier * 4 * number);

                        recipe = catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:celestial_forge", 200)
                            .requireItem(inputItem, 40, 20) 
                            .produceItem(outEnd, 90, 20)
                            .produceItem(optional_output.item, optional_output.chance, 90, 40)
                            .dimensions(["minecraft:the_end"])
                            .priority(number)
                            .hide()
                            .id(`catalyst:mmr/glorified_furnace/end/${number}/${inputId.replace(":", "-")}_to_${outEnd.id.replace(":", "-")}`)

                        addCelestialRequirements(recipe);
                    }
                    else
                    {
                        let outOverworld = outputItemRaw.copy();
                        outOverworld.setCount(original_count * multiplier * number);

                        let recipe = catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:celestial_forge", 400)
                            .requireItem(inputItem, 40, 20) 
                            .produceItem(outOverworld, 90, 20)
                            .produceItem(optional_output.item, optional_output.chance, 90, 40)
                            .id(`catalyst:mmr/glorified_furnace/every_dimension/${number}/${inputId.replace(":", "-")}_to_${outOverworld.id.replace(":", "-")}`)

                        addCelestialRequirements(recipe);

                        let outNether = outputItemRaw.copy();
                        outNether.setCount(original_count * multiplier * 2 * number);

                        recipe = catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:celestial_forge", 300)
                            .requireItem(inputItem, 40, 20) 
                            .produceItem(outNether, 90, 20)
                            .produceItem(optional_output.item, optional_output.chance, 90, 40)
                            .dimensions(["minecraft:nether"])
                            .id(`catalyst:mmr/glorified_furnace/nether/${number}/${inputId.replace(":", "-")}_to_${outNether.id.replace(":", "-")}`)

                        addCelestialRequirements(recipe);

                        let outEnd = outputItemRaw.copy();
                        outEnd.setCount(original_count * multiplier * 4 * number);

                        recipe = catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:celestial_forge", 200)
                            .requireItem(inputItem, 40, 20) 
                            .produceItem(outEnd, 90, 20)
                            .produceItem(optional_output.item, optional_output.chance, 90, 40)
                            .dimensions(["minecraft:the_end"])
                            .id(`catalyst:mmr/glorified_furnace/end/${number}/${inputId.replace(":", "-")}_to_${outEnd.id.replace(":", "-")}`)

                        addCelestialRequirements(recipe);
                    }
                })

            }
            catch(error)
            {
                console.error(`[CatJS] Error creating recipe for item ${inputId}: ${error}`);
            }
        });
    };

    createRecipesForTag('#c:ores', 1);
    createRecipesForTag('#c:raw_materials', 1);
    createRecipesForTag('#geore:geore_shards', 1);

    console.log("[CatJS] Added Celestial Forges recipes")

});

/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
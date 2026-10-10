/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
ServerEvents.recipes(catalyst => {

    let processedRecipes = new Set();
    let blacklist = [
        //emptiness list
    ];

    const modPriorityList = [
        "minecraft",
        "eternalores",
        "kubejs",
        "mekanism",
        "railcraft",
        "forcecraft",
        "pneumaticcraft",
        "immersiveengineering",
        "extendedae",
        "oritech",
        "create",
        "powah",
        "enderio",
        "energizedpower",
        "actuallyadditions",
        "modular_machinery_reborn"
    ];

    const materialsList = [
        "aeternium", "alumite", "aluminum", "amber", "americium", "ancient_debris", "andesite", 
        "annealed_copper", "anthracite_coal", "antimatter", "apatite", "arcanum", "ardite", 
        "armadillo_scute", "aurorium", "basalt", "battery_alloy", "beryllium", "bio", "biomass", 
        "biosteel", "bismuth", "bitumen", "bituminous_coal", "black_bronze", "black_quartz", 
        "black_steel", "blackstone", "blaze", "blue_steel", "brass", "brick", "britannia_silver", 
        "bronze", "cadmium", "calcite", "calcium", "californium", "cast_iron", "cast_steel", 
        "catalyrium", "certus_quartz", "cerium", "charcoal", "chrome", "chromium", "cinnabar", 
        "clay", "coal", "coal_coke", "cobalt", "constantan", "copper", "cosmic_matter", 
        "crystalline_alloy", "cupronickel", "deepslate", "diamond", "diorite", "dripstone", 
        "dust", "electrum", "elementium", "emerald", "end_stone", "ender", "ender_eye", 
        "ender_pearl", "enderium", "eternal_dark", "eternal_light", "eternity", "etherium", 
        "exotic_matter", "flint", "fluix", "fluorite", "francium", "gallium", "garnet", 
        "glowstone", "gold", "granite", "graphite", "gravel", "gravitronium", "hafnium", 
        "hepatizon", "indium", "invar", "iridium", "iron", "jade", "kanthal", "lapis", 
        "lapis_lazuli", "lead", "lignite_coal", "lumium", "magnesium", "manganese", "melodic_alloy", 
        "mithril", "modularium", "molybdenum", "monazite", "morphite", "nanite", "nautilus", 
        "necroticarite", "neodymium", "neptunium", "nether_brick", "nether_star", "nether_wart", 
        "netherite", "netherrack", "nethersteel", "nickel", "niobium", "niter", "novalloy", 
        "obsidian", "onyx", "osgloglas", "osmium", "palladium", "peat_coal", "pearl", "peridot", 
        "pewter", "phantom_membrane", "phosphorus", "pig_iron", "platinum", "plutonium", 
        "potassium_nitrate", "primornium", "prismarine", "purpur", "pyrolite", "quantiquarite", 
        "quartz", "quartz_enriched_copper", "quartz_enriched_iron", "rare_earth", "red_sand", 
        "red_steel", "redstone", "rhodium", "rose_gold", "rotten_flesh", "rubidium", "ruby", 
        "ruthenium", "salt", "saltpeter", "samarium", "sand", "sanguis_vivus", "sapphire", 
        "sawdust", "sculk", "sculkite", "selenium", "shadowsteel", "shulker_shell", "signalum", 
        "silicon", "silver", "soul_sand", "source", "spectral_sky_bluerite", "spinel", 
        "stainless_steel", "steel", "stellar_alloy", "stellarium", "stone", "strange_matter", 
        "sugar", "sulfur", "tachyarite", "tantalum", "tanzanite", "temictetl", "tin", "titanium", 
        "tuff", "tungsten", "turtle_scute", "ultimatitanium", "universium", "unstable", 
        "unstable_stable", "uraninite", "uranium", "vanadium", "vivid_alloy", "voiderite", 
        "warped_nether_wart", "wrought_iron", "yttrium", "zinc", "zircon", "wheat", "amethyst", 
        "wood", "redstone_alloy", "plastic"
    ];

    const getModPriority = (itemId) => {
        if(!itemId) return -1;
        let modId = itemId.split(':')[0];
        let index = modPriorityList.indexOf(modId);
        return index !== -1 ? (modPriorityList.length - index) : 0;
    };

    const getPreferredItemForTag = (tag) => {
        try
        {
            let items = Ingredient.of('#' + tag).getItemIds();
            if(!items || items.length === 0) return null;
            let bestItem = items[0];
            let bestPrio = getModPriority(bestItem);
            for(let i = 1; i < items.length; i++)
            {
                let prio = getModPriority(items[i]);
                if(prio > bestPrio)
                {
                    bestPrio = prio;
                    bestItem = items[i];
                }
            }
            return bestItem;
        }
        catch(e)
        {
            return null;
        }
    };

    const resolveUnifiedOutput = (itemStack) => {
        if(!itemStack || itemStack.isEmpty()) return itemStack;
        let tags = itemStack.tags.toArray();
        for(let tagLoc of tags)
        {
            let tagStr = tagLoc.toString().replace('#', '');
            if(
                tagStr.startsWith('c:ingots/') || 
                tagStr.startsWith('c:gems/') || 
                tagStr.startsWith('c:dusts/') || 
                tagStr.startsWith('c:raw_materials/') || 
                tagStr === 'c:silicon' || 
                tagStr === 'c:coal_coke'
            )
            {
                let preferredId = getPreferredItemForTag(tagStr);
                if(preferredId)
                {
                    let unifiedItem = Item.of(preferredId, itemStack.count);
                    if (itemStack.nbt) unifiedItem.setNbt(itemStack.nbt);
                    return unifiedItem;
                }
            }
        }
        return itemStack;
    };

    const addFurnaceRequirements = (recipeBuilder) => {
        return recipeBuilder
            .progressData(ProgressData.create().x(30).y(10))
            .width(80)
            .height(40);
    };

    const addFurnaceRequirements2 = (recipeBuilder) => {
        return recipeBuilder
            .progressData(ProgressData.create().x(54).y(20))
            .width(110)
            .height(60);
    };

    const getScaledDuration = (number, maxParallel, baseTicks, minTicks) => {
        if(number <= 1) return baseTicks;
        if(number >= maxParallel) return minTicks;
        let progress = Math.log2(number) / Math.log2(maxParallel);
        return Math.max(minTicks, Math.round(baseTicks - (baseTicks - minTicks) * progress));
    };

    const parallelNumbers = [1, 4, 6, 8, 16, 32, 64, 128, 256, 512, 1024, 2048];

    let custom_recipes = [
        {
            input: 'enderio:photovoltaic_composite',
            in_amount: 2,
            output: 'enderio:photovoltaic_plate',
            out_amount: 1
        },
        {
            input: 'minecraft:coal_block',
            output: 'eternalores:coke_coal_block',
            tier: 1
        },
        {
            input: 'eternalores:eternity_dust',
            output: 'eternalores:eternity_ingot',
            tier: 5
        },
        {
            input: 'eternalores:universium_dust',
            output: 'eternalores:universium_ingot',
            tier: 5
        },
        // {
        //     input: 'eternalores:titanium_dust',
        //     in_amount: 1,
        //     output: 'eternalores:titanium_ingot',
        //     out_amount: 1
        // },
        // {
        //     input: 'eternalores:tungsten_dust',
        //     in_amount: 1,
        //     output: 'eternalores:tungsten_ingot',
        //     out_amount: 1
        // },
    ]

    custom_recipes.forEach(cr => {
        let input_id = cr.input;
        let output_id = cr.output;
        let in_amount = cr.in_amount !== undefined ? cr.in_amount : 1;
        let out_amount = cr.out_amount !== undefined ? cr.out_amount : 1;
        let recipe_tier = cr.tier !== undefined ? cr.tier : 0;
        let energy = cr.energy !== undefined ? cr.energy : 10000;

        if(recipe_tier <= 0)
        {
            catalyst.smelting(Item.of(output_id, out_amount), Item.of(input_id, in_amount));
        }

        processedRecipes.add(input_id);

        let clean_input = input_id.replace(":", "-");
        let clean_output = output_id.replace(":", "-");

        parallelNumbers.forEach(number => {
            let input_item = Item.of(input_id, in_amount * number);
            let output_item = Item.of(output_id, out_amount * number);

            let timePrimitive = getScaledDuration(number, 8, 400, 200);
            let timeNether = getScaledDuration(number, 16, 350, 100);
            let timeEnd = getScaledDuration(number, 32, 300, 50);
            let timeMulti = getScaledDuration(number, 256, 150, 20);
            let timeAdv = getScaledDuration(number, 2048, 50, 1);

            if(number === 1)
            {
                if(recipe_tier <= 1)
                {
                    let primitive = catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:primitive_furnace", timePrimitive)
                        .requireItem(input_item, 5, 10)
                        .produceItem(output_item, 60, 10)
                        .id(`catalyst:mmr/primitive_furnace/custom/${clean_input}_to_${clean_output}`);
                    addFurnaceRequirements(primitive);
                }

                if(recipe_tier <= 2)
                {
                    let nether = catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:nether_furnace", timeNether)
                        .requireItem(input_item, 5, 10)
                        .produceItem(output_item, 60, 10)
                        .id(`catalyst:mmr/primitive_soul_furnace/custom/${clean_input}_to_${clean_output}`);
                    addFurnaceRequirements(nether);
                }

                if(recipe_tier <= 3)
                {
                    let end = catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:end_furnace", timeEnd)
                        .requireItem(input_item, 5, 10)
                        .produceItem(output_item, 60, 10)
                        .id(`catalyst:mmr/primitive_end_furnace/custom/${clean_input}_to_${clean_output}`);
                    addFurnaceRequirements(end);
                }

                if(recipe_tier <= 4)
                {
                    let multi = catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:multismelter", timeMulti)
                        .requireItem(input_item, 20, 20)
                        .produceItem(output_item, 90, 20)
                        .requireEnergyPerTick(energy)
                        .id(`catalyst:mmr/multismelter/custom/${clean_input}_to_${clean_output}`);
                    addFurnaceRequirements2(multi);
                }

                if(recipe_tier <= 5)
                {
                    let adv_multi = catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:advanced_multismelter", timeAdv)
                        .requireItem(input_item, 20, 20)
                        .produceItem(output_item, 90, 20)
                        .requireEnergyPerTick(energy)
                        .id(`catalyst:mmr/adv_multismelter/custom/${clean_input}_to_${clean_output}`);
                    addFurnaceRequirements2(adv_multi);
                }
            }
            else
            {
                if(recipe_tier <= 1 && number <= 8)
                {
                    let primitive = catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:primitive_furnace", timePrimitive)
                        .requireItem(input_item, 0, 10)
                        .produceItem(output_item, 40, 10)
                        .priority(number)
                        .hide()
                        .id(`catalyst:mmr/primitive_furnace/custom/${number}/${clean_input}_to_${clean_output}`);
                    addFurnaceRequirements(primitive);
                }

                if(recipe_tier <= 2 && number <= 16)
                {
                    let nether = catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:nether_furnace", timeNether)
                        .requireItem(input_item, 0, 10)
                        .produceItem(output_item, 40, 10)
                        .priority(number)
                        .hide()
                        .id(`catalyst:mmr/primitive_soul_furnace/custom/${number}/${clean_input}_to_${clean_output}`);
                    addFurnaceRequirements(nether);
                }

                if(recipe_tier <= 3 && number <= 32)
                {
                    let end = catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:end_furnace", timeEnd)
                        .requireItem(input_item, 0, 10)
                        .produceItem(output_item, 40, 10)
                        .priority(number)
                        .hide()
                        .id(`catalyst:mmr/primitive_end_furnace/custom/${number}/${clean_input}_to_${clean_output}`);
                    addFurnaceRequirements(end);
                }

                if(recipe_tier <= 4 && number <= 256)
                {
                    let multi = catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:multismelter", timeMulti)
                        .requireItem(input_item, 0, 10)
                        .produceItem(output_item, 40, 10)
                        .requireEnergyPerTick(energy)
                        .priority(number)
                        .hide()
                        .id(`catalyst:mmr/multismelter/custom/${number}/${clean_input}_to_${clean_output}`);
                    addFurnaceRequirements2(multi);
                }

                if(recipe_tier <= 5)
                {
                    let adv_multi = catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:advanced_multismelter", timeAdv)
                        .requireItem(input_item, 0, 10)
                        .produceItem(output_item, 40, 10)
                        .requireEnergyPerTick(energy)
                        .priority(number)
                        .hide()
                        .id(`catalyst:mmr/adv_multismelter/custom/${number}/${clean_input}_to_${clean_output}`);
                    addFurnaceRequirements2(adv_multi);
                }
            }
        });
    });

    let candidateRecipes = new Map();

    catalyst.forEachRecipe({ type: 'minecraft:smelting' }, recipe => {
        let rawOutput = recipe.originalRecipeResult;
        
        if(rawOutput.isEmpty() || rawOutput.id === "minecraft:barrier") return;

        let outputItemRaw = resolveUnifiedOutput(rawOutput);

        recipe.originalRecipeIngredients.forEach(ingredient => {
            ingredient.getItemIds().forEach(inputId => {
                if(blacklist.includes(inputId) || processedRecipes.has(inputId)) return;

                let currentPriority = candidateRecipes.has(inputId)
                    ? getModPriority(candidateRecipes.get(inputId).id)
                    : -1;

                let newPriority = getModPriority(outputItemRaw.id);

                if(!candidateRecipes.has(inputId) || newPriority > currentPriority)
                {
                    candidateRecipes.set(inputId, outputItemRaw);
                }
            });
        });
    });

    candidateRecipes.forEach((outputItemRaw, inputId) => {
        try
        {
            processedRecipes.add(inputId);

            let original_count = outputItemRaw.count;
            let multiplier = 1;
            let cleanInput = inputId.replace(":", "-");

            parallelNumbers.forEach(number => {
                let inputItem = Item.of(inputId, number);
                let outOverworld = outputItemRaw.copy();
                outOverworld.setCount(original_count * multiplier * number);
                let cleanOutput = outOverworld.id.replace(":", "-");

                let timePrimitive = getScaledDuration(number, 8, 400, 200);
                let timeNether = getScaledDuration(number, 16, 350, 100);
                let timeEnd = getScaledDuration(number, 32, 300, 50);
                let timeMulti = getScaledDuration(number, 256, 150, 20);
                let timeAdv = getScaledDuration(number, 2048, 50, 1);

                if(number > 1)
                {
                    if(number <= 8)
                    {
                        let recipe = catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:primitive_furnace", timePrimitive)
                            .requireItem(inputItem, 0, 10) 
                            .produceItem(outOverworld, 40, 10)
                            .priority(number)
                            .hide()
                            .id(`catalyst:mmr/primitive_furnace/${number}/${cleanInput}_to_${cleanOutput}`);
                        addFurnaceRequirements(recipe);
                    }

                    if(number <= 16)
                    {
                        let recipe = catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:nether_furnace", timeNether)
                            .requireItem(inputItem, 0, 10) 
                            .produceItem(outOverworld, 40, 10)
                            .priority(number)
                            .hide()
                            .id(`catalyst:mmr/primitive_soul_furnace/${number}/${cleanInput}_to_${cleanOutput}`);
                        addFurnaceRequirements(recipe);
                    }

                    if(number <= 32)
                    {
                        let recipe = catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:end_furnace", timeEnd)
                            .requireItem(inputItem, 0, 10) 
                            .produceItem(outOverworld, 40, 10)
                            .priority(number)
                            .hide()
                            .id(`catalyst:mmr/primitive_end_furnace/${number}/${cleanInput}_to_${cleanOutput}`);
                        addFurnaceRequirements(recipe);
                    }

                    if(number <= 256)
                    {
                        let recipe = catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:multismelter", timeMulti)
                            .requireItem(inputItem, 0, 10) 
                            .produceItem(outOverworld, 40, 10)
                            .requireEnergyPerTick(10000)
                            .priority(number)
                            .hide()
                            .id(`catalyst:mmr/multismelter/${number}/${cleanInput}_to_${cleanOutput}`);
                        addFurnaceRequirements2(recipe);
                    }

                    let advRecipe = catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:advanced_multismelter", timeAdv)
                        .requireItem(inputItem, 0, 10) 
                        .produceItem(outOverworld, 40, 10)
                        .requireEnergyPerTick(10000)
                        .priority(number)
                        .hide()
                        .id(`catalyst:mmr/adv_multismelter/${number}/${cleanInput}_to_${cleanOutput}`);
                    addFurnaceRequirements2(advRecipe);
                }
                else
                {
                    let recipe = catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:primitive_furnace", timePrimitive)
                        .requireItem(inputItem, 5, 10) 
                        .produceItem(outOverworld, 60, 10)
                        .id(`catalyst:mmr/primitive_furnace/${number}/${cleanInput}_to_${cleanOutput}`);
                    addFurnaceRequirements(recipe);

                    recipe = catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:nether_furnace", timeNether)
                        .requireItem(inputItem, 5, 10) 
                        .produceItem(outOverworld, 60, 10)
                        .id(`catalyst:mmr/primitive_soul_furnace/${number}/${cleanInput}_to_${cleanOutput}`);
                    addFurnaceRequirements(recipe);

                    recipe = catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:end_furnace", timeEnd)
                        .requireItem(inputItem, 5, 10) 
                        .produceItem(outOverworld, 60, 10)
                        .id(`catalyst:mmr/primitive_end_furnace/${number}/${cleanInput}_to_${cleanOutput}`);
                    addFurnaceRequirements(recipe);

                    recipe = catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:multismelter", timeMulti)
                        .requireItem(inputItem, 5, 10) 
                        .produceItem(outOverworld, 60, 10)
                        .requireEnergyPerTick(10000)
                        .jei()
                        .requireItem(inputItem, 20, 20) 
                        .produceItem(outOverworld, 90, 20)
                        .requireEnergyPerTick(10000)
                        .id(`catalyst:mmr/multismelter/${number}/${cleanInput}_to_${cleanOutput}`);
                    addFurnaceRequirements2(recipe);

                    recipe = catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:advanced_multismelter", timeAdv)
                        .requireItem(inputItem, 5, 10) 
                        .produceItem(outOverworld, 60, 10)
                        .requireEnergyPerTick(50000)
                        .jei()
                        .requireItem(inputItem, 20, 20) 
                        .produceItem(outOverworld, 90, 20)
                        .requireEnergyPerTick(50000)
                        .id(`catalyst:mmr/adv_multismelter/${number}/${cleanInput}_to_${cleanOutput}`);
                    addFurnaceRequirements2(recipe);
                }
            });
        }
        catch(error)
        {
            console.error(`[CatJS] Error creating recipe for item ${inputId}: ${error}`)
        }
    });

    console.log("[CatJS] Added Furnaces recipes from smelting");

});

MMREvents.extraTooltips(event => {
  // Primitive Furnace
  event.create("mmr:primitive_furnace", 'item')
    .add(Component.translatable("catalyst.mmr.tooltip.primitive_furnace.item"))
  event.create("mmr:primitive_furnace", 'gui')
    .add(Component.translatable("catalyst.mmr.tooltip.primitive_furnace.gui"))

  // Nether Furnace
  event.create("mmr:nether_furnace", 'item')
    .add(Component.translatable("catalyst.mmr.tooltip.nether_furnace.item"))
  event.create("mmr:nether_furnace", 'gui')
    .add(Component.translatable("catalyst.mmr.tooltip.nether_furnace.gui"))

  // End Furnace
  event.create("mmr:end_furnace", 'item')
    .add(Component.translatable("catalyst.mmr.tooltip.end_furnace.item"))
  event.create("mmr:end_furnace", 'gui')
    .add(Component.translatable("catalyst.mmr.tooltip.end_furnace.gui"))

  // Multismelter (16 recetas)
  event.create("mmr:multismelter", 'item')
    .add(Component.translatable("catalyst.mmr.tooltip.multismelter.item"))
  event.create("mmr:multismelter", 'gui')
    .add(Component.translatable("catalyst.mmr.tooltip.multismelter.gui"))

  // Advanced Multismelter
  event.create("mmr:advanced_multismelter", 'item')
    .add(Component.translatable("catalyst.mmr.tooltip.advanced_multismelter.item"))
  event.create("mmr:advanced_multismelter", 'gui')
    .add(Component.translatable("catalyst.mmr.tooltip.advanced_multismelter.gui"))
})

/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
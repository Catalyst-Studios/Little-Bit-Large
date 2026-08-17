/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
ServerEvents.recipes(catalyst => {

    let processedRecipes = new Set();
    let blacklist = [
        //emptiness list
    ]

    const addFurnaceRequirements = (recipeBuilder) => {
        let r = recipeBuilder
            .progressData(ProgressData.create().x(30).y(10))
            .width(80)
            .height(40)

        return r;
    };

    const addFurnaceRequirements2 = (recipeBuilder) => {
        let r = recipeBuilder
            .progressData(ProgressData.create().x(54).y(20))
            .width(110)
            .height(60)

        return r;
    };

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
        }
    ]

    custom_recipes.forEach(cr => {
        let input_id = cr.input;
        let output_id = cr.output;
        let in_amount = cr.in_amount !== undefined ? cr.in_amount : 1;
        let out_amount = cr.out_amount !== undefined ? cr.out_amount : 1;
        let recipe_tier = cr.tier !== undefined ? cr.tier : 0;
        let energy = cr.energy;

        let input_item = Item.of(input_id, in_amount);
        let output_item = Item.of(output_id, out_amount);

        if(recipe_tier <= 0) catalyst.smelting(output_item, input_item);

        processedRecipes.add(input_id);

        let clean_input = input_id.replace(":", "-");
        let clean_output = output_id.replace(":", "-");

        if(recipe_tier <= 1)
        {
            let primitive = catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:primitive_furnace", 400)
                .requireItem(input_item, 5, 10)
                .produceItem(output_item, 60, 10)
                .id(`catalyst:mmr/primitive_furnace/custom/${clean_input}_to_${clean_output}`);
            addFurnaceRequirements(primitive);
        }

        if(recipe_tier <= 2)
        {
            let nether = catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:nether_furnace", 350)
                .requireItem(input_item, 5, 10)
                .produceItem(output_item, 60, 10)
                .id(`catalyst:mmr/primitive_soul_furnace/custom/${clean_input}_to_${clean_output}`);
            addFurnaceRequirements(nether);
        }

        if(recipe_tier <= 3)
        {
            let end = catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:end_furnace", 300)
                .requireItem(input_item, 5, 10)
                .produceItem(output_item, 60, 10)
                .id(`catalyst:mmr/primitive_end_furnace/custom/${clean_input}_to_${clean_output}`);
            addFurnaceRequirements(end);
        }

        if(recipe_tier <= 4)
        {
            let multi = catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:multismelter", 150)
                .requireItem(input_item, 20, 20)
                .produceItem(output_item, 90, 20)
            
            if(energy !== undefined) multi.requireEnergyPerTick(energy)
            else multi.requireEnergyPerTick(10000)
            
            addFurnaceRequirements2(multi);

            multi.id(`catalyst:mmr/multismelter/custom/${clean_input}_to_${clean_output}`)
        }

        if(recipe_tier <= 5)
        {
            let adv_multi = catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:advanced_multismelter", 50)
                .requireItem(input_item, 20, 20)
                .produceItem(output_item, 90, 20)
            
            if(energy !== undefined) adv_multi.requireEnergyPerTick(energy)
            else adv_multi.requireEnergyPerTick(10000)

            addFurnaceRequirements2(adv_multi);

            adv_multi.id(`catalyst:mmr/adv_multismelter/custom/${clean_input}_to_${clean_output}`);
        }
    });

    catalyst.forEachRecipe({ type: 'minecraft:smelting' }, recipe => {
        let outputItemRaw = recipe.originalRecipeResult;
        
        if (outputItemRaw.isEmpty() || outputItemRaw.id === "minecraft:barrier") return;

        let original_count = outputItemRaw.count;
        let multiplier = 1;

        recipe.originalRecipeIngredients.forEach(ingredient => {
            ingredient.getItemIds().forEach(inputId => {
                try
                {
                    if(blacklist.includes(inputId)) return;
                    if(processedRecipes.has(inputId)) return;

                    processedRecipes.add(inputId);

                    [1, 4, 6, 8, 16, 32, 64, 128, 256, 512, 1024, 2048].forEach(number => {
                        let inputItem = Item.of(inputId, number);
                        if(number > 1)
                        {
                            
                            let outOverworld = outputItemRaw.copy();
                            outOverworld.setCount(original_count * multiplier * number);
                            let recipe;
                            if(number < 16)
                            {
                                recipe = catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:primitive_furnace", 400)
                                    .requireItem(inputItem, 0, 10) 
                                    .produceItem(outOverworld, 40, 10)
                                    .priority(number)
                                    .hide()
                                    .id(`catalyst:mmr/primitive_furnace/${number}/${inputId.replace(":", "-")}_to_${outOverworld.id.replace(":", "-")}`)

                                addFurnaceRequirements(recipe);

                                recipe = catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:nether_furnace", 350)
                                    .requireItem(inputItem, 0, 10) 
                                    .produceItem(outOverworld, 40, 10)
                                    .priority(number)
                                    .hide()
                                    .id(`catalyst:mmr/primitive_soul_furnace/${number}/${inputId.replace(":", "-")}_to_${outOverworld.id.replace(":", "-")}`)

                                addFurnaceRequirements(recipe);

                                recipe = catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:end_furnace", 300)
                                    .requireItem(inputItem, 0, 10) 
                                    .produceItem(outOverworld, 40, 10)
                                    .priority(number)
                                    .hide()
                                    .id(`catalyst:mmr/primitive_end_furnace/${number}/${inputId.replace(":", "-")}_to_${outOverworld.id.replace(":", "-")}`)

                                addFurnaceRequirements(recipe);
                            }

                            if(number < 512)
                            {
                                recipe = catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:multismelter", 150)
                                    .requireItem(inputItem, 0, 10) 
                                    .produceItem(outOverworld, 40, 10)
                                    .requireEnergyPerTick(10000)
                                    .priority(number)
                                    .hide()
                                    .id(`catalyst:mmr/multismelter/${number}/${inputId.replace(":", "-")}_to_${outOverworld.id.replace(":", "-")}`)

                                addFurnaceRequirements2(recipe);
                            }

                            recipe = catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:advanced_multismelter", 50)
                                .requireItem(inputItem, 0, 10) 
                                .produceItem(outOverworld, 40, 10)
                                .requireEnergyPerTick(10000)
                                .priority(number)
                                .hide()
                                .id(`catalyst:mmr/adv_multismelter/${number}/${inputId.replace(":", "-")}_to_${outOverworld.id.replace(":", "-")}`)

                            addFurnaceRequirements2(recipe);
                        }
                        else
                        {
                            let outOverworld = outputItemRaw.copy();
                            outOverworld.setCount(original_count * multiplier * number);

                            let recipe = catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:primitive_furnace", 400)
                                .requireItem(inputItem, 5, 10) 
                                .produceItem(outOverworld, 60, 10)
                                .id(`catalyst:mmr/primitive_furnace/${number}/${inputId.replace(":", "-")}_to_${outOverworld.id.replace(":", "-")}`)

                            addFurnaceRequirements(recipe);

                            recipe = catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:nether_furnace", 350)
                                .requireItem(inputItem, 5, 10) 
                                .produceItem(outOverworld, 60, 10)
                                .id(`catalyst:mmr/primitive_soul_furnace/${number}/${inputId.replace(":", "-")}_to_${outOverworld.id.replace(":", "-")}`)

                            addFurnaceRequirements(recipe);

                            recipe = catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:end_furnace", 300)
                                .requireItem(inputItem, 5, 10) 
                                .produceItem(outOverworld, 60, 10)
                                .id(`catalyst:mmr/primitive_end_furnace/${number}/${inputId.replace(":", "-")}_to_${outOverworld.id.replace(":", "-")}`)

                            addFurnaceRequirements(recipe);

                            recipe = catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:multismelter", 150)
                                .requireItem(inputItem, 5, 10) 
                                .produceItem(outOverworld, 60, 10)
                                .requireEnergyPerTick(10000)
                                .jei()
                                .requireItem(inputItem, 20, 20) 
                                .produceItem(outOverworld, 90, 20)
                                .requireEnergyPerTick(10000)
                                .id(`catalyst:mmr/multismelter/${number}/${inputId.replace(":", "-")}_to_${outOverworld.id.replace(":", "-")}`)

                            addFurnaceRequirements2(recipe);

                            recipe = catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:advanced_multismelter", 50)
                                .requireItem(inputItem, 5, 10) 
                                .produceItem(outOverworld, 60, 10)
                                .requireEnergyPerTick(50000)
                                .jei()
                                .requireItem(inputItem, 20, 20) 
                                .produceItem(outOverworld, 90, 20)
                                .requireEnergyPerTick(50000)
                                .id(`catalyst:mmr/adv_multismelter/${number}/${inputId.replace(":", "-")}_to_${outOverworld.id.replace(":", "-")}`)

                            addFurnaceRequirements2(recipe);
                        }
                    })

                }
                catch(error)
                {
                    console.error(`[CatJS] Error creating recipe for item ${inputId}: ${error}`);
                }
            });
        });
    });

    console.log("[CatJS] Added Furnaces recipes from smelting")

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
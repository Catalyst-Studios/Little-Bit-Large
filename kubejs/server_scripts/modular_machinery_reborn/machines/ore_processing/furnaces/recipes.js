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

                    [1, 4, 6, 8].forEach(number => {
                        let inputItem = Item.of(inputId, number);
                        if(number > 1)
                        {
                            let outOverworld = outputItemRaw.copy();
                            outOverworld.setCount(original_count * multiplier * number);

                            let recipe = catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:primitive_furnace", 400)
                                .requireItem(inputItem, 0, 10) 
                                .produceItem(outOverworld, 40, 10)
                                .priority(number)
                                .hide()
                                .id(`catalyst:mmr/primitive_furnace/${number}/${inputId.replace(":", "-")}_to_${outOverworld.id.replace(":", "-")}`)

                            addFurnaceRequirements(recipe);
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

    console.log("[CatJS] Added Primitive Furnace recipes from smelting")

});
/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
const optional_output = {
    item: 'catalystcore:elemental_emptiness_crystal',
    count: 1,
    chance: 0.05
};

ServerEvents.recipes(catalyst => {

    const fluids = [
        { fluid: 'industrialforegoing:ether_gas', amount: 5000, x: 20, y: 0},
        { fluid: 'industrialforegoing:meat', amount: 5000, x: 20, y: 20 },
        { fluid: 'minecraft:water', amount: 15000, x: 20, y: 40 },
        { fluid: 'oritech:still_sulfuric_acid', amount: 250, x: 40, y: 0 }
    ];

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
        {input: 'mekanism:dirty_netherite_scrap', output: 'minecraft:netherite_scrap', amount: 2},

        //MA
        {input: 'mysticalagriculture:inferium_ore', output: 'mysticalagriculture:inferium_essence', amount: 12},
        {input: 'mysticalagriculture:deepslate_inferium_ore', output: 'mysticalagriculture:inferium_essence', amount: 16},
        {input: 'mysticalagradditions:nether_inferium_ore', output: 'mysticalagriculture:inferium_essence', amount: 14},
        {input: 'mysticalagradditions:end_inferium_ore', output: 'mysticalagriculture:inferium_essence', amount: 24},
        {input: 'mysticalagriculture:prosperity_ore', output: 'mysticalagriculture:prosperity_shard', amount: 4},
        {input: 'mysticalagriculture:deepslate_prosperity_ore', output: 'mysticalagriculture:prosperity_shard', amount: 6},
        {input: 'mysticalagradditions:nether_prosperity_ore', output: 'mysticalagriculture:prosperity_shard', amount: 6},
        {input: 'mysticalagradditions:end_prosperity_ore', output: 'mysticalagriculture:prosperity_shard', amount: 12},
        
        {input: 'geore:ancient_debris_shard', output: 'minecraft:netherite_scrap', amount: 1},
        {input: 'malum:cthonic_gold_ore', output: 'malum:cthonic_gold_fragment', amount: 4},

        //Xychros blue
        {input: 'xycraft_world:xychorium_ore_stone_blue', output: 'xycraft_world:xychorium_gem_blue', amount: 10},
        {input: 'xycraft_world:xychorium_ore_deepslate_blue', output: 'xycraft_world:xychorium_gem_blue', amount: 10},
        {input: 'xycraft_world:xychorium_ore_kivi_blue', output: 'xycraft_world:xychorium_gem_blue', amount: 10},

        //Xychros green
        {input: 'xycraft_world:xychorium_ore_stone_green', output: 'xycraft_world:xychorium_gem_green', amount: 10},
        {input: 'xycraft_world:xychorium_ore_deepslate_green', output: 'xycraft_world:xychorium_gem_green', amount: 10},
        {input: 'xycraft_world:xychorium_ore_kivi_green', output: 'xycraft_world:xychorium_gem_green', amount: 10},

        //Xychros red
        {input: 'xycraft_world:xychorium_ore_stone_red', output: 'xycraft_world:xychorium_gem_red', amount: 10},
        {input: 'xycraft_world:xychorium_ore_deepslate_red', output: 'xycraft_world:xychorium_gem_red', amount: 10},
        {input: 'xycraft_world:xychorium_ore_kivi_red', output: 'xycraft_world:xychorium_gem_red', amount: 10},

        //Xychros dark
        {input: 'xycraft_world:xychorium_ore_stone_dark', output: 'xycraft_world:xychorium_gem_dark', amount: 10},
        {input: 'xycraft_world:xychorium_ore_deepslate_dark', output: 'xycraft_world:xychorium_gem_dark', amount: 10},
        {input: 'xycraft_world:xychorium_ore_kivi_dark', output: 'xycraft_world:xychorium_gem_dark', amount: 10},

        //Xychros light
        {input: 'xycraft_world:xychorium_ore_stone_light', output: 'xycraft_world:xychorium_gem_light', amount: 10},
        {input: 'xycraft_world:xychorium_ore_deepslate_light', output: 'xycraft_world:xychorium_gem_light', amount: 10},
        {input: 'xycraft_world:xychorium_ore_kivi_light', output: 'xycraft_world:xychorium_gem_light', amount: 10},

        //MC shards and pastel
        {input: 'minecraft:amethyst_cluster', output: 'minecraft:amethyst_shard', amount: 1},
        {input: 'pastel:topaz_cluster', output: 'pastel:topaz_shard', amount: 1},
        {input: 'pastel:citrine_cluster', output: 'pastel:citrine_shard', amount: 1},
        {input: 'pastel:onyx_cluster', output: 'pastel:onyx_shard', amount: 1},
        {input: 'pastel:moonstone_cluster', output: 'pastel:moonstone_shard', amount: 1},

        //Geore Shards
        {input: 'geore:tungsten_shard', output: 'eternalores:tungsten_ingot', amount: 1},
        {input: 'geore:monazite_shard', output: 'eternalores:gem_monazite', amount: 1},
        {input: 'geore:topaz_shard', output: 'pastel:topaz_powder', amount: 1},

        //Clusters
        {input: 'geore:coal_cluster', output: 'geore:coal_shard', amount: 1},
        {input: 'geore:copper_cluster', output: 'geore:copper_shard', amount: 1},
        {input: 'geore:diamond_cluster', output: 'geore:diamond_shard', amount: 1},
        {input: 'geore:emerald_cluster', output: 'geore:emerald_shard', amount: 1},
        {input: 'geore:gold_cluster', output: 'geore:gold_shard', amount: 1},
        {input: 'geore:iron_cluster', output: 'geore:iron_shard', amount: 1},
        {input: 'geore:lapis_cluster', output: 'geore:lapis_shard', amount: 1},
        {input: 'geore:quartz_cluster', output: 'geore:quartz_shard', amount: 1},
        {input: 'geore:redstone_cluster', output: 'geore:redstone_shard', amount: 1},
        {input: 'geore:ancient_debris_cluster', output: 'geore:ancient_debris_shard', amount: 1},
        {input: 'geore:ruby_cluster', output: 'geore:ruby_shard', amount: 1},
        {input: 'geore:sapphire_cluster', output: 'geore:sapphire_shard', amount: 1},
        {input: 'geore:topaz_cluster', output: 'geore:topaz_shard', amount: 1},
        {input: 'geore:zinc_cluster', output: 'geore:zinc_shard', amount: 1},
        {input: 'geore:uraninite_cluster', output: 'geore:uraninite_shard', amount: 1},
        {input: 'geore:black_quartz_cluster', output: 'geore:black_quartz_shard', amount: 1},
        {input: 'geore:monazite_cluster', output: 'geore:monazite_shard', amount: 1},
        {input: 'geore:aluminum_cluster', output: 'geore:aluminum_shard', amount: 1},
        {input: 'geore:lead_cluster', output: 'geore:lead_shard', amount: 1},
        {input: 'geore:nickel_cluster', output: 'geore:nickel_shard', amount: 1},
        {input: 'geore:osmium_cluster', output: 'geore:osmium_shard', amount: 1},
        {input: 'geore:platinum_cluster', output: 'geore:platinum_shard', amount: 1},
        {input: 'geore:silver_cluster', output: 'geore:silver_shard', amount: 1},
        {input: 'geore:tin_cluster', output: 'geore:tin_shard', amount: 1},
        {input: 'geore:tungsten_cluster', output: 'geore:tungsten_shard', amount: 1},
        {input: 'geore:uranium_cluster', output: 'geore:uranium_shard', amount: 1},

        //EternalOres
        {input: 'eternalores:apatite_cluster', output: 'eternalores:apatite_geoshard', amount: 1},
        {input: 'eternalores:ardite_cluster', output: 'eternalores:ardite_geoshard', amount: 1},
        {input: 'eternalores:beryllium_cluster', output: 'eternalores:beryllium_geoshard', amount: 1},
        {input: 'eternalores:catalyrium_cluster', output: 'eternalores:catalyrium_geoshard', amount: 1},
        {input: 'eternalores:cinnabar_cluster', output: 'eternalores:cinnabar_geoshard', amount: 1},
        {input: 'eternalores:cobalt_cluster', output: 'eternalores:cobalt_geoshard', amount: 1},
        {input: 'eternalores:fluorite_cluster', output: 'eternalores:fluorite_geoshard', amount: 1},
        {input: 'eternalores:gallium_cluster', output: 'eternalores:gallium_geoshard', amount: 1},
        {input: 'eternalores:garnet_cluster', output: 'eternalores:garnet_geoshard', amount: 1},
        {input: 'eternalores:pyrolite_cluster', output: 'eternalores:pyrolite_geoshard', amount: 1},
        {input: 'eternalores:peridot_cluster', output: 'eternalores:peridot_geoshard', amount: 1},
        {input: 'eternalores:pearl_cluster', output: 'eternalores:pearl_geoshard', amount: 1},
        {input: 'eternalores:onyx_cluster', output: 'eternalores:onyx_geoshard', amount: 1},
        {input: 'eternalores:obsidian_cluster', output: 'eternalores:obsidian_geoshard', amount: 1},
        {input: 'eternalores:niter_cluster', output: 'eternalores:niter_geoshard', amount: 1},
        {input: 'eternalores:necroticarite_cluster', output: 'eternalores:necroticarite_geoshard', amount: 1},
        {input: 'eternalores:jade_cluster', output: 'eternalores:jade_geoshard', amount: 1},
        {input: 'eternalores:iridium_cluster', output: 'eternalores:iridium_geoshard', amount: 1},
        {input: 'eternalores:sculkite_cluster', output: 'eternalores:sculkite_geoshard', amount: 1},
        {input: 'eternalores:tanzanite_cluster', output: 'eternalores:tanzanite_geoshard', amount: 1},
        {input: 'eternalores:titanium_cluster', output: 'eternalores:titanium_geoshard', amount: 1},
        {input: 'eternalores:ultimatitanium_cluster', output: 'eternalores:ultimatitanium_geoshard', amount: 1},
        {input: 'eternalores:zircon_cluster', output: 'eternalores:zircon_geoshard', amount: 1},

        //AE2 and JDT
        {input: 'justdirethings:time_crystal_cluster', output: 'justdirethings:time_crystal', amount: 1},
        {input: 'ae2:quartz_cluster', output: 'eternalores:gem_certus_quartz', amount: 1},
        {input: 'extendedae:entro_cluster', output: 'extendedae:entro_crystal', amount: 1},

        //The rest of the clusters
        {input: 'pastel:bismuth_cluster', output: 'pastel:bismuth_crystal', amount: 1},
        {input: 'pastel:malachite_cluster', output: 'pastel:pure_malachite', amount: 1},
        {input: 'pastel:azurite_cluster', output: 'pastel:pure_azurite', amount: 1},
        {input: 'pastel:bloodstone_cluster', output: 'pastel:pure_bloodstone', amount: 1},
        {input: 'pastel:coal_cluster', output: 'pastel:pure_coal', amount: 1},
        {input: 'pastel:copper_cluster', output: 'pastel:pure_copper', amount: 1},
        {input: 'pastel:iron_cluster', output: 'pastel:pure_iron', amount: 1},
        {input: 'pastel:gold_cluster', output: 'pastel:pure_gold', amount: 1},
        {input: 'pastel:lapis_cluster', output: 'pastel:pure_lapis', amount: 1},
        {input: 'pastel:redstone_cluster', output: 'pastel:pure_redstone', amount: 1},
        {input: 'pastel:diamond_cluster', output: 'pastel:pure_diamond', amount: 1},
        {input: 'pastel:emerald_cluster', output: 'pastel:pure_emerald', amount: 1},
        {input: 'pastel:prismarine_cluster', output: 'pastel:pure_prismarine', amount: 1},
        {input: 'pastel:quartz_cluster', output: 'pastel:pure_quartz', amount: 1},
        {input: 'pastel:glowstone_cluster', output: 'pastel:pure_glowstone', amount: 1},
        {input: 'pastel:zinc_cluster', output: 'pastel:pure_zinc', amount: 1},
        {input: 'pastel:netherite_scrap_cluster', output: 'pastel:pure_netherite_scrap', amount: 1},
        {input: 'pastel:echo_cluster', output: 'pastel:pure_echo', amount: 1},
        {input: 'pastel:fluix_cluster', output: 'eternalores:gem_fluix', amount: 1},
        {input: 'biomesoplenty:rose_quartz_cluster', output: 'biomesoplenty:rose_quartz_chunk', amount: 1},

        {input: 'pastel:pure_echo', output: 'minecraft:echo_shard', amount: 1}
    ];

    const blacklist = [
        'geore:unobtainium_shard',
        'geore:vibranium_shard',
        'geore:allthemodium_shard',
        'malum:cthonic_gold',
        'malum:cthonic_gold_fragment',
        'neovitae:dungeon_ore'
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
    const getBlastingResult = (inputId) => getRecipeOutput('minecraft:blasting', inputId);
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

        let blastingOutput = getBlastingResult(inputId);
        if(blastingOutput && !blastingOutput.isEmpty()) return blastingOutput;

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

        console.warn(`Error on Celestial Forge: ${inputId} and ${materialName}. Please report this error`)
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
                [1, 16, 32, 64, 128, 256].forEach(number => {
                    let inputItem = Item.of(inputId, number)
                    if(number > 1)
                    {
                        let outOverworld = outputItemRaw.copy();
                        outOverworld.setCount(original_count * multiplier * number);
                        //if(number === 256) console.log(outOverworld)
                        let recipe = catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:celestial_forge", 400)
                            .requireItem(inputItem, 40, 20) 
                            .produceItem(outOverworld, 90, 20)
                            .produceItem(Item.of(optional_output.item, optional_output.count), optional_output.chance, 90, 40)
                            .priority(number)
                            .requireFunctionOnEnd("celestial_end", number)
                            .hide()
                            .id(`catalyst:mmr/glorified_furnace/every_dimension/${number}/${inputId.replace(":", "-")}_to_${outOverworld.id.replace(":", "-")}`)

                        addCelestialRequirements(recipe);

                        let outNether = outputItemRaw.copy();
                        outNether.setCount(original_count * multiplier * 2 * number);

                        recipe = catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:celestial_forge", 300)
                            .requireItem(inputItem, 40, 20) 
                            .produceItem(outNether, 90, 20)
                            .produceItem(Item.of(optional_output.item, optional_output.count), optional_output.chance, 90, 40)
                            .dimensions(["minecraft:nether"])
                            .priority(number)
                            .requireFunctionOnEnd("celestial_end", number)
                            .hide()
                            .id(`catalyst:mmr/glorified_furnace/nether/${number}/${inputId.replace(":", "-")}_to_${outNether.id.replace(":", "-")}`)

                        addCelestialRequirements(recipe);

                        let outEnd = outputItemRaw.copy();
                        outEnd.setCount(original_count * multiplier * 4 * number);

                        recipe = catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:celestial_forge", 200)
                            .requireItem(inputItem, 40, 20) 
                            .produceItem(outEnd, 90, 20)
                            .produceItem(Item.of(optional_output.item, optional_output.count), optional_output.chance, 90, 40)
                            .dimensions(["minecraft:the_end"])
                            .priority(number)
                            .requireFunctionOnEnd("celestial_end", number)
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
                            .produceItem(Item.of(optional_output.item, optional_output.count), optional_output.chance, 90, 40)
                            .requireFunctionOnEnd("celestial_end", number)
                            .id(`catalyst:mmr/glorified_furnace/every_dimension/${number}/${inputId.replace(":", "-")}_to_${outOverworld.id.replace(":", "-")}`)

                        addCelestialRequirements(recipe);

                        let outNether = outputItemRaw.copy();
                        outNether.setCount(original_count * multiplier * 2 * number);

                        recipe = catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:celestial_forge", 300)
                            .requireItem(inputItem, 40, 20) 
                            .produceItem(outNether, 90, 20)
                            .produceItem(Item.of(optional_output.item, optional_output.count), optional_output.chance, 90, 40)
                            .dimensions(["minecraft:nether"])
                            .requireFunctionOnEnd("celestial_end", number)
                            .id(`catalyst:mmr/glorified_furnace/nether/${number}/${inputId.replace(":", "-")}_to_${outNether.id.replace(":", "-")}`)

                        addCelestialRequirements(recipe);

                        let outEnd = outputItemRaw.copy();
                        outEnd.setCount(original_count * multiplier * 4 * number);

                        recipe = catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:celestial_forge", 200)
                            .requireItem(inputItem, 40, 20) 
                            .produceItem(outEnd, 90, 20)
                            .produceItem(Item.of(optional_output.item, optional_output.count), optional_output.chance, 90, 40)
                            .dimensions(["minecraft:the_end"])
                            .requireFunctionOnEnd("celestial_end", number)
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
    createRecipesForTag("#catalyst:clusters", 4)
    createRecipesForTag('#pastel:pure_resources', 1);
    createRecipesForTag('pastel:pure_echo', 1);

    console.log("[CatJS] Added Celestial Forges recipes")

});

MMREvents.extraTooltips(event => {
    event.create("mmr:celestial_forge", 'item')
    .add(Component.translatable("catalyst.mmr.tooltip.celestial_forge.item"))

    event.create("mmr:celestial_forge", 'gui')
    .add(Component.translatable("catalyst.mmr.tooltip.celestial_forge.gui"))
})

MMREvents.recipeFunction("celestial_end", event => {
    let rolls = event.get(0);
    let machine = event.machine;

    for(let i = 0; i < rolls; i++)
    {
        if(Math.random() < optional_output.chance)
        {
            machine.addItem(Item.of(optional_output.item, optional_output.count));
        }
    }
});

/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
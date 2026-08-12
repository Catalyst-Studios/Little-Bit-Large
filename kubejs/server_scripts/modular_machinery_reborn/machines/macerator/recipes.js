ServerEvents.recipes(catalyst => {
    let DEBUG = false;

    let machine_id = "mmr:macerator";
    let recipe_counter = 0;

    let input_slot = { x: 25, y: 23 };
    let output_slot = { x: 85, y: 23 };

    let energyIn = { x: 0, y: 4 };
    let progressArrow = { x: 55, y: 23 };
    let time = 75;
    let energy = 500;

    let baseRecipe = () => {
        return catalyst.recipes.modular_machinery_reborn.machine_recipe(machine_id, time)
            .width(120)
            .height(60)
            .progressData(ProgressData.create().x(progressArrow.x).y(progressArrow.y))
            .requireEnergyPerTick(energy, energyIn.x, energyIn.y);
    };

    let isBlacklisted = (idStr) => {
        let [namespace, path] = idStr.split(':');

        if(namespace === 'enderio') return true;
        if(path.includes('pastel') || path.includes('cake')) return true;

        if(idStr === 'evilcraft:dull_dust') return true;
        if(idStr === 'mekanism:dust_lithium') return true;
        if(idStr === 'eternalores:dust') return true;

        if(namespace === 'occultism')
        {
            let allowedOccultism = [
                'occultism:crushed_ice',
                'occultism:crushed_packed_ice',
                'occultism:crushed_blue_ice',
                'occultism:echo_dust'
            ];
            if(!allowedOccultism.includes(idStr)) return true;
        }

        return false;
    };

    let getInputInfo = (dustIdStr) => {
        let customMappings = {
            'minecraft:glowstone_dust': { input: 'minecraft:glowstone', outputAmount: 4 },
            'evilcraft:dark_gem_crushed': { input: 'evilcraft:dark_gem', outputAmount: 1 },
            'railcraft:ender_dust': { input: 'minecraft:ender_pearl', outputAmount: 1 },
            'ae2:ender_dust': { input: 'minecraft:ender_pearl', outputAmount: 1 },
            'eternalores:lapis_dust': { input: 'minecraft:lapis_lazuli', outputAmount: 1 },
            'occultism:echo_dust': { input: 'minecraft:echo_shard', outputAmount: 1 },
            'eternalores:amethyst_dust': { input: 'minecraft:amethyst_shard', outputAmount: 1 },
            'eternalores:end_stone_dust': { input: 'minecraft:end_stone', outputAmount: 1 },
            'eternalores:blackstone_dust': { input: 'minecraft:blackstone', outputAmount: 1 },
            'eternalores:calcite_dust': { input: 'minecraft:calcite', outputAmount: 1 },
            'eternalores:emerald_dust': { input: 'minecraft:emerald', outputAmount: 1 },
            'eternalores:coal_dust': { input: 'minecraft:coal', outputAmount: 1 },
            'eternalores:quartz_dust': { input: 'minecraft:quartz', outputAmount: 1 },
            'eternalores:ender_pearl_dust': { input: 'minecraft:ender_pearl', outputAmount: 1 },
            'eternalores:prismarine_dust': { input: 'minecraft:prismarine_shard', outputAmount: 1 },
            'eternalores:diamond_dust': { input: 'minecraft:diamond', outputAmount: 1 },
            'eternalores:charcoal_dust': { input: 'minecraft:charcoal', outputAmount: 1 },
            'eternalores:andesite_dust': { input: 'minecraft:andesite', outputAmount: 1 },
            'eternalores:basalt_dust': { input: 'minecraft:basalt', outputAmount: 1 },
            'eternalores:brick_dust': { input: 'minecraft:brick', outputAmount: 1 },
            'eternalores:clay_dust': { input: 'minecraft:clay_ball', outputAmount: 1 },
            'eternalores:deepslate_dust': { input: 'minecraft:deepslate', outputAmount: 1 },
            'eternalores:diorite_dust': { input: 'minecraft:diorite', outputAmount: 1 },
            'eternalores:dripstone_dust': { input: 'minecraft:dripstone_block', outputAmount: 1 },
            'eternalores:flint_dust': { input: 'minecraft:flint', outputAmount: 1 },
            'eternalores:granite_dust': { input: 'minecraft:granite', outputAmount: 1 },
            'eternalores:gravel_dust': { input: 'minecraft:gravel', outputAmount: 1 },
            'eternalores:nautilus_dust': { input: 'minecraft:nautilus_shell', outputAmount: 1 },
            'eternalores:nether_brick_dust': { input: 'minecraft:nether_brick', outputAmount: 1 },
            'eternalores:nether_star_dust': { input: 'minecraft:nether_star', outputAmount: 1 },
            'eternalores:nether_wart_dust': { input: 'minecraft:nether_wart_block', outputAmount: 1 },
            'eternalores:netherrack_dust': { input: 'minecraft:netherrack', outputAmount: 1 },
            'eternalores:purpur_dust': { input: 'minecraft:purpur_block', outputAmount: 1 },
            'eternalores:red_sand_dust': { input: 'minecraft:red_sand', outputAmount: 1 },
            'eternalores:sand_dust': { input: 'minecraft:sand', outputAmount: 1 },
            'eternalores:sculk_dust': { input: 'minecraft:sculk', outputAmount: 1 },
            'eternalores:shulker_shell_dust': { input: 'minecraft:shulker_shell', outputAmount: 1 },
            'eternalores:soul_sand_dust': { input: 'minecraft:soul_sand', outputAmount: 1 },
            'eternalores:stone_dust': { input: 'minecraft:stone', outputAmount: 1 },
            'eternalores:tuff_dust': { input: 'minecraft:tuff', outputAmount: 1 },
            'eternalores:warped_nether_wart_dust': { input: 'minecraft:warped_wart_block', outputAmount: 1 },
            'eternalores:calcium_dust': { input: 'minecraft:bone', outputAmount: 1 },
            'eternalores:phosphorus_dust': { input: '#minecraft:leaves', outputAmount: 1 },
            'ae2:sky_dust': { input: 'ae2:sky_stone_block', outputAmount: 1 },
            'advanced_ae:quantum_infused_dust': { input: 'advanced_ae:quantum_alloy', outputAmount: 1 },
            'occultism:crushed_ice': { input: 'minecraft:ice', outputAmount: 1 },
            'occultism:crushed_packed_ice': { input: 'minecraft:packed_ice', outputAmount: 1 },
            'occultism:crushed_blue_ice': { input: 'minecraft:blue_ice', outputAmount: 1 },
        };

        if(customMappings[dustIdStr])
        {
            return customMappings[dustIdStr];
        }

        let [namespace, path] = dustIdStr.split(':');

        let material = path.replace('_dust', '').replace('dust_', '');
        
        if(dustIdStr === 'eternalores:sulfur_dust') material = 'sulfur';
        if(dustIdStr === 'eternalores:fluorite_dust') material = 'fluorite';

        let candidates = [
            `eternalores:gem_${material}`,
            `eternalores:${material}_ingot`,
            `eternalores:${material}_coal`,
            `minecraft:${material}_ingot`,
            `${namespace}:${material}_ingot`,
            `${namespace}:gem_${material}`,
            `${namespace}:${material}`
        ];

        for(let candidate of candidates)
        {
            if(Item.exists(candidate))
            {
                return { input: candidate, outputAmount: 1 };
            }
        }

        return null;
    };

    Ingredient.of('#c:dusts').getItemIds().forEach(dustId => {
        let idStr = dustId.toString();

        if(isBlacklisted(idStr))
        {
            if(DEBUG)
            {
                console.warn(`[CatJS] Dust omited by blacklist: ${idStr}`);
            }
            return;
        }

        let inputInfo = getInputInfo(idStr);
        if(!inputInfo)
        {
            if(DEBUG)
            {
                console.warn(`[CatJS] Couldn't find input ingredient: ${idStr}`);
            }
            return;
        }

        let recipe = baseRecipe();

        recipe.requireItem(Ingredient.of(inputInfo.input, 1), input_slot.x, input_slot.y);

        recipe.produceItem(Item.of(idStr, inputInfo.outputAmount), output_slot.x, output_slot.y);

        recipe.id(`catalyst:mmr/macerator/${recipe_counter}/${idStr.replace(':', '_')}`);
        recipe_counter++;
    });

    let eternalFormTypes = [
        { tag: '#c:gears', inputAmount: 1, outputAmount: 4 },
        { tag: '#c:plates', inputAmount: 1, outputAmount: 1 },
        { tag: '#c:rods', inputAmount: 2, outputAmount: 1 },
        { tag: '#c:foils', inputAmount: 2, outputAmount: 1 }
    ];

    eternalFormTypes.forEach(form => {
        Ingredient.of(form.tag).getItemIds().forEach(itemId => {
            if(itemId.namespace === 'eternalores')
            {
                let itemIdStr = itemId.toString();

                let material = itemId.path
                    .replace('gear_', '').replace('_gear', '')
                    .replace('plate_', '').replace('_plate', '')
                    .replace('rod_', '').replace('_rod', '')
                    .replace('foil_', '').replace('_foil', '');

                let dustId = `eternalores:${material}_dust`;

                if(Item.exists(dustId))
                {
                    let recipe = baseRecipe();
                    recipe.requireItem(Item.of(itemIdStr, form.inputAmount), input_slot.x, input_slot.y);
                    recipe.produceItem(Item.of(dustId, form.outputAmount), output_slot.x, output_slot.y);

                    recipe.id(`catalyst:mmr/macerator/${recipe_counter}/${itemIdStr.replace(':', '_')}_to_dust`);
                    recipe_counter++;
                }
                else if(DEBUG)
                {
                    console.warn(`[CatJS] No dust found for eternalores item: ${itemIdStr}`);
                }
            }
        });
    });

    let customRecipes = [
        { input: "#pastel:shooting_stars", output: 'pastel:star_fragment', extra: 'pastel:aether_vestiges', out_amount: 3, chance: 0.2 },
        { input: 'pastel:frostbite_crystal', output: 'pastel:frostbite_essence', out_amount: 18 },
        { input: 'pastel:blazing_crystal', output: 'pastel:incandescent_essence', out_amount: 18 },
        { input: 'eternalores:bismuth', output: 'eternalores:bismuth_dust', extra: 'pastel:resonance_shard', out_amount: 1, chance: 0.33 },
        { input: 'pastel:bismuth_crystal', output: 'eternalores:bismuth_dust', extra: 'pastel:resonance_shard', out_amount: 1, chance: 0.33 },
        { input: 'pastel:white_leaves', output: 'pastel:white_pigment', out_amount: 4 },
        { input: 'pastel:orange_leaves', output: 'pastel:orange_pigment', out_amount: 4 },
        { input: 'pastel:magenta_leaves', output: 'pastel:magenta_pigment', out_amount: 4 },
        { input: 'pastel:light_blue_leaves', output: 'pastel:light_blue_pigment', out_amount: 4 },
        { input: 'pastel:yellow_leaves', output: 'pastel:yellow_pigment', out_amount: 4 },
        { input: 'pastel:lime_leaves', output: 'pastel:lime_pigment', out_amount: 4 },
        { input: 'pastel:pink_leaves', output: 'pastel:pink_pigment', out_amount: 4 },
        { input: 'pastel:gray_leaves', output: 'pastel:gray_pigment', out_amount: 4 },
        { input: 'pastel:light_gray_leaves', output: 'pastel:light_gray_pigment', out_amount: 4 },
        { input: 'pastel:cyan_leaves', output: 'pastel:cyan_pigment', out_amount: 4 },
        { input: 'pastel:purple_leaves', output: 'pastel:purple_pigment', out_amount: 4 },
        { input: 'pastel:blue_leaves', output: 'pastel:blue_pigment', out_amount: 4 },
        { input: 'pastel:brown_leaves', output: 'pastel:brown_pigment', out_amount: 4 },
        { input: 'pastel:green_leaves', output: 'pastel:green_pigment', out_amount: 4 },
        { input: 'pastel:red_leaves', output: 'pastel:red_pigment', out_amount: 4 },
        { input: 'pastel:black_leaves', output: 'pastel:black_pigment', out_amount: 4 },
        { input: '#pastel:white_logs', output: 'pastel:white_pigment', out_amount: 8 },
        { input: '#pastel:orange_logs', output: 'pastel:orange_pigment', out_amount: 8 },
        { input: '#pastel:magenta_logs', output: 'pastel:magenta_pigment', out_amount: 8 },
        { input: '#pastel:light_blue_logs', output: 'pastel:light_blue_pigment', out_amount: 8 },
        { input: '#pastel:yellow_logs', output: 'pastel:yellow_pigment', out_amount: 8 },
        { input: '#pastel:lime_logs', output: 'pastel:lime_pigment', out_amount: 8 },
        { input: '#pastel:pink_logs', output: 'pastel:pink_pigment', out_amount: 8 },
        { input: '#pastel:gray_logs', output: 'pastel:gray_pigment', out_amount: 8 },
        { input: '#pastel:light_gray_logs', output: 'pastel:light_gray_pigment', out_amount: 8 },
        { input: '#pastel:cyan_logs', output: 'pastel:cyan_pigment', out_amount: 8 },
        { input: '#pastel:purple_logs', output: 'pastel:purple_pigment', out_amount: 8 },
        { input: '#pastel:blue_logs', output: 'pastel:blue_pigment', out_amount: 8 },
        { input: '#pastel:brown_logs', output: 'pastel:brown_pigment', out_amount: 8 },
        { input: '#pastel:green_logs', output: 'pastel:green_pigment', out_amount: 8 },
        { input: '#pastel:red_logs', output: 'pastel:red_pigment', out_amount: 8 },
        { input: '#pastel:black_logs', output: 'pastel:black_pigment', out_amount: 8 }
    ]

    customRecipes.forEach(rs => {
        let recipe = baseRecipe();
        let input_size = rs.in_amount ? rs.in_amount : 1
        let output_size = rs.out_amount ? rs.out_amount : 1

        recipe.requireItem(Ingredient.of(rs.input, input_size), input_slot.x, input_slot.y);
        recipe.produceItem(Item.of(rs.output, output_size), output_slot.x, output_slot.y);
        if(rs.extra)
        {
            recipe.produceItem(Item.of(rs.extra, 1), rs.chance, output_slot.x, (output_slot.y + 18));
        }

        recipe.id(`catalyst:mmr/macerator/${recipe_counter}/${rs.input.replace(':', '_').replace("#", "_")}_custom`);
        recipe_counter++;
    })

    console.log(`[CatJS] Finished macerator recipes`);
});
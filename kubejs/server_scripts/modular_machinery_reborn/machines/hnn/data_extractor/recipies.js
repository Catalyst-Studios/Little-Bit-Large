/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
ServerEvents.recipes(catalyst => {
    // Logic Constants
    const MAX_STACK = 64;
    const MIN_TIME = 2;
    const MAX_TIME = 128;

    /**
     * Fabrication logic for MMR Data Extractor
     * Calculates multipliers to maximize output up to 64 items, scaling time and energy.
     */
    const fabricate = (entity, catalystItem, outputItem, baseAmount) => {
        // Calculate max multiplier without exceeding stack size of 64
        const multiplier = Math.min(MAX_STACK, Math.floor(MAX_STACK / baseAmount));
        
        // Calculate final counts
        const totalOutput = Math.max(1, Math.min(MAX_STACK, multiplier * baseAmount));
        const totalInput = multiplier; // 1 prediction input per operation cycle
        
        // Calculate Time (Linear scaling based on multiplier)
        const time = MIN_TIME + Math.round(((multiplier - 1) * (MAX_TIME - MIN_TIME)) / (MAX_STACK - 1));
        
        // Calculate Energy (Maintains ~16k FE/t target based on time compression)
        const energy = multiplier * 256 * (MAX_TIME / time);

        // Register Recipe
        catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:data_extractor", time)
            .progressData(ProgressData.create().x(72).y(20))
            .width(130).height(60)
            .requireEnergyPerTick(energy, 0, 2)
            .requireItem(`${totalInput}x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:${entity}"]`, 30, 20)
            .requireItem(`${catalystItem}`, 50, 20)
            .produceItem(`${totalOutput}x ${outputItem}`, 98, 20)
            .id(`catalyst:mmr/data_extractor/${entity}`);   
    };

    // Recipe Definitions: [Entity ID, Catalyst Item, Output Item, Base Output Amount]
    const recipes = [
        /* dragon prediction */
        ['ender_dragon', 'minecraft:dragon_breath', 'minecraft:dragon_breath', 16],
        ['ender_dragon', 'minecraft:dragon_egg', 'minecraft:dragon_egg', 1],

        /* blaze prediction */
        ['blaze', 'minecraft:blaze_rod', 'minecraft:blaze_rod', 16],

        /* chicken prediction */
        ['chicken', 'minecraft:chicken', 'minecraft:chicken', 32],
        ['chicken', 'minecraft:feather', 'minecraft:feather', 24],

        /* cod prediction */
        ['cod', 'minecraft:cod', 'minecraft:cod', 32],
        ['cod', 'minecraft:bone_meal', 'minecraft:bone_meal', 2],

        /* cow prediction */
        ['cow', 'minecraft:leather', 'minecraft:leather', 24],
        ['cow', 'minecraft:beef', 'minecraft:beef', 32],

        /* creeper prediction */
        ['creeper', 'minecraft:gunpowder', 'minecraft:gunpowder', 32],
        ['creeper', 'minecraft:creeper_head', 'minecraft:creeper_head', 4],

        /* drowned prediction */
        ['drowned', 'minecraft:rotten_flesh', 'minecraft:rotten_flesh', 64],
        ['drowned', 'minecraft:copper_ingot', 'minecraft:copper_ingot', 8],

        /* elder_guardian prediction */
        ['elder_guardian', 'minecraft:cod', 'minecraft:cod', 16],
        ['elder_guardian', 'minecraft:salmon', 'minecraft:salmon', 2],
        ['elder_guardian', 'minecraft:pufferfish', 'minecraft:pufferfish', 2],
        ['elder_guardian', 'minecraft:tropical_fish', 'minecraft:tropical_fish', 2],
        ['elder_guardian', 'minecraft:prismarine_crystals', 'minecraft:prismarine_crystals', 8],
        ['elder_guardian', 'minecraft:prismarine_shard', 'minecraft:prismarine_shard', 24],
        ['elder_guardian', 'minecraft:wet_sponge', 'minecraft:wet_sponge', 32],

        /* enderman prediction */
        ['enderman', 'minecraft:ender_pearl', 'minecraft:ender_pearl', 16],
        ['enderman', 'minecraft:end_crystal', 'minecraft:end_crystal', 1],
        ['enderman', 'evilcraft:ender_tear', 'evilcraft:ender_tear', 4],

        /* evoker prediction */
        ['evoker', 'minecraft:emerald', 'minecraft:emerald', 16],

        /* ghast prediction */
        ['ghast', 'minecraft:ghast_tear', 'minecraft:ghast_tear', 16],
        ['ghast', 'minecraft:gunpowder', 'minecraft:gunpowder', 32],

        /* glow_squid prediction */
        ['glow_squid', 'minecraft:glow_ink_sac', 'minecraft:glow_ink_sac', 32],

        /* guardian prediction */
        ['guardian', 'minecraft:cod', 'minecraft:cod', 24],
        ['guardian', 'minecraft:prismarine_crystals', 'minecraft:prismarine_crystals', 16],

        /* hoglin prediction */
        ['hoglin', 'minecraft:porkchop', 'minecraft:porkchop', 32],
        ['hoglin', 'minecraft:leather', 'minecraft:leather', 16],

        /* iron_golem prediction */
        ['iron_golem', 'minecraft:iron_ingot', 'minecraft:iron_ingot', 32],
        ['iron_golem', 'minecraft:poppy', 'minecraft:poppy', 24],

        /* magma_cube prediction */
        ['magma_cube', 'minecraft:magma_cream', 'minecraft:magma_cream', 32],
        ['magma_cube', 'minecraft:magma_block', 'minecraft:magma_block', 8],
        ['magma_cube', 'ae2:magenta_lumen_paint_ball', 'minecraft:pearlescent_froglight', 8],
        ['magma_cube', 'ae2:lime_lumen_paint_ball', 'minecraft:verdant_froglight', 8],
        ['magma_cube', 'ae2:yellow_lumen_paint_ball', 'minecraft:ochre_froglight', 8],

        /* mooshroom prediction */
        ['mooshroom', 'minecraft:beef', 'minecraft:beef', 32],
        ['mooshroom', 'minecraft:leather', 'minecraft:leather', 24],
        ['mooshroom', 'minecraft:red_mushroom', 'minecraft:red_mushroom', 16],
        ['mooshroom', 'minecraft:brown_mushroom', 'minecraft:brown_mushroom', 16],

        /* phantom prediction */
        ['phantom', 'minecraft:phantom_membrane', 'minecraft:phantom_membrane', 8],

        /* pig prediction */
        ['pig', 'minecraft:porkchop', 'minecraft:porkchop', 32],

        /* polar_bear prediction */
        ['polar_bear', 'minecraft:cod', 'minecraft:cod', 32],
        ['polar_bear', 'minecraft:salmon', 'minecraft:salmon', 8],

        /* rabbit prediction */
        ['rabbit', 'minecraft:rabbit', 'minecraft:rabbit', 32],
        ['rabbit', 'minecraft:rabbit_hide', 'minecraft:rabbit_hide', 32],
        ['rabbit', 'minecraft:rabbit_foot', 'minecraft:rabbit_foot', 8],

        /* sheep prediction */
        ['sheep', 'minecraft:white_wool', 'minecraft:white_wool', 32],
        ['sheep', 'minecraft:orange_wool', 'minecraft:orange_wool', 32],
        ['sheep', 'minecraft:magenta_wool', 'minecraft:magenta_wool', 32],
        ['sheep', 'minecraft:light_blue_wool', 'minecraft:light_blue_wool', 32],
        ['sheep', 'minecraft:yellow_wool', 'minecraft:yellow_wool', 32],
        ['sheep', 'minecraft:lime_wool', 'minecraft:lime_wool', 32],
        ['sheep', 'minecraft:pink_wool', 'minecraft:pink_wool', 32],
        ['sheep', 'minecraft:gray_wool', 'minecraft:gray_wool', 32],
        ['sheep', 'minecraft:light_gray_wool', 'minecraft:light_gray_wool', 32],
        ['sheep', 'minecraft:cyan_wool', 'minecraft:cyan_wool', 32],
        ['sheep', 'minecraft:purple_wool', 'minecraft:purple_wool', 32],
        ['sheep', 'minecraft:blue_wool', 'minecraft:blue_wool', 32],
        ['sheep', 'minecraft:brown_wool', 'minecraft:brown_wool', 32],
        ['sheep', 'minecraft:green_wool', 'minecraft:green_wool', 32],
        ['sheep', 'minecraft:red_wool', 'minecraft:red_wool', 32],
        ['sheep', 'minecraft:black_wool', 'minecraft:black_wool', 32],
        ['sheep', 'minecraft:mutton', 'minecraft:mutton', 32],

        /* shulker prediction */
        ['shulker', 'minecraft:shulker_shell', 'minecraft:shulker_shell', 8],
        ['shulker', 'minecraft:end_rod', 'minecraft:end_rod', 4],

        /* skeleton prediction */
        ['skeleton', 'minecraft:arrow', 'minecraft:arrow', 32],
        ['skeleton', 'minecraft:bone', 'minecraft:bone', 24],
        ['skeleton', 'minecraft:skeleton_skull', 'minecraft:skeleton_skull', 4],

        /* slime prediction */
        ['slime', 'minecraft:slime_ball', 'minecraft:slime_ball', 32],
        ['slime', 'minecraft:slime_block', 'minecraft:slime_block', 8],

        /* snow_golem prediction */
        ['snow_golem', 'minecraft:snowball', 'minecraft:snowball', 32],

        /* spider prediction */
        ['spider', 'minecraft:string', 'minecraft:string', 32],
        ['spider', 'minecraft:spider_eye', 'minecraft:spider_eye', 16],
        ['spider', 'minecraft:cobweb', 'minecraft:cobweb', 4],

        /* squid prediction */
        ['squid', 'minecraft:ink_sac', 'minecraft:ink_sac', 32],

        /* vindicator prediction */
        ['vindicator', 'minecraft:emerald', 'minecraft:emerald', 8],

        /* warden prediction */
        ['warden', 'apothic_enchanting:warden_tendril', 'apothic_enchanting:warden_tendril', 1],
        ['warden', 'minecraft:echo_shard', 'minecraft:echo_shard', 2],

        /* witch prediction */
        ['witch', 'minecraft:redstone', 'minecraft:redstone', 16],
        ['witch', 'minecraft:glowstone_dust', 'minecraft:glowstone_dust', 16],
        ['witch', 'minecraft:sugar', 'minecraft:sugar', 32],
        ['witch', 'minecraft:stick', 'minecraft:stick', 32],
        ['witch', 'minecraft:spider_eye', 'minecraft:spider_eye', 16],
        ['witch', 'minecraft:glass_bottle', 'minecraft:glass_bottle', 16],

        /* wither prediction */
        ['wither', 'minecraft:nether_star', 'minecraft:nether_star', 1],
        ['wither', 'minecraft:poppy', 'minecraft:wither_rose', 16],

        /* wither_skeleton prediction */
        ['wither_skeleton', 'wstweaks:fragment', 'wstweaks:fragment', 32],
        ['wither_skeleton', 'minecraft:bone', 'minecraft:bone', 24],
        ['wither_skeleton', 'minecraft:coal', 'minecraft:coal', 32],
        ['wither_skeleton', 'minecraft:wither_skeleton_skull', 'minecraft:wither_skeleton_skull', 3],

        /* zombie prediction */
        ['zombie', 'minecraft:rotten_flesh', 'minecraft:rotten_flesh', 64],
        ['zombie', 'minecraft:iron_ingot', 'minecraft:iron_ingot', 8],
        ['zombie', 'minecraft:carrot', 'minecraft:carrot', 16],
        ['zombie', 'minecraft:potato', 'minecraft:potato', 16],

        /* zombified_piglin prediction */
        ['zombified_piglin', 'minecraft:rotten_flesh', 'minecraft:rotten_flesh', 64],
        ['zombified_piglin', 'minecraft:gold_ingot', 'minecraft:gold_ingot', 8],

        /* ars_nouveau - wilden prediction */
        ['ars_nouveau/wilden', 'ars_nouveau:wilden_spike', 'ars_nouveau:wilden_spike', 16],
        ['ars_nouveau/wilden', 'ars_nouveau:wilden_wing', 'ars_nouveau:wilden_wing', 16],
        ['ars_nouveau/wilden', 'ars_nouveau:wilden_horn', 'ars_nouveau:wilden_horn', 16],

        /* twilight_forest - alpha yeti prediction */
        ['twilightforest/alpha_yeti', 'twilightforest:ice_bomb', 'twilightforest:ice_bomb', 32],
        ['twilightforest/alpha_yeti', 'twilightforest:alpha_yeti_trophy', 'twilightforest:alpha_yeti_trophy', 4],
        ['twilightforest/alpha_yeti', 'twilightforest:alpha_yeti_fur', 'twilightforest:alpha_yeti_fur', 16],

        /* twilight_forest - carminite golem prediction */
        ['twilightforest/carminite_golem', 'twilightforest:towerwood', 'twilightforest:towerwood', 32],
        ['twilightforest/carminite_golem', 'minecraft:iron_ingot', 'minecraft:iron_ingot', 64],

        /* twilight_forest - death tome prediction */
        ['twilightforest/death_tome', 'minecraft:paper', 'minecraft:paper', 32],
        ['twilightforest/death_tome', 'minecraft:book', 'minecraft:book', 16],
        ['twilightforest/death_tome', 'twilightforest:magic_map_focus', 'twilightforest:magic_map_focus', 1],

        /* twilight_forest - giant prediction */
        ['twilightforest/giant', 'twilightforest:giant_cobblestone', 'twilightforest:giant_cobblestone', 16],
        ['twilightforest/giant', 'twilightforest:giant_log', 'twilightforest:giant_log', 16],
        ['twilightforest/giant', 'twilightforest:giant_leaves', 'twilightforest:giant_leaves', 16],
        ['twilightforest/giant', 'twilightforest:giant_obsidian', 'twilightforest:giant_obsidian', 16],

        /* twilight_forest - goblin prediction */
        ['twilightforest/goblin', 'twilightforest:armor_shard', 'twilightforest:armor_shard', 16],

        /* twilight_forest - helmet crab prediction */
        ['twilightforest/helmet_crab', 'twilightforest:armor_shard', 'twilightforest:armor_shard', 8],
        ['twilightforest/helmet_crab', 'minecraft:cod', 'minecraft:cod', 24],

        /* twilight_forest - hydra prediction */
        ['twilightforest/hydra', 'twilightforest:hydra_trophy', 'twilightforest:hydra_trophy', 4],
        ['twilightforest/hydra', 'twilightforest:hydra_chop', 'twilightforest:hydra_chop', 24],
        ['twilightforest/hydra', 'twilightforest:fiery_blood', 'twilightforest:fiery_blood', 16],

        /* twilight_forest - lich prediction */
        ['twilightforest/lich', 'twilightforest:lich_trophy', 'twilightforest:lich_trophy', 4],

        /* twilight_forest - minoshroom prediction */
        ['twilightforest/minoshroom', 'twilightforest:meef_stroganoff', 'twilightforest:meef_stroganoff', 16],
        ['twilightforest/minoshroom', 'twilightforest:minoshroom_trophy', 'twilightforest:minoshroom_trophy', 4],

        /* twilight_forest - minotaur prediction */
        ['twilightforest/minotaur', 'twilightforest:raw_meef', 'twilightforest:raw_meef', 32],
        ['twilightforest/minotaur', 'twilightforest:maze_map_focus', 'twilightforest:maze_map_focus', 1],

        /* twilight_forest - naga prediction */
        ['twilightforest/naga', 'twilightforest:naga_trophy', 'twilightforest:naga_trophy', 4],
        ['twilightforest/naga', 'twilightforest:naga_scale', 'twilightforest:naga_scale', 16],

        /* twilight_forest - raven prediction */
        ['twilightforest/raven', 'twilightforest:raven_feather', 'twilightforest:raven_feather', 16],

        /* twilight_forest - snow queen prediction */
        ['twilightforest/snow_queen', 'minecraft:snowball', 'minecraft:snowball', 32],
        ['twilightforest/snow_queen', 'minecraft:packed_ice', 'minecraft:packed_ice', 24],
        ['twilightforest/snow_queen', 'twilightforest:snow_queen_trophy', 'twilightforest:snow_queen_trophy', 4],

        /* twilight_forest - ur ghast prediction */
        ['twilightforest/ur_ghast', 'twilightforest:carminite', 'twilightforest:carminite', 32],
        ['twilightforest/ur_ghast', 'twilightforest:fiery_tears', 'twilightforest:fiery_tears', 16],
        ['twilightforest/ur_ghast', 'twilightforest:ur_ghast_trophy', 'twilightforest:ur_ghast_trophy', 4],

        /* yeti */
        ['twilightforest/yeti', 'twilightforest:arctic_fur', 'twilightforest:arctic_fur', 32]
    ];

    // Iterate through all standard recipes
    recipes.forEach(r => fabricate(r[0], r[1], r[2], r[3]));

    // Custom Recipe: Evoker Totem (Unique multipliers)
    catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:data_extractor", 8)
        .progressData(ProgressData.create().x(72).y(20))
        .width(130).height(60)
        .requireEnergyPerTick(16384, 0, 2)
        .requireItem(`16x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:evoker"]`, 30, 20)
        .requireItem(`minecraft:totem_of_undying`, 50, 20)
        .produceItem(`32x minecraft:totem_of_undying`, 98, 20)
        .id('catalyst:mmr/data_extractor/evoker_totem');

    /* Mobs not added:
       twilight deer, twilight fire beetle, twilight kobold, twilight redcap,
       twilight stable ice core, twilight troll, twilight winter wolf,
       twilight wraith, twilight druid skeleton, twilight towerwood borer
    */
});

/*
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
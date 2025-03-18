/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
ServerEvents.recipes(catalyst => {
    const maxAmount = 64;  // The upper cap for the output amount
    const minAmount = 1;   // The lower cap for the output amount (if needed)
    const mintime = 2;
    const maxtime = 128;

    // Function to fabricate a recipe with dynamic inputs and output multiplier logic
    function fabricate(input_entity, catalyst_item, output, output_amount) {
        // Calculate the maximum multiplier that would not exceed the maxAmount (64)
        const maxPossibleMultiplier = Math.floor(maxAmount / output_amount);

        // Ensure the multiplier doesn't exceed the max possible multiplier
        let finalMultiplier = Math.min(maxPossibleMultiplier, 64); // Limit to 64

        // Calculate the final output amount based on the multiplier
        let finalOutputAmount = finalMultiplier * output_amount;

        // If the result exceeds maxAmount, adjust it to be within limits
        if (finalOutputAmount > maxAmount) {
            finalOutputAmount = maxAmount;
        }

        // If the result is smaller than minAmount, adjust to be at least minAmount
        if (finalOutputAmount < minAmount) {
            finalOutputAmount = minAmount;
        }

        // Correct the capitalization: finalTime instead of finaltime
        let finaltime = mintime + Math.round(((finalMultiplier - 1) * (maxtime - mintime)) / (maxAmount - 1));

// Scaled input amount based on the output multiplier
        let finalInputAmount = finalOutputAmount / output_amount; // Input scales with the multiplier
        let finalEnergy = finalMultiplier * 256 * (maxtime / finaltime);


        // Define the recipe with dynamic inputs, output, and time
        catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:data_extractor", finaltime)
            .progressX(72)  // default 74
            .progressY(10)  // default 8
            .width(130)     // default 256
            .height(50)     // default 256
            .requireEnergy(finalEnergy, 0, 0)
            .requireItem(`${finalInputAmount}x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:${input_entity}"]`, 30, 10)
            .requireItem(`${catalyst_item}`, 50, 10)
            .produceItem(`${finalOutputAmount}x ${output}`, 98, 10);
    }

    // Example usage of fabricate function:
    // fabricate("example_entity", "example_item", "output_item", 5);

   /*dragon prediction*/
    fabricate('ender_dragon', 'minecraft:dragon_breath', 'minecraft:dragon_breath', 16);
    fabricate('ender_dragon', 'minecraft:dragon_egg', 'minecraft:dragon_egg', 1);

   /*blaze prediction*/
    fabricate('blaze', 'minecraft:blaze_rod', 'minecraft:blaze_rod', 16);

   /*chicken prediction*/
   fabricate('chicken', 'minecraft:chicken', 'minecraft:chicken', 32);
   fabricate('chicken', 'minecraft:feather', 'minecraft:feather', 24);

   /* cod prediction */
   fabricate('cod', 'minecraft:cod', 'minecraft:cod', 32);
   fabricate('cod', 'minecraft:bone_meal', 'minecraft:bone_meal', 2);

   /* cow prediction */
   fabricate('cow', 'minecraft:leather', 'minecraft:leather', 24);
   fabricate('cow', 'minecraft:beef', 'minecraft:beef', 32);

   /* creeper prediction */
   fabricate('creeper', 'minecraft:gunpowder', 'minecraft:gunpowder', 32);
   fabricate('creeper', 'minecraft:creeper_head', 'minecraft:creeper_head', 4);

   /* drowned prediction */
   fabricate('drowned', 'minecraft:rotten_flesh', 'minecraft:rotten_flesh', 64);
   fabricate('drowned', 'minecraft:copper_ingot', 'minecraft:copper_ingot', 8);

   /* elder_guardian prediction */
   fabricate('elder_guardian', 'minecraft:cod', 'minecraft:cod', 16);
   fabricate('elder_guardian', 'minecraft:salmon', 'minecraft:salmon', 2);
   fabricate('elder_guardian', 'minecraft:pufferfish', 'minecraft:pufferfish', 2);
   fabricate('elder_guardian', 'minecraft:tropical_fish', 'minecraft:tropical_fish', 2);
   fabricate('elder_guardian', 'minecraft:prismarine_crystals', 'minecraft:prismarine_crystals', 8);
   fabricate('elder_guardian', 'minecraft:prismarine_shard', 'minecraft:prismarine_shard', 24);
   fabricate('elder_guardian', 'minecraft:wet_sponge', 'minecraft:wet_sponge', 32);

   /* enderman prediction */
   fabricate('enderman', 'minecraft:ender_pearl', 'minecraft:ender_pearl', 16);
   fabricate('enderman', 'minecraft:end_crystal', 'minecraft:end_crystal', 1);
   fabricate('enderman', 'evilcraft:ender_tear', 'evilcraft:ender_tear', 4);

   /* evoker prediction */
   fabricate('evoker', 'minecraft:emerald', 'minecraft:emerald', 16);
   catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:data_extractor", 8)
               .progressX(72) // default 74
               .progressY(10) // default 8
               .width(130)    // default256
               .height(50)    // default 256
               .requireEnergy(16384, 0, 0)
               .requireItem(`16x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:evoker"]`, 30, 10)
               .requireItem(`minecraft:totem_of_undying`, 50, 10)
               .produceItem(`32x minecraft:totem_of_undying`, 98, 10);

   /* ghast prediction */
   fabricate('ghast', 'minecraft:ghast_tear', 'minecraft:ghast_tear', 16);
   fabricate('ghast', 'minecraft:gunpowder', 'minecraft:gunpowder', 32);

   /* glow_squid prediction */
   fabricate('glow_squid', 'minecraft:glow_ink_sac', 'minecraft:glow_ink_sac', 32);

   /* guardian prediction */
   fabricate('guardian', 'minecraft:cod', 'minecraft:cod', 24);
   fabricate('guardian', 'minecraft:prismarine_crystals', 'minecraft:prismarine_crystals', 16);

   /* hoglin prediction */
   fabricate('hoglin', 'minecraft:porkchop', 'minecraft:porkchop', 32);
   fabricate('hoglin', 'minecraft:leather', 'minecraft:leather', 16);

   /* iron_golem prediction */
   fabricate('iron_golem', 'minecraft:iron_ingot', 'minecraft:iron_ingot', 32);
   fabricate('iron_golem', 'minecraft:poppy', 'minecraft:poppy', 24);

   /* magma_cube prediction */
   fabricate('magma_cube', 'minecraft:magma_cream', 'minecraft:magma_cream', 32);
   fabricate('magma_cube', 'minecraft:magma_block', 'minecraft:magma_block', 8);
   fabricate('magma_cube', 'ae2:magenta_lumen_paint_ball','minecraft:pearlescent_froglight',  8);
   fabricate('magma_cube', 'ae2:lime_lumen_paint_ball','minecraft:verdant_froglight',  8);
   fabricate('magma_cube', 'ae2:yellow_lumen_paint_ball','minecraft:ochre_froglight',  8);

   /* mooshroom prediction */
   fabricate('mooshroom', 'minecraft:beef', 'minecraft:beef', 32);
   fabricate('mooshroom', 'minecraft:leather', 'minecraft:leather', 24);
   fabricate('mooshroom', 'minecraft:red_mushroom', 'minecraft:red_mushroom', 16);
   fabricate('mooshroom', 'minecraft:brown_mushroom', 'minecraft:brown_mushroom', 16);

   /* phantom prediction */
   fabricate('phantom', 'minecraft:phantom_membrane', 'minecraft:phantom_membrane', 8);

   /* pig prediction */
   fabricate('pig', 'minecraft:porkchop', 'minecraft:porkchop', 32);

   /* polar_bear prediction */
   fabricate('polar_bear', 'minecraft:cod', 'minecraft:cod', 32);
   fabricate('polar_bear', 'minecraft:salmon', 'minecraft:salmon', 8);

   /* rabbit prediction */
   fabricate('rabbit', 'minecraft:rabbit', 'minecraft:rabbit', 32);
   fabricate('rabbit', 'minecraft:rabbit_hide', 'minecraft:rabbit_hide', 32);
   fabricate('rabbit', 'minecraft:rabbit_foot', 'minecraft:rabbit_foot', 8);

   /* sheep prediction */
   fabricate('sheep', 'minecraft:white_wool', 'minecraft:white_wool', 32);
   fabricate('sheep', 'minecraft:orange_wool', 'minecraft:orange_wool', 32);
   fabricate('sheep', 'minecraft:magenta_wool', 'minecraft:magenta_wool', 32);
   fabricate('sheep', 'minecraft:light_blue_wool', 'minecraft:light_blue_wool', 32);
   fabricate('sheep', 'minecraft:yellow_wool', 'minecraft:yellow_wool', 32);
   fabricate('sheep', 'minecraft:lime_wool', 'minecraft:lime_wool', 32);
   fabricate('sheep', 'minecraft:pink_wool', 'minecraft:pink_wool', 32);
   fabricate('sheep', 'minecraft:gray_wool', 'minecraft:gray_wool', 32);
   fabricate('sheep', 'minecraft:light_gray_wool', 'minecraft:light_gray_wool', 32);
   fabricate('sheep', 'minecraft:cyan_wool', 'minecraft:cyan_wool', 32);
   fabricate('sheep', 'minecraft:purple_wool', 'minecraft:purple_wool', 32);
   fabricate('sheep', 'minecraft:blue_wool', 'minecraft:blue_wool', 32);
   fabricate('sheep', 'minecraft:brown_wool', 'minecraft:brown_wool', 32);
   fabricate('sheep', 'minecraft:green_wool', 'minecraft:green_wool', 32);
   fabricate('sheep', 'minecraft:red_wool', 'minecraft:red_wool', 32);
   fabricate('sheep', 'minecraft:black_wool', 'minecraft:black_wool', 32);
   fabricate('sheep', 'minecraft:mutton', 'minecraft:mutton', 32);

/* shulker prediction */
fabricate('shulker', 'minecraft:shulker_shell', 'minecraft:shulker_shell', 8);
fabricate('shulker', 'minecraft:end_rod', 'minecraft:end_rod', 4);

/* skeleton prediction */
fabricate('skeleton', 'minecraft:arrow', 'minecraft:arrow', 32);
fabricate('skeleton', 'minecraft:bone', 'minecraft:bone', 24);
fabricate('skeleton', 'minecraft:skeleton_skull', 'minecraft:skeleton_skull', 4);

/* slime prediction */
fabricate('slime', 'minecraft:slime_ball', 'minecraft:slime_ball', 32);
fabricate('slime', 'minecraft:slime_block', 'minecraft:slime_block', 8);

/* snow_golem prediction */
fabricate('snow_golem', 'minecraft:snowball', 'minecraft:snowball', 32);

/* spider prediction */
fabricate('spider', 'minecraft:string', 'minecraft:string', 32);
fabricate('spider', 'minecraft:spider_eye', 'minecraft:spider_eye', 16);
fabricate('spider', 'minecraft:cobweb', 'minecraft:cobweb', 4);

/* squid prediction */
fabricate('squid', 'minecraft:ink_sac', 'minecraft:ink_sac', 32);

/* vindicator prediction */
fabricate('vindicator', 'minecraft:emerald', 'minecraft:emerald', 8);

/* warden prediction */
fabricate('warden', 'apothic_enchanting:warden_tendril', 'apothic_enchanting:warden_tendril', 1);
fabricate('warden', 'minecraft:echo_shard', 'minecraft:echo_shard', 2);

/* witch prediction */
fabricate('witch', 'minecraft:redstone', 'minecraft:redstone', 16);
fabricate('witch', 'minecraft:glowstone_dust', 'minecraft:glowstone_dust', 16);
fabricate('witch', 'minecraft:sugar', 'minecraft:sugar', 32);
fabricate('witch', 'minecraft:stick', 'minecraft:stick', 32);
fabricate('witch', 'minecraft:spider_eye', 'minecraft:spider_eye', 16);
fabricate('witch', 'minecraft:glass_bottle', 'minecraft:glass_bottle', 16);

/* wither prediction */
fabricate('wither', 'minecraft:nether_star', 'minecraft:nether_star', 1);
fabricate('wither', 'minecraft:poppy', 'minecraft:wither_rose', 16);

/* wither_skeleton prediction */
fabricate('wither_skeleton', 'wstweaks:fragment', 'wstweaks:fragment', 32);
fabricate('wither_skeleton', 'minecraft:bone', 'minecraft:bone', 24);
fabricate('wither_skeleton', 'minecraft:coal', 'minecraft:coal', 32);
fabricate('wither_skeleton', 'minecraft:wither_skeleton_skull', 'minecraft:wither_skeleton_skull', 3);

/* zombie prediction */
fabricate('zombie', 'minecraft:rotten_flesh', 'minecraft:rotten_flesh', 64);
fabricate('zombie', 'minecraft:iron_ingot', 'minecraft:iron_ingot', 8);
fabricate('zombie', 'minecraft:carrot', 'minecraft:carrot', 16);
fabricate('zombie', 'minecraft:potato', 'minecraft:potato', 16);

/* zombified_piglin prediction */
fabricate('zombified_piglin', 'minecraft:rotten_flesh', 'minecraft:rotten_flesh', 64);
fabricate('zombified_piglin', 'minecraft:gold_ingot', 'minecraft:gold_ingot', 8);

/* ars_nouveau - wilden prediction */
fabricate('ars_nouveau/wilden', 'ars_nouveau:wilden_spike', 'ars_nouveau:wilden_spike', 16);
fabricate('ars_nouveau/wilden', 'ars_nouveau:wilden_wing', 'ars_nouveau:wilden_wing', 16);
fabricate('ars_nouveau/wilden', 'ars_nouveau:wilden_horn', 'ars_nouveau:wilden_horn', 16);

/* twilight_forest - alpha yeti prediction */
fabricate('twilightforest/alpha_yeti', 'twilightforest:ice_bomb', 'twilightforest:ice_bomb', 32);
fabricate('twilightforest/alpha_yeti', 'twilightforest:alpha_yeti_trophy', 'twilightforest:alpha_yeti_trophy', 4);
fabricate('twilightforest/alpha_yeti', 'twilightforest:alpha_yeti_fur', 'twilightforest:alpha_yeti_fur', 16);

/* twilight_forest - carminite golem prediction */
fabricate('twilightforest/carminite_golem', 'twilightforest:towerwood', 'twilightforest:towerwood', 32);
fabricate('twilightforest/carminite_golem', 'minecraft:iron_ingot', 'minecraft:iron_ingot', 64);

/* twilight_forest - death tome prediction */
fabricate('twilightforest/death_tome', 'minecraft:paper', 'minecraft:paper', 32);
fabricate('twilightforest/death_tome', 'minecraft:book', 'minecraft:book', 16);
fabricate('twilightforest/death_tome', 'twilightforest:magic_map_focus', 'twilightforest:magic_map_focus', 1);

/* twilight_forest - giant prediction */
fabricate('twilightforest/giant', 'twilightforest:giant_cobblestone', 'twilightforest:giant_cobblestone', 16);
fabricate('twilightforest/giant', 'twilightforest:giant_log', 'twilightforest:giant_log', 16);
fabricate('twilightforest/giant', 'twilightforest:giant_leaves', 'twilightforest:giant_leaves', 16);
fabricate('twilightforest/giant', 'twilightforest:giant_obsidian', 'twilightforest:giant_obsidian', 16);

/* twilight_forest - goblin prediction */
fabricate('twilightforest/goblin', 'twilightforest:armor_shard', 'twilightforest:armor_shard', 16);

/* twilight_forest - helmet crab prediction */
fabricate('twilightforest/helmet_crab', 'twilightforest:armor_shard', 'twilightforest:armor_shard', 8);
fabricate('twilightforest/helmet_crab', 'minecraft:cod', 'minecraft:cod', 24);

/* twilight_forest - hydra prediction */
fabricate('twilightforest/hydra', 'twilightforest:hydra_trophy', 'twilightforest:hydra_trophy', 4);
fabricate('twilightforest/hydra', 'twilightforest:hydra_chop', 'twilightforest:hydra_chop', 24);
fabricate('twilightforest/hydra', 'twilightforest:fiery_blood', 'twilightforest:fiery_blood', 16);

/* twilight_forest - lich prediction */
fabricate('twilightforest/lich', 'twilightforest:lich_trophy', 'twilightforest:lich_trophy', 4);

/* twilight_forest - minoshroom prediction */
fabricate('twilightforest/minoshroom', 'twilightforest:meef_stroganoff', 'twilightforest:meef_stroganoff', 16);
fabricate('twilightforest/minoshroom', 'twilightforest:minoshroom_trophy', 'twilightforest:minoshroom_trophy', 4);

/* twilight_forest - minotaur prediction */
fabricate('twilightforest/minotaur', 'twilightforest:raw_meef', 'twilightforest:raw_meef', 32);
fabricate('twilightforest/minotaur', 'twilightforest:maze_map_focus', 'twilightforest:maze_map_focus', 1);

/* twilight_forest - naga prediction */
fabricate('twilightforest/naga', 'twilightforest:naga_trophy', 'twilightforest:naga_trophy', 4);
fabricate('twilightforest/naga', 'twilightforest:naga_scale', 'twilightforest:naga_scale', 16);

/* twilight_forest - raven prediction */
fabricate('twilightforest/raven', 'twilightforest:raven_feather', 'twilightforest:raven_feather', 16);

/* twilight_forest - snow queen prediction */
fabricate('twilightforest/snow_queen', 'minecraft:snowball', 'minecraft:snowball', 32);
fabricate('twilightforest/snow_queen', 'minecraft:packed_ice', 'minecraft:packed_ice', 24);
fabricate('twilightforest/snow_queen', 'twilightforest:snow_queen_trophy', 'twilightforest:snow_queen_trophy', 4);

/* twilight_forest - ur ghast prediction */
fabricate('twilightforest/ur_ghast', 'twilightforest:carminite', 'twilightforest:carminite', 32);
fabricate('twilightforest/ur_ghast', 'twilightforest:fiery_tears', 'twilightforest:fiery_tears', 16);
fabricate('twilightforest/ur_ghast', 'twilightforest:ur_ghast_trophy', 'twilightforest:ur_ghast_trophy', 4);

/*yeti*/
fabricate('twilightforest/yeti', 'twilightforest:arctic_fur', 'twilightforest:arctic_fur', 32);
 /*mobs not added
   twilight deer
   twilight fire beetle
   twilight kobold
   twilight redcap
   twilight stable ice core
   twilight troll
   twilight winter wolf
   twilight wraith
   twilight druid skeleton
   twilight towerwood borer
   */
});

  /*
   This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
   It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
   */
/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
ServerEvents.recipes(catalyst => {

    /**
     * We basically form a group
     * Format: "<Model to use>": [
     * "<Output>", <quantity>, <prediction cost>, "<input, if empty = <Output>>"
     * ]
     */
    const mobRecipes = {
        "hostilenetworks:ender_dragon": [
            ["minecraft:dragon_breath", 64, 4],
            ["minecraft:dragon_egg", 64, 64]
        ],
        "hostilenetworks:blaze": [
            ["minecraft:blaze_rod", 64, 4]
        ],
        "hostilenetworks:chicken": [
            ["minecraft:chicken", 64, 2],
            ["minecraft:feather", 48, 2]
        ],
        "hostilenetworks:cod": [
            ["minecraft:cod", 64, 2],
            ["minecraft:bone_meal", 64, 32]
        ],
        "hostilenetworks:cow": [
            ["minecraft:leather", 48, 2],
            ["minecraft:beef", 64, 2]
        ],
        "hostilenetworks:creeper": [
            ["minecraft:gunpowder", 64, 2],
            ["minecraft:creeper_head", 64, 16]
        ],
        "hostilenetworks:drowned": [
            ["minecraft:rotten_flesh", 64, 1],
            ["minecraft:copper_ingot", 64, 8]
        ],
        "hostilenetworks:elder_guardian": [
            ["minecraft:cod", 64, 4],
            ["minecraft:salmon", 64, 32],
            ["minecraft:pufferfish", 64, 32],
            ["minecraft:tropical_fish", 64, 32],
            ["minecraft:prismarine_crystals", 64, 8],
            ["minecraft:prismarine_shard", 48, 2],
            ["minecraft:wet_sponge", 64, 2]
        ],
        "hostilenetworks:enderman": [
            ["minecraft:ender_pearl", 16, 1],
            ["minecraft:end_crystal", 64, 64],
            ["evilcraft:ender_tear", 16, 16]
        ],
        "hostilenetworks:evoker": [
            ["minecraft:emerald", 64, 4]
        ],
        "hostilenetworks:ghast": [
            ["minecraft:ghast_tear", 64, 4],
            ["minecraft:gunpowder", 64, 2]
        ],
        "hostilenetworks:glow_squid": [
            ["minecraft:glow_ink_sac", 64, 2]
        ],
        "hostilenetworks:guardian": [
            ["minecraft:cod", 48, 2],
            ["minecraft:prismarine_crystals", 64, 4]
        ],
        "hostilenetworks:hoglin": [
            ["minecraft:porkchop", 64, 2],
            ["minecraft:leather", 64, 4]
        ],
        "hostilenetworks:iron_golem": [
            ["minecraft:iron_ingot", 64, 2],
            ["minecraft:poppy", 48, 2]
        ],
        "hostilenetworks:magma_cube": [
            ["minecraft:magma_cream", 64, 2],
            ["minecraft:magma_block", 64, 8],
            ["minecraft:pearlescent_froglight", 64, 8, "64x ae2:magenta_lumen_paint_ball"],
            ["minecraft:verdant_froglight", 64, 8, "64x ae2:lime_lumen_paint_ball"],
            ["minecraft:ochre_froglight", 64, 8, "64x ae2:yellow_lumen_paint_ball"]
        ],
        "hostilenetworks:mooshroom": [
            ["minecraft:beef", 64, 2],
            ["minecraft:leather", 48, 2],
            ["minecraft:red_mushroom", 64, 4],
            ["minecraft:brown_mushroom", 64, 4]
        ],
        "hostilenetworks:phantom": [
            ["minecraft:phantom_membrane", 64, 8]
        ],
        "hostilenetworks:pig": [
            ["minecraft:porkchop", 64, 2]
        ],
        "hostilenetworks:polar_bear": [
            ["minecraft:cod", 64, 2],
            ["minecraft:salmon", 64, 8]
        ],
        "hostilenetworks:rabbit": [
            ["minecraft:rabbit", 64, 2],
            ["minecraft:rabbit_hide", 64, 2],
            ["minecraft:rabbit_foot", 64, 8]
        ],
        "hostilenetworks:sheep": [
            ["minecraft:white_wool", 64, 2],
            ["minecraft:orange_wool", 64, 2],
            ["minecraft:magenta_wool", 64, 2],
            ["minecraft:light_blue_wool", 64, 2],
            ["minecraft:yellow_wool", 64, 2],
            ["minecraft:lime_wool", 64, 2],
            ["minecraft:pink_wool", 64, 2],
            ["minecraft:gray_wool", 64, 2],
            ["minecraft:light_gray_wool", 64, 2],
            ["minecraft:cyan_wool", 64, 2],
            ["minecraft:purple_wool", 64, 2],
            ["minecraft:blue_wool", 64, 2],
            ["minecraft:brown_wool", 64, 2],
            ["minecraft:green_wool", 64, 2],
            ["minecraft:red_wool", 64, 2],
            ["minecraft:black_wool", 64, 2],
            ["minecraft:mutton", 64, 2]
        ],
        "hostilenetworks:shulker": [
            ["minecraft:shulker_shell", 64, 8],
            ["minecraft:end_rod", 64, 16]
        ],
        "hostilenetworks:skeleton": [
            ["minecraft:arrow", 64, 2],
            ["minecraft:bone", 48, 2],
            ["minecraft:skeleton_skull", 64, 16]
        ],
        "hostilenetworks:slime": [
            ["minecraft:slime_ball", 64, 2],
            ["minecraft:slime_block", 64, 8]
        ],
        "hostilenetworks:snow_golem": [
            ["minecraft:snowball", 16, 2]
        ],
        "hostilenetworks:spider": [
            ["minecraft:string", 64, 2],
            ["minecraft:spider_eye", 64, 4],
            ["minecraft:cobweb", 64, 16]
        ],
        "hostilenetworks:squid": [
            ["minecraft:ink_sac", 64, 2]
        ],
        "hostilenetworks:vindicator": [
            ["minecraft:emerald", 64, 8]
        ],
        "hostilenetworks:warden": [
            ["apothic_enchanting:warden_tendril", 64, 64],
            ["minecraft:echo_shard", 64, 32]
        ],
        "hostilenetworks:witch": [
            ["minecraft:redstone", 64, 4],
            ["minecraft:glowstone_dust", 64, 4],
            ["minecraft:sugar", 64, 2],
            ["minecraft:stick", 64, 2],
            ["minecraft:spider_eye", 64, 4],
            ["minecraft:glass_bottle", 64, 4]
        ],
        "hostilenetworks:wither": [
            ["minecraft:nether_star", 64, 64],
            ["minecraft:wither_rose", 64, 4, "minecraft:poppy"]
        ],
        "hostilenetworks:wither_skeleton": [
            ["wstweaks:fragment", 64, 2],
            ["minecraft:bone", 48, 2],
            ["minecraft:coal", 64, 2],
            ["minecraft:wither_skeleton_skull", 63, 21]
        ],
        "hostilenetworks:zombie": [
            ["minecraft:rotten_flesh", 64, 1],
            ["minecraft:iron_ingot", 64, 8],
            ["minecraft:carrot", 64, 4],
            ["minecraft:potato", 64, 4]
        ],
        "hostilenetworks:zombified_piglin": [
            ["minecraft:rotten_flesh", 64, 1],
            ["minecraft:gold_ingot", 64, 8]
        ],
        
        // Ars Nouveau
        "hostilenetworks:ars_nouveau/wilden_mobs": [
            ["ars_nouveau:wilden_spike", 64, 4],
            ["ars_nouveau:wilden_wing", 64, 4],
            ["ars_nouveau:wilden_horn", 64, 4]
        ],

        // Twilight Forest
        "hostilenetworks:alpha_yeti": [
            ["twilightforest:ice_bomb", 16, 2],
            ["twilightforest:alpha_yeti_trophy", 64, 16],
            ["twilightforest:alpha_yeti_fur", 64, 4]
        ],
        "hostilenetworks:twilightforest/carminite_golem": [
            ["twilightforest:towerwood", 64, 2],
            ["minecraft:iron_ingot", 64, 1]
        ],
        "hostilenetworks:twilightforest/death_tome": [
            ["minecraft:book", 64, 2, "minecraft:paper"],
            ["minecraft:book", 64, 4],
            ["twilightforest:magic_map_focus", 64, 64]
        ],
        "hostilenetworks:twilightforest/giant": [
            ["twilightforest:giant_cobblestone", 64, 4],
            ["twilightforest:giant_log", 64, 4],
            ["twilightforest:giant_leaves", 64, 4],
            ["twilightforest:giant_obsidian", 64, 4]
        ],
        "hostilenetworks:twilightforest/goblin": [
            ["twilightforest:armor_shard", 64, 4]
        ],
        "hostilenetworks:twilightforest/helmet_crab": [
            ["twilightforest:armor_shard", 64, 4],
            ["minecraft:cod", 48, 2]
        ],
        "hostilenetworks:twilightforest/hydra": [
            ["twilightforest:hydra_trophy", 64, 16],
            ["twilightforest:hydra_chop", 48, 2],
            ["twilightforest:fiery_blood", 64, 4]
        ],
        "hostilenetworks:twilightforest/lich": [
            ["twilightforest:lich_trophy", 64, 16]
        ],
        "hostilenetworks:twilightforest/minoshroom": [
            ["twilightforest:meef_stroganoff", 1, 4],
            ["twilightforest:minoshroom_trophy", 64, 16]
        ],
        "hostilenetworks:twilightforest/minotaur": [
            ["twilightforest:raw_meef", 64, 2],
            ["twilightforest:maze_map_focus", 64, 64]
        ],
        "hostilenetworks:twilightforest/naga": [
            ["twilightforest:naga_trophy", 64, 16],
            ["twilightforest:naga_scale", 64, 4]
        ],
        "hostilenetworks:twilightforest/raven": [
            ["twilightforest:raven_feather", 64, 4]
        ],
        "hostilenetworks:twilightforest/snow_queen": [
            ["minecraft:snowball", 16, 2],
            ["minecraft:packed_ice", 48, 2],
            ["twilightforest:snow_queen_trophy", 64, 16]
        ],
        "hostilenetworks:twilightforest/ur_ghast": [
            ["twilightforest:carminite", 64, 2],
            ["twilightforest:fiery_tears", 64, 4],
            ["twilightforest:ur_ghast_trophy", 64, 16]
        ],
        "hostilenetworks:twilightforest/yeti": [
            ["twilightforest:arctic_fur", 64, 2]
        ]
    };

    for (let modelId in mobRecipes)
    {
        let recipes = mobRecipes[modelId];
        recipes.forEach(entry => {
            let outputItem = entry[0];
            let outputCount = entry[1];
            let predictionCost = entry[2];
            let inputItem = entry[3] ? entry[3] : outputItem;
            let finalOutput = Item.of(outputItem, outputCount);
            let predictionInput = `${predictionCost}x hostilenetworks:prediction[hostilenetworks:data_model="${modelId}"]`;
            
            catalyst.recipes.mekanismCombining(finalOutput, predictionInput, inputItem);
        });
    }
});
   
   /* 
   This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
   It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
   */
/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/

/*let recipes = [
  "minecraft:netherite_ingot",
  "enderio:conductive_alloy_ingot",
  "enderio:energetic_alloy_ingot",
  "enderio:vibrant_alloy_ingot",
  "enderio:redstone_alloy_ingot",
  "enderio:pulsating_alloy_ingot",
  "enderio:dark_steel_ingot",
  "enderio:soularium_ingot",
  "enderio:end_steel_ingot",
  "mysticalagriculture:prosperity_ingot",
  "mysticalagriculture:inferium_ingot",
  "mysticalagriculture:prudentium_ingot",
  "mysticalagriculture:tertium_ingot",
  "mysticalagriculture:imperium_ingot",
  "mysticalagriculture:supremium_ingot",
  "mysticalagriculture:awakened_supremium_ingot",
  "mysticalagriculture:soulium_ingot",
  "energizedpower:advanced_alloy_ingot",
  "forcecraft:force_ingot",
  "eternalores:biosteel_ingot",
  "eternalores:brass_ingot",
  "eternalores:britannia_silver_ingot",
  "eternalores:bronze_ingot",
  "eternalores:cast_iron_ingot",
  "eternalores:cast_steel_ingot",
  "eternalores:constantan_ingot",
  "eternalores:electrum_ingot",
  "eternalores:enderium_ingot",
  "eternalores:invar_ingot",
  "eternalores:lumium_ingot",
  "eternalores:nethersteel_ingot",
  "eternalores:pewter_ingot",
  "eternalores:pig_iron_ingot",
  "eternalores:rose_gold_ingot",
  "eternalores:shadowsteel_ingot",
  "eternalores:signalum_ingot",
  "eternalores:steel_ingot",
  "eternalores:wrought_iron_ingot",
  "mysticalagradditions:insanium_ingot",
  "mekanism:ingot_refined_obsidian",
  "mekanism:ingot_refined_glowstone",
  "twilightforest:ironwood_ingot",
  "twilightforest:fiery_ingot",
  "oritech:adamant_ingot",
  "oritech:biosteel_ingot",
  "extendedae:entro_ingot",
  "megacells:sky_steel_ingot",
  "megacells:sky_bronze_ingot",
  "megacells:sky_osmium_ingot"
]*/

ServerEvents.recipes(event => {
    const machine_id = "mmr:primitive_alloy";
    const base_time = 400;

    const slotCoords = [
        { x: 9, y: 15 }, { x: 27, y: 15 }, { x: 45, y: 15 },// upper
        { x: 9, y: 33 }, { x: 27, y: 33 }, { x: 45, y: 33 } //inferior
    ];

    let custom_recipes = [
        // vanilla
        {
            result: "minecraft:netherite_ingot",
            result_count: 1,
            inputs: [
                { id: "minecraft:netherite_scrap", count: 4 },
                { id: "minecraft:gold_ingot", count: 4 }
            ]
        },

        // enderio
        {
            result: "enderio:conductive_alloy_ingot",
            result_count: 2,
            inputs: [
                { id: "minecraft:iron_ingot", count: 1 },
                { id: "minecraft:copper_ingot", count: 1 }
            ]
        },
        {
            result: "enderio:energetic_alloy_ingot",
            result_count: 2,
            inputs: [
                { id: "minecraft:gold_ingot", count: 1 },
                { id: "minecraft:redstone", count: 1 },
                { id: "enderio:conductive_alloy_ingot", count: 1 }
            ]
        },
        {
            result: "enderio:vibrant_alloy_ingot",
            result_count: 1,
            inputs: [
                { id: "enderio:energetic_alloy_ingot", count: 1 },
                { id: "minecraft:ender_pearl", count: 1 },
                { id: "minecraft:glowstone_dust", count: 1}
            ]
        },
        {
            result: "enderio:redstone_alloy_ingot",
            result_count: 1,
            inputs: [
                { id: "minecraft:redstone", count: 1 },
                { id: "minecraft:copper_ingot", count: 1 }
            ]
        },
        {
            result: "enderio:pulsating_alloy_ingot",
            result_count: 1,
            inputs: [
                { id: "minecraft:iron_ingot", count: 1 },
                { id: "minecraft:ender_pearl", count: 1 }
            ]
        },
        {
            result: "enderio:dark_steel_ingot",
            result_count: 2,
            inputs: [
                { id: "minecraft:iron_ingot", count: 1 },
                { id: "minecraft:coal", count: 2 },
                { id: "minecraft:obsidian", count: 1 }
            ]
        },
        {
            result: "enderio:dark_steel_ingot",
            result_count: 2,
            inputs: [
                { id: "minecraft:iron_ingot", count: 1 },
                { id: "eternalores:coal_dust", count: 2 },
                { id: "minecraft:obsidian", count: 1 }
            ]
        },
        {
            result: "enderio:soularium_ingot",
            result_count: 1,
            inputs: [
                { id: "minecraft:soul_sand", count: 1 },
                { id: "minecraft:gold_ingot", count: 1 }
            ]
        },
        {
            result: "enderio:end_steel_ingot",
            result_count: 2,
            inputs: [
                { id: "enderio:dark_steel_ingot", count: 1 },
                { id: "minecraft:end_stone", count: 1 },
                { id: "minecraft:obsidian", count: 1 }
            ]
        },

        // MA
        {
            result: "mysticalagriculture:prosperity_ingot",
            result_count: 1,
            inputs: [
                { id: "minecraft:iron_ingot", count: 1 },
                { id: "mysticalagriculture:prosperity_shard", count: 2 }
            ]
        },
        {
            result: "mysticalagriculture:inferium_ingot",
            result_count: 1,
            inputs: [
                { id: "mysticalagriculture:prosperity_ingot", count: 1 },
                { id: "mysticalagriculture:inferium_essence", count: 2 }
            ]
        },
        {
            result: "mysticalagriculture:prudentium_ingot",
            result_count: 1,
            inputs: [
                { id: "mysticalagriculture:prosperity_ingot", count: 1 },
                { id: "mysticalagriculture:prudentium_essence", count: 2 }
            ]
        },
        {
            result: "mysticalagriculture:tertium_ingot",
            result_count: 1,
            inputs: [
                { id: "mysticalagriculture:prosperity_ingot", count: 1 },
                { id: "mysticalagriculture:tertium_essence", count: 2 }
            ]
        },
        {
            result: "mysticalagriculture:imperium_ingot",
            result_count: 1,
            inputs: [
                { id: "mysticalagriculture:prosperity_ingot", count: 1 },
                { id: "mysticalagriculture:imperium_essence", count: 2 }
            ]
        },
        {
            result: "mysticalagriculture:supremium_ingot",
            result_count: 1,
            inputs: [
                { id: "mysticalagriculture:prosperity_ingot", count: 1 },
                { id: "mysticalagriculture:supremium_essence", count: 2 }
            ]
        },
        {
            result: "mysticalagriculture:awakened_supremium_ingot",
            result_count: 1,
            inputs: [
                { id: "mysticalagriculture:prosperity_ingot", count: 1 },
                { id: "mysticalagriculture:awakened_supremium_essence", count: 2 }
            ]
        },
        {
            result: "mysticalagriculture:soulium_ingot",
            result_count: 1,
            inputs: [
                { id: "mysticalagriculture:prosperity_ingot", count: 1 },
                { id: "mysticalagriculture:soulium_dust", count: 4 }
            ]
        },

        // Energized and forcecraft
        {
            result: "energizedpower:advanced_alloy_ingot",
            result_count: 1,
            inputs: [
                { id: "eternalores:steel_ingot", count: 1 },
                { id: "minecraft:copper_ingot", count: 1 },
                { id: "eternalores:tin_ingot", count: 1 }
            ]
        },
        {
            result: "forcecraft:force_ingot",
            result_count: 3,
            inputs: [
                { id: "minecraft:gold_ingot", count: 1 },
                { id: "forcecraft:force_gem", count: 1 }
            ]
        },
        {
            result: "forcecraft:force_ingot",
            result_count: 2,
            inputs: [
                { id: "minecraft:iron_ingot", count: 1 },
                { id: "forcecraft:force_gem", count: 1 }
            ]
        },

        // EO
        {
            result: "eternalores:biosteel_ingot",
            result_count: 2,
            inputs: [
                { id: "minecraft:iron_ingot", count: 1 },
                { id: "oritech:raw_biopolymer", count: 1 }
            ]
        },
        {
            result: "eternalores:biosteel_ingot",
            result_count: 1,
            inputs: [
                { id: 'eternalores:wrought_iron_ingot', count: 1 },
                { id: 'eternalores:biomass', count: 8 }
            ]
        },
        {
            result: "eternalores:brass_ingot",
            result_count: 4,
            inputs: [
                { id: "minecraft:copper_ingot", count: 3 },
                { id: "eternalores:zinc_ingot", count: 1 }
            ]
        },
        {
            result: "eternalores:britannia_silver_ingot",
            result_count: 3,
            inputs: [
                { id: "eternalores:silver_ingot", count: 2 },
                { id: "minecraft:copper_ingot", count: 1 }
            ]
        },
        {
            result: "eternalores:bronze_ingot",
            result_count: 4,
            inputs: [
                { id: "minecraft:copper_ingot", count: 3 },
                { id: "eternalores:tin_ingot", count: 1 }
            ]
        },
        //cast iron
        {
            result: "eternalores:cast_iron_ingot",
            result_count: 1,
            inputs: [
                { id: "minecraft:iron_ingot", count: 1 },
                { id: "minecraft:charcoal", count: 12 }
            ]
        },
        {
            result: "eternalores:cast_iron_ingot",
            result_count: 2,
            inputs: [
                { id: "minecraft:iron_ingot", count: 1 },
                { id: "minecraft:coal", count: 6 }
            ]
        },
        {
            result: "eternalores:cast_iron_ingot",
            result_count: 3,
            inputs: [
                { id: "minecraft:iron_ingot", count: 1 },
                { id: "eternalores:bituminous_coal", count: 2 }
            ]
        },
        //cast steel
        {
            result: "eternalores:cast_steel_ingot",
            result_count: 1,
            inputs: [
                { id: "eternalores:steel_ingot", count: 1 },
                { id: "minecraft:charcoal", count: 12 }
            ]
        },
        {
            result: "eternalores:cast_steel_ingot",
            result_count: 2,
            inputs: [
                { id: "eternalores:steel_ingot", count: 1 },
                { id: "minecraft:coal", count: 6 }
            ]
        },
        {
            result: "eternalores:cast_steel_ingot",
            result_count: 3,
            inputs: [
                { id: "eternalores:cast_iron_ingot", count: 1 },
                { id: "eternalores:bituminous_coal", count: 1 }
            ]
        },

        {
            result: "eternalores:constantan_ingot",
            result_count: 2,
            inputs: [
                { id: "minecraft:copper_ingot", count: 1 },
                { id: "eternalores:nickel_ingot", count: 1 }
            ]
        },
        {
            result: "eternalores:electrum_ingot",
            result_count: 2,
            inputs: [
                { id: "minecraft:gold_ingot", count: 1 },
                { id: "eternalores:silver_ingot", count: 1 }
            ]
        },
        {
            result: "eternalores:enderium_ingot",
            result_count: 10,
            inputs: [
                { id: "eternalores:lead_ingot", count: 2 },
                { id: "eternalores:endergetic_blend", count: 2 },
            ]
        },
        {
            result: "eternalores:invar_ingot",
            result_count: 3,
            inputs: [
                { id: "minecraft:iron_ingot", count: 2 },
                { id: "eternalores:nickel_ingot", count: 1 }
            ]
        },
        {
            result: "eternalores:lumium_ingot",
            result_count: 4,
            inputs: [
                { id: "eternalores:tin_ingot", count: 2 },
                { id: "eternalores:silver_ingot", count: 1 },
                { id: "minecraft:glowstone_dust", count: 1 },
                { id: "minecraft:redstone", count: 1 }
            ]
        },
        {
            result: "eternalores:nethersteel_ingot",
            result_count: 1,
            inputs: [
                { id: "eternalores:steel_ingot", count: 2 },
                { id: "minecraft:netherite_ingot", count: 2 },
                { id: "minecraft:netherrack", count: 2}
            ]
        },
        {
            result: "eternalores:pewter_ingot",
            result_count: 1,
            inputs: [
                { id: "eternalores:tin_ingot", count: 2 },
                { id: "eternalores:silver_ingot", count: 1 },
                { id: "minecraft:copper_ingot", count: 1}
            ]
        },
        //pig iron
        {
            result: "eternalores:pig_iron_ingot",
            result_count: 1,
            inputs: [
                { id: "minecraft:iron_ingot", count: 1 },
                { id: "minecraft:charcoal", count: 12 },
                { id: "eternalores:rose_gold_ingot", count: 1}
            ]
        },
        {
            result: "eternalores:pig_iron_ingot",
            result_count: 2,
            inputs: [
                { id: "minecraft:iron_ingot", count: 1 },
                { id: "minecraft:coal", count: 6 },
                { id: "eternalores:rose_gold_ingot", count: 1}
            ]
        },
        {
            result: "eternalores:pig_iron_ingot",
            result_count: 4,
            inputs: [
                { id: "minecraft:iron_ingot", count: 1 },
                { id: "eternalores:bituminous_coal", count: 2 },
                { id: "eternalores:rose_gold_ingot", count: 1}
            ]
        },

        {
            result: "eternalores:rose_gold_ingot",
            result_count: 1,
            inputs: [
                { id: "minecraft:gold_ingot", count: 3 },
                { id: "minecraft:copper_ingot", count: 1 }
            ]
        },
        {
            result: "eternalores:shadowsteel_ingot",
            result_count: 1,
            inputs: [
                { id: "eternalores:steel_ingot", count: 2 },
                { id: "minecraft:sculk", count: 2 },
                { id: "eternalores:gem_necroticarite", count: 2},
                { id: "eternalores:end_stone_dust", count: 2},
                { id: "eternalores:enderium_ingot", count: 1}
            ]
        },
        {
            result: "eternalores:signalum_ingot",
            result_count: 1,
            inputs: [
                { id: "minecraft:copper_ingot", count: 3 },
                { id: "eternalores:silver_ingot", count: 1 },
                { id: "minecraft:redstone", count: 4 }
            ]
        },
        //steel
        {
            result: "eternalores:steel_ingot",
            result_count: 1,
            inputs: [
                { id: "eternalores:wrought_iron_ingot", count: 1 },
                { id: "minecraft:charcoal", count: 4 }
            ]
        },
        {
            result: "eternalores:steel_ingot",
            result_count: 2,
            inputs: [
                { id: "eternalores:wrought_iron_ingot", count: 1 },
                { id: "minecraft:coal", count: 2 }
            ]
        },
        {
            result: "eternalores:steel_ingot",
            result_count: 3,
            inputs: [
                { id: "eternalores:wrought_iron_ingot", count: 1 },
                { id: "eternalores:bituminous_coal", count: 1 }
            ]
        },
        ,
        {
            result: "eternalores:steel_ingot",
            result_count: 4,
            inputs: [
                { id: "minecraft:iron_ingot", count: 1 },
                { id: "mekanism:enriched_carbon", count: 1 }
            ]
        },

        {
            result: "eternalores:wrought_iron_ingot",
            result_count: 2,
            inputs: [
                { id: "eternalores:iron_dust", count: 2 },
                { id: "minecraft:charcoal", count: 1 }
            ]
        },

        // mek
        {
            result: "mekanism:ingot_refined_obsidian",
            result_count: 1,
            inputs: [
                { id: "minecraft:obsidian", count: 1 },
                { id: "eternalores:osmium_ingot", count: 4 },
                { id: "minecraft:diamond", count: 1}
            ]
        },
        {
            result: "mekanism:ingot_refined_obsidian",
            result_count: 2,
            inputs: [
                { id: "mekanism:dust_refined_obsidian", count: 1 },
                { id: "eternalores:osmium_ingot", count: 2 }
            ]
        },
        {
            result: "mekanism:ingot_refined_glowstone",
            result_count: 1,
            inputs: [
                { id: "minecraft:glowstone_dust", count: 1 },
                { id: "eternalores:osmium_ingot", count: 1 }
            ]
        },

        // twilightforest
        {
            result: "twilightforest:ironwood_ingot",
            result_count: 2,
            inputs: [
                { id: "minecraft:iron_ingot", count: 1 },
                { id: "twilightforest:liveroot", count: 1 },
                { id: "minecraft:gold_ingot", count: 1 }
            ]
        },
        {
            result: "twilightforest:fiery_ingot",
            result_count: 1,
            inputs: [
                { id: "minecraft:iron_ingot", count: 1 },
                { id: "twilightforest:fiery_blood", count: 1 }
            ]
        },
        {
            result: "twilightforest:fiery_ingot",
            result_count: 1,
            inputs: [
                { id: "minecraft:iron_ingot", count: 1 },
                { id: "twilightforest:fiery_tears", count: 1 }
            ]
        },

        // oritech and ae2
        {
            result: "oritech:adamant_ingot",
            result_count: 1,
            inputs: [
                { id: "minecraft:diamond", count: 2 },
                { id: "eternalores:nickel_ingot", count: 2 }
            ]
        },
        {
            result: "extendedae:entro_ingot",
            result_count: 1,
            inputs: [
                { id: "extendedae:entro_dust", count: 1 },
                { id: "minecraft:gold_ingot", count: 1 },
                { id: "minecraft:lapis_lazuli", count: 1}
            ]
        },
        {
            result: "megacells:sky_steel_ingot",
            result_count: 2,
            inputs: [
                { id: "ae2:sky_stone_block", count: 1 },
                { id: "eternalores:steel_ingot", count: 1 },
                { id: "eternalores:gem_certus_quartz", count: 1}
            ]
        },
        {
            result: "megacells:sky_bronze_ingot",
            result_count: 2,
            inputs: [
                { id: "ae2:sky_stone_block", count: 1 },
                { id: "eternalores:bronze_ingot", count: 1 },
                { id: "eternalores:gem_certus_quartz", count: 1}
            ]
        },
        {
            result: "megacells:sky_osmium_ingot",
            result_count: 2,
            inputs: [
                { id: "ae2:sky_stone_block", count: 1 },
                { id: "eternalores:osmium_ingot", count: 1 },
                { id: "eternalores:gem_certus_quartz", count: 1}
            ]
        },
        {
            result: 'energizedpower:crystallized_alloy_ingot',
            result_count: 2,
            inputs: [
                { id: 'energizedpower:crystallized_lapis_lazuli', count: 4 },
                { id: 'energizedpower:crystal_matrix', count: 2 },
                { id: 'energizedpower:advanced_alloy_ingot', count: 3}
            ]
        }
    ];

    let i = 0;
    custom_recipes.forEach(r => {
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].forEach(parallel => {
            i++;

            let recipe = event.recipes.modular_machinery_reborn.machine_recipe(machine_id, base_time)
                .width(110)
                .height(60)
                .progressData(ProgressData.create().x(64).y(23))
                .priority(parallel);

            r.inputs.forEach(input => {
                recipe.requireItem(Item.of(input.id, input.count * parallel));
            });

            recipe.produceItem(Item.of(r.result, r.result_count * parallel));

            if(parallel > 1)
            {
                recipe.hide();
            }

            recipe.jei();
            
            r.inputs.forEach((input, index) => {
                if(index < 6)
                {
                    recipe.requireItem(Item.of(input.id, input.count), slotCoords[index].x, slotCoords[index].y);
                }
            });

            for(let i = r.inputs.length; i < 6; i++)
            {
                recipe.emptyItem(slotCoords[i].x, slotCoords[i].y);
            }

            recipe.produceItem(Item.of(r.result, r.result_count), 90, 20);

            recipe.id(`catalyst:mmr/primitive_alloy/parallel_${parallel}/${i}/${r.result.replace(":", "_")}_${r.inputs.length}_${r.result_count}`);
        });
    });

    console.log("[CatJS] Finished Alloy Maker recipes")
});

MMREvents.extraTooltips(event => {
    event.create("mmr:primitive_alloy", 'item')
    .add(Component.translatable("catalyst.mmr.tooltip.primitive_alloy.item"))

    event.create("mmr:primitive_alloy", 'gui')
    .add(Component.translatable("catalyst.mmr.tooltip.primitive_alloy.gui"))
})

/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/

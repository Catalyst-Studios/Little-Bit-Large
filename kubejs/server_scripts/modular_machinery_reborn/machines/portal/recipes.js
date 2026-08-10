/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/

let Direction = Java.loadClass('net.minecraft.core.Direction')
let ResourceLocation = Java.loadClass('net.minecraft.resources.ResourceLocation');
let BuiltInRegistries = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries');
ServerEvents.recipes(catalyst => {
    let recipes = [
        //sacred spirit
        {
            time: 100,
            inputs: [{ id: 'minecraft:leather', count: 1 }, {id: 'minecraft:diamond', count: 1}],
            outputs: [{ id: 'malum:sacred_spirit', count: 1 }]
        },
        {
            time: 100,
            inputs: [{ id: 'minecraft:beef', count: 1 }, {id: 'minecraft:diamond', count: 1}],
            outputs: [{ id: 'malum:sacred_spirit', count: 1 }]
        },
        {
            time: 100,
            inputs: [{ id: 'minecraft:feather', count: 2 }, {id: 'minecraft:diamond', count: 1}],
            outputs: [{ id: 'malum:sacred_spirit', count: 1 }]
        },

        //wicked spirit
        {
            time: 100,
            inputs: [{ id: 'minecraft:rotten_flesh', count: 2 }, {id: 'minecraft:diamond', count: 1}],
            outputs: [{ id: 'malum:wicked_spirit', count: 1 }]
        },
        {
            time: 100,
            inputs: [{ id: 'minecraft:bone', count: 2 }, {id: 'minecraft:diamond', count: 1}],
            outputs: [{ id: 'malum:wicked_spirit', count: 1 }]
        },
        {
            time: 100,
            inputs: [{ id: 'minecraft:gunpowder', count: 1 }, {id: 'minecraft:diamond', count: 1}],
            outputs: [{ id: 'malum:wicked_spirit', count: 1 }]
        },
        //aqueous spirit
        {
            time: 100,
            inputs: [{ id: 'minecraft:ink_sac', count: 1 }, {id: 'minecraft:diamond', count: 1}],
            outputs: [
                { id: 'malum:aqueous_spirit', count: 1 },
                { id: 'malum:sacred_spirit', count: 1 }
            ]
        },
        {
            time: 100,
            inputs: [{ id: 'minecraft:cod', count: 1 }, {id: 'minecraft:diamond', count: 1}],
            outputs: [{ id: 'malum:aqueous_spirit', count: 1 }]
        },
        {
            time: 100,
            inputs: [{ id: 'minecraft:glow_ink_sac', count: 1 }, {id: 'minecraft:diamond', count: 1}],
            outputs: [
                { id: 'malum:aqueous_spirit', count: 1 },
                { id: 'malum:earthen_spirit', count: 1 }
            ]
        },
        //aerial spirit
        {
            time: 100,
            inputs: [{ id: 'minecraft:phantom_membrane', count: 1 }, {id: 'minecraft:diamond', count: 1}],
            outputs: [{ id: 'malum:aerial_spirit', count: 2 }]
        },
        //earthen spirit
        {
            time: 100,
            inputs: [{ id: 'minecraft:slime_ball', count: 2 }, {id: 'minecraft:diamond', count: 1}],
            outputs: [{ id: 'malum:earthen_spirit', count: 1 }]
        },
        {
            time: 150,
            inputs: [{ id: 'minecraft:iron_ingot', count: 3 }, {id: 'minecraft:diamond', count: 1}],
            outputs: [{ id: 'malum:earthen_spirit', count: 2 }]
        },
        //arcane spirit
        {
            time: 150,
            inputs: [{ id: 'minecraft:ender_pearl', count: 1 }, {id: 'minecraft:diamond', count: 1}],
            outputs: [
                { id: 'malum:arcane_spirit', count: 1 },
                { id: 'malum:wicked_spirit', count: 1 }
            ]
        },
        {
            time: 150,
            inputs: [{ id: 'minecraft:totem_of_undying', count: 1 }, {id: 'minecraft:diamond', count: 1}],
            outputs: [
                { id: 'malum:arcane_spirit', count: 2 },
                { id: 'malum:wicked_spirit', count: 2 }
            ]
        },
        //infernal spirit
        {
            time: 150,
            inputs: [{ id: 'minecraft:blaze_rod', count: 1 }, {id: 'minecraft:diamond', count: 1}],
            outputs: [
                { id: 'malum:infernal_spirit', count: 1 },
                { id: 'malum:arcane_spirit', count: 1 }
            ]
        },
        {
            time: 150,
            inputs: [{ id: 'minecraft:ghast_tear', count: 1 }, {id: 'minecraft:diamond', count: 1}],
            outputs: [
                { id: 'malum:infernal_spirit', count: 1 },
                { id: 'malum:aerial_spirit', count: 1 }
            ]
        },
        {
            time: 100,
            inputs: [{ id: 'minecraft:magma_cream', count: 2 }, {id: 'minecraft:diamond', count: 1}],
            outputs: [
                { id: 'malum:infernal_spirit', count: 1 },
                { id: 'malum:earthen_spirit', count: 1 }
            ]
        },
        //eldritch spirit
        {
            time: 300,
            inputs: [{ id: 'minecraft:nether_star', count: 1 }, {id: 'minecraft:diamond', count: 1}],
            outputs: [{ id: 'malum:eldritch_spirit', count: 4 }]
        },
        {
            time: 200,
            inputs: [{ id: 'minecraft:echo_shard', count: 2 }, {id: 'minecraft:diamond', count: 1}],
            outputs: [{ id: 'malum:eldritch_spirit', count: 2 }]
        },
        {
            time: 150,
            inputs: [{ id: 'minecraft:shulker_shell', count: 1 }, {id: 'minecraft:diamond', count: 1}],
            outputs: [
                { id: 'malum:eldritch_spirit', count: 1 },
                { id: 'malum:arcane_spirit', count: 1 }
            ]
        },
        {
            time: 400,
            inputs: [
                { id: 'minecraft:diamond_block', count: 4 },
                { id: 'minecraft:soul_soil', count: 32 },
                { id: 'minecraft:crying_obsidian', count: 8 }
            ],
            outputs: [
                { id: 'malum:raw_soulstone', count: 32 }
            ]
        },
        {
            time: 400,
            inputs: [
                { id: 'minecraft:emerald_block', count: 4 },
                { id: 'minecraft:amethyst_block', count: 16 },
                { id: 'minecraft:nether_star', count: 1 }
            ],
            outputs: [
                { id: 'malum:raw_brilliance', count: 32 }
            ]
        },
        {
            time: 500,
            inputs: [
                { id: 'minecraft:raw_gold_block', count: 8 },
                { id: 'minecraft:netherite_scrap', count: 4 },
                { id: 'minecraft:deepslate', count: 64 }
            ],
            outputs: [
                { id: 'malum:cthonic_gold', count: 32 }
            ]
        },
        {
            time: 400,
            inputs: [
                { id: 'minecraft:quartz_block', count: 32 },
                { id: 'minecraft:blaze_rod', count: 16 },
                { id: 'minecraft:magma_block', count: 16 }
            ],
            outputs: [
                { id: 'malum:blazing_quartz', count: 64 }
            ]
        },
        {
            time: 500,
            inputs: [
                { id: 'malum:crude_scythe', count: 1, chance: 0 },
                { id: 'malum:arcane_spirit', count: 1 },
                { id: 'minecraft:gunpowder', count: 2 }
            ],
            outputs: [{ id: 'malum:hex_ash', count: 1 }]
        },
        {
            time: 380,
            inputs: [
                { id: 'malum:soul_stained_steel_scythe', count: 1, chance: 0 },
                { id: 'malum:arcane_spirit', count: 1 },
                { id: 'minecraft:gunpowder', count: 2 }
            ],
            outputs: [{ id: 'malum:hex_ash', count: 2 }]
        },
        {
            time: 260,
            inputs: [
                { id: 'malum:edge_of_deliverance', count: 1, chance: 0 },
                { id: 'malum:arcane_spirit', count: 1 },
                { id: 'minecraft:gunpowder', count: 2 }
            ],
            outputs: [{ id: 'malum:hex_ash', count: 4 }]
        },
        {
            time: 150,
            inputs: [
                { id: 'catalystcore:cataclystic_scythe', count: 1, chance: 0 },
                { id: 'malum:arcane_spirit', count: 1 },
                { id: 'minecraft:gunpowder', count: 2 }
            ],
            outputs: [{ id: 'malum:hex_ash', count: 16 }]
        },
        {
            time: 500,
            inputs: [
                { id: 'malum:crude_scythe', count: 1, chance: 0 },
                { id: 'malum:wicked_spirit', count: 1 },
                { id: 'minecraft:rotten_flesh', count: 1 }
            ],
            outputs: [{ id: 'malum:living_flesh', count: 1 }]
        },
        {
            time: 380,
            inputs: [
                { id: 'malum:soul_stained_steel_scythe', count: 1, chance: 0 },
                { id: 'malum:wicked_spirit', count: 1 },
                { id: 'minecraft:rotten_flesh', count: 1 }
            ],
            outputs: [{ id: 'malum:living_flesh', count: 2 }]
        },
        {
            time: 260,
            inputs: [
                { id: 'malum:edge_of_deliverance', count: 1, chance: 0 },
                { id: 'malum:wicked_spirit', count: 1 },
                { id: 'minecraft:rotten_flesh', count: 1 }
            ],
            outputs: [{ id: 'malum:living_flesh', count: 4 }]
        },
        {
            time: 150,
            inputs: [
                { id: 'catalystcore:cataclystic_scythe', count: 1, chance: 0 },
                { id: 'malum:wicked_spirit', count: 1 },
                { id: 'minecraft:rotten_flesh', count: 1 }
            ],
            outputs: [{ id: 'malum:living_flesh', count: 16 }]
        },

        {
            time: 500,
            inputs: [
                { id: 'malum:crude_scythe', count: 1, chance: 0 },
                { id: 'malum:aqueous_spirit', count: 1 },
                { id: 'minecraft:clay_ball', count: 8 }
            ],
            outputs: [{ id: 'malum:alchemical_calx', count: 8 }]
        },
        {
            time: 380,
            inputs: [
                { id: 'malum:soul_stained_steel_scythe', count: 1, chance: 0 },
                { id: 'malum:aqueous_spirit', count: 1 },
                { id: 'minecraft:clay_ball', count: 8 }
            ],
            outputs: [{ id: 'malum:alchemical_calx', count: 16 }]
        },
        {
            time: 260,
            inputs: [
                { id: 'malum:edge_of_deliverance', count: 1, chance: 0 },
                { id: 'malum:aqueous_spirit', count: 1 },
                { id: 'minecraft:clay_ball', count: 8 }
            ],
            outputs: [{ id: 'malum:alchemical_calx', count: 32 }]
        },
        {
            time: 150,
            inputs: [
                { id: 'catalystcore:cataclystic_scythe', count: 1, chance: 0 },
                { id: 'malum:aqueous_spirit', count: 1 },
                { id: 'minecraft:clay_ball', count: 8 }
            ],
            outputs: [{ id: 'malum:alchemical_calx', count: 128 }]
        },

        {
            time: 500,
            inputs: [
                { id: 'malum:crude_scythe', count: 1, chance: 0 },
                { id: 'malum:arcane_spirit', count: 1 },
                { id: 'malum:wicked_spirit', count: 1 },
                { id: 'minecraft:slime_block', count: 1 }
            ],
            outputs: [{ id: 'malum:rotting_essence', count: 1 }]
        },
        {
            time: 380,
            inputs: [
                { id: 'malum:soul_stained_steel_scythe', count: 1, chance: 0 },
                { id: 'malum:arcane_spirit', count: 1 },
                { id: 'malum:wicked_spirit', count: 1 },
                { id: 'minecraft:slime_block', count: 1 }
            ],
            outputs: [{ id: 'malum:rotting_essence', count: 2 }]
        },
        {
            time: 260,
            inputs: [
                { id: 'malum:edge_of_deliverance', count: 1, chance: 0 },
                { id: 'malum:arcane_spirit', count: 1 },
                { id: 'malum:wicked_spirit', count: 1 },
                { id: 'minecraft:slime_block', count: 1 }
            ],
            outputs: [{ id: 'malum:rotting_essence', count: 4 }]
        },
        {
            time: 150,
            inputs: [
                { id: 'catalystcore:cataclystic_scythe', count: 1, chance: 0 },
                { id: 'malum:arcane_spirit', count: 1 },
                { id: 'malum:wicked_spirit', count: 1 },
                { id: 'minecraft:slime_block', count: 1 }
            ],
            outputs: [{ id: 'malum:rotting_essence', count: 16 }]
        },

        {
            time: 500,
            inputs: [
                { id: 'malum:crude_scythe', count: 1, chance: 0 },
                { id: 'malum:wicked_spirit', count: 1 },
                { id: 'minecraft:deepslate', count: 1 },
                { id: 'minecraft:bone', count: 1 }
            ],
            outputs: [{ id: 'malum:grim_talc', count: 1 }]
        },
        {
            time: 380,
            inputs: [
                { id: 'malum:soul_stained_steel_scythe', count: 1, chance: 0 },
                { id: 'malum:wicked_spirit', count: 1 },
                { id: 'minecraft:deepslate', count: 1 },
                { id: 'minecraft:bone', count: 1 }
            ],
            outputs: [{ id: 'malum:grim_talc', count: 2 }]
        },
        {
            time: 260,
            inputs: [
                { id: 'malum:edge_of_deliverance', count: 1, chance: 0 },
                { id: 'malum:wicked_spirit', count: 1 },
                { id: 'minecraft:deepslate', count: 1 },
                { id: 'minecraft:bone', count: 1 }
            ],
            outputs: [{ id: 'malum:grim_talc', count: 4 }]
        },
        {
            time: 150,
            inputs: [
                { id: 'catalystcore:cataclystic_scythe', count: 1, chance: 0 },
                { id: 'malum:wicked_spirit', count: 1 },
                { id: 'minecraft:deepslate', count: 1 },
                { id: 'minecraft:bone', count: 1 }
            ],
            outputs: [{ id: 'malum:grim_talc', count: 16 }]
        },

        {
            time: 500,
            inputs: [
                { id: 'malum:crude_scythe', count: 1, chance: 0 },
                { id: 'malum:aerial_spirit', count: 1 },
                { id: 'minecraft:phantom_membrane', count: 16 },
                { id: 'minecraft:lapis_lazuli', count: 4 }
            ],
            outputs: [{ id: 'malum:astral_weave', count: 1 }]
        },
        {
            time: 380,
            inputs: [
                { id: 'malum:soul_stained_steel_scythe', count: 1, chance: 0 },
                { id: 'malum:aerial_spirit', count: 1 },
                { id: 'minecraft:phantom_membrane', count: 16 },
                { id: 'minecraft:lapis_lazuli', count: 4 }
            ],
            outputs: [{ id: 'malum:astral_weave', count: 2 }]
        },
        {
            time: 260,
            inputs: [
                { id: 'malum:edge_of_deliverance', count: 1, chance: 0 },
                { id: 'malum:aerial_spirit', count: 1 },
                { id: 'minecraft:phantom_membrane', count: 16 },
                { id: 'minecraft:lapis_lazuli', count: 4 }
            ],
            outputs: [{ id: 'malum:astral_weave', count: 4 }]
        },
        {
            time: 150,
            inputs: [
                { id: 'catalystcore:cataclystic_scythe', count: 1, chance: 0 },
                { id: 'malum:aerial_spirit', count: 1 },
                { id: 'minecraft:phantom_membrane', count: 16 },
                { id: 'minecraft:lapis_lazuli', count: 4 }
            ],
            outputs: [{ id: 'malum:astral_weave', count: 16 }]
        },

        {
            time: 500,
            inputs: [
                { id: 'malum:crude_scythe', count: 1, chance: 0 },
                { id: 'malum:infernal_spirit', count: 1 },
                { id: 'malum:earthen_spirit', count: 1 },
                { id: 'minecraft:white_wool', count: 4 }
            ],
            outputs: [{ id: 'malum:soulwoven_silk', count: 6 }]
        },
        {
            time: 380,
            inputs: [
                { id: 'malum:soul_stained_steel_scythe', count: 1, chance: 0 },
                { id: 'malum:infernal_spirit', count: 1 },
                { id: 'malum:earthen_spirit', count: 1 },
                { id: 'minecraft:white_wool', count: 4 }
            ],
            outputs: [{ id: 'malum:soulwoven_silk', count: 12 }]
        },
        {
            time: 260,
            inputs: [
                { id: 'malum:edge_of_deliverance', count: 1, chance: 0 },
                { id: 'malum:infernal_spirit', count: 1 },
                { id: 'malum:earthen_spirit', count: 1 },
                { id: 'minecraft:white_wool', count: 4 }
            ],
            outputs: [{ id: 'malum:soulwoven_silk', count: 24 }]
        },
        {
            time: 150,
            inputs: [
                { id: 'catalystcore:cataclystic_scythe', count: 1, chance: 0 },
                { id: 'malum:infernal_spirit', count: 1 },
                { id: 'malum:earthen_spirit', count: 1 },
                { id: 'minecraft:white_wool', count: 4 }
            ],
            outputs: [{ id: 'malum:soulwoven_silk', count: 96 }]
        },

        {
            time: 500,
            inputs: [
                { id: 'malum:crude_scythe', count: 1, chance: 0 },
                { id: 'malum:aerial_spirit', count: 1 },
                { id: 'malum:eldritch_spirit', count: 1 },
                { id: 'minecraft:ender_eye', count: 1 }
            ],
            outputs: [{ id: 'malum:warp_flux', count: 2 }]
        },
        {
            time: 380,
            inputs: [
                { id: 'malum:soul_stained_steel_scythe', count: 1, chance: 0 },
                { id: 'malum:aerial_spirit', count: 1 },
                { id: 'malum:eldritch_spirit', count: 1 },
                { id: 'minecraft:ender_eye', count: 1 }
            ],
            outputs: [{ id: 'malum:warp_flux', count: 4 }]
        },
        {
            time: 260,
            inputs: [
                { id: 'malum:edge_of_deliverance', count: 1, chance: 0 },
                { id: 'malum:aerial_spirit', count: 1 },
                { id: 'malum:eldritch_spirit', count: 1 },
                { id: 'minecraft:ender_eye', count: 1 }
            ],
            outputs: [{ id: 'malum:warp_flux', count: 8 }]
        },
        {
            time: 150,
            inputs: [
                { id: 'catalystcore:cataclystic_scythe', count: 1, chance: 0 },
                { id: 'malum:aerial_spirit', count: 1 },
                { id: 'malum:eldritch_spirit', count: 1 },
                { id: 'minecraft:ender_eye', count: 1 }
            ],
            outputs: [{ id: 'malum:warp_flux', count: 32 }]
        },

        {
            time: 500,
            inputs: [
                { id: 'malum:crude_scythe', count: 1, chance: 0 },
                { id: 'malum:aerial_spirit', count: 2 },
                { id: 'minecraft:wind_charge', count: 16 }
            ],
            outputs: [{ id: 'malum:wind_nucleus', count: 4 }]
        },
        {
            time: 380,
            inputs: [
                { id: 'malum:soul_stained_steel_scythe', count: 1, chance: 0 },
                { id: 'malum:aerial_spirit', count: 2 },
                { id: 'minecraft:wind_charge', count: 16 }
            ],
            outputs: [{ id: 'malum:wind_nucleus', count: 8 }]
        },
        {
            time: 260,
            inputs: [
                { id: 'malum:edge_of_deliverance', count: 1, chance: 0 },
                { id: 'malum:aerial_spirit', count: 2 },
                { id: 'minecraft:wind_charge', count: 16 }
            ],
            outputs: [{ id: 'malum:wind_nucleus', count: 16 }]
        },
        {
            time: 150,
            inputs: [
                { id: 'catalystcore:cataclystic_scythe', count: 1, chance: 0 },
                { id: 'malum:aerial_spirit', count: 2 },
                { id: 'minecraft:wind_charge', count: 16 }
            ],
            outputs: [{ id: 'malum:wind_nucleus', count: 64 }]
        },
        {

            source: 250,
            inputs: [
                { id: 'malum:refined_soulstone', count: 4 },
                { id: '#minecraft:saplings', count: 2 }
            ],
            outputs: [
                { id: 'malum:runewood_sapling', count: 1 },
                { id: 'malum:azure_runewood_sapling', count: 1 }
            ]
        },
        {
            time: 300,
            source_out: 500,
            inputs: [
                { id: 'malum:runewood_sapling', count: 1 },
                { id: 'malum:azure_runewood_sapling', count: 1 },
                { id: 'malum:eldritch_spirit', count: 3 }
            ],
            outputs: [
                { id: 'malum:soulwood_sapling', count: 1 }
            ]
        },
        {

            inputs: [
                { id: 'malum:sacred_spirit', count: 1 },
                { id: '#c:stones', count: 32 }
            ],
            outputs: [
                { id: 'malum:tainted_rock', count: 32 }
            ]
        },
        {

            inputs: [
                { id: 'malum:wicked_spirit', count: 1 },
                { id: '#c:stones', count: 32 }
            ],
            outputs: [
                { id: 'malum:twisted_rock', count: 32 }
            ]
        },
        {
            tier: true,

            inputs: [
                { id: 'malum:tainted_rock', count: 32 },
                { id: 'malum:soulwood_sapling', count: 1 }
            ],
            outputs: [
                { id: 'malum:blighted_earth', count: 32 }
            ]
        },
        {
            tier: true,
            time: 300,
            source_out: 5000,
            inputs: [
                { id: 'malum:blighted_earth', count: 32 },
                { id: 'malum:umbral_spirit', count: 1 }
            ],
            outputs: [
                { id: 'malum:scarstone', count: 32 }
            ]
        },
        {
            time: 300,
            tier: true,
            source: 4000,
            inputs: [
                { id: 'malum:soulwood_sapling', count: 1, chance: 0 },
                { id: 'malum:eldritch_spirit', count: 4, chance: 1.0 }
            ],
            outputs: [
                { id: 'malum:soulwood_log', count: 16, chance: 1.0 },
                { id: 'malum:exposed_soulwood_log', count: 8, chance: 0.75 },
                { id: 'malum:blighted_soulwood', count: 4, chance: 0.5 },
                { id: 'malum:soulwood_leaves', count: 32, chance: 0.8 },
                { id: 'malum:hanging_soulwood_leaves', count: 16, chance: 0.6 }
            ]
        },
        {

            source: 1500,
            inputs: [
                { id: 'malum:runewood_sapling', count: 1, chance: 0 },
                { id: 'malum:arcane_spirit', count: 2, chance: 1.0 }
            ],
            outputs: [
                { id: 'malum:runewood_log', count: 16, chance: 1.0 },
                { id: 'malum:exposed_runewood_log', count: 8, chance: 0.75 },
                { id: 'malum:runewood_leaves', count: 32, chance: 0.8 },
                { id: 'malum:hanging_runewood_leaves', count: 16, chance: 0.6 }
            ]
        },
        {

            source: 1500,
            inputs: [
                { id: 'malum:azure_runewood_sapling', count: 1, chance: 0 },
                { id: 'malum:arcane_spirit', count: 2, chance: 1.0 }
            ],
            outputs: [
                { id: 'malum:runewood_log', count: 16, chance: 1.0 },
                { id: 'malum:exposed_runewood_log', count: 8, chance: 0.75 },
                { id: 'malum:azure_runewood_leaves', count: 32, chance: 0.8 },
                { id: 'malum:hanging_azure_runewood_leaves', count: 16, chance: 0.6 }
            ]
        },
        {

            source: 100,
            inputs: [
                { id: 'malum:scarstone', count: 1 },
                { id: 'minecraft:hanging_roots', count: 1 }
            ],
            outputs: [
                { id: 'malum:strangeroot', count: 1 }
            ]
        },
        {

            source: 100,
            inputs: [
                { id: 'malum:twisted_rock', count: 1 },
                { id: 'minecraft:hanging_roots', count: 1 }
            ],
            outputs: [
                { id: 'malum:blightroot', count: 1 }
            ]
        },
        {

            source: 100,
            inputs: [
                { id: 'malum:blighted_earth', count: 1 },
                { id: 'minecraft:hanging_roots', count: 1 }
            ],
            outputs: [
                { id: 'malum:blightpearl', count: 1 }
            ]
        },
        {

            source: 100,
            inputs: [
                { id: 'malum:twisted_rock', count: 1 },
                { id: 'minecraft:vine', count: 1 }
            ],
            outputs: [
                { id: 'malum:blight', count: 1 }
            ]
        },
        {

            source: 100,
            inputs: [
                { id: 'malum:blighted_earth', count: 1 }
            ],
            outputs: [
                { id: 'malum:blighted_gunk', count: 12 }
            ]
        },
        {

            inputs: [
                { id: 'malum:exposed_soulwood_log', count: 1 }
            ],
            outputs: [
                { id: 'malum:cursed_sapball', count: 4 }
            ]
        },
        {
            time: 400,
            inputs: [
                { id: 'malum:scarstone', count: 1 },
                { id: 'malum:sacred_spirit', count: 2 },
                { id: 'malum:wicked_spirit', count: 2 },
                { id: 'malum:arcane_spirit', count: 2 },
                { id: 'malum:eldritch_spirit', count: 2 },
                { id: 'malum:aerial_spirit', count: 2 },
                { id: 'malum:aqueous_spirit', count: 2 },
                { id: 'malum:earthen_spirit', count: 2 },
                { id: 'malum:infernal_spirit', count: 2 }
            ],
            outputs: [
                { id: 'malum:large_strange_crystal', count: 4 },
                { id: 'malum:strange_crystal', count: 2, chance: 0.8 }
            ]
        },
        {

            inputs: [
                { id: '#c:glass_blocks', count: 16 },
                { id: 'malum:sacred_spirit', count: 1 }
            ],
            outputs: [{ id: 'malum:sacred_spirited_glass', count: 16 }]
        },
        {

            inputs: [
                { id: '#minecraft:terracotta', count: 16 },
                { id: 'malum:sacred_spirit', count: 1 }
            ],
            outputs: [{ id: 'malum:sacred_varnished_terracotta', count: 16 }]
        },
        {

            inputs: [
                { id: '#c:glazed_terracotta', count: 16 },
                { id: 'malum:sacred_spirit', count: 1 }
            ],
            outputs: [{ id: 'malum:sacred_varnished_terracotta', count: 16 }]
        },
        {

            inputs: [
                { id: '#c:glass_blocks', count: 16 },
                { id: 'malum:wicked_spirit', count: 1 }
            ],
            outputs: [{ id: 'malum:wicked_spirited_glass', count: 16 }]
        },
        {

            inputs: [
                { id: '#minecraft:terracotta', count: 16 },
                { id: 'malum:wicked_spirit', count: 1 }
            ],
            outputs: [{ id: 'malum:wicked_varnished_terracotta', count: 16 }]
        },
        {

            inputs: [
                { id: '#c:glazed_terracotta', count: 16 },
                { id: 'malum:wicked_spirit', count: 1 }
            ],
            outputs: [{ id: 'malum:wicked_varnished_terracotta', count: 16 }]
        },
        {

            inputs: [
                { id: '#c:glass_blocks', count: 16 },
                { id: 'malum:arcane_spirit', count: 1 }
            ],
            outputs: [{ id: 'malum:arcane_spirited_glass', count: 16 }]
        },
        {

            inputs: [
                { id: '#minecraft:terracotta', count: 16 },
                { id: 'malum:arcane_spirit', count: 1 }
            ],
            outputs: [{ id: 'malum:arcane_varnished_terracotta', count: 16 }]
        },
        {

            inputs: [
                { id: '#c:glazed_terracotta', count: 16 },
                { id: 'malum:arcane_spirit', count: 1 }
            ],
            outputs: [{ id: 'malum:arcane_varnished_terracotta', count: 16 }]
        },
        {

            inputs: [
                { id: '#c:glass_blocks', count: 16 },
                { id: 'malum:eldritch_spirit', count: 1 }
            ],
            outputs: [{ id: 'malum:eldritch_spirited_glass', count: 16 }]
        },
        {

            inputs: [
                { id: '#minecraft:terracotta', count: 16 },
                { id: 'malum:eldritch_spirit', count: 1 }
            ],
            outputs: [{ id: 'malum:eldritch_varnished_terracotta', count: 16 }]
        },
        {

            inputs: [
                { id: '#c:glazed_terracotta', count: 16 },
                { id: 'malum:eldritch_spirit', count: 1 }
            ],
            outputs: [{ id: 'malum:eldritch_varnished_terracotta', count: 16 }]
        },
        {

            inputs: [
                { id: '#c:glass_blocks', count: 16 },
                { id: 'malum:aerial_spirit', count: 1 }
            ],
            outputs: [{ id: 'malum:aerial_spirited_glass', count: 16 }]
        },
        {

            inputs: [
                { id: '#minecraft:terracotta', count: 16 },
                { id: 'malum:aerial_spirit', count: 1 }
            ],
            outputs: [{ id: 'malum:aerial_varnished_terracotta', count: 16 }]
        },
        {

            inputs: [
                { id: '#c:glazed_terracotta', count: 16 },
                { id: 'malum:aerial_spirit', count: 1 }
            ],
            outputs: [{ id: 'malum:aerial_varnished_terracotta', count: 16 }]
        },
        {

            inputs: [
                { id: '#c:glass_blocks', count: 16 },
                { id: 'malum:aqueous_spirit', count: 1 }
            ],
            outputs: [{ id: 'malum:aqueous_spirited_glass', count: 16 }]
        },
        {

            inputs: [
                { id: '#minecraft:terracotta', count: 16 },
                { id: 'malum:aqueous_spirit', count: 1 }
            ],
            outputs: [{ id: 'malum:aqueous_varnished_terracotta', count: 16 }]
        },
        {

            inputs: [
                { id: '#c:glazed_terracotta', count: 16 },
                { id: 'malum:aqueous_spirit', count: 1 }
            ],
            outputs: [{ id: 'malum:aqueous_varnished_terracotta', count: 16 }]
        },
        {

            inputs: [
                { id: '#c:glass_blocks', count: 16 },
                { id: 'malum:earthen_spirit', count: 1 }
            ],
            outputs: [{ id: 'malum:earthen_spirited_glass', count: 16 }]
        },
        {

            inputs: [
                { id: '#minecraft:terracotta', count: 16 },
                { id: 'malum:earthen_spirit', count: 1 }
            ],
            outputs: [{ id: 'malum:earthen_varnished_terracotta', count: 16 }]
        },
        {

            inputs: [
                { id: '#c:glazed_terracotta', count: 16 },
                { id: 'malum:earthen_spirit', count: 1 }
            ],
            outputs: [{ id: 'malum:earthen_varnished_terracotta', count: 16 }]
        },
        {

            inputs: [
                { id: '#c:glass_blocks', count: 16 },
                { id: 'malum:infernal_spirit', count: 1 }
            ],
            outputs: [{ id: 'malum:infernal_spirited_glass', count: 16 }]
        },
        {

            inputs: [
                { id: '#minecraft:terracotta', count: 16 },
                { id: 'malum:infernal_spirit', count: 1 }
            ],
            outputs: [{ id: 'malum:infernal_varnished_terracotta', count: 16 }]
        },
        {

            inputs: [
                { id: '#c:glazed_terracotta', count: 16 },
                { id: 'malum:infernal_spirit', count: 1 }
            ],
            outputs: [{ id: 'malum:infernal_varnished_terracotta', count: 16 }]
        },
        {
            time: 170,
            inputs: [
                { id: 'pastel:weeping_gala_sprig', count: 1, chance: 0 }
            ],
            outputs: [
                { id: 'pastel:weeping_gala_log', count: 16, chance: 1.0 },
                { id: 'pastel:weeping_gala_leaves', count: 32, chance: 0.8 },
                { id: 'pastel:milky_resin', count: 4, chance: 0.5 }
            ]
        },
        {
            time: 100,
            energy: 500,
            source: 500,
            inputs: [
                { id: 'pastel:star_candy', count: 1 }
            ],
            outputs: [
                { id: 'pastel:enchanted_star_candy', count: 1, chance: 0.43 },
                { id: 'pastel:jade_jelly', count: 1, chance: 0.27 }
            ]
        },
        {
            time: 300,
            inputs: [
                { id: 'minecraft:nether_star', count: 2 },
                { id: 'reliquary:witherless_rose', count: 1 }
            ],
            outputs: [
                { id: 'pastel:stardust', count: 1 }
            ]
        },
        {
            inputs: [
                { id: 'pastel:nightdew_sprout', count: 1, chance: 0 }
            ],
            outputs: [
                { id: 'pastel:fissure_plum', count: 1, chance: 0.30 },
                { id: 'pastel:quitoxic_reeds', count: 1, chance: 0.51 }
            ]
        },
        {
            energy: 2500,
            source: 500,
            inputs: [
                { id: 'minecraft:suspicious_sand', count: 1 },
                { id: 'minecraft:brush', count: 1, chance: 0 }
            ],
            outputs: [
                { id: 'eternalores:sand_dust', count: 5, chance: 1.0 },
                { id: 'minecraft:sniffer_egg', count: 1, chance: 0.25 },
                { id: 'minecraft:heart_of_the_sea', count: 1, chance: 0.15 },
                { id: 'pastel:bismuth_flake', count: 2, chance: 0.45 },
                { id: 'pastel:nectardew_burgeon', count: 1, chance: 0.35 }
            ]
        },
        {
            energy: 2500,
            source: 500,
            inputs: [
                { id: 'minecraft:suspicious_gravel', count: 1 },
                { id: 'minecraft:brush', count: 1, chance: 0 }
            ],
            outputs: [
                { id: 'eternalores:gravel_dust', count: 4, chance: 1.0 },
                {
                    id: 'productivebees:spawn_egg_configurable_bee',
                    count: 1,
                    chance: 0.10,
                    nbt: {
                        entity_data: {
                            id: 'productivebees:configurable_bee',
                            type: 'productivebees:amber'
                        }
                    }
                },
                { id: 'pastel:nightdew_sprout', count: 1, chance: 0.40 },
                { id: 'minecraft:torchflower_seeds', count: 1, chance: 0.50 },
                { id: 'pastel:nephrite_blossom_bulb', count: 1, chance: 0.35 }
            ]
        },
        {

            fluid_input: [
                { id: 'pastel:humus', count: 250 }
            ],
            inputs: [
                { id: 'pastel:nephrite_blossom_bulb', count: 1, chance: 0 }
            ],
            outputs: [
                { id: 'pastel:jade_vine_petals', count: 4, chance: 1.0 },
                { id: 'pastel:glass_peach', count: 2, chance: 1.0 },
                { id: 'pastel:hibernating_jade_vine_bulb', count: 1, chance: 0.25 },
                { id: 'pastel:jadeite_lotus_bulb', count: 1, chance: 0.25 }
            ]
        },
        {

            inputs: [
                { id: '#c:seeds', count: 32 }
            ],
            outputs: [
                { id: 'pastel:vegetal', count: 4, chance: 1.0 },
                { id: 'pastel:clover', count: 1, chance: 0.25 },
                { id: 'pastel:four_leaf_clover', count: 1, chance: 0.05 }
            ]
        },
        {

            inputs: [
                { id: 'pastel:vegetal', count: 4 },
                { id: '#c:mushrooms', count: 1 }
            ],
            outputs: [
                { id: 'pastel:slate_noxshroom', count: 1, chance: 0.25 },
                { id: 'pastel:ebony_noxshroom', count: 1, chance: 0.25 },
                { id: 'pastel:ivory_noxshroom', count: 1, chance: 0.25 },
                { id: 'pastel:chestnut_noxshroom', count: 1, chance: 0.25 }
            ]
        },
        {

            inputs: [
                { id: 'pastel:slate_noxshroom', count: 1, chance: 0 }
            ],
            outputs: [
                { id: 'pastel:slate_noxcap_stem', count: 16, chance: 1.0 },
                { id: 'pastel:slate_noxcap_block', count: 32, chance: 0.8 },
                { id: 'pastel:slate_noxcap_gills', count: 8, chance: 0.5 }
            ]
        },
        {

            inputs: [
                { id: 'pastel:ebony_noxshroom', count: 1, chance: 0 }
            ],
            outputs: [
                { id: 'pastel:ebony_noxcap_stem', count: 16, chance: 1.0 },
                { id: 'pastel:ebony_noxcap_block', count: 32, chance: 0.8 },
                { id: 'pastel:ebony_noxcap_gills', count: 8, chance: 0.5 }
            ]
        },
        {

            inputs: [
                { id: 'pastel:ivory_noxshroom', count: 1, chance: 0 }
            ],
            outputs: [
                { id: 'pastel:ivory_noxcap_stem', count: 16, chance: 1.0 },
                { id: 'pastel:ivory_noxcap_block', count: 32, chance: 0.8 },
                { id: 'pastel:ivory_noxcap_gills', count: 8, chance: 0.5 }
            ]
        },
        {

            inputs: [
                { id: 'pastel:chestnut_noxshroom', count: 1, chance: 0 }
            ],
            outputs: [
                { id: 'pastel:chestnut_noxcap_stem', count: 16, chance: 1.0 },
                { id: 'pastel:chestnut_noxcap_block', count: 32, chance: 0.8 },
                { id: 'pastel:chestnut_noxcap_gills', count: 8, chance: 0.5 }
            ]
        },
        {

            fluid_input: [
                { id: 'minecraft:water', count: 1000 }
            ],
            inputs: [
                { id: 'minecraft:fishing_rod', count: 1, chance: 0 }
            ],
            outputs: [
                { id: 'pastel:koi', count: 1, chance: 0.40 },
                { id: 'pastel:crawfish', count: 1, chance: 0.35 },
                { id: 'pastel:lizard_meat', count: 1, chance: 0.25 }
            ]
        },
        {
            time: 340,
            energy: 50000,
            source: 500,
            fluid_input: [
                { id: 'pastel:dragonrot', count: 1200 }
            ],
            inputs: [
                { id: '#c:seeds', count: 1 }
            ],
            outputs: [
                { id: 'pastel:doombloom_seed', count: 1, chance: 1.0 }
            ]
        },
        {
            time: 100,
            energy: 50000,
            source: 500,
            fluid_input: [
                { id: 'pastel:dragonrot', count: 1200 }
            ],
            inputs: [
                { id: 'minecraft:heart_of_the_sea', count: 1, chance: 0.45 }
            ],
            outputs: [
                { id: 'pastel:mermaids_gem', count: 2, chance: 1.0 },
                { id: 'pastel:mermaids_gem', count: 1, chance: 0.75 },
                { id: 'pastel:mermaids_gem', count: 1, chance: 0.25 }
            ]
        },
        {
            time: 300,
            energy: 75000,
            source: 5000,
            inputs: [
                { id: 'minecraft:heart_of_the_sea', count: 1 },
                { id: 'pastel:onyx_shard', count: 34 },
                { id: 'pastel:moonstone_shard', count: 34 },
                { id: 'pastel:raw_azurite', count: 94 }
            ],
            outputs: [
                { id: 'pastel:mermaids_gem', count: 1 }
            ]
        },
        {

            energy: 50000,
            fluid_input: [
                { id: 'pastel:liquid_crystal', count: 5000 }
            ],
            inputs: [
                { id: 'pastel:mermaids_gem', count: 3 },
                { id: 'pastel:stardust', count: 4 },
                { id: 'pastel:incandescent_essence', count: 4 },
                { id: 'pastel:frostbite_essence', count: 4 }
            ],
            outputs: [
                { id: 'pastel:amaranth_grains', count: 1, chance: 1.0 },
                { id: 'pastel:aloe_leaf', count: 1, chance: 1.0 },
                { id: 'pastel:sawblade_holly_berry', count: 1, chance: 1.0 }
            ]
        },
        {

            source: 500,
            inputs: [
                { id: 'pastel:sawblade_holly_berry', count: 1 }
            ],
            outputs: [
                { id: 'pastel:prickly_bayleaf', count: 1, chance: 1.0 }
            ]
        },
        {

            fluid_input: [
                { id: 'pastel:liquid_crystal', count: 1000, chance: 0 },
                { id: 'pastel:humus', chance: 0 }
            ],
            inputs: [
                { id: 'minecraft:clay', count: 16 }
            ],
            outputs: [
                { id: 'pastel:shale_clay', count: 16 }
            ]
        },
        {

            inputs: [
                { id: 'minecraft:grass_block', count: 1 },
                { id: 'minecraft:snow_block', count: 16 }
            ],
            outputs: [
                { id: 'pastel:overgrown_slush', count: 16 }
            ]
        },
        {
            time: 400,
            energy: 500000,
            inputs: [
                { id: 'eternalores:cosmic_matter_block', count: 1 },
                { id: 'pastel:onyx_block', count: 1 },
                { id: 'eternalores:onyx_block', count: 1 },
                { id: 'eternalores:quantiquarite_shard', count: 5  }
            ],
            outputs: [
                { id: 'pastel:black_materia', count: 1 }
            ]
        },
        {
            time: 666,
            energy: 50000000,
            inputs: [
                { id: 'pastel:black_materia', count: 1 }
            ],
            outputs: [
                { id: 'eternalores:exotic_matter_block', count: 1, chance: 0.5 },
                { id: 'eternalores:strange_matter_block', count: 1, chance: 0.75 },
                { id: 'eternalores:antimatter_block', count: 1 }
            ]
        },
        {

            inputs: [
                { id: 'minecraft:grass_block', count: 1 },
                { id: 'minecraft:dripstone_block', count: 16 }
            ],
            outputs: [
                { id: 'pastel:downstone', count: 16 }
            ]
        },
        {

            inputs: [
                { id: 'minecraft:grass_block', count: 16 },
                { id: 'pastel:sawblade_holly_berry', count: 1 }
            ],
            outputs: [
                { id: 'pastel:sawblade_grass', count: 16 }
            ]
        },
        {

            inputs: [
                { id: 'minecraft:grass_block', count: 16 },
                { id: 'pastel:vegetal', count: 1 }
            ],
            outputs: [
                { id: 'pastel:shimmel', count: 16 }
            ]
        },
        {

            inputs: [
                { id: 'minecraft:grass_block', count: 1 },
                { id: 'pastel:blackslag', count: 16 }
            ],
            outputs: [
                { id: 'pastel:overgrown_blackslag', count: 16 }
            ]
        },
        {

            inputs: [
                { id: 'minecraft:grass_block', count: 1 },
                { id: 'minecraft:basalt', count: 16 }
            ],
            outputs: [
                { id: 'pastel:ashen_blackslag', count: 16 }
            ]
        },
        {

            fluid_input: [
                { id: 'minecraft:water', count: 1000, chance: 1 }
            ],
            inputs: [
                { id: 'pastel:jadeite_lotus_bulb', count: 1, chance: 0 },
                { id: 'minecraft:blue_ice', count: 4, chance: 1 }
            ],
            outputs: [
                { id: 'pastel:jadeite_petals', count: 1, chance: 1.0 },
                { id: 'pastel:varia_sprout', count: 1, chance: 0.5 },
                { id: 'pastel:jadeite_lotus_stem', count: 1, chance: 1.0 },
                { id: 'pastel:jadeite_lotus_flower', count: 1, chance: 0.75 },
                { id: 'pastel:ash_flakes', count: 1, chance: 0.5 }
            ]
        },
        {

            fluid_input: [
                { id: 'minecraft:water', count: 2000 }
            ],
            inputs: [
                { id: 'eternalores:compressed_blue_ice_2x', count: 1 }
            ],
            outputs: [
                { id: 'pastel:humming_bell', count: 1 }
            ]
        },
        {
            time: 140,
            energy: 500,
            inputs: [
                { id: 'pastel:humming_bell', count: 1, chance: 0 }
            ],
            outputs: [
                { id: 'pastel:hummingstone', count: 2, chance: 1.0 },
                { id: 'pastel:hummingstone_glass', count: 4, chance: 1.0 }
            ]
        },
        {
            time: 600,
            inputs: [
                { id: 'pastel:stardust', count: 10 },
                { id: 'pastel:enchanted_star_candy', count: 2 },
                { id: 'minecraft:nether_star', count: 1 },
                { id: 'minecraft:diamond', count: 10 }
            ],
            outputs: [
                { id: 'pastel:glistering_shooting_star', count: 1 }
            ]
        },
        {
            time: 600,
            inputs: [
                { id: 'pastel:stardust', count: 10 },
                { id: 'pastel:enchanted_star_candy', count: 2 },
                { id: 'minecraft:nether_star', count: 1 },
                { id: 'minecraft:ancient_debris', count: 2 }
            ],
            outputs: [
                { id: 'pastel:fiery_shooting_star', count: 1 }
            ]
        },
        {
            time: 600,
            inputs: [
                { id: 'pastel:stardust', count: 10 },
                { id: 'pastel:enchanted_star_candy', count: 2 },
                { id: 'minecraft:nether_star', count: 1 },
                { id: '#c:dyes', count: 1 }
            ],
            outputs: [
                { id: 'pastel:colorful_shooting_star', count: 1 }
            ]
        },
        {
            time: 600,
            inputs: [
                { id: 'pastel:stardust', count: 10 },
                { id: 'pastel:enchanted_star_candy', count: 2 },
                { id: 'minecraft:nether_star', count: 1 },
                { id: 'minecraft:prismarine_shard', count: 2 },
                { id: 'minecraft:prismarine_crystals', count: 3 }
            ],
            outputs: [
                { id: 'pastel:pristine_shooting_star', count: 1 }
            ]
        },
        {
            time: 600,
            inputs: [
                { id: 'pastel:stardust', count: 10 },
                { id: 'pastel:enchanted_star_candy', count: 2 },
                { id: 'minecraft:nether_star', count: 1 },
                { id: '#pastel:gemstone_shards', count: 2 }
            ],
            outputs: [
                { id: 'pastel:gemstone_shooting_star', count: 1 }
            ]
        },
        {

            energy: 50000,
            source: 1000,
            inputs: [
                { id: 'pastel:malachite_ore', count: 1 }
            ],
            outputs: [
                { id: 'pastel:pure_malachite', count: 8, chance: 1.0 },
                { id: 'pastel:pure_azurite', count: 1, chance: 0.02 }
            ]
        },
        {

            energy: 50000,
            source: 1000,
            inputs: [
                { id: 'pastel:deepslate_malachite_ore', count: 1 }
            ],
            outputs: [
                { id: 'pastel:pure_malachite', count: 8, chance: 1.0 },
                { id: 'pastel:pure_azurite', count: 1, chance: 0.02 }
            ]
        },
        {

            energy: 50000,
            source: 1000,
            inputs: [
                { id: 'pastel:blackslag_malachite_ore', count: 1 }
            ],
            outputs: [
                { id: 'pastel:pure_malachite', count: 8, chance: 1.0 },
                { id: 'pastel:pure_azurite', count: 1, chance: 0.02 }
            ]
        },
        {

            energy: 50000,
            source: 1000,
            inputs: [
                { id: 'pastel:azurite_ore', count: 1 }
            ],
            outputs: [
                { id: 'pastel:pure_azurite', count: 8, chance: 1.0 },
                { id: 'pastel:pure_malachite', count: 1, chance: 0.02 }
            ]
        },
        {

            energy: 50000,
            source: 1000,
            inputs: [
                { id: 'pastel:deepslate_azurite_ore', count: 1 }
            ],
            outputs: [
                { id: 'pastel:pure_azurite', count: 8, chance: 1.0 },
                { id: 'pastel:pure_malachite', count: 1, chance: 0.02 }
            ]
        },
        {

            energy: 50000,
            source: 1000,
            inputs: [
                { id: 'pastel:blackslag_azurite_ore', count: 1 }
            ],
            outputs: [
                { id: 'pastel:pure_azurite', count: 8, chance: 1.0 },
                { id: 'pastel:pure_malachite', count: 1, chance: 0.02 }
            ]
        },
        {

            energy: 50000,
            inputs: [
                { id: 'minecraft:iron_ore', count: 1 }
            ],
            outputs: [
                { id: 'minecraft:iron_ingot', count: 2, chance: 1.0 },
                { id: 'pastel:pyrite_chunk', count: 1, chance: 0.15 }
            ]
        },
        {

            energy: 50000,
            inputs: [
                { id: 'minecraft:deepslate_iron_ore', count: 1 }
            ],
            outputs: [
                { id: 'minecraft:iron_ingot', count: 2, chance: 1.0 },
                { id: 'pastel:pyrite_chunk', count: 1, chance: 0.15 }
            ]
        },
        {

            energy: 50000,
            inputs: [
                { id: 'minecraft:raw_iron_block', count: 1 }
            ],
            outputs: [
                { id: 'minecraft:iron_ingot', count: 18, chance: 1.0 },
                { id: 'pastel:pyrite_chunk', count: 1, chance: 0.33 },
                { id: 'pastel:pyrite_chunk', count: 1, chance: 0.22 },
                { id: 'pastel:pyrite_chunk', count: 1, chance: 0.11 },
                { id: 'pastel:pyrite_chunk', count: 1, chance: 0.05 }
            ]
        },
        {

            fluid_input: [
                { id: 'pastel:dragonrot', count: 1000 }
            ],
            inputs: [
                { id: 'minecraft:feather', count: 1 },
                { id: 'minecraft:chicken', count: 1 }
            ],
            outputs: [
                { id: 'pastel:resplendent_feather', count: 1 }
            ]
        },
        {

            fluid_input: [
                { id: 'pastel:dragonrot', count: 1000 }
            ],
            inputs: [
                { id: 'minecraft:bone', count: 1 },
                { id: 'minecraft:skeleton_skull', count: 1 }
            ],
            outputs: [
                { id: 'pastel:dragonbone_chunk', count: 1 }
            ]
        },
        {

            inputs: [
                { id: 'minecraft:writable_book', count: 1 },
                { id: 'pastel:enchantment_canvas', count: 2 },
                { id: 'pastel:black_pigment', count: 24 },
                { id: 'pastel:pedestal_onyx', count: 1, chance: 0 },
                { id: 'pastel:nectardew_burgeon', count: 1 }
            ],
            outputs: [
                { id: 'pastel:poisoners_handbook', count: 1 }
            ]
        },
        {

            inputs: [
                { id: 'minecraft:writable_book', count: 1 },
                { id: 'pastel:enchantment_canvas', count: 2 },
                { id: 'pastel:black_pigment', count: 24 },
                { id: 'pastel:pedestal_onyx', count: 1, chance: 0 },
                { id: 'pastel:enchanted_golden_carrot', count: 1 }
            ],
            outputs: [
                { id: 'pastel:gilded_book', count: 1 }
            ]
        },
        {

            inputs: [
                { id: 'minecraft:writable_book', count: 1 },
                { id: 'pastel:enchantment_canvas', count: 2 },
                { id: 'pastel:black_pigment', count: 24 },
                { id: 'pastel:pedestal_onyx', count: 1, chance: 0 },
                { id: 'pastel:bloodboil_syrup', count: 1 }
            ],
            outputs: [
                { id: 'pastel:brewers_handbook', count: 1 }
            ]
        },
        {

            inputs: [
                { id: 'minecraft:writable_book', count: 1 },
                { id: 'pastel:enchantment_canvas', count: 2 },
                { id: 'pastel:black_pigment', count: 24 },
                { id: 'pastel:pedestal_onyx', count: 1, chance: 0 },
                { id: 'pastel:meatloaf_sandwich', count: 1 }
            ],
            outputs: [
                { id: 'pastel:melochites_cookbook_vol_1', count: 1 }
            ]
        },
        {

            inputs: [
                { id: 'minecraft:writable_book', count: 1 },
                { id: 'pastel:enchantment_canvas', count: 2 },
                { id: 'pastel:black_pigment', count: 24 },
                { id: 'pastel:pedestal_onyx', count: 1, chance: 0 },
                { id: 'pastel:cream_pastry', count: 1 }
            ],
            outputs: [
                { id: 'pastel:melochites_cookbook_vol_2', count: 1 }
            ]
        },
        {

            inputs: [
                { id: 'minecraft:writable_book', count: 1 },
                { id: 'pastel:enchantment_canvas', count: 2 },
                { id: 'pastel:black_pigment', count: 24 },
                { id: 'pastel:pedestal_onyx', count: 1, chance: 0 },
                { id: 'pastel:cream_pastry', count: 1 }
            ],
            outputs: [
                { id: 'pastel:imperial_cookbook', count: 1 }
            ]
        },
        {

            inputs: [
                { id: 'minecraft:writable_book', count: 1 },
                { id: 'pastel:enchantment_canvas', count: 2 },
                { id: 'pastel:black_pigment', count: 24 },
                { id: 'pastel:pedestal_onyx', count: 1, chance: 0 },
                { id: 'pastel:crawfish_cocktail', count: 1 }
            ],
            outputs: [
                { id: 'pastel:imbrifer_cookbook', count: 1 }
            ]
        },
        {

            inputs: [
                { id: '#minecraft:flowers', count: 1 },
                { id: 'pastel:pink_pigment', count: 40 }
            ],
            outputs: [
                { id: 'pastel:sweet_pea', count: 1, chance: 1.0 },
                { id: 'pastel:small_purple_dragonjag', count: 1, chance: 0.33 },
                { id: 'pastel:small_red_dragonjag', count: 1, chance: 0.33 },
                { id: 'pastel:small_pink_dragonjag', count: 1, chance: 0.33 }
            ]
        },
        {

            inputs: [
                { id: '#minecraft:flowers', count: 1 },
                { id: 'pastel:yellow_pigment', count: 40 }
            ],
            outputs: [
                { id: 'pastel:apricotti', count: 1, chance: 1.0 },
                { id: 'pastel:snapping_ivy', count: 1, chance: 0.33 },
                { id: 'pastel:small_yellow_dragonjag', count: 1, chance: 0.33 },
                { id: 'pastel:small_black_dragonjag', count: 1, chance: 0.33 },
                { id: 'pastel:bristle_sprouts', count: 1, chance: 0.33 }
            ]
        },
        {
            time: 600,
            energy: 10000000,
            source: 20000,
            inputs: [
                { id: 'pastel:black_materia', count: 1 },
                { id: 'eternalores:gem_spectral_sky_bluerite', count: 2}
            ],
            outputs: [
                { id: 'malum:umbral_spirit', count: 1 },
                { id: 'pastel:midnight_chip', count: 5 }
            ]
        },
        {
            time: 200,
            inputs: [
                { id: 'malum:refined_soulstone', count: 4 },
                { id: 'malum:wicked_spirit', count: 4 }
            ],
            outputs: [
                { id: 'malum:null_slate', count: 4 }
            ]
        },
        {
            time: 200,
            inputs: [
                { id: 'malum:strange_crystal', count: 1 }
            ],
            outputs: [
                { id: 'malum:mnemonic_fragment', count: 1 }
            ]
        },
        {
            time: 200,
            inputs: [
                { id: 'minecraft:black_wool', count: 1 }
            ],
            outputs: [
                { id: 'malum:tophat', count: 1 }
            ]
        },
        {
            time: 200,
            inputs: [
                { id: 'malum:refined_soulstone', count: 4 },
                { id: 'malum:cthonic_gold', count: 1 }
            ],
            outputs: [
                { id: 'malum:malignant_lead', count: 1 }
            ]
        },
        {
            time: 200,
            inputs: [
                { id: 'malum:encyclopedia_arcana', count: 1 },
                { id: 'malum:wicked_spirit', count: 1 }
            ],
            outputs: [
                { id: 'malum:encyclopedia_esoterica', count: 1 }
            ]
        },
        {
            time: 200,
            inputs: [
                { id: 'minecraft:iron_block', count: 1 },
                { id: 'malum:eldritch_spirit', count: 1 }
            ],
            outputs: [
                { id: 'malum:anomalous_design', count: 1 }
            ]
        },
        {
            time: 200,
            inputs: [
                { id: 'minecraft:blaze_rod', count: 1 },
                { id: 'malum:infernal_spirit', count: 1 }
            ],
            outputs: [
                { id: 'malum:auric_embers', count: 1 }
            ]
        },
        {
            time: 200,
            source: 5000,
            inputs: [
                { id: 'malum:complete_design', count: 1 }
            ],
            outputs: [
                { id: 'malum:fused_consciousness', count: 1 }
            ]
        },
        {
            time: 200,
            inputs: [
                { id: 'malum:music_disc_arcane_elegy', count: 1 },
                { id: 'malum:aerial_spirit', count: 1 }
            ],
            outputs: [
                { id: 'malum:music_disc_aesthetica', count: 1 }
            ]
        },
        {
            time: 200,
            inputs: [
                { id: 'malum:hex_ash', count: 1 },
                { id: 'eternalores:gem_voiderite', count: 1 }
            ],
            outputs: [
                { id: 'malum:void_salts', count: 4 }
            ]
        },
        {
            time: 200,
            inputs: [
                { id: 'malum:the_device', count: 1 }
            ],
            outputs: [
                { id: 'malum:the_vessel', count: 1 }
            ]
        }
    ]

    let machine_id = "mmr:portal";

    let timer = (machine_id, index) => {
        let str = `${machine_id}_${index}`;
        let hash = 0;
        
        for(let j = 0; j < str.length; j++)
        {
            hash = ((hash << 5) - hash + str.charCodeAt(j)) | 0;
        }

        return 151 + (Math.abs(hash) % 149);
    };

    let i = 0;
    let debug = false;
    recipes.forEach(rs => {
        i++;
        
        let item_inputs = rs.inputs || [];
        let fluid_inputs = rs.fluid_input || [];
        let item_outputs = rs.outputs || [];
        let fluid_outputs = rs.fluid_output || [];

        let has_energy = rs.energy && rs.energy > 0;
        let has_source_in = (rs.source && rs.source > 0) ? 1 : 0;
        let has_source_out = (rs.source_out && rs.source_out > 0) ? 1 : 0;

        let total_inputs_count = item_inputs.length + fluid_inputs.length + has_source_in;
        let total_outputs_count = item_outputs.length + fluid_outputs.length + has_source_out;

        if(debug)
        {
            console.log(`[CatJS] ${rs.outputs}`);
            console.log(`[CatJS] ${i}`);
        }

        if(total_inputs_count === 0)
        {
            throw Error(`[CatJS] Must have 1 input (item, fluid or source)`);
        }

        if(total_outputs_count === 0)
        {
            throw Error(`[CatJS] Must have 1 output (item, fluid or source)`);
        }

        if(fluid_inputs.length > 2)
        {
            throw Error(`[CatJS] No more than 2 fluids at the same time`);
        }
        if(total_outputs_count > 5)
        {
            throw Error(`[CatJS] No more than 5 outputs in totoal (items + fluids + source)`);
        }

        let gui_width = has_energy ? 176 : 155;
        let start_x_input = has_energy ? 26 : 8;
        let progress_x = has_energy ? 84 : 66;
        let start_x_output = has_energy ? 114 : 96;

        let input_rows = Math.ceil(total_inputs_count / 3);
        let output_rows = Math.ceil(5 / 3);
        let max_rows = Math.max(input_rows, output_rows, 2);

        let gui_height = 16 + (max_rows * 18) + 10;
        let time = rs.time ? rs.time : timer(machine_id, i);

        let recipe = catalyst.recipes.modular_machinery_reborn.machine_recipe(machine_id, time)
            .width(gui_width)
            .height(gui_height)
            .progressData(ProgressData.create().x(progress_x).y(12 + Math.floor((max_rows * 18 - 16) / 2)))
            .requireFunctionOnStart("starting_portal")
            .requireFunctionOnEnd("ending_portal");

        item_inputs.forEach(input => {
            let chance = typeof input.chance !== 'undefined' ? input.chance : 1.0;
            let count = typeof input.count !== 'undefined' ? input.count : 1
            recipe.requireItem(Ingredient.of(input.id, count), chance);
        });

        fluid_inputs.forEach(fluid => {
            let chance = typeof fluid.chance !== 'undefined' ? fluid.chance : 1.0
            let count = typeof fluid.count !== 'undefined' ? fluid.count : 1000
            recipe.requireFluid(Fluid.of(fluid.id, count), chance);
        });

        item_outputs.forEach(out => {
            let chance = typeof out.chance !== 'undefined' ? out.chance : 1.0
            let count = typeof out.count !== 'undefined' ? out.count : 1
            if(out.nbt)
            {
                recipe.produceItem(Item.of(out.id, count, out.nbt), chance);
            }
            else
            {
                recipe.produceItem(Item.of(out.id, count), chance);
            }
        });

        fluid_outputs.forEach(out => {
            let chance = typeof out.chance !== 'undefined' ? out.chance : 1.0
            let count = typeof out.count !== 'undefined' ? out.count : 1000
            recipe.produceFluid(Fluid.of(out.id, count), chance);
        });

        if(has_source_out)
        {
            recipe.produceSource(rs.source_out);
        }

        if(has_energy)
        {
            recipe.requireEnergyPerTick(rs.energy);
        }

        if(has_source_in)
        {
            recipe.requireSource(rs.source);
        }

        recipe.jei();

        let input_idx = 0;
        let start_y_input = 12;

        item_inputs.forEach(input => {
            let col = input_idx % 3;
            let row = Math.floor(input_idx / 3);
            let slotX = start_x_input + (col * 18);
            let slotY = start_y_input + (row * 18);

            let chance = typeof input.chance !== 'undefined' ? input.chance : 1.0;
            let count = typeof input.count !== 'undefined' ? input.count : 1

            recipe.requireItem(Ingredient.of(input.id, count), chance, slotX, slotY);
            input_idx++;
        });

        fluid_inputs.forEach(fluid => {
            let col = input_idx % 3;
            let row = Math.floor(input_idx / 3);
            let slotX = start_x_input + (col * 18);
            let slotY = start_y_input + (row * 18);

            let chance = typeof fluid.chance !== 'undefined' ? fluid.chance : 1.0
            let count = typeof fluid.count !== 'undefined' ? fluid.count : 1000

            recipe.requireFluid(Fluid.of(fluid.id, count), chance, slotX, slotY);
            input_idx++;
        });

        if(has_source_in)
        {
            let col = input_idx % 3;
            let row = Math.floor(input_idx / 3);
            let slotX = start_x_input + (col * 18);
            let slotY = start_y_input + (row * 18);

            recipe.requireSource(rs.source, slotX, slotY);
            input_idx++;
        }

        let target_input_slots = Math.ceil(input_idx / 3) * 3;
        for(let slot_index = input_idx; slot_index < target_input_slots; slot_index++)
        {
            let col = slot_index % 3;
            let row = Math.floor(slot_index / 3);
            let slotX = start_x_input + (col * 18);
            let slotY = start_y_input + (row * 18);

            recipe.emptyItem(slotX, slotY);
        }

        if(has_energy)
        {
            recipe.requireEnergyPerTick(rs.energy, 5, 4);
        }

        let output_idx = 0;
        let start_y_output = 12;

        item_outputs.forEach(out => {
            let col = output_idx % 3;
            let row = Math.floor(output_idx / 3);
            let slotX = start_x_output + (col * 18);
            let slotY = start_y_output + (row * 18);

            let chance = typeof out.chance !== 'undefined' ? out.chance : 1.0
            let count = typeof out.count !== 'undefined' ? out.count : 1

            if(out.nbt)
            {
                recipe.produceItem(Item.of(out.id, count, out.nbt), chance, slotX, slotY);
            }
            else
            {
                recipe.produceItem(Item.of(out.id, count), chance, slotX, slotY);
            }

            output_idx++;
        });

        fluid_outputs.forEach(out => {
            let col = output_idx % 3;
            let row = Math.floor(output_idx / 3);
            let slotX = start_x_output + (col * 18);
            let slotY = start_y_output + (row * 18);

            let chance = typeof out.chance !== 'undefined' ? out.chance : 1.0
            let count = typeof out.count !== 'undefined' ? out.count : 1000

            recipe.produceFluid(Fluid.of(out.id, count), chance, slotX, slotY);
            output_idx++;
        });

        if(has_source_out)
        {
            let col = output_idx % 3;
            let row = Math.floor(output_idx / 3);
            let slotX = start_x_output + (col * 18);
            let slotY = start_y_output + (row * 18);

            recipe.produceSource(rs.source_out, slotX, slotY);
            output_idx++;
        }

        for(let slot_index = output_idx; slot_index < 5; slot_index++)
        {
            let col = slot_index % 3;
            let row = Math.floor(slot_index / 3);
            let slotX = start_x_output + (col * 18);
            let slotY = start_y_output + (row * 18);

            recipe.emptyItem(slotX, slotY);
        }

        let raw_id = (item_outputs.length > 0) ? item_outputs[0].id : `recipe_${i}`;
        let recipe_name = raw_id.split('{')[0].replace(':', '_');

        recipe.id(`catalyst:mmr/portal/${i}/${recipe_name}`);
    });

    console.log("[CatJS] Finished Portal recipes");
});

MMREvents.recipeFunction("starting_portal", catalyst => {
    let tile = catalyst.getTile();
    let level = tile.getLevel();
    let pos = tile.getBlockPos();
    let targetPos = pos.above(16); 
    
    let data = tile.getPersistentData();
    let jobs = data.getInt("parallels") || 0;
    
    let state = level.getBlockState(targetPos);
    if(state.getBlock().id !== 'catalystcore:warp_portal')
    {
        jobs = 0;
    }
    
    jobs++;
    data.putInt("parallels", jobs);

    if(jobs === 1)
    {
        let facing = String(level.getBlock(pos).getProperties().get("facing"));

        let axis = (facing === "north" || facing === "south") ? Direction.Axis.Z : Direction.Axis.X;
        let axis_str = (facing === "north" || facing === "south") ? "z" : "x";

        let oldState = level.getBlockState(targetPos);

        let portal = BuiltInRegistries.BLOCK.get(ResourceLocation.parse('catalystcore:warp_portal'));
        let axis_property = portal.getStateDefinition().getProperty('axis');
        let targetState = portal.defaultBlockState().setValue(axis_property, axis);

        level.setBlock(targetPos, targetState, 11);

        let targetBE = level.getBlockEntity(targetPos);
        if(targetBE)
        {
            let nbt = {
                active: 1,
                axis: axis_str,
                height: 22.0,
                width: 24.0,
                components: {
                    "minecraft:block_state": {
                        axis: axis_str
                    }
                }
            };

            targetBE.loadWithComponents(nbt, level.registryAccess());
            targetBE.setChanged();
            level.sendBlockUpdated(targetPos, oldState, targetState, 11);
        }
    }
});

MMREvents.recipeFunction("ending_portal", catalyst => {
    let tile = catalyst.getTile();
    let level = tile.getLevel();
    let pos = tile.getBlockPos();
    let targetPos = pos.above(16); 

    let state = level.getBlockState(targetPos);
    let blockId = state.getBlock().id;

    if(blockId !== 'catalystcore:warp_portal')
    {
        catalyst.error("No Portal");
    }

    let data = tile.getPersistentData();
    let jobs = data.getInt("parallels") || 0;

    if(jobs > 0)
    {
        jobs--;
        data.putInt("parallels", jobs);
    }

    if(jobs === 0)
    {
        level.setBlock(targetPos, Block.getBlock('minecraft:air').defaultBlockState(), 3);
    }
});

/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
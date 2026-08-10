/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/

//TODO: Check commented recipes
ServerEvents.recipes(catalyst => {
    let machine_id = "mmr:hourglass";

    let energy_in = { x: 4, y: 12 };

    let input_slots = [
        { x: 22, y: 12 }, { x: 40, y: 12 }, { x: 58, y: 12 },
        { x: 22, y: 30 }, { x: 40, y: 30 }, { x: 58, y: 30 },
        { x: 22, y: 48 }, { x: 40, y: 48 }, { x: 58, y: 48 }
    ];

    let progressArrow = { x: 84, y: 30 };

    let output_slot = { x: 118, y: 30 };

    let recipes = [
        {
            time: 100,
            inputs: [{ id: "minecraft:coal", count: 64, chance: 1.0 }],
            output: { id: "minecraft:diamond", count: 1, chance: 1.0 },
            colorA: [0.1, 0.1, 0.1],
            colorB: [0.3, 0.9, 1.0],
            mode: 1
        },
        {
            time: 100,
            inputs: [{ id: "eternalores:coke_coal", count: 48, chance: 1.0 }],
            output: { id: "minecraft:diamond", count: 1, chance: 1.0 },
            colorA: [0.2, 0.2, 0.25],
            colorB: [0.3, 0.9, 1.0],
            mode: 1
        },
        {
            time: 100,
            inputs: [{ id: "eternalores:bituminous_coal", count: 32, chance: 1.0 }],
            output: { id: "minecraft:diamond", count: 1, chance: 1.0 },
            colorA: [0.15, 0.15, 0.15],
            colorB: [0.3, 0.9, 1.0],
            mode: 1
        },
        {
            time: 100,
            inputs: [{ id: "eternalores:anthracite_coal", count: 24, chance: 1.0 }],
            output: { id: "minecraft:diamond", count: 1, chance: 1.0 },
            colorA: [0.05, 0.05, 0.05],
            colorB: [0.3, 0.9, 1.0],
            mode: 1
        },
        {
            time: 100,
            inputs: [{ id: "eternalores:lignite_coal", count: 16, chance: 1.0 }],
            output: { id: "minecraft:diamond", count: 1, chance: 1.0 },
            colorA: [0.2, 0.2, 0.2],
            colorB: [0.3, 0.9, 1.0],
            mode: 1
        },
        {
            time: 100,
            inputs: [{ id: "eternalores:peat_coal", count: 8, chance: 1.0 }],
            output: { id: "minecraft:diamond", count: 1, chance: 1.0 },
            colorA: [0.3, 0.2, 0.1],
            colorB: [0.3, 0.9, 1.0],
            mode: 1
        },
        

        {
            time: 100,
            inputs: [
                { id: 'eternalores:andesite_pebble', count: 24, chance: 1.0 },
                { id: "minecraft:blue_dye", count: 4, chance: 1.0 }
            ],
            output: { id: "minecraft:lapis_lazuli", count: 16, chance: 1.0 },
            colorA: [0.0, 0.2, 0.8],
            colorB: [0.1, 0.3, 1.0],
            mode: 1
        },
        {
            time: 100,
            inputs: [
                { id: "eternalores:quartz_enriched_iron_ingot", count: 6, chance: 1.0 },
                { id: 'eternalores:quartz_enriched_iron_ingot', count: 6, chance: 1.0 }
            ],
            output: { id: "minecraft:quartz", count: 32, chance: 1.0 },
            colorA: [0.9, 0.9, 0.9],
            colorB: [1.0, 0.95, 0.9],
            mode: 1
        },
        {
            time: 100,
            inputs: [
                { id: "oritech:still_mineral_slurry", count: 100, chance: 1.0, fluid: true },
                { id: 'oritech:clay_catalyst_beads', count: 12, chance: 1.0 }
            ],
            output: { id: "minecraft:quartz", count: 12, chance: 1.0 },
            colorA: [0.9, 0.9, 0.9],
            colorB: [1.0, 0.95, 0.9],
            mode: 1
        },
        {
            time: 100,
            inputs: [
                { id: "eternalores:calcite_pebble", count: 24, chance: 1.0 },
                { id: 'minecraft:magenta_dye', count: 4, chance: 1.0 }
            ],
            output: { id: "minecraft:amethyst_shard", count: 8, chance: 1.0 },
            colorA: [0.6, 0.2, 0.8],
            colorB: [0.8, 0.4, 1.0],
            mode: 1
        },
        {
            time: 100,
            inputs: [{ id: "minecraft:emerald", count: 4, chance: 1.0 }],
            output: { id: "minecraft:emerald", count: 4, chance: 1.0 },
            colorA: [0.0, 0.8, 0.2],
            colorB: [0.2, 1.0, 0.4],
            mode: 1
        },
        {
            time: 100,
            inputs: [
                { id: "minecraft:cod", count: 20, chance: 1.0 },
                { id: "eternalores:stone_dust", count: 5, chance: 1.0 }
            ],
            output: { id: "minecraft:prismarine_shard", count: 8, chance: 1.0 },
            colorA: [0.2, 0.7, 0.6],
            colorB: [0.4, 0.9, 0.8],
            mode: 1
        },
        {
            time: 100,
            inputs: [
                { id: "minecraft:glowstone_dust", count: 5, chance: 1.0 },
                { id: "eternalores:stone_dust", count: 20, chance: 1.0 }
            ],
            output: { id: "minecraft:prismarine_crystals", count: 8, chance: 1.0 },
            colorA: [0.4, 0.8, 0.8],
            colorB: [0.7, 1.0, 0.9],
            mode: 1
        },
        {
            time: 100,
            inputs: [{ id: 'catalystcore:liquid_blood_bucket', count: 4, chance: 1.0 }],
            output: { id: "twilightforest:carminite", count: 64, chance: 1.0 },
            colorA: [0.8, 0.0, 0.1],
            colorB: [0.4, 0.0, 0.1],
            mode: 1
        },
        {
            time: 100,
            inputs: [{ id: "eternalores:cosmic_matter_ingot", count: 1, chance: 1.0 }],
            output: { id: "extendedae:entro_crystal", count: 2048, chance: 1.0 },
            colorA: [0.3, 0.0, 0.5],
            colorB: [0.8, 0.2, 1.0],
            mode: 1
        },
        {
            time: 100,
            inputs: [{ id: "eternalores:gem_fluix", count: 64, chance: 1.0 }],
            output: { id: "extendedae:entro_crystal", count: 64, chance: 1.0 },
            colorA: [0.3, 0.0, 0.5],
            colorB: [0.8, 0.2, 1.0],
            mode: 1
        },
        {
            time: 100,
            inputs: [
                { id: 'enderio:redstone_alloy_ingot', count: 16, chance: 1.0 },
                { id: 'eternalores:gem_certus_quartz', count: 16, chance: 1.0 }
            ],
            output: { id: "appflux:redstone_crystal", count: 8, chance: 1.0 },
            colorA: [1.0, 0.0, 0.0],
            colorB: [0.5, 0.0, 0.0],
            mode: 1
        },
        {
            time: 100,
            inputs: [{ id: "eternalores:enderium_ingot", count: 4, chance: 1.0 }],
            output: { id: "enderio:ender_crystal", count: 4, chance: 1.0 },
            colorA: [0.1, 0.6, 0.5],
            colorB: [0.0, 0.3, 0.3],
            mode: 1
        },
        {
            time: 100,
            inputs: [{ id: "minecraft:emerald", count: 4, chance: 1.0 }],
            output: { id: "enderio:enticing_crystal", count: 4, chance: 1.0 },
            colorA: [0.9, 0.5, 0.7],
            colorB: [1.0, 0.8, 0.9],
            mode: 1
        },
        {
            time: 100,
            inputs: [{ id: 'minecraft:shulker_shell', count: 4, chance: 1.0 }],
            output: { id: "enderio:prescient_crystal", count: 4, chance: 1.0 },
            colorA: [0.9, 0.8, 0.2],
            colorB: [1.0, 1.0, 0.6],
            mode: 1
        },
        // {
        //     time: 100,
        //     inputs: [{ id: "eternalores:catalyrium_ingot", count: 2, chance: 1.0 }],
        //     output: { id: "eternalores:gem_arcanum", count: 6, chance: 1.0 },
        //     colorA: [0.5, 0.1, 0.8],
        //     colorB: [0.2, 0.0, 0.4],
        //     mode: 1
        // },
        {
            time: 100,
            inputs: [{ id: 'minecraft:quartz', count: 24, chance: 1.0 }],
            output: { id: "eternalores:gem_certus_quartz", count: 12, chance: 1.0 },
            colorA: [0.7, 0.8, 1.0],
            colorB: [0.9, 0.9, 1.0],
            mode: 1
        },
        {
            time: 100,
            inputs: [
                { id: "eternalores:gem_certus_quartz", count: 12, chance: 1.0 },
                { id: 'minecraft:quartz', count: 12, chance: 1.0 },
                { id: "minecraft:redstone", count: 12, chance: 1.0 }
            ],
            output: { id: "eternalores:gem_fluix", count: 24, chance: 1.0 },
            colorA: [0.5, 0.2, 0.8],
            colorB: [0.8, 0.1, 0.2],
            mode: 1
        },
        // {
        //     time: 100,
        //     inputs: [{ id: "eternalores:nanite_ingot", count: 2, chance: 1.0 }],
        //     output: { id: "eternalores:gem_morphite", count: 4, chance: 1.0 },
        //     colorA: [0.2, 0.9, 0.7],
        //     colorB: [0.1, 0.4, 0.5],
        //     mode: 1
        // },
        {
            time: 100,
            inputs: [{ id: "minecraft:obsidian", count: 4, chance: 1.0 }],
            output: { id: "eternalores:gem_obsidian", count: 16, chance: 1.0 },
            colorA: [0.1, 0.05, 0.15],
            colorB: [0.0, 0.0, 0.0],
            mode: 1
        },
        // {
        //     time: 100,
        //     inputs: [{ id: "minecraft:stone", count: 1, chance: 1.0 }],
        //     output: { id: "eternalores:gem_primornium", count: 2, chance: 1.0 },
        //     colorA: [0.9, 0.7, 0.1],
        //     colorB: [1.0, 0.9, 0.4],
        //     mode: 1
        // },
        {
            time: 100,
            inputs: [
                { id: 'eternalores:nethersteel_ingot', count: 3, chance: 1.0 },
                { id: 'minecraft:netherrack', count: 128, chance: 1.0 },
                { id: 'minecraft:amethyst_shard', count: 1, chance: 1.0 }
            ],
            output: { id: "eternalores:gem_pyrolite", count: 6, chance: 1.0 },
            colorA: [1.0, 0.3, 0.0],
            colorB: [0.8, 0.1, 0.0],
            mode: 1
        },
        {
            time: 100,
            inputs: [
                { id: "eternalores:plutonium_ingot", count: 4, chance: 1.0 },
                { id: "minecraft:diamond", count: 6, chance: 1.0 },
                { id: 'energizedpower:energized_gold_ingot', count: 10, chance: 1.0 },
            ],
            output: { id: "eternalores:gem_quantiquarite", count: 2, chance: 1.0 },
            colorA: [0.1, 0.8, 0.9],
            colorB: [0.6, 0.1, 0.9],
            mode: 1
        },
        {
            time: 100,
            inputs: [{ id: 'minecraft:lapis_block', count: 9, chance: 1.0 }],
            output: { id: "eternalores:gem_source", count: 81, chance: 1.0 },
            colorA: [0.8, 0.2, 0.9],
            colorB: [0.4, 0.1, 0.8],
            mode: 1
        },
        {
            time: 100,
            inputs: [{ id: 'minecraft:amethyst_block', count: 20, chance: 1.0 }],
            output: { id: "eternalores:gem_source", count: 81, chance: 1.0 },
            colorA: [0.8, 0.2, 0.9],
            colorB: [0.4, 0.1, 0.8],
            mode: 1
        },
        {
            time: 100,
            inputs: [{ id: 'eternalores:etherium_nugget', count: 2, chance: 0.5 }],
            output: { id: "eternalores:gem_spectral_sky_bluerite", count: 6, chance: 1.0 },
            colorA: [0.3, 0.7, 1.0],
            colorB: [0.7, 0.9, 1.0],
            mode: 1
        },
        {
            time: 100,
            inputs: [
                { id: 'eternalores:plate_sculkite', count: 2, chance: 1.0 },
                { id: 'eternalores:shadowsteel_small_dust', count: 1, chance: 0.75}
            ],
            output: { id: "eternalores:gem_tachyarite", count: 1, chance: 1.0 },
            colorA: [0.9, 0.9, 0.2],
            colorB: [1.0, 0.5, 0.0],
            mode: 1
        },
        // {
        //     time: 100,
        //     inputs: [{ id: "eternalores:tuff_pebble", count: 8, chance: 1.0 }],
        //     output: { id: "eternalores:gem_temictetl", count: 4, chance: 1.0 },
        //     colorA: [0.3, 0.4, 0.3],
        //     colorB: [0.1, 0.2, 0.1],
        //     mode: 1
        // },
        {
            time: 500,
            inputs: [
                { id: "eternalores:eternal_dark_ingot", count: 1, chance: 1.0 },
                { id: 'malum:eldritch_spirit', count: 2, chance: 1.0 },
                { id: 'malum:arcane_spirit', count: 2, chance: 1.0 },
                { id: 'malum:warp_flux', count: 16, chance: 1.0 },
            ],
            output: { id: "eternalores:gem_voiderite", count: 4, chance: 1.0 },
            colorA: [0.05, 0.0, 0.1],
            colorB: [0.2, 0.0, 0.3],
            mode: 3
        },
        {
            time: 500,
            inputs: [
                { id: "eternalores:eternal_light_ingot", count: 1, chance: 1.0 },
                { id: 'malum:eldritch_spirit', count: 2, chance: 1.0 },
                { id: 'malum:arcane_spirit', count: 2, chance: 1.0 },
                { id: 'malum:warp_flux', count: 16, chance: 1.0 },
            ],
            output: { id: "eternalores:gem_voiderite", count: 4, chance: 1.0 },
            colorA: [0.05, 0.0, 0.1],
            colorB: [0.2, 0.0, 0.3],
            mode: 3
        },
        {
            time: 100,
            inputs: [
                { id: "eternalores:calcite_pebble", count: 6, chance: 1.0 },
                { id: 'eternalores:calcium_dust', count: 3, chance: 1.0 }
            ],
            output: { id: "eternalores:gem_pearl", count: 6, chance: 1.0 },
            colorA: [0.9, 0.9, 0.95],
            colorB: [0.8, 0.85, 0.9],
            mode: 1
        },
        {
            time: 100,
            inputs: [
                { id: 'eternalores:stone_pebble', count: 64, chance: 1.0 },
                { id: "eternalores:fluorite", count: 8, chance: 1.0 }
            ],
            output: { id: "eternalores:fluorite", count: 24, chance: 1.0 },
            colorA: [0.2, 0.9, 0.4],
            colorB: [0.6, 0.2, 0.8],
            mode: 1
        },
        // {
        //     time: 100,
        //     inputs: [{ id: "eternalores:biomass", count: 8, chance: 1.0 }],
        //     output: { id: "eternalores:gem_amber", count: 8, chance: 1.0 },
        //     colorA: [1.0, 0.6, 0.0],
        //     colorB: [0.8, 0.4, 0.0],
        //     mode: 1
        // },
        {
            time: 100,
            inputs: [
                { id: 'eternalores:blackstone_pebble', count: 64, chance: 1.0 },
                { id: "eternalores:gem_apatite", count: 8, chance: 1.0 }
            ],
            output: { id: "eternalores:gem_apatite", count: 12, chance: 1.0 },
            colorA: [0.1, 0.6, 0.9],
            colorB: [0.0, 0.4, 0.7],
            mode: 1
        },
        // {
        //     time: 100,
        //     inputs: [{ id: "eternalores:samarium_ingot", count: 2, chance: 1.0 }],
        //     output: { id: "eternalores:gem_monazite", count: 6, chance: 1.0 },
        //     colorA: [0.6, 0.4, 0.2],
        //     colorB: [0.4, 0.2, 0.1],
        //     mode: 1
        // },
        // {
        //     time: 100,
        //     inputs: [{ id: "eternalores:chromium_ingot", count: 3, chance: 1.0 }],
        //     output: { id: "eternalores:gem_jade", count: 6, chance: 1.0 },
        //     colorA: [0.2, 0.7, 0.3],
        //     colorB: [0.1, 0.5, 0.2],
        //     mode: 1
        // },
        // {
        //     time: 100,
        //     inputs: [{ id: "eternalores:manganese_ingot", count: 3, chance: 1.0 }],
        //     output: { id: "eternalores:gem_garnet", count: 6, chance: 1.0 },
        //     colorA: [0.7, 0.1, 0.2],
        //     colorB: [0.4, 0.0, 0.1],
        //     mode: 1
        // },
        // {
        //     time: 100,
        //     inputs: [{ id: "eternalores:constantan_ingot", count: 3, chance: 1.0 }],
        //     output: { id: "eternalores:gem_cinnabar", count: 8, chance: 1.0 },
        //     colorA: [0.9, 0.2, 0.1],
        //     colorB: [0.6, 0.0, 0.0],
        //     mode: 1
        // },
        {
            time: 100,
            inputs: [
                { id: "minecraft:quartz", count: 8, chance: 1.0 },
                { id: "minecraft:black_dye", count: 1, chance: 1.0 }
            ],
            output: { id: "eternalores:gem_black_quartz", count: 8, chance: 1.0 },
            colorA: [0.2, 0.2, 0.2],
            colorB: [0.05, 0.05, 0.05],
            mode: 1
        },
        {
            time: 100,
            inputs: [
                { id: 'minecraft:netherrack', count: 64, chance: 1.0 },
                { id: "eternalores:gem_necroticarite", count: 8, chance: 1.0 }
            ],
            output: { id: "eternalores:gem_necroticarite", count: 16, chance: 0.75 },
            colorA: [0.0, 0.4, 0.4],
            colorB: [0.1, 0.2, 0.2],
            mode: 1
        },
        {
            time: 100,
            inputs: [
                { id: 'eternalores:sulfur', count: 2, chance: 1.0 },
                { id: 'minecraft:coarse_dirt', count: 2, chance: 1.0 }
            ],
            output: { id: "eternalores:gem_niter", count: 12, chance: 1.0 },
            colorA: [0.9, 0.9, 0.8],
            colorB: [0.7, 0.7, 0.6],
            mode: 1
        },
        {
            time: 100,
            inputs: [
                { id: "minecraft:amethyst_shard", count: 3, chance: 1.0 },
                { id: 'minecraft:blackstone', count: 12, chance: 1.0 }
            ],
            output: { id: "eternalores:gem_onyx", count: 6, chance: 1.0 },
            colorA: [0.1, 0.1, 0.1],
            colorB: [0.2, 0.2, 0.25],
            mode: 1
        },
        // {
        //     time: 100,
        //     inputs: [{ id: "eternalores:magnesium_ingot", count: 3, chance: 1.0 }],
        //     output: { id: "eternalores:gem_peridot", count: 6, chance: 1.0 },
        //     colorA: [0.5, 0.8, 0.1],
        //     colorB: [0.3, 0.6, 0.0],
        //     mode: 1
        // },
        // {
        //     time: 100,
        //     inputs: [{ id: "eternalores:cobalt_ingot", count: 3, chance: 1.0 }],
        //     output: { id: "eternalores:gem_spinel", count: 6, chance: 1.0 },
        //     colorA: [0.8, 0.1, 0.4],
        //     colorB: [0.5, 0.0, 0.2],
        //     mode: 1
        // },
        // {
        //     time: 100,
        //     inputs: [{ id: "eternalores:titanium_ingot", count: 3, chance: 1.0 }],
        //     output: { id: "eternalores:gem_sapphire", count: 6, chance: 1.0 },
        //     colorA: [0.1, 0.3, 0.9],
        //     colorB: [0.0, 0.1, 0.6],
        //     mode: 1
        // },
        // {
        //     time: 100,
        //     inputs: [{ id: "eternalores:chromium_ingot", count: 3, chance: 1.0 }],
        //     output: { id: "eternalores:gem_ruby", count: 6, chance: 1.0 },
        //     colorA: [0.9, 0.1, 0.2],
        //     colorB: [0.6, 0.0, 0.1],
        //     mode: 1
        // },
        {
            time: 100,
            inputs: [
                { id: 'minecraft:crying_obsidian', count: 3, chance: 1.0 },
                { id: "eternalores:gem_source", count: 3, chance: 1.0 }
            ],
            output: { id: "eternalores:gem_tanzanite", count: 6, chance: 1.0 },
            colorA: [0.4, 0.2, 0.9],
            colorB: [0.2, 0.0, 0.6],
            mode: 1
        },
        // {
        //     time: 100,
        //     inputs: [{ id: "eternalores:hafnium_ingot", count: 3, chance: 1.0 }],
        //     output: { id: "eternalores:gem_zircon", count: 6, chance: 1.0 },
        //     colorA: [0.8, 0.6, 0.4],
        //     colorB: [0.6, 0.4, 0.2],
        //     mode: 1
        // },
        // {
        //     time: 100,
        //     inputs: [{ id: "eternalores:shadowsteel_ingot", count: 2, chance: 1.0 }],
        //     output: { id: "malum:refined_soulstone", count: 4, chance: 1.0 },
        //     colorA: [0.4, 0.3, 0.5],
        //     colorB: [0.2, 0.1, 0.3],
        //     mode: 1
        // },
        // {
        //     time: 100,
        //     inputs: [{ id: "eternalores:nethersteel_ingot", count: 2, chance: 1.0 }],
        //     output: { id: "malum:blazing_quartz", count: 8, chance: 1.0 },
        //     colorA: [1.0, 0.4, 0.0],
        //     colorB: [0.8, 0.1, 0.0],
        //     mode: 1
        // },
        // {
        //     time: 100,
        //     inputs: [{ id: "eternalores:eternal_light_ingot", count: 1, chance: 1.0 }],
        //     output: { id: "malum:raw_brilliance", count: 4, chance: 1.0 },
        //     colorA: [1.0, 0.9, 0.5],
        //     colorB: [1.0, 1.0, 0.8],
        //     mode: 1
        // },
        {
            time: 100,
            inputs: [
                { id: "eternalores:annealed_copper_ingot", count: 3, chance: 1.0 },
                { id: 'eternalores:salt_dust', count: 12, chance: 0.25 }
            ],
            output: { id: "theurgy:sal_ammoniac_crystal", count: 8, chance: 1.0 },
            colorA: [0.9, 0.8, 0.4],
            colorB: [0.7, 0.6, 0.2],
            mode: 1
        },
        {
            time: 371,
            inputs: [
                { id: 'replication:raw_replica', count: 3, chance: 1.0 },
                { id: 'eternalores:enriched_sculkite', count: 12, chance: 1.0 },
                { id: 'eternalores:modularium_ingot', count: 1, chance: 0.25 }
            ],
            output: { id: 'eternalores:etherium_nugget', count: 32, chance: 0.5 },
            colorA: [0.9, 0.8, 0.4],
            colorB: [0.7, 0.6, 0.2],
            mode: 1
        }
    ]

    let i = 0;
    recipes.forEach(rs => {
        i++;

        let mode = String(rs.mode)
        let cA0 = String(rs.colorA[0])
        let cA1 = String(rs.colorA[1])
        let cA2 = String(rs.colorA[2])
        let cB0 = String(rs.colorB[0])
        let cB1 = String(rs.colorB[1])
        let cB2 = String(rs.colorB[2])
        let time = String(rs.time);
        let params = [mode, cA0, cA1, cA2, cB0, cB1, cB2, time];

        if (rs.customRadius !== undefined) params.push(String(rs.customRadius));
        if (rs.customStrength !== undefined) params.push(String(rs.customStrength));
        if (rs.transitionTicks !== undefined) params.push(String(rs.transitionTicks));

        let size = String(params.length);

        let args = [size].concat(params);

        let recipe = catalyst.recipes.modular_machinery_reborn.machine_recipe(machine_id, rs.time)
            .width(144)
            .height(80)
            .progressData(ProgressData.create().x(progressArrow.x).y(progressArrow.y))
            .requireFunctionOnStart("starting_nebula", args)
            .requireFunctionOnEnd("ending_nebula")
            .requireEnergyPerTick(1000000);

        let total_inputs = 0;

        if(rs.inputs && rs.inputs.length > 0)
        {
            if(rs.inputs.length > 9) throw Error(`[CatJS] Can't have more than 9 inputs in recipe #${i}`);
            rs.inputs.forEach(input => {
                total_inputs++;
                if(input.fluid)
                {
                    recipe.requireFluid(Fluid.of(input.id, input.count), input.chance);
                }
                else
                {
                    recipe.requireItem(Item.of(input.id, input.count), input.chance);
                }
            });
        }

        if(rs.output)
        {
            recipe.produceItem(Item.of(rs.output.id, rs.output.count), rs.output.chance);
        }

        recipe.jei();

        let inputIdx = 0;

        if(rs.inputs && rs.inputs.length > 0)
        {
            rs.inputs.forEach(input => {
                let slot = input_slots[inputIdx];
                if(input.fluid)
                {
                    recipe.requireFluid(Fluid.of(input.id, input.count), input.chance, slot.x, slot.y);
                }
                else
                {
                    recipe.requireItem(Item.of(input.id, input.count), input.chance, slot.x, slot.y);
                }
                inputIdx++;
            });
        }

        for(let slot_index = inputIdx; slot_index < 9; slot_index++)
        {
            recipe.emptyItem(input_slots[slot_index].x, input_slots[slot_index].y);
        }

        recipe.produceItem(Item.of(rs.output.id, rs.output.count), rs.output.chance, output_slot.x, output_slot.y);

        recipe.requireEnergyPerTick(1000000, energy_in.x, energy_in.y);

        let raw_id = rs.output ? rs.output.id : `recipe_${i}`;
        let recipe_name = raw_id.split('{')[0];

        recipe.id(`catalyst:mmr/hourglass/${i}/${recipe_name.replace(':', '_')}`);
    });

    console.log("[CatJS] Finished Hourglass recipes");
});

MMREvents.recipeFunction("starting_nebula", catalyst => {
    let tile = catalyst.getTile();
    let level = tile.getLevel();
    let pos = tile.getBlockPos();
    let targetPos = pos.above(5); 
    
    let data = tile.getPersistentData();
    let jobs = data.getInt("parallels") || 0;
    
    let state = level.getBlockState(targetPos);
    if(state.getBlock().id !== 'catalystcore:nebula_eterna')
    {
        jobs = 0;
    }
    
    jobs++;
    data.putInt("parallels", jobs);

    if(jobs === 1)
    {
        let targetState = Block.getBlock('catalystcore:nebula_eterna').defaultBlockState();
        level.setBlock(targetPos, targetState, 3);

        let targetBE = level.getBlockEntity(targetPos);
        
        if(targetBE)
        {
            targetBE.active = true;

            let size = parseInt(catalyst.get(0));

            if(size >= 8)
            {
                targetBE.mode = parseInt(catalyst.get(1));
                targetBE.colorA = [
                    parseFloat(catalyst.get(2)),
                    parseFloat(catalyst.get(3)),
                    parseFloat(catalyst.get(4))
                ];
                targetBE.colorB = [
                    parseFloat(catalyst.get(5)),
                    parseFloat(catalyst.get(6)),
                    parseFloat(catalyst.get(7))
                ]; 
            }

            if(size > 8)  targetBE.customRadius = parseFloat(catalyst.get(8));
            if(size > 9)  targetBE.customStrength = parseFloat(catalyst.get(9));
            if(size > 10) targetBE.transitionTicks = parseInt(catalyst.get(10));

            targetBE.setChanged();
            level.sendBlockUpdated(targetPos, targetState, targetState, 3);
        }
    }
});

MMREvents.recipeFunction("ending_nebula", catalyst => {
    let tile = catalyst.getTile();
    let level = tile.getLevel();
    let pos = tile.getBlockPos();
    let targetPos = pos.above(5); 

    let state = level.getBlockState(targetPos);
    let blockId = state.getBlock().id;

    if(blockId !== 'catalystcore:nebula_eterna')
    {
        catalyst.error("No black hole");
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
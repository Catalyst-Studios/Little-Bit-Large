/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
ServerEvents.recipes(catalyst => {
    catalyst.shaped(Item.of("catalystcore:reinforced_glass", 2), 
    [
        "IOI",
        "LGL",
        "IOI"
    ],
    {
        I: 'eternalores:plate_iridium',
        O: 'eternalores:gem_obsidian',
        L: 'eternalores:lead_block',
        G: 'ae2:quartz_vibrant_glass'
    })
    .id("catalyst:reinforced_glass");

    catalyst.shaped(Item.of('catalystcore:container_cell', 1), 
    [
        "RPR",
        "PGP",
        "RPR"
    ],
    {
        R: 'eternalores:rod_cinnabar',
        P: 'eternalores:plate_pearl',
        G: 'ae2:quartz_vibrant_glass'
    })
    .id("catalyst:container_cell");

    catalyst.shaped(Item.of('catalystcore:runic_slate', 2), [
        "SRD",
        "ERB",
        "RRR"
    ],
    {
        S: 'minecraft:stone',
        R: 'malum:runewood_log',
        D: 'minecraft:deepslate',
        E: 'minecraft:end_stone',
        B: 'minecraft:blackstone'
    })
    .id("catalyst:runic_slate");

    catalyst.shaped(Item.of('catalystcore:reinforced_bottle', 1), [
        "BGB",
        "R R",
        "RRR"
    ],
    {
        B: 'eternalores:brass_foil',
        G: 'eternalores:gem_onyx',
        R: 'catalystcore:reinforced_glass'
    })
    .id("catalyst:reinforced_bottle");

    catalyst.shaped(Item.of('catalystcore:liquid_blood_bucket', 1), [
        "ESE",
        "FBF",
        "SAS"
    ],
    {
        E: 'mysticalagriculture:earth_seeds',
        S: 'enderio:soularium_block',
        F: 'ars_nouveau:fire_essence',
        B: 'evilcraft:bucket_blood',
        A: 'ars_nouveau:abjuration_essence'
    })
    .id("catalyst:vampire/liquid_blood_bucket");

    catalyst.shaped(Item.of('catalystcore:liquid_phyto_oil_bucket', 1), [
        " C ",
        " B ",
        "   "
    ],
    {
        C: 'eternalores:compressed_biomass_block_4x',
        B: 'minecraft:bucket'
    })
    .id("catalyst:liquid_phyto_oil_bucket");

    catalyst.shaped(Item.of('eternalores:biomass', 64), [
        "   ",
        " L ",
        "   "
    ],
    {
        L: 'catalystcore:liquid_gunk_bucket'
    })
    .id("catalyst:biomass_from_junk");

    console.log("[CatJS] Added Cat Base recipes")
    
    catalyst.shaped(Item.of('catalystcore:nether_core', 1), [
        "PEP",
        "NCN",
        "PEP"
    ],
    {
        P: 'eternalores:plate_pyrolite',
        E: 'catalystcore:elemental_light_crystal',
        N: 'eternalores:nethersteel_foil',
        C: 'catalystcore:container_cell'
    })
    .id("catalyst:nether_core");

    catalyst.shaped(Item.of('catalystcore:overworld_core', 1), [
        "PEP",
        "MCM",
        "PEP"
    ],
    {
        P: 'eternalores:plate_jade',
        E: 'catalystcore:elemental_earth_crystal',
        M: 'catalystcore:mycelium_bottle',
        C: 'catalystcore:container_cell'
    })
    .id("catalyst:overworld_core");

    catalyst.shaped(Item.of('catalystcore:warden_core', 1), [
        "SIS",
        "ACA",
        "BIB"
    ],
    {
        S: 'eternalores:sculk_dust',
        I: 'catalystcore:infected_slate',
        A: 'catalystcore:sculk_bottle',
        C: 'catalystcore:container_cell',
        B: 'minecraft:sculk_catalyst'
    })
    .id("catalyst:warden_core");

    catalyst.shaped(Item.of('catalystcore:lava_orb', 1), [
        "PEP",
        "TCT",
        "PEP"
    ],
    {
        P: 'eternalores:plate_sanguis_vivus',
        E: 'catalystcore:elemental_fire_crystal',
        T: 'catalystcore:torchflower_bottle',
        C: 'catalystcore:container_cell'
    })
    .id("catalyst:lava_orb");

    catalyst.shaped(Item.of('catalystcore:water_orb', 1), [
        "PEP",
        "RCR",
        "PEP"
    ],
    {
        P: 'eternalores:plate_apatite',
        E: 'catalystcore:elemental_water_crystal',
        R: 'catalystcore:runic_arcane_slate',
        C: 'catalystcore:container_cell'
    })
    .id("catalyst:water_orb");

    catalyst.shaped(Item.of('catalystcore:end_core', 1), [
        "PEP",
        "RCR",
        "PEP"
    ],
    {
        P: 'eternalores:plate_onyx',
        E: 'catalystcore:elemental_darkness_crystal',
        R: 'catalystcore:runic_ender_slate',
        C: 'catalystcore:container_cell'
    })
    .id("catalyst:end_core");

    catalyst.shaped(Item.of('catalystcore:elder_core', 1), [
        "PEP",
        "RCR",
        "PEP"
    ],
    {
        P: 'eternalores:plate_prismarine',
        E: 'catalystcore:elemental_water_crystal',
        R: 'catalystcore:runic_blood_slate',
        C: 'catalystcore:container_cell'
    })
    .id("catalyst:elder_core");

    catalyst.shaped(Item.of('catalystcore:wither_core', 1), [
        "EAE",
        "BCB",
        "EAE"
    ],
    {
        E: 'eternalores:enriched_nether_star',
        A: 'catalystcore:elemental_wind_crystal',
        B: 'catalystcore:esotherical_runic_slate',
        C: 'catalystcore:container_cell'
    })
    .id("catalyst:wither_core");

    catalyst.shaped(Item.of('catalystcore:dragon_core', 1), [
        "PEP",
        "ACA",
        "PEP"
    ],
    {
        P: 'eternalores:plate_end_stone',
        E: 'catalystcore:elemental_darkness_crystal',
        A: 'catalystcore:pixie_essence',
        C: 'catalystcore:container_cell'
    })
    .id("catalyst:dragon_core");

    catalyst.shapeless(Item.of('catalystcore:esotherical_runic_slate', 1), [
        'catalystcore:runic_slate',
        'catalystcore:withered_essence_bottle'
    ])
    .id("catalyst:esotherical_runic_slate");

    catalyst.shapeless(Item.of('catalystcore:pixie_essence', 1), [
        'eternalores:gem_garnet',
        'catalystcore:dragon_blood_bottle'
    ])
    .id("catalyst:pixie_essence");

    catalyst.shapeless(Item.of('catalystcore:runic_blood_slate', 1), [
        'catalystcore:runic_slate',
        'catalystcore:life_essence_bottle'
    ])
    .id("catalyst:runic_blood_slate");

    catalyst.shapeless(Item.of('catalystcore:runic_arcane_slate', 1), [
        'catalystcore:runic_slate',
        'eternalores:source_dust'
    ])
    .id("catalyst:runic_arcane_slate");

    catalyst.shapeless(Item.of('catalystcore:runic_ender_slate', 1), [
        'catalystcore:runic_slate',
        'eternalores:enriched_endergetic'
    ])
    .id("catalyst:runic_ender_slate");

    catalyst.shapeless(Item.of('catalystcore:infected_slate', 1), [
        'catalystcore:runic_slate',
        'catalystcore:sculk_bottle'
    ])
    .id("catalyst:infected_slate");

    catalyst.shaped(Item.of('catalystcore:life_essence_bottle', 1), [
        "SGS",
        "SRS",
        "SSS"
    ],
    {
        S: 'eternalores:sanguis_vivus_shard',
        G: 'eternalores:gem_sanguis_vivus',
        R: 'catalystcore:reinforced_bottle'
    })
    .id("catalyst:life_essence_bottle");

    console.log("[CatJS] Added cores/nucleous")

    catalyst.shapeless('catalystcore:elemental_fire_crystal', 
        ['catalystcore:elemental_emptiness_crystal', 'ars_nouveau:fire_essence']
    ).id("catalyst:ars/personal_beacon/fire_crystal")

    catalyst.shapeless('catalystcore:elemental_water_crystal', 
        ['catalystcore:elemental_emptiness_crystal', 'ars_nouveau:water_essence']
    ).id("catalyst:ars/personal_beacon/water_crystal")

    catalyst.shapeless('catalystcore:elemental_earth_crystal', 
        ['catalystcore:elemental_emptiness_crystal', 'ars_nouveau:earth_essence']
    ).id("catalyst:ars/personal_beacon/earth_crystal")

    catalyst.shapeless('catalystcore:elemental_wind_crystal', 
        ['catalystcore:elemental_emptiness_crystal', 'ars_nouveau:air_essence']
    ).id("catalyst:ars/personal_beacon/wind_crystal")

    catalyst.shapeless('catalystcore:elemental_light_crystal', 
        ['catalystcore:elemental_emptiness_crystal', 'ars_nouveau:abjuration_essence']
    ).id("catalyst:ars/personal_beacon/light_crystal")

    catalyst.shapeless('catalystcore:elemental_darkness_crystal', 
        ['catalystcore:elemental_emptiness_crystal', 'sauce:anima_essence']
    ).id("catalyst:ars/personal_beacon/darkness_crystal")

    console.log("[CatJS] Added Cat Crystals recipes")

    catalyst.shaped(Item.of('mmr_cosmetics:sculk_cannon', 1), [
        "RAS",
        "RBC",
        "RDR"
    ],
    {
        R: 'minecraft:reinforced_deepslate',
        A: 'minecraft:redstone_lamp',
        S: 'create:schematicannon',
        B: 'eternalores:sculkite_gem',
        C: 'minecraft:redstone_block',
        D: 'minecraft:sculk_shrieker'
    })
    .id("catalyst:sculk_cannon");

    catalyst.shaped(Item.of('mmr_cosmetics:white_glyph', 32), [
        "W W",
        "W W",
        " W "
    ],
    {
        W: 'minecraft:white_wool'
    })
    .id("catalyst:white_glyph");

    catalyst.shaped(Item.of('mmr_cosmetics:purple_glyph', 32), [
        "P P",
        "P P",
        " P "
    ],
    {
        P: 'minecraft:purple_wool'
    })
    .id("catalyst:runes_purple");

    catalyst.shaped(Item.of('mmr_cosmetics:red_glyph', 32), [
        "R R",
        "R R",
        " R "
    ],
    {
        R: 'minecraft:red_wool'
    })
    .id("catalyst:runes_red");

    console.log("[CatJS] Added Cat Multiblock recipes")

    catalyst.shaped(Item.of('catalystcore:spirit_agglomeratio', 1), [
        'GSG',
        'PEV',
        'GRG'
    ],{
        E: 'evilcraft:inverted_potentia_empowered',
        G: 'evilcraft:garmonbozia',
        P: 'evilcraft:piercing_vengeance_focus',
        S: 'evilcraft:necromancer_staff',
        R: 'evilcraft:flesh_rejuvenated',
        V: 'evilcraft:vengeance_essence'
    }).id("catalyst:endgame/evilcraft/spirit_agglomeratio")

    catalyst.shaped(Item.of('catalystcore:cosmic_shatterer', 1), [
        "LWL",
        "DNS",
        "LAL"
    ],
    {
        L: 'catalystcore:life_essence_bottle',
        W: 'ars_nouveau:whirlisprig_shards',
        D: 'ars_nouveau:drygmy_charm',
        N: 'ars_elemental:necrotic_focus',
        S: 'ars_nouveau:starbuncle_charm',
        A: 'ars_elemental:siren_shards'
    })
    .id("catalyst:cosmic_shatterer");

    console.log("[CatJS] Added recipe for end game items")
    
    catalyst.shaped(Item.of('gateways:gate_pearl[gateways:gateway="apotheosis:endless_invader"]', 1), [
        "GIG",
        "EAW",
        "GBG"
    ],
    {
        G: 'apotheosis:god_fused_pearl',
        I: 'apotheosis:ignore_players_spawner_rune',
        E: 'apothic_enchanting:ender_library',
        A: 'gateways:gate_pearl[gateways:gateway="apotheosis:tiered/pinnacle"]',
        W: 'catalystcore:warden_core',
        B: 'apotheosis:ender_gem_case'
    })
    .id("catalyst:gate_pearl");


    console.log("[CatJS] Added misc items using Cat items");
    
})


/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
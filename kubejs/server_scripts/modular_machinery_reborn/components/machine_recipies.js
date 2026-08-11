/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
ServerEvents.recipes((catalyst) => {

    /**
     * All recipes follow the pattern:
     * ABA
     * BCB
     * ABA
     * @param {string} machineId The ID of the MMR machine (e.g., "mmr:data_extractor").
     * @param {string} itemA The item for the 'A' slot (usually casing).
     * @param {string} itemB The item for the 'B' slot.
     * @param {string} itemC The item for the 'C' slot (core component).
     */
    const registerController = (machineId, itemA, itemB, itemC) => {
        catalyst.shaped(
            getController(machineId),
            [
                'ABA',
                'BCB',
                'ABA'
            ],
            {
                A: itemA,
                B: itemB,
                C: itemC
            }
        ).id(`catalyst:mmr/controller/${machineId}`);
    };

    const getController = (machineId) => {
        return Item.of(`modular_machinery_reborn:controller[modular_machinery_reborn:machine="mmr:${machineId}"]`);
    }

    const plainCasing = "modular_machinery_reborn:casing_plain";
    const reinforcedCasing = 'modular_machinery_reborn:casing_reinforced';

    // Data Extractor
    registerController(
        "data_extractor",
        plainCasing,
        "hostilenetworks:loot_fabricator",
        '#curios:deep_learner'
    );

    // Phytomorphic Synthesizer
    registerController(
        "phytomorphic_synthesiszer",
        plainCasing,
        'industrialforegoing:hydroponic_bed',
        'mysticalagriculture:awakened_supremium_growth_accelerator'
    );

    // Arboretum
    registerController(
        "arboretum",
        'chipped:quartz_block_bricks',
        '#minecraft:saplings',
        'industrialforegoing:plant_sower'
    );

    // Apis Mutandis
    registerController(
        "apis_mutandis",
        'ars_nouveau:smooth_sourcestone_large_bricks',
        '#c:storage_blocks/honeycombs',
        'ars_nouveau:arcane_core'
    );

    //primitive apiary
    registerController(
        "primitive_apiary",
        "#minecraft:logs",
        '#minecraft:leaves',
        '#minecraft:flowers'
    );

    // Advanced Apiary
    registerController(
        "advanced_apiary",
        plainCasing,
        '#c:storage_blocks/honeycombs',
        '#productivebees:advanced_beehives'
    );

    // Abyssal Pump
    registerController(
        "abyssal_pump",
        plainCasing,
        '#c:storage_blocks/steel',
        'mekanism:electric_pump'
    );

    // Neutron Injector
    registerController(
        "neutron_injector",
        'mekanism:sps_casing',
        '#c:storage_blocks/steel',
        'mekanism:solar_neutron_activator'
    );

    // Osmotic Concentrator
    registerController(
        "osmotic_concentrator",
        plainCasing,
        '#c:storage_blocks/steel',
        'mekanism:thermal_evaporation_controller'
    );

    // Geo Syntex
    registerController(
        "geo_syntex",
        plainCasing,
        'minecraft:amethyst_cluster',
        'ars_nouveau:amethyst_golem_charm'
    );

    // Crystalline Fabricator (Maker)
    registerController(
        "crystalline_fabricator",
        plainCasing,
        'minecraft:amethyst_cluster',
        'pneumaticcraft:pressure_chamber_interface'
    );

    //Head drill
    registerController(
        "drill_miner",
        'industrialforegoing:machine_frame_supreme',
        'catalystcore:reinforced_glass',
        'industrialforegoing:fluid_laser_base'
    );

    //Celestial forge
    registerController(
        "celestial_forge",
        plainCasing,
        'industrialforegoing:fermentation_station',
        'energizedpower:advanced_crusher'
    );

    //Furnaces
    registerController(
        "primitive_furnace",
        "minecraft:mud_bricks",
        'minecraft:furnace',
        'minecraft:blast_furnace'
    );

    //Soul
    registerController(
        "nether_furnace",
        'create:cut_scorchia_bricks',
        'minecraft:smoker',
        'minecraft:soul_soil'
    );

    //Ender
    registerController(
        "end_furnace",
        'minecraft:end_stone_bricks',
        'minecraft:blast_furnace',
        'minecraft:dragon_egg'
    );

    //Multismelter
    registerController(
        "multismelter",
        plainCasing,
        'industrialforegoing:resourceful_furnace',
        'minecraft:blast_furnace'
    );

    //advanced multismelter
    registerController(
        "advanced_multismelter",
        'replication:replica_block',
        'ironfurnaces:netherite_furnace',
        'minecraft:blast_furnace'
    );

    //Beacon
    registerController(
        "personal_beacon",
        reinforcedCasing,
        'minecraft:beacon',
        'industrialforegoing:machine_frame_supreme'
    );

    //Alloy maker
    registerController(
        "primitive_alloy",
        'minecraft:mud_bricks',
        'minecraft:mud_bricks',
        'minecraft:campfire'
    );

    //Igneous extruders
    registerController(
        "igneus_extruder",
        'immersiveengineering:steel_scaffolding_standard',
        'create:railway_casing',
        'minecraft:stone'
    );

    //Primitive Igenous extruder
    registerController(
        "primitive_extruder",
        'minecraft:sand',
        'minecraft:stone',
        'minecraft:iron_pickaxe'
    );

    //greenhouse
    registerController(
        "greenhouse",
        'cookingforblockheads:sink',
        'mysticalagriculture:mystical_fertilizer',
        '#minecraft:hoes'
    );

    //fisher
    registerController(
        "fisher",
        'minecraft:water_bucket',
        '#minecraft:fishes',
        '#c:rods/fishing'
    );

    //colider
    registerController(
        "colider",
        'energizedpower:reinforced_advanced_machine_frame',
        'oritech:accelerator_controller',
        'oritech:heisenberg_compensator'
    );

    //extruder
    catalyst.shaped(
        getController("extruder"),
        [
            'ABC',
            'DEF',
            'GHI'
        ],
        {
            A: 'eternalores:mold_gear',
            C: 'eternalores:mold_plate',
            G: 'eternalores:mold_rod',
            I: 'eternalores:mold_foil',
            B: 'eternalores:netherite_gem_cutter',
            D: 'eternalores:cobalt_wire_cutter',
            F: 'eternalores:cobalt_hammer',
            H: 'eternalores:advanced_prospector',
            E: 'create:mechanical_saw'
        }
    ).id(`catalyst:mmr/controller/extruder`);

    //Macerator
    catalyst.shaped(getController("macerator"), [
        "OCO",
        "DAI",
        "OBO"
    ],
    {
        O: 'minecraft:oxidized_copper',
        C: 'eternalores:copper_hammer',
        D: 'eternalores:diamond_hammer',
        A: 'create:crushing_wheel',
        I: 'eternalores:iron_hammer',
        B: 'eternalores:cobalt_hammer'
    })
    .id("catalyst:mmr/controller/macerator");

    catalyst.shaped(getController("vampire"), [
        "DPD",
        "BAB",
        "DPD"
    ],
    {
        D: 'evilcraft:dark_block',
        P: 'evilcraft:promise_tier_1',
        B: 'evilcraft:blood_infusion_core',
        A: 'evilcraft:dark_power_gem_block'
    })
    .id("catalyst:mmr/controller/vampire");

    catalyst.shaped(getController("fission"), [
        "FUF",
        "UCU",
        "FUF"
    ],
    {
        F: 'mekanismgenerators:fission_fuel_assembly',
        U: 'eternalores:ultimatitanium_foil',
        C: 'modular_machinery_reborn:casing_reinforced'
    })
    .id("catalyst:mmr/controller/fission");

    catalyst.shaped(getController("miner"), [
        "DLD",
        "LOL",
        "ELE"
    ],
    {
        D: 'immersiveengineering:drillhead_steel',
        L: 'industrialforegoing:laser_drill',
        O: 'industrialforegoing:ore_laser_base',
        E: 'powah:energy_cell_niotic'
    })
    .id("catalyst:mmr/controller/miner");

    catalyst.shaped(getController("hourglass"), [
        "PEP",
        "RGR",
        "PAP"
    ],
    {
        P: 'eternalores:plate_tanzanite',
        E: 'eternalores:eternal_dark_ingot',
        R: 'catalystcore:reinforced_glass',
        G: 'eternalores:gear_nethersteel',
        A: 'eternalores:eternal_light_ingot'
    })
    .id("catalyst:mmr/controller/hourglass");

    catalyst.shaped(getController("vat"), [
        "SAS",
        "BRB",
        "AAA"
    ],
    {
        S: 'eternalores:sculk_dust',
        A: 'create:shadow_steel_casing',
        B: 'eternalores:shadowsteel_foil',
        R: 'create:refined_radiance_casing'
    })
    .id("catalyst:mmr/controller/vat");

    catalyst.shaped(getController("space"), [
        " S ",
        "CAC",
        "BBB"
    ],
    {
        S: 'mmr_cosmetics:sculk_cannon',
        C: 'immersiveengineering:cagelamp',
        A: 'eternalores:sanguis_vivus_block',
        B: 'eternalores:sculkite_block'
    })
    .id("catalyst:mmr/controller/space");

    catalyst.shaped(getController("portal"), [
        "PEP",
        "CGC",
        "PEP"
    ],
    {
        P: 'eternalores:plate_voiderite',
        E: 'malum:exposed_soulwood_log',
        C: 'eternalores:cosmic_matter_foil',
        G: 'eternalores:gear_stellarium'
    })
    .id("catalyst:mmr/controller/portal");

    console.log("[CatJS] Added MMR controllers")

});
/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/

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
            Item.of(`modular_machinery_reborn:controller[modular_machinery_reborn:machine="${machineId}"]`),
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
        ).id(`catalyst:mmr/controller/${machineId.split(':')[1]}`);
    };

    const getController = (machineId) => {
        return Item.of(`modular_machinery_reborn:controller[modular_machinery_reborn:machine="${machineId}"]`);
    }

    const plainCasing = "modular_machinery_reborn:casing_plain";
    const reinforcedCasing = 'modular_machinery_reborn:casing_reinforced';

    // Data Extractor
    registerController(
        "mmr:data_extractor",
        plainCasing,
        "hostilenetworks:loot_fabricator",
        '#curios:deep_learner'
    );

    // Phytomorphic Synthesizer
    registerController(
        "mmr:phytomorphic_synthesiszer",
        plainCasing,
        'industrialforegoing:hydroponic_bed',
        'mysticalagriculture:awakened_supremium_growth_accelerator'
    );

    // Arboretum
    registerController(
        "mmr:arboretum",
        'chipped:quartz_block_bricks',
        '#minecraft:saplings',
        'industrialforegoing:plant_sower'
    );

    // Apis Mutandis
    registerController(
        "mmr:apis_mutandis",
        'ars_nouveau:smooth_sourcestone_large_bricks',
        '#c:storage_blocks/honeycombs',
        'ars_nouveau:arcane_core'
    );

    //primitive apiary
    registerController(
        "mmr:primitive_apiary",
        "#minecraft:logs",
        '#minecraft:leaves',
        '#minecraft:flowers'
    );

    // Advanced Apiary
    registerController(
        "mmr:advanced_apiary",
        plainCasing,
        '#c:storage_blocks/honeycombs',
        '#productivebees:advanced_beehives'
    );

    // Abyssal Pump
    registerController(
        "mmr:abyssal_pump",
        plainCasing,
        '#c:storage_blocks/steel',
        'mekanism:electric_pump'
    );

    // Neutron Injector
    registerController(
        "mmr:neutron_injector",
        'eternalores:antimatter_block',
        '#c:storage_blocks/steel',
        'mekanism:solar_neutron_activator'
    );

    // Osmotic Concentrator
    registerController(
        "mmr:osmotic_concentrator",
        plainCasing,
        '#c:storage_blocks/steel',
        'mekanism:thermal_evaporation_controller'
    );

    // Geo Syntex
    registerController(
        "mmr:geo_syntex",
        plainCasing,
        'minecraft:amethyst_cluster',
        'ars_nouveau:amethyst_golem_charm'
    );

    // Crystalline Fabricator (Maker)
    registerController(
        "mmr:crystalline_fabricator",
        plainCasing,
        'minecraft:amethyst_cluster',
        'pneumaticcraft:pressure_chamber_interface'
    );

    //Head drill
    registerController(
        "mmr:drill_miner",
        'industrialforegoing:machine_frame_supreme',
        'catalystcore:reinforced_glass',
        'industrialforegoing:fluid_laser_base'
    );

    //Celestial forge
    registerController(
        "mmr:celestial_forge",
        plainCasing,
        'industrialforegoing:fermentation_station',
        'energizedpower:advanced_crusher'
    );

    //Furnaces
    registerController(
        "mmr:primitive_furnace",
        "minecraft:mud_bricks",
        'minecraft:furnace',
        'minecraft:blast_furnace'
    );

    //Soul
    registerController(
        "mmr:nether_furnace",
        'create:cut_scorchia_bricks',
        'minecraft:smoker',
        'minecraft:soul_soil'
    );

    //Ender
    registerController(
        "mmr:end_furnace",
        'minecraft:end_stone_bricks',
        'minecraft:blast_furnace',
        'minecraft:dragon_egg'
    );

    //Multismelter
    registerController(
        "mmr:multismelter",
        plainCasing,
        'industrialforegoing:resourceful_furnace',
        'minecraft:blast_furnace'
    );

    //advanced multismelter
    registerController(
        "mmr:advanced_multismelter",
        'replication:replica_block',
        'ironfurnaces:netherite_furnace',
        'minecraft:blast_furnace'
    );

    //Beacon
    registerController(
        "mmr:personal_beacon",
        reinforcedCasing,
        'minecraft:beacon',
        'industrialforegoing:machine_frame_supreme'
    );

    //Alloy maker
    registerController(
        "mmr:primitive_alloy",
        'minecraft:mud_bricks',
        'minecraft:mud_bricks',
        'minecraft:campfire'
    );

    //Igneous extruders
    registerController(
        "mmr:igneus_extruder",
        'immersiveengineering:steel_scaffolding_standard',
        'create:railway_casing',
        'minecraft:stone'
    );

    //Primitive Igenous extruder
    registerController(
        "mmr:primitive_extruder",
        'minecraft:sand',
        'minecraft:stone',
        'minecraft:iron_pickaxe'
    );

    //greenhouse
    registerController(
        "mmr:greenhouse",
        'cookingforblockheads:sink',
        'mysticalagriculture:mystical_fertilizer',
        '#minecraft:hoes'
    );

    //fisher
    registerController(
        "mmr:fisher",
        'minecraft:water_bucket',
        '#minecraft:fishes',
        '#c:rods/fishing'
    );

    //colider
    registerController(
        "mmr:colider",
        'energizedpower:reinforced_advanced_machine_frame',
        'oritech:accelerator_controller',
        'oritech:heisenberg_compensator'
    );

    //extruder
    catalyst.shaped(
        Item.of(getController("mmr:extruder")),
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

    console.log("[CatJS] Added MMR controllers")

});
/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/

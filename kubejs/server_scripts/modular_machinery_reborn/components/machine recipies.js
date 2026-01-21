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
     * * @param {string} machineId The ID of the MMR machine (e.g., "mmr:data_extractor").
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
        ).id(`catalyst:mmr/controller/${machineId.split(':')[1]}`);;
    };

    const plainCasing = "modular_machinery_reborn:casing_plain";

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
        plainCasing,
        '#minecraft:saplings',
        'industrialforegoing:plant_sower'
    );

    // Apis Mutandis
    registerController(
        "mmr:apis_mutandis",
        plainCasing,
        '#c:storage_blocks/honeycombs',
        'ars_nouveau:arcane_core'
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
        plainCasing,
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
        'mysticalagriculture:awakened_supremium_growth_accelerator'
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
        plainCasing,
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

});
/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
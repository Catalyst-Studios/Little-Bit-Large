/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
ServerEvents.recipes((catalyst) => {

    /* recipe for osmotic concentrator
    catalyst.shaped(
        Item.of('modular_machinery_reborn:controller[modular_machinery_reborn:machine="mmr:osmotic_concentrator"]'), [
        'ABA',
        'BCB',
        'ABA' ],
         {
        A: "modular_machinery_reborn:casing_plain",
        B: "mekanism:ultimate_control_circuit",
        C: "mekanism:thermal_evaporation_controller"
    
    });
         recipe for neutron injector
       catalyst.shaped(
        Item.of('modular_machinery_reborn:controller[modular_machinery_reborn:machine="mmr:neutron_injector"]'), [
        'ABA',
        'BCB',
        'ABA' ],
         {
        A: "modular_machinery_reborn:casing_plain",
        B: "mekanism:ultimate_control_circuit",
        C: "mekanism:solar_neutron_activator"
    });
        // recipe for centrifugal seperator
       catalyst.shaped(
        Item.of('modular_machinery_reborn:controller[modular_machinery_reborn:machine="mmr:centrifugal_seperator"]'), [
        'ABA',
        'BCB',
        'ABA' ],
         {
        A: "modular_machinery_reborn:casing_plain",
        B: "mekanism:ultimate_control_circuit",
        C: "mekanism:electric_pump"
    
    });*/
        // recipe for data extractor
       catalyst.shaped(
        Item.of('modular_machinery_reborn:controller[modular_machinery_reborn:machine="mmr:data_extractor"]'), [
        'ABA',
        'BCB',
        'ABA' ],
         {
        A: "modular_machinery_reborn:casing_plain",
        B: "hostilenetworks:loot_fabricator",
        C: '#curios:deep_learner'
    
    });
    // recipe for phytomorphic synthesizer
    catalyst.shaped(
    Item.of('modular_machinery_reborn:controller[modular_machinery_reborn:machine="mmr:phytomorphic_synthesiszer"]'), [
    'ABA',
    'BCB',
    'ABA' ],
     {
    A: "modular_machinery_reborn:casing_plain",
    B: 'industrialforegoing:hydroponic_bed',
    C: 'mysticalagriculture:awakened_supremium_growth_accelerator'

    });
    catalyst.shaped(
        Item.of('modular_machinery_reborn:controller[modular_machinery_reborn:machine="mmr:arboretum"]'), [
        'ABA',
        'BCB',
        'ABA' ],
         {
        A: "modular_machinery_reborn:casing_plain",
        B: '#minecraft:saplings',
        C: 'industrialforegoing:plant_sower'
    
        });
    

    
});
/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
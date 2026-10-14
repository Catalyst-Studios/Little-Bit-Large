
/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/

ServerEvents.recipes(catalyst => {

    catalyst.shaped(Item.of("ae2netanalyser:tick_analyser"),
    [
        " A ",
        "ENE",
        " E "
    ],{
        A: 'ae2:fluix_pearl',
        E: 'minecraft:ender_pearl',
        N: 'ae2netanalyser:network_analyser',
    
    }).id("catalyst:ae2/tick_analyser");

    catalyst.custom({
        type: "extendedae:crystal_assembler",
        input_items: [
            { ingredient: { item: "megacells:mega_pattern_provider" } },
            { amount: 3, ingredient: { item: "ae2:capacity_card" } },
            { amount: 3, ingredient: { item: "minecraft:crafting_table" } },
            { ingredient: { item: "extendedae:concurrent_processor" } },
            { amount: 6, ingredient: { tag: "ae2:glass_cable" } }
        ],
        output: { count: 1, id: "extendedae:ex_pattern_provider" }
    }).id('catalyst:extendedae/ex_pattern_provider_cheap');

    catalyst.custom({
        type: "extendedae:crystal_assembler",
        input_items: [
            { amount: 4, ingredient: { tag: "ae2:pattern_provider" } },
            { amount: 3, ingredient: { item: "ae2:capacity_card" } },
            { amount: 3, ingredient: { item: "minecraft:crafting_table" } },
            { ingredient: { item: "extendedae:concurrent_processor" } },
            { amount: 6, ingredient: { tag: "ae2:glass_cable" } }
        ],
        output: { count: 1, id: "extendedae:ex_pattern_provider" }
    }).id('catalyst:extendedae/ex_pattern_provider_normal');

    catalyst.custom({
        type: "extendedae:crystal_assembler",
        input_items: [
            { ingredient: { item: "megacells:mega_interface" } },
            { amount: 3, ingredient: { item: "ae2:capacity_card" } },
            { amount: 3, ingredient: { tag: "c:glass_blocks" } },
            { ingredient: { item: "extendedae:concurrent_processor" } },
            { amount: 6, ingredient: { tag: "ae2:glass_cable" } }
        ],
        output: { count: 1, id: "extendedae:ex_interface" }
    }).id('catalyst:extendedae/ex_interface_cheap');

    catalyst.custom({
        type: "extendedae:crystal_assembler",
        input_items: [
            { amount: 4, ingredient: { tag: "ae2:interface" } },
            { amount: 3, ingredient: { item: "ae2:capacity_card" } },
            { amount: 3, ingredient: { tag: "c:glass_blocks" } },
            { ingredient: { item: "extendedae:concurrent_processor" } },
            { amount: 6, ingredient: { tag: "ae2:glass_cable" } }
        ],
        output: { count: 1, id: "extendedae:ex_interface" }
    }).id('catalyst:extendedae/ex_interface_normal');

    catalyst.custom({
        type: "extendedae:crystal_assembler",
        input_items: [
            { amount: 4, ingredient: { item: "extendedae:ex_pattern_provider" } },
            { amount: 2, ingredient: { item: "extendedae:concurrent_processor" } }
        ],
        output: { count: 1, id: "expandedae:exp_pattern_provider" }
    }).id('catalyst:expandedae/exp_pattern_provider_from_extended');

    catalyst.custom({
        type: "extendedae:crystal_assembler",
        input_items: [
            { ingredient: { item: "advanced_ae:adv_pattern_provider" } },
            { amount: 2, ingredient: { item: "extendedae:concurrent_processor" } }
        ],
        output: { count: 1, id: "expandedae:exp_pattern_provider" }
    }).id('catalyst:expandedae/exp_pattern_provider_from_advanced');

    let press = (block, output) => {
        catalyst.shaped(
            Item.of(output, 1), 
            [
                'PBP',
                'BFB', 
                'PBP'
            ],
            {
                P: 'eternalores:plate_cast_steel',
                F: 'eternalores:cast_steel_foil',
                B: block
            }
        ).id(`catalyst:ae2/${output.replace(':', '_')}`);
    };

    press('ae2:quartz_block', 'ae2:calculation_processor_press');
    press('minecraft:diamond_block', 'ae2:engineering_processor_press');
    press('minecraft:gold_block', 'ae2:logic_processor_press');
    press('eternalores:silicon_block', 'ae2:silicon_press');
    
    press('ae2:singularity', 'advanced_ae:quantum_processor_press')
    press('appflux:charged_redstone_block', 'appflux:energy_processor_press')
    press('megacells:sky_steel_ingot', 'megacells:accumulation_processor_press')


    catalyst.shapeless(Item.of('ae2:memory_card', 1), Item.of('ae2:memory_card', 1))
            .id(`catalyst:ae2/memory_card_cleaner`);

    catalyst.shaped(Item.of('catalystcore:infinity_lava_cell'), [
        'ABA',
        'LAL',
        'PCP'
    ], {
        A: 'ae2:cell_component_256k',
        B: 'powah:blazing_crystal_block',
        L: 'catalystcore:reinforced_glass',
        P: 'eternalores:plate_obsidian',
        C: 'eternalores:blaze_block' 
    })
    .id('catalyst:ae2/lava/inf_cell');

    catalyst.shaped(Item.of('catalystcore:infinity_milk_cell'), [
        'GBG',
        'BKB',
        'MMM'
    ], {
        M: 'eternalores:plate_aluminum',
        G: 'minecraft:glass',
        B: 'minecraft:milk_bucket',
        K: 'ae2:cell_component_4k'
    })
    .id('catalyst:ae2/milk/inf_cell');

    catalyst.shaped(Item.of('catalystcore:infinity_latex_cell'), [
        'GFG',
        'LKL',
        'PCP'
    ], {
        G: 'ae2:quartz_vibrant_glass',
        F: 'industrialforegoing:fluid_extractor',
        L: '#minecraft:logs',
        K: 'ae2:cell_component_64k',
        P: 'eternalores:plate_iridium',
        C: 'industrialforegoing:machine_frame_advanced'
    })
    .id('catalyst:ae2/latex/inf_cell');

    catalyst.shaped(Item.of('catalystcore:infinity_sewage_cell'), [
        'GSG',
        'KCK',
        'III'
    ], {
        G: 'ae2:quartz_vibrant_glass',
        S: 'industrialforegoing:machine_frame_supreme',
        K: 'megacells:cell_component_1m',
        C: 'industrialforegoing:sewage_composter',
        I: 'eternalores:plutonium_ingot'
    })
    .id('catalyst:ae2/sewage/inf_cell');

    catalyst.shaped(Item.of('catalystcore:infinity_sludge_cell'), [
        'GGG',
        'KCK',
        'DDD'
    ], {
        G: 'minecraft:glass',
        K: 'ae2:cell_component_4k',
        C: 'industrialforegoing:sludge_refiner',
        D: 'minecraft:dirt'
    })
    .id('catalyst:ae2/sludge/inf_cell');

    catalyst.shaped(Item.of('catalystcore:infinity_creosote_cell'), [
        'GGG',
        'CXC',
        'CCC'
    ], {
        G: 'minecraft:glass',
        C: 'immersiveengineering:cokebrick',
        X: 'ae2:cell_component_1k'
    })
    .id('catalyst:ae2/creosote/inf_cell');

    catalyst.shaped(Item.of('catalystcore:infinity_blood_cell'), [
        'SBS',
        'XCX',
        'BBB'
    ], {
        S: 'evilcraft:blood_infusion_core',
        B: 'evilcraft:dark_brick',
        X: 'evilcraft:environmental_accumulation_core',
        C: 'evilcraft:promise_tier_2'
    })
    .id('catalyst:ae2/blood/inf_cell');

    catalyst.shaped(Item.of('catalystcore:infinity_fluid_xp_cell'), [
        'GKG',
        'KCK',
        'JXJ'
    ], {
        G: 'sfm:xp_goop',
        K: 'megacells:cell_component_1m',
        C: 'enderio:xp_obelisk',
        J: 'eternalores:plate_jade',
        X: 'eternalores:plate_pyrolite'
    })
    .id('catalyst:ae2/fluid_xp/inf_cell');

    catalyst.custom({
        type: "ae2:inscriber",
        ingredients:
        {
            middle:
            {
                item: "eternalores:gem_certus_quartz"
            },
            top:
            {
                item: "ae2:calculation_processor_press"
            }
        },
        mode: "inscribe",
        result:
        {
            count: 1,
            id: "ae2:printed_calculation_processor"
        }
    }).id("ae2:inscriber/calculation_processor_print")

    console.log("[CatJS] Added AE2 recipes")
});

/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
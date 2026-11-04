/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/

ServerEvents.recipes(catalyst => {

    // Fluix Blocks	
    catalyst.custom({
        type: 'powah:energizing',
        ingredients: [
            Ingredient.of('ae2:quartz_block'),
            Ingredient.of('minecraft:redstone'),
            Ingredient.of('minecraft:redstone'),
            Ingredient.of('minecraft:redstone'),
            Ingredient.of('minecraft:redstone'),
            Ingredient.of('minecraft:quartz_block')
        ],
        energy: 10000,
        result: Item.of('ae2:fluix_block', 2)
    })
    .id('catalyst:energizing/fluix_block')
    
    // Energized Steel Block
    catalyst.custom({
        type: 'powah:energizing',
        ingredients: [
            Ingredient.of('eternalores:compressed_iron_block_1x'),
            Ingredient.of('eternalores:compressed_gold_block_1x')
        ],
        energy: 378000,
        result: Item.of('eternalores:compressed_energized_steel_block_1x', 1)
    })
    .id('catalyst:energizing/compressed_energized_steel_block')

    //Uraninite 
    catalyst.custom({
        type: 'powah:energizing',
        ingredients: [
            Ingredient.of('#c:ingots/uranium'),
            Ingredient.of('#c:ingots/uranium')
        ],
        energy: 60000,
        result: Item.of('eternalores:uraninite_ingot', 2)
    })
    .id('catalyst:energizing/uraninite_ingot_2')

    catalyst.custom({
        type: 'powah:energizing',
        ingredients: [
            Ingredient.of('#c:ingots/uranium'),
            Ingredient.of('#c:ingots/uranium'),
            Ingredient.of('#c:ingots/uranium')
        ],
        energy: 90000,
        result: Item.of('eternalores:uraninite_ingot', 3)
    })
    .id('catalyst:energizing/uraninite_ingot_3')

    catalyst.custom({
        type: 'powah:energizing',
        ingredients: [
            Ingredient.of('#c:ingots/uranium'),
            Ingredient.of('#c:ingots/uranium'),
            Ingredient.of('#c:ingots/uranium'),
            Ingredient.of('#c:ingots/uranium')
        ],
        energy: 120000,
        result: Item.of('eternalores:uraninite_ingot', 4)
    })
    .id('catalyst:energizing/uraninite_ingot_4')

    catalyst.custom({
        type: 'powah:energizing',
        ingredients: [
            Ingredient.of('#c:ingots/uranium'),
            Ingredient.of('#c:ingots/uranium'),
            Ingredient.of('#c:ingots/uranium'),
            Ingredient.of('#c:ingots/uranium'),
            Ingredient.of('#c:ingots/uranium')
        ],
        energy: 150000,
        result: Item.of('eternalores:uraninite_ingot', 5)
    })
    .id('catalyst:energizing/uraninite_ingot_5')

    catalyst.custom({
        type: 'powah:energizing',
        ingredients: [
            Ingredient.of('#c:ingots/uranium'),
            Ingredient.of('#c:ingots/uranium'),
            Ingredient.of('#c:ingots/uranium'),
            Ingredient.of('#c:ingots/uranium'),
            Ingredient.of('#c:ingots/uranium'),
            Ingredient.of('#c:ingots/uranium')
        ],
        energy: 180000,
        result: Item.of('eternalores:uraninite_ingot', 6)
    })
    .id('catalyst:energizing/uraninite_ingot_6')

    //Uraninite blocks
    catalyst.custom({
        type: 'powah:energizing',
        ingredients: [
            Ingredient.of('eternalores:uranium_block')
        ],
        energy: 270000,
        result: Item.of('eternalores:uraninite_block', 1)
    })
    .id('catalyst:energizing/uraninite_block_1')

    catalyst.custom({
        type: 'powah:energizing',
        ingredients: [
            Ingredient.of('eternalores:uranium_block'),
            Ingredient.of('eternalores:uranium_block')
        ],
        energy: 540000,
        result: Item.of('eternalores:uraninite_block', 2)
    })
    .id('catalyst:energizing/uraninite_block_2')

    catalyst.custom({
        type: 'powah:energizing',
        ingredients: [
            Ingredient.of('eternalores:uranium_block'),
            Ingredient.of('eternalores:uranium_block'),
            Ingredient.of('eternalores:uranium_block')
        ],
        energy: 810000,
        result: Item.of('eternalores:uraninite_block', 3)
    })
    .id('catalyst:energizing/uraninite_block_3')

    catalyst.custom({
        type: 'powah:energizing',
        ingredients: [
            Ingredient.of('eternalores:uranium_block'),
            Ingredient.of('eternalores:uranium_block'),
            Ingredient.of('eternalores:uranium_block'),
            Ingredient.of('eternalores:uranium_block')
        ],
        energy: 1080000,
        result: Item.of('eternalores:uraninite_block', 4)
    })
    .id('catalyst:energizing/uraninite_block_4')

    catalyst.custom({
        type: 'powah:energizing',
        ingredients: [
            Ingredient.of('eternalores:uranium_block'),
            Ingredient.of('eternalores:uranium_block'),
            Ingredient.of('eternalores:uranium_block'),
            Ingredient.of('eternalores:uranium_block'),
            Ingredient.of('eternalores:uranium_block')
        ],
        energy: 1350000,
        result: Item.of('eternalores:uraninite_block', 5)
    })
    .id('catalyst:energizing/uraninite_block_5')

    catalyst.custom({
        type: 'powah:energizing',
        ingredients: [
            Ingredient.of('eternalores:uranium_block'),
            Ingredient.of('eternalores:uranium_block'),
            Ingredient.of('eternalores:uranium_block'),
            Ingredient.of('eternalores:uranium_block'),
            Ingredient.of('eternalores:uranium_block'),
            Ingredient.of('eternalores:uranium_block')
        ],
        energy: 1620000,
        result: Item.of('eternalores:uraninite_block', 6)
    })
    .id('catalyst:energizing/uraninite_block_6')

    //Uranium
    catalyst.custom({
        type: 'powah:energizing',
        ingredients: [
            Ingredient.of('eternalores:uraninite_ingot')
        ],
        energy: 30000,
        result: Item.of('eternalores:uranium_ingot', 1)
    })
    .id('catalyst:energizing/uranium_ingot_1')

    catalyst.custom({
        type: 'powah:energizing',
        ingredients: [
            Ingredient.of('eternalores:uraninite_ingot'),
            Ingredient.of('eternalores:uraninite_ingot')
        ],
        energy: 60000,
        result: Item.of('eternalores:uranium_ingot', 2)
    })
    .id('catalyst:energizing/uranium_ingot_2')

    catalyst.custom({
        type: 'powah:energizing',
        ingredients: [
            Ingredient.of('eternalores:uraninite_ingot'),
            Ingredient.of('eternalores:uraninite_ingot'),
            Ingredient.of('eternalores:uraninite_ingot')
        ],
        energy: 90000,
        result: Item.of('eternalores:uranium_ingot', 3)
    })
    .id('catalyst:energizing/uranium_ingot_3')

    catalyst.custom({
        type: 'powah:energizing',
        ingredients: [
            Ingredient.of('eternalores:uraninite_ingot'),
            Ingredient.of('eternalores:uraninite_ingot'),
            Ingredient.of('eternalores:uraninite_ingot'),
            Ingredient.of('eternalores:uraninite_ingot')
        ],
        energy: 120000,
        result: Item.of('eternalores:uranium_ingot', 4)
    })
    .id('catalyst:energizing/uranium_ingot_4')

    catalyst.custom({
        type: 'powah:energizing',
        ingredients: [
            Ingredient.of('eternalores:uraninite_ingot'),
            Ingredient.of('eternalores:uraninite_ingot'),
            Ingredient.of('eternalores:uraninite_ingot'),
            Ingredient.of('eternalores:uraninite_ingot'),
            Ingredient.of('eternalores:uraninite_ingot')
        ],
        energy: 150000,
        result: Item.of('eternalores:uranium_ingot', 5)
    })
    .id('catalyst:energizing/uranium_ingot_5')

    catalyst.custom({
        type: 'powah:energizing',
        ingredients: [
            Ingredient.of('eternalores:uraninite_ingot'),
            Ingredient.of('eternalores:uraninite_ingot'),
            Ingredient.of('eternalores:uraninite_ingot'),
            Ingredient.of('eternalores:uraninite_ingot'),
            Ingredient.of('eternalores:uraninite_ingot'),
            Ingredient.of('eternalores:uraninite_ingot')
        ],
        energy: 180000,
        result: Item.of('eternalores:uranium_ingot', 6)
    })
    .id('catalyst:energizing/uranium_ingot_6')

    //Uranium Block
    catalyst.custom({
        type: 'powah:energizing',
        ingredients: [
            Ingredient.of('eternalores:uraninite_block')
        ],
        energy: 270000,
        result: Item.of('eternalores:uranium_block', 1)
    })
    .id('catalyst:energizing/uranium_block_1')

    catalyst.custom({
        type: 'powah:energizing',
        ingredients: [
            Ingredient.of('eternalores:uraninite_block'),
            Ingredient.of('eternalores:uraninite_block')
        ],
        energy: 540000,
        result: Item.of('eternalores:uranium_block', 2)
    })
    .id('catalyst:energizing/uranium_block_2')

    catalyst.custom({
        type: 'powah:energizing',
        ingredients: [
            Ingredient.of('eternalores:uraninite_block'),
            Ingredient.of('eternalores:uraninite_block'),
            Ingredient.of('eternalores:uraninite_block')
        ],
        energy: 810000,
        result: Item.of('eternalores:uranium_block', 3)
    })
    .id('catalyst:energizing/uranium_block_3')

    catalyst.custom({
        type: 'powah:energizing',
        ingredients: [
            Ingredient.of('eternalores:uraninite_block'),
            Ingredient.of('eternalores:uraninite_block'),
            Ingredient.of('eternalores:uraninite_block'),
            Ingredient.of('eternalores:uraninite_block')
        ],
        energy: 1080000,
        result: Item.of('eternalores:uranium_block', 4)
    })
    .id('catalyst:energizing/uranium_block_4')

    catalyst.custom({
        type: 'powah:energizing',
        ingredients: [
            Ingredient.of('eternalores:uraninite_block'),
            Ingredient.of('eternalores:uraninite_block'),
            Ingredient.of('eternalores:uraninite_block'),
            Ingredient.of('eternalores:uraninite_block'),
            Ingredient.of('eternalores:uraninite_block')
        ],
        energy: 1350000,
        result: Item.of('eternalores:uranium_block', 5)
    })
    .id('catalyst:energizing/uranium_block_5')

    catalyst.custom({
        type: 'powah:energizing',
        ingredients: [
            Ingredient.of('eternalores:uraninite_block'),
            Ingredient.of('eternalores:uraninite_block'),
            Ingredient.of('eternalores:uraninite_block'),
            Ingredient.of('eternalores:uraninite_block'),
            Ingredient.of('eternalores:uraninite_block'),
            Ingredient.of('eternalores:uraninite_block')
        ],
        energy: 1620000,
        result: Item.of('eternalores:uranium_block', 6)
    })
    .id('catalyst:energizing/uranium_block_6')

    catalyst.shaped(Item.of('powah:dielectric_paste', 64),
    [
        "AAA",
        "EEA",
        "NNC"
    ],{
        C: 'minecraft:clay',
        A: 'eternalores:carbon_blend',
        E: 'eternalores:basalt_dust',
        N: 'eternalores:nether_blend'
    
    }).id("catalyst:powah/dielectric_paste");

    catalyst.shaped(Item.of('powah:photoelectric_pane', 1), [
        "DGD",
        "APA",
        "DAD"
    ],
    {
        D: 'powah:dielectric_paste',
        G: 'minecraft:glass_pane',
        A: 'eternalores:gallium_ingot',
        P: 'enderio:photovoltaic_plate'
    })
    .id("catalyst:solar/photoelectric_pane");

    catalyst.shaped(Item.of('powah:crystal_nitro', 5), [
        "NNN",
        "N N",
        "NNN"
    ],
    {
        N: 'mysticalagriculture:nitro_crystal_essence'
    })
    .id("catalyst:powah/crystal_nitro");

    //Generators
    catalyst.shaped(Item.of('powah:thermo_generator_starter', 1), [
        "PPP",
        "EDE",
        "TLT"
    ],
    {
        P: 'eternalores:plate_enderium',
        E: 'eternalores:eternal_dark_ingot',
        D: 'powah:dielectric_casing',
        T: 'powah:thermoelectric_plate',
        L: 'eternalores:lumium_capacitor'
    })
    .id("catalyst:thermo_generator_starter");

    catalyst.shaped(Item.of('powah:thermo_generator_basic', 1), [
        "PPP",
        "ETE",
        "ALA"
    ],
    {
        P: 'eternalores:plate_enderium',
        E: 'eternalores:eternal_light_ingot',
        A: 'powah:thermo_generator_starter',
        T: 'eternalores:lumium_block',
        L: 'eternalores:lumium_capacitor'
    })
    .id("catalyst:thermo_generator_basic");

    catalyst.shaped(Item.of('powah:thermo_generator_hardened', 1), [
        "PCP",
        "GTG",
        "ASA"
    ],
    {
        P: 'eternalores:plate_sculkite',
        C: 'eternalores:compressed_energized_steel_block_3x',
        G: 'eternalores:gear_modularium',
        A: 'powah:thermo_generator_basic',
        T: 'eternalores:signalum_block',
        S: 'eternalores:signalum_capacitor'
    })
    .id("catalyst:thermo_generator_hardened");

    catalyst.shaped(Item.of('powah:thermo_generator_blazing', 1), [
        "PCP",
        "GTG",
        "ASA"
    ],
    {
        P: 'eternalores:plate_sculkite',
        C: 'eternalores:compressed_blazing_crystal_block_4x',
        G: 'eternalores:gear_modularium',
        A: 'powah:thermo_generator_hardened',
        T: 'eternalores:signalum_block',
        S: 'eternalores:signalum_capacitor'
    })
    .id("catalyst:thermo_generator_blazing");

    catalyst.shaped(Item.of('powah:thermo_generator_niotic', 1), [
        "PCP",
        "MAM",
        "TET"
    ],
    {
        P: 'eternalores:plate_etherium',
        C: 'eternalores:compressed_niotic_crystal_block_4x',
        M: 'eternalores:missing_ingot',
        A: 'eternalores:compressed_replica_block_3x',
        T: 'powah:thermo_generator_blazing',
        E: 'eternalores:enderium_capacitor'
    })
    .id("catalyst:thermo_generator_niotic");

    catalyst.shaped(Item.of('powah:thermo_generator_spirited', 1), [
        "GCG",
        "MAM",
        "TET"
    ],
    {
        G: 'eternalores:gear_cosmic_matter',
        C: 'eternalores:compressed_spirited_crystal_block_4x',
        M: 'eternalores:missing_ingot',
        A: 'eternalores:compressed_replica_block_3x',
        T: 'powah:thermo_generator_niotic',
        E: 'eternalores:enderium_capacitor'
    })
    .id("catalyst:thermo_generator_spirited");

    catalyst.shaped(Item.of('powah:thermo_generator_nitro', 1), [
        "PPP",
        "CGC",
        "TAT"
    ],
    {
        P: 'eternalores:plate_catalyrium',
        C: 'powah:capacitor_nitro',
        G: 'eternalores:gear_catalyrium',
        T: 'powah:thermo_generator_spirited',
        A: 'eternalores:catalyric_capacitor'
    })
    .id("catalyst:thermo_generator_nitro");

    console.log("[CatJS] Powah Recipes");
})

/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
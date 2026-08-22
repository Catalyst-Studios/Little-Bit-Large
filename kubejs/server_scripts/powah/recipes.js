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
            Ingredient.of('minecraft:iron_block'),
            Ingredient.of('minecraft:gold_block'),
            Ingredient.of('minecraft:iron_block'),
            Ingredient.of('minecraft:gold_block')
        ],
        energy: 84000,
        result: Item.of('powah:energized_steel_block', 2)
    })
    .id('catalyst:energizing/energized_steel_block_2')

    catalyst.custom({
        type: 'powah:energizing',
        ingredients: [
            Ingredient.of('minecraft:iron_block'),
            Ingredient.of('minecraft:gold_block'),
            Ingredient.of('minecraft:iron_block'),
            Ingredient.of('minecraft:gold_block'),
            Ingredient.of('minecraft:iron_block'),
            Ingredient.of('minecraft:gold_block')
        ],
        energy: 126000,
        result: Item.of('powah:energized_steel_block', 3)
    })
    .id('catalyst:energizing/energized_steel_block_3')

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

    console.log("[CatJS] Powah Recipes");
})

/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
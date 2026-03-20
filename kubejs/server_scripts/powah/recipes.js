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
        result: Item.of('2x ae2:fluix_block')
    })
    .id('catalyst:energizing/fluix_block')
    
    // Energized Steel Block
    catalyst.custom({
        type: 'powah:energizing',
        ingredients: [
            Ingredient.of('minecraft:iron_block'),
            Ingredient.of('minecraft:gold_block')
        ],
        energy: 90000,
        result: Item.of('powah:energized_steel_block')
    })
    .id('catalyst:energizing/energized_steel_block')
    
    // Niotic Crystal Block
    catalyst.custom({
        type: 'powah:energizing',
        ingredients: [
            Ingredient.of('minecraft:diamond_block')
        ],
        energy: 2700000,
        result: Item.of('powah:niotic_crystal_block')
    })
    .id('catalyst:energizing/niotic_crystal_block')
    
    // Spirited Crystal Block
    catalyst.custom({
        type: 'powah:energizing',
        ingredients: [
            Ingredient.of('minecraft:emerald_block')
        ],
        energy: 9000000,
        result: Item.of('powah:spirited_crystal_block')
    })
    .id('catalyst:energizing/spirited_crystal_block')

    console.log("[CatJS] Powah Recipes");
})

/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
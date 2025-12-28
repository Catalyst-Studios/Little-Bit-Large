//priority: 100
/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/

ServerEvents.recipes(catalyst => {
    const recipesToRemove = [
        // Forcecraft
        'forcecraft:infuser/convert_time_torch',

        // AE2
        'ae2:network/blocks/spatial_anchor',

        // Reliquary
        'reliquary:alkahestry_tome',

        // Energized Power
        'energizedpower:crafting/time_controller',
        'energizedpower:crafting/weather_controller',

        // Mekanism
        'mekanism:dimensional_stabilizer',
        'mekanism:upgrade_anchor',

        // QuarryPlus
        'quarryplus:adv_quarry',
        'quarryplus:quarry',
        'quarryplus:remove_bedrock_module',

        // Industrial Foregoing
        'industrialforegoing:infinity_nuke',

        // Productive Bees
        { id: 'productivebees:evilcraft/bloody_bee_2' },

        // Advanced Peripherals
        'advancedperipherals:chunk_controller',

        // ComputerCraft
        { id: 'computercraft:upgrade_3' },
        { id: 'computercraft:upgrade_5' },

        // Blood magic
        {id: 'evilcraft:crafting/spirit_furnace'},
        {id: 'evilcraft:crafting/colossal_blood_chest'},

        // Mystical Agriculture
        {output: 'mysticalagradditions:insanium_apple'},
        {output: 'mysticalagradditions:insanium_ingot'},
        {output: 'mysticalagradditions:insanium_block'},
        {output: 'mysticalagradditions:insanium_gemstone'},
        {output: 'mysticalagradditions:insanium_farmland'},
        {output: 'mysticalagradditions:insanium_essence'},
        {output: 'mysticalagradditions:insanium_nugget'},
        {type: 'mysticalagriculture:infusion', output: 'productivebees:spawn_egg_configurable_bee'},
        {type: 'mysticalagriculture:awakening', output: 'productivebees:spawn_egg_configurable_bee'},
        {output: 'mysticalagriculture:sculk_seeds'}, //MA one
        {input: 'mysticalagriculture:sculk_essence'},

        // Oritech
        'oritech:crafting/iron',
        'oritech:crafting/nickel',
        'oritech:crafting/copper',
        'oritech:crafting/alloy/adamant',
        'oritech:crafting/addon/steamboileralt',
        'oritech:crafting/alloy/steel',
        'oritech:crafting/assembleralt',
        'oritech:crafting/electricfurnacealt',
        'oritech:crafting/pulverizer',

    ];

    recipesToRemove.forEach(recipe => {
        try {
            catalyst.remove(recipe);
        } catch (error) {
            console.warn("Recipe to remove: ", recipe)
        }
        
    });
});

/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/

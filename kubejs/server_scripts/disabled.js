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
        { output: 'advancedperipherals:chunk_controller'},

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

        //geore
        /geore.*:allthemodium_.*/,
        /geore:.*_allthemodium/,
        /geore:.*_allthemodium_bud/,
        /geore.*:vibranium_.*/,
        /geore:.*_vibranium/,
        /geore:.*_vibranium_bud/,
        /geore.*:unobtainium_.*/,
        /geore:.*_unobtainium/,
        /geore:.*_unobtainium_bud/,

        //mmr
        {output: 'modular_machinery_reborn:modularium'},

        //direthings
        'justdirethings:celestigem_paxel',
        'justdirethings:eclipsealloy_paxel',

        //ironfurnaces
        { id: 'ironfurnaces:upgrades/upgrade_vibranium' },
        { id: 'ironfurnaces:upgrades/upgrade_unobtainium' },

        //create
        { id: 'create:crafting/tree_fertilizer' },
        { output: "create:extendo_grip" },
        { output: "create:wand_of_symmetry" },
        { output: "create:rotation_speed_controller" },//Nuggets to iron ingots basically and sheets
        { output: "create_new_age:basic_motor" },
        { output: "create_new_age:advanced_motor" },
        "create:haunting/lapis_recycling",
        { output: "create:item_vault" },
        { output: 'create:precision_mechanism' },
        "create:crafting/materials/andesite_alloy",
        "create:crafting/materials/andesite_alloy_from_zinc"


    ].concat(global.recipesSeedToRemove);

    recipesToRemove.forEach(recipe => {
        try
        {
            catalyst.remove(recipe);
        }
        catch(error)
        {
            console.warn("[CatJS] Error while removing recipe: ", recipe)
            console.log(error);
        } 
    });
    console.log("[CatJS] Recipes removed");
});

/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/

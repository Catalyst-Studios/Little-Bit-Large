/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/

ServerEvents.recipes(catalyst => {

    catalyst.shaped('generatorgalore:iron_generator', ['III','IFI', 'GRG'], {
        I: 'minecraft:iron_ingot',
        G: 'eternalores:gear_copper',
        F: 'minecraft:furnace',
        R: 'minecraft:redstone_block'
    }).id('catalyst:generatorgalore/iron_generator')

    //Culinary Generator- Potato recipe
    catalyst.shaped('generatorgalore:culinary_generator', ['AAA', 'ABA', 'ACA'], {
        A: '#c:crops',
        B: 'generatorgalore:iron_generator',
        C: 'enderio:basic_capacitor'
    }).id('catalyst:generatorgalore/culinary_generator')

    //Netherstar generator
    catalyst.shaped('generatorgalore:netherstar_generator', ['AAA', 'ABA', 'CCC'], {
        A: 'minecraft:nether_star',
        B: 'generatorgalore:ender_generator',
        C: 'enderio:reinforced_obsidian_block'
    }).id('catalyst:generatorgalore/netherstar_generator')

    //ender generator
    catalyst.shaped('generatorgalore:ender_generator', ['AAA', 'ABA', 'CCC'], {
        A: 'minecraft:ender_pearl',
        B: 'generatorgalore:iron_generator',
        C: 'minecraft:end_stone'
    }).id('catalyst:generatorgalore/ender_generator')
   
    //enchantment generator
    catalyst.shaped('generatorgalore:enchantment_generator', ['AAA', 'ABA', 'CCC'], {
        A: 'minecraft:enchanted_book',
        B: 'generatorgalore:iron_generator',
        C: 'minecraft:obsidian'
    }).id('catalyst:generatorgalore/enchantment_generator')
       
    //magmatic generator
    catalyst.shaped('generatorgalore:magmatic_generator', ['AAA', 'ABA', 'CCC'], {
        A: 'minecraft:gold_ingot',
        B: 'generatorgalore:iron_generator',
        C: 'minecraft:lava_bucket'
    }).id('catalyst:generatorgalore/magmatic_generator')

    const generators = [
        'culinary',
        'enchantment',
        'ender',
        'halitosis',
        'honey',
        'iron',
        'magmatic',
        'potion',
        'netherstar',
        'diamond',
        "copper",
        'emerald',
        'gold',
        'netherite',
        'obsidian'
    ];

    generators.forEach(type => {
        catalyst.shaped(
            `generatorgalore:${type}_generator_8x`,
            [
                'III',
                'IFI',
                'III'
            ],
            {
                I: `generatorgalore:${type}_generator`,
                F: 'enderio:double_layer_capacitor'
            }
        ).id(`catalyst:generatorgalore/8x_${type}_double_layer_variant`);
    });

    const generators2 = [
        'culinary',
        'enchantment',
        'ender',
        'halitosis',
        'honey',
        'magmatic',
        'potion',
        'netherstar',
        'netherite',
    ];

    generators2.forEach(type => {
        catalyst.shaped(
            `generatorgalore:${type}_generator_64x`,
            [
                'III',
                'IFI',
                'III'
            ],
            {
                I: `generatorgalore:${type}_generator_8x`,
                F: 'enderio:octadic_capacitor'
            }
        ).id(`kubejs:generatorgalore/64x_${type}_octadic_capacitor_variant`);
    })

    console.log("[CatJS] Added Generator Galore recipes for 8x and upper")
})

/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
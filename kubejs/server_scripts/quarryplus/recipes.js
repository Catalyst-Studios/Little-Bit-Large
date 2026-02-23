/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/

ServerEvents.recipes(catalyst => {
    
    catalyst.shaped('quarryplus:quarry', [
        'SMS',
        'PEP',
        'SCS'
    ],
    {
        S: 'enderio:dark_steel_ingot',
        M: 'quarryplus:marker',
        P: 'minecraft:diamond_pickaxe',
        C: 'enderio:double_layer_capacitor',
        E: 'enderio:void_chassis'
    })
    .id('catalyst:quarryplus/quarry_enderio')

    catalyst.shaped('quarryplus:quarry', [
        'SMS',
        'PEP',
        'SCS'
    ],
    {
        S: 'industrialforegoing:plastic',
        M: 'quarryplus:marker',
        P: 'minecraft:diamond_pickaxe',
        C: 'industrialforegoing:efficiency_addon_tier_2',
        E: 'industrialforegoing:machine_frame_simple'
    })
    .id('catalyst:quarryplus/quarry_industrialforegoing')

    catalyst.shaped('quarryplus:quarry', [
        'SMS',
        'PEP',
        'SCS'
    ],
    {
        S: '#c:ingots/steel',
        M: 'quarryplus:marker',
        P: 'minecraft:diamond_pickaxe',
        C: 'mekanism:upgrade_energy',
        E: 'mekanism:steel_casing'
    })
    .id('catalyst:quarryplus/quarry_mekanism')
    console.log("[CatJS] Added QuarryPlus recipes");
})

/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
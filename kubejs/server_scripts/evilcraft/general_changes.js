/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/

ServerEvents.recipes( catalyst => {
    catalyst.shaped('evilcraft:spirit_furnace', [
        ' D ',
        'DSD',
        ' D '
    ], {
        D: 'evilcraft:dark_blood_brick',
        S: 'evilcraft:spirit_reanimator'
    })
    catalyst.shaped('evilcraft:colossal_blood_chest', [
        ' U ',
        'UCU',
        ' U '
    ], {
        U: 'evilcraft:reinforced_undead_planks',
        C: 'evilcraft:blood_chest'
    })
    catalyst.shapeless(
        'evilcraft:dark_gem_crushed',
        [
            'evilcraft:dark_gem',
            '#c:tools/hammers'
        ])
})

/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
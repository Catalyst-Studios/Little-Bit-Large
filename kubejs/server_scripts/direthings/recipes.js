/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/

ServerEvents.recipes(catalyst => {
    catalyst.remove('justdirethings:celestigem_paxel')
    catalyst.shaped('justdirethings:celestigem_paxel', [
        'PAS',
        ' W ',
        ' W '
    ], {
        P: 'justdirethings:celestigem_pickaxe',
        A: 'justdirethings:celestigem_axe',
        S: 'justdirethings:celestigem_shovel',
        W: 'minecraft:stick'
    })

    catalyst.remove('justdirethings:eclipsealloy_paxel')
    catalyst.shaped('justdirethings:eclipsealloy_paxel', [
        'PAS',
        ' W ',
        ' W '
    ], {
        P: 'justdirethings:eclipsealloy_pickaxe',
        A: 'justdirethings:eclipsealloy_axe',
        S: 'justdirethings:eclipsealloy_shovel',
        W: 'minecraft:stick'
    })
})


/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/

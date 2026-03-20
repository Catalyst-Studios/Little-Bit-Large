/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
ServerEvents.recipes(event => {
    
    const ores = [
        'zinc', 
        'aluminum', 
        'lead', 
        'osmium', 
        'tin', 
        'uranium'
    ];

    ores.forEach(ore => {
        event.custom({
            type: 'enderio:sag_milling',
            energy: 2400,
            input: {
                tag: `c:ores/${ore}`
            },
            outputs: [
                {
                    item: {
                        count: 2,
                        id: `eternalores:raw_${ore}`
                    }
                },
                {
                    chance: 0.33,
                    item: {
                        count: 1,
                        id: `eternalores:raw_${ore}`
                    }
                },
                {
                    chance: 0.15,
                    item: {
                        count: 1,
                        id: 'minecraft:cobblestone'
                    }
                }
            ]
        }).id(`kubejs:enderio/sag_milling/${ore}_ore_to_raw_${ore}`) 
    });

    console.log("[CatJS] Added EnderIO recipes")
});
/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
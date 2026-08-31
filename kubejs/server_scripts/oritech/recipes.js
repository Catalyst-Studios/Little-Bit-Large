/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/

ServerEvents.recipes(catalyst => {

    catalyst.shapeless(
        Item.of('oritech:adamant_dust', 3),
        [
            '3x #c:dusts/diamond',
            '3x #c:dusts/nickel'
        ]
    )
    .id("catalyst:oritech/adamant_dust")

    catalyst.custom({
        type: "oritech:foundry",
        ingredients: [
            {
                item: 'eternalores:charcoal_dust'
            },
            {
                item: 'eternalores:wrought_iron_ingot'
            }
        ],
        results: [
            {
                count: 1,
                id: 'eternalores:steel_ingot'
            }
        ],
        time: 80
    }).id("catalyst:oritech/foundry/steel_ingot")

    console.log("[CatJS] Oritech Recipes");
})

/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
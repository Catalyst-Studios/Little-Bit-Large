/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
ServerEvents.recipes(catalyst => {
    catalyst.shaped(Item.of("catalystcore:reinforced_glass", 1), 
        [
            "ABA",
            "B B",
            "ABA"
        ],{
        A: 'minecraft:obsidian',
        B: 'minecraft:glass',
    })

    console.log("[CatJS] Added Cat Item recipes")
})


/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
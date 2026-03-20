/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
ServerEvents.recipes(catalyst => {
    catalyst.shaped(Item.of("minecraft:name_tag", 1), 
        [
            "  S",
            " P ",
            "P  "
        ],{
        S: 'minecraft:string',
        P: 'minecraft:paper',
    })

    catalyst.shaped(Item.of("minecraft:name_tag", 3), 
        [
            " IS",
            " P ",
            "P  "
        ],{
        S: 'minecraft:string',
        P: 'minecraft:paper',
        I: '#c:dyes/black'
    })

    console.log("[CatJS] Added minecraft recipes")
})


/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
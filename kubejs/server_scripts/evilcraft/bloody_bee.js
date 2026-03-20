/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/

ServerEvents.recipes( catalyst => {
    catalyst.custom({
        type: "evilcraft:blood_infuser",
            input_item: {
                item: "productivebees:spawn_egg_nomad_bee"
            },
        input_fluid: {
            id: "evilcraft:blood",
            amount: 70000
        },
        output_item: {
            components: {
                "minecraft:entity_data": {
                    type: "productivebees:bloody", 
                    id:"productivebees:configurable_bee"
                }
            },
            count: 1,
            id: "productivebees:spawn_egg_configurable_bee"
        },
        duration: 400,
        xp: 2.2,
        tier: 2
    }).id("catalyst:bloodmagic/bloody_bee")

    console.log("[CatJS] Added blood bee recipe")
})

/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
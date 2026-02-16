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

    catalyst.shapeless('catalystcore:elemental_fire_crystal', 
        ['catalystcore:elemental_emptiness_crystal', 'ars_nouveau:fire_essence']
    ).id("catalyst:ars/personal_beacon/fire_crystal")

    catalyst.shapeless('catalystcore:elemental_water_crystal', 
        ['catalystcore:elemental_emptiness_crystal', 'ars_nouveau:water_essence']
    ).id("catalyst:ars/personal_beacon/water_crystal")

    catalyst.shapeless('catalystcore:elemental_earth_crystal', 
        ['catalystcore:elemental_emptiness_crystal', 'ars_nouveau:earth_essence']
    ).id("catalyst:ars/personal_beacon/earth_crystal")

    catalyst.shapeless('catalystcore:elemental_wind_crystal', 
        ['catalystcore:elemental_emptiness_crystal', 'ars_nouveau:air_essence']
    ).id("catalyst:ars/personal_beacon/wind_crystal")

    catalyst.shapeless('catalystcore:elemental_light_crystal', 
        ['catalystcore:elemental_emptiness_crystal', 'ars_nouveau:abjuration_essence']
    ).id("catalyst:ars/personal_beacon/light_crystal")

    console.log("[CatJS] Added Cat Item recipes")
})


/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
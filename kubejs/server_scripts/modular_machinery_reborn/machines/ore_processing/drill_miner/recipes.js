/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
ServerEvents.recipes(catalyst => {
    let mobTypes = [
        {id: "minecraft:wither", liquid: "industrialforegoing:ether_gas", time: 600, item: "minecraft:wither_skeleton_skull"},
        {id: "minecraft:zombie", liquid: "industrialforegoing:meat", time: 200, item: "minecraft:rotten_flesh"},
        {id: "minecraft:sheep", liquid: "industrialforegoing:pink_slime", time: 200, item: "minecraft:white_wool"},
        {id: "minecraft:villager", liquid: "integrateddynamics:menril_resin", time: 200, item: "minecraft:crafting_table"},
    ];
    
    mobTypes.forEach(mob => {
        catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:drill_miner", mob.time)
        .progressData(ProgressData.create().x(54).y(20))
        .width(110)
        .height(60)
        .requireEnergy(10000, 0, 4)
        .requireItem(`16x ${mob.item}`, 20, 20)
        .produceFluid(`10000x ${mob.liquid}`, 90, 20)
        .checkEntitiesAmountInRadius(10, 1, mob.id)
        .id(`catalyst:mmr/drill_head/${mob.liquid.replace(":", "_")}`)

        catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:drill_miner", mob.time-100)
        .hide()
        .progressData(ProgressData.create().x(54).y(20))
        .width(110)
        .height(60)
        .requireEnergy(10000, 0, 4)
        .requireItem(`16x ${mob.item}`, 20, 20)
        .produceFluid(`10000x ${mob.liquid}`, 90, 20)
        .checkEntitiesAmountInRadius(10, 1, mob.id)
        .requireRedstone(7)
        .id(`catalyst:mmr/drill_head/${mob.liquid.replace(":", "_")}_hidden`)
    });

    console.log("[CatJS] Finished Head Drill multi recipes")
});

/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
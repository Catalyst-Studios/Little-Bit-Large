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
        {id: "minecraft:warden", time: 400, item: 'industrialforegoingsouls:soul_network_pipe'}
    ];
    
    mobTypes.forEach(mob => {
        if(mob.id === "minecraft:warden") return 
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

    let mob = mobTypes[4];
    catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:drill_miner", mob.time)
        .progressData(ProgressData.create().x(54).y(20))
        .width(110)
        .height(60)
        .requireEnergy(10000, 0, 4)
        .requireItem(`16x ${mob.item}`, 20, 20)
        .requireFunctionEachTick("souls")
        .checkEntitiesAmountInRadius(10, 1, mob.id)
        .id(`catalyst:mmr/drill_head/warden`)

    console.log("[CatJS] Finished Head Drill multi recipes")
});

MMREvents.extraTooltips(event => {
    event.create("mmr:drill_miner", 'item')
    .add(Component.translatable("catalyst.mmr.tooltip.drill_miner.item"))

    event.create("mmr:drill_miner", 'gui')
    .add(Component.translatable("catalyst.mmr.tooltip.drill_miner.gui"))
})

MMREvents.recipeFunction("souls", catalyst => {
    let level = catalyst.getTile().getLevel();
    let controllerPos = catalyst.getTile().getBlockPos();
    let targetPos = controllerPos.above(7); 

    let state = level.getBlockState(targetPos);
    let block = state.getBlock();

    if(block.id === 'industrialforegoingsouls:soul_network_pipe')
    {
        let blockEntity = level.getBlockEntity(targetPos);
        
        if(blockEntity != null)
        {
            let soulNetwork = blockEntity.getNetwork();
            if(soulNetwork != null)
            {
                let added = soulNetwork.addSouls(level, 4);
            }
        }
    }
    else
    {
        catalyst.error("No Soul Pipe detected 7 blocks above the controller")
    }
});

/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/

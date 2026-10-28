/* This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
let IOType = Java.loadClass("es.degrassi.mmreborn.common.machine.IOType");

ServerEvents.recipes(catalyst => {
    let time = 600
    let energy = 30000

    catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:geo_syntex", time)
    .progressData(ProgressData.create().x(95).y(28))
    .width(150)
    .height(80)
    .requireEnergyPerTick(energy, 0, 4)
    .requireFunctionOnEnd("geo_chooser")
    .requireFunctionEachTick("geo_each")
    .hide()
    .id("catalyst:mmr/geo_syntex/real_recipe")
    
    Ingredient.of('#catalyst:clusters').getItemIds().toArray().forEach(cluster => {
        if(cluster.includes("allthemodium" || cluster.includes("unobtainium") || cluster.includes("vibranium")))
        {
            return;
        }

        let bud = cluster.replace("_cluster", "").replace(":", ":budding_").replace("geore_", "");

        if(cluster === "minecraft:amethyst_cluster") bud = "minecraft:budding_amethyst";
        else if(cluster === "ae2:quartz_cluster") bud = "ae2:flawless_budding_quartz";
        else if(cluster === "extendedae:entro_cluster") bud = "extendedae:entro_budding_fully";
        else if(cluster === "justdirethings:time_crystal_cluster") bud = "justdirethings:time_crystal_budding_block";

        if(!Item.exists(bud))
        {
            if(bud.includes("pastel:") || bud.includes("biomesoplenty:")) return;
            console.warn(`[CatJS] Bud ${bud} doesn't exists!`);
            return;
        }

        if(!Item.exists(cluster))
        {
            console.warn(`[CatJS] Cluster ${cluster} doesn't exists!`);
            return;
        }

        catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:geo_syntex", time)
        .progressData(ProgressData.create().x(90).y(28))
        .width(150)
        .height(70)
        .requireItem("minecraft:bedrock") 
        .jei()
        .requireEnergyPerTick(energy, 0, 7)
        .requireItem(Item.of(cluster, 1), 40, 10)
        .requireItem(Item.of(cluster, 1), 22, 28)
        .requireItem(Item.of(bud, 1), 40, 28)
        .requireItem(Item.of(cluster, 1), 58, 28)
        .requireItem(Item.of(cluster, 1), 40, 46)
        .produceItem(Item.of(cluster, 1, {
            "minecraft:lore": [
                { "translate": "catalyst.mmr.tooltip.geo_syntex.item.2", "italic": false },
                { "translate": "catalyst.mmr.tooltip.geo_syntex.item.3", "italic": false },
                { "translate": "catalyst.mmr.tooltip.geo_syntex.item.4", "italic": false },
                { "translate": "catalyst.mmr.tooltip.geo_syntex.item.5", "italic": false },
                { "translate": "catalyst.mmr.tooltip.geo_syntex.item.6", "italic": false }
            ]
        }), 125, 28)
        .id(`catalyst:mmr/geo_syntex/${cluster.replace(":", "_")}`)
    });

    console.log("[CatJS] Geode multi recipe added (JEI Fake Cross + Real Hidden)");
});

MMREvents.extraTooltips(catalyst => {
    catalyst.create("mmr:geo_syntex", 'item')
    .add(Component.translatable("catalyst.mmr.tooltip.geo_syntex.item.1"))
    .add(Component.translatable("catalyst.mmr.tooltip.geo_syntex.item.2"))
    .add(Component.translatable("catalyst.mmr.tooltip.geo_syntex.item.3"))
    .add(Component.translatable("catalyst.mmr.tooltip.geo_syntex.item.4"))
    .add(Component.translatable("catalyst.mmr.tooltip.geo_syntex.item.5"))
    .add(Component.translatable("catalyst.mmr.tooltip.geo_syntex.item.6"))

    catalyst.create("mmr:geo_syntex", 'gui')
    .add(Component.translatable("catalyst.mmr.tooltip.geo_syntex.gui.1"))
    .add(Component.translatable("catalyst.mmr.tooltip.geo_syntex.gui.2"))
    .add(Component.translatable("catalyst.mmr.tooltip.geo_syntex.gui.3"))
    .add(Component.translatable("catalyst.mmr.tooltip.geo_syntex.gui.4"))
    .add(Component.translatable("catalyst.mmr.tooltip.geo_syntex.gui.5"))
    .add(Component.translatable("catalyst.mmr.tooltip.geo_syntex.gui.6"))
})

MMREvents.recipeFunction("geo_chooser", catalyst => {
    let controller = catalyst.machine;
    let level = catalyst.getTile().getLevel();
    let inputItems = controller.getItemsStored(IOType.INPUT);
    let pos = catalyst.getTile().getBlockPos();
    let geoBonus = 0;
    let upgradeCount = 0;
    let facing = level.getBlock(pos).getProperties().get("facing")
    let centralPos;

    switch(facing)
    {
        case "north": centralPos = pos.offset(0, 3, 3); break;
        case "south": centralPos = pos.offset(0, 3, -3); break;
        case "east": centralPos = pos.offset(-3, 3, 0); break;
        case "west": centralPos = pos.offset(3, 3, 0); break;
        default: catalyst.cancel(); return;
    }

    let centralBlock = level.getBlockState(centralPos).getBlock().getId();
    
    let validCluster = centralBlock.replace("budding_", "").replace("_block", "");
    if(!validCluster.includes("cluster"))
    {
        validCluster = validCluster + "_cluster";
    }
    
    if(centralBlock === "minecraft:budding_amethyst") validCluster = "minecraft:amethyst_cluster";
    else if(centralBlock.startsWith("ae2:")) validCluster = "ae2:quartz_cluster";
    else if(centralBlock.startsWith("extendedae:")) validCluster = "extendedae:entro_cluster";
    else if(centralBlock === "justdirethings:time_crystal_budding_block") validCluster = "justdirethings:time_crystal_cluster";

    let surroundingPositions = [
        centralPos.offset(1, 0, 0),
        centralPos.offset(-1, 0, 0),
        centralPos.offset(0, 1, 0),
        centralPos.offset(0, -1, 0),
        centralPos.offset(0, 0, 1),
        centralPos.offset(0, 0, -1)
    ];
    
    let clusterCount = 0;
    for(let surroundPos of surroundingPositions)
    {
        let block = level.getBlockState(surroundPos).getBlock().getId();
        if(block == validCluster)
        {
            clusterCount++;
        }
    }

    if(clusterCount != 6)
    {
        catalyst.cancel("Needs 6 clusters of " + validCluster + " and the same type of budding");
        return;
    }

    for (let i = 0; i < inputItems.size() && upgradeCount < 4; i++)
    {
        let item = inputItems.get(i);
        if(item && item.id == 'ars_nouveau:amethyst_golem_charm')
        {
            upgradeCount += item.count;
            if(upgradeCount > 4)
            {
                upgradeCount = 4;
                break;
            }
        }
    }
    if(upgradeCount > 0) geoBonus += upgradeCount * 10;
    
    upgradeCount = 0;
    for(let i = 0; i < inputItems.size() && upgradeCount < 3; i++)
    {
        let item = inputItems.get(i);
        if(item && item.id == 'minecraft:budding_amethyst')
        {
            upgradeCount += item.count;
            if(upgradeCount > 8)
            {
                upgradeCount = 8;
                break;
            }
        }
    }
    if(upgradeCount > 0) geoBonus += upgradeCount * 3;
    
    upgradeCount = 0;
    for(let i = 0; i < inputItems.size() && upgradeCount < 1; i++)
    {
        let item = inputItems.get(i);
        if(item && item.id == 'minecraft:amethyst_cluster')
        {
            upgradeCount += item.count;
            if(upgradeCount > 16)
            {
                upgradeCount = 16;
                break;
            }
        }
    }
    if(upgradeCount > 0) geoBonus += 16;

    if(geoBonus > 0)
    {
        let fullStacks = Math.floor(geoBonus / 64);
        let remainder = geoBonus % 64;

        for(let i = 0; i < fullStacks; i++)
        {
            let stack = Item.of(validCluster, 64);
            catalyst.machine.addItem(stack);
        }
        
        if(remainder > 0)
        {
            let stack = Item.of(validCluster, remainder);
            catalyst.machine.addItem(stack);
        }
    }
});

MMREvents.recipeFunction("geo_each", catalyst => {
    let controller = catalyst.machine;
    let level = catalyst.getTile().getLevel();
    let pos = catalyst.getTile().getBlockPos();
    let inputItems = controller.getItemsStored(IOType.INPUT);
    let facing = level.getBlock(pos).getProperties().get("facing");
    let centralPos;

    switch(facing)
    {
        case "north": centralPos = pos.offset(0, 3, 3); break;
        case "south": centralPos = pos.offset(0, 3, -3); break;
        case "east": centralPos = pos.offset(-3, 3, 0); break;
        case "west": centralPos = pos.offset(3, 3, 0); break;
        default: catalyst.setBaseSpeed(0.0); return;
    }

    let centralBlock = level.getBlockState(centralPos).getBlock().getId();
    
    let validCluster = centralBlock.replace("budding_", "").replace("_block", "");
    if(!validCluster.includes("cluster"))
    {
        validCluster = validCluster + "_cluster";
    }
    
    if(centralBlock === "minecraft:budding_amethyst") validCluster = "minecraft:amethyst_cluster";
    else if(centralBlock.startsWith("ae2:")) validCluster = "ae2:quartz_cluster";
    else if(centralBlock.startsWith("extendedae:")) validCluster = "extendedae:entro_cluster";
    else if(centralBlock === "justdirethings:time_crystal_budding_block") validCluster = "justdirethings:time_crystal_cluster";

    let hasBudding = false;
    let clusterCountInInventory = 0;

    for (let i = 0; i < inputItems.size(); i++)
    {
        let item = inputItems.get(i);
        if(item)
        {
            if(item.id == centralBlock)
            {
                hasBudding = true;
            }
            if(item.id == validCluster)
            {
                clusterCountInInventory += item.count;
            }
        }
    }

    let hasClusters = (clusterCountInInventory >= 6);
    let speed = 1.0;

    if(hasBudding && hasClusters)
    {
        speed = 4.0;
    }
    else if(hasBudding || hasClusters)
    {
        speed = 2.0;
    }

    catalyst.setBaseSpeed(speed);
});
/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
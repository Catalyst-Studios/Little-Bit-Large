/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
let IOType = Java.loadClass("es.degrassi.mmreborn.common.machine.IOType");

ServerEvents.recipes(catalyst => {
    catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:geo_syntex", 1200)
    .progressData(ProgressData.create().x(54).y(20))
    .width(110)
    .height(60)
    .requireEnergy(10000, 0, 4)
    .produceItem('1x minecraft:amethyst_shard', 90, 20)
    .requireFunctionOnEnd("geo_chooser")
    .id("catalyst:mmr/geo_syntex")
});

MMREvents.recipeFunction("geo_chooser", catalyst => {
    let controller = catalyst.machine;
    let level = catalyst.getTile().getLevel();
    let inputItems = controller.getItemsStored(IOType.INPUT);
    let outputItems = catalyst.machine.getItemsStored(IOType.OUTPUT);
    let pos = catalyst.getTile().getBlockPos();
    let geoBonus = 0;
    let upgradeCount = 0;
    let facing = level.getBlock(pos).getProperties().get("facing")
    let centralPos;

    for(let i = 0; i < outputItems.size(); i++)
    {
        let item = outputItems.get(i);
        if(item && item.id == 'minecraft:amethyst_shard')
        {
            if(item.count >= 1)
            {
                item.count = item.count - 1;
            }
            break;
        }
    }

    switch(facing)
    {
        case "north":
            centralPos = pos.offset(0, 3, 3);
            break;
        case "south":
            centralPos = pos.offset(0, 3, -3);
            break;
        case "east":
            centralPos = pos.offset(-3, 3, 0);
            break;
        case "west":
            centralPos = pos.offset(3, 3, 0);
            break;
        default:
            catalyst.cancel();
            return;
    }

    let mineralTypes = [
        {budding: "minecraft:budding_amethyst", cluster: "minecraft:amethyst_cluster", shard: "minecraft:amethyst_shard"},
        {budding: "ae2:flawless_budding_quartz", cluster: "ae2:quartz_cluster", shard: "ae2:certus_quartz_crystal"},
        {budding: "extendedae:entro_budding_fully", cluster: "extendedae:entro_cluster", shard: "extendedae:entro_crystal"},
        {budding: "justdirethings:time_crystal_budding_block", cluster: "justdirethings:time_crystal_cluster", shard: "justdirethings:time_crystal"},
        {budding: "geore:budding_copper", cluster: "geore:copper_cluster", shard: "geore:copper_shard"},
        {budding: "geore:budding_coal", cluster: "geore:coal_cluster", shard: "geore:coal_shard"},
        {budding: "geore:budding_diamond", cluster: "geore:diamond_cluster", shard: "geore:diamond_shard"},
        {budding: "geore:budding_emerald", cluster: "geore:emerald_cluster", shard: "geore:emerald_shard"},
        {budding: "geore:budding_gold", cluster: "geore:gold_cluster", shard: "geore:gold_shard"},
        {budding: "geore:budding_iron", cluster: "geore:iron_cluster", shard: "geore:iron_shard"},
        {budding: "geore:budding_lapis", cluster: "geore:lapis_cluster", shard: "geore:lapis_shard"},
        {budding: "geore:budding_quartz", cluster: "geore:quartz_cluster", shard: "geore:quartz_shard"},
        {budding: "geore:budding_redstone", cluster: "geore:redstone_cluster", shard: "geore:redstone_shard"},
        {budding: "geore:budding_ancient_debris", cluster: "geore:ancient_debris_cluster", shard: "geore:ancient_debris_shard"},
        {budding: "geore:budding_ruby", cluster: "geore:ruby_cluster", shard: "geore:ruby_shard"},
        {budding: "geore:budding_sapphire", cluster: "geore:sapphire_cluster", shard: "geore:sapphire_shard"},
        {budding: "geore:budding_topaz", cluster: "geore:topaz_cluster", shard: "geore:topaz_shard"},
        {budding: "geore:budding_zinc", cluster: "geore:zinc_cluster", shard: "geore:zinc_shard"},
        {budding: "geore:budding_uraninite", cluster: "geore:uraninite_cluster", shard: "geore:uraninite_shard"},
        {budding: "geore:budding_uranium", cluster: "geore:uranium_cluster", shard: "geore:uranium_shard"},
        {budding: "geore:budding_black_quartz", cluster: "geore:black_quartz_cluster", shard: "geore:black_quartz_shard"},
        {budding: "geore:budding_monazite", cluster: "geore:monazite_cluster", shard: "geore:monazite_shard"},
        {budding: "geore:budding_aluminum", cluster: "geore:aluminum_cluster", shard: "geore:aluminum_shard"},
        {budding: "geore:budding_lead", cluster: "geore:lead_cluster", shard: "geore:lead_shard"},
        {budding: "geore:budding_nickel", cluster: "geore:nickel_cluster", shard: "geore:nickel_shard"},
        {budding: "geore:budding_osmium", cluster: "geore:osmium_cluster", shard: "geore:osmium_shard"},
        {budding: "geore:budding_platinum", cluster: "geore:platinum_cluster", shard: "geore:platinum_shard"},
        {budding: "geore:budding_silver", cluster: "geore:silver_cluster", shard: "geore:silver_shard"},
        {budding: "geore:budding_tin", cluster: "geore:tin_cluster", shard: "geore:tin_shard"},
        {budding: "geore:budding_tungsten", cluster: "geore:tungsten_cluster", shard: "geore:tungsten_shard"}
    ];

    let centralBlock = level.getBlockState(centralPos).getBlock().getId();
    let validMineral = mineralTypes.find(mineral => mineral.budding === centralBlock);
    if(!validMineral)
    {
        catalyst.cancel("Center block is not valid");
        return;
    }

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
        if(block == validMineral.cluster)
        {
            clusterCount++;
        }
    }

    if(clusterCount != 6)
    {
        catalyst.cancel("Needs 6 clusters of " + validMineral.cluster);
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
    for(let i = 0; i < inputItems.size() && upgradeCount < 4; i++)
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
    for(let i = 0; i < inputItems.size() && upgradeCount < 4; i++)
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
    if(upgradeCount > 0) geoBonus += upgradeCount;

    if(geoBonus > 0)
    {
        let fullStacks = Math.floor(geoBonus / 64);
        let remainder = geoBonus % 64;

        for(let i = 0; i < fullStacks; i++)
        {
            let stack = Item.of(validMineral.shard, 64);
            catalyst.machine.addItem(stack);
        }
        
        if(remainder > 0)
        {
            let stack = Item.of(validMineral.shard, remainder);
            catalyst.machine.addItem(stack);
        }
    }
});
/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
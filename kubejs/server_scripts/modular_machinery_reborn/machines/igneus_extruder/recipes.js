/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/

const MINING_BLOCKS = [
    ["minecraft:prismarine"],
    ["pastel:blackslag"],
    ["pastel:cobbled_blackslag"],
    ["pastel:shale_clay"],
    ["pastel:rock_crystal"],
    ["pastel:slush"],
    ["pastel:flayed_earth"],
    ["biomesoplenty:white_sand"],
    ["biomesoplenty:orange_sand"],
    ["biomesoplenty:black_sand"],
    ["biomesoplenty:thermal_calcite"],
    ["biomesoplenty:dried_salt"],
    ["biomesoplenty:flesh"],
    ["biomesoplenty:brimstone"],
    ["biomesoplenty:rose_quartz_block"],
    ["biomesoplenty:rose_quartz_chunk"],
    ["enderio:industrial_insulation"],
    ["xycraft_world:kivi"],
    ["minecraft:netherrack"],
    ["minecraft:sculk"],
    ["ae2:sky_stone_block"],
    ["minecraft:cobbled_deepslate"],
    ["minecraft:cobblestone"],
    ["minecraft:packed_ice"],
    ["ars_nouveau:sourcestone"],
    ["minecraft:deepslate"],
    ["minecraft:stone"],
    ["mysticalagriculture:soulstone_cobble"],
    ["minecraft:obsidian"],
    ["minecraft:tuff"],
    ["minecraft:andesite"],
    ["minecraft:diorite"],
    ["minecraft:granite"],
    ["minecraft:dirt"],
    ["minecraft:calcite"],
    ["create:limestone"],
    ["create:ochrum"],
    ["create:scorchia"],
    ["create:veridium"],
    ["create:crimsite"],
    ["minecraft:end_stone", { item: "minecraft:dragon_breath", chance: 0.2 }],
    ["minecraft:blackstone"],
    ["minecraft:smooth_basalt"],
    ["minecraft:crying_obsidian"],
    ["create:asurine"],
    ["create:scoria"],
    ["minecraft:basalt"],
    ["minecraft:clay"],
    ["minecraft:sand"],
    ["minecraft:red_sand"],
    ["minecraft:quartz_block"],
    ["minecraft:gravel"],
    ["minecraft:snow_block"],
    ["minecraft:soul_sand"],
    ["minecraft:soul_soil"],
    ["minecraft:magma_block"],
    ["minecraft:dripstone_block"]
];

ServerEvents.recipes(catalyst => {

    MINING_BLOCKS.forEach((blockEntry) => {
        let blockId = blockEntry[0];
        let extraItems = blockEntry.slice(1);

        let primitiveOutput = blockId;
        if(extraItems.length > 0)
        {
            primitiveOutput = Item.of(blockId, 1, {
                "minecraft:lore": [
                    { "translate": "catalyst.mmr.tooltip.primitive_extruder.secret", "italic": false }
                ]
            });
        }

        catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:primitive_extruder", 120)
            .requireItem("minecraft:bedrock")
            .jei()
            .progressData(ProgressData.create().x(30).y(10))
            .width(80)
            .height(40)
            .requireItem(blockId, 0, 10)
            .produceItem(primitiveOutput, 60, 10)
            .id(`catalyst:mmr/extruder/visual/${blockId.replace(":", "_")}`)

        let recipe = catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:igneus_extruder", 40)
            .requireItem(Item.of(blockId, 1), 10, 10)
            .produceItem(Item.of(blockId, 16), 40, 10)
            .requireEnergy(10000, 0, 4)
            .jei()
            .progressData(ProgressData.create().x(54).y(20))
            .width(110)
            .height(60)
            .requireEnergy(10000, 0, 4)
            .requireItem(blockId, 20, 20)
            .produceItem(Item.of(blockId, 16), 90, 20)

        extraItems.forEach((bonus, index) => {
            let chance = typeof bonus.chance !== "undefined" ? bonus.chance : 1.0
            let bonusY = 20 + 18 * (index + 1);
            recipe.produceItem(Item.of(bonus.item, 4), chance, 90, bonusY);
        });
            
        recipe.id(`catalyst:mmr/extruder/real/${blockId.replace(":", "_")}`)
    });

    catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:primitive_extruder", 120)
        .requireFunctionOnStart("mining_start")
        .requireFunctionOnEnd("mining_end")
        .hide()
        .priority(10)
        .id(`catalyst:mmr/extruder/universal_logic`);

    console.log("[CatJS] Finished Igneous Extruder recipes")
});

MMREvents.extraTooltips(event => {
    event.create("mmr:primitive_extruder", 'item')
    .add(Component.translatable("catalyst.mmr.tooltip.primitive_extruder.item.1"))
    .add(Component.translatable("catalyst.mmr.tooltip.primitive_extruder.item.2"))

    event.create("mmr:primitive_extruder", 'gui')
    .add(Component.translatable("catalyst.mmr.tooltip.primitive_extruder.gui.1"))
    .add(Component.translatable("catalyst.mmr.tooltip.primitive_extruder.gui.2"))
})

MMREvents.recipeFunction("mining_start", event => {
    let level = event.getTile().getLevel();
    let pos = event.getTile().getBlockPos().below(2);
    let blockId = level.getBlockState(pos).getBlock().id;

    let exists = MINING_BLOCKS.some(e => e[0] === blockId);

    if(!exists)
    {
        event.error("Error: There is no valid block below!");
    }
});

MMREvents.recipeFunction("mining_end", event => {
    let level = event.getTile().getLevel();
    let pos = event.getTile().getBlockPos().below(2);
    let blockId = level.getBlockState(pos).getBlock().id;
    let machine = event.machine;
    let entry = MINING_BLOCKS.find(e => e[0] === blockId);

    if(entry)
    {
        machine.addItem(Item.of(blockId, 4));

        let bonuses = entry.slice(1);
        bonuses.forEach(bonus => {
            if(Math.random() < bonus.chance)
            {
                machine.addItem(Item.of(bonus.item, 1));
            }
        });
        
    }
    else
    {
        event.error("Error: Block removed!");
    }
});

/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/

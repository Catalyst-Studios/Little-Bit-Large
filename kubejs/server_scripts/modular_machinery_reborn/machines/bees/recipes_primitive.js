/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/

ServerEvents.recipes(catalyst => {

    catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:primitive_apiary", 600)
        .width(120)
        .height(60)
        .progressData(ProgressData.create().x(45).y(23))
        .produceItem(Item.of('minecraft:honey_bottle'), 0.5)
        .produceItem(Item.of('minecraft:honeycomb', 2), 0.75)
        .jei()
        .produceItem(Item.of('minecraft:honey_bottle'), 0.5, 85, 12) 
        .produceItem(Item.of('minecraft:honeycomb'), 0.75, 85, 34)
        .id(`catalyst:mmr/basic_apiary`);

    console.log("[CatJS] Finished Primitive Apiary recipes")
});

MMREvents.extraTooltips(catalyst => {
    catalyst.create("mmr:primitive_apiary", 'item')
    .add(Component.translatable("catalyst.mmr.tooltip.primitive_apiary.item.1"))
    .add(Component.translatable("catalyst.mmr.tooltip.primitive_apiary.item.2"))

    catalyst.create("mmr:primitive_apiary", 'gui')
    .add(Component.translatable("catalyst.mmr.tooltip.primitive_apiary.gui.1"))
    .add(Component.translatable("catalyst.mmr.tooltip.primitive_apiary.gui.2"))
})

/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
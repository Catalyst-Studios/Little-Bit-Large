/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
ServerEvents.recipes(catalyst => {

    const arrowX = 32;
    const arrowY = 29;

    const inputX = 6;
    const inputY1 = 17;
    const inputY2 = 40;

    const outputX = 64;
    const outputY1 = 8;
    const outputY2 = 29;
    const outputY3 = 50;

    const energyX = 86;
    const energyY = 12;

    catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:fission", 200)
        .progressData(ProgressData.create().x(arrowX).y(arrowY))
        .width(110)
        .height(76)
        .requireFluid(Fluid.of("mekanism:heavy_water", 1000), inputX, inputY1)
        .requireChemical(`100x mekanism:fissile_fuel`, inputX, inputY2)
        .produceEnergyPerTick(100000, energyX, energyY)
        .produceItem(Item.of('eternalores:missing_ingot', 1), 0.1, outputX, outputY1)
        .produceChemical(`10000x mekanism:nuclear_waste`, outputX, outputY2)
        .produceFluid(Fluid.of("minecraft:lava", 10000), outputX, outputY3)
        .id(`catalyst:mmr/fission/1`)

    catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:fission", 150)
        .progressData(ProgressData.create().x(arrowX).y(arrowY))
        .width(110)
        .height(76)
        .requireChemical("10000x mekanism:sodium", inputX, inputY1)
        .requireChemical(`1000x mekanism:fissile_fuel`, inputX, inputY2)
        .produceEnergyPerTick(500000, energyX, energyY)
        .produceItem(Item.of('eternalores:missing_ingot', 1), 0.4, outputX, outputY1)
        .produceChemical(`10000x mekanism:nuclear_waste`, outputX, outputY2)
        .produceFluid(Fluid.of("mekanism:superheated_sodium", 10000), outputX, outputY3)
        .id(`catalyst:mmr/fission/2`)

    catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:fission", 75)
        .progressData(ProgressData.create().x(arrowX).y(arrowY))
        .width(110)
        .height(76)
        .requireChemical("10000x mekanism:spent_nuclear_waste", inputX, inputY1)
        .requireChemical(`1000x mekanism:fissile_fuel`, inputX, inputY2)
        .produceEnergyPerTick(20000, energyX, energyY)
        .produceItem(Item.of('eternalores:missing_ingot', 1), 0.6, outputX, outputY1)
        .produceChemical(`10000x mekanism:nuclear_waste`, outputX, outputY2)
        .produceItem(Item.of('eternalores:crystal_ultimatitanium', 1), 0.5, outputX, outputY3)
        .id(`catalyst:mmr/fission/3`)

    console.log("[CatJS] Added Nuclear Fission recipes");
});

/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
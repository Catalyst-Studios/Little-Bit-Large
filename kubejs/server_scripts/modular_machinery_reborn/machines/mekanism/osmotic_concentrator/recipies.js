/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
ServerEvents.recipes(catalyst => {
        
    for(let tier = 1; tier <= 10; tier++)
    {
        let ratio = tier / 10;
        let waterAmount = Math.round(50000000 * ratio);
        let brineAmount = Math.round(5000000 * ratio);
        let lithiumAmount = Math.round(500000 * ratio);

        let duration = Math.round(20 * (10 / tier));
        let energy = Math.round(100000 * (10 / tier));

        catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:osmotic_concentrator", duration)
            .progressData(ProgressData.create().x(45).y(20))
            .width(110)
            .height(60)
            .requireEnergy(energy, 0, 4)
            .produceFluid(`${brineAmount}x mekanism:brine`, 75, 20)
            .requireFluid(Fluid.of("minecraft:water", waterAmount), 25, 20)
            .priority(tier)
            .id(`catalyst:mmr/osmotic_concentrator/brine_t${tier}`);

        catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:osmotic_concentrator", duration)
            .progressData(ProgressData.create().x(45).y(20))
            .width(110)
            .height(60)
            .requireEnergy(energy, 0, 4)
            .produceChemical(`${lithiumAmount}x mekanism:lithium`, 75, 20)
            .requireFluid(`${brineAmount}x mekanism:brine`, 25, 20)
            .priority(tier + 30)
            .id(`catalyst:mmr/osmotic_concentrator/lithium_t${tier}`);
    }

    console.log("[CatJS] Added Thermal Evaporation recipes MMR");
});
/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
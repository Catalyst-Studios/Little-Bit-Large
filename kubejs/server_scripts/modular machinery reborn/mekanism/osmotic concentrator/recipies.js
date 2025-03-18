/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
ServerEvents.recipes(catalyst => {
        catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:osmotic_concentrator", 20)
            // OPTIONAL CUSTOMIZATION {
            .progressX(45) // default 74
            .progressY(20) // default 8
            .width(100) // default 256
            .height(80) // default 256
            // }
            .requireEnergy(100000, 0, 0)
            .produceChemical("500000x mekanism:lithium", 73, 20)
            .requireFluid ("5000000x mekanism:brine" , 25, 20);

            catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:osmotic_concentrator", 20)
                        // OPTIONAL CUSTOMIZATION {
                        .progressX(45) // default 74
                        .progressY(20) // default 8
                        .width(100) // default 256
                        .height(80) // default 256
                        // }
                        .requireEnergy(100000, 0, 0)
                        .produceFluid("5000000x mekanism:brine", 73, 20)
                        .requireFluid ("50000000x minecraft:water" , 25, 20);

});
/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
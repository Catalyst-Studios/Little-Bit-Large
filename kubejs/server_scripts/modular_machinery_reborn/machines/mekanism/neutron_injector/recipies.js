/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
ServerEvents.recipes(catalyst => {

    function inject(input_chemical, output_chemical, inn, out)
    {
        let idName = output_chemical.split(':')[1];

        catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:neutron_injector", 40)
            .progressData(ProgressData.create().x(54).y(20))
            .width(110)
            .height(60)
            .requireEnergy(10000, 0, 4)
            .produceChemical(`${out}x ${output_chemical}`, 90, 20)
            .requireChemical(`${inn}x ${input_chemical}`, 25, 20)
            .id(`catalyst:mmr/neutron_injector/${idName}`)
    }

    inject("mekanism:nuclear_waste", "mekanism:polonium", 100000, 10000);
    inject("mekanism:lithium", "mekanismgenerators:tritium", 10000, 10000);
    console.log("[CatJS] Added Injector recipes (polonium and tritium)");
});

/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
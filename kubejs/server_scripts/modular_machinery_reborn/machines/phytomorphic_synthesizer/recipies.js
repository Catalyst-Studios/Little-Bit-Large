//priority: 1

/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/

const cropRegistry3 = Java.loadClass('com.blakebr0.mysticalagriculture.registry.CropRegistry')
ServerEvents.recipes(catalyst => {
    const time = 20
    const base_production_essence = 4
    let modifiedItemNames = [];
    let crops = cropRegistry3.getInstance().getCrops()

    let seeds = [
        "cobalt",
        "lumium",
        "signalum",
        "rose_gold",
        "pig_iron",
        "enderium"
    ]

    crops.forEach(crop => {
        if(!crop.isEnabled() && !seeds.includes(crop.getName())) return;

        let itemName = `${crop.getId().toString()}`;
        let modifiedName = itemName.replace('seeds', '').replace('mysticalcustomization', 'mysticalagriculture')
                                    .replace('mysticalagradditions', 'mysticalagriculture');
        modifiedItemNames.push(modifiedName);
    });

    let variants = [
        {
            id: "base",
            timeMultiplier: 1,
            essenceMultiplier: 1,
            fertilizerChance: 0.02,
            fertilizerCount: 1,
            priority: 0,
            extra: null,
            fluid: { id: "minecraft:water", amount: 100 }
        },
        {
            id: "bone_meal",
            timeMultiplier: 1.5,
            essenceMultiplier: 2,
            fertilizerChance: 0.05,
            fertilizerCount: 1,
            priority: 1,
            extra: { item: "minecraft:bone_meal", count: 1, chance: 0.5, x: 25, y: 20 },
            fluid: { id: "minecraft:water", amount: 1000 }
        },
        {
            id: "mystical_fertilizer",
            timeMultiplier: 2,
            essenceMultiplier: 4,
            fertilizerChance: 0.1,
            fertilizerCount: 1,
            priority: 2,
            extra: { item: "mysticalagriculture:mystical_fertilizer", count: 5, chance: 0.1, x: 25, y: 20 },
            fluid: { id: "minecraft:water", amount: 5000 }
        },
        {
            id: "fertilizer",
            timeMultiplier: 2,
            essenceMultiplier: 6,
            fertilizerChance: 1,
            fertilizerCount: 30,
            priority: 3,
            extra: { item: "energizedpower:advanced_fertilizer", count: 5, chance: 0.1, x: 25, y: 20 },
            fluid: { id: "minecraft:water", amount: 10000 }
        }
    ];

    modifiedItemNames.forEach(modifiedName => {
        let isCognizant = modifiedName === "mysticalagriculture:cognizian";
        let isInsanium  = modifiedName === "mysticalagriculture:insanium";
        let essenceOutput = isCognizant
            ? "mysticalagriculture:cognizant_dust"
            : (isInsanium ? "mysticalagradditions:insanium_essence" : `${modifiedName}_essence`);

        let idPath = modifiedName.replace(':', '/');
        let seedId = `${modifiedName}_seeds`;

        let greenhouseOutputs = [
            { id: essenceOutput, count: base_production_essence }
        ];
        let greenhousePayload = [seedId, JSON.stringify(greenhouseOutputs)];

        variants.forEach(variant => {
            let recipe = catalyst.recipes.modular_machinery_reborn
                .machine_recipe("mmr:phytomorphic_synthesiszer", time * variant.timeMultiplier)
                .progressData(ProgressData.create().x(54).y(20))
                .width(110)
                .height(60)
                .requireEnergy(10000, 0, 4)
                .requireItem(Item.of(seedId, 1), 25, 0)
                .requireFluid(Fluid.of(variant.fluid.id, variant.fluid.amount), 25, 40)
                .requireFunctionOnEnd("greenhouse_processor", greenhousePayload);

            if(variant.extra)
            {
                recipe.requireItem(
                    Item.of(variant.extra.item, variant.extra.count),
                    variant.extra.chance,
                    variant.extra.x,
                    variant.extra.y
                );
            }

            recipe
                .produceItem(
                    Item.of(essenceOutput, base_production_essence * variant.essenceMultiplier),
                    90, 20
                )
                .produceItem(
                    Item.of(seedId, 1),
                    90, 0
                )
                .produceItem(
                    Item.of("mysticalagriculture:fertilized_essence", variant.fertilizerCount),
                    variant.fertilizerChance,
                    90, 40
                )
                .priority(variant.priority)
                .id(`catalyst:mmr/phytomorphic/${idPath}/${variant.id}`);
        });
    });

    console.log("[CatJS] Added Phytonator recipes");
});
/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/

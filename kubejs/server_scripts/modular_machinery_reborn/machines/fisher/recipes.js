/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
ServerEvents.recipes(event => {
    const machine_id = "mmr:fisher";
    
    const inputSlot = { x: 15, y: 30 };
    const progressArrow = { x: 40, y: 30 };
    const outputCoords = [
        { x: 75, y: 12 }, { x: 93, y: 12 }, { x: 111, y: 12 },
        { x: 75, y: 30 }, { x: 93, y: 30 }, { x: 111, y: 30 },
        { x: 93, y: 48 }
    ];

    let fishing_recipes = [
        {
            name: "monster_drops",
            input: "minecraft:string",
            time: 150,
            outputs: [
                { id: "minecraft:rotten_flesh", count: 2, chance: 0.8 },
                { id: "minecraft:bone", count: 3, chance: 0.6 },
                { id: "minecraft:spider_eye", count: 1, chance: 0.3 },
                { id: "minecraft:gunpowder", count: 2, chance: 0.4 },
                { id: "minecraft:phantom_membrane", count: 1, chance: 0.8 },
                { id: "minecraft:ink_sac", count: 3, chance: 0.5 },
                { id: "minecraft:feather", count: 4, chance: 0.4 }
            ]
        },
        {
            name: "ocean_treasures",
            input: "minecraft:water_bucket",
            time: 150,
            outputs: [
                { id: "minecraft:cod", count: 7, chance: 0.9 },
                { id: "minecraft:pufferfish", count: 2, chance: 0.2 },
                { id: "minecraft:nautilus_shell", count: 1, chance: 0.15 },
                { id: "minecraft:prismarine_crystals", count: 2, chance: 0.3 },
                { id: "minecraft:prismarine_shard", count: 4, chance: 0.4 },
                { id: "minecraft:heart_of_the_sea", count: 1, chance: 0.01 },
                { id: "minecraft:sponge", count: 1, chance: 0.05 }
            ]
        },
        {
            name: "suspicious_scrapping",
            input: "minecraft:brush",
            time: 200,
            outputs: [
                { id: "minecraft:suspicious_sand", count: 1, chance: 0.4 },
                { id: "minecraft:gravel", count: 4, chance: 0.8 },
                { id: "minecraft:sand", count: 4, chance: 0.8 },
                { id: "minecraft:emerald", count: 1, chance: 0.05 },
                { id: "minecraft:diamond", count: 1, chance: 0.05 },
                { id: "minecraft:string", count: 4, chance: 0.75 }
            ]
        },
        {
            name: "heavy_fishing",
            input: "minecraft:fishing_rod",
            time: 400,
            outputs: [
                { id: "minecraft:iron_ingot", count: 2, chance: 0.5 },
                { id: "minecraft:diamond", count: 1, chance: 0.05 },
                { id: "minecraft:raw_gold", count: 2, chance: 0.3 },
                { id: "minecraft:terracotta", count: 8, chance: 0.6 },
                { id: "minecraft:copper_ingot", count: 4, chance: 0.5 },
                { id: "minecraft:coal", count: 5, chance: 0.7 },
                { id: "minecraft:experience_bottle", count: 2, chance: 0.25 }
            ]
        }
    ];

    fishing_recipes.forEach(r => {
        let recipe = event.recipes.modular_machinery_reborn.machine_recipe(machine_id, r.time)
            .width(140)
            .height(80)
            .progressData(ProgressData.create().x(progressArrow.x).y(progressArrow.y))
            .requireItem(Item.of(r.input, 1));

        r.outputs.forEach(out => {
            recipe.produceItem(Item.of(out.id, out.count), out.chance);
        });

        recipe.jei();

        recipe.requireItem(Item.of(r.input, 1), inputSlot.x, inputSlot.y);

        for(let i = 0; i < 7; i++)
        {
            if(r.outputs[i])
            {
                recipe.produceItem(Item.of(r.outputs[i].id, r.outputs[i].count), r.outputs[i].chance, outputCoords[i].x, outputCoords[i].y);
            }
            else
            {
                recipe.emptyItem(outputCoords[i].x, outputCoords[i].y);
            }
        }

        recipe.id(`catalyst:mmr/fisher/${r.name}`);
    });
});

MMREvents.extraTooltips(event => {
    event.create("mmr:fisher", 'item')
    .add(Component.translatable("catalyst.mmr.tooltip.fisher.item"))

    event.create("mmr:fisher", 'gui')
    .add(Component.translatable("catalyst.mmr.tooltip.fisher.gui"))
})
/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
ServerEvents.recipes(catalyst => {
    let energized_plates = [
        { input: 'energizedpower:advanced_alloy_ingot', output: 'energizedpower:advanced_alloy_plate' },
        { input: 'energizedpower:energized_copper_ingot', output: 'energizedpower:energized_copper_plate' },
        { input: 'energizedpower:energized_gold_ingot', output: 'energizedpower:energized_gold_plate' },
        { input: 'energizedpower:crystallized_alloy_ingot', output: 'energizedpower:crystallized_alloy_plate' },
        { input: 'energizedpower:energized_alloy_ingot', output: 'energizedpower:energized_alloy_plate' }
    ];

    let standard_wires = [
        { material: 'iron', output: 'createaddition:iron_wire' },
        { material: 'electrum', output: 'immersiveengineering:wire_electrum' },
        { material: 'steel', output: 'immersiveengineering:wire_steel' },
        { material: 'aluminum', output: 'immersiveengineering:wire_aluminum' },
        { material: 'lead', output: 'immersiveengineering:wire_lead' },
        { material: 'copper', output: 'immersiveengineering:wire_copper' },
        { material: 'tin', output: 'energizedpower:tin_wire' },
        { material: 'gold', output: 'energizedpower:gold_wire' }
    ];

    let energized_wires = [
        { input: 'energizedpower:energized_copper_ingot', output: 'energizedpower:energized_copper_wire' },
        { input: 'energizedpower:energized_gold_ingot', output: 'energizedpower:energized_gold_wire' }
    ];

    let mod_id = "eternalores:";
    let machine_id = "mmr:extruder";
    let recipe_counter = 0;

    let input_slots = [
        { x: 25, y: 12 }, { x: 25, y: 34 }
    ]

    let output_slots = [
        { x: 85, y: 12 }, { x: 85, y: 34 }
    ];

    let energyIn = { x: 0, y: 4 };
    let progressArrow = { x: 55, y: 23 };
    let time = 75;
    let energy = 50;

    let baseRecipe = () => {
        return catalyst.recipes.modular_machinery_reborn.machine_recipe(machine_id, time)
            .width(120)
            .height(60)
            .progressData(ProgressData.create().x(progressArrow.x).y(progressArrow.y))
            .requireEnergyPerTick(energy, energyIn.x, energyIn.y);
    }

    let getItem = (material, amount) =>
    {
        if(material.includes(':')) return Item.of(material, amount)

        let id = mod_id + "gem_" + material
        if(Item.exists(id)) return Item.of(id, amount)
        id = mod_id + material + "_ingot"
        if(Item.exists(id)) return Item.of(id, amount)
        if(material === "sanguis") return Item.of('eternalores:gem_sanguis_vivus', amount)
        
        //mc guessing
        id = "minecraft:" + material + "_ingot"
        if(Item.exists(id)) return Item.of(id, amount)
        
        if(material === "lapis") return Item.of('minecraft:lapis_lazuli', amount)
        if(material === "diamond") return Item.of('minecraft:diamond', amount)
        if(material === "emerald") return Item.of('minecraft:emerald', amount)
        if(material === "quartz") return Item.of('minecraft:quartz', amount)
        if(material === "amethyst") return Item.of('minecraft:amethyst_shard', amount)
        if(material === "wooden") return Ingredient.of('#minecraft:planks', amount)

        let vanilla = 'minecraft:' + material;
        if (Item.exists(vanilla)) return Item.of(vanilla, amount);
        
        return undefined
    }

    let getDust = (material) => {
        if(material.includes(':')) return undefined

        let id = mod_id + material + "_small_dust"
        if(Item.exists(id)) return { item: Item.of(id, 3), is_small: true }
        id = mod_id + material + "_dust"
        if(Item.exists(id)) return { item: Item.of(id, 1), is_small: false }

        if(material === "redstone") return { item: Item.of("minecraft:redstone", 1), is_small: false }
        if(material === "wooden") return { item: Item.of('eternalores:sawdust', 1), is_small: false }
        return undefined
    }

    let createRecipe = (material, amount_input, output, amount, mold, parallel) => {
        let item = getItem(material, amount_input)
        if(item === undefined)
        {
            console.warn(`Incorrect recipe inputs for item ${material} for extruder!`)
            return;
        }

        let recipe = baseRecipe();

        recipe.requireItem(item, input_slots[0].x, input_slots[0].y);
        recipe.requireItem(Item.of(mold, 1), 0, input_slots[1].x, input_slots[1].y);
        let output_id = output.includes(':') ? output : mod_id + output
        recipe.produceItem(Item.of(output_id, amount), output_slots[0].x, output_slots[0].y)

        let dust = getDust(material)
        if(dust !== undefined)
        {
            if(dust.is_small)
            {
                recipe.produceItem(dust.item, output_slots[1].x, output_slots[1].y)
            }
            else
            {
                recipe.produceItem(dust.item, 0.3, output_slots[1].x, output_slots[1].y)
            }
        }
        else
        {
            if(!material.includes(':'))
            {
                console.warn(`Incorrect dust for item ${material} for extruder!`)
            }
        }

        if(parallel > 1)
        {
            recipe.hide()
        }

        recipe.id(`catalyst:mmr/extruder/${recipe_counter}/${output.replace(':', '_')}_${amount}`);
        recipe_counter++;
    };

    let eternalFoilIds = Ingredient.of('#c:foils').getItemIds().filter(id => id.namespace === 'eternalores');
    let eternalGearIds = Ingredient.of('#c:gears').getItemIds().filter(id => id.namespace === 'eternalores');
    let eternalPlateIds = Ingredient.of('#c:plates').getItemIds().filter(id => id.namespace === 'eternalores');
    let eternalRodIds = Ingredient.of('#c:rods').getItemIds().filter(id => id.namespace === 'eternalores');

    // Foils
    eternalFoilIds.forEach(id => {
        let material = id.path.replace('_foil', '');
        for(let i = 1; i <= 16; i++)
        {
            createRecipe(material, i, id.toString(), 2 * i, 'eternalores:mold_foil', i);
        }
    });

    // Gears
    eternalGearIds.forEach(id => {
        let material = id.path.replace('gear_', '');
        for(let i = 1; i <= 16; i++)
        {
            createRecipe(material, 4 * i, id.toString(), 1 * i, 'eternalores:mold_gear', i);
        }
    });

    // Plates
    eternalPlateIds.forEach(id => {
        let material = id.path.replace('plate_', '');
        for(let i = 1; i <= 16; i++)
        {
            createRecipe(material, 1 * i, id.toString(), 1 * i, 'eternalores:mold_plate', i);
        }
    });

    // Rods
    eternalRodIds.forEach(id => {
        let material = id.path.replace('rod_', '');
        for(let i = 1; i <= 16; i++)
        {
            createRecipe(material, 1 * i, id.toString(), 2 * i, 'eternalores:mold_rod', i);
        }
    });

    energized_plates.forEach(pair => {
        for(let i = 1; i <= 16; i++)
        {
            createRecipe(pair.input, 1 * i, pair.output, 1 * i, 'eternalores:mold_plate', i);
        }
    });

    standard_wires.forEach(wire => {
        for(let i = 1; i <= 16; i++)
        {
            createRecipe(wire.material, 1 * i, wire.output, 3 * i, 'immersiveengineering:mold_wire', i)
        }
    });

    energized_wires.forEach(wire => {
        for(let i = 1; i <= 16; i++)
        {
            createRecipe(wire.input, 1 * i, wire.output, 3 * i, 'immersiveengineering:mold_wire', i)
        }
    });

    console.log(`[CatJS] Finished extruder recipes (${recipe_counter} total)`)
})

MMREvents.extraTooltips(event => {
    event.create("mmr:extruder", 'item')
    .add(Component.translatable("catalyst.mmr.tooltip.extruder.item"))

    event.create("mmr:extruder", 'gui')
    .add(Component.translatable("catalyst.mmr.tooltip.extruder.gui"))
})
/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
ServerEvents.recipes(catalyst => {

    let recipes = [
        //Blood
        {
            time: 20,
            outputs: [],
            inputs: [{ id: "#c:foods/raw_fish", count: 10, chance: 1.0 }],
            fluid_input: [{ id: "minecraft:water", amount: 10000 }],
            fluid_output: [{ id: "evilcraft:blood", amount: 3000 }]
        },
        {
            time: 80,
            outputs: [],
            inputs: [
                { id: 'ars_nouveau:abjuration_essence', count: 2, chance: 1.0 },
                { id: 'forcecraft:soul_wafer', count: 1, chance: 1.0 },
                { id: 'enderio:soularium_block', count: 1, chance: 1.0 }
            ],
            fluid_input: [{ id: "evilcraft:blood", amount: 3000 }],
            fluid_output: [{ id: "catalystcore:liquid_blood", amount: 1000 }]
        },
        //Tier 0
        {
            time: 100,
            outputs: [{ id: "evilcraft:flesh_werewolf", count: 2, chance: 1.0 }],
            inputs: [{ id: "minecraft:rotten_flesh", count: 1, chance: 1.0 }],
            fluid_input: [{ id: "catalystcore:liquid_blood", amount: 500 }],
            fluid_output: []
        },
        {
            time: 100,
            outputs: [{ id: "evilcraft:werewolf_bone", count: 2, chance: 1.0 }],
            inputs: [{ id: "minecraft:bone", count: 1, chance: 1.0 }],
            fluid_input: [{ id: "catalystcore:liquid_blood", amount: 250 }],
            fluid_output: []
        },
        {
            time: 100,
            outputs: [{ id: "evilcraft:werewolf_fur", count: 2, chance: 1.0 }],
            inputs: [{ id: 'minecraft:leather', count: 4, chance: 1.0 }],
            fluid_input: [{ id: "catalystcore:liquid_blood", amount: 1000 }],
            fluid_output: []
        },
        {
            time: 150,
            outputs: [{ id: "evilcraft:dark_gem", count: 16, chance: 1.0 }],
            inputs: [{ id: "minecraft:diamond", count: 16, chance: 1.0 }],
            fluid_input: [{ id: "catalystcore:liquid_blood", amount: 1000 }],
            fluid_output: []
        },
        {
            time: 60,
            outputs: [{ id: "evilcraft:hardened_blood_shard", count: 24, chance: 1.0 }],
            inputs: [{ id: 'minecraft:flint_and_steel', count: 1, chance: 1.0 }],
            fluid_input: [{ id: "catalystcore:liquid_blood", amount: 200 }],
            fluid_output: []
        },
        {
            time: 60,
            outputs: [{ id: "evilcraft:bloody_cobblestone", count: 8, chance: 1.0 }],
            inputs: [{ id: "minecraft:cobblestone", count: 8, chance: 1.0 }],
            fluid_input: [{ id: "catalystcore:liquid_blood", amount: 15 }],
            fluid_output: []
        },
        {
            time: 200,
            outputs: [{ id: "evilcraft:undead_sapling", count: 1, chance: 1.0 }],
            inputs: [{ id: "minecraft:oak_sapling", count: 1, chance: 1.0 }],
            fluid_input: [{ id: "catalystcore:liquid_blood", amount: 5 }],
            fluid_output: []
        },
        {
            time: 400,
            outputs: [{ id: "evilcraft:dark_power_gem_block", count: 1, chance: 1.0 }],
            inputs: [{ id: "evilcraft:dark_gem", count: 9, chance: 1.0 }],
            fluid_input: [{ id: "catalystcore:liquid_blood", amount: 1000 }],
            fluid_output: []
        },
        {
            time: 400,
            outputs: [{ id: "evilcraft:exalted_crafter_wooden_empowered", count: 1, chance: 1.0 }],
            inputs: [{ id: "minecraft:crafting_table", count: 1, chance: 1.0 }],
            fluid_input: [{ id: "catalystcore:liquid_blood", amount: 20000 }],
            fluid_output: []
        },
        {
            time: 450,
            outputs: [{ id: "evilcraft:exalted_crafter_empowered", count: 1, chance: 1.0 }],
            inputs: [{ id: "evilcraft:exalted_crafter_wooden_empowered", count: 1, chance: 1.0 }],
            fluid_input: [{ id: "catalystcore:liquid_blood", amount: 20000 }],
            fluid_output: []
        },
        {
            time: 150,
            outputs: [{ id: "evilcraft:dark_power_gem", count: 1, chance: 1.0 }],
            inputs: [{ id: "evilcraft:dark_gem", count: 1, chance: 1.0 }],
            fluid_input: [{ id: "catalystcore:liquid_blood", amount: 111 }],
            fluid_output: []
        },
        {
            time: 100,
            outputs: [{ id: "evilcraft:blood_potash", count: 2, chance: 1.0 }],
            inputs: [{ id: "minecraft:charcoal", count: 1, chance: 1.0 }],
            fluid_input: [{ id: "catalystcore:liquid_blood", amount: 200 }],
            fluid_output: []
        },
        {
            time: 80,
            outputs: [{ id: "minecraft:grass_block", count: 1, chance: 1.0 }],
            inputs: [{ id: "minecraft:dirt", count: 1, chance: 1.0 }],
            fluid_input: [{ id: "catalystcore:liquid_blood", amount: 50 }],
            fluid_output: []
        },
        {
            time: 300,
            outputs: [{ id: Item.of('evilcraft:weather_container', 1 , { "evilcraft:weather_container_type": "CLEAR" }), count: 1, chance: 1.0, ntb: true }],
            inputs: [
                { id: "minecraft:glass_bottle", count: 1, chance: 1.0 },
                { id: 'mcwroofs:gutter_base_light_blue', count: 1, chance: 1.0 }
            ],
            fluid_input: [{ id: "catalystcore:liquid_blood", amount: 2000 }],
            fluid_output: []
        },
        {
            time: 300,
            outputs: [{ id: Item.of('evilcraft:weather_container', 1 , { "evilcraft:weather_container_type": "RAIN" }), count: 1, chance: 1.0, ntb: true }],
            inputs: [
                { id: "minecraft:glass_bottle", count: 1, chance: 1.0 },
                { id: 'mcwroofs:gutter_base_blue', count: 1, chance: 1.0 }
            ],
            fluid_input: [{ id: "catalystcore:liquid_blood", amount: 2000 }],
            fluid_output: []
        },
        {
            time: 300,
            outputs: [{ id: Item.of('evilcraft:weather_container', 1 , { "evilcraft:weather_container_type": "LIGHTNING" }), count: 1, chance: 1.0, ntb: true }],
            inputs: [
                { id: "minecraft:glass_bottle", count: 1, chance: 1.0 },
                { id: 'mcwroofs:gutter_base_light_gray', count: 1, chance: 1.0 }
            ],
            fluid_input: [{ id: "catalystcore:liquid_blood", amount: 2000 }],
            fluid_output: []
        },
        {
            time: 200,
            outputs: [{ id: "minecraft:ghast_tear", count: 1, chance: 1.0 }],
            inputs: [{ id: 'eternalores:salt_dust', count: 1, chance: 1.0 }],
            fluid_input: [{ id: "catalystcore:liquid_blood", amount: 3000 }],
            fluid_output: []
        },
        {
            time: 60,
            outputs: [{ id: "evilcraft:blood_waxed_coal", count: 1, chance: 1.0 }],
            inputs: [{ id: "minecraft:coal", count: 1, chance: 1.0 }],
            fluid_input: [{ id: "catalystcore:liquid_blood", amount: 500 }],
            fluid_output: []
        },
        {
            time: 250,
            outputs: [{ id: "evilcraft:blood_waxed_coal_block", count: 1, chance: 1.0 }],
            inputs: [{ id: "minecraft:coal_block", count: 1, chance: 1.0 }],
            fluid_input: [{ id: "catalystcore:liquid_blood", amount: 4500 }],
            fluid_output: []
        },
        {
            time: 600,
            outputs: [{ id: "evilcraft:bowl_of_promises_tier0", count: 1, chance: 1.0 }],
            inputs: [{ id: 'evilcraft:bowl_of_promises_dusted', count: 1, chance: 1.0 }],
            fluid_input: [{ id: "catalystcore:liquid_blood", amount: 2000 }],
            fluid_output: []
        },
        {
            time: 300,
            outputs: [{ id: "evilcraft:promise_acceptor_iron", count: 1, chance: 1.0 }],
            inputs: [{ id: "minecraft:iron_block", count: 1, chance: 1.0 }],
            fluid_input: [{ id: "catalystcore:liquid_blood", amount: 4000 }],
            fluid_output: []
        },
        //Tier 1: Iron
        {
            time: 200,
            outputs: [{ id: "minecraft:ender_pearl", count: 4, chance: 1.0 }],
            inputs: [
                { id: 'evilcraft:potentia_sphere', count: 4, chance: 1.0 },
                { id: "evilcraft:promise_tier_1", count: 1, chance: 0.0 }
            ],
            fluid_input: [{ id: "catalystcore:liquid_blood", amount: 2000 }],
            fluid_output: []
        },
        {
            time: 200,
            outputs: [{ id: "minecraft:blaze_rod", count: 4, chance: 1.0 }],
            inputs: [
                { id: 'eternalores:rod_rose_gold', count: 4, chance: 1.0 },
                { id: "evilcraft:promise_tier_1", count: 1, chance: 0.0 }
            ],
            fluid_input: [{ id: "catalystcore:liquid_blood", amount: 2000 }],
            fluid_output: []
        },
        {
            time: 250,
            outputs: [{ id: "evilcraft:corrupted_tear", count: 1, chance: 1.0 }],
            inputs: [
                { id: "minecraft:ghast_tear", count: 1, chance: 1.0 },
                { id: "evilcraft:promise_tier_1", count: 1, chance: 0.0 }
            ],
            fluid_input: [{ id: "catalystcore:liquid_blood", amount: 4000 }],
            fluid_output: []
        },
        {
            time: 300,
            outputs: [{ id: "minecraft:zombie_head", count: 1, chance: 1.0 }],
            inputs: [
                { id: "minecraft:rotten_flesh", count: 16, chance: 1.0 },
                { id: "evilcraft:promise_tier_1", count: 1, chance: 0.0 }
            ],
            fluid_input: [{ id: "catalystcore:liquid_blood", amount: 250 }],
            fluid_output: []
        },
        {
            time: 350,
            outputs: [{ id: "minecraft:creeper_head", count: 1, chance: 1.0 }],
            inputs: [
                { id: "minecraft:gunpowder", count: 16, chance: 1.0 },
                { id: "evilcraft:promise_tier_1", count: 1, chance: 0.0 }
            ],
            fluid_input: [{ id: "catalystcore:liquid_blood", amount: 250 }],
            fluid_output: []
        },
        {
            time: 200,
            outputs: [
                { id: "eternalores:gem_sanguis_vivus", count: 2, chance: 1.0 },
                { id: "eternalores:gem_sanguis_vivus", count: 1, chance: 0.5 },
                { id: "eternalores:gem_sanguis_vivus", count: 1, chance: 0.25 }
            ],
            inputs: [
                { id: "minecraft:diamond", count: 16, chance: 1.0 },
                { id: "evilcraft:promise_tier_1", count: 1, chance: 0.0 }
            ],
            fluid_input: [{ id: "catalystcore:liquid_blood", amount: 1000 }],
            fluid_output: []
        },
        {
            time: 250,
            outputs: [{ id: "evilcraft:blood_orb_filled", count: 1, chance: 1.0 }],
            inputs: [
                { id: "evilcraft:blood_orb_empty", count: 1, chance: 1.0 },
                { id: "evilcraft:promise_tier_1", count: 1, chance: 0.0 }
            ],
            fluid_input: [{ id: "catalystcore:liquid_blood", amount: 4000 }],
            fluid_output: []
        },
        {
            time: 150,
            outputs: [{ id: "evilcraft:blook", count: 1, chance: 1.0 }],
            inputs: [
                { id: "minecraft:book", count: 1, chance: 1.0 },
                { id: "evilcraft:promise_tier_1", count: 1, chance: 0.0 }
            ],
            fluid_input: [{ id: "catalystcore:liquid_blood", amount: 150 }],
            fluid_output: []
        },
        {
            time: 150,
            outputs: [{ id: "evilcraft:dark_blood_brick", count: 4, chance: 1.0 }],
            inputs: [
                { id: "minecraft:nether_bricks", count: 4, chance: 1.0 },
                { id: "evilcraft:promise_tier_1", count: 1, chance: 0.0 }
            ],
            fluid_input: [{ id: "catalystcore:liquid_blood", amount: 250 }],
            fluid_output: []
        },
        {
            time: 120,
            outputs: [{ id: "evilcraft:reinforced_undead_planks", count: 4, chance: 1.0 }],
            inputs: [
                { id: "minecraft:oak_planks", count: 4, chance: 1.0 },
                { id: "evilcraft:promise_tier_1", count: 1, chance: 0.0 }
            ],
            fluid_input: [{ id: "catalystcore:liquid_blood", amount: 250 }],
            fluid_output: []
        },
        {
            time: 150,
            outputs: [{ id: "evilcraft:condensed_blood", count: 1, chance: 1.0 }],
            inputs: [
                { id: "evilcraft:hardened_blood_shard", count: 4, chance: 1.0 },
                { id: "evilcraft:promise_tier_1", count: 1, chance: 0.0 }
            ],
            fluid_input: [{ id: "catalystcore:liquid_blood", amount: 100 }],
            fluid_output: []
        },
        {
            time: 500,
            outputs: [{ id: "evilcraft:bowl_of_promises_tier1", count: 1, chance: 1.0 }],
            inputs: [
                { id: "evilcraft:bowl_of_promises_tier0", count: 1, chance: 1.0 },
                { id: "evilcraft:promise_tier_1", count: 1, chance: 0.0 }
            ],
            fluid_input: [{ id: "catalystcore:liquid_blood", amount: 2000 }],
            fluid_output: []
        },
        {
            time: 1000,
            outputs: [{ id: "evilcraft:promise_acceptor_gold", count: 1, chance: 1.0 }],
            inputs: [
                { id: "minecraft:gold_block", count: 1, chance: 1.0 },
                { id: "evilcraft:promise_tier_1", count: 1, chance: 0.0 },
            ],
            fluid_input: [{ id: "catalystcore:liquid_blood", amount: 10000 }],
            fluid_output: []
        },
        //Tier 2: Gold
        {
            time: 300,
            outputs: [
                { id: "evilcraft:vengeance_essence", count: 4, chance: 1.0 },
                { id: "evilcraft:vengeance_essence", count: 2, chance: 0.5 },
                { id: "evilcraft:vengeance_essence", count: 1, chance: 0.25 }
            ],
            inputs: [
                { id: "minecraft:quartz", count: 4, chance: 1.0 },
                { id: 'evilcraft:promise_tier_2', count: 1, chance: 0.0 }
            ],
            fluid_input: [{ id: "catalystcore:liquid_blood", amount: 4000 }],
            fluid_output: []
        },
        {
            time: 500,
            outputs: [{ id: "evilcraft:environmental_accumulation_core", count: 1, chance: 1.0 }],
            inputs: [
                { id: 'enderio:vat', count: 1, chance: 1.0 },
                { id: 'evilcraft:promise_tier_2', count: 1, chance: 0.0 }
            ],
            fluid_input: [{ id: "catalystcore:liquid_blood", amount: 8000 }],
            fluid_output: []
        },
        {
            time: 500,
            outputs: [{ id: "minecraft:wither_skeleton_skull", count: 1, chance: 1.0 }],
            inputs: [
                { id: "minecraft:creeper_head", count: 1, chance: 1.0 },
                { id: 'evilcraft:promise_tier_2', count: 1, chance: 0.0 }
            ],
            fluid_input: [{ id: "catalystcore:liquid_blood", amount: 8000 }],
            fluid_output: []
        },
        {
            time: 10,
            outputs: [{ id: "mysticalagriculture:dark_gem_seeds", count: 1, chance: 1.0 }],
            inputs: [
                { id: "mysticalagriculture:darkness_seeds", count: 1, chance: 1.0 },
                { id: 'evilcraft:promise_tier_2', count: 1, chance: 0.0 }
            ],
            fluid_input: [{ id: "catalystcore:liquid_blood", amount: 4000 }],
            fluid_output: []
        },
        {
            time: 500,
            outputs: [{ id: "evilcraft:bowl_of_promises_tier2", count: 1, chance: 1.0 }],
            inputs: [
                { id: "evilcraft:bowl_of_promises_tier1", count: 1, chance: 1.0 },
                { id: "evilcraft:promise_tier_2", count: 1, chance: 0.0 }
            ],
            fluid_input: [{ id: "catalystcore:liquid_blood", amount: 4000 }],
            fluid_output: []
        },
        {
            time: 3000,
            outputs: [{ id: "evilcraft:promise_acceptor_diamond", count: 1, chance: 1.0 }],
            inputs: [
                { id: "minecraft:diamond_block", count: 1, chance: 1.0 },
                { id: 'evilcraft:promise_tier_2', count: 1, chance: 0.0 }
            ],
            fluid_input: [{ id: "catalystcore:liquid_blood", amount: 53000 }],
            fluid_output: []
        },
        //Tier 3: Diamond
        {
            time: 80,
            outputs: [{ id: "evilcraft:inverted_potentia_empowered", count: 1, chance: 1.0 }],
            inputs: [
                { id: 'evilcraft:inverted_potentia', count: 4, chance: 1.0 },
                { id: 'evilcraft:promise_tier_3', count: 1, chance: 0.0 }
            ],
            fluid_input: [{ id: "catalystcore:liquid_blood", amount: 30000 }],
            fluid_output: []
        },
        {
            time: 450,
            outputs: [{ id: "evilcraft:garmonbozia", count: 1, chance: 1.0 }],
            inputs: [
                { id: 'evilcraft:vengeance_essence_materialized', count: 1, chance: 1.0 },
                { id: 'evilcraft:promise_tier_3', count: 1, chance: 0.0 }
            ],
            fluid_input: [{ id: "catalystcore:liquid_blood", amount: 30000 }],
            fluid_output: []
        },
        {
            time: 6000,
            outputs: [{ id: 'pastel:pure_bloodstone', count: 32, chance: 1.0 }],
            inputs: [
                { id: 'eternalores:gem_sanguis_vivus', count: 1, chance: 1.0 },
                { id: '#c:ingots', count: 32, chance: 1.0 }
            ],
            fluid_input: [{ id: "catalystcore:liquid_blood", amount: 30000 }],
            fluid_output: []
        }
    ];

    const machine_id = "mmr:vampire";

    const input_slots = [
        { x: 20, y: 12 },
        { x: 38, y: 12 },
        { x: 20, y: 30 },
        { x: 38, y: 30 }
    ];

    const output_slots = [
        { x: 98, y: 8  }, { x: 116, y: 8  }, { x: 134, y: 8  },
        { x: 98, y: 26 }, { x: 116, y: 26 }, { x: 134, y: 26 },
        { x: 98, y: 44 }, { x: 116, y: 44 }, { x: 134, y: 44 }
    ];

    const progress_arrow = { x: 65, y: 30 };

    let i = 0;
    recipes.forEach(rs => {
        i++;

        let recipe = catalyst.recipes.modular_machinery_reborn.machine_recipe(machine_id, rs.time)
            .width(160)
            .height(70)
            .progressData(ProgressData.create().x(progress_arrow.x).y(progress_arrow.y))

        if(rs.inputs)
        {
            if(rs.inputs.length > 3) throw Error("Can't have more than 3 inputs!")
            rs.inputs.forEach(input => {
                recipe.requireItem(Ingredient.of(input.id, input.count), input.chance || 1.0);
            });
        }

        if(rs.fluid_input)
        {
            if(rs.fluid_input.length > 1) throw Error("Can't have more than 1 input fluids!")
            rs.fluid_input.forEach(fluid => {
                recipe.requireFluid(Fluid.of(fluid.id, fluid.amount), fluid.chance || 1.0);
            });
        }

        let total_output = 0;
        if(rs.outputs)
        {
            rs.outputs.forEach(output => {
                total_output++;
                if(output.ntb)
                {
                    recipe.produceItem(output.id, output.chance || 1.0);
                }
                else
                {
                    recipe.produceItem(Ingredient.of(output.id, output.count), output.chance || 1.0);
                }
            });
        }

        if(total_output > 9) throw Error("Can't Have more than 9 total output!");
        
        if(rs.fluid_output)
        {
            rs.fluid_output.forEach(fluid => {
                total_output++;
                recipe.produceFluid(Fluid.of(fluid.id, fluid.amount), fluid.chance || 1.0);
            });
        }

        if(total_output > 9) throw Error("Can't Have more than 9 total output!");

        recipe.jei();

        let slotIndex = 0;

        if(rs.inputs)
        {
            for(let idx = 0; idx < rs.inputs.length; idx++)
            {
                let input = rs.inputs[idx];
                let slot = input_slots[slotIndex];
                recipe.requireItem(Ingredient.of(input.id, input.count), input.chance || 1.0, slot.x, slot.y);
                slotIndex++;
            }
        }

        for(let s = slotIndex; s < 3; s++)
        {
            recipe.emptyItem(input_slots[s].x, input_slots[s].y);
        }

        if(rs.fluid_input && rs.fluid_input.length > 0)
        {
            let fluid = rs.fluid_input[0];
            let slot = input_slots[3];
            recipe.requireFluid(Fluid.of(fluid.id, fluid.amount), fluid.chance || 1.0, slot.x, slot.y);
            slotIndex = 4;
        }

        for(let s = slotIndex; s < 4; s++)
        {
            recipe.emptyItem(input_slots[s].x, input_slots[s].y);
        }

        let outputIdx = 0;
        if(rs.outputs)
        {
            rs.outputs.forEach(output => {
                let slot = output_slots[outputIdx];
                if(output.ntb)
                {
                    recipe.produceItem(output.id, output.chance || 1.0, slot.x, slot.y);
                }
                else
                {
                    recipe.produceItem(Ingredient.of(output.id, output.count), output.chance || 1.0, slot.x, slot.y);
                }
                outputIdx++;
            });
        }

        if(rs.fluid_output)
        {
            rs.fluid_output.forEach(fluid => {
                let slot = output_slots[outputIdx];
                recipe.produceFluid(Fluid.of(fluid.id, fluid.amount), fluid.chance || 1.0, slot.x, slot.y);
                outputIdx++;
            });
        }

        for(let s = outputIdx; s < 9; s++)
        {
            recipe.emptyItem(output_slots[s].x, output_slots[s].y);
        }

        let first_output = rs.outputs && rs.outputs.length > 0 ? rs.outputs[0] : null;
        let raw_id = first_output ? Item.of(first_output.id).getId() : `recipe_${i}`;
        
        let pos = raw_id.indexOf('{');
        let recipe_name = pos > -1 ? raw_id.substring(0, pos) : raw_id;
        recipe.id(`catalyst:mmr/vampire/${i}/${recipe_name.replace(':', '_')}`);

    });
});
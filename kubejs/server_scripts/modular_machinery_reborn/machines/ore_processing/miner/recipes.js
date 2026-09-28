let IOType = Java.loadClass("es.degrassi.mmreborn.common.machine.IOType");


    let fluids_miner = [
        { id: "minecraft:lava", amount: 1000, chance: 1 },
        { id: "industrialforegoing:ether_gas", amount: 10, chance: 1 },
        { id: "pneumaticcraft:oil", amount: 50, chance: 1 },
        { id: "oritech:still_oil", amount: 125, chance: 1 },
        { id: "oritech:still_heavy_oil", amount: 75, chance: 1 },
        { id: "oritech:still_sulfuric_acid", amount: 35, chance: 1 }
    ];

    let precious = [
        { id: "minecraft:amethyst_cluster" },
        { id: "minecraft:glowstone_dust" },
        { id: "minecraft:echo_shard" }
    ];

    let beach = [
        { id: "eternalores:pearl_ore_block" },
        { id: "eternalores:salt_ore_block" },
        { id: "railcraft:saltpeter_ore" },
        { id: "occultism:iesnium_ore" }
    ];

    let ores = [
        { id: "pastel:topaz_ore" },
        { id: "minecraft:copper_ore" },
        { id: "eternalores:palladium_ore_block" },
        { id: "eternalores:spinel_ore_block" },
        { id: "minecraft:gold_ore" },
        { id: "malum:brilliant_stone" },
        { id: "minecraft:diamond_ore" },
        { id: "minecraft:redstone_ore" },
        { id: "minecraft:emerald_ore" },
        { id: "minecraft:coal_ore" },
        { id: "minecraft:lapis_ore" },
        { id: "eternalores:cobalt_ore_block" },
        { id: "eternalores:beryllium_ore_block" },
        { id: "eternalores:lignite_coal_ore_block" },
        { id: "eternalores:lead_ore_block" },
        { id: "eternalores:monazite_ore_block" },
        { id: "eternalores:molybdenum_ore_block" },
        { id: "eternalores:aluminum_ore_block" },
        { id: "minecraft:iron_ore" },
        { id: "forcecraft:power_ore" },
        { id: "create_new_age:thorium_ore" },
        { id: "eternalores:niter_ore_block" },
        { id: "eternalores:sulfur_ore_block" },
        { id: "rftoolsbase:dimensionalshard_overworld" },
        { id: "malum:soulstone_ore" },
        { id: "actuallyadditions:black_quartz_ore" },
        { id: "theurgy:sal_ammoniac_ore" },
        { id: "eternalores:cinnabar_ore_block" },
        { id: "eternalores:ruby_ore_block" },
        { id: "mekanism:fluorite_ore" },
        { id: "eternalores:uraninite_ore_block" },
        { id: "mekanism:osmium_ore" },
        { id: "eternalores:zircon_ore_block" },
        { id: "eternalores:vanadium_ore_block" },
        { id: "eternalores:uranium_ore_block" },
        { id: "eternalores:peridot_ore_block" },
        { id: "eternalores:tungsten_ore_block" },
        { id: "eternalores:titanium_ore_block" },
        { id: "eternalores:tin_ore_block" },
        { id: "eternalores:tanzanite_ore_block" },
        { id: "eternalores:onyx_ore_block" },
        { id: "eternalores:peat_coal_ore_block" },
        { id: "eternalores:amber_ore_block" },
        { id: "malum:cthonic_gold_ore" },
        { id: "eternalores:apatite_ore_block" },
        { id: "eternalores:gallium_ore_block" },
        { id: "eternalores:jade_ore_block" },
        { id: "eternalores:silver_ore_block" },
        { id: "mysticalagriculture:prosperity_ore" },
        { id: "eternalores:black_quartz_ore_block" },
        { id: "eternalores:iridium_ore_block" },
        { id: "eternalores:garnet_ore_block" },
        { id: "eternalores:anthracite_coal_ore_block" },
        { id: "eternalores:bituminous_coal_ore_block" },
        { id: "railcraft:silver_ore" },
        { id: "eternalores:fluorite_ore_block" },
        { id: "eternalores:sapphire_ore_block" },
        { id: "eternalores:zinc_ore_block" },
        { id: "mysticalagriculture:inferium_ore" },
        { id: "pastel:shimmerstone_ore" },
        { id: "pastel:malachite_ore" },
        { id: "pastel:azurite_ore" },
        { id: "pastel:moonstone_ore" },
        { id: "pastel:onyx_ore" },
        { id: "pastel:citrine_ore" },
        { id: "pastel:amethyst_ore" },
        { id: "xycraft_world:xychorium_ore_stone_light" },
        { id: "eternalores:neodymium_ore_block" },
        { id: "eternalores:nickel_ore_block" },
        { id: "eternalores:osmium_ore_block" },
        { id: "xycraft_world:xychorium_ore_stone_dark" },
        { id: "eternalores:platinum_ore_block" },
        { id: "xycraft_world:xychorium_ore_stone_red" },
        { id: "evilcraft:dark_ore" },
        { id: "xycraft_world:xychorium_ore_stone_green" },
        { id: "xycraft_world:xychorium_ore_stone_blue" },
        { id: "malum:natural_quartz_ore" },
        { id: "railcraft:nickel_ore" },
        { id: "immersiveengineering:ore_aluminum" },
        { id: "powah:uraninite_ore_dense" },
        { id: "mekanism:uranium_ore" }
    ];

    let nether = [
        { id: "mysticalagriculture:soulium_ore" },
        { id: "mysticalagradditions:nether_inferium_ore" },
        { id: "mysticalagradditions:nether_prosperity_ore" },
        { id: "minecraft:nether_quartz_ore" },
        { id: "eternalores:nether_gallium_ore_block" },
        { id: "eternalores:nether_cobalt_ore_block" },
        { id: "eternalores:nether_cinnabar_ore_block" },
        { id: "eternalores:nether_uraninite_ore_block" },
        { id: "eternalores:nether_osmium_ore_block" },
        { id: "eternalores:nether_zircon_ore_block" },
        { id: "railcraft:firestone_ore" },
        { id: "eternalores:nether_spinel_ore_block" },
        { id: "eternalores:nether_uranium_ore_block" },
        { id: "eternalores:nether_black_quartz_ore_block" },
        { id: "eternalores:nether_nickel_ore_block" },
        { id: "eternalores:nether_peridot_ore_block" },
        { id: "eternalores:nether_tanzanite_ore_block" },
        { id: "eternalores:nether_silver_ore_block" },
        { id: "pastel:stratine_ore" },
        { id: "eternalores:nether_sulfur_ore_block" },
        { id: "eternalores:nether_ruby_ore_block" },
        { id: "eternalores:nether_onyx_ore_block" },
        { id: "eternalores:necroticarite_ore_block" },
        { id: "eternalores:pyrolite_ore_block" },
        { id: "rftoolsbase:dimensionalshard_nether" },
        { id: "malum:blazing_quartz_ore" },
        { id: "eternalores:nether_monazite_ore_block" },
        { id: "minecraft:nether_gold_ore" },
        { id: "eternalores:nether_molybdenum_ore_block" },
        { id: "eternalores:ardite_ore_block" },
        { id: "eternalores:nether_jade_ore_block" },
        { id: "eternalores:nether_garnet_ore_block" },
        { id: "eternalores:obsidian_ore_block" },
        { id: "minecraft:ancient_debris" }
    ];

    let deepslate = [
        { id: "eternalores:deepslate_niter_ore_block" },
        { id: "eternalores:deepslate_garnet_ore_block" },
        { id: "eternalores:deepslate_tanzanite_ore_block" },
        { id: "eternalores:deepslate_lignite_coal_ore_block" },
        { id: "eternalores:deepslate_peat_coal_ore_block" },
        { id: "immersiveengineering:deepslate_ore_aluminum" },
        { id: "eternalores:deepslate_zircon_ore_block" },
        { id: "malum:deepslate_soulstone_ore" },
        { id: "theurgy:deepslate_sal_ammoniac_ore" },
        { id: "malum:deepslate_quartz_ore" },
        { id: "eternalores:deepslate_onyx_ore_block" },
        { id: "eternalores:deepslate_ruby_ore_block" },
        { id: "eternalores:deepslate_jade_ore_block" },
        { id: "eternalores:deepslate_peridot_ore_block" },
        { id: "eternalores:deepslate_monazite_ore_block" },
        { id: "mekanism:deepslate_fluorite_ore" },
        { id: "minecraft:deepslate_coal_ore" },
        { id: "eternalores:deepslate_silver_ore_block" },
        { id: "pastel:deepslate_azurite_ore" },
        { id: "eternalores:deepslate_zinc_ore_block" },
        { id: "railcraft:deepslate_silver_ore" },
        { id: "mekanism:deepslate_osmium_ore" },
        { id: "powah:deepslate_uraninite_ore_dense" },
        { id: "railcraft:deepslate_nickel_ore" },
        { id: "oritech:deepslate_platinum_ore" },
        { id: "mekanism:deepslate_uranium_ore" },
        { id: "replication:deepslate_replica_ore" },
        { id: "xycraft_world:xychorium_ore_deepslate_light" },
        { id: "pastel:deepslate_moonstone_ore" },
        { id: "pastel:deepslate_onyx_ore" },
        { id: "xycraft_world:xychorium_ore_deepslate_blue" },
        { id: "pastel:deepslate_malachite_ore" },
        { id: "pastel:deepslate_amethyst_ore" },
        { id: "pastel:deepslate_topaz_ore" },
        { id: "xycraft_world:xychorium_ore_deepslate_green" },
        { id: "xycraft_world:xychorium_ore_deepslate_red" },
        { id: "xycraft_world:xychorium_ore_deepslate_dark" },
        { id: "malum:brilliant_deepslate" },
        { id: "minecraft:deepslate_iron_ore" },
        { id: "minecraft:deepslate_copper_ore" },
        { id: "minecraft:deepslate_gold_ore" },
        { id: "minecraft:deepslate_redstone_ore" },
        { id: "minecraft:deepslate_emerald_ore" },
        { id: "minecraft:deepslate_lapis_ore" },
        { id: "minecraft:deepslate_diamond_ore" },
        { id: "evilcraft:dark_ore_deepslate" },
        { id: "forcecraft:deepslate_power_ore" },
        { id: "eternalores:deepslate_aluminum_ore_block" },
        { id: "eternalores:deepslate_amber_ore_block" },
        { id: "eternalores:deepslate_anthracite_coal_ore_block" },
        { id: "eternalores:deepslate_apatite_ore_block" },
        { id: "eternalores:deepslate_beryllium_ore_block" },
        { id: "eternalores:deepslate_bituminous_coal_ore_block" },
        { id: "eternalores:deepslate_cinnabar_ore_block" },
        { id: "eternalores:deepslate_cobalt_ore_block" },
        { id: "eternalores:deepslate_gallium_ore_block" },
        { id: "eternalores:deepslate_iridium_ore_block" },
        { id: "eternalores:deepslate_lead_ore_block" },
        { id: "eternalores:deepslate_molybdenum_ore_block" },
        { id: "eternalores:deepslate_sapphire_ore_block" },
        { id: "eternalores:deepslate_sulfur_ore_block" },
        { id: "eternalores:deepslate_tin_ore_block" },
        { id: "eternalores:deepslate_platinum_ore_block" },
        { id: "mysticalagriculture:deepslate_prosperity_ore" },
        { id: "eternalores:deepslate_nickel_ore_block" },
        { id: "eternalores:deepslate_neodymium_ore_block" },
        { id: "eternalores:deepslate_titanium_ore_block" },
        { id: "eternalores:deepslate_osmium_ore_block" },
        { id: "eternalores:deepslate_palladium_ore_block" },
        { id: "eternalores:deepslate_uraninite_ore_block" },
        { id: "eternalores:deepslate_uranium_ore_block" },
        { id: "pastel:deepslate_shimmerstone_ore" },
        { id: "eternalores:deepslate_spinel_ore_block" },
        { id: "pastel:deepslate_citrine_ore" },
        { id: "eternalores:deepslate_black_quartz_ore_block" },
        { id: "eternalores:deepslate_fluorite_ore_block" },
        { id: "mysticalagriculture:deepslate_inferium_ore" },
        { id: "eternalores:deepslate_vanadium_ore_block" }
    ];

    let end = [
        { id: "eternalores:end_pyrolite_ore_block" },
        { id: "eternalores:end_iridium_ore_block" },
        { id: "eternalores:end_molybdenum_ore_block" },
        { id: "eternalores:end_sapphire_ore_block" },
        { id: "eternalores:end_titanium_ore_block" },
        { id: "pastel:paltaeria_ore" },
        { id: "eternalores:end_neodymium_ore_block" },
        { id: "eternalores:end_palladium_ore_block" },
        { id: "eternalores:end_tungsten_ore_block" },
        { id: "eternalores:end_vanadium_ore_block" },
        { id: "oritech:endstone_platinum_ore" },
        { id: "eternalores:ultimatitanium_ore_block" },
        { id: "mysticalagradditions:end_inferium_ore" },
        { id: "rftoolsbase:dimensionalshard_end" },
        { id: "mysticalagradditions:end_prosperity_ore" }
    ];

    let kivi = [
        { id: "xycraft_world:xychorium_ore_kivi_blue" },
        { id: "xycraft_world:xychorium_ore_kivi_green" },
        { id: "xycraft_world:xychorium_ore_kivi_red" },
        { id: "xycraft_world:xychorium_ore_kivi_dark" },
        { id: "xycraft_world:xychorium_ore_kivi_light" }
    ];

    let blackslag = [
        { id: "pastel:blackslag_onyx_ore" },
        { id: "pastel:blackslag_topaz_ore" },
        { id: "pastel:blackslag_redstone_ore" },
        { id: "pastel:blackslag_citrine_ore" },
        { id: "pastel:blackslag_amethyst_ore" },
        { id: "pastel:blackslag_azurite_ore" },
        { id: "pastel:blackslag_shimmerstone_ore" },
        { id: "pastel:blackslag_moonstone_ore" },
        { id: "pastel:blackslag_malachite_ore" },

        { id: "pastel:blackslag_emerald_ore" },
        { id: "pastel:blackslag_diamond_ore" },
        { id: "pastel:blackslag_gold_ore" },
        { id: "pastel:blackslag_iron_ore" },
        { id: "pastel:blackslag_copper_ore" },
        { id: "pastel:blackslag_coal_ore" },
        { id: "pastel:blackslag_lapis_ore" },
    ];

    let trash = [
        { id: "minecraft:dirt" },
        { id: "minecraft:gravel" },
        { id: "minecraft:red_sand" },
        { id: "minecraft:sand" },
        { id: "minecraft:cobblestone" },
        { id: "minecraft:magma_block" },
        { id: "xycraft_world:kivi" },
        { id: "occultism:otherstone" },
        { id: "minecraft:gilded_blackstone" },
        { id: "minecraft:mossy_cobblestone" },
        { id: "minecraft:moss_block" },
        { id: "minecraft:obsidian" },
        { id: "minecraft:crying_obsidian" },
        { id: "minecraft:clay_ball" },
        { id: "eternalores:andesite_pebble" },
        { id: "eternalores:basalt_pebble" },
        { id: "eternalores:blackstone_pebble" },
        { id: "eternalores:calcite_pebble" },
        { id: "eternalores:deepslate_pebble" },
        { id: "eternalores:diorite_pebble" },
        { id: "eternalores:end_stone_pebble" },
        { id: "eternalores:granite_pebble" },
        { id: "eternalores:netherrack_pebble" },
        { id: "eternalores:stone_pebble" },
        { id: "eternalores:tuff_pebble" },
        { id: 'pastel:blackslag' }
    ];

    let trash_fluids = [
        { id: "oritech:still_mineral_slurry", amount: 0, chance: 1 },
        { id: "minecraft:water", amount: 0, chance: 1 }
    ];

    let treasure = [
        { id: "occultism:mining_dim_core" },
        { id: "catalystcore:comet_shard" },
        { id: "catalystcore:elemental_emptiness_crystal" }
    ];

    let category_map = {
        precious: precious,
        beach: beach,
        ores: ores,
        nether: nether,
        deepslate: deepslate,
        end: end,
        kivi: kivi,
        blackslag: blackslag,
        fluids: fluids_miner
    };

    let categories = [
        { name: 'precious', input_items: ['minecraft:calcite'], dimension: null, list: precious },
        { name: 'beach', input_items: ['minecraft:sand'], dimension: 'minecraft:overworld', list: beach },
        { name: 'ores', input_items: ['minecraft:stone'], dimension: 'minecraft:overworld', list: ores },
        { name: 'nether', input_items: ['minecraft:netherrack'], dimension: 'minecraft:the_nether', list: nether },
        { name: 'deepslate', input_items: ['minecraft:deepslate'], dimension: 'minecraft:overworld', list: deepslate },
        { name: 'end', input_items: ['minecraft:end_stone'], dimension: 'minecraft:the_end', list: end },
        { name: 'kivi', input_items: ['xycraft_world:kivi'], dimension: null, list: kivi },
        { name: 'blackslag', input_items: ['pastel:blackslag'], dimension: null, list: blackslag },
        { name: 'fluids', input_items: ['minecraft:bucket'], dimension: 'minecraft:the_nether', list: fluids_miner, isFluid: true }
    ];


MMREvents.recipeFunction("trash_tick", catalyst => {
    let controller = catalyst.machine;
    let data = catalyst.getTile().getPersistentData();
    let fluid = parseInt(catalyst.get(0));
    
    let tick_count = (data.getInt("trash_tick_counter") || 0) + 1;

    if(tick_count < 20)
    {
        data.putInt("trash_tick_counter", tick_count);
        return;
    }

    data.putInt("trash_tick_counter", 0);

    let total_len = trash.length + trash_fluids.length;
    
    if(total_len === 0) return;

    let ranges = [[1, 3], [4, 7], [12, 14], [23, 41]];
    let current_range = ranges[fluid];

    for(let i = 0; i < 5; i++)
    {
        let rand_index = Math.floor(Math.random() * total_len);
        let random_qty = Math.floor(Math.random() * (current_range[1] - current_range[0] + 1)) + current_range[0];

        if(rand_index < trash.length)
        {
            let item = trash[rand_index];
            controller.addItem(Item.of(item.id, random_qty));
        }
        else
        {
            let selected_fluid = trash_fluids[rand_index - trash.length];
            let fluid_amount = random_qty * 100;
            controller.addFluid(Fluid.of(selected_fluid.id, fluid_amount));
        }
    }
});

MMREvents.recipeFunction("loot_end", catalyst => {
    let controller = catalyst.machine;
    let category = catalyst.get(0);
    let level = parseInt(catalyst.get(1));

    let list = category_map[category];
    if(!list || list.length === 0) return;

    let loops_map = [3, 7, 16, 32];
    let max_qty_map = [2, 4, 8, 16];

    let total_loops = loops_map[level];
    let max_qty = max_qty_map[level];

    for(let i = 0; i < total_loops; i++)
    {
        let entry = list[Math.floor(Math.random() * list.length)];
        let count = Math.floor(Math.random() * max_qty) + 1;
        
        controller.addItem(Item.of(entry.id, count));
    }

    if(Math.random() < 0.05)
    {
        let treasure_entry = treasure[Math.floor(Math.random() * treasure.length)];
        controller.addItem(Item.of(treasure_entry.id, 1));
    }
});

MMREvents.recipeFunction("fluid_end", catalyst => {
    let controller = catalyst.machine;
    let category = catalyst.get(0);
    let level = parseInt(catalyst.get(1));

    let list = category_map[category];
    if(!list || list.length === 0)
    {
        return;
    }

    let multipliers = [1, 2, 5, 7];
    let multiplier = multipliers[level];

    let entry = list[Math.floor(Math.random() * list.length)];
    let base_amount = entry.amount > 0 ? entry.amount : 100;
    
    controller.addFluid(Fluid.of(entry.id, base_amount * multiplier));

    if(Math.random() < 0.05)
    {
        let treasure_entry = treasure[Math.floor(Math.random() * treasure.length)];
        controller.addItem(Item.of(treasure_entry.id, 1));
    }
});

ServerEvents.recipes(catalyst => {
    let input_slot = { x: 19, y: 19 };
    let fluid_slot = { x: 19, y: 39 };
    let progress_arrow = { x: 45, y: 30 };
    let energy_pos = { x: 0, y: 12 };
    
    let output_slots = [
        { x: 75, y: 12 }, { x: 93, y: 12 }, { x: 111, y: 12 },
        { x: 75, y: 30 }, { x: 93, y: 30 }, { x: 111, y: 30 },
        { x: 75, y: 48 }, { x: 93, y: 48 }, { x: 111, y: 48 }
    ];

    let time = 200;
    let machine_id = "mmr:miner";
    const liquids = ["", "minecraft:water", "catalystcore:liquid_darkness", "catalystcore:liquid_phyto_oil"];

    let index = 0;
    liquids.forEach(liquid => {
        categories.forEach(cat => {
            if(cat.input_items.length === 0)
            {
                console.warn("Empty inputs!");
                console.warn(cat + ", " + liquid);
                return;
            }

            let recipe = catalyst.recipes.modular_machinery_reborn.machine_recipe(machine_id, time)
                .hide()
                .priority(index)
                .requireEnergyPerTick(30000);

            if(cat.dimension)
            {
                recipe.dimensions([cat.dimension, "eternalores:mining_dimension"]);
            }

            cat.input_items.forEach(item => {
                recipe.requireItem(Item.of(item))
            })

            if(liquid !== "")
            {
                recipe.requireFluid(Fluid.of(liquid, 1000));
            }

            recipe.requireFunctionEachTick("trash_tick", [`${index}`]);

            if(cat.isFluid)
            {
                recipe.requireFunctionOnEnd("fluid_end", [cat.name, `${index}`]);
            } 
            else
            {
                recipe.requireFunctionOnEnd("loot_end", [cat.name, `${index}`]);
            }

            recipe.id(`catalyst:mmr/miner/${cat.name}/level_${index}`);
        });
        index++;
    });

    index = 0;
    liquids.forEach(liquid => {
        categories.forEach(cat => {
            cat.list.forEach((entry, entry_index) => {
                if(cat.input_items.length === 0)
                {
                    console.warn("Empty inputs!");
                    console.warn(cat + ", " + liquid);
                    return;
                }

                let recipe = catalyst.recipes.modular_machinery_reborn.machine_recipe(machine_id, time)
                    .requireItem(Item.of("minecraft:bedrock"))
                    .jei()
                    .width(140)
                    .height(75)
                    .priority(index)
                    .progressData(ProgressData.create().x(progress_arrow.x).y(progress_arrow.y));

                if(cat.dimension)
                {
                    recipe.dimensions([cat.dimension, "eternalores:mining_dimension"]);
                }

                recipe.requireEnergyPerTick(30000, energy_pos.x, energy_pos.y);

                let input_ingredient = cat.input_items.length === 1 
                    ? Item.of(cat.input_items[0], 1) 
                    : Ingredient.of(cat.input_items.map(id => Item.of(id, 1)));
                recipe.requireItem(input_ingredient, input_slot.x, input_slot.y);

                if(liquid !== "")
                {
                    recipe.requireFluid(Fluid.of(liquid, 1000), fluid_slot.x, fluid_slot.y);
                }
                else
                {
                    recipe.emptyItem(fluid_slot.x, fluid_slot.y); 
                }

                if(cat.isFluid)
                {
                    let fluid_amt = entry.amount > 0 ? entry.amount : 100;
                    recipe.produceFluid(Fluid.of(entry.id, fluid_amt), 1.0, output_slots[0].x, output_slots[0].y);
                }
                else
                {
                    recipe.produceItem(Item.of(entry.id, 1), 1.0, output_slots[0].x, output_slots[0].y);
                }

                let selected_treasure = treasure[entry_index % treasure.length];
                recipe.produceItem(Item.of(selected_treasure.id, 1), 0.05, output_slots[1].x, output_slots[1].y);

                let trash_1 = trash[(entry_index) % trash.length];
                let trash_2 = trash[(entry_index + 1) % trash.length];
                let trash_3 = trash[(entry_index + 2) % trash.length];
                let trash_4 = trash[(entry_index + 3) % trash.length];

                recipe.produceItem(Item.of(trash_1.id, 1), 1.0, output_slots[2].x, output_slots[2].y);
                recipe.produceItem(Item.of(trash_2.id, 1), 1.0, output_slots[3].x, output_slots[3].y);
                recipe.produceItem(Item.of(trash_3.id, 1), 1.0, output_slots[4].x, output_slots[4].y);
                recipe.produceItem(Item.of(trash_4.id, 1), 1.0, output_slots[5].x, output_slots[5].y);

                recipe.produceFluid(Fluid.of("oritech:still_mineral_slurry", 100), 1.0, output_slots[6].x, output_slots[6].y);
                recipe.produceFluid(Fluid.of("minecraft:water", 100), 1.0, output_slots[7].x, output_slots[7].y);

                recipe.emptyItem(output_slots[8].x, output_slots[8].y);

                recipe.id(`catalyst:mmr/miner/visual/${cat.name}/lvl_${index}/${entry.id.replace(':', '_')}`);
            });
        });
        index++;
    });

    console.log("[CatJS] All Miner recipes added :D");
});

MMREvents.extraTooltips(catalyst => {
    catalyst.create("mmr:miner", 'item')
        .add(Component.translatable("catalyst.mmr.tooltip.miner.item"))

    catalyst.create("mmr:miner", 'gui')
        .add(Component.translatable("catalyst.mmr.tooltip.miner.gui"))
})
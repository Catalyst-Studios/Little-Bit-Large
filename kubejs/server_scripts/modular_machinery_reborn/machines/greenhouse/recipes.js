/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/

ServerEvents.recipes(event => {
    let machine_id = "mmr:greenhouse";
    
    let inputSlot = { x: 19, y: 19 };
    let fluidSlot = { x: 19, y: 39 };
    let progressArrow = { x: 45, y: 30 };
    let energy = { x: 0, y: 12};
    let outputSlots = [
        { x: 75, y: 12 }, { x: 93, y: 12 }, { x: 111, y: 12 },
        { x: 75, y: 30 }, { x: 93, y: 30 }, { x: 111, y: 30 },
        { x: 75, y: 48 }, { x: 93, y: 48 }, { x: 111, y: 48 }
    ];

    let crops = [
    {
        id: "minecraft:sugar_cane",
        time: 250,
        energyPerTick: 15,
        fluid: { id: "minecraft:water", amount: 300 },
        outputs: [
            { id: "minecraft:sugar_cane", count: 3, chance: 1.0 },
            { id: "minecraft:sugar_cane", count: 4, chance: 0.75 },
            { id: "minecraft:sugar_cane", count: 5, chance: 0.5 },
        ]
    },
    {
        id: "minecraft:cactus",
        time: 300,
        energyPerTick: 10,
        fluid: { id: "minecraft:water", amount: 200 },
        outputs: [
            { id: "minecraft:cactus", count: 2, chance: 1.0 },
            { id: "minecraft:cactus", count: 5, chance: 0.5 },
            { id: "minecraft:cactus", count: 6, chance: 0.25 },
        ]
    },
    {
        id: "minecraft:cocoa_beans",
        time: 280,
        energyPerTick: 12,
        fluid: { id: "minecraft:water", amount: 250 },
        outputs: [
            { id: "minecraft:cocoa_beans", count: 12, chance: 1.0 },
        ]
    },
    {
        id: "minecraft:nether_wart",
        time: 400,
        energyPerTick: 20,
        fluid: { id: "minecraft:lava", amount: 500 },
        outputs: [
            { id: "minecraft:nether_wart", count: 10, chance: 1.0 },
            { id: "minecraft:nether_wart", count: 5, chance: 0.5 },
        ]
    },
    {
        id: "minecraft:melon_seeds",
        time: 90,
        energyPerTick: 8,
        fluid: { id: "minecraft:water", amount: 150 },
        outputs: [
            { id: "minecraft:melon_seeds", count: 5, chance: 1.0 },
            { id: "minecraft:melon_slice", count: 6, chance: 0.8 },
            { id: "minecraft:melon", count: 3, chance: 0.5 }
        ]
    },
    {
        id: "minecraft:pumpkin_seeds",
        time: 220,
        energyPerTick: 8,
        fluid: { id: "minecraft:water", amount: 150 },
        outputs: [
            { id: "minecraft:pumpkin_seeds", count: 2, chance: 1.0 },
            { id: "minecraft:pumpkin", count: 3, chance: 1 },
            { id: "minecraft:pumpkin", count: 3, chance: 0.5 }
        ]
    },
    {
        id: "minecraft:carrot",
        time: 240,
        energyPerTick: 10,
        fluid: { id: "minecraft:water", amount: 200 },
        outputs: [
            { id: "minecraft:carrot", count: 4, chance: 1.0 },
            { id: "minecraft:carrot", count: 3, chance: 0.75 },
            { id: "minecraft:carrot", count: 2, chance: 0.5 },
        ]
    },
    {
        id: "minecraft:potato",
        time: 240,
        energyPerTick: 10,
        fluid: { id: "minecraft:water", amount: 200 },
        outputs: [
            { id: "minecraft:potato", count: 4, chance: 1.0 },
            { id: "minecraft:potato", count: 6, chance: 0.75 },
            { id: "minecraft:potato", count: 4, chance: 0.5 },
            { id: "minecraft:poisonous_potato", count: 1, chance: 0.05 }
        ]
    },
    {
        id: "minecraft:beetroot_seeds",
        time: 200,
        energyPerTick: 8,
        fluid: { id: "minecraft:water", amount: 150 },
        outputs: [
            { id: "minecraft:beetroot_seeds", count: 2, chance: 1.0 },
            { id: "minecraft:beetroot", count: 4, chance: 1.0 },
            { id: "minecraft:beetroot", count: 4, chance: 0.5 },
        ]
    },
    {
        id: "minecraft:wheat_seeds",
        time: 200,
        energyPerTick: 8,
        fluid: { id: "minecraft:water", amount: 150 },
        outputs: [
            { id: "minecraft:wheat_seeds", count: 2, chance: 1.0 },
            { id: "minecraft:wheat", count: 5, chance: 1.0 },
            { id: "minecraft:wheat", count: 4, chance: 0.9 }
        ]
    },
    {
        id: "occultism:datura_seeds",
        time: 350,
        energyPerTick: 25,
        fluid: { id: "minecraft:water", amount: 400 },
        outputs: [
            { id: "occultism:datura_seeds", count: 2, chance: 1.0 },
            { id: "occultism:datura", count: 3, chance: 1 }
        ]
    },
    {
        id: "ars_nouveau:magebloom_crop",
        time: 320,
        energyPerTick: 20,
        fluid: { id: "minecraft:water", amount: 500 },
        outputs: [
            { id: "ars_nouveau:magebloom_crop", count: 2, chance: 1.0 },
            { id: "ars_nouveau:magebloom", count: 4, chance: 0.75 }
        ]
    },
    {
        id: "farmersdelight:cabbage_seeds",
        time: 260,
        energyPerTick: 12,
        fluid: { id: "minecraft:water", amount: 250 },
        outputs: [
            { id: "farmersdelight:cabbage_seeds", count: 2, chance: 1.0 },
            { id: "farmersdelight:cabbage", count: 4, chance: 1.0 },
            { id: "farmersdelight:cabbage", count: 4, chance: 0.5 }
        ]
    },
    {
        id: "farmersdelight:tomato_seeds",
        time: 260,
        energyPerTick: 12,
        fluid: { id: "minecraft:water", amount: 250 },
        outputs: [
            { id: "farmersdelight:tomato_seeds", count: 2, chance: 1.0 },
            { id: "farmersdelight:tomato", count: 4, chance: 1.0 },
            { id: "farmersdelight:tomato", count: 4, chance: 0.5 },
        ]
    },
    {
        id: "farmersdelight:onion",
        time: 270,
        energyPerTick: 12,
        fluid: { id: "minecraft:water", amount: 200 },
        outputs: [
            { id: "farmersdelight:onion", count: 6, chance: 1.0 },
            { id: "farmersdelight:onion", count: 3, chance: 0.5 }
        ]
    },
    {
        id: "farmersdelight:rice",
        time: 280,
        energyPerTick: 10,
        fluid: { id: "minecraft:water", amount: 300 },
        outputs: [
            { id: "farmersdelight:rice", count: 4, chance: 1.0 },
            { id: "farmersdelight:rice_panicle", count: 3, chance: 0.8 }
        ]
    },
    {
        id: "actuallyadditions:rice_seeds",
        time: 280,
        energyPerTick: 10,
        fluid: { id: "minecraft:water", amount: 300 },
        outputs: [
            { id: "actuallyadditions:rice_seeds", count: 3, chance: 1.0 },
            { id: "actuallyadditions:rice", count: 4, chance: 0.7 }
        ]
    },
    {
        id: "actuallyadditions:coffee_beans",
        time: 320,
        energyPerTick: 15,
        fluid: { id: "minecraft:water", amount: 250 },
        outputs: [
            { id: "actuallyadditions:coffee_beans", count: 4, chance: 1.0 },
            { id: "actuallyadditions:coffee_beans", count: 4, chance: 0.5 },
        ]
    },
    {
        id: "actuallyadditions:flax_seeds",
        time: 220,
        energyPerTick: 10,
        fluid: { id: "minecraft:water", amount: 180 },
        outputs: [
            { id: "actuallyadditions:flax_seeds", count: 2, chance: 1.0 },
            { id: "minecraft:string", count: 4, chance: 0.8 }
        ]
    },
    {
        id: "oritech:wither_crop_block",
        time: 300,
        energyPerTick: 40,
        fluid: { id: "minecraft:lava", amount: 800 },
        outputs: [
            { id: "oritech:wither_crop_block", count: 4, chance: 1.0 },
        ]
    },
    {
        id: "minecraft:torchflower_seeds",
        time: 280,
        energyPerTick: 12,
        fluid: { id: "minecraft:water", amount: 200 },
        outputs: [
            { id: "minecraft:torchflower_seeds", count: 2, chance: 1.0 },
            { id: "minecraft:torchflower", count: 3, chance: 0.7 }
        ]
    },
    {
        id: "immersiveengineering:seed",
        time: 300,
        energyPerTick: 15,
        fluid: { id: "minecraft:water", amount: 300 },
        outputs: [
            { id: "immersiveengineering:seed", count: 2, chance: 1.0 },
            { id: "immersiveengineering:hemp_fiber", count: 3, chance: 0.9 },
            { id: "minecraft:string", count: 4, chance: 0.8 }
        ]
    },
    {
        id: "actuallyadditions:canola_seeds",
        time: 250,
        energyPerTick: 10,
        fluid: { id: "minecraft:water", amount: 200 },
        outputs: [
            { id: "actuallyadditions:canola_seeds", count: 2, chance: 1.0 },
            { id: "actuallyadditions:canola", count: 2, chance: 0.8 }
        ]
    },
    {
        id: "minecraft:pitcher_pod",
        time: 260,
        energyPerTick: 12,
        fluid: { id: "minecraft:water", amount: 220 },
        outputs: [
            { id: "minecraft:pitcher_pod", count: 2, chance: 1.0 },
            { id: "minecraft:pitcher_plant", count: 3, chance: 0.7 }
        ]
    },
    {
        id: "minecraft:oxeye_daisy",
        time: 160,
        energyPerTick: 5,
        fluid: { id: "minecraft:water", amount: 100 },
        outputs: [
            { id: "minecraft:oxeye_daisy", count: 4, chance: 1.0 },
        ]
    },
    {
        id: "minecraft:white_tulip",
        time: 160,
        energyPerTick: 5,
        fluid: { id: "minecraft:water", amount: 100 },
        outputs: [
            { id: "minecraft:white_tulip", count: 4, chance: 1.0 },
        ]
    },
    {
        id: "biomesoplenty:pink_daffodil",
        time: 170,
        energyPerTick: 5,
        fluid: { id: "minecraft:water", amount: 100 },
        outputs: [
            { id: "biomesoplenty:pink_daffodil", count: 4, chance: 1.0 },
        ]
    },
    {
        id: "minecraft:lilac",
        time: 180,
        energyPerTick: 6,
        fluid: { id: "minecraft:water", amount: 120 },
        outputs: [
            { id: "minecraft:lilac", count: 2, chance: 1.0 },
        ]
    },
    {
        id: "biomesoplenty:orange_cosmos",
        time: 170,
        energyPerTick: 5,
        fluid: { id: "minecraft:water", amount: 100 },
        outputs: [
            { id: "biomesoplenty:orange_cosmos", count: 4, chance: 1.0 },
        ]
    },
    {
        id: "minecraft:red_mushroom",
        time: 230,
        energyPerTick: 8,
        fluid: { id: "minecraft:water", amount: 180 },
        outputs: [
            { id: "minecraft:red_mushroom", count: 3, chance: 1.0 },
            { id: "minecraft:brown_mushroom", count: 1, chance: 0.3 }
        ]
    },
    {
        id: "minecraft:allium",
        time: 160,
        energyPerTick: 5,
        fluid: { id: "minecraft:water", amount: 100 },
        outputs: [
            { id: "minecraft:allium", count: 4, chance: 1.0 },
        ]
    },
    {
        id: "minecraft:pink_tulip",
        time: 160,
        energyPerTick: 5,
        fluid: { id: "minecraft:water", amount: 100 },
        outputs: [
            { id: "minecraft:pink_tulip", count: 4, chance: 1.0 },
        ]
    },
    {
        id: "minecraft:sunflower",
        time: 190,
        energyPerTick: 6,
        fluid: { id: "minecraft:water", amount: 120 },
        outputs: [
            { id: "minecraft:sunflower", count: 2, chance: 1.0 },
        ]
    },
    {
        id: "biomesoplenty:wilted_lily",
        time: 170,
        energyPerTick: 5,
        fluid: { id: "minecraft:water", amount: 100 },
        outputs: [
            { id: "biomesoplenty:wilted_lily", count: 4, chance: 1.0 },
        ]
    },
    {
        id: "minecraft:rose_bush",
        time: 180,
        energyPerTick: 6,
        fluid: { id: "minecraft:water", amount: 120 },
        outputs: [
            { id: "minecraft:rose_bush", count: 2, chance: 1.0 },
        ]
    },
    {
        id: "minecraft:lily_of_the_valley",
        time: 180,
        energyPerTick: 6,
        fluid: { id: "minecraft:water", amount: 100 },
        outputs: [
            { id: "minecraft:lily_of_the_valley", count: 4, chance: 1.0 },
        ]
    },
    {
        id: "minecraft:orange_tulip",
        time: 160,
        energyPerTick: 5,
        fluid: { id: "minecraft:water", amount: 100 },
        outputs: [
            { id: "minecraft:orange_tulip", count: 4, chance: 1.0 },
        ]
    },
    {
        id: "minecraft:pink_petals",
        time: 150,
        energyPerTick: 4,
        fluid: { id: "minecraft:water", amount: 80 },
        outputs: [
            { id: "minecraft:pink_petals", count: 4, chance: 1.0 },
        ]
    },
    {
        id: "minecraft:poppy",
        time: 160,
        energyPerTick: 5,
        fluid: { id: "minecraft:water", amount: 100 },
        outputs: [
            { id: "minecraft:poppy", count: 4, chance: 1.0 },
        ]
    },
    {
        id: "biomesoplenty:wildflower",
        time: 150,
        energyPerTick: 4,
        fluid: { id: "minecraft:water", amount: 80 },
        outputs: [
            { id: "biomesoplenty:wildflower", count: 4, chance: 1.0 },
        ]
    },
    {
        id: "minecraft:peony",
        time: 180,
        energyPerTick: 6,
        fluid: { id: "minecraft:water", amount: 120 },
        outputs: [
            { id: "minecraft:peony", count: 2, chance: 1.0 },
        ]
    },
    {
        id: "biomesoplenty:toadstool",
        time: 220,
        energyPerTick: 8,
        fluid: { id: "minecraft:water", amount: 160 },
        outputs: [
            { id: "biomesoplenty:toadstool", count: 3, chance: 1.0 },
            { id: "minecraft:brown_mushroom", count: 1, chance: 0.4 }
        ]
    },
    {
        id: "biomesoplenty:violet",
        time: 160,
        energyPerTick: 5,
        fluid: { id: "minecraft:water", amount: 100 },
        outputs: [
            { id: "biomesoplenty:violet", count: 4, chance: 1.0 },
        ]
    },
    {
        id: "biomesoplenty:blue_hydrangea",
        time: 170,
        energyPerTick: 5,
        fluid: { id: "minecraft:water", amount: 100 },
        outputs: [
            { id: "biomesoplenty:blue_hydrangea", count: 2, chance: 1.0 },
        ]
    },
    {
        id: "biomesoplenty:tall_lavender",
        time: 180,
        energyPerTick: 6,
        fluid: { id: "minecraft:water", amount: 120 },
        outputs: [
            { id: "biomesoplenty:tall_lavender", count: 2, chance: 1.0 },
        ]
    },
    {
        id: "biomesoplenty:white_lavender",
        time: 170,
        energyPerTick: 5,
        fluid: { id: "minecraft:water", amount: 100 },
        outputs: [
            { id: "biomesoplenty:white_lavender", count: 4, chance: 1.0 },
        ]
    },
    {
        id: "biomesoplenty:icy_iris",
        time: 170,
        energyPerTick: 5,
        fluid: { id: "minecraft:water", amount: 100 },
        outputs: [
            { id: "biomesoplenty:icy_iris", count: 4, chance: 1.0 },
            { id: "minecraft:ice", count: 2, chance: 0.5 },
            { id: "minecraft:packed_ice", count: 1, chance: 0.4 },
            { id: "minecraft:blue_ice", count: 1, chance: 0.25 },
        ]
    },
    {
        id: "biomesoplenty:white_petals",
        time: 150,
        energyPerTick: 4,
        fluid: { id: "minecraft:water", amount: 80 },
        outputs: [
            { id: "biomesoplenty:white_petals", count: 4, chance: 1.0 },
        ]
    },
    {
        id: "biomesoplenty:rose",
        time: 170,
        energyPerTick: 5,
        fluid: { id: "minecraft:water", amount: 100 },
        outputs: [
            { id: "biomesoplenty:rose", count: 4, chance: 1.0 },
        ]
    },
    {
        id: "minecraft:brown_mushroom",
        time: 230,
        energyPerTick: 8,
        fluid: { id: "minecraft:water", amount: 180 },
        outputs: [
            { id: "minecraft:brown_mushroom", count: 3, chance: 1.0 },
            { id: "minecraft:red_mushroom", count: 1, chance: 0.3 }
        ]
    },
    {
        id: "biomesoplenty:lavender",
        time: 160,
        energyPerTick: 5,
        fluid: { id: "minecraft:water", amount: 100 },
        outputs: [
            { id: "biomesoplenty:lavender", count: 4, chance: 1.0 },
        ]
    },
    {
        id: "minecraft:azure_bluet",
        time: 160,
        energyPerTick: 5,
        fluid: { id: "minecraft:water", amount: 100 },
        outputs: [
            { id: "minecraft:azure_bluet", count: 4, chance: 1.0 },
        ]
    },
    {
        id: "minecraft:cornflower",
        time: 160,
        energyPerTick: 5,
        fluid: { id: "minecraft:water", amount: 100 },
        outputs: [
            { id: "minecraft:cornflower", count: 4, chance: 1.0 },
        ]
    },
    {
        id: "biomesoplenty:tall_white_lavender",
        time: 180,
        energyPerTick: 6,
        fluid: { id: "minecraft:water", amount: 120 },
        outputs: [
            { id: "biomesoplenty:tall_white_lavender", count: 2, chance: 1.0 },
        ]
    },
    {
        id: "minecraft:dandelion",
        time: 150,
        energyPerTick: 4,
        fluid: { id: "minecraft:water", amount: 80 },
        outputs: [
            { id: "minecraft:dandelion", count: 4, chance: 1.0 },
        ]
    },
    {
        id: "biomesoplenty:goldenrod",
        time: 160,
        energyPerTick: 5,
        fluid: { id: "minecraft:water", amount: 100 },
        outputs: [
            { id: "biomesoplenty:goldenrod", count: 2, chance: 1.0 },
            { id: "minecraft:gold_ingot", count: 1, chance: 0.2 },
            { id: "minecraft:gold_nugget", count: 4, chance: 0.3 },
        ]
    },
    {
        id: "minecraft:glow_berries",
        time: 280,
        energyPerTick: 12,
        fluid: { id: "minecraft:water", amount: 250 },
        outputs: [
            { id: "minecraft:glow_berries", count: 4, chance: 1.0 },
            { id: "minecraft:glow_lichen", count: 1, chance: 0.3 },
            { id: "minecraft:glowstone_dust", count: 1, chance: 0.4 }
        ]
    },
    {
        id: "minecraft:sweet_berries",
        time: 260,
        energyPerTick: 10,
        fluid: { id: "minecraft:water", amount: 200 },
        outputs: [
            { id: "minecraft:sweet_berries", count: 8, chance: 1.0 },
        ]
    },
    {
        id: "minecraft:red_tulip",
        time: 160,
        energyPerTick: 5,
        fluid: { id: "minecraft:water", amount: 100 },
        outputs: [
            { id: "minecraft:red_tulip", count: 4, chance: 1.0 },
        ]
    },
    {
        id: "biomesoplenty:glowflower",
        time: 180,
        energyPerTick: 8,
        fluid: { id: "minecraft:water", amount: 150 },
        outputs: [
            { id: "biomesoplenty:glowflower", count: 4, chance: 1.0 },
            { id: "minecraft:glowstone_dust", count: 2, chance: 0.4 },
            { id: "minecraft:glowstone_dust", count: 4, chance: 0.15 }
        ]
    },
    {
        id: "minecraft:bamboo",
        time: 300,
        energyPerTick: 15,
        fluid: { id: "minecraft:water", amount: 350 },
        outputs: [
            { id: "minecraft:bamboo", count: 16, chance: 1.0 },
        ]
    },
    {
        id: "minecraft:blue_orchid",
        time: 160,
        energyPerTick: 5,
        fluid: { id: "minecraft:water", amount: 100 },
        outputs: [
            { id: "minecraft:blue_orchid", count: 4, chance: 1.0 },
        ]
    },
    {
        id: "biomesoplenty:pink_hibiscus",
        time: 170,
        energyPerTick: 5,
        fluid: { id: "minecraft:water", amount: 100 },
        outputs: [
            { id: "biomesoplenty:pink_hibiscus", count: 4, chance: 1.0 },
        ]
    },
    {
        id: "minecraft:cherry_leaves",
        time: 250,
        energyPerTick: 10,
        fluid: { id: "minecraft:water", amount: 200 },
        outputs: [
            { id: "minecraft:cherry_leaves", count: 4, chance: 1.0 },
            { id: "minecraft:cherry_sapling", count: 1, chance: 0.3 }
        ]
    },
    {
        id: "minecraft:flowering_azalea_leaves",
        time: 260,
        energyPerTick: 10,
        fluid: { id: "minecraft:water", amount: 200 },
        outputs: [
            { id: "minecraft:flowering_azalea_leaves", count: 4, chance: 1.0 },
            { id: "minecraft:flowering_azalea", count: 1, chance: 0.3 }
        ]
    },
    {
        id: "minecraft:flowering_azalea",
        time: 240,
        energyPerTick: 12,
        fluid: { id: "minecraft:water", amount: 180 },
        outputs: [
            { id: "minecraft:flowering_azalea", count: 1, chance: 1.0 },
            { id: "minecraft:azalea", count: 1, chance: 0.3 }
        ]
    },
    {
        id: "minecraft:wither_rose",
        time: 500,
        energyPerTick: 35,
        fluid: { id: "minecraft:lava", amount: 600 },
        outputs: [
            { id: "minecraft:wither_rose", count: 1, chance: 1.0 },
            { id: "minecraft:wither_skeleton_skull", count: 1, chance: 0.3 },
            { id: "minecraft:wither_skeleton_skull", count: 1, chance: 0.15 }
        ]
    },
    {
        id: "minecraft:spore_blossom",
        time: 280,
        energyPerTick: 15,
        fluid: { id: "minecraft:water", amount: 250 },
        outputs: [
            { id: "minecraft:spore_blossom", count: 4, chance: 1.0 },
        ]
    },
    {
        id: "minecraft:chorus_flower",
        time: 450,
        energyPerTick: 30,
        fluid: { id: "minecraft:water", amount: 500 },
        outputs: [
            { id: "minecraft:chorus_flower", count: 2, chance: 1.0 },
            { id: "minecraft:chorus_fruit", count: 4, chance: 0.8 }
        ]
    },
    {
        id: "pastel:sweet_pea",
        time: 160,
        energyPerTick: 5,
        fluid: { id: "minecraft:water", amount: 100 },
        outputs: [
            { id: "pastel:sweet_pea", count: 4, chance: 1.0 },
        ]
    },
    {
        id: "pastel:apricotti",
        time: 170,
        energyPerTick: 5,
        fluid: { id: "minecraft:water", amount: 100 },
        outputs: [
            { id: "pastel:apricotti", count: 4, chance: 1.0 },
        ]
    },
    {
        id: "pastel:humming_bell",
        time: 170,
        energyPerTick: 6,
        fluid: { id: "minecraft:water", amount: 110 },
        outputs: [
            { id: "pastel:humming_bell", count: 4, chance: 1.0 },
            { id: 'minecraft:ice', count: 4, chance: 1.0 },
            { id: 'minecraft:packed_ice', count: 2, chance: 0.46 },
            { id: 'minecraft:blue_ice', count: 1, chance: 0.1 }
        ]
    },
    {
        id: "pastel:blood_orchid",
        time: 180,
        energyPerTick: 7,
        fluid: { id: "minecraft:water", amount: 120 },
        outputs: [
            { id: "pastel:blood_orchid", count: 4, chance: 1.0 },
        ]
    },
    {
        id: "pastel:amaranth_bushel",
        time: 190,
        energyPerTick: 8,
        fluid: { id: "minecraft:water", amount: 130 },
        outputs: [
            { id: "pastel:amaranth_bushel", count: 4, chance: 1.0 },
        ]
    },
    {
        id: "pastel:doombloom_seed",
        time: 350,
        energyPerTick: 25,
        fluid: { id: "minecraft:lava", amount: 400 },
        outputs: [
            { id: "pastel:doombloom_seed", count: 4, chance: 1.0 },
        ]
    },
    {
        id: "pastel:resonant_lily",
        time: 300,
        energyPerTick: 20,
        fluid: { id: "minecraft:water", amount: 300 },
        outputs: [
            { id: "pastel:resonant_lily", count: 4, chance: 1.0 },
            { id: "minecraft:ender_pearl", count: 1, chance: 0.7 },
            { id: "minecraft:ender_pearl", count: 3, chance: 0.1 }
        ]
    },
    {
        id: "occultism:otherflower",
        time: 400,
        energyPerTick: 30,
        fluid: { id: "minecraft:water", amount: 500 },
        outputs: [
            { id: "occultism:otherflower", count: 3, chance: 1.0 },
        ]
    },
    {
        id: "occultism:otherflower_natural",
        time: 420,
        energyPerTick: 30,
        fluid: { id: "minecraft:water", amount: 550 },
        outputs: [
            { id: "occultism:otherflower_natural", count: 12, chance: 1.0 },
        ]
    },
    {
        id: "productivetrees:purple_spiral_leaves",
        time: 240,
        energyPerTick: 10,
        fluid: { id: "minecraft:water", amount: 250 },
        outputs: [
            { id: "productivetrees:purple_spiral_leaves", count: 4, chance: 1.0 },
        ]
    },
    {
        id: "biomesoplenty:flowering_oak_leaves",
        time: 250,
        energyPerTick: 10,
        fluid: { id: "minecraft:water", amount: 200 },
        outputs: [
            { id: "biomesoplenty:flowering_oak_leaves", count: 4, chance: 1.0 }, 
        ]
    },
    {
        id: "biomesoplenty:snowblossom_leaves",
        time: 250,
        energyPerTick: 10,
        fluid: { id: "minecraft:water", amount: 200 },
        outputs: [
            { id: "biomesoplenty:snowblossom_leaves", count: 4, chance: 1.0 },
        ]
    },
    {
        id: "biomesoplenty:jacaranda_leaves",
        time: 250,
        energyPerTick: 10,
        fluid: { id: "minecraft:water", amount: 200 },
        outputs: [
            { id: "biomesoplenty:jacaranda_leaves", count: 4, chance: 1.0 },
        ]
    },
    {
        id: "biomesoplenty:burning_blossom",
        time: 350,
        energyPerTick: 25,
        fluid: { id: "minecraft:lava", amount: 450 },
        outputs: [
            { id: "biomesoplenty:burning_blossom", count: 2, chance: 1.0 },
            { id: "minecraft:blaze_powder", count: 4, chance: 0.5 },
            { id: "minecraft:blaze_powder", count: 2, chance: 0.3 },
            { id: "minecraft:blaze_rod", count: 1, chance: 0.3 }
        ]
    },
    {
        id: "biomesoplenty:endbloom",
        time: 400,
        energyPerTick: 30,
        fluid: { id: "minecraft:water", amount: 400 },
        outputs: [
            { id: "biomesoplenty:endbloom", count: 2, chance: 1.0 },
            { id: "minecraft:ender_pearl", count: 1, chance: 0.2 },
            { id: "minecraft:ender_pearl", count: 1, chance: 0.2 },
            { id: "minecraft:ender_pearl", count: 1, chance: 0.2 }
        ]
    },
    {
        id: "twilightforest:thorn_rose",
        time: 300,
        energyPerTick: 18,
        fluid: { id: "minecraft:water", amount: 280 },
        outputs: [
            { id: "twilightforest:thorn_rose", count: 2, chance: 1.0 },
            { id: "minecraft:rose_bush", count: 1, chance: 0.4 }
        ]
    },
    {
        id: "minecraft:fern",
        time: 180,
        energyPerTick: 6,
        fluid: { id: "minecraft:water", amount: 120 },
        outputs: [
            { id: "minecraft:fern", count: 2, chance: 1.0 },
            { id: "minecraft:vine", count: 1, chance: 0.3 }
        ]
    },
    {
        id: "minecraft:large_fern",
        time: 200,
        energyPerTick: 6,
        fluid: { id: "minecraft:water", amount: 130 },
        outputs: [
            { id: "minecraft:large_fern", count: 4, chance: 1.0 },
            { id: "minecraft:fern", count: 2, chance: 0.6 }
        ]
    },
    {
        id: "minecraft:short_grass",
        time: 100,
        energyPerTick: 3,
        fluid: { id: "minecraft:water", amount: 50 },
        outputs: [
            { id: "minecraft:short_grass", count: 4, chance: 1.0 },
            { id: "minecraft:wheat_seeds", count: 1, chance: 0.2 }
        ]
    },
    {
        id: "minecraft:tall_grass",
        time: 120,
        energyPerTick: 3,
        fluid: { id: "minecraft:water", amount: 60 },
        outputs: [
            { id: "minecraft:tall_grass", count: 4, chance: 1.0 },
            { id: "minecraft:wheat_seeds", count: 2, chance: 0.3 }
        ]
    },
    {
        id: "minecraft:seagrass",
        time: 150,
        energyPerTick: 5,
        fluid: { id: "minecraft:water", amount: 150 },
        outputs: [
            { id: "minecraft:seagrass", count: 3, chance: 1.0 },
            { id: "minecraft:kelp", count: 1, chance: 0.5 }
        ]
    },
    {
        id: "minecraft:kelp",
        time: 200,
        energyPerTick: 8,
        fluid: { id: "minecraft:water", amount: 200 },
        outputs: [
            { id: "minecraft:kelp", count: 3, chance: 1.0 },
            { id: "minecraft:dried_kelp", count: 1, chance: 0.5 }
        ]
    },
    {
        id: "minecraft:azalea",
        time: 240,
        energyPerTick: 12,
        fluid: { id: "minecraft:water", amount: 180 },
        outputs: [
            { id: "minecraft:azalea", count: 1, chance: 1.0 },
            { id: "minecraft:flowering_azalea", count: 1, chance: 0.2 }
        ]
    },
    {
        id: "minecraft:dead_bush",
        time: 100,
        energyPerTick: 2,
        fluid: { id: "minecraft:water", amount: 20 },
        outputs: [
            { id: "minecraft:dead_bush", count: 4, chance: 1.0 },
            { id: "minecraft:stick", count: 2, chance: 0.5 }
        ]
    },
    {
        id: "minecraft:crimson_roots",
        time: 220,
        energyPerTick: 12,
        fluid: { id: "minecraft:lava", amount: 300 },
        outputs: [
            { id: "minecraft:crimson_roots", count: 3, chance: 1.0 },
            { id: "minecraft:crimson_fungus", count: 1, chance: 0.4 }
        ]
    },
    {
        id: "minecraft:warped_roots",
        time: 220,
        energyPerTick: 12,
        fluid: { id: "minecraft:lava", amount: 300 },
        outputs: [
            { id: "minecraft:warped_roots", count: 3, chance: 1.0 },
            { id: "minecraft:warped_fungus", count: 1, chance: 0.4 }
        ]
    },
    {
        id: "minecraft:nether_sprouts",
        time: 210,
        energyPerTick: 10,
        fluid: { id: "minecraft:lava", amount: 250 },
        outputs: [
            { id: "minecraft:nether_sprouts", count: 3, chance: 1.0 },
            { id: "minecraft:twisting_vines", count: 1, chance: 0.3 }
        ]
    },
    {
        id: "minecraft:weeping_vines",
        time: 300,
        energyPerTick: 15,
        fluid: { id: "minecraft:lava", amount: 400 },
        outputs: [
            { id: "minecraft:weeping_vines", count: 4, chance: 1.0 },
        ]
    },
    {
        id: "minecraft:twisting_vines",
        time: 300,
        energyPerTick: 15,
        fluid: { id: "minecraft:lava", amount: 400 },
        outputs: [
            { id: "minecraft:twisting_vines", count: 4, chance: 1.0 },
        ]
    },
    {
        id: "minecraft:crimson_fungus",
        time: 350,
        energyPerTick: 18,
        fluid: { id: "minecraft:lava", amount: 400 },
        outputs: [
            { id: "minecraft:crimson_fungus", count: 2, chance: 1.0 },
            { id: "minecraft:crimson_roots", count: 2, chance: 0.6 }
        ]
    },
    {
        id: "minecraft:warped_fungus",
        time: 350,
        energyPerTick: 18,
        fluid: { id: "minecraft:lava", amount: 400 },
        outputs: [
            { id: "minecraft:warped_fungus", count: 2, chance: 1.0 },
            { id: "minecraft:warped_roots", count: 2, chance: 0.6 }
        ]
    },
    {
        id: "minecraft:vine",
        time: 180,
        energyPerTick: 6,
        fluid: { id: "minecraft:water", amount: 120 },
        outputs: [
            { id: "minecraft:vine", count: 4, chance: 1.0 },
        ]
    },
    {
        id: "minecraft:big_dripleaf",
        time: 280,
        energyPerTick: 12,
        fluid: { id: "minecraft:water", amount: 300 },
        outputs: [
            { id: "minecraft:big_dripleaf", count: 4, chance: 1.0 },
            { id: "minecraft:small_dripleaf", count: 2, chance: 0.7 }
        ]
    },
    {
        id: "minecraft:small_dripleaf",
        time: 200,
        energyPerTick: 8,
        fluid: { id: "minecraft:water", amount: 150 },
        outputs: [
            { id: "minecraft:small_dripleaf", count: 4, chance: 1.0 },
            { id: "minecraft:big_dripleaf", count: 1, chance: 0.3 }
        ]
    },
    {
        id: "minecraft:glow_lichen",
        time: 160,
        energyPerTick: 6,
        fluid: { id: "minecraft:water", amount: 100 },
        outputs: [
            { id: "minecraft:glow_lichen", count: 3, chance: 1.0 },
            { id: "minecraft:glowstone_dust", count: 3, chance: 0.2 },
            { id: "minecraft:glowstone_dust", count: 2, chance: 0.2 },
            { id: "minecraft:glow_ink_sac", count: 1, chance: 0.2 }
        ]
    },
    {
        id: "minecraft:hanging_roots",
        time: 200,
        energyPerTick: 8,
        fluid: { id: "minecraft:water", amount: 150 },
        outputs: [
            { id: "minecraft:hanging_roots", count: 3, chance: 1.0 },
        ]
    },
    {
        id: "minecraft:lily_pad",
        time: 180,
        energyPerTick: 6,
        fluid: { id: "minecraft:water", amount: 150 },
        outputs: [
            { id: "minecraft:lily_pad", count: 4, chance: 1.0 },
        ]
    },
    {
        id: "minecraft:sea_pickle",
        time: 220,
        energyPerTick: 10,
        fluid: { id: "minecraft:water", amount: 200 },
        outputs: [
            { id: "minecraft:sea_pickle", count: 4, chance: 1.0 },
        ]
    },
    {
        id: "minecraft:tube_coral",
        time: 200,
        energyPerTick: 8,
        fluid: { id: "minecraft:water", amount: 250 },
        outputs: [
            { id: "minecraft:tube_coral", count: 2, chance: 1.0 },
            { id: "minecraft:tube_coral_fan", count: 2, chance: 0.3 }
        ]
    },
    {
        id: "minecraft:brain_coral",
        time: 200,
        energyPerTick: 8,
        fluid: { id: "minecraft:water", amount: 250 },
        outputs: [
            { id: "minecraft:brain_coral", count: 2, chance: 1.0 },
            { id: "minecraft:brain_coral_fan", count: 2, chance: 0.3 }
        ]
    },
    {
        id: "minecraft:bubble_coral",
        time: 200,
        energyPerTick: 8,
        fluid: { id: "minecraft:water", amount: 250 },
        outputs: [
            { id: "minecraft:bubble_coral", count: 2, chance: 1.0 },
            { id: "minecraft:bubble_coral_fan", count: 2, chance: 0.3 }
        ]
    },
    {
        id: "minecraft:fire_coral",
        time: 200,
        energyPerTick: 8,
        fluid: { id: "minecraft:water", amount: 250 },
        outputs: [
            { id: "minecraft:fire_coral", count: 2, chance: 1.0 },
            { id: "minecraft:fire_coral_fan", count: 2, chance: 0.3 }
        ]
    },
    {
        id: "minecraft:horn_coral",
        time: 200,
        energyPerTick: 8,
        fluid: { id: "minecraft:water", amount: 250 },
        outputs: [
            { id: "minecraft:horn_coral", count: 2, chance: 1.0 },
            { id: "minecraft:horn_coral_fan", count: 2, chance: 0.3 }
        ]
    },
    {
        id: "minecraft:tube_coral_block",
        time: 220,
        energyPerTick: 10,
        fluid: { id: "minecraft:water", amount: 300 },
        outputs: [
            { id: "minecraft:tube_coral_block", count: 2, chance: 1.0 },
            { id: "minecraft:tube_coral", count: 2, chance: 0.5 }
        ]
    },
    {
        id: "minecraft:bubble_coral_block",
        time: 220,
        energyPerTick: 10,
        fluid: { id: "minecraft:water", amount: 300 },
        outputs: [
            { id: "minecraft:bubble_coral_block", count: 2, chance: 1.0 },
            { id: "minecraft:bubble_coral", count: 2, chance: 0.5 }
        ]
    },
    {
        id: "minecraft:brain_coral_block",
        time: 220,
        energyPerTick: 10,
        fluid: { id: "minecraft:water", amount: 300 },
        outputs: [
            { id: "minecraft:brain_coral_block", count: 2, chance: 1.0 },
            { id: "minecraft:brain_coral", count: 2, chance: 0.5 }
        ]
    },
    {
        id: "minecraft:fire_coral_block",
        time: 220,
        energyPerTick: 10,
        fluid: { id: "minecraft:water", amount: 300 },
        outputs: [
            { id: "minecraft:fire_coral_block", count: 2, chance: 1.0 },
            { id: "minecraft:fire_coral", count: 2, chance: 0.5 }
        ]
    },
    {
        id: "minecraft:horn_coral_block",
        time: 220,
        energyPerTick: 10,
        fluid: { id: "minecraft:water", amount: 300 },
        outputs: [
            { id: "minecraft:horn_coral_block", count: 2, chance: 1.0 },
            { id: "minecraft:horn_coral", count: 2, chance: 0.5 }
        ]
    },
    {
        id: "minecraft:tube_coral_fan",
        time: 180,
        energyPerTick: 7,
        fluid: { id: "minecraft:water", amount: 200 },
        outputs: [
            { id: "minecraft:tube_coral_fan", count: 2, chance: 1.0 },
            { id: "minecraft:tube_coral", count: 1, chance: 0.4 }
        ]
    },
    {
        id: "minecraft:brain_coral_fan",
        time: 180,
        energyPerTick: 7,
        fluid: { id: "minecraft:water", amount: 200 },
        outputs: [
            { id: "minecraft:brain_coral_fan", count: 2, chance: 1.0 },
            { id: "minecraft:brain_coral", count: 1, chance: 0.4 }
        ]
    },
    {
        id: "minecraft:bubble_coral_fan",
        time: 180,
        energyPerTick: 7,
        fluid: { id: "minecraft:water", amount: 200 },
        outputs: [
            { id: "minecraft:bubble_coral_fan", count: 2, chance: 1.0 },
            { id: "minecraft:bubble_coral", count: 1, chance: 0.4 }
        ]
    },
    {
        id: "minecraft:fire_coral_fan",
        time: 180,
        energyPerTick: 7,
        fluid: { id: "minecraft:water", amount: 200 },
        outputs: [
            { id: "minecraft:fire_coral_fan", count: 2, chance: 1.0 },
            { id: "minecraft:fire_coral", count: 1, chance: 0.4 }
        ]
    },
    {
        id: "minecraft:horn_coral_fan",
        time: 180,
        energyPerTick: 7,
        fluid: { id: "minecraft:water", amount: 200 },
        outputs: [
            { id: "minecraft:horn_coral_fan", count: 2, chance: 1.0 },
            { id: "minecraft:horn_coral", count: 1, chance: 0.4 }
        ]
    }
]

    let i = 0;
    crops.forEach(crop => {
        i++;
        let totalEnergy = crop.energyPerTick * crop.time;

        let recipe = event.recipes.modular_machinery_reborn.machine_recipe(machine_id, crop.time)
            .width(140)
            .height(80)
            .progressData(ProgressData.create().x(progressArrow.x).y(progressArrow.y));
        
        recipe.requireItem(Item.of(crop.id, 1));

        if(crop.energyPerTick && crop.energyPerTick > 0)
        {
            recipe.requireEnergy(totalEnergy);
        }
        
        if(crop.fluid && crop.fluid.amount > 0)
        {
            recipe.requireFluid(`${crop.fluid.amount}x ${crop.fluid.id}`);
        }
        
        crop.outputs.forEach(out => {
            recipe.produceItem(Item.of(out.id, out.count), out.chance);
        });
        
        recipe.jei();
        
        recipe.requireItem(Item.of(crop.id, 1), inputSlot.x, inputSlot.y);
        
        if(totalEnergy > 0)
        {
            recipe.requireEnergy(totalEnergy, energy.x, energy.y);
        }
        
        if(crop.fluid && crop.fluid.amount > 0)
        {
            recipe.requireFluid(Fluid.of(crop.fluid.id, crop.fluid.amount), fluidSlot.x, fluidSlot.y);
        }
        else
        {
            recipe.emptyFluid(fluidSlot.x, fluidSlot.y);
        }
        
        for(let i = 0; i < 9; i++)
        {
            if(i < crop.outputs.length)
            {
                let out = crop.outputs[i];
                recipe.produceItem(Item.of(out.id, out.count), out.chance, outputSlots[i].x, outputSlots[i].y);
            }
            else
            {
                recipe.emptyItem(outputSlots[i].x, outputSlots[i].y);
            }
        }

        recipe.id(`catalyst:mmr/greenhouse/${i}/${crop.id.replace(':', '_')}`);
    });
});
/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
//priority: 20
/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/

ServerEvents.tags('item', catalyst => {
    catalyst.add('c:armors/diamond', 'minecraft:diamond_helmet')
    catalyst.add('c:armors/diamond', 'minecraft:diamond_chestplate')
    catalyst.add('c:armors/diamond', 'minecraft:diamond_leggings')
    catalyst.add('c:armors/diamond', 'minecraft:diamond_boots')

    //Fluid Pumps
    catalyst.add('c:block/fluidpump', 'mekanism:electric_pump')
    catalyst.add('c:block/fluidpump', 'rangedpumps:pump')
    catalyst.add('c:block/fluidpump', 'energizedpower:fluid_pump')
    catalyst.add('c:block/fluidpump', 'xycraft_machines:hydro_pump')

    //Jetpacks
    catalyst.add('c:creativeflytype/jetpack', 'mekanism:jetpack')
    catalyst.add('c:creativeflytype/jetpack', 'ironjetpacks:jetpack')
    
    //Exalted Crafter Non-Powered
    catalyst.add('c:exaltedcrafter/tier/1', 'evilcraft:exalted_crafter_wooden')
    catalyst.add('c:exaltedcrafter/tier/1', 'evilcraft:exalted_crafter')

    //Exalted Crafter Powered
    catalyst.add('c:exaltedcrafter/tier/2', 'evilcraft:exalted_crafter_wooden_empowered')
    catalyst.add('c:exaltedcrafter/tier/2', 'evilcraft:exalted_crafter_empowered')

    //Rubber Tag
    catalyst.add('c:rubber', 'industrialforegoing:dryrubber')

    //Plastic tag
    catalyst.add('c:plastics', 'pneumaticcraft:plastic')
    catalyst.add('c:plates/plastic', 'pneumaticcraft:plastic')

    //Eternal Ores
    catalyst.add('c:dusts/plutonium', 'eternalores:plutonium_dust')
    catalyst.add('c:pellets/plutonium', 'eternalores:plutonium_ingot')

    //Oritech 
    catalyst.remove('c:ingots/steel', 'oritech:biosteel_ingot')
    catalyst.add('c:ingots/plutonium', 'oritech:plutonium_pellet')
    catalyst.add('c:dusts/plutonium', 'oritech:plutonium_dust')
    catalyst.add('c:nuggets/plutonium', 'oritech:small_plutonium_pellet')
    catalyst.add('c:ingots/uranium', 'oritech:uranium_pellet')
    catalyst.add('c:nuggets/uranium', 'oritech:small_uranium_pellet')

    //Mekanism
    catalyst.add('c:ingots/plutonium', 'mekanism:pellet_plutonium')
    catalyst.add('c:ingots', 'mekanism:pellet_plutonium')

    //Fix for Boon of Earth enchant dropping non generated ores
    catalyst.remove('c:ores_in_ground/stone', 'mekanism:fluorite_ore')
    catalyst.remove('c:ores_in_ground/stone', 'mekanism:osmium_ore')
    catalyst.remove('c:ores_in_ground/stone', 'mekanism:tin_ore')
    catalyst.remove('c:ores_in_ground/stone', 'mekanism:uranium_ore')
    catalyst.remove('c:ores_in_ground/stone', 'mekanism:lead_ore')
    catalyst.remove('c:ores_in_ground/stone', 'immersiveengineering:ore_lead')
    catalyst.remove('c:ores_in_ground/stone', 'immersiveengineering:ore_aluminum')
    catalyst.remove('c:ores_in_ground/stone', 'immersiveengineering:ore_silver')
    catalyst.remove('c:ores_in_ground/stone', 'immersiveengineering:ore_uranium')
    catalyst.remove('c:ores_in_ground/stone', 'railcraft:lead_ore')
    catalyst.remove('c:ores_in_ground/stone', 'railcraft:nickel_ore')
    catalyst.remove('c:ores_in_ground/stone', 'railcraft:sulfur_ore')
    catalyst.remove('c:ores_in_ground/stone', 'railcraft:silver_ore')
    catalyst.remove('c:ores_in_ground/stone', 'railcraft:tin_ore')
    catalyst.remove('c:ores_in_ground/stone', 'railcraft:zinc_ore')
    catalyst.remove('c:ores_in_ground/stone', 'xycraft:aluminum_ore_stone')
    catalyst.remove('c:ores_in_ground/stone', 'energizedpower:tin_ore')
    catalyst.remove('c:ores_in_ground/stone', 'create:zinc_ore')
    catalyst.remove('c:ores_in_ground/stone', 'eternalores:plutonium_ore_block')

    let saptag = (saplings) => { catalyst.add('minecraft:saplings', saplings)}
    saptag('productivetrees:black_ember_sapling')
    saptag('productivetrees:brown_amber_sapling')
    saptag('productivetrees:cave_dweller_sapling')
    saptag('productivetrees:firecracker_sapling')
    saptag('productivetrees:flickering_sun_sapling')
    saptag('productivetrees:foggy_blast_sapling')
    saptag('productivetrees:night_fuchsia_sapling')
    saptag('productivetrees:purple_spiral_sapling')
    saptag('biomesoplenty:red_maple_sapling')
    saptag('productivetrees:rippling_willow_sapling')
    saptag('productivetrees:slimy_delight_sapling')
    saptag('productivetrees:soul_tree_sapling')
    saptag('productivetrees:sparkle_cherry_sapling')
    saptag('productivetrees:thunder_bolt_sapling')
    saptag('productivetrees:time_traveller_sapling')
    saptag('productivetrees:blue_yonder_sapling')
    saptag('productivetrees:water_wonder_sapling')
    

    function addSeedTags() {
        const dontPlantSeeds = [
            'flux', 'sculk', 'dire', 'insanium', 'supremium', 
            'imperium', 'tertium', 'prudentium', 'technology', 'cognizian'
        ];

        const seeds = [
            // Tier seeds
            'prudentium', 'tertium', 'imperium', 'supremium', 'insanium', 'cognizian',
            // Elemental seeds
            'darkness', 'mystical', 'magic', 'technology',
            // Normal seeds
            'salt', 'arcane', 'industrial', 'plastic', 'prosperity', 
            'xychorium', 'dark_gem', 'entro', 'flux', 'sculk', 'dire'
        ];

        dontPlantSeeds.forEach(seed => {
            catalyst.add('c:dont_plant', `mysticalagriculture:${seed}_seeds`);
        });

        seeds.forEach(seed => {
            catalyst.add('mysticalagriculture:seeds', `mysticalagriculture:${seed}_seeds`);
        });
    }
    addSeedTags();

})

//block tags
ServerEvents.tags('block', catalyst => {
    //Geore
        //lets Geore buds be acceled
        catalyst.add("c:budding", "#c:budding_blocks")
        //lets geore buds be moved
        const buds = catalyst.get("c:budding_blocks").getObjectIds();
        buds.forEach(bud => {
        catalyst.remove('c:relocation_not_supported', bud);
    });
    catalyst.removeAll('productivebees:untickable')

    //Fix for Boon of Earth enchant dropping non generated ores
    catalyst.remove('c:ores_in_ground/stone', 'mekanism:fluorite_ore')
    catalyst.remove('c:ores_in_ground/stone', 'mekanism:osmium_ore')
    catalyst.remove('c:ores_in_ground/stone', 'mekanism:tin_ore')
    catalyst.remove('c:ores_in_ground/stone', 'mekanism:uranium_ore')
    catalyst.remove('c:ores_in_ground/stone', 'mekanism:lead_ore')
    catalyst.remove('c:ores_in_ground/stone', 'immersiveengineering:ore_lead')
    catalyst.remove('c:ores_in_ground/stone', 'immersiveengineering:ore_aluminum')
    catalyst.remove('c:ores_in_ground/stone', 'immersiveengineering:ore_silver')
    catalyst.remove('c:ores_in_ground/stone', 'immersiveengineering:ore_uranium')
    catalyst.remove('c:ores_in_ground/stone', 'railcraft:lead_ore')
    catalyst.remove('c:ores_in_ground/stone', 'railcraft:nickel_ore')
    catalyst.remove('c:ores_in_ground/stone', 'railcraft:sulfur_ore')
    catalyst.remove('c:ores_in_ground/stone', 'railcraft:silver_ore')
    catalyst.remove('c:ores_in_ground/stone', 'railcraft:tin_ore')
    catalyst.remove('c:ores_in_ground/stone', 'railcraft:zinc_ore')
    catalyst.remove('c:ores_in_ground/stone', 'xycraft:aluminum_ore_stone')
    catalyst.remove('c:ores_in_ground/stone', 'energizedpower:tin_ore')
    catalyst.remove('c:ores_in_ground/stone', 'create:zinc_ore')
    catalyst.remove('c:ores_in_ground/stone', 'eternalores:plutonium_ore_block')
    }
)

/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
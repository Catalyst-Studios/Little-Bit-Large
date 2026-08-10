//priority: 21
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
    catalyst.add('c:plates/plastic', 'industrialforegoing:plastic')
    catalyst.add('c:plates/plastic', 'pneumaticcraft:plastic')

    //Eternal Ores
    catalyst.add('c:dusts/plutonium', 'eternalores:plutonium_dust')
    catalyst.add('c:pellets/plutonium', 'eternalores:plutonium_ingot')
    catalyst.add('c:ingots', 'modular_machinery_reborn:modularium')
    catalyst.add('c:ingots/modularium', 'modular_machinery_reborn:modularium')

    //Oritech 
    catalyst.remove('c:ingots/steel', 'oritech:biosteel_ingot')
    catalyst.add('c:ingots/plutonium', 'oritech:plutonium_pellet')
    catalyst.add('c:pellets/plutonium', 'oritech:plutonium_pellet')
    catalyst.add('c:dusts/plutonium', 'oritech:plutonium_dust')
    catalyst.add('c:nuggets/plutonium', 'oritech:small_plutonium_pellet')
    catalyst.add('c:ingots/uranium', 'oritech:uranium_pellet')
    catalyst.add('c:nuggets/uranium', 'oritech:small_uranium_pellet')
    catalyst.add('c:small_dusts/plutonium', 'oritech:small_plutonium_dust')
    catalyst.add('c:small_dusts/uranium', 'oritech:small_uranium_dust')
    catalyst.add('c:dust_blocks/uranium', 'oritech:uranium_dust_block')

    //Mekanism
    catalyst.add('c:ingots/plutonium', 'mekanism:pellet_plutonium')
    catalyst.add('c:ingots', 'mekanism:pellet_plutonium')

    catalyst.add('c:flours','pneumaticcraft:wheat_flour')
    catalyst.add('c:flours/wheat','pneumaticcraft:wheat_flour')
    catalyst.add('c:flours','enderio:flour')
    catalyst.add('c:flours/wheat','enderio:flour')

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

    let saptag = (saplings) => {
        catalyst.add('minecraft:saplings', saplings)
    }
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


    function addSeedTags()
    {
        global.recipesSeedToRemove.forEach(seedId => {
            const seedName = seedId.split(':')[1].replace('_seeds', '');
            const name = seedId + "_seeds"
            const essence = seedId + "_essence"
            if(global.dontPlantSeeds.includes(seedName))
            {
                catalyst.add('c:dont_plant', name);
            }

            catalyst.add('mysticalagriculture:seeds', name);
            catalyst.add('mysticalagriculture:essences', essence);
            catalyst.add('ae2:growth_acceleratable', name);
            catalyst.add('catalyst:seeds', name);
        });
    }
    addSeedTags();

    const tags = {
        goo_revive_tier_1:
        [
            'minecraft:sugar',
            'minecraft:rotten_flesh',
            'eternalores:catalyrium_dust'
        ],
        goo_revive_tier_2:
        [
            'minecraft:nether_wart',
            'minecraft:blaze_powder',
            'eternalores:catalyrium_dust'
        ],
        goo_revive_tier_3:
        [
            'minecraft:chorus_fruit',
            'minecraft:ender_pearl',
            'eternalores:catalyrium_dust'
        ],
        goo_revive_tier_4:
        [
            'minecraft:sculk',
            'minecraft:sculk_catalyst',
            'eternalores:catalyrium_dust'
        ]
    };
    
    for(let tagName in tags)
    {
        catalyst.add(tagName, tags[tagName]);
    }

    let _clusters = [
        "minecraft:amethyst_cluster",
        "geore:coal_cluster",
        "geore:copper_cluster",
        "geore:diamond_cluster",
        "geore:emerald_cluster",
        "geore:gold_cluster",
        "geore:iron_cluster",
        "geore:lapis_cluster",
        "geore:quartz_cluster",
        "geore:redstone_cluster",
        "geore:ancient_debris_cluster",
        "geore:ruby_cluster",
        "geore:sapphire_cluster",
        "geore:topaz_cluster",
        "geore:zinc_cluster",
        "geore:uraninite_cluster",
        "geore:black_quartz_cluster",
        "geore:monazite_cluster",
        "geore:aluminum_cluster",
        "geore:lead_cluster",
        "geore:nickel_cluster",
        "geore:osmium_cluster",
        "geore:platinum_cluster",
        "geore:silver_cluster",
        "geore:tin_cluster",
        "geore:tungsten_cluster",
        "geore:uranium_cluster",
        "eternalores:apatite_cluster",
        "eternalores:ardite_cluster",
        "eternalores:beryllium_cluster",
        "eternalores:catalyrium_cluster",
        "eternalores:cinnabar_cluster",
        "eternalores:cobalt_cluster",
        "eternalores:fluorite_cluster",
        "eternalores:gallium_cluster",
        "eternalores:garnet_cluster",
        "eternalores:iridium_cluster",
        "eternalores:jade_cluster",
        "eternalores:necroticarite_cluster",
        "eternalores:niter_cluster",
        "eternalores:obsidian_cluster",
        "eternalores:onyx_cluster",
        "eternalores:pearl_cluster",
        "eternalores:peridot_cluster",
        "eternalores:pyrolite_cluster",
        "eternalores:sculkite_cluster",
        "eternalores:tanzanite_cluster",
        "eternalores:titanium_cluster",
        "eternalores:ultimatitanium_cluster",
        "eternalores:zircon_cluster",
        "ae2:quartz_cluster",
        "pastel:topaz_cluster",
        "pastel:citrine_cluster",
        "pastel:onyx_cluster",
        "pastel:moonstone_cluster",
        "pastel:bismuth_cluster",
        "pastel:malachite_cluster",
        "pastel:azurite_cluster",
        "pastel:bloodstone_cluster",
        "pastel:coal_cluster",
        "pastel:copper_cluster",
        "pastel:iron_cluster",
        "pastel:gold_cluster",
        "pastel:lapis_cluster",
        "pastel:redstone_cluster",
        "pastel:diamond_cluster",
        "pastel:emerald_cluster",
        "pastel:prismarine_cluster",
        "pastel:quartz_cluster",
        "pastel:glowstone_cluster",
        "pastel:netherite_scrap_cluster",
        "pastel:echo_cluster",
        "pastel:fluix_cluster",
        "pastel:zinc_cluster",
        "biomesoplenty:rose_quartz_cluster",
        "extendedae:entro_cluster",
        "justdirethings:time_crystal_cluster"
    ];

    let _buddings = [
        "minecraft:budding_amethyst",
        "geore:budding_coal",
        "geore:budding_copper",
        "geore:budding_diamond",
        "geore:budding_emerald",
        "geore:budding_gold",
        "geore:budding_iron",
        "geore:budding_lapis",
        "geore:budding_quartz",
        "geore:budding_redstone",
        "geore:budding_ancient_debris",
        "geore:budding_ruby",
        "geore:budding_sapphire",
        "geore:budding_topaz",
        "geore:budding_zinc",
        "geore:budding_uraninite",
        "geore:budding_black_quartz",
        "geore:budding_monazite",
        "geore:budding_aluminum",
        "geore:budding_lead",
        "geore:budding_nickel",
        "geore:budding_osmium",
        "geore:budding_platinum",
        "geore:budding_silver",
        "geore:budding_tin",
        "geore:budding_tungsten",
        "geore:budding_uranium",
        "eternalores:budding_apatite",
        "eternalores:budding_ardite",
        "eternalores:budding_beryllium",
        "eternalores:budding_catalyrium",
        "eternalores:budding_cinnabar",
        "eternalores:budding_cobalt",
        "eternalores:budding_fluorite",
        "eternalores:budding_gallium",
        "eternalores:budding_garnet",
        "eternalores:budding_iridium",
        "eternalores:budding_jade",
        "eternalores:budding_necroticarite",
        "eternalores:budding_niter",
        "eternalores:budding_obsidian",
        "eternalores:budding_onyx",
        "eternalores:budding_pearl",
        "eternalores:budding_peridot",
        "eternalores:budding_pyrolite",
        "eternalores:budding_sculkite",
        "eternalores:budding_tanzanite",
        "eternalores:budding_titanium",
        "eternalores:budding_ultimatitanium",
        "eternalores:budding_zircon",
        "ae2:flawless_budding_quartz",
        "ae2:flawed_budding_quartz",
        "ae2:chipped_budding_quartz",
        "ae2:damaged_budding_quartz",
        "extendedae:entro_budding_fully",
        "extendedae:entro_budding_mostly",
        "extendedae:entro_budding_half",
        "extendedae:entro_budding_hardly",
        "pastel:budding_topaz",
        "pastel:budding_citrine",
        "pastel:budding_onyx",
        "pastel:budding_moonstone",
        "justdirethings:time_crystal_budding_block"
    ];

    let _storage = [
        "geore:coal_block",
        "geore:copper_block",
        "geore:diamond_block",
        "geore:emerald_block",
        "geore:gold_block",
        "geore:iron_block",
        "geore:lapis_block",
        "geore:quartz_block",
        "geore:redstone_block",
        "geore:ancient_debris_block",
        "geore:ruby_block",
        "geore:sapphire_block",
        "geore:topaz_block",
        "geore:zinc_block",
        "geore:uraninite_block",
        "geore:black_quartz_block",
        "geore:monazite_block",
        "geore:aluminum_block",
        "geore:lead_block",
        "geore:nickel_block",
        "geore:osmium_block",
        "geore:platinum_block",
        "geore:silver_block",
        "geore:tin_block",
        "geore:tungsten_block",
        "geore:uranium_block",
        "eternalores:apatite_geo_block",
        "eternalores:ardite_geo_block",
        "eternalores:beryllium_geo_block",
        "eternalores:catalyrium_geo_block",
        "eternalores:cinnabar_geo_block",
        "eternalores:cobalt_geo_block",
        "eternalores:fluorite_geo_block",
        "eternalores:gallium_geo_block",
        "eternalores:garnet_geo_block",
        "eternalores:iridium_geo_block",
        "eternalores:jade_geo_block",
        "eternalores:necroticarite_geo_block",
        "eternalores:niter_geo_block",
        "eternalores:obsidian_geo_block",
        "eternalores:onyx_geo_block",
        "eternalores:pearl_geo_block",
        "eternalores:peridot_geo_block",
        "eternalores:pyrolite_geo_block",
        "eternalores:sculkite_geo_block",
        "eternalores:tanzanite_geo_block",
        "eternalores:titanium_geo_block",
        "eternalores:ultimatitanium_geo_block",
        "eternalores:zircon_geo_block",
        "minecraft:amethyst_block",
        "pastel:topaz_block",
        "pastel:citrine_block",
        "pastel:onyx_block",
        "pastel:moonstone_block"
    ];

    _clusters.forEach(st => {
        catalyst.add("c:clusters", st)
        catalyst.add("catalyst:clusters", st)
    })

    _buddings.forEach(st => {
        catalyst.add("c:budding_blocks", st)
        catalyst.add("c:budding", st)
        catalyst.add('catalyst:budding_blocks', st)
    })

    _storage.forEach(st => {
        catalyst.add("geore:geore_blocks", st);
        catalyst.add("catalyst:budding_storages", st);
    })

    catalyst.add("productivebees:flowers/quarry", 'ae2:sky_dust')

    catalyst.add("catalyst:tiny_coal",'utilitarian:tiny_coal')
    catalyst.add("catalyst:tiny_coal",'actuallyadditions:tiny_coal')
    catalyst.add("catalyst:tiny_coal",'malum:coal_fragment')
    catalyst.add("catalyst:tiny_coal",'pickletweaks:coal_piece')

    catalyst.add("catalyst:tiny_charcoal",'malum:charcoal_fragment')
    catalyst.add("catalyst:tiny_charcoal",'utilitarian:tiny_charcoal')
    catalyst.add("catalyst:tiny_charcoal",'pickletweaks:charcoal_piece')
    catalyst.add("catalyst:tiny_charcoal",'actuallyadditions:tiny_charcoal')

    catalyst.add('c:bismuth', 'pastel:bismuth_crystal')

    console.log("[CatJS] Tags for Items has been added");

})
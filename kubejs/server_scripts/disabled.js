//priority: 100
/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/

ServerEvents.recipes(catalyst => {
    const recipesToRemove = [
        // Forcecraft
        'forcecraft:infuser/convert_time_torch',

        // AE2
        'ae2:network/blocks/spatial_anchor',
        { id: "extendedae:assembler/ex_pattern_provider" },
        { id: "extendedae:assembler/ex_interface" },
        { id: "expandedae:crafting/exp_pattern_provider_ext" },

        // Reliquary
        'reliquary:alkahestry_tome',

        // Energized Power
        'energizedpower:crafting/time_controller',
        'energizedpower:crafting/weather_controller',

        // Mekanism
        'mekanism:dimensional_stabilizer',
        'mekanism:upgrade_anchor',
        {id: "eternalores:compat/mekanism/crusher/dusts/obsidian_var"},
        {id: "mekanism:crushing/obsidian_to_dust"},

        // QuarryPlus
        'quarryplus:adv_quarry',
        'quarryplus:quarry',
        'quarryplus:remove_bedrock_module',

        // Industrial Foregoing
        'industrialforegoing:infinity_nuke',

        // Productive Bees
        { id: 'productivebees:evilcraft/bloody_bee_2' },
        { id: 'productivebees:tconstruct/cobalt_bee_no_tinker'},
        { id: 'productivebees:/centrifuge/honeycomb_fosilised_block'},
        { id: 'productivebees:/centrifuge/honeycomb_fosilised_block'},
        { id: 'productivebees:/centrifuge/materials/honeycomb_silicon'},
        { id: 'productivebees:/centrifuge/reactors/honeycomb_graphite'},

        // Advanced Peripherals
        { output: 'advancedperipherals:chunk_controller'},

        // ComputerCraft
        { id: 'computercraft:upgrade_3' },
        { id: 'computercraft:upgrade_5' },

        // Blood magic
        {id: 'evilcraft:crafting/spirit_furnace'},
        {id: 'evilcraft:crafting/colossal_blood_chest'},

        // Mystical Agriculture
        {output: 'mysticalagradditions:insanium_apple'},
        {output: 'mysticalagradditions:insanium_ingot'},
        {output: 'mysticalagradditions:insanium_block'},
        {output: 'mysticalagradditions:insanium_gemstone'},
        {output: 'mysticalagradditions:insanium_farmland'},
        {output: 'mysticalagradditions:insanium_essence'},
        {output: 'mysticalagradditions:insanium_nugget'},
        {type: 'mysticalagriculture:infusion', output: 'productivebees:spawn_egg_configurable_bee'},
        {type: 'mysticalagriculture:awakening', output: 'productivebees:spawn_egg_configurable_bee'},
        {output: 'mysticalagriculture:sculk_seeds'}, //MA one
        {input: 'mysticalagriculture:sculk_essence'},
        {id: 'mysticalagriculture:essence/minecraft/netherite_ingot'},

        // Oritech
        'oritech:crafting/iron',
        'oritech:crafting/nickel',
        'oritech:crafting/copper',
        'oritech:crafting/alloy/adamant',
        'oritech:crafting/addon/steamboileralt',
        'oritech:crafting/alloy/steel',
        'oritech:crafting/assembleralt',
        'oritech:crafting/electricfurnacealt',
        'oritech:crafting/pulverizer',
        {id: "oritech:foundry/alloy/electrum"},
        {id: "oritech:compact/energizedpower/alloyfurance/oritech_electrum"},
        {id: "oritech:crafting/alloy/electrum"},
        {id: "oritech:silicon_from_smelting_raw_silicon"},
        

        //mmr
        {output: 'modular_machinery_reborn:modularium'},
        {output: "modular_machinery_reborn:outputbus_tiny"},
        {output: "modular_machinery_reborn:inputbus_tiny"},
        {output: "modular_machinery_reborn:outputbus_small"},
        {output: "modular_machinery_reborn:inputbus_small"},
        {output: 'modular_machinery_reborn:fluidinputhatch_tiny'},
        {output: 'modular_machinery_reborn:fluidoutputhatch_tiny'},
        {output: 'modular_machinery_reborn:fluidinputhatch_small'},
        {output: 'modular_machinery_reborn:fluidoutputhatch_small'},
        {output: 'modular_machinery_reborn:energyinputhatch_tiny'},
        {output: 'modular_machinery_reborn:energyoutputhatch_tiny'},
        {output: 'modular_machinery_reborn:energyinputhatch_small'},
        {output: 'modular_machinery_reborn:energyoutputhatch_small'},

        //direthings
        'justdirethings:celestigem_paxel',
        'justdirethings:eclipsealloy_paxel',

        //ironfurnaces
        { id: 'ironfurnaces:upgrades/upgrade_vibranium' },
        { id: 'ironfurnaces:upgrades/upgrade_unobtainium' },

        //create
        { id: 'create:crafting/tree_fertilizer' },
        { output: "create:extendo_grip" },
        { output: "create:wand_of_symmetry" },
        { output: "create:rotation_speed_controller" },//Nuggets to iron ingots basically and sheets
        { output: "create_new_age:basic_motor" },
        { output: "create_new_age:advanced_motor" },
        "create:haunting/lapis_recycling",
        { output: "create:item_vault" },
        { output: 'create:precision_mechanism' },
        "create:crafting/materials/andesite_alloy",
        "create:crafting/materials/andesite_alloy_from_zinc",

        {id: "create:mixing/andesite_alloy_from_zinc"},
        {id: "create:mixing/andesite_alloy"},

        //Railcraft
        "railcraft:world_spike",
        'railcraft:personal_world_spike',
        {id: "railcraft:brass_ingot_crafted_with_ingots"},
        {id: "railcraft:bronze_ingot_crafted_with_ingots"},
        {id: "railcraft:invar_ingot_crafted_with_ingots"},

        //solar powah
        { output: "solargeneration:solar_panel_leadstone" },
        { output: "energizedpower:solar_panel_1" },
        { output: "solargeneration:solar_panel_hardened" },
        { output: "energizedpower:solar_panel_2" },
        { output: "solargeneration:solar_panel_redstone" },
        { output: "energizedpower:solar_panel_3" },
        { output: "solargeneration:solar_panel_signalum" },
        { output: "energizedpower:solar_panel_4" },
        { output: "solargeneration:solar_panel_resonant" },
        { output: "energizedpower:solar_panel_5" },
        { output: "solargeneration:solar_panel_advanced" },
        { output: "energizedpower:solar_panel_6" },
        { output: "solargeneration:solar_panel_ultimate" },
        { id: "energizedpower:crafting/solar_panel_7" }, 
        { output: 'powah:photoelectric_pane' },
        {id: "energizedpower:crafting/press_mold_maker"},
        {id: "energizedpower:crafting/copper_plate"},
        {id: "energizedpower:crafting/gold_plate"},
        {id: "energizedpower:crafting/iron_plate"},
        {id: "energizedpower:crafting/tin_plate"},

        //IE
        {id: "immersiveengineering:crafting/stick_aluminum"},
        {id: "immersiveengineering:crafting/stick_iron"},
        {id: "immersiveengineering:crafting/stick_netherite"},
        {id: "immersiveengineering:crafting/stick_steel"},
        {id: "immersiveengineering:crafting/plate_aluminum_hammering"},
        {id: "immersiveengineering:crafting/plate_constantan_hammering"},
        {id: "immersiveengineering:crafting/plate_copper_hammering"},
        {id: "immersiveengineering:crafting/plate_electrum_hammering"},
        {id: "immersiveengineering:crafting/plate_gold_hammering"},
        {id: "immersiveengineering:crafting/plate_iron_hammering"},
        {id: "immersiveengineering:crafting/plate_lead_hammering"},
        {id: "immersiveengineering:crafting/plate_nickel_hammering"},
        {id: "immersiveengineering:crafting/plate_silver_hammering"},
        {id: "immersiveengineering:crafting/plate_steel_hammering"},
        {id: "immersiveengineering:crafting/plate_uranium_hammering"},

        //More red
        {id: "morered:red_alloy_ingot"},

        //pneumaticcraft
        {id: "appliedpneumatics:amadron/singularity_to_emerald"},
        {id: "appliedpneumatics:amadron/fluix_crystal_to_emerald"},
        {id: "appliedpneumatics:amadron/certus_quartz_crystal_to_emerald"},

        //Xycraft
        {id: "xycraft_machines:compat/mek/processing/aluminum/slurry/dirty/from_raw_ore"},
        {id: "xycraft_machines:compat/mek/processing/aluminum/slurry/dirty/from_raw_block"},
        {id: "xycraft_machines:compat/mek/processing/aluminum/slurry/dirty/from_ore"},
        {id: "xycraft_machines:compat/mek/processing/aluminum/slurry/clean"},

        //rs refined storage
        {id: "refinedstorage:silicon"},

        //powah
        {id: "eternalores:compat/powah/energizing_orb/item/uraninite_ore"}, 
        {id: "mysticalagradditions:essence/nitro_crystal"}

    ]

    recipesToRemove.forEach(recipe => {
        try
        {
            catalyst.remove(recipe);
        }
        catch(error)
        {
            console.warn("[CatJS] Error while removing recipe: ", recipe)
            console.log(error);
        } 
    });

    global.recipesSeedToRemove.forEach(seed => {
        try
        {
            catalyst.remove({ output: `${seed}_seeds` });
        }
        catch(error)
        {
            console.warn("[CatJS] Error while removing recipe: ", seed)
            console.log(error);
        } 
    })


    console.log("[CatJS] Recipes removed");
});

/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/

/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/

let $BeeProvider = Java.loadClass("cy.jdkdigital.productivebees.setup.BeeReloadListener");
let IOType = Java.loadClass("es.degrassi.mmreborn.common.machine.IOType");
let $Integer = Java.loadClass("java.lang.Integer");
let $String = Java.loadClass("java.lang.String");

const allBees = [

    ["dye", 1, "minecraft:red_dye"],
    ["lumber", 1, "minecraft:oak_log"],
    ["quarry", 1, "minecraft:stone"],
    ["rancher", 1, "minecraft:lead"],
    ["collector", 1, "minecraft:hopper"],
    ["hoarder", 1, "minecraft:shulker_shell"],
    ["farmer", 1, "minecraft:diamond_hoe"],
    ["creeper", 1, "minecraft:tnt"],
    ["cupid", 1, "minecraft:wheat"],
    ["blue_banded", 1, "minecraft:cherry_log"],
    ["green_carpenter", 1, "minecraft:mangrove_log"],
    ["yellow_black_carpenter", 1, "minecraft:moss_block"],
    ["chocolate_mining", 1, "minecraft:cocoa_beans"],
    ["digger", 1, "minecraft:gravel"],
    ["leafcutter", 1, "minecraft:dirt"],
    ["mason", 1, "minecraft:sugar_cane"],
    ["reed", 1, "minecraft:water_bucket"],
    ["resin", 1, "minecraft:spruce_log"],
    ["ashy_mining", 1, "minecraft:sand"],
    ["neon_cuckoo", 1, "minecraft:cyan_dye"],
    ["nomad", 1, "minecraft:yellow_dye"],
    ["sweat", 1, "minecraft:snowball"],
    ["bumble", 1, "minecraft:grass_block"],
    
    ["amber", 2, "minecraft:honey_block"],
    ["coal", 2, "minecraft:coal_block"],
    ["draconic", 2, "minecraft:dragon_egg"],
    ["ender", 2, "minecraft:chorus_flower"],
    ["experience", 2, "minecraft:bookshelf"],
    ["frosty", 2, "minecraft:snow_block"],
    ["ghostly", 2, "minecraft:soul_sand"],
    ["magmatic", 2, "minecraft:magma_block"],
    ["obsidian", 2, "minecraft:obsidian"],
    ["pepto_bismol", 2, "minecraft:golden_apple"],
    ["prismarine", 2, "minecraft:prismarine"],
    ["sculk", 2, "minecraft:sculk_shrieker"],
    ["silky", 2, "minecraft:cobweb"],
    ["skeletal", 2, "minecraft:bone_block"],
    ["slimy", 2, "minecraft:slime_block"],
    ["sponge", 2, "minecraft:sponge"],
    ["sugarbag", 2, "minecraft:sugar_cane"],
    ["sussy", 2, "minecraft:suspicious_sand"],
    ["wanna", 2, "productivebees:amber"],
    ["withered", 2, "minecraft:nether_star"],
    ["zombie", 2, "minecraft:rotten_flesh"],
    ["breeze", 2, "minecraft:heavy_core"],
    ["ribbeet", 2, "minecraft:magma_cream"],
    ["lava", 2, "minecraft:lava_bucket"],
    ["actuallyadditions\/black_quartz", 2, "actuallyadditions:black_quartz_block"],
    ["ad_astra\/calorite", 2, "ad_astra:calorite"],
    ["ad_astra\/cheese", 2, "ad_astra:cheese_block"],
    ["ad_astra\/desh", 2, "ad_astra:desh"],
    ["ad_astra\/ostrum", 2, "ad_astra:ostrum"],
    ["ae2\/fluix", 2, "ae2:fluix_block"],
    ["ae2\/silicon", 2, "extendedae:silicon_block"],
    ["ae2\/sky_steel", 2, "megacells:sky_steel_block"],
    ["ae2\/spacial", 2, "ae2:quartz_block"],
    ["ae2\/entro", 2, "extendedae:entro_block"],
    ["ae2\/redstone_crystal", 2, "appflux:charged_redstone_block"],
    ["ae2\/sky_bronze", 2, "megacells:sky_bronze_block"],
    ["ae2\/sky_osmium", 2, "megacells:sky_osmium_block"],
    ["brass", 2, "eternalores:brass_block"],
    ["bronze", 2, "eternalores:bronze_block"],
    ["constantan", 2, "eternalores:constantan_block"],
    ["electrum", 2, "eternalores:electrum_block"],
    ["enderium", 2, "eternalores:enderium_block"],
    ["invar", 2, "eternalores:invar_block"],
    ["lumium", 2, "eternalores:lumium_block"],
    ["signalum", 2, "eternalores:signalum_block"],
    ["steel", 2, "eternalores:steel_block"],
    ["ars_nouveau\/arcane", 2, "ars_nouveau:source_gem_block"],
    ["ars_nouveau\/air_essence", 2, "ars_nouveau:air_essence"],
    ["ars_nouveau\/earth_essence", 2, "ars_nouveau:earth_essence"],
    ["ars_nouveau\/fire_essence", 2, "ars_nouveau:fire_essence"],
    ["ars_nouveau\/water_essence", 2, "ars_nouveau:water_essence"],
    ["aquaculture\/neptunium", 2, "aquaculture:neptunium_block"],
    ["astralsorcery\/rock_crystal", 2, "minecraft:stone"],
    ["astralsorcery\/starmetal", 2, "astralsorcery:starmetal"],
    ["bloodmagic\/hellfire", 2, "bloodmagic:dungeon_metal"],
    ["botania\/elementium", 2, "botania:elementium"],
    ["botania\/mana", 2, "botania:gaia_pylon"],
    ["botania\/manasteel", 2, "botania:manasteel"],
    ["botania\/pure", 2, "minecraft:dirt"],
    ["botania\/terrasteel", 2, "botania:terrasteel"],
    ["botanicadds\/gaiasteel", 2, "botanicadds:gaiasteel_block"],
    ["byg\/emeraldite", 2, "byg:emeraldite_ore"],
    ["byg\/pendorite", 2, "byg:pendorite_block"],
    ["chemlib\/actinium", 2, "chemlib:actinium_metal_block"],
    ["chemlib\/americium", 2, "chemlib:americium"],
    ["chemlib\/antimony", 2, "chemlib:antimony"],
    ["chemlib\/argon", 2, "chemlib:argon_fluid"],
    ["chemlib\/arsenic", 2, "chemlib:arsenic"],
    ["chemlib\/astatine", 2, "chemlib:astatine"],
    ["chemlib\/barium", 2, "chemlib:barium_metal_block"],
    ["chemlib\/berkelium", 2, "chemlib:berkelium"],
    ["chemlib\/bohrium", 2, "chemlib:bohrium"],
    ["chemlib\/boron", 2, "chemlib:boron"],
    ["chemlib\/bromine", 2, "chemlib:bromine_fluid"],
    ["chemlib\/cadmium", 2, "chemlib:cadmium_metal_block"],
    ["chemlib\/calcium", 2, "chemlib:calcium_metal_block"],
    ["chemlib\/californium", 2, "chemlib:californium"],
    ["chemlib\/cerium", 2, "chemlib:cerium_metal_block"],
    ["chemlib\/cesium", 2, "chemlib:cesium_metal_block"],
    ["chemlib\/chlorine", 2, "chemlib:chlorine_fluid"],
    ["chemlib\/copernicium", 2, "chemlib:copernicium"],
    ["chemlib\/curium", 2, "chemlib:curium"],
    ["chemlib\/darmstadtium", 2, "chemlib:darmstadtium"],
    ["chemlib\/dubnium", 2, "chemlib:dubnium"],
    ["chemlib\/dysprosium", 2, "chemlib:dysprosium_metal_block"],
    ["chemlib\/einsteinium", 2, "chemlib:einsteinium"],
    ["chemlib\/erbium", 2, "chemlib:erbium_metal_block"],
    ["chemlib\/europium", 2, "chemlib:europium_metal_block"],
    ["chemlib\/fermium", 2, "chemlib:fermium"],
    ["chemlib\/flerovium", 2, "chemlib:flerovium"],
    ["chemlib\/fluorine", 2, "chemlib:fluorine_fluid"],
    ["chemlib\/francium", 2, "chemlib:francium_metal_block"],
    ["chemlib\/gadolinium", 2, "chemlib:gadolinium_metal_block"],
    ["chemlib\/gallium", 2, "chemlib:gallium_metal_block"],
    ["chemlib\/germanium", 2, "chemlib:germanium"],
    ["chemlib\/hafnium", 2, "chemlib:hafnium_metal_block"],
    ["chemlib\/hassium", 2, "chemlib:hassium"],
    ["chemlib\/helium", 2, "chemlib:helium_fluid"],
    ["chemlib\/holmium", 2, "chemlib:holmium_metal_block"],
    ["chemlib\/hydrogen", 2, "chemlib:hydrogen_fluid"],
    ["chemlib\/indium", 2, "chemlib:indium_metal_block"],
    ["chemlib\/iodine", 2, "chemlib:iodine"],
    ["chemlib\/krypton", 2, "chemlib:krypton_fluid"],
    ["chemlib\/lanthanum", 2, "chemlib:lanthanum_metal_block"],
    ["chemlib\/lawrencium", 2, "chemlib:lawrencium"],
    ["chemlib\/lithium", 2, "chemlib:lithium_metal_block"],
    ["chemlib\/livermorium", 2, "chemlib:livermorium"],
    ["chemlib\/lutetium", 2, "chemlib:lutetium_metal_block"],
    ["chemlib\/magnesium", 2, "chemlib:magnesium_metal_block"],
    ["chemlib\/meitnerium", 2, "chemlib:meitnerium"],
    ["chemlib\/mendelevium", 2, "chemlib:mendelevium"],
    ["chemlib\/mercury", 2, "chemlib:mercury_fluid"],
    ["chemlib\/molybdenum", 2, "chemlib:molybdenum_metal_block"],
    ["chemlib\/moscovium", 2, "chemlib:moscovium"],
    ["chemlib\/neodymium", 2, "chemlib:neodymium_metal_block"],
    ["chemlib\/neon", 2, "chemlib:neon_fluid"],
    ["chemlib\/neptunium", 2, "chemlib:neptunium"],
    ["chemlib\/nihonium", 2, "chemlib:nihonium"],
    ["chemlib\/niobium", 2, "chemlib:niobium_metal_block"],
    ["chemlib\/nitrogen", 2, "chemlib:nitrogen_fluid"],
    ["chemlib\/nobelium", 2, "chemlib:nobelium"],
    ["chemlib\/oganesson", 2, "chemlib:oganesson"],
    ["chemlib\/oxygen", 2, "chemlib:oxygen_fluid"],
    ["chemlib\/palladium", 2, "chemlib:palladium_metal_block"],
    ["chemlib\/phosphorus", 2, "chemlib:phosphorus"],
    ["chemlib\/plutonium", 2, "chemlib:plutonium"],
    ["chemlib\/polonium", 2, "chemlib:polonium_metal_block"],
    ["chemlib\/potassium", 2, "chemlib:potassium_metal_block"],
    ["chemlib\/praseodymium", 2, "chemlib:praseodymium_metal_block"],
    ["chemlib\/promethium", 2, "chemlib:promethium"],
    ["chemlib\/protactinium", 2, "chemlib:protactinium_metal_block"],
    ["chemlib\/radium", 2, "chemlib:radium_metal_block"],
    ["chemlib\/radon", 2, "chemlib:radon_fluid"],
    ["chemlib\/rhenium", 2, "chemlib:rhenium_metal_block"],
    ["chemlib\/rhodium", 2, "chemlib:rhodium_metal_block"],
    ["chemlib\/roentgenium", 2, "chemlib:roentgenium"],
    ["chemlib\/rubidium", 2, "chemlib:rubidium_metal_block"],
    ["chemlib\/ruthenium", 2, "chemlib:ruthenium_metal_block"],
    ["chemlib\/rutherfordium", 2, "chemlib:rutherfordium"],
    ["chemlib\/samarium", 2, "chemlib:samarium_metal_block"],
    ["chemlib\/scandium", 2, "chemlib:scandium_metal_block"],
    ["chemlib\/seaborgium", 2, "chemlib:seaborgium"],
    ["chemlib\/selenium", 2, "chemlib:selenium"],
    ["chemlib\/silicium", 2, "chemlib:silicon"],
    ["chemlib\/sodium", 2, "chemlib:sodium_metal_block"],
    ["chemlib\/strontium", 2, "chemlib:strontium_metal_block"],
    ["chemlib\/tantalum", 2, "chemlib:tantalum_metal_block"],
    ["chemlib\/technetium", 2, "chemlib:technetium"],
    ["chemlib\/tellurium", 2, "chemlib:tellurium"],
    ["chemlib\/tennessine", 2, "chemlib:tennessine"],
    ["chemlib\/terbium", 2, "chemlib:terbium_metal_block"],
    ["chemlib\/thallium", 2, "chemlib:thallium_metal_block"],
    ["chemlib\/thorium", 2, "chemlib:thorium_metal_block"],
    ["chemlib\/thulium", 2, "chemlib:thulium_metal_block"],
    ["chemlib\/vanadium", 2, "chemlib:vanadium_metal_block"],
    ["chemlib\/xenon", 2, "chemlib:xenon_fluid"],
    ["chemlib\/ytterbium", 2, "chemlib:ytterbium_metal_block"],
    ["chemlib\/yttrium", 2, "chemlib:yttrium_metal_block"],
    ["chemlib\/zirconium", 2, "chemlib:zirconium_metal_block"],
    ["create_enchantment_industry\/super_experience", 2, "create_enchantment_industry:super_experience_block"],
    ["draconicevolution\/awakened", 2, "draconicevolution:draconium_awakened"],
    ["draconicevolution\/chaos", 2, "draconicevolution:chaos_shard"],
    ["draconicevolution\/draconium", 2, "draconicevolution:draconium"],
    ["blazing", 2, "minecraft:blaze_rod"],
    ["glowing", 2, "minecraft:glowstone"],
    ["niter", 2, "eternalores:niter_block"],
    ["redstone", 2, "minecraft:redstone_block"],
    ["salty", 2, "mekanism:salt"],
    ["sulfur", 2, "eternalores:sulfur"],
    ["eidolon\/arcane_gold", 2, "eidolon:arcane_gold_block"],
    ["eidolon\/pewter", 2, "eidolon:pewter_block"],
    ["eidolon\/soul_shard", 2, "eidolon:shadow_gem_block"],
    ["elementalcraft\/air_crystal", 2, "elementalcraft:aircrystal_block"],
    ["elementalcraft\/drenched_iron", 2, "elementalcraft:drenched_iron"],
    ["elementalcraft\/earth_crystal", 2, "elementalcraft:earthcrystal_block"],
    ["elementalcraft\/fire_crystal", 2, "elementalcraft:firecrystal_block"],
    ["elementalcraft\/fireite", 2, "elementalcraft:fireite"],
    ["elementalcraft\/inert_crystal", 2, "elementalcraft:inertcrystal_block"],
    ["elementalcraft\/pure_crystal", 2, "elementalcraft:purerock"],
    ["elementalcraft\/springaline", 2, "elementalcraft:springaline_block"],
    ["elementalcraft\/swift_alloy", 2, "elementalcraft:swift_alloy"],
    ["elementalcraft\/water_crystal", 2, "elementalcraft:watercrystal_block"],
    ["enderio\/conductive_alloy", 2, "enderio:conductive_alloy_block"],
    ["enderio\/copper_alloy", 2, "enderio:copper_alloy_block"],
    ["enderio\/dark_steel", 2, "enderio:dark_steel_block"],
    ["enderio\/end_steel", 2, "enderio:end_steel_block"],
    ["enderio\/energetic_alloy", 2, "enderio:energetic_alloy_block"],
    ["enderio\/infinity", 2, "enderio:reinforced_obsidian_block"],
    ["enderio\/pulsating_alloy", 2, "enderio:pulsating_alloy_block"],
    ["enderio\/redstone_alloy", 2, "enderio:redstone_alloy_block"],
    ["enderio\/soularium", 2, "enderio:soularium_block"],
    ["enderio\/vibrant_alloy", 2, "enderio:vibrant_alloy_block"],
    ["enigmaticlegacy\/astral", 2, "enigmaticlegacy:astral_block"],
    ["enigmaticlegacy\/etherium_ore", 2, "enigmaticlegacy:etherium_block"],
    ["evilcraft\/bloody", 2, "evilcraft:hardened_blood"],
    ["evilcraft\/dark_gem", 2, "evilcraft:dark_block"],
    ["feywild\/fey", 2, "feywildfey_gem"],
    ["chocolate", 2, "create:bar_of_chocolate"],
    ["oily", 2, "pneumaticcraft:oil_bucket"],
    ["tea", 2, "minecraft:oak_leaves"],
    ["water", 2, "cookingforblockheads:sink"],
    ["fluxnetworks\/flux", 2, "fluxnetworks:flux_block"],
    ["forbidden_arcanus\/arcane_crystal", 2, "forbidden_arcanus:arcane_crystal_block"],
    ["forbidden_arcanus\/deorum", 2, "forbidden_arcanus:deorum_block"],
    ["forbidden_arcanus\/rune", 2, "forbidden_arcanus:rune_block"],
    ["forbidden_arcanus\/stellarite", 2, "forbidden_arcanus:stellarite_block"],
    ["agate", 2, "eternalores:agate_block"],
    ["alexandrite", 2, "eternalores:alexandrite_block"],
    ["amber_gem", 2, "eternalores:amber_block"],
    ["amethyst", 2, "minecraft:amethyst_block"],
    ["ametrine", 2, "eternalores:ametrine_block"],
    ["ammolite", 2, "eternalores:ammolite_block"],
    ["apatite", 2, "eternalores:apatite_block"],
    ["aquamarine", 2, "eternalores:aquamarine_block"],
    ["benitoite", 2, "eternalores:benitoite_block"],
    ["black_diamond", 2, "eternalores:black_diamond_block"],
    ["black_opal", 2, "eternalores:black_opal_block"],
    ["carnelian", 2, "eternalores:carnelian_block"],
    ["cats_eye", 2, "eternalores:cats_eye_block"],
    ["chrysoprase", 2, "eternalores:chrysoprase_block"],
    ["cinnabar", 2, "eternalores:cinnabar_block"],
    ["citrine", 2, "eternalores:citrine_block"],
    ["coral", 2, "eternalores:coral_block"],
    ["phil", 2, "minecraft:white_concrete"],
    ["allergy", 2, "minecraft:spruce_leaves"],
    ["crystalline", 2, "minecraft:quartz_block"],
    ["diamond", 2, "minecraft:diamond_block"],
    ["emerald", 2, "minecraft:emerald_block"],
    ["euclase", 2, "eternalores:euclase_block"],
    ["fluorite", 2, "eternalores:fluorite_block"],
    ["garnet", 2, "eternalores:garnet_block"],
    ["green_sapphire", 2, "eternalores:green_sapphire_block"],
    ["heliodor", 2, "eternalores:heliodor_block"],
    ["iolite", 2, "eternalores:iolite_block"],
    ["jade", 2, "eternalores:jade_block"],
    ["jasper", 2, "eternalores:jasper_block"],
    ["kunzite", 2, "eternalores:kunzite_block"],
    ["kyanite", 2, "eternalores:kyanite_block"],
    ["lapis", 2, "minecraft:lapis_block"],
    ["lepidolite", 2, "eternalores:lepidolite_block"],
    ["malachite", 2, "eternalores:malachite_block"],
    ["moldavite", 2, "eternalores:moldavite_block"],
    ["moonstone", 2, "eternalores:moonstone_block"],
    ["morganite", 2, "eternalores:morganite_block"],
    ["onyx", 2, "eternalores:onyx_block"],
    ["opal", 2, "eternalores:opal_block"],
    ["pearl", 2, "eternalores:pearl_block"],
    ["peridot", 2, "eternalores:peridot_block"],
    ["phosphophyllite", 2, "eternalores:phosphophyllite_block"],
    ["pyrope", 2, "eternalores:pyrope_block"],
    ["rose_quartz", 2, "create:rose_quartz_block"],
    ["ruby", 2, "eternalores:ruby_block"],
    ["sapphire", 2, "eternalores:sapphire_block"],
    ["sodalite", 2, "eternalores:sodalite_block"],
    ["spinel", 2, "eternalores:spinel_block"],
    ["sunstone", 2, "eternalores:sunstone_block"],
    ["tanzanite", 2, "eternalores:tanzanite_block"],
    ["tektite", 2, "eternalores:tektite_block"],
    ["topaz", 2, "eternalores:topaz_block"],
    ["tourmaline", 2, "eternalores:tourmaline_block"],
    ["turquoise", 2, "eternalores:turquoise_block"],
    ["white_diamond", 2, "eternalores:white_diamond_block"],
    ["zircon", 2, "eternalores:zircon_block"],
    ["gobber\/end_gobber", 2, "gobber2:gobber2_block_end"],
    ["gobber\/gobber", 2, "gobber2:gobber2_block"],
    ["gobber\/nether_gobber", 2, "gobber2:gobber2_block_nether"],
    ["gtceu\/barite", 2, "gtceu:raw_barite_block"],
    ["gtceu\/bastnasite", 2, "gtceu:raw_bastnasite_block"],
    ["gtceu\/bauxite", 2, "gtceu:raw_bauxite_block"],
    ["gtceu\/chromite", 2, "gtceu:raw_chromite_block"],
    ["gtceu\/cobaltite", 2, "gtceu:raw_cobaltite_block"],
    ["gtceu\/electrotine", 2, "gtceu:raw_electrotine_block"],
    ["gtceu\/galena", 2, "gtceu:raw_galena_block"],
    ["gtceu\/graphite", 2, "gtceu:raw_graphite_block"],
    ["gtceu\/ilmenite", 2, "gtceu:raw_ilmenite_block"],
    ["gtceu\/lepidolite", 2, "gtceu:raw_lepidolite_block"],
    ["gtceu\/molybdenum", 2, "gtceu:molybdenum_block"],
    ["gtceu\/naquadah", 2, "gtceu:naquadah_block"],
    ["gtceu\/neodymium", 2, "gtceu:neodymium_block"],
    ["gtceu\/neutronium", 2, "gtceu:neutronium_block"],
    ["gtceu\/oilsands", 2, "gtceu:raw_oilsands_block"],
    ["gtceu\/palladium", 2, "gtceu:palladium_block"],
    ["gtceu\/pyrochlore", 2, "gtceu:raw_pyrochlore_block"],
    ["gtceu\/pyrolusite", 2, "gtceu:raw_pyrolusite_block"],
    ["gtceu\/realgar", 2, "gtceu:realgar_block"],
    ["gtceu\/scheelite", 2, "gtceu:raw_scheelite_block"],
    ["gtceu\/sheldonite", 2, "gtceu:raw_cooperite_block"],
    ["gtceu\/sphalerite", 2, "gtceu:raw_sphalerite_block"],
    ["gtceu\/stibnite", 2, "gtceu:raw_stibnite_block"],
    ["gtceu\/tantalite", 2, "gtceu:raw_tantalite_block"],
    ["gtceu\/tetrahedrite", 2, "gtceu:raw_tetrahedrite_block"],
    ["gtceu\/tricalcium_phosphate", 2, "gtceu:raw_tricalcium_phosphate_block"],
    ["gtceu\/tungstate", 2, "gtceu:raw_tungstate_block"],
    ["gtceu\/vanadium_magnetite", 2, "gtceu:raw_vanadium_magnetite_block"],
    ["iceandfire\/fire_dragonsteel", 2, "iceandfire:dragonsteel_fire_block"],
    ["iceandfire\/ice_dragonsteel", 2, "iceandfire:dragonsteel_ice_block"],
    ["iceandfire\/lightning_dragonsteel", 2, "iceandfire:dragonsteel_lightning_block"],
    ["immersiveengineering\/hop_graphite", 2, "immersiveengineering:graphite_electrode"],
    ["industrialforegoing\/ether_gas", 2, "industrialforegoing:ether_gas_bucket"],
    ["industrialforegoing\/pink_slimy", 2, "industrialforegoing:pink_slime"],
    ["integrateddynamics\/menril", 2, "integrateddynamics:crystalized_menril_block"],
    ["irons_spellbooks\/arcane_essence", 2, "irons_spellbooks:ruined_book"],
    ["justdirethings\/blazegold", 2, "justdirethings:blazegold_block"],
    ["justdirethings\/celestigem", 2, "justdirethings:celestigem_block"],
    ["justdirethings\/eclipsealloy", 2, "justdirethings:eclipsealloy_block"],
    ["justdirethings\/ferricore", 2, "justdirethings:ferricore_block"],
    ["justdirethings\/time_crystal", 2, "justdirethings:time_crystal_block"],
    ["l2hostility\/chaotic", 2, "l2hostility:chaos_block"],
    ["l2hostility\/miracle", 2, "l2hostility:miracle_block"],
    ["plastic", 2, "pneumaticcraft:plastic"],
    //["sticky_resin", 2, "minecraft:sticky_piston"],
    ["mekanism\/refined_glowstone", 2, "mekanism:block_refined_glowstone"],
    ["mekanism\/refined_obsidian", 2, "mekanism:block_refined_obsidian"],
    ["mekanism\/wasted_radioactive", 2, "mekanism:reprocessed_fissile_fragment"],
    ["mekanism\/lithium", 2, "mekanism:dust_lithium"],
    ["modern_industrialization\/antimony", 2, "modern_industrialization:antimony"],
    ["modern_industrialization\/beryllium", 2, "modern_industrialization:beryllium"],
    ["modern_industrialization\/chromium", 2, "modern_industrialization:chromium"],
    ["modern_industrialization\/manganese", 2, "modern_industrialization:manganese_dust"],
    ["modern_industrialization\/monazite", 2, "modern_industrialization:monazite"],
    ["mysticalagriculture\/awakened_supremium", 2, "mysticalagriculture:awakened_supremium_block"],
    ["mysticalagriculture\/imperium", 2, "mysticalagriculture:imperium_block"],
    ["mysticalagriculture\/inferium", 2, "mysticalagriculture:inferium_block"],
    ["mysticalagriculture\/insanium", 2, "mysticalagradditions:insanium_block"],
    ["mysticalagriculture\/prosperity", 2, "mysticalagriculture:prosperity_block"],
    ["mysticalagriculture\/prudentium", 2, "mysticalagriculture:prudentium_block"],
    ["mysticalagriculture\/soulium", 2, "mysticalagriculture:soulium_block"],
    ["mysticalagriculture\/supremium", 2, "mysticalagriculture:supremium_block"],
    ["mysticalagriculture\/tertium", 2, "mysticalagriculture:tertium_block"],
    ["mythicbotany\/alfsteel", 2, "mythicbotany:alfsteel_block"],
    ["naturesaura\/infused_iron", 2, "naturesaura:infused_iron_block"],
    ["naturesaura\/sky_ingot", 2, "naturesaura:sky_ingot_block"],
    ["naturesaura\/tainted_gold", 2, "naturesaura:tainted_gold_block"],
    ["occultism\/iesnium", 2, "occultism:iesnium_block"],
    ["pneumaticcraft\/compressed_iron", 2, "pneumaticcraft:compressed_iron_block"],
    ["pokecube\/cosmic_dust", 2, "pokecube:cosmic"],
    ["pokecube\/spectrum", 2, "pokecube:spectrum"],
    ["powah\/blazing_crystal", 2, "powah:blazing_crystal_block"],
    ["powah\/energized_steel", 2, "powah:energized_steel_block"],
    ["powah\/niotic_crystal", 2, "powah:niotic_crystal_block"],
    ["powah\/nitro_crystal", 2, "powah:nitro_crystal_block"],
    ["powah\/spirited_crystal", 2, "powah:spirited_crystal_block"],
    ["powah\/uraninite", 2, "eternalores:uraninite_ingot"],
    ["productivemetalworks\/butcher", 2, "productivemetalworks:meat_block"],
    ["aluminum", 2, "eternalores:aluminum_block"],
    ["bismuth", 2, "eternalores:bismuth_block"],
    ["copper", 2, "minecraft:copper_block"],
    ["gold", 2, "minecraft:gold_block"],
    ["iridium", 2, "eternalores:iridium_block"],
    ["iron", 2, "minecraft:iron_block"],
    ["lead", 2, "eternalores:lead_block"],
    ["netherite", 2, "minecraft:netherite_block"],
    ["nickel", 2, "eternalores:nickel_block"],
    ["osmium", 2, "eternalores:osmium_block"],
    ["platinum", 2, "eternalores:platinum_block"],
    ["radioactive", 2, "eternalores:uranium_block"],
    ["silver", 2, "eternalores:silver_block"],
    ["tin", 2, "eternalores:tin_block"],
    ["titanium", 2, "eternalores:titanium_block"],
    ["tungsten", 2, "eternalores:tungsten_block"],
    ["zinc", 2, "eternalores:zinc_block"],
    ["mithril", 2, "eternalores:mithril_block"],
    ["refinedstorage\/quartz_enriched_iron", 2, "refinedstorage:machine_casing"],
    ["brown_shroom", 2, "minecraft:brown_mushroom"],
    ["crimson", 2, "minecraft:crimson_fungus"],
    ["red_shroom", 2, "minecraft:red_mushroom"],
    ["warped", 2, "minecraft:warped_fungus"],
    ["silentgear\/azure_silver", 2, "silentgear:azure_silver_block"],
    ["silentgear\/crimson_iron", 2, "silentgear:crimson_iron_block"],
    ["spirit\/spirit", 2, "spirit:soul_steel_block"],
    ["tconstruct\/amethyst_bronze", 2, "tconstruct:amethyst_bronze"],
    ["cobalt", 2, "eternalores:cobalt_block"],
    ["tconstruct\/ender_slimy", 2, "tconstruct:ender"],
    ["tconstruct\/hepatizon", 2, "tconstruct:hepatizon"],
    ["tconstruct\/ichor_slimy", 2, "tconstruct:ichor"],
    ["tconstruct\/knightslime", 2, "tconstruct:knightslime"],
    ["tconstruct\/manyullyn", 2, "tconstruct:manyullyn"],
    ["pig_iron", 2, "eternalores:pig_iron_block"],
    ["tconstruct\/queens_slime", 2, "tconstruct:queens_slime"],
    ["rose_gold", 2, "eternalores:rose_gold_block"],
    ["tconstruct\/sky_slimy", 2, "tconstruct:sky"],
    ["tconstruct\/slimesteel", 2, "tconstruct:slimesteel"],
    ["tconstruct\/soulsteel", 2, "tconstruct:soulsteel"],
    ["tetra\/geode", 2, "minecraft:deepslate"],
    ["tetra\/scrapped", 2, "tetra:forged_workbench"],
    ["the_bumblezone\/royal", 2, "the_bumblezone:royal_jelly_block"],
    ["thermal\/basalz", 2, "thermal:basalz"],
    ["thermal\/blitz", 2, "eternalores:niter_block"],
    ["thermal\/blizz", 2, "thermal:blizz"],
    ["thermal\/destabilized_redstone", 2, "thermal:destabilized_redstone_bucket"],
    ["thermal\/energized_glowstone", 2, "thermal:energized_glowstone_bucket"],
    ["thermal\/resonant_ender", 2, "eternalores:enderium_block"],
    ["thermalendergy\/melodium", 2, "thermal:melodium"],
    ["thermalendergy\/stellarium", 2, "thermal:stellarium"],
    ["thermalendergy\/prismalium", 2, "thermal:prismalium"],
    ["thermal_extra\/dragonsteel", 2, "thermal_extra:dragonsteel_block"],
    ["thermal_extra\/shellite", 2, "thermal_extra:shellite_block"],
    ["thermal_extra\/soul_infused", 2, "thermal_extra:soul_infused_block"],
    ["thermal_extra\/twinite", 2, "thermal_extra:twinite_block"],
    ["tombstone\/grave", 2, "gravestones:gravestone"],
    ["undergarden\/cloggrum", 2, "undergarden:cloggrum_block"],
    ["undergarden\/forgotten", 2, "undergarden:forgotten_block"],
    ["undergarden\/froststeel", 2, "undergarden:froststeel_block"],
    ["undergarden\/regalium", 2, "undergarden:regalium_block"],
    ["undergarden\/utheric", 2, "undergarden:utherium_block"],
    //This bees are without order, just making sure they are
    ["oritech\/strange_matter", 2, "oritech:still_strange_matter_bucket"],
    ["oritech\/biosteel", 2, "oritech:biosteel_ingot"],
    ["oritech\/uranite_crystal", 2, "oritech:uranium_crystal"],
    ["oritech\/energite", 2, "oritech:energite_block"],
    ["oritech\/duratium", 2, "oritech:duratium_block"],
    ["oritech\/sulfuric_acid", 2, "mekanism:sulfuric_acid_bucket"],
    ["oritech\/dimensional_shard", 2, "rftoolsbase:dimensionalshard"],
    ["oritech\/adamant", 2, "oritech:adamant_block"],
    ["oritech\/fluxite", 2, "oritech:fluxite_block"],
    ["oritech\/sheol_fire", 2, "oritech:still_sheol_fire_bucket"],
    ["oritech\/prometheum", 2, "oritech:prometheum_ingot"]
];

ServerEvents.recipes(catalyst => {

    let debug = false
    if(debug)
    {
        let beeTypes = new Set(allBees.map(bee => bee[0].includes("\/") ? bee[0].split("\/")[1] : bee[0]));
        $BeeProvider.INSTANCE.getData().forEach((key, value) =>{
            try
            {
                let type = String(key).split(":")[1];
                if(!beeTypes.has(type))
                {
                    console.log(`[CatJS] New bee detected: ${type}`)
                }
            }
            catch(error)
            {
                
            }
        })
    }

    const time = 200; //ticks
    const multiplier = 20
    allBees.forEach(bee => {
        
        let [keyword, beeType, ingredients] = bee;
        let bee_type = ""
        let modid = ""
        if(keyword.includes("\/"))
        {
            bee_type = keyword.toString().split("\/")[1]
            modid = keyword.toString().split("\/")[0]
        }
        else
        {
            bee_type = keyword
        }

        let inputEgg = Item.of('productivebees:spawn_egg_configurable_bee', 1, {
                "entity_data": {
                    "id": "productivebees:configurable_bee",
                    "type": `productivebees:${bee_type}`
                }
            });

        if(beeType === 1) //bees that are "normal", aka no nbt
        {
            catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:apis_mutandis", time)
            .progressData(ProgressData.create().x(54).y(20))
            .width(110)
            .height(60)
            .requireEnergy(20000, 0, 4)
            .requireItem(`minecraft:bee_spawn_egg`, 25, 0)
            .requireItem(`${1*multiplier}x ${ingredients}`, 25, 20)
            .requireFluid('1000x productivebees:honey', 25, 40)
            .produceItem(`productivebees:spawn_egg_${keyword}_bee`, 90, 20)
            .id(`catalyst:mmr/api_mutandis/${keyword}`)
        }
        else if(beeType === 2) //bees that has nbt data (because why wouldnt they have)
        {
            if(Item.exists(ingredients) && Platform.isLoaded(modid))
            {
                catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:apis_mutandis", time)
                .progressData(ProgressData.create().x(54).y(20))
                .width(110)
                .height(60)
                .requireEnergy(20000, 0, 4)
                .requireItem(`minecraft:bee_spawn_egg`, 25, 0)
                .requireItem(`${1*multiplier}x ${ingredients}`, 25, 20)
                .requireFluid('1000x productivebees:honey', 25, 40)
                .produceItem(inputEgg, 90, 20)
                .id(`catalyst:mmr/api_mutandis/${keyword}`)
            }
            else if(modid === "") //bees without a mod, like thermal
            {
                try
                {
                    if(Item.exists(ingredients))
                    {
                        catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:apis_mutandis", time)
                        .progressData(ProgressData.create().x(54).y(20))
                        .width(110)
                        .height(60)
                        .requireEnergy(20000, 0, 4)
                        .requireItem(`minecraft:bee_spawn_egg`, 25, 0)
                        .requireItem(`${1*multiplier}x ${ingredients}`, 25, 20)
                        .requireFluid('1000x productivebees:honey', 25, 40)
                        .produceItem(inputEgg, 90, 20)
                        .id(`catalyst:mmr/api_mutandis/${keyword}`)
                    }
                }
                catch(error)
                {
                    console.error(`[CatJS] Error while processing: ${beeType}, ${keyword}, ${ingredients}`)
                    console.log(error)
                }
            }
            else
            {
                //console.warn(`[CatJS] BeeType not found = ${beeType}, ${keyword}, ${ingredients}, this might be skipped`)
            }
        }
        
    });

    catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:apis_mutandis", time)
        .progressData(ProgressData.create().x(54).y(20))
        .width(110)
        .height(60)
        .requireEnergy(30000, 0, 4)
        .requireItem(`minecraft:honeycomb`, 25, 0)
        .requireItem(`${1*multiplier}x minecraft:honeycomb_block`, 25, 20)
        .requireFluid('1000x productivebees:honey', 25, 40)
        .produceItem('minecraft:bee_spawn_egg', 90, 20)
        .id(`catalyst:mmr/api_mutandis/normal_bee_vanilla`)

    console.log("[CatJS] Added Apis Mutandis recipes");

})
/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/

global.recipesSeedToRemove = []
global.dontPlantSeeds = ['sculk']

StartupEvents.init(catalyst => {
    if(!Platform.isLoaded('mysticalagriculture')) return;

    try
    {
        let $CropRegistry = Java.loadClass('com.blakebr0.mysticalagriculture.registry.CropRegistry')
        let $Crop = Java.loadClass('com.blakebr0.mysticalagriculture.api.crop.Crop')        
        let $CropTier = Java.loadClass('com.blakebr0.mysticalagriculture.api.crop.CropTier')
        let $CropType = Java.loadClass('com.blakebr0.mysticalagriculture.api.crop.CropType')
        let $CropTextures = Java.loadClass('com.blakebr0.mysticalagriculture.api.crop.CropTextures')
        let $LazyIngredient = Java.loadClass('com.blakebr0.mysticalagriculture.api.lib.LazyIngredient')

        let $ResourceLocation = Java.loadClass('net.minecraft.resources.ResourceLocation')
        let $Ingredient = Java.loadClass('net.minecraft.world.item.crafting.Ingredient')
        let Component = Java.loadClass('net.minecraft.network.chat.Component')
        let $ChatFormatting = Java.loadClass('net.minecraft.ChatFormatting')
        let $BuiltInRegistries = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries')

        let registryInstance = $CropRegistry.getInstance()
        registryInstance.setAllowRegistration(true)

        let TIERS = {
            'mysticalagriculture:1': $CropTier.ONE,
            'mysticalagriculture:2': $CropTier.TWO,
            'mysticalagriculture:3': $CropTier.THREE,
            'mysticalagriculture:4': $CropTier.FOUR,
            'mysticalagriculture:5': $CropTier.FIVE,
            'mysticalagriculture:elemental': $CropTier.ELEMENTAL
        }

        let TYPES = {
            'mysticalagriculture:resource': $CropType.RESOURCE,
            'mysticalagriculture:mob': $CropType.MOB
        }

        let TEXTURE_PATTERNS = {
            'ingot': $CropTextures.INGOT_CROP_TEXTURES,
            'rock': $CropTextures.ROCK_CROP_TEXTURES,
            'dust': $CropTextures.DUST_CROP_TEXTURES,
            'gem': $CropTextures.GEM_CROP_TEXTURES,
            'elemental': $CropTextures.ELEMENTAL_CROP_TEXTURES,
            'face': new $CropTextures($CropTextures.FLOWER_FACE_BLANK, $CropTextures.ESSENCE_FLAME_BLANK),
            'dust_gem': new $CropTextures($CropTextures.FLOWER_DUST_BLANK, $CropTextures.ESSENCE_GEM_BLANK),
            'dust_flame': new $CropTextures($CropTextures.FLOWER_DUST_BLANK, $CropTextures.ESSENCE_FLAME_BLANK),
            'dust_ingot': new $CropTextures($CropTextures.FLOWER_DUST_BLANK, $CropTextures.ESSENCE_INGOT_BLANK)
        }

        let getTier = (id) => TIERS[id] || registryInstance.getTierById($ResourceLocation.parse(id))
        let getType = (id) => TYPES[id] || registryInstance.getTypeById($ResourceLocation.parse(id))

        let TierBuilder = (idStr, displayName) => {
            let _idStr = idStr
            let _name = displayName
            let _value = 1
            let _color = 0xFFFFFF
            let _format = 'WHITE'
            let _farmland = null
            let _fertilizable = true
            let _secondary = true
            let _chance = 0.1
            let _key = "";

            return {
                value: function(v)
                {
                    _value = v;
                    return this
                },
                color: function(c)
                {
                    _color = c;
                    return this
                },
                //Basically a color, check tooltip for more colors
                format: function(f)
                { 
                    _format = f;
                    return this
                },
                farmland: function(id)
                { 
                    _farmland = id;
                    return this 
                },
                noFertilizer: function()
                {
                    _fertilizable = false;
                    return this
                },
                noSecondary: function()
                {
                    _secondary = false;
                    _chance = 0.0;
                    return this
                },
                secondaryChance: function(c)
                {
                    _chance = c;
                    return this
                },
                translationKey: function(key)
                {
                    _key = key;
                    return this;
                },
                register: function()
                {
                    let id = $ResourceLocation.parse('mysticalagriculture:'+ _idStr)
                    let fmt = $ChatFormatting[_format] || $ChatFormatting.WHITE
                    let newTier = new $CropTier(id, _value, _color, fmt)
                    
                    newTier.setFertilizable(_fertilizable)
                    newTier.setSecondarySeedDrop(_secondary)
                    newTier.setBaseSecondaryChance(_chance)
                    if(_farmland)
                    {
                        newTier.setFarmland(() => $BuiltInRegistries.BLOCK.get($ResourceLocation.parse(_farmland)))
                    }

                    if(_key.trim() !== "")
                    {
                        newTier.setDisplayName(Component.translatable(_key))
                    }
                    else
                    {
                        newTier.setDisplayName(Component.literal(_name))
                    }

                    registryInstance.registerTier(newTier)
                    TIERS[`mysticalagriculture:${_idStr}`] = newTier
                    console.info(`[CatJS] Registered Tier: ${_idStr}`)
                }
            }
        }

        let CropBuilder = (idStr, displayName) => {
            let _idStr = idStr
            let _name = displayName
            let _tierId = 'mysticalagriculture:1'
            let _typeId = 'mysticalagriculture:resource'
            let _pattern = 'dust'
            let _color = 0xFFFFFF
            let _ingredient = 'minecraft:barrier'
            let _crux = null
            let _essence = null
            let _glint = false
            let _dontPlant = false
            let _key = ""

            return {
                tier: function(t)
                {
                    _tierId = `mysticalagriculture:${t}`;
                    return this
                },
                type: function(t)
                { 
                    _typeId = t; 
                    return this
                },
                pattern: function(p)
                { 
                    _pattern = p;
                    return this
                },
                color: function(c)
                { 
                    _color = c;
                    return this 
                },
                ingredient: function(i)
                { 
                    _ingredient = i;
                    return this
                },
                crux: function(b)
                { 
                    _crux = b;
                    return this
                },
                essence: function(e)
                {
                    _essence = e;
                    return this
                },
                glint: function()
                {
                    _glint = true;
                    return this
                },
                dontPlant: function()
                {
                    _dontPlant = true;
                    return this
                },
                translationKey: function(key)
                {
                    _key = key;
                    return this;
                },
                register: function()
                {
                    global.recipesSeedToRemove.push(`mysticalagriculture:${_idStr}`)
                    let id = $ResourceLocation.parse('mysticalagriculture:'+ _idStr)
                    let tier = getTier(_tierId)
                    let type = getType(_typeId)
                    let textures = (typeof _pattern === 'string') ? TEXTURE_PATTERNS[_pattern] : _pattern;

                    if(!tier || !type || !textures)
                    {
                        console.error(`[CatJS] Failed to build crop ${_idStr}: Missing Tier, Type or Pattern`);
                        if(!tier) console.error(`[CatJS] - Missing Tier`);
                        if(!type) console.error(`[CatJS] - Missing Type`);
                        if(!textures) console.error(`[CatJS] - Missing Texture / Pattern`);
                        return;
                    }

                    let craftingMaterial = $LazyIngredient.item(_ingredient)
                    let newCrop = new $Crop(id, tier, type, craftingMaterial)
                    //newCrop.setCraftingMaterial(null)
                    
                    newCrop.setFlowerColor(_color).setSeedColor(_color)
                    newCrop.getTextures().setFlowerTexture(textures.getFlowerTexture())
                                         .setEssenceTexture(textures.getEssenceTexture())
                                         .setSeedTexture(textures.getSeedTexture())
                    
                    if(_key.trim() !== "")
                    {
                        newCrop.setDisplayName(Component.translatable(_key))
                    }
                    else
                    {
                        newCrop.setDisplayName(Component.literal(_name))
                    }

                    if(_glint) newCrop.setHasEffect(true)
                    if(_crux) newCrop.setCruxBlock(() => $BuiltInRegistries.BLOCK.get($ResourceLocation.parse(_crux)))
                    
                    if(_essence)
                    {
                        newCrop.setEssenceItem(() => $BuiltInRegistries.ITEM.get($ResourceLocation.parse(_essence)))
                    }
                    else
                    {
                        newCrop.setEssenceColor(_color)
                    }

                    try
                    {
                        registryInstance.register(newCrop)
                    }
                    catch(e)
                    {
                        if(registryInstance.getCropById(id) != null)
                        {
                            if(_dontPlant) global.dontPlantSeeds.push(_idStr)
                            console.info(`[CatJS] Registered Custom Crop: ${idStr}`)
                        }
                    }
                }
            }
        }

        // Tiers
        TierBuilder('6', '6')
            .value(6)
            .color(0xD800FF)
            .format('LIGHT_PURPLE')
            .noSecondary()
            .translationKey('catalyst.tier.6')
            .register()

        TierBuilder('mystic', 'Mystic')
            .value(7)
            .color(0x00FFFF)
            .format('AQUA')
            .noSecondary()
            .translationKey('catalyst.tier.mystic')
            .register()

        TierBuilder('magical', 'Magical')
            .value(8)
            .color(0xD800FF)
            .format('LIGHT_PURPLE')
            .farmland('catalystcore:magical_farmland')
            .noSecondary()
            .translationKey('catalyst.tier.magical')
            .register()

        TierBuilder('technology', 'Technology')
            .value(9)
            .color(0x708090)
            .format('GRAY')
            .noSecondary()
            .translationKey('catalyst.tier.technology')
            .register()

        // Tier 1
        CropBuilder('salt', 'Salt')
            .tier('1')
            .pattern('dust')
            .color(0xd5dee0)
            .crux('mekanism:block_salt')
            .translationKey('catalyst.crop.salt')
            .register()

        // Tier 2
        CropBuilder('fluxite', 'Fluxite')
            .tier('2')
            .pattern('gem')
            .color(0xa66ecb)
            .translationKey('catalyst.crop.fluxite')
            .register()
        
        CropBuilder('force_gem', 'Force Gem')
            .tier('2')
            .pattern('gem')
            .color(0xf7e922)
            .translationKey('catalyst.crop.force_gem')
            .register()

        CropBuilder('black_quartz', 'Black Quartz')
            .tier('2')
            .pattern('gem')
            .color(0x182326)
            .translationKey('catalyst.crop.black_quartz')
            .register()

        // Tier 3
        CropBuilder('prosperity', 'Prosperity')
            .tier('3')
            .pattern('dust')
            .color(0x0092FC)
            .translationKey('catalyst.crop.prosperity')
            .register()

        CropBuilder('industrial', 'Industrial')
            .tier('3')
            .pattern('ingot')
            .color(0xbcc3d4)
            .translationKey('catalyst.crop.industrial')
            .register()

        CropBuilder('plastic', 'Plastic')
            .tier('3')
            .pattern('ingot')
            .color(0xbcc3d4)
            .translationKey('catalyst.crop.plastic')
            .register()

        CropBuilder('xychorium', 'Xychorium Gem')
            .tier('3')
            .pattern('gem')
            .color(0x14091F)
            .translationKey('catalyst.crop.xychorium')
            .register()

        CropBuilder('arcane', 'Arcane')
            .tier('3')
            .pattern('rock')
            .color(0xAC32C7)
            .translationKey('catalyst.crop.arcane')
            .register()

        CropBuilder('enriched_copper', 'Quartz Enriched Copper')
            .tier('3')
            .pattern(TEXTURE_PATTERNS.ingot)
            .color(0xe09e19)
            .translationKey('catalyst.crop.enriched_copper')
            .register()

        // Tier 4
        CropBuilder('prudentium', 'Prudentium')
            .tier('4')
            .pattern('dust')
            .color(0x008020)
            .crux('mysticalagriculture:imperium_block')
            .essence('mysticalagriculture:prudentium_essence')
            .dontPlant()
            .translationKey('catalyst.crop.prudentium')
            .register()

        CropBuilder('dark_gem', 'Dark Gem')
            .tier('4')
            .pattern('rock')
            .color(0x320E63)
            .crux('minecraft:sculk_catalyst')
            .glint()
            .translationKey('catalyst.crop.dark_gem')
            .register()

        CropBuilder('entro', 'Entro')
            .tier('4')
            .pattern('rock')
            .color(0x40F76E)
            .translationKey('catalyst.crop.entro')
            .register()

        // Tier 5
        CropBuilder('tertium', 'Tertium')
            .tier('5')
            .pattern('dust')
            .color(0xA73F01)
            .crux('mysticalagriculture:supremium_block')
            .essence('mysticalagriculture:tertium_essence')
            .dontPlant()
            .translationKey('catalyst.crop.tertium')
            .register()

        CropBuilder('flux', 'Flux')
            .tier('5')
            .pattern('face')
            .color(0x000000)
            .crux('fluxnetworks:flux_block')
            .translationKey('catalyst.crop.flux')
            .register()

        // Tier 6
        CropBuilder('imperium', 'Imperium')
            .tier('6')
            .pattern('dust')
            .color(0x0092FC)
            .crux('mysticalagradditions:insanium_block')
            .essence('mysticalagriculture:imperium_essence')
            .dontPlant()
            .translationKey('catalyst.crop.imperium')
            .register()

        CropBuilder('cognizian', 'Cognizian')
            .tier('6')
            .pattern('dust')
            .color(0xA73F01)
            .essence('mysticalagriculture:cognizant_dust')
            .dontPlant()
            .translationKey('catalyst.crop.cognizian')
            .register()

        // Tier Elemental
        CropBuilder('darkness', 'Darkness')
            .tier('elemental')
            .pattern('dust')
            .color(0x000000)
            .glint()
            .translationKey('catalyst.crop.darkness')
            .register()

        CropBuilder('magic', 'Magic')
            .tier('elemental')
            .pattern('dust_gem')
            .color(0xAA45ED)
            .glint()
            .translationKey('catalyst.crop.magic')
            .register()

        CropBuilder('mystical', 'Mystical')
            .tier('elemental')
            .pattern('dust_flame')
            .color(0x3DE0DB)
            .glint()
            .translationKey('catalyst.crop.mystical')
            .register()

        CropBuilder('technology', 'Technology')
            .tier('elemental')
            .pattern('dust_ingot')
            .color(0xEDC45F)
            .glint()
            .dontPlant()
            .translationKey('catalyst.crop.technology')
            .register()

        // Tier Mystic (9)
        CropBuilder("mystical_diamond", "Mystical Diamond")
            .tier("mystic")
            .pattern(TEXTURE_PATTERNS.gem)
            .color(0x2bf5fb)
            .glint()
            .dontPlant()
            .translationKey('catalyst.crop.mystical_diamond')
            .register()

        CropBuilder("mystical_emerald", "Mystical Emerald")
            .tier("mystic")
            .pattern(TEXTURE_PATTERNS.gem)
            .color(0x35fb2b)
            .glint()
            .dontPlant()
            .translationKey('catalyst.crop.mystical_emerald')
            .register()

        CropBuilder("mystical_netherite", "Mystical Netherite")
            .tier("mystic")
            .pattern(TEXTURE_PATTERNS.ingot)
            .color(0x271c05)
            .glint()
            .dontPlant()
            .translationKey('catalyst.crop.mystical_netherite')
            .register()

        // Tier Magical (8)
        CropBuilder('supremium', 'Supremium')
            .tier('magical')
            .pattern('dust')
            .color(0xDF0101)
            .crux('mysticalagradditions:insanium_block')
            .essence('mysticalagriculture:supremium_essence')
            .dontPlant()
            .translationKey('catalyst.crop.supremium')
            .register()

        // Tier Technology (9)
        CropBuilder('insanium', 'Insanium')
            .tier('technology')
            .pattern('dust')
            .color(0x640099)
            .crux('mysticalagradditions:insanium_block')
            .essence('mysticalagradditions:insanium_essence')
            .dontPlant()
            .translationKey('catalyst.crop.insanium')
            .register()

        CropBuilder('dire', 'Dire Thing')
            .tier('technology')
            .pattern('ingot')
            .color(0x4ebade)
            .crux('justdirethings:time_crystal_budding_block')
            .dontPlant()
            .translationKey('catalyst.crop.dire')
            .register()
        
        CropBuilder('gem_tachyarite', 'Tachyarite')
        .tier('4')
        .pattern('gem')
        .color(0x242b45)
        .register();

        CropBuilder('gallium', 'Gallium')
            .tier('2')
            .pattern('ingot')
            .color(0xcaf6f1)
            .register();

        CropBuilder('replica', 'Replica')
            .tier('4')
            .pattern('ingot')
            .color(0x9a9da1)
            .register();

        CropBuilder('etherium', 'Etherium')
            .tier('4')
            .pattern('ingot')
            .color(0x546173)
            .register();

        CropBuilder('eternal_dark', 'Eternal Dark')
            .tier('5')
            .pattern('ingot')
            .color(0x9e96d0)
            .register();

        CropBuilder('eternal_light', 'Eternal Light')
            .tier('5')
            .pattern('ingot')
            .color(0xf9f9f9)
            .register();

        CropBuilder('britannia_silver', 'Britannia Silver')
            .tier('3')
            .pattern('ingot')
            .color(0xcacdce)
            .register();

        CropBuilder('cast_iron', 'Cast Iron')
            .tier('3')
            .pattern('ingot')
            .color(0xd4d4d4)
            .register();

        CropBuilder('cast_steel', 'Cast Steel')
            .tier('4')
            .pattern('ingot')
            .color(0x758698)
            .register();

        CropBuilder('catalyrium', 'Catalyrium')
            .tier('technology')
            .pattern('ingot')
            .color(0x717473)
            .register();

        CropBuilder('cosmic_matter', 'Cosmic Matter')
            .tier('6')
            .pattern('ingot')
            .color(0x000000)
            .register();

        CropBuilder('eternity', 'Eternity')
            .tier('6')
            .pattern('ingot')
            .color(0xe796a5)
            .register();

        CropBuilder('missing', 'Missing')
            .tier('4')
            .pattern('ingot')
            .color(0xfc00cf)
            .register();

        CropBuilder('modularium', 'Modularium')
            .tier('technology')
            .pattern('ingot')
            .color(0xce3f09)
            .register();

        CropBuilder('neodymium', 'Neodymium')
            .tier('3')
            .pattern('ingot')
            .color(0xa0788f)
            .register();

        CropBuilder('neptunium', 'Neptunium')
            .tier('4')
            .pattern('ingot')
            .color(0x88b29d)
            .register();

        CropBuilder('nethersteel', 'Nethersteel')
            .tier('4')
            .pattern('ingot')
            .color(0xc74648)
            .register();

        CropBuilder('pewter', 'Pewter')
            .tier('3')
            .pattern('ingot')
            .color(0x757b77)
            .register();

        CropBuilder('plutonium', 'Plutonium')
            .tier('5')
            .pattern('ingot')
            .color(0xe8d0c8)
            .register();

        CropBuilder('sculkite', 'Sculkite')
            .tier('mystic')
            .pattern('ingot')
            .color(0x084f55)
            .register();

        CropBuilder('shadowsteel', 'Shadowsteel')
            .tier('4')
            .pattern('ingot')
            .color(0x070509)
            .register();

        CropBuilder('titanium', 'Titanium')
            .tier('4')
            .pattern('ingot')
            .color(0xdba4dd)
            .register();

        CropBuilder('tungsten', 'Tungsten')
            .tier('4')
            .pattern('ingot')
            .color(0x677cc1)
            .register();

        CropBuilder('ultimatitanium', 'Ultimatitanium')
            .tier('5')
            .pattern('ingot')
            .color(0x9265ad)
            .register();

        CropBuilder('wrought_iron', 'Wrought Iron')
            .tier('3')
            .pattern('ingot')
            .color(0xa7a793)
            .register();

        CropBuilder('biomass', 'Biomass')
            .tier('1')
            .pattern('dust')
            .color(0x65621f)
            .register();

        CropBuilder('gem_obsidian', 'Obsidian Gem')
            .tier('3')
            .pattern('gem')
            .color(0x8057cb)
            .register();

        CropBuilder('gem_pyrolite', 'Pyrolite Gem')
            .tier('4')
            .pattern('gem')
            .color(0xba4a2a)
            .register();

        CropBuilder('gem_quantiquarite', 'Quantiquarite Gem')
            .tier('5')
            .pattern('gem')
            .color(0x847999)
            .register();

        CropBuilder('gem_sanguis_vivus', 'Sanguis Vivus Gem')
            .tier('5')
            .pattern('gem')
            .color(0xc0000d)
            .register();

        CropBuilder('gem_spectral_sky_bluerite', 'Spectral Sky Bluerite Gem')
            .tier('5')
            .pattern('gem')
            .color(0xa2ebed)
            .register();

        CropBuilder('gem_tanzanite', 'Tanzanite Gem')
            .tier('3')
            .pattern('gem')
            .color(0xa593e1)
            .register();

        CropBuilder('gem_voiderite', 'Voiderite Gem')
            .tier('5')
            .pattern('gem')
            .color(0x826bda)
            .register();

        CropBuilder('antimatter_pellet', 'Antimatter Pellet')
            .tier('technology')
            .pattern('dust')
            .color(0xb571bf)
            .register();

        CropBuilder('exotic_matter_pellet', 'Exotic Matter Pellet')
            .tier('technology')
            .pattern('dust')
            .color(0xb3b18f)
            .register();

        CropBuilder('strange_matter_pellet', 'Strange Matter Pellet')
            .tier('technology')
            .pattern('dust')
            .color(0x9cc29b)
            .register();

        CropBuilder('gem_necroticarite', 'Necroticarite Gem')
            .tier('4')
            .pattern('gem')
            .color(0x53017c)
            .register();

        registryInstance.setAllowRegistration(false)

    }
    catch(e)
    {
        console.error("[CatJS] Error registering Mystical Agriculture crops: " + e)
    }

    console.log("[CatJS] MA seeds/tiers has been added")
})

/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/

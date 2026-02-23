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
        let $Component = Java.loadClass('net.minecraft.network.chat.Component')
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
                register: function()
                {
                    let id = new $ResourceLocation('mysticalagriculture', _idStr)
                    let fmt = $ChatFormatting[_format] || $ChatFormatting.WHITE
                    let newTier = new $CropTier(id, _value, _color, fmt)
                    
                    newTier.setFertilizable(_fertilizable)
                    newTier.setSecondarySeedDrop(_secondary)
                    newTier.setBaseSecondaryChance(_chance)
                    if(_farmland)
                    {
                        newTier.setFarmland(() => $BuiltInRegistries.BLOCK.get($ResourceLocation.parse(_farmland)))
                    }
                    
                    newTier.setDisplayName($Component.literal(_name))
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
                register: function()
                {
                    let id = new $ResourceLocation('mysticalagriculture', _idStr)
                    let tier = getTier(_tierId)
                    let type = getType(_typeId)
                    let textures = TEXTURE_PATTERNS[_pattern]

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
                    newCrop.setCraftingMaterial(null)
                    
                    newCrop.setFlowerColor(_color).setSeedColor(_color)
                    newCrop.getTextures().setFlowerTexture(textures.getFlowerTexture())
                                         .setEssenceTexture(textures.getEssenceTexture())
                                         .setSeedTexture(textures.getSeedTexture())
                    
                    newCrop.setDisplayName($Component.literal(_name))
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
                            global.recipesSeedToRemove.push(`mysticalagriculture:${_idStr}`)
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
            .register()

        TierBuilder('mystic', 'Mystic')
            .value(7)
            .color(0x00FFFF)
            .format('AQUA')
            .noSecondary()
            .register()

        TierBuilder('magical', 'Magical')
            .value(8)
            .color(0xD800FF)
            .format('LIGHT_PURPLE')
            .farmland('kubejs:magical_farmland')
            .noSecondary()
            .register()

        TierBuilder('technology', 'Technology')
            .value(9)
            .color(0x708090)
            .format('GRAY')
            .noSecondary()
            .register()

        // Tier 1
        CropBuilder('salt', 'Salt')
            .tier('1')
            .pattern('dust')
            .color(0xd5dee0)
            .crux('mekanism:block_salt')
            .register()

        // Tier 2
        CropBuilder('fluxite', 'Fluxite')
            .tier('2')
            .pattern('gem')
            .color(0xa66ecb)
            .register()
        
        CropBuilder('force_gem', 'Force Gem')
            .tier('2')
            .pattern('gem')
            .color(0xf7e922)
            .register()

        // Tier 3
        CropBuilder('prosperity', 'Prosperity')
            .tier('3')
            .pattern('dust')
            .color(0x0092FC)
            .register()

        CropBuilder('industrial', 'Industrial')
            .tier('3')
            .pattern('ingot')
            .color(0xbcc3d4)
            .register()

        CropBuilder('plastic', 'Plastic')
            .tier('3')
            .pattern('ingot')
            .color(0xbcc3d4)
            .register()

        CropBuilder('xychorium', 'Xychorium Gem')
            .tier('3')
            .pattern('gem')
            .color(0x14091F)
            .register()

        CropBuilder('arcane', 'Arcane')
            .tier('3')
            .pattern('rock')
            .color(0xAC32C7)
            .register()

        // Tier 4
        CropBuilder('prudentium', 'Prudentium')
            .tier('4')
            .pattern('dust')
            .color(0x008020)
            .crux('mysticalagriculture:imperium_block')
            .essence('mysticalagriculture:prudentium_essence')
            .register()

        CropBuilder('dark_gem', 'Dark Gem')
            .tier('4')
            .pattern('rock')
            .color(0x320E63)
            .crux('minecraft:sculk_catalyst')
            .glint()
            .register()

        CropBuilder('entro', 'Entro')
            .tier('4')
            .pattern('rock')
            .color(0x40F76E)
            .register()

        // Tier 5
        CropBuilder('tertium', 'Tertium')
            .tier('5')
            .pattern('dust')
            .color(0xA73F01)
            .crux('mysticalagriculture:supremium_block')
            .essence('mysticalagriculture:tertium_essence')
            .register()

        CropBuilder('flux', 'Flux')
            .tier('5')
            .pattern('face')
            .color(0x000000)
            .crux('fluxnetworks:flux_block')
            .register()

        // Tier 6
        CropBuilder('imperium', 'Imperium')
            .tier('6')
            .pattern('dust')
            .color(0x0092FC)
            .crux('mysticalagradditions:insanium_block')
            .essence('mysticalagriculture:imperium_essence')
            .register()

        CropBuilder('cognizian', 'Cognizian')
            .tier('6')
            .pattern('dust')
            .color(0xA73F01)
            .essence('mysticalagriculture:cognizant_dust')
            .register()

        // Tier Elemental
        CropBuilder('darkness', 'Darkness')
            .tier('elemental')
            .pattern('dust')
            .color(0x000000)
            .glint()
            .register()

        CropBuilder('magic', 'Magic')
            .tier('elemental')
            .pattern('dust_gem')
            .color(0xAA45ED)
            .glint()
            .register()

        CropBuilder('mystical', 'Mystical')
            .tier('elemental')
            .pattern('dust_flame')
            .color(0x3DE0DB)
            .glint()
            .register()

        CropBuilder('technology', 'Technology')
            .tier('elemental')
            .pattern('dust_ingot')
            .color(0xEDC45F)
            .glint()
            .register()

        // Tier Magical (8)
        CropBuilder('supremium', 'Supremium')
            .tier('magical')
            .pattern('dust')
            .color(0xDF0101)
            .crux('mysticalagradditions:insanium_block')
            .essence('mysticalagriculture:supremium_essence')
            .register()

        // Tier Technology (9)
        CropBuilder('insanium', 'Insanium')
            .tier('technology')
            .pattern('dust')
            .color(0x640099)
            .crux('kubejs:magical_block')
            .essence('mysticalagradditions:insanium_essence')
            .register()

        CropBuilder('dire', 'Dire Thing')
            .tier('technology')
            .pattern('ingot')
            .color(0x4ebade)
            .crux('justdirethings:time_crystal_budding_block')
            .register()

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
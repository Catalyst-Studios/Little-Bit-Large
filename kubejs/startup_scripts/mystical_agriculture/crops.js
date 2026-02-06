/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/

global.recipesSeedToRemove = []

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

        /**
         * Create a new crop to be register on the crop list, the recipes might be bonked because we dont
         * give MA time to register stuff properly, but the manager is up when this catalyst fires, so
         * we can add crops and tiers
         * @param {string} idStr id of the crop
         * @param {string} displayName Name to be displayed
         * @param {string} tierId mysticalagriculture:<level>
         * @param {string} typeId mysticalagriculture:<resource or mob>
         * @param {string} texturePattern Pattern to be used (types from the TEXTURE_PATTERNS table)
         * @param {integer} colorHex Number in hexadecimal in 0xRRGGBB format (will be used for essence, plant and seeds)
         * @param {string} ingredientItem Id of the ingredient (use barriers to hide the automatic recipe)
         * @param {string} cruxItem Crux (minecraft:stone) to be used (opcional)
         * @param {string} customEssenceItem Item that the crop will drop (opcional)
         * @param {boolean} hasGlint Gives the enchantment effect (opcional)
         * @returns 
         */
        let registerCustomCrop = (idStr, displayName, tierId, typeId, texturePattern, colorHex, ingredientItem, cruxItem, customEssenceItem, hasGlint) => {
            let id = new $ResourceLocation('mysticalagriculture', idStr)
            let tier = getTier(tierId)
            let type = getType(typeId)
            let textures = TEXTURE_PATTERNS[texturePattern]

            if(!tier)
            { 
                console.error(`[CatJS] Tier '${tierId}' not found. Check ID.`); 
                return; 
            }
            if(!type)
            { 
                console.error(`[CatJS] Type '${typeId}' not found. Check ID.`); 
                return; 
            }
            if(!textures)
            {
                console.error(`[CatJS] Texture Pattern '${texturePattern}' not found. Use: ingot, rock, dust, gem, elemental`);
                return;
            }

            let craftingMaterial = $LazyIngredient.item(ingredientItem)
            let newCrop = new $Crop(id, tier, type, craftingMaterial)
            newCrop.setFlowerColor(colorHex)
            newCrop.setSeedColor(colorHex)
            
            newCrop.getTextures().setFlowerTexture(textures.getFlowerTexture())
                                 .setEssenceTexture(textures.getEssenceTexture())
                                 .setSeedTexture(textures.getSeedTexture())
            //
            newCrop.setDisplayName($Component.literal(displayName))

            if(cruxItem)
            {
                newCrop.setCruxBlock(() => {
                    return $BuiltInRegistries.BLOCK.get($ResourceLocation.parse(cruxItem))
                })
            }
            if(customEssenceItem)
            {
                newCrop.setEssenceItem(() => {
                    return $BuiltInRegistries.ITEM.get($ResourceLocation.parse(customEssenceItem))
                })
            }
            else
            {
                newCrop.setEssenceColor(colorHex)
            }

            if(hasGlint) newCrop.setHasEffect(true)

            try
            {
                registryInstance.register(newCrop)
                console.info(`[CatJS] Registered Custom Crop: ${idStr} (Tier: ${tier.getName()})`)
            }
            catch(e)
            {
                if(registryInstance.getCropById(id) != null)
                {
                    global.recipesSeedToRemove.push(`mysticalagriculture:${idStr}`)
                    console.info(`[CatJS] Registered Custom Crop: ${idStr}`)
                }
                else
                {
                    console.error(`[CatJS] Failed to register ${idStr}: ${e}`)
                }
            }

        }

        let registerCustomTier = (idStr, displayName, value, colorHex, chatFormattingName, farmlandId, fertilizable, secondaryDrop, baseDropChance) => {
            let id = new $ResourceLocation('mysticalagriculture', idStr)
            let fmt = $ChatFormatting[chatFormattingName] || $ChatFormatting.WHITE
            
            //new CropTier(ResourceLocation id, int value, int color, ChatFormatting textColor)
            let newTier = new $CropTier(id, value, colorHex, fmt)
            
            if (fertilizable !== undefined) newTier.setFertilizable(fertilizable)
            if (secondaryDrop !== undefined) newTier.setSecondarySeedDrop(secondaryDrop)
            if (baseDropChance !== undefined) newTier.setBaseSecondaryChance(baseDropChance)
            if (farmlandId)
            {
                newTier.setFarmland(() => {
                    if($BuiltInRegistries)
                    {
                        return $BuiltInRegistries.BLOCK.get($ResourceLocation.parse(farmlandId))
                    }
                    return Java.loadClass('net.minecraft.world.level.block.Blocks').AIR 
                })
            }
            
            newTier.setDisplayName($Component.literal(displayName))
            registryInstance.registerTier(newTier)
            TIERS[`mysticalagriculture:${idStr}`] = newTier
            
            console.info(`[CatJS] Registered Custom Tier: ${idStr} (Value: ${value})`)
        }

        //Tiers
        registerCustomTier(
            '6',                        // ID
            '6',                        // Display Name
            6,                          // Value
            0xD800FF,                   // Color Hex (Cyan)
            'LIGHT_PURPLE',             // ChatFormatting
            null,                       // Farmland Block ID (None in JSON)
            false,                      // Fertilizable
            false,                      // Secondary Drop
            0.0                         // Base Secondary Chance
        )

        registerCustomTier(
            'mystic',                   // ID
            'Mystic',                   // Display Name
            7,                          // Value
            0x00FFFF,                   // Color Hex (Cyan)
            'AQUA',                     // ChatFormatting
            null,                       // Farmland Block ID (None in JSON)
            false,                      // Fertilizable
            false,                      // Secondary Drop
            0.0                         // Base Secondary Chance
        )

        // Tier 8: "Magical"
        registerCustomTier(
            'magical',                  // ID
            'Magical',                  // Display Name
            8,                          // Value
            0xD800FF,                   // Color Hex
            'LIGHT_PURPLE',             // ChatFormatting
            'kubejs:magical_farmland',  // Farmland Block ID
            false,                      // Fertilizable
            false,                      // Secondary Drop
            0.0                         // Base Secondary Chance
        )

        // Tier 9: "Technology"
        registerCustomTier(
            'technology',               // ID
            'Technology',               // Display Name
            9,                          // Value
            0x708090,                   // Color Hex (Slate Gray)
            'GRAY',                     // ChatFormatting
            null,                       // Farmland Block ID (None in JSON)
            false,                      // Fertilizable
            false,                      // Secondary Drop
            0.0                         // Base Secondary Chance
        )

        //We don't care about ingredients here, since we are going to do some manual labour later

        //Tier 1
        registerCustomCrop('salt', 'Salt', 'mysticalagriculture:1', 'mysticalagriculture:resource', 'dust', 0xd5dee0, 'minecraft:barrier', 'mekanism:block_salt')

        //Tier 2
        registerCustomCrop('fluxite', 'Fluxite', 'mysticalagriculture:2', 'mysticalagriculture:resource', 'gem', 0xa66ecb, 'minecraft:barrier')
        registerCustomCrop('force_gem', 'Force Gem', 'mysticalagriculture:2', 'mysticalagriculture:resource', 'gem', 0xf7e922, 'minecraft:barrier')

        //Tier 3
        registerCustomCrop('prosperity', 'Prosperity', 'mysticalagriculture:3', 'mysticalagriculture:resource', 'dust', 0x0092FC, 'minecraft:barrier')
        registerCustomCrop('industrial', 'Industrial', 'mysticalagriculture:3', 'mysticalagriculture:resource', 'ingot', 0xbcc3d4, 'minecraft:barrier')
        registerCustomCrop('plastic', 'Plastic', 'mysticalagriculture:3', 'mysticalagriculture:resource', 'ingot', 0xbcc3d4, 'minecraft:barrier')
        registerCustomCrop('xychorium', 'Xychorium Gem', 'mysticalagriculture:3', 'mysticalagriculture:resource', 'gem', 0x14091F, 'minecraft:barrier')
        registerCustomCrop('arcane', 'Arcane', 'mysticalagriculture:3', 'mysticalagriculture:resource', 'rock', 0xAC32C7, 'minecraft:barrier')

        //Tier 4
        registerCustomCrop('prudentium', 'Prudentium', 'mysticalagriculture:4', 'mysticalagriculture:resource', 'dust', 0x008020, 'minecraft:barrier', 'mysticalagriculture:imperium_block', 'mysticalagriculture:prudentium_essence')
        registerCustomCrop('dark_gem', 'Dark Gem', 'mysticalagriculture:4', 'mysticalagriculture:resource', 'rock', 0x320E63, 'minecraft:barrier', 'minecraft:sculk_catalyst', null, true) // Glint
        registerCustomCrop('entro', 'Entro', 'mysticalagriculture:4', 'mysticalagriculture:resource', 'rock', 0x40F76E, 'minecraft:barrier')

        //Tier 5
        registerCustomCrop('tertium', 'Tertium', 'mysticalagriculture:5', 'mysticalagriculture:resource', 'dust', 0xA73F01, 'minecraft:barrier', 'mysticalagriculture:supremium_block', 'mysticalagriculture:tertium_essence')
        registerCustomCrop('flux', 'Flux', 'mysticalagriculture:5', 'mysticalagriculture:resource', 'face', 0x000000, 'minecraft:barrier', 'fluxnetworks:flux_block')

        //Tier 6
        registerCustomCrop('imperium', 'Imperium', 'mysticalagriculture:6', 'mysticalagriculture:resource', 'dust', 0x0092FC, 'minecraft:barrier', 'mysticalagradditions:insanium_block', 'mysticalagriculture:imperium_essence')
        registerCustomCrop('cognizian', 'Cognizian', 'mysticalagriculture:6', 'mysticalagriculture:resource', 'dust', 0xA73F01, 'minecraft:barrier', null, 'mysticalagriculture:cognizant_dust')

        //Tier Elemental
        registerCustomCrop('darkness', 'Darkness', 'mysticalagriculture:elemental', 'mysticalagriculture:resource', 'dust', 0x000000, 'minecraft:barrier', null, null, true) // Glint
        registerCustomCrop('magic', 'Magic', 'mysticalagriculture:elemental', 'mysticalagriculture:resource', 'dust_gem', 0xAA45ED, 'minecraft:barrier', null, null, true) // Glint
        registerCustomCrop('mystical', 'Mystical', 'mysticalagriculture:elemental', 'mysticalagriculture:resource', 'dust_flame', 0x3DE0DB, 'minecraft:barrier', null, null, true) // Glint
        registerCustomCrop('technology', 'Technology', 'mysticalagriculture:elemental', 'mysticalagriculture:resource', 'dust_ingot', 0xEDC45F, 'minecraft:barrier', null, null, true) // Glint

        //Tier Magical (8)
        registerCustomCrop('supremium', 'Supremium', 'mysticalagriculture:magical', 'mysticalagriculture:resource', 'dust', 0xDF0101, 'minecraft:barrier', 'mysticalagradditions:insanium_block', 'mysticalagriculture:supremium_essence')

        //Tier Technology (9)
        registerCustomCrop('insanium', 'Insanium', 'mysticalagriculture:technology', 'mysticalagriculture:resource', 'dust', 0x640099, 'minecraft:barrier', 'kubejs:magical_block', 'mysticalagradditions:insanium_essence')
        registerCustomCrop('dire', 'Dire Thing', 'mysticalagriculture:technology', 'mysticalagriculture:resource', 'ingot', 0x4ebade, 'minecraft:barrier', 'justdirethings:time_crystal_budding_block')

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
/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/

let $EmiRecipeCategory
let $EmiStack
let $EmiRecipe
let $EmiTexture
let $EmiRecipes
let $EmiComparison

let $Minecraft
let $ItemStack
let $Color
let $Mth
let $ResourceKey
let $Component
let $ResourceLocation

// Hostile Neural Networks Classes
let $HostileNetworks
let $ModelTierRegistry
let $DataModelRegistry
let $DataModelItem

if (Platform.isLoaded("emi") && Platform.isLoaded("hostilenetworks")) {
    $EmiRecipeCategory = Java.loadClass('dev.emi.emi.api.recipe.EmiRecipeCategory')
    $EmiStack = Java.loadClass('dev.emi.emi.api.stack.EmiStack')
    $EmiRecipe = Java.loadClass('dev.emi.emi.api.recipe.EmiRecipe')
    $EmiTexture = Java.loadClass('dev.emi.emi.api.render.EmiTexture')
    $EmiRecipes = Java.loadClass('dev.emi.emi.registry.EmiRecipes')
    $EmiComparison = Java.loadClass('dev.emi.emi.api.stack.Comparison')
    
    $Minecraft = Java.loadClass('net.minecraft.client.Minecraft')
    $ItemStack = Java.loadClass('net.minecraft.world.item.ItemStack')
    $Color = Java.loadClass('dev.shadowsoffire.hostilenetworks.util.Color')
    $Mth = Java.loadClass('net.minecraft.util.Mth')
    $ResourceKey = Java.loadClass('net.minecraft.resources.ResourceKey')
    $Component = Java.loadClass('net.minecraft.network.chat.Component')
    $ResourceLocation = Java.loadClass('net.minecraft.resources.ResourceLocation')

    // HNN Clases específicas
    $HostileNetworks = Java.loadClass('dev.shadowsoffire.hostilenetworks.HostileNetworks')
    $DataModelRegistry = Java.loadClass('dev.shadowsoffire.hostilenetworks.data.DataModelRegistry')
    $ModelTierRegistry = Java.loadClass('dev.shadowsoffire.hostilenetworks.data.ModelTierRegistry')
    $DataModelItem = Java.loadClass('dev.shadowsoffire.hostilenetworks.item.DataModelItem')
}

RecipeViewerEvents.addEntries("item", event => {
    let emiRegistry = global.emiRegistry

    if(Platform.isLoaded("emi") && emiRegistry && Platform.isLoaded("hostilenetworks"))
    {
        try
        {
            let catIdStr = "hostilenetworks:sim_chamber"
            let existingCategory = $EmiRecipes.categories.toArray().find(c => c.getId().toString() == catIdStr)

            if(existingCategory)
            {
                console.info(`[CatJS] JEI integration detected or Category already exists. Skipping script.`)
                return;
            }

            //Sim
            let catId = new $ResourceLocation("hostilenetworks", "sim_chamber")
            let iconStack = new $ItemStack(Item.of("hostilenetworks:sim_chamber").getItem())
            let catIcon = $EmiStack["of(net.minecraft.world.item.ItemStack)"](iconStack)
            let simCategory = new $EmiRecipeCategory(catId, catIcon, catIcon)
            let textureLoc = new $ResourceLocation("hostilenetworks", "textures/jei/sim_chamber.png")
            let bgTexture = new $EmiTexture(textureLoc, 0, 0, 116, 43, 116, 43, 256, 256)
            emiRegistry.addCategory(simCategory)
            emiRegistry.addWorkstation(simCategory, catIcon)

            //Loot
            let lootFabId = new $ResourceLocation("hostilenetworks", "loot_fabricator")
            let lootFabIcon = $EmiStack["of(net.minecraft.world.item.ItemStack)"](new $ItemStack(Item.of("hostilenetworks:loot_fabricator").getItem()))
            let lootFabCategory = new $EmiRecipeCategory(lootFabId, lootFabIcon, lootFabIcon)
            let lootFabTextureLoc = new $ResourceLocation("hostilenetworks", "textures/jei/loot_fabricator.png")
            let lootFabBg = new $EmiTexture(lootFabTextureLoc, 0, 0, 103, 30, 103, 30, 256, 256)
            emiRegistry.addCategory(lootFabCategory)
            emiRegistry.addWorkstation(lootFabCategory, lootFabIcon)

            let createHnnRecipe = (dataModel, resourceId) => {

                let rawItem = Item.of("hostilenetworks:data_model").getItem()
                let rawStack = new $ItemStack(rawItem)
                $DataModelItem.setStoredModel(rawStack, dataModel)

                //Inputs
                let emiModelInput = $EmiStack["of(net.minecraft.world.item.ItemStack)"](rawStack)
                let emiInput = $EmiStack["of(net.minecraft.world.item.crafting.Ingredient)"](dataModel.input())

                // Outputs                
                let emiBaseOutput = $EmiStack["of(net.minecraft.world.item.ItemStack)"](dataModel.baseDrop())
                let emiPredictionOutput = $EmiStack["of(net.minecraft.world.item.ItemStack)"](dataModel.getPredictionDrop())

                emiModelInput.comparison($EmiComparison.compareComponents())
                emiPredictionOutput.comparison($EmiComparison.compareComponents())

                // Animation
                let animState = {
                    lastTierChange: 0,
                    currentTier: $ModelTierRegistry.getMinTier()
                }

                return new $EmiRecipe({
                    getCategory: () => simCategory,
                    getId: () => new $ResourceLocation("kubejs", "hnn_sim_" + resourceId.getPath()),
                    getInputs: () => [emiInput],
                    getOutputs: () => [emiBaseOutput, emiPredictionOutput],
                    getDisplayWidth: () => 116,
                    getDisplayHeight: () => 43,
                    addWidgets: function(widgets) {
                        
                        // Background
                        widgets.addTexture(bgTexture, 0, 0)

                        // Slots
                        widgets.addSlot(emiModelInput, 3, 3).drawBack(false)
                        widgets.addSlot(emiInput, 27, 3).drawBack(false)
                        widgets.addSlot(emiBaseOutput, 95, 3).drawBack(false).recipeContext(this)
                        widgets.addSlot(emiPredictionOutput, 65, 25).drawBack(false).recipeContext(this)
                        widgets.addDrawable(0, 0, 115, 42, (guiGraphics, mouseX, mouseY, delta) => {
                            let font = $Minecraft.getInstance().font
                            let now = Date.now()
                            let progress = (now % 2000) / 2000.0
                            let barWidth = $Mth.ceil(35.0 * progress)
                            
                            guiGraphics.blit(textureLoc, 52, 9, 0, 43, barWidth, 6, 256, 256)

                            if(now - animState.lastTierChange > 2500)
                            {
                                let nextTier
                                if(animState.currentTier == $ModelTierRegistry.getMaxTier())
                                { 
                                    nextTier = $ModelTierRegistry.getMinTier()
                                }
                                else
                                {
                                    nextTier = $ModelTierRegistry.next(animState.currentTier)
                                }
                                animState.currentTier = nextTier
                                animState.lastTierChange = now
                            }

                            // Tier text
                            let rawTierName = animState.currentTier.name().replace("_", " ")
                            let capitalizedName = rawTierName.substring(0, 1).toUpperCase() + rawTierName.substring(1)
                            let tierComp = $Component.literal(capitalizedName)
                            let textWidth = font.width(tierComp)
                            let colorInt = animState.currentTier.color().getValue()

                            guiGraphics["drawString(net.minecraft.client.gui.Font,net.minecraft.network.chat.Component,int,int,int,boolean)"](
                                font, 
                                tierComp, 
                                Math.floor(33 - (textWidth / 2)), 
                                30, 
                                colorInt, 
                                false
                            )

                            // % text
                            let accuracy = animState.currentTier.accuracy()
                            let accString = (accuracy * 100).toFixed(0) + "%" 
                            
                            let accWidth = font.width(accString)
                            guiGraphics["drawString(net.minecraft.client.gui.Font,java.lang.String,float,float,int,boolean)"](
                                font, 
                                accString, 
                                114 - accWidth, 
                                30, 
                                0xFFFFFF, 
                                true
                            )
                        })
                    }
                })
            }

            let createLootFabRecipe = (dataModel, resourceId, outputStack, index) => {                
                let emiInput = $EmiStack["of(net.minecraft.world.item.ItemStack)"](dataModel.getPredictionDrop())
                let emiOutput = $EmiStack["of(net.minecraft.world.item.ItemStack)"](outputStack)

                emiInput.comparison($EmiComparison.compareComponents())

                return new $EmiRecipe({
                    getCategory: () => lootFabCategory,
                    getId: () => new $ResourceLocation("kubejs", `loot_${resourceId.getPath()}_${index}`),
                    getInputs: () => [emiInput],
                    getOutputs: () => [emiOutput],
                    getDisplayWidth: () => 103,
                    getDisplayHeight: () => 30,
                    addWidgets: function(widgets) {
                        widgets.addTexture(lootFabBg, 0, 0)
                        widgets.addSlot(emiInput, 8, 6).drawBack(false)
                        widgets.addSlot(emiOutput, 78, 6).drawBack(false).recipeContext(this)
                        widgets.addDrawable(0, 0, 103, 30, (guiGraphics, mouseX, mouseY, delta) => {
                            let now = Date.now()
                            let progress = (now % 2000) / 2000.0
                            let width = $Mth.ceil(36.0 * progress)
                            guiGraphics.blit(lootFabTextureLoc, 34, 12, 0, 30, width, 6, 256, 256)
                        })
                    }
                })
            }

            let registryInstance = $DataModelRegistry.INSTANCE
            let keys = registryInstance.getKeys() 
            keys.forEach(key => {
                let modelData = registryInstance.getValue(key)
                if(modelData)
                {
                    emiRegistry.addRecipe(createHnnRecipe(modelData, key))
                    let drops = modelData.fabDrops()
                    for (let i = 0; i < drops.size(); i++)
                    {
                        let dropStack = drops.get(i)
                        if(!dropStack.isEmpty())
                        {
                            emiRegistry.addRecipe(createLootFabRecipe(modelData, key, dropStack, i))
                        }
                    }
                }
            })

            console.info(`[CatJS] Added HNN recipes to EMI successfully.`)

        }
        catch(e)
        {
            console.error("[CatJS] Error adding HNN recipes to EMI: " + e)
        }
    }
})

/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
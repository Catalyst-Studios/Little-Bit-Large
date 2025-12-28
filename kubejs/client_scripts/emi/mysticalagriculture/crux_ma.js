/* This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
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
let $ResourceLocation
let $BuiltInRegistries

// Mystical Agriculture Classes
let $MysticalAgriculture
let $CropRegistry
let $ModItems

if (Platform.isLoaded("emi") && Platform.isLoaded("mysticalagriculture")) {
    $EmiRecipeCategory = Java.loadClass('dev.emi.emi.api.recipe.EmiRecipeCategory')
    $EmiStack = Java.loadClass('dev.emi.emi.api.stack.EmiStack')
    $EmiRecipe = Java.loadClass('dev.emi.emi.api.recipe.EmiRecipe')
    $EmiTexture = Java.loadClass('dev.emi.emi.api.render.EmiTexture')
    $EmiRecipes = Java.loadClass('dev.emi.emi.registry.EmiRecipes')
    $EmiComparison = Java.loadClass('dev.emi.emi.api.stack.Comparison')
    
    $Minecraft = Java.loadClass('net.minecraft.client.Minecraft')
    $ItemStack = Java.loadClass('net.minecraft.world.item.ItemStack')
    $ResourceLocation = Java.loadClass('net.minecraft.resources.ResourceLocation')
    $BuiltInRegistries = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries')

    // MA Clases específicas
    $MysticalAgriculture = Java.loadClass('com.blakebr0.mysticalagriculture.MysticalAgriculture')
    $CropRegistry = Java.loadClass('com.blakebr0.mysticalagriculture.registry.CropRegistry')
    $ModItems = Java.loadClass('com.blakebr0.mysticalagriculture.init.ModItems')
}

RecipeViewerEvents.addEntries("item", event => {
    let emiRegistry = global.emiRegistry

    if(Platform.isLoaded("emi") && emiRegistry && Platform.isLoaded("mysticalagriculture"))
    {
        try
        {
            let catIdStr = "mysticalagriculture:crux"
            let existingCategory = $EmiRecipes.categories.toArray().find(c => c.getId().toString() == catIdStr)

            if(existingCategory)
            {
                console.info(`[CatJS] JEI integration detected or Crux Category already exists. Skipping script.`)
                return;
            }

            let catId = new $ResourceLocation("mysticalagriculture", "crux")
            let iconStack = new $ItemStack($ModItems.PROSPERITY_SEED_BASE.get())
            let catIcon = $EmiStack["of(net.minecraft.world.item.ItemStack)"](iconStack)
            let cruxCategory = new $EmiRecipeCategory(catId, catIcon, catIcon)
            let textureLoc = new $ResourceLocation("mysticalagriculture", "textures/jei/crux.png")
            let bgTexture = new $EmiTexture(textureLoc, 0, 0, 80, 54, 80, 54, 256, 256)

            emiRegistry.addCategory(cruxCategory)

            let createCruxRecipe = (crop) => {
                let cropId = crop.getId()
                let seedItem = crop.getSeedsItem()
                let essenceItem = crop.getEssenceItem()
                let cruxItem = crop.getCruxBlock()

                if(typeof cruxItem === "function")
                {
                    cruxItem = cruxItem.get()
                }

                let tier = crop.getTier()
                let soilBlock = tier.getFarmland()
                
                if(typeof soilBlock === "function")
                {
                    soilBlock = soilBlock.get()
                }

                if(!cruxItem) return null
                if(!soilBlock) return null
                let blockId = $BuiltInRegistries.BLOCK.getKey(soilBlock).toString()
                if(blockId == "minecraft:air" || blockId == "kubejs:magical_farmland") return null;
                
                let seedStack = new $ItemStack(seedItem)
                let soilStack = new $ItemStack(soilBlock)
                let cruxStack = new $ItemStack(cruxItem)
                let essenceStack = new $ItemStack(essenceItem)

                // Crear EmiStacks
                let emiSeed = $EmiStack["of(net.minecraft.world.item.ItemStack)"](seedStack)
                let emiSoil = $EmiStack["of(net.minecraft.world.item.ItemStack)"](soilStack)
                let emiCrux = $EmiStack["of(net.minecraft.world.item.ItemStack)"](cruxStack)
                let emiOutput = $EmiStack["of(net.minecraft.world.item.ItemStack)"](essenceStack)

                return new $EmiRecipe({
                    getCategory: () => cruxCategory,
                    getId: () => new $ResourceLocation("kubejs", "ma_crux_" + cropId.getPath()),
                    getInputs: () => [emiSeed, emiSoil, emiCrux],
                    getOutputs: () => [emiOutput],
                    getDisplayWidth: () => 80,
                    getDisplayHeight: () => 54,
                    addWidgets: function(widgets) {
                        widgets.addTexture(bgTexture, 0, 0)
                        widgets.addSlot(emiSeed, 0, 0).drawBack(false)
                        widgets.addSlot(emiSoil, 0, 18).drawBack(false)
                        widgets.addSlot(emiCrux, 0, 36).drawBack(false)
                        widgets.addSlot(emiOutput, 58, 19).drawBack(false).recipeContext(this)
                    }
                })
            }
            let registryInstance = $CropRegistry.getInstance()
            let crops = registryInstance.getCrops()
            crops.forEach(crop => {
                let cruxItem = crop.getCruxBlock()
                if(cruxItem && !new $ItemStack(cruxItem).isEmpty() && crop.isEnabled())
                {
                    try
                    {
                        let recipe = createCruxRecipe(crop)
                        if(recipe) emiRegistry.addRecipe(recipe)
                    }
                    catch(e)
                    {
                        console.warn(`[CatJS] Failed to create Crux recipe for ${crop.getId()}: ${e}`)
                    }
                }
            })

            console.info(`[CatJS] Added Mystical Agriculture Crux recipes to EMI successfully.`)

        }
        catch(e)
        {
            console.error("[CatJS] Error adding MA Crux recipes to EMI: " + e)
        }
    }
})
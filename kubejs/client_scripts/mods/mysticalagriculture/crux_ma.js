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

RecipeViewerEvents.addEntries("item", catalyst => {
    if(!Platform.isLoaded("emi"))
    {
        return;
    }

    if(!Platform.isLoaded("mysticalagriculture"))
    {
        return;
    }

    let emiRegistry = global.emiRegistry
    if(!emiRegistry)
    {
        return;
    }

    let catId = $ResourceLocation.fromNamespaceAndPath("catalyst", "crux")
    let iconStack = new $ItemStack($ModItems.PROSPERITY_SEED_BASE.get())
    let catIcon = $EmiStack["of(net.minecraft.world.item.ItemStack)"](iconStack)
    let cruxCategory = new $EmiRecipeCategory(catId, catIcon, catIcon)
    let textureLoc = $ResourceLocation.fromNamespaceAndPath("mysticalagriculture", "textures/jei/crux.png")
    let bgTexture = new $EmiTexture(textureLoc, 0, 0, 80, 54, 80, 54, 256, 256)

    emiRegistry.addCategory(cruxCategory)

    let createCruxRecipe = (crop) => {
        let cruxItem = crop.getCruxBlock()
        if(typeof cruxItem === "function")
        {
            cruxItem = cruxItem.get()
        }

        if(!cruxItem)
        {
            return null;
        }

        let cruxStack = new $ItemStack(cruxItem)
        if(cruxStack.isEmpty())
        {
            return null;
        }

        let tier = crop.getTier()
        let soilBlock = tier.getFarmland()
        if(typeof soilBlock === "function")
        {
            soilBlock = soilBlock.get()
        }

        if(!soilBlock)
        {
            return null;
        }

        let blockId = $BuiltInRegistries.BLOCK.getKey(soilBlock).toString()
        if(blockId == "minecraft:air" || blockId == "catalystcore:magical_farmland")
        {
            return null;
        }

        let cropId = crop.getId()
        let seedItem = crop.getSeedsItem()
        let essenceItem = crop.getEssenceItem()

        let seedStack = new $ItemStack(seedItem)
        let soilStack = new $ItemStack(soilBlock)
        let essenceStack = new $ItemStack(essenceItem)

        let emiSeed = $EmiStack["of(net.minecraft.world.item.ItemStack)"](seedStack)
        let emiSoil = $EmiStack["of(net.minecraft.world.item.ItemStack)"](soilStack)
        let emiCrux = $EmiStack["of(net.minecraft.world.item.ItemStack)"](cruxStack)
        let emiOutput = $EmiStack["of(net.minecraft.world.item.ItemStack)"](essenceStack)

        return new $EmiRecipe({
            getCategory: () => cruxCategory,
            getId: () => $ResourceLocation.fromNamespaceAndPath("kubejs", "ma_crux_" + cropId.getPath()),
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
    if(!registryInstance)
    {
        return;
    }

    let crops = registryInstance.getCrops()
    crops.forEach(crop => {
        if(!crop.isEnabled())
        {
            return;
        }

        let recipe = createCruxRecipe(crop)
        if(recipe)
        {
            emiRegistry.addRecipe(recipe)
        }
    })

    console.info("[CatJS] Added Mystical Agriculture Crux recipes to EMI successfully.")
})
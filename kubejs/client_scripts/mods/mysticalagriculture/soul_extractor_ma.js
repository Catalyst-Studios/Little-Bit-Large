/* This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/

let $EmiRecipeCategory
let $EmiStack
let $EmiRecipe
let $EmiTexture
let $EmiRecipes
let $EmiIngredient

let $Minecraft
let $ItemStack
let $ResourceLocation
let $BuiltInRegistries
let $Mth

let $MysticalAgriculture
let $ModBlocks

if (Platform.isLoaded("emi") && Platform.isLoaded("mysticalagriculture")) {
    $EmiRecipeCategory = Java.loadClass('dev.emi.emi.api.recipe.EmiRecipeCategory')
    $EmiStack = Java.loadClass('dev.emi.emi.api.stack.EmiStack')
    $EmiRecipe = Java.loadClass('dev.emi.emi.api.recipe.EmiRecipe')
    $EmiTexture = Java.loadClass('dev.emi.emi.api.render.EmiTexture')
    $EmiRecipes = Java.loadClass('dev.emi.emi.registry.EmiRecipes')
    $EmiIngredient = Java.loadClass('dev.emi.emi.api.stack.EmiIngredient')
    
    $Minecraft = Java.loadClass('net.minecraft.client.Minecraft')
    $ItemStack = Java.loadClass('net.minecraft.world.item.ItemStack')
    $ResourceLocation = Java.loadClass('net.minecraft.resources.ResourceLocation')
    $BuiltInRegistries = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries')
    $Mth = Java.loadClass('net.minecraft.util.Mth')

    $MysticalAgriculture = Java.loadClass('com.blakebr0.mysticalagriculture.MysticalAgriculture')
    $ModBlocks = Java.loadClass('com.blakebr0.mysticalagriculture.init.ModBlocks')
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

    let catId = $ResourceLocation.fromNamespaceAndPath("catalyst", "soul_extractor")
    let maRecipeTypeLoc = $ResourceLocation.fromNamespaceAndPath("mysticalagriculture", "soul_extraction")

    let workstationItem = $ModBlocks.SOUL_EXTRACTOR.get()
    let iconStack = new $ItemStack(workstationItem)
    let catIcon = $EmiStack["of(net.minecraft.world.item.ItemStack)"](iconStack)

    let soulExtractorCategory = new $EmiRecipeCategory(catId, catIcon, catIcon)
    let textureLoc = $ResourceLocation.fromNamespaceAndPath("mysticalagriculture", "textures/jei/reprocessor.png")
    let bgTexture = new $EmiTexture(textureLoc, 0, 0, 82, 26, 82, 26, 256, 256)

    emiRegistry.addCategory(soulExtractorCategory)
    emiRegistry.addWorkstation(soulExtractorCategory, catIcon)

    let recipeManager = emiRegistry.getRecipeManager()
    let soulExtractorType = $BuiltInRegistries.RECIPE_TYPE.get(maRecipeTypeLoc)

    if(!soulExtractorType)
    {
        console.warn("[CatJS] RecipeType not found: mysticalagriculture:soul_extraction")
        return;
    }

    let soulExtractorRecipes = recipeManager.getAllRecipesFor(soulExtractorType).toArray()
    let registryAccess = $Minecraft.getInstance().level.registryAccess()

    soulExtractorRecipes.forEach(recipeHolder => {
        let recipe = recipeHolder.value()
        let id = recipeHolder.id()

        let rawInputs = recipe.getIngredients()
        if(rawInputs.isEmpty())
        {
            return;
        }

        let outputStack = recipe.getResultItem(registryAccess)
        let emiInput = $EmiIngredient["of(net.minecraft.world.item.crafting.Ingredient)"](rawInputs.get(0))
        let emiOutput = $EmiStack["of(net.minecraft.world.item.ItemStack)"](outputStack)

        let emiRecipe = new $EmiRecipe({
            getCategory: () => soulExtractorCategory,
            getId: () => id,
            getInputs: () => [emiInput],
            getOutputs: () => [emiOutput],
            getDisplayWidth: () => 82,
            getDisplayHeight: () => 26,
            addWidgets: function(widgets) {
                widgets.addTexture(bgTexture, 0, 0)
                widgets.addSlot(emiInput, 0, 4).drawBack(false)
                widgets.addSlot(emiOutput, 60, 4).drawBack(false).recipeContext(this)
                widgets.addDrawable(0, 0, 81, 25, (guiGraphics, mouseX, mouseY, delta) => {
                    let now = Date.now()
                    let progress = (now % 5000) / 5000.0
                    let currentWidth = $Mth.ceil(24.0 * progress)
                    guiGraphics.blit(textureLoc, 24, 4, 85, 0, currentWidth, 17, 256, 256)
                })
            }
        })

        emiRegistry.addRecipe(emiRecipe)
    })

    console.info("[CatJS] Added MA Soul Extractor recipes to EMI")
})
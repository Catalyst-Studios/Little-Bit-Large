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

RecipeViewerEvents.addEntries("item", event => {
    let emiRegistry = global.emiRegistry

    if(Platform.isLoaded("emi") && emiRegistry && Platform.isLoaded("mysticalagriculture"))
    {
        try
        {
            let catIdStr = "mysticalagriculture:soul_extractor"
            if ($EmiRecipes.categories.toArray().some(c => c.getId().toString() == catIdStr))
            {
                console.info(`[CatJS] Soul Extractor Category already exists. Skipping.`)
                return;
            }

            let catId = new $ResourceLocation("mysticalagriculture", "soul_extractor")
            let workstationItem = $ModBlocks.SOUL_EXTRACTOR.get()
            let iconStack = new $ItemStack(workstationItem)
            let catIcon = $EmiStack["of(net.minecraft.world.item.ItemStack)"](iconStack)
            let soulExtractorCategory = new $EmiRecipeCategory(catId, catIcon, catIcon)
            let textureLoc = new $ResourceLocation("mysticalagriculture", "textures/jei/reprocessor.png")
            let bgTexture = new $EmiTexture(textureLoc, 0, 0, 82, 26, 82, 26, 256, 256)

            emiRegistry.addCategory(soulExtractorCategory)
            emiRegistry.addWorkstation(soulExtractorCategory, catIcon)

            let recipeManager = emiRegistry.getRecipeManager()
            let allRecipes = recipeManager.getRecipes().toArray()
            let registryAccess = $Minecraft.getInstance().level.registryAccess()

            let recipes_count = 0;
            let recipes_total = 0;
            allRecipes.forEach(recipeHolder => {
                try {
                    let recipe = recipeHolder.value()
                    let type = recipe.getType()
                    let typeId = $BuiltInRegistries.RECIPE_TYPE.getKey(type)
                    recipes_total++;
                    
                    if (typeId && typeId.toString() === "mysticalagriculture:soul_extraction") {
                        let id = recipeHolder.id()
                        recipes_count++

                        // Inputs & Outputs
                        let rawInputs = recipe.getIngredients()

                        if(rawInputs.size() === 0)
                        {
                            console.warn("[CatJS DEBUG] Found invalid recipe, skipping: " + id)
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
                    }
                }
                catch(err)
                {
                    console.warn(`[CatJS] Error processing Soul Extractor recipe ${recipeHolder.id()}: ${err}`)
                }
            })
            console.info(`[CatJS] Added MA Soul Extractor recipes to EMI`)
        }
        catch(e)
        {
            console.error("[CatJS] Error adding MA Soul Extractor recipes to EMI: " + e)
        }
    }
})
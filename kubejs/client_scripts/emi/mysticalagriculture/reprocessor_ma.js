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
let $Items
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
    $Items = Java.loadClass('net.minecraft.world.item.Items')
    $ResourceLocation = Java.loadClass('net.minecraft.resources.ResourceLocation')
    $BuiltInRegistries = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries')
    $Mth = Java.loadClass('net.minecraft.util.Mth')

    $MysticalAgriculture = Java.loadClass('com.blakebr0.mysticalagriculture.MysticalAgriculture')
    $ModBlocks = Java.loadClass('com.blakebr0.mysticalagriculture.init.ModBlocks')
}

RecipeViewerEvents.addEntries("item", catalyst => {
    let emiRegistry = global.emiRegistry

    if(Platform.isLoaded("emi") && emiRegistry && Platform.isLoaded("mysticalagriculture"))
    {
        try
        {
            let catIdStr = "mysticalagriculture:reprocessor"
            if ($EmiRecipes.categories.toArray().some(c => c.getId().toString() == catIdStr))
            {
                console.info(`[CatJS] JEI integration detected or Respawner Category already exists. Skipping script.`)
                return;
            }

            let catId = new $ResourceLocation("mysticalagriculture", "reprocessor")
            let workstationItem = $ModBlocks.REPROCESSOR.get()
            
            let iconStack = new $ItemStack(workstationItem)
            let catIcon = $EmiStack["of(net.minecraft.world.item.ItemStack)"](iconStack)
            let reprocessorCategory = new $EmiRecipeCategory(catId, catIcon, catIcon)
            let textureLoc = new $ResourceLocation("mysticalagriculture", "textures/jei/reprocessor.png")
            let bgTexture = new $EmiTexture(textureLoc, 0, 0, 82, 26, 82, 26, 256, 256)

            emiRegistry.addCategory(reprocessorCategory)
            emiRegistry.addWorkstation(reprocessorCategory, catIcon)

            let recipeManager = emiRegistry.getRecipeManager()
            let reprocessorType = $BuiltInRegistries.RECIPE_TYPE.get(catId)

            if(!reprocessorType)
            {
                console.warn("[CatJS] RecipeType not found: mysticalagriculture:reprocessor")
                return;
            }

            let reprocessorRecipes = recipeManager.getAllRecipesFor(reprocessorType).toArray()
            let registryAccess = $Minecraft.getInstance().level.registryAccess()
            reprocessorRecipes.forEach(holder => {
                try {
                    let recipe = holder.value()
                    let id = holder.id()

                    let rawInputs = recipe.getIngredients()
                    if (rawInputs.isEmpty()) return;

                    let outputStack = recipe.getResultItem(registryAccess)
                    let emiInput = $EmiIngredient["of(net.minecraft.world.item.crafting.Ingredient)"](rawInputs.get(0))
                    let emiOutput = $EmiStack["of(net.minecraft.world.item.ItemStack)"](outputStack)

                    let emiRecipe = new $EmiRecipe({
                        getCategory: () => reprocessorCategory,
                        getId: () => id,
                        getInputs: () => [emiInput],
                        getOutputs: () => [emiOutput],
                        getDisplayWidth: () => 82,
                        getDisplayHeight: () => 26,
                        addWidgets: function(widgets) {
                            widgets.addTexture(bgTexture, 0, 0)
                            widgets.addSlot(emiInput, 0, 4).drawBack(false)
                            widgets.addSlot(emiOutput, 60, 4).drawBack(false).recipeContext(this)
                            widgets.addDrawable(0, 0, 82, 26, (guiGraphics, mouseX, mouseY, delta) => {
                                let now = Date.now()
                                let progress = (now % 5000) / 5000.0
                                let currentWidth = $Mth.ceil(24.0 * progress)
                                guiGraphics.blit(textureLoc, 24, 4, 85, 0, currentWidth, 17, 256, 256)
                            })
                        }
                    })

                    emiRegistry.addRecipe(emiRecipe)
                }
                catch(err)
                {
                    console.warn(`[CatJS] Error processing Reprocessor recipe ${holder.id()}: ${err}`)
                }
            })

            console.info(`[CatJS] Added MA Reprocessor recipes to EMI`)
        }
        catch(e)
        {
            console.error("[CatJS] Error adding MA Reprocessor recipes to EMI: " + e)
        }
    }
})
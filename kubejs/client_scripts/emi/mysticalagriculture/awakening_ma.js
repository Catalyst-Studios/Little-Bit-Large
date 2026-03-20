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

    $MysticalAgriculture = Java.loadClass('com.blakebr0.mysticalagriculture.MysticalAgriculture')
    $ModBlocks = Java.loadClass('com.blakebr0.mysticalagriculture.init.ModBlocks')
}

const AWAKENING_SLOTS = [
    {x: 7, y: 7},   // 0: Arriba Izquierda
    {x: 33, y: 1},  // 1: Arriba
    {x: 59, y: 7},  // 2: Arriba Derecha
    {x: 65, y: 33}, // 3: Derecha
    {x: 59, y: 59}, // 4: Abajo Derecha
    {x: 33, y: 64}, // 5: Abajo
    {x: 7, y: 59},  // 6: Abajo Izquierda
    {x: 1, y: 33}   // 7: Izquierda
]

RecipeViewerEvents.addEntries("item", catalyst => {
    let emiRegistry = global.emiRegistry

    if(Platform.isLoaded("emi") && emiRegistry && Platform.isLoaded("mysticalagriculture"))
    {
        try
        {
            let catIdStr = "mysticalagriculture:awakening"
            if ($EmiRecipes.categories.toArray().some(c => c.getId().toString() == catIdStr))
            {
                console.info(`[CatJS] JEI integration detected or Awakening Category already exists. Skipping script.`)
                return;
            }

            let catId = new $ResourceLocation("mysticalagriculture", "awakening")
            let iconStack = new $ItemStack($ModBlocks.AWAKENING_ALTAR.get())
            let catIcon = $EmiStack["of(net.minecraft.world.item.ItemStack)"](iconStack)
            let awakeningCategory = new $EmiRecipeCategory(catId, catIcon, catIcon)
            let textureLoc = new $ResourceLocation("mysticalagriculture", "textures/jei/infusion.png")
            let bgTexture = new $EmiTexture(textureLoc, 0, 0, 144, 81, 144, 81, 256, 256)

            emiRegistry.addCategory(awakeningCategory)

            let altarWorkstation = $EmiStack["of(net.minecraft.world.item.ItemStack)"](new $ItemStack($ModBlocks.AWAKENING_ALTAR.get()))
            let pedestalWorkstation = $EmiStack["of(net.minecraft.world.item.ItemStack)"](new $ItemStack($ModBlocks.AWAKENING_PEDESTAL.get()))
                            
            emiRegistry.addWorkstation(awakeningCategory, altarWorkstation)
            emiRegistry.addWorkstation(awakeningCategory, pedestalWorkstation)

            let recipeManager = emiRegistry.getRecipeManager()
            let awakeningType = $BuiltInRegistries.RECIPE_TYPE.get(catId)
            if(!awakeningType)
            {
                console.warn("[CatJS] RecipeType not found: mysticalagriculture:awakening")
                return;
            }

            let awakeningRecipes = recipeManager.getAllRecipesFor(awakeningType).toArray()
            let registryAccess = $Minecraft.getInstance().level.registryAccess()

            let barrierItem = $BuiltInRegistries.ITEM.get(new $ResourceLocation("minecraft", "barrier"))
            let barrierStack = new $ItemStack(barrierItem)

            awakeningRecipes.forEach(recipeHolder => {
                try {
                    let recipe = recipeHolder.value()
                    let id = recipeHolder.id()
                    let altarInput = recipe.getAltarIngredient()
                    if (altarInput.test(barrierStack)) return;

                    let rawIngredients = recipe.getIngredients()
                    let rawEssences = recipe.getEssences()

                    let ringInputs = []
                    let hasBarrier = false
                    for(let i = 0; i < rawIngredients.size(); i++)
                    {
                        if(i % 2 === 0)
                        {
                            let essenceIndex = Math.floor(i / 2)
                            let essenceStack = rawEssences.get(essenceIndex)
                            ringInputs.push($EmiStack["of(net.minecraft.world.item.ItemStack)"](essenceStack))
                        }
                        else
                        {
                            let ing = rawIngredients.get(i)
                            if(ing.test(barrierStack))
                            {
                                hasBarrier = true;
                                break;
                            }
                            ringInputs.push($EmiIngredient["of(net.minecraft.world.item.crafting.Ingredient)"](ing))
                        }
                    }

                    if (hasBarrier) return;

                    let outputStack = recipe.getResultItem(registryAccess)
                    let emiAltarInput = $EmiIngredient["of(net.minecraft.world.item.crafting.Ingredient)"](altarInput)
                    let emiOutput = $EmiStack["of(net.minecraft.world.item.ItemStack)"](outputStack)
                    let allEmiInputs = [emiAltarInput].concat(ringInputs)

                    let emiRecipe = new $EmiRecipe({
                        getCategory: () => awakeningCategory,
                        getId: () => id,
                        getInputs: () => allEmiInputs,
                        getOutputs: () => [emiOutput],
                        getDisplayWidth: () => 144,
                        getDisplayHeight: () => 81,
                        addWidgets: function(widgets) {
                            widgets.addTexture(bgTexture, 0, 0)
                            widgets.addSlot(emiAltarInput, 33, 33).drawBack(false)
                            widgets.addSlot(emiOutput, 122, 32).drawBack(false).recipeContext(this)
                            for(let i = 0; i < ringInputs.length; i++)
                            {
                                if(i < AWAKENING_SLOTS.length)
                                {
                                    let pos = AWAKENING_SLOTS[i]
                                    widgets.addSlot(ringInputs[i], pos.x-1, pos.y-1).drawBack(false)
                                }
                            }
                        }
                    })

                    emiRegistry.addRecipe(emiRecipe)
                }
                catch(err)
                {
                    console.warn(`[CatJS] Error processing awakening recipe ${recipeHolder.id()}: ${err}`)
                }
            })

            console.info(`[CatJS] Added MA Awakening recipes to EMI`)
        }
        catch(e)
        {
            console.error("[CatJS] Error adding MA Awakening recipes to EMI: " + e)
        }
    }
})
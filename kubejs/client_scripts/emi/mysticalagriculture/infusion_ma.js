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

const SLOT_POS = {
    NORTH_WEST: {x: 6, y: 6},
    NORTH:      {x: 32, y: 0},
    NORTH_EAST: {x: 58, y: 6},
    EAST:       {x: 64, y: 32},
    SOUTH_EAST: {x: 58, y: 58},
    SOUTH:      {x: 32, y: 63},
    SOUTH_WEST: {x: 6, y: 58},
    WEST:       {x: 0, y: 32}
}

RecipeViewerEvents.addEntries("item", event => {
    let emiRegistry = global.emiRegistry

    if(Platform.isLoaded("emi") && emiRegistry && Platform.isLoaded("mysticalagriculture"))
    {
        try
        {
            let catIdStr = "mysticalagriculture:infusion"
            if ($EmiRecipes.categories.toArray().some(c => c.getId().toString() == catIdStr))
            {
                console.info(`[CatJS] JEI integration detected or Infusion Category already exists. Skipping script.`)
                return;
            }

            let catId = new $ResourceLocation("mysticalagriculture", "infusion")
            let iconStack = new $ItemStack($ModBlocks.INFUSION_ALTAR.get())
            let catIcon = $EmiStack["of(net.minecraft.world.item.ItemStack)"](iconStack)
            let infusionCategory = new $EmiRecipeCategory(catId, catIcon, catIcon)
            let textureLoc = new $ResourceLocation("mysticalagriculture", "textures/jei/infusion.png")
            let bgTexture = new $EmiTexture(textureLoc, 0, 0, 144, 81, 144, 81, 256, 256)

            emiRegistry.addCategory(infusionCategory)

            let altarWorkstation = $EmiStack["of(net.minecraft.world.item.ItemStack)"](new $ItemStack($ModBlocks.INFUSION_ALTAR.get()))
            let pedestalWorkstation = $EmiStack["of(net.minecraft.world.item.ItemStack)"](new $ItemStack($ModBlocks.INFUSION_PEDESTAL.get()))
                            
            emiRegistry.addWorkstation(infusionCategory, altarWorkstation)
            emiRegistry.addWorkstation(infusionCategory, pedestalWorkstation)

            let recipeManager = emiRegistry.getRecipeManager()
            let infusionType = $BuiltInRegistries.RECIPE_TYPE.get(catId)

            if(!infusionType)
            {
                console.warn("[CatJS] RecipeType not found: mysticalagriculture:infusion")
                return;
            }

            let infusionRecipes = recipeManager.getAllRecipesFor(infusionType)

            let registryAccess = $Minecraft.getInstance().level.registryAccess()
            let barrierItem = $BuiltInRegistries.ITEM.get(new $ResourceLocation("minecraft", "barrier"))
            let barrierStack = new $ItemStack(barrierItem)

            infusionRecipes.forEach(recipeHolder => {
                try {
                    let recipe = recipeHolder.value()
                    let id = recipeHolder.id()

                    let altarInput = recipe.getAltarIngredient()
                    if(altarInput.test(barrierStack)) return;

                    let rawInputs = recipe.getIngredients()
                    let activeInputs = []
                    let isBarrier = false

                    for(let i = 0; i < rawInputs.size(); i++)
                    {
                        let ing = rawInputs.get(i)
                        if (ing.isEmpty()) continue;

                        if(ing.test(barrierStack))
                        {
                            isBarrier = true;
                            break;
                        }
                        activeInputs.push($EmiIngredient["of(net.minecraft.world.item.crafting.Ingredient)"](ing))
                    }

                    if (isBarrier) return;

                    let outputStack = recipe.getResultItem(registryAccess)
                    let emiAltarInput = $EmiIngredient["of(net.minecraft.world.item.crafting.Ingredient)"](altarInput)
                    let emiOutput = $EmiStack["of(net.minecraft.world.item.ItemStack)"](outputStack)                    

                    let allEmiInputs = [emiAltarInput].concat(activeInputs)
                    
                    let emiRecipe = new $EmiRecipe({
                        getCategory: () => infusionCategory,
                        getId: () => id,
                        getInputs: () => allEmiInputs,
                        getOutputs: () => [emiOutput],
                        getDisplayWidth: () => 144,
                        getDisplayHeight: () => 81,
                        addWidgets: function(widgets) {
                            widgets.addTexture(bgTexture, 0, 0)
                            widgets.addSlot(emiAltarInput, 32, 32).drawBack(false)
                            widgets.addSlot(emiOutput, 122, 32).drawBack(false).recipeContext(this)
                            
                            let count = activeInputs.length
                            let addPSlot = (idx, pos) => {
                                if(idx < count)
                                {
                                    widgets.addSlot(activeInputs[idx], pos.x, pos.y).drawBack(false)
                                }
                            }

                            switch (count)
                            {
                                case 1:
                                    addPSlot(0, SLOT_POS.NORTH); break;
                                case 2:
                                    addPSlot(0, SLOT_POS.NORTH); addPSlot(1, SLOT_POS.SOUTH); break;
                                case 3:
                                    addPSlot(0, SLOT_POS.WEST); addPSlot(1, SLOT_POS.NORTH); addPSlot(2, SLOT_POS.EAST); break;
                                case 4:
                                    addPSlot(0, SLOT_POS.NORTH); addPSlot(1, SLOT_POS.EAST); addPSlot(2, SLOT_POS.SOUTH); addPSlot(3, SLOT_POS.WEST); break;
                                case 5:
                                    addPSlot(0, SLOT_POS.NORTH_WEST); addPSlot(1, SLOT_POS.NORTH); addPSlot(2, SLOT_POS.NORTH_EAST); addPSlot(3, SLOT_POS.SOUTH_EAST); addPSlot(4, SLOT_POS.SOUTH_WEST); break;
                                case 6:
                                    addPSlot(0, SLOT_POS.NORTH_WEST); addPSlot(1, SLOT_POS.NORTH); addPSlot(2, SLOT_POS.NORTH_EAST); addPSlot(3, SLOT_POS.SOUTH_EAST); addPSlot(4, SLOT_POS.SOUTH); addPSlot(5, SLOT_POS.SOUTH_WEST); break;
                                case 7:
                                    addPSlot(0, SLOT_POS.WEST); addPSlot(1, SLOT_POS.NORTH_WEST); addPSlot(2, SLOT_POS.NORTH); addPSlot(3, SLOT_POS.NORTH_EAST); addPSlot(4, SLOT_POS.EAST); addPSlot(5, SLOT_POS.SOUTH_EAST); addPSlot(6, SLOT_POS.SOUTH_WEST); break;
                                case 8:
                                    addPSlot(0, SLOT_POS.NORTH_WEST); addPSlot(1, SLOT_POS.NORTH); addPSlot(2, SLOT_POS.NORTH_EAST); addPSlot(3, SLOT_POS.EAST); addPSlot(4, SLOT_POS.SOUTH_EAST); addPSlot(5, SLOT_POS.SOUTH); addPSlot(6, SLOT_POS.SOUTH_WEST); addPSlot(7, SLOT_POS.WEST); break;
                            }
                        }
                    })

                    emiRegistry.addRecipe(emiRecipe)
                }
                catch(err)
                {
                    console.warn(`[CatJS] Error processing infusion recipe ${recipeHolder.id()}: ${err}`)
                }
            })

            console.info(`[CatJS] Added MA Infusion recipes to EMI`)
        }
        catch(e)
        {
            console.error("[CatJS] Error adding MA Infusion recipes to EMI: " + e)
        }
    }
})
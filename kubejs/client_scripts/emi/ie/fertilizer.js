/* This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/

//This script is based on the MA scripts and IE one for JEI

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
let $Component
let $ChatFormatting

let $Arrays

if (Platform.isLoaded("emi") && Platform.isLoaded("immersiveengineering")) {
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
    $Component = Java.loadClass('net.minecraft.network.chat.Component')
    $ChatFormatting = Java.loadClass('net.minecraft.ChatFormatting')

    $Arrays = Java.loadClass('java.util.Arrays')
}

RecipeViewerEvents.addEntries("item", event => {
    let emiRegistry = global.emiRegistry

    if(Platform.isLoaded("emi") && emiRegistry && Platform.isLoaded("immersiveengineering"))
    {
        try
        {
            let catIdStr = "immersiveengineering:fertilizer"
            if ($EmiRecipes.categories.toArray().some(c => c.getId().toString() == catIdStr))
            {
                console.info(`[CatJS] JEI integration detected or Cloche Fertilizer Category already exists. Skipping script.`)
                return;
            }

            let catId = new $ResourceLocation("immersiveengineering", "fertilizer")
            
            let workstationItem = Item.of("immersiveengineering:fertilizer").getItem()
            let iconStack = new $ItemStack(workstationItem)
            let catIcon = $EmiStack["of(net.minecraft.world.item.ItemStack)"](iconStack)
            
            // JEI usa fondo blanco 150x50
            let fertilizerCategory = new $EmiRecipeCategory(catId, catIcon, catIcon)
            
            emiRegistry.addCategory(fertilizerCategory)
            
            // Preparamos el ItemStack de la Cloche para renderizarlo después
            let clocheItem = Item.of("immersiveengineering:cloche").getItem()
            let clocheMcStack = new $ItemStack(clocheItem)
            let clocheIcon = $EmiStack["of(net.minecraft.world.item.ItemStack)"](clocheMcStack)
            
            emiRegistry.addWorkstation(fertilizerCategory, catIcon)
            emiRegistry.addWorkstation(fertilizerCategory, clocheIcon)

            let recipeManager = emiRegistry.getRecipeManager()
            let fertilizerType = $BuiltInRegistries.RECIPE_TYPE.get(catId)

            if(!fertilizerType)
            {
                console.warn("[CatJS] RecipeType not found: immersiveengineering:fertilizer")
                return;
            }

            let fertilizerRecipes = recipeManager.getAllRecipesFor(fertilizerType)

            fertilizerRecipes.forEach(holder => {
                try {
                    let recipe = holder.value()
                    let id = holder.id()

                    // Input
                    let input = recipe.input
                    let tempEmiIng = $EmiIngredient["of(net.minecraft.world.item.crafting.Ingredient)"](input)
                    let emiStacks = tempEmiIng.getEmiStacks()
                    let inputList = []

                    for(let i = 0; i < emiStacks.size(); i++)
                    {
                        inputList.push(emiStacks.get(i))
                    }
                    
                    let emiInput = $EmiIngredient["of(java.util.List)"](inputList)

                    let modifier = recipe.growthModifier
                    let modString = modifier.toFixed(2) + "x"
                    let textComp = $Component.translatable("desc.immersiveengineering.jei.cloche_modifier", modString)

                    let emiRecipe = new $EmiRecipe({
                        getCategory: () => fertilizerCategory,
                        getId: () => id,
                        getInputs: () => [emiInput],
                        getOutputs: () => [],
                        getDisplayWidth: () => 170,
                        getDisplayHeight: () => 50,
                        addWidgets: function(widgets) {
                            widgets.addSlot(emiInput, 33, 13).drawBack(true)
                            widgets.addText(textComp, 53, 17, 0x777777, false)
                            widgets.addDrawable(0, 0, 150, 50, (guiGraphics, mouseX, mouseY, delta) => {
                                let pose = guiGraphics.pose()
                                pose.pushPose()
                                pose.translate(0, 0, 0) 
                                pose.scale(3.0, 3.0, 1.0)
                                guiGraphics["renderItem(net.minecraft.world.item.ItemStack,int,int)"](clocheMcStack, -2, 0)
                                pose.popPose()
                            })
                        }
                    })

                    emiRegistry.addRecipe(emiRecipe)
                }
                catch(err)
                {
                    console.warn(`[CatJS] Error processing IE Fertilizer recipe ${holder.id()}: ${err}`)
                }
            })

            console.info(`[CatJS] Added IE Fertilizer recipes to EMI`)
        }
        catch(e)
        {
            console.error("[CatJS] Error adding IE Fertilizer recipes to EMI: " + e)
        }
    }
})
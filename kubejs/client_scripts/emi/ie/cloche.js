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
let $DataComponents
let $ItemLore

let $Arrays

let $IEBlocks
let $ClocheRecipe
let $ClocheFertilizer

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
    
    $DataComponents = Java.loadClass('net.minecraft.core.component.DataComponents')
    $ItemLore = Java.loadClass('net.minecraft.world.item.component.ItemLore')
    $Arrays = Java.loadClass('java.util.Arrays')

    $IEBlocks = Java.loadClass('blusunrize.immersiveengineering.common.register.IEBlocks')
}

RecipeViewerEvents.addEntries("item", event => {
    let emiRegistry = global.emiRegistry

    if(Platform.isLoaded("emi") && emiRegistry && Platform.isLoaded("immersiveengineering"))
    {
        try
        {
            let catIdStr = "immersiveengineering:cloche"
            if ($EmiRecipes.categories.toArray().some(c => c.getId().toString() == catIdStr))
            {
                console.info(`[CatJS] JEI integration detected or Garden Cloche Category already exists. Skipping script.`)
                return;
            }

            let catId = new $ResourceLocation("immersiveengineering", "cloche")
            let workstationItem = Item.of("immersiveengineering:cloche").getItem()
            let iconStack = new $ItemStack(workstationItem)
            let catIcon = $EmiStack["of(net.minecraft.world.item.ItemStack)"](iconStack)
            
            let clocheCategory = new $EmiRecipeCategory(catId, catIcon, catIcon)
            let textureLoc = new $ResourceLocation("immersiveengineering", "textures/gui/cloche.png")
            let bgTexture = new $EmiTexture(textureLoc, 0, 0, 176, 77, 176, 77, 256, 256)
            let tankOverlayTexture = new $EmiTexture(textureLoc, 176, 30, 20, 51, 20, 51, 256, 256)

            emiRegistry.addCategory(clocheCategory)
            emiRegistry.addWorkstation(clocheCategory, catIcon)

            let recipeManager = emiRegistry.getRecipeManager()
            let fertilizerType = $BuiltInRegistries.RECIPE_TYPE.get(new $ResourceLocation("immersiveengineering", "fertilizer"))
            let fertilizerEmiIngredient = null
            
            if(fertilizerType)
            {
                let fertilizerRecipes = recipeManager.getAllRecipesFor(fertilizerType)
                let fertilizerStacks = []
                
                fertilizerRecipes.forEach(holder => {
                    let fertRecipe = holder.value()
                    let input = fertRecipe.input 
                    let tempEmiIng = $EmiIngredient["of(net.minecraft.world.item.crafting.Ingredient)"](input)
                    let emiList = tempEmiIng.getEmiStacks()
                    
                    for(let i = 0; i < emiList.size(); i++)
                    {
                        let emiStack = emiList.get(i)
                        fertilizerStacks.push(emiStack)
                    }
                })
                
                if(fertilizerStacks.length > 0)
                {
                    fertilizerEmiIngredient = $EmiIngredient["of(java.util.List)"](fertilizerStacks)
                }
            }

            let clocheRecipeType = $BuiltInRegistries.RECIPE_TYPE.get(catId)
            if(!clocheRecipeType)
            {
                console.warn("[CatJS] RecipeType not found: immersiveengineering:cloche")
                return;
            }

            let clocheRecipes = recipeManager.getAllRecipesFor(clocheRecipeType)

            let createEmiIngredient = (ingredient) => {
                return $EmiIngredient["of(net.minecraft.world.item.crafting.Ingredient)"](ingredient)
            }

            clocheRecipes.forEach(holder => {
                try {
                    let recipe = holder.value()
                    let id = holder.id()
                    let seedIng = recipe.seed
                    let emiSeed = createEmiIngredient(seedIng)
                    
                    let soilIng = recipe.soil
                    let emiSoil = createEmiIngredient(soilIng)

                    let fluidStacks = recipe.requiredFluid.getStacks()
                    let emiFluidIngredient
                    
                    if(fluidStacks && fluidStacks.length > 0)
                    {
                        let emiFluids = []
                        for(let fs of fluidStacks)
                        {
                            let emiFs = $EmiStack["of(net.minecraft.world.level.material.Fluid,long)"](fs.getFluid(), fs.getAmount())
                            emiFluids.push(emiFs)
                        }
                        emiFluidIngredient = $EmiIngredient["of(java.util.List)"](emiFluids)
                    }

                    let outputs = recipe.outputs
                    let emiOutputs = []

                    for(let out of outputs)
                    {
                        let stack = out.stack().get()
                        let chance = out.chance() // float 0.0 - 1.0

                        let finalStack = stack.copy()
                        
                        if(chance < 1.0)
                        {
                            let percentage = (chance * 100).toFixed(2)
                            let textString = percentage + "%"
                            let chanceText = $Component.literal(textString)
                            chanceText = chanceText["withStyle(net.minecraft.ChatFormatting)"]($ChatFormatting.GOLD)
                            
                            let loreList = $Arrays.asList(chanceText)
                            let loreComponent = new $ItemLore(loreList)
                            finalStack.set($DataComponents.LORE, loreComponent)
                        }

                        emiOutputs.push($EmiStack["of(net.minecraft.world.item.ItemStack)"](finalStack))
                    }
                    let allInputs = [emiSeed, emiSoil]
                    if (emiFluidIngredient) allInputs.push(emiFluidIngredient)
                    if (fertilizerEmiIngredient) allInputs.push(fertilizerEmiIngredient)

                    let emiRecipe = new $EmiRecipe({
                        getCategory: () => clocheCategory,
                        getId: () => id,
                        getInputs: () => allInputs,
                        getOutputs: () => emiOutputs,
                        getDisplayWidth: () => 176,
                        getDisplayHeight: () => 77,
                        addWidgets: function(widgets) {
                            widgets.addTexture(bgTexture, 0, 0)
                            if(emiFluidIngredient)
                            {
                                widgets.addTank(emiFluidIngredient, 5, 5, 20, 51, 4000).drawBack(false)
                            }
                            widgets.addTexture(tankOverlayTexture, 5, 5)
                            widgets.addSlot(emiSeed, 61, 33).drawBack(false)
                            widgets.addSlot(emiSoil, 61, 53).drawBack(false)
                            if(fertilizerEmiIngredient)
                            {
                                widgets.addSlot(fertilizerEmiIngredient, 7, 58).drawBack(false)
                            }

                            for(let i = 0; i < emiOutputs.length; i++)
                            {
                                let x = 116 + (i % 2) * 18
                                let y = 34 + Math.floor(i / 2) * 18
                                widgets.addSlot(emiOutputs[i], x-1, y-1).drawBack(false).recipeContext(this)
                            }

                            widgets.addDrawable(0, 0, 176, 77, (guiGraphics, mouseX, mouseY, delta) => {
                                let now = Date.now()
                                let progress = (now % 10000) / 10000.0
                                let currentWidth = $Mth.ceil(13.0 * progress)
                                guiGraphics.blit(textureLoc, 101, 35, 181, 1, currentWidth, 13, 256, 256)
                            })
                        }
                    })

                    emiRegistry.addRecipe(emiRecipe)
                }
                catch(err)
                {
                    console.warn(`[CatJS] Error processing Cloche recipe ${holder.id()}: ${err}`)
                }
            })

            console.info(`[CatJS] Added IE Cloche recipes to EMI`)
        }
        catch(e)
        {
            console.error("[CatJS] Error adding IE Cloche recipes to EMI: " + e)
        }
    }
})
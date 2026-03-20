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
let $SpawnEggItem
let $Mth
let $Component
let $ChatFormatting
let $DataComponents
let $ItemLore

let $Arrays

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
    $SpawnEggItem = Java.loadClass('net.minecraft.world.item.SpawnEggItem')
    $ResourceLocation = Java.loadClass('net.minecraft.resources.ResourceLocation')
    $BuiltInRegistries = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries')
    $Mth = Java.loadClass('net.minecraft.util.Mth')
    $Component = Java.loadClass('net.minecraft.network.chat.Component')
    $ChatFormatting = Java.loadClass('net.minecraft.ChatFormatting')
    
    // IMPORTACIONES CLAVE PARA 1.21
    $DataComponents = Java.loadClass('net.minecraft.core.component.DataComponents')
    $ItemLore = Java.loadClass('net.minecraft.world.item.component.ItemLore')
    $Arrays = Java.loadClass('java.util.Arrays')

    $MysticalAgriculture = Java.loadClass('com.blakebr0.mysticalagriculture.MysticalAgriculture')
    $ModBlocks = Java.loadClass('com.blakebr0.mysticalagriculture.init.ModBlocks')
}

RecipeViewerEvents.addEntries("item", catalyst => {
    let emiRegistry = global.emiRegistry

    if(Platform.isLoaded("emi") && emiRegistry && Platform.isLoaded("mysticalagriculture"))
    {
        try
        {
            let catIdStr = "mysticalagriculture:soulium_spawner"
            if($EmiRecipes.categories.toArray().some(c => c.getId().toString() == catIdStr))
            {
                console.info(`[CatJS] JEI integration detected or Soul Spawner Category already exists. Skipping script.`)
                return;
            }

            let catId = new $ResourceLocation("mysticalagriculture", "soulium_spawner")
            let workstationItem = $ModBlocks.SOULIUM_SPAWNER.get()
            let iconStack = new $ItemStack(workstationItem)
            let catIcon = $EmiStack["of(net.minecraft.world.item.ItemStack)"](iconStack)
            let spawnerCategory = new $EmiRecipeCategory(catId, catIcon, catIcon)
            let textureLoc = new $ResourceLocation("mysticalagriculture", "textures/jei/soulium_spawner.png")
            let bgTexture = new $EmiTexture(textureLoc, 0, 0, 82, 26, 82, 26, 256, 256)

            emiRegistry.addCategory(spawnerCategory)
            emiRegistry.addWorkstation(spawnerCategory, catIcon)

            let recipeManager = emiRegistry.getRecipeManager()
            let spawnerRecipeType = $BuiltInRegistries.RECIPE_TYPE.get(catId)

            if(!spawnerRecipeType)
            {
                console.warn("[CatJS] RecipeType not found: mysticalagriculture:soulium_spawner")
                return;
            }

            let spawnerRecipes = recipeManager.getAllRecipesFor(spawnerRecipeType).toArray()
            let createInputs = (ingredient, count) => {
                let list = []
                let tempEmiIng = $EmiIngredient["of(net.minecraft.world.item.crafting.Ingredient)"](ingredient)
                let emiStacks = tempEmiIng.getEmiStacks()

                for(let i = 0; i < emiStacks.size(); i++)
                {
                    let sourceEmiStack = emiStacks.get(i)
                    let sourceMcStack = sourceEmiStack.getItemStack()
                    let newMcStack = sourceMcStack.copy()
                    newMcStack.setCount(count)
                    list.push($EmiStack["of(net.minecraft.world.item.ItemStack)"](newMcStack))
                }
                return list
            }

            spawnerRecipes.forEach(holder => {
                try {
                    let recipe = holder.value()
                    let id = holder.id()

                    let rawInputs = recipe.getIngredients()
                    if (rawInputs.isEmpty()) return;
                    let inputCount = recipe.getCount(0) 
                    let inputStacks = createInputs(rawInputs.get(0), inputCount)
                    let emiInput = $EmiIngredient["of(java.util.List)"](inputStacks)

                    let entries = recipe.getEntityTypes().unwrap() 
                    let totalWeight = 0
                    for(let j = 0; j < entries.size(); j++)
                    {
                        totalWeight += entries.get(j).weight().asInt()
                    }

                    let outputEmiStacks = []
                    
                    for (let j = 0; j < entries.size(); j++)
                    {
                        let entry = entries.get(j)
                        let entityType = entry.data()
                        let weight = entry.weight().asInt()
                        
                        let eggItem = $SpawnEggItem["byId(net.minecraft.world.entity.EntityType)"](entityType)
                        
                        if(eggItem)
                        {
                            let eggStack = new $ItemStack(eggItem)
                            
                            let chance = (weight / totalWeight) * 100.0
                            let textString = chance.toFixed(0) + "%"
                            let chanceText = $Component.literal(textString)
                            chanceText = chanceText["withStyle(net.minecraft.ChatFormatting)"]($ChatFormatting.GRAY)

                            let loreList = $Arrays.asList(chanceText)
                            let loreComponent = new $ItemLore(loreList)
                            eggStack.set($DataComponents.LORE, loreComponent)

                            let emiEgg = $EmiStack["of(net.minecraft.world.item.ItemStack)"](eggStack)
                            outputEmiStacks.push(emiEgg)
                        }
                    }

                    if (outputEmiStacks.length === 0) return;

                    let emiOutputWidget = $EmiIngredient["of(java.util.List)"](outputEmiStacks)

                    let emiRecipe = new $EmiRecipe({
                        getCategory: () => spawnerCategory,
                        getId: () => id,
                        getInputs: () => [emiInput],
                        getOutputs: () => outputEmiStacks,
                        getDisplayWidth: () => 82,
                        getDisplayHeight: () => 26,
                        addWidgets: function(widgets) {
                            widgets.addTexture(bgTexture, 0, 0)
                            widgets.addSlot(emiInput, 0, 4).drawBack(false)
                            widgets.addSlot(emiOutputWidget, 60, 4).drawBack(false).recipeContext(this)
                            
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
                    console.warn(`[CatJS] Error processing Soulium Spawner recipe ${holder.id()}: ${err}`)
                }
            })

            console.info(`[CatJS] Added MA Soulium Spawner recipes to EMI`)
        }
        catch(e)
        {
            console.error("[CatJS] Error adding MA Soulium Spawner recipes to EMI: " + e)
        }
    }
})
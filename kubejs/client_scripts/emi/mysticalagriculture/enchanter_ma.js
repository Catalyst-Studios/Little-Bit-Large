/* This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/

// --- Clases de EMI ---
let $EmiRecipeCategory
let $EmiStack
let $EmiRecipe
let $EmiTexture
let $EmiRecipes
let $EmiIngredient

// --- Clases de Minecraft (1.21.1) ---
let $Minecraft
let $ItemStack
let $ResourceLocation
let $BuiltInRegistries
let $Items
let $EnchantedBookItem
let $EnchantmentInstance

// --- Clases de Mystical Agriculture ---
let $MysticalAgriculture
let $ModBlocks

// Carga condicional de clases
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
    $EnchantedBookItem = Java.loadClass('net.minecraft.world.item.EnchantedBookItem')
    $EnchantmentInstance = Java.loadClass('net.minecraft.world.item.enchantment.EnchantmentInstance')
    $ResourceLocation = Java.loadClass('net.minecraft.resources.ResourceLocation')
    $BuiltInRegistries = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries')

    $MysticalAgriculture = Java.loadClass('com.blakebr0.mysticalagriculture.MysticalAgriculture')
    $ModBlocks = Java.loadClass('com.blakebr0.mysticalagriculture.init.ModBlocks')
}

RecipeViewerEvents.addEntries("item", event => {
    let emiRegistry = global.emiRegistry

    if(Platform.isLoaded("emi") && emiRegistry && Platform.isLoaded("mysticalagriculture"))
    {
        try
        {
            let catIdStr = "mysticalagriculture:enchanter"
            if ($EmiRecipes.categories.toArray().some(c => c.getId().toString() == catIdStr)) {
                console.info(`[CatJS] JEI integration detected or Enchanter Category already exists. Skipping script.`)
                return;
            }

            let catId = new $ResourceLocation("mysticalagriculture", "enchanter")
            let workstationItem = $ModBlocks.ENCHANTER.get()
            let iconStack = new $ItemStack(workstationItem)
            let catIcon = $EmiStack["of(net.minecraft.world.item.ItemStack)"](iconStack)
            
            let enchanterCategory = new $EmiRecipeCategory(catId, catIcon, catIcon)
            let textureLoc = new $ResourceLocation("mysticalagriculture", "textures/jei/enchanter.png")
            let bgTexture = new $EmiTexture(textureLoc, 0, 0, 144, 26, 144, 26, 256, 256)

            emiRegistry.addCategory(enchanterCategory)
            emiRegistry.addWorkstation(enchanterCategory, catIcon)

            let recipeManager = emiRegistry.getRecipeManager()
            let enchanterTypeId = new $ResourceLocation("mysticalagriculture", "enchanter")
            let enchanterRecipeType = $BuiltInRegistries.RECIPE_TYPE.get(enchanterTypeId)

            if (!enchanterRecipeType) {
                console.warn("[CatJS] RecipeType not found: mysticalagriculture:enchanter")
                return;
            }

            let enchanterRecipes = recipeManager.getAllRecipesFor(enchanterRecipeType)
            let createScaledList = (baseIngredient, baseCount, maxLevel) => {
                let list = []
                let tempEmiIng = $EmiIngredient["of(net.minecraft.world.item.crafting.Ingredient)"](baseIngredient)
                let emiStacks = tempEmiIng.getEmiStacks()

                for(let i = 0; i < emiStacks.size(); i++)
                {
                    let sourceEmiStack = emiStacks.get(i)
                    let sourceMcStack = sourceEmiStack.getItemStack()
                    
                    for(let level = 1; level <= maxLevel; level++)
                    {
                        let newMcStack = sourceMcStack.copy()
                        newMcStack.setCount(baseCount * level)
                        let finalEmiStack = $EmiStack["of(net.minecraft.world.item.ItemStack)"](newMcStack)
                        list.push(finalEmiStack)
                    }
                }
                return list
            }

            enchanterRecipes.forEach(recipeHolder => {
                try {
                    let recipe = recipeHolder.value()
                    let id = recipeHolder.id()

                    let rawInputs = recipe.getIngredients()
                    let enchantmentHolder = recipe.getEnchantment()
                    let enchantment = enchantmentHolder.value()
                    let maxLevel = enchantment.getMaxLevel()

                    // Slot 0
                    let count0 = recipe.getCount(0)
                    let stacks0 = createScaledList(rawInputs.get(0), count0, maxLevel)
                    let emiInput0 = $EmiIngredient["of(java.util.List)"](stacks0)

                    // Slot 1
                    let count1 = recipe.getCount(1)
                    let stacks1 = createScaledList(rawInputs.get(1), count1, maxLevel)
                    let emiInput1 = $EmiIngredient["of(java.util.List)"](stacks1)

                    // Slot 2
                    let emiInput2 = $EmiStack["of(net.minecraft.world.item.ItemStack)"](new $ItemStack($Items.BOOK))

                    // Outputs
                    let outputEmiStacks = []
                    for (let level = 1; level <= maxLevel; level++) {
                        let enchInstance = new $EnchantmentInstance(enchantmentHolder, level)
                        let bookStack = $EnchantedBookItem.createForEnchantment(enchInstance)
                        outputEmiStacks.push($EmiStack["of(net.minecraft.world.item.ItemStack)"](bookStack))
                    }

                    let emiOutputWidget = $EmiIngredient["of(java.util.List)"](outputEmiStacks)

                    let emiRecipe = new $EmiRecipe({
                        getCategory: () => enchanterCategory,
                        getId: () => id,
                        getInputs: () => [emiInput0, emiInput1, emiInput2],
                        getOutputs: () => outputEmiStacks,
                        getDisplayWidth: () => 144,
                        getDisplayHeight: () => 26,
                        addWidgets: function(widgets) {
                            widgets.addTexture(bgTexture, 0, 0)
                            widgets.addSlot(emiInput0, 0, 4).drawBack(false)
                            widgets.addSlot(emiInput1, 22, 4).drawBack(false)
                            widgets.addSlot(emiInput2, 62, 4).drawBack(false)
                            widgets.addSlot(emiOutputWidget, 122, 4).drawBack(false).recipeContext(this)
                        }
                    })

                    emiRegistry.addRecipe(emiRecipe)
                }
                catch(err)
                {
                    console.warn(`[CatJS] Error processing Enchanter recipe ${recipeHolder.id()}: ${err}`)
                }
            })

            console.info(`[CatJS] Added MA Enchanter recipes to EMI`)
        }
        catch(e)
        {
            console.error("[CatJS] Error adding MA Enchanter recipes to EMI: " + e)
        }
    }
})
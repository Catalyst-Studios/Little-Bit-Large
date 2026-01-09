/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/

const customFluxRecipes = [
    {
        id: 'flux_seed1',
        base: 'minecraft:bedrock',
        target: 'minecraft:obsidian',
        input: 'mysticalagriculture:redstone_seeds',
        output: 'mysticalagriculture:flux_seeds'
    },
    {
        id: 'flux_seed2',
        base: 'fluxnetworks:flux_block',
        target: 'minecraft:obsidian',
        input: 'mysticalagriculture:redstone_seeds',
        output: 'mysticalagriculture:flux_seeds'
    },
    {
        id: 'flux_dust1',
        base: 'minecraft:bedrock',
        target: 'minecraft:obsidian',
        input: 'minecraft:redstone',
        output: 'fluxnetworks:flux_dust'
    },
    {
        id: 'flux_dust2',
        base: 'fluxnetworks:flux_block',
        target: 'minecraft:obsidian',
        input: 'minecraft:redstone',
        output: 'fluxnetworks:flux_dust'
    }
]

let $EmiRecipeCategory
let $EmiStack
let $EmiRecipe
let $ResourceLocation
let $EmiTexture
let $EmiRecipes
let $Minecraft
let $LightTexture
let $OverlayTexture
let $ItemDisplayContext
let $Axis
let $BuiltInRegistries
let $BlockItem
let $ItemStack

if(Platform.isLoaded("emi"))
{
    $EmiRecipeCategory = Java.loadClass('dev.emi.emi.api.recipe.EmiRecipeCategory')
    $EmiStack = Java.loadClass('dev.emi.emi.api.stack.EmiStack')
    $EmiRecipe = Java.loadClass('dev.emi.emi.api.recipe.EmiRecipe')
    $ResourceLocation = Java.loadClass('net.minecraft.resources.ResourceLocation')
    $EmiTexture = Java.loadClass('dev.emi.emi.api.render.EmiTexture')
    $EmiRecipes = Java.loadClass('dev.emi.emi.registry.EmiRecipes')
    
    $Minecraft = Java.loadClass('net.minecraft.client.Minecraft')
    $LightTexture = Java.loadClass('net.minecraft.client.renderer.LightTexture')
    $OverlayTexture = Java.loadClass('net.minecraft.client.renderer.texture.OverlayTexture')
    $ItemDisplayContext = Java.loadClass('net.minecraft.world.item.ItemDisplayContext')
    $Axis = Java.loadClass('com.mojang.math.Axis')
    $BuiltInRegistries = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries')
    $BlockItem = Java.loadClass('net.minecraft.world.item.BlockItem')
    $ItemStack = Java.loadClass('net.minecraft.world.item.ItemStack')
}

RecipeViewerEvents.addEntries("item", catalyst => {
    let jeiRuntime = global.jeiRuntime
    let emiRegistry = global.emiRegistry

    if (Platform.isLoaded("jei") && jeiRuntime) {
        try {
            let CreatingFluxRecipe = Java.loadClass("sonar.fluxnetworks.client.jei.CreatingFluxRecipe")
            let CreatingFluxRecipeCategory = Java.loadClass("sonar.fluxnetworks.client.jei.CreatingFluxRecipeCategory")
            let recipeManager = jeiRuntime.getRecipeManager()

            customFluxRecipes[0]
            customFluxRecipes.slice(0, 2).forEach(recipe => {
                let jeiRecipe = new CreatingFluxRecipe(
                    recipe.base,
                    recipe.target,
                    recipe.input,
                    recipe.output
                )
                recipeManager.addRecipes(CreatingFluxRecipeCategory.RECIPE_TYPE, [jeiRecipe])
            })
        } catch (e) {
            console.error("Error adding JEI recipes: " + e)
        }
    }
    
    //Basically a Ctrl c, ctrl v, but using emi api
    if (Platform.isLoaded("emi") && emiRegistry) {
        try {
            let catIdStr = "fluxnetworks:creating_flux"
            let fluxCategory = $EmiRecipes.categories.toArray().find(c => c.getId().toString() == catIdStr)

            if(!fluxCategory)
            {
                let catId = new $ResourceLocation("fluxnetworks", "creating_flux") 
                let iconStack = new $ItemStack(Item.of("fluxnetworks:flux_block").getItem())
                let catIcon = $EmiStack["of(net.minecraft.world.item.ItemStack)"](iconStack)
                fluxCategory = new $EmiRecipeCategory(catId, catIcon, catIcon)
                emiRegistry.addCategory(fluxCategory)
            }

            let createEmiRecipe = (recipeData) => {
                let id = new $ResourceLocation("kubejs", recipeData.id)
                const getStack = (itemId) => new $ItemStack(Item.of(itemId).getItem(), 1)
                
                let renderBase = getStack(recipeData.base)
                let renderTarget = getStack(recipeData.target)
                let renderInput = getStack(recipeData.input)
                let renderOutput = getStack(recipeData.output)

                //Blame rhino and kjs
                let stackTarget = $EmiStack["of(net.minecraft.world.item.ItemStack)"](renderTarget)
                let stackInput = $EmiStack["of(net.minecraft.world.item.ItemStack)"](renderInput)
                let stackOutput = $EmiStack["of(net.minecraft.world.item.ItemStack)"](renderOutput)

                return new $EmiRecipe({
                    getCategory: () => fluxCategory,
                    getId: () => id,
                    getInputs: () => [stackTarget, stackInput],
                    getOutputs: () => [stackOutput],
                    getDisplayWidth: () => 160, 
                    getDisplayHeight: () => 64, 
                    addWidgets: function(widgets) {
                        let centerX = 80 
                        let scale = 24.0 
                        
                        widgets.addSlot(stackInput, 10, 23).drawBack(false)
                        widgets.addTexture($EmiTexture.EMPTY_ARROW, 35, 24)

                        widgets.addDrawable(0, 0, 160, 64, (guiGraphics, mouseX, mouseY, delta) => {
                            let mc = $Minecraft.getInstance()
                            let poseStack = guiGraphics.pose()
                            let bufferSource = mc.renderBuffers().bufferSource()
                            let itemRenderer = mc.getItemRenderer()

                            let value = (Date.now() / 10) % 320
                            let itemToDisplay = value > 160 ? renderOutput : renderInput

                            //Obsidian or crusher
                            poseStack.pushPose()
                            let offset = (value > 160 ? 160 - (value - 160) : value) / 20.0
                            poseStack.translate(centerX, 18 + offset, 100) 
                            poseStack.scale(scale, -scale, scale) 
                            poseStack.mulPose($Axis.XP.rotationDegrees(30))
                            poseStack.mulPose($Axis.YP.rotationDegrees(45))
                            itemRenderer.renderStatic(renderTarget, $ItemDisplayContext.FIXED, 15728880, 655360, poseStack, bufferSource, mc.level, 0)
                            poseStack.popPose()

                            //Bedrock or base
                            poseStack.pushPose()
                            poseStack.translate(centerX, 54, 100 - 32)
                            poseStack.scale(scale, -scale, scale)
                            poseStack.mulPose($Axis.XP.rotationDegrees(30))
                            poseStack.mulPose($Axis.YP.rotationDegrees(45))
                            itemRenderer.renderStatic(renderBase, $ItemDisplayContext.FIXED, 15728880, 655360, poseStack, bufferSource, mc.level, 0)
                            poseStack.popPose()

                            //Redstone o central item
                            poseStack.pushPose()
                            poseStack.translate(centerX, 36, 100 - 16)
                            poseStack.scale(scale * 0.8, -(scale * 0.8), scale * 0.7) 
                            let isBlockItem = itemToDisplay.getItem() instanceof $BlockItem
                            poseStack.mulPose($Axis.XP.rotationDegrees(isBlockItem ? 30 : 0))
                            let rotationSpin = -90 + 180 * (value / 320.0)
                            poseStack.mulPose($Axis.YP.rotationDegrees(rotationSpin))
                            itemRenderer.renderStatic(itemToDisplay, $ItemDisplayContext.FIXED, 15728880, 655360, poseStack, bufferSource, mc.level, 0)
                            poseStack.popPose()

                            bufferSource.endBatch()
                        })

                        widgets.addTexture($EmiTexture.EMPTY_ARROW, 105, 24)
                        widgets.addSlot(stackOutput, 132, 23).drawBack(false).recipeContext(this)
                    },
                    supportsRecipeTree: () => true,
                    isObsolete: () => false
                })
            }

            if(customFluxRecipes !== undefined)
            {
                customFluxRecipes.forEach(recipeData => {
                    emiRegistry.addRecipe(createEmiRecipe(recipeData))
                })
            }

        } catch (e) {
            console.error("Error adding recipes to EMI: " + e)
        }
    }
})

/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
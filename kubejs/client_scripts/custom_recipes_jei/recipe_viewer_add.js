/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/

// Custom JEI Recipe Viewer Entries


const $CreatingFluxRecipe = Java.loadClass("sonar.fluxnetworks.client.jei.CreatingFluxRecipe")
const $CreatingFluxRecipeCategory = Java.loadClass("sonar.fluxnetworks.client.jei.CreatingFluxRecipeCategory")

RecipeViewerEvents.addEntries("item", () => {
  let jeiRuntime = global.jeiRuntime
  if (!jeiRuntime) {
    console.log("Jei Runtime not started yet, skipping.")
    return
  }

  let RecipeManager = jeiRuntime.getRecipeManager()
  
  // Flux Seed Creation Recipe
  /* Recipe format:
    baseBlock, 
    clickedBlock, 
    inputItem, 
    outputItem
  */
  let flux_seed_recipe1 = new $CreatingFluxRecipe(
    'minecraft:bedrock', 
    'minecraft:obsidian', 
    'mysticalagriculture:redstone_seeds',
    'mysticalagriculture:flux_seeds'
  )
  let flux_seed_recipe2 = new $CreatingFluxRecipe(
    'fluxnetworks:flux_block', 
    'minecraft:obsidian', 
    'mysticalagriculture:redstone_seeds',
    'mysticalagriculture:flux_seeds'
  )
  RecipeManager.addRecipes($CreatingFluxRecipeCategory.RECIPE_TYPE, [flux_seed_recipe1])
  RecipeManager.addRecipes($CreatingFluxRecipeCategory.RECIPE_TYPE, [flux_seed_recipe2])

})

/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
//priority: 1

/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/

const cropRegistry3 = Java.loadClass('com.blakebr0.mysticalagriculture.registry.CropRegistry')
ServerEvents.recipes(catalyst => {
    const time = 20
    const base_production_essence= 4
    const fertelizer_production_multiplier= 1
    // Create an array to store the modified names
    let modifiedItemNames = [];

    // Get the tag of items
    let tagItems = cropRegistry3.getInstance().getCrops()

    // Loop through the items in the tag
    tagItems.forEach(item => {
        if(!item.isEnabled()) return;
        // Get the item name (using the 'id' or 'registry name' of the item)
        let itemName = `${item.getId().toString()}`;  // This gives you the raw ID like 'mysticalagriculture:x_seeds'
        // Remove specific parts of the name (e.g., removing 'seeds' from the name)
        let modifiedName = itemName.replace('seeds', '').replace('mysticalcustomization', 'mysticalagriculture')
                                    .replace('mysticalagradditions', 'mysticalagriculture'); // Modify name (e.g., "seeds" => "")
        // Add the modified name to the array
        modifiedItemNames.push(modifiedName);
    });

    // Loop through the modifiedItemNames to create machine recipes dynamically
    modifiedItemNames.forEach(modifiedName => {
        // Common recipe configuration
        const baseRecipeConfig = (recipe) => recipe
            .progressX(54)
            .progressY(15)
            .width(110)
            .height(80)
            .requireEnergy(10000, 0, 0)
            .requireItem(`1x ${modifiedName}_seeds`, 25, 0)
            .requireFluid('1000x minecraft:water', 25, 20);

        // Special case for cognizant
        
        const isCognizant = modifiedName === "mysticalagriculture:cognizian";
        const isInsanium = modifiedName === "mysticalagriculture:insanium"
        const essenceOutput = isCognizant 
            ? `mysticalagriculture:cognizant_dust`
            : (isInsanium ? `mysticalagradditions:insanium_essence` : `${modifiedName}_essence`);
        // Base recipe (no fertilizer)
        baseRecipeConfig(
            catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:phytomorphic_synthesiszer", time)
        )
        .produceItem(`${base_production_essence*1}x ${essenceOutput}`, 90, 20)
        .produceItem(`1x ${modifiedName}_seeds`, 90, 0)
        .produceItem(`${fertelizer_production_multiplier}x mysticalagriculture:fertilized_essence`, 0.02, 90, 50);

        // Bone meal recipe
        baseRecipeConfig(
            catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:phytomorphic_synthesiszer", time*1.5)
        )
        .requireItem(`1x minecraft:bone_meal`, 0.5, 25, 20)
        .produceItem(`${base_production_essence*2}x ${essenceOutput}`, 90, 20)
        .produceItem(`1x ${modifiedName}_seeds`, 90, 0)
        .produceItem(`${fertelizer_production_multiplier}x mysticalagriculture:fertilized_essence`, 0.05, 90, 40)
        .priority(1);

        // Mystical fertilizer recipe
        baseRecipeConfig(
            catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:phytomorphic_synthesiszer", time*2)
        )
        .requireItem(`10x mysticalagriculture:mystical_fertilizer`, 0.5, 25, 20)
        .produceItem(`${base_production_essence*4}x ${essenceOutput}`, 90, 20)
        .produceItem(`1x ${modifiedName}_seeds`, 90, 0)
        .produceItem(`${fertelizer_production_multiplier}x mysticalagriculture:fertilized_essence`, 0.1, 90, 40)
        .priority(2);
    })
});
/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
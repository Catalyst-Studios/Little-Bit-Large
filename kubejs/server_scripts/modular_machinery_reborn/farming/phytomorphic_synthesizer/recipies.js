

/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/


ServerEvents.recipes(catalyst => {
    const time = 20
    const base_production_essence= 4
    const fertelizer_production_multiplier= 1
    // Create an array to store the modified names
    let modifiedItemNames = [];

    // Get the tag of items
    let tagItems = Ingredient.of('#mysticalagriculture:seeds').stacks.toArray();

    // Loop through the items in the tag
    tagItems.forEach(item => {
        // Get the item name (using the 'id' or 'registry name' of the item)
        let itemName = item.getId();  // This gives you the raw ID like 'mysticalagriculture:seed_x'
        
        // Remove specific parts of the name (e.g., removing 'seeds' from the name)
        let modifiedName = itemName.replace('seeds', ''); // Modify name (e.g., "seeds" => "")

        // Add the modified name to the array
        modifiedItemNames.push(modifiedName);
    });

    // Loop through the modifiedItemNames to create machine recipes dynamically
    modifiedItemNames.forEach(modifiedName => {
        // Here, we will generate a recipe for each modified item
        catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:phytomorphic_synthesiszer", time)
            // OPTIONAL CUSTOMIZATION (can be adjusted as needed)
            .progressX(54)  // default 74
            .progressY(15)   // default 8
            .width(110)      // default 256
            .height(80)     // default 256
            // Energy requirements and production (can be customized)
            .requireEnergy(10000, 0, 0)
            // Using the modified item names for the required and produced items
            .requireItem(`1x ${modifiedName}seeds`, 25, 0)   // Modify required item to be the modified item
            .requireFluid('1000x minecraft:water', 25, 20)
            .produceItem(`${base_production_essence*1}x ${modifiedName}essence`, 90, 20)    // Modify produced item to be the modified item
            .produceItem(`1x ${modifiedName}seeds`, 90, 0)    // Modify produced item to be the modified item
            .produceItem(`${fertelizer_production_multiplier}x mysticalagriculture:fertilized_essence`,0.02, 90, 50)    // Modify produced item to be the modified item
    });

// Loop through the modifiedItemNames to create machine recipes dynamically
modifiedItemNames.forEach(modifiedName => {
    // Here, we will generate a recipe for each modified item
    catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:phytomorphic_synthesiszer", time)
        // OPTIONAL CUSTOMIZATION (can be adjusted as needed)
        .progressX(54)  // default 74
        .progressY(15)   // default 8
        .width(110)      // default 256
        .height(80)     // default 256
        // Energy requirements and production (can be customized)
        .requireEnergy(10000, 0, 0)
        // Using the modified item names for the required and produced items
        .requireItem(`1x ${modifiedName}seeds`, 25, 0)   // Modify required item to be the modified item
        .requireFluid('1000x minecraft:water', 25, 40)
        .requireItem(`1x minecraft:bone_meal`,0.5, 25, 20)   // Modify required item to be the modified item
        .produceItem(`${base_production_essence*2}x ${modifiedName}essence`, 90, 20)    // Modify produced item to be the modified item
        .produceItem(`1x ${modifiedName}seeds`, 90, 0)    // Modify produced item to be the modified item
        .produceItem(`${fertelizer_production_multiplier}x mysticalagriculture:fertilized_essence`,0.05, 90, 40)    // Modify produced item to be the modified item
        .priority(1)
    });

// Loop through the modifiedItemNames to create machine recipes dynamically
modifiedItemNames.forEach(modifiedName => {
    // Here, we will generate a recipe for each modified item
    catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:phytomorphic_synthesiszer", time)
        // OPTIONAL CUSTOMIZATION (can be adjusted as needed)
        .progressX(54)  // default 74
        .progressY(15)   // default 8
        .width(110)      // default 256
        .height(80)     // default 256
        // Energy requirements and production (can be customized)
        .requireEnergy(10000, 0, 0)
        // Using the modified item names for the required and produced items
        .requireItem(`1x ${modifiedName}seeds`, 25, 0)   // Modify required item to be the modified item
        .requireFluid('1000x minecraft:water', 25, 40)
        .requireItem(`1x mysticalagriculture:mystical_fertilizer`,0.1, 25, 20)   // Modify required item to be the modified item
        .produceItem(`${base_production_essence*4}x ${modifiedName}essence`, 90, 20)    // Modify produced item to be the modified item
        .produceItem(`1x ${modifiedName}seeds`, 70, 0)    // Modify produced item to be the modified item
        .produceItem(`1x ${modifiedName}seeds`,0.1, 90, 0)
        .produceItem(`${fertelizer_production_multiplier}x mysticalagriculture:fertilized_essence`,0.1, 90, 40)    // Modify produced item to be the modified item
        .priority(2)
    });
});
/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
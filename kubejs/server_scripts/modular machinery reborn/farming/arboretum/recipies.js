
/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/

ServerEvents.recipes(catalyst => {
    // Create an array to store the modified names
    let modifiedItemNames = [];

    // Define the list of substrings you want to remove
    let substringsToRemove = [
        'biomesoplenty:orange_maple_sapling',
        'biomesoplenty:yellow_maple_sapling',
        'biomesoplenty:red_maple_sapling',
        'biomesoplenty:origin_sapling',
        'minecraft:azalea',
        'minecraft:flowering_azalea',
        'occultism:otherworld_sapling_natural',
        'occultism:otherworld_sapling',
        'biomesoplenty:cypress_sapling',
        'biomesoplenty:flowering_oak_sapling',
        'twilightforest:darkwood_sapling',
        'twilightforest:rainbow_oak_sapling',
        'biomesoplenty:rainbow_birch_sapling',
        'biomesoplenty:snowblossom_sapling',
        'minecraft:mangrove_propagule',
        'twilightforest:hollow_oak_sapling',
        '_sapling'  // Add any other substrings here
    ];

    // Get the tag of items
    let tagItems = Ingredient.of('#minecraft:saplings').stacks.toArray();

    // Loop through the items in the tag
    tagItems.forEach(item => {
        // Get the item name (using the 'id' or 'registry name' of the item)
        let itemName = item.getId(); 

        // Loop through the substringsToRemove array and remove each substring from the item name
        let modifiedName = itemName;
        substringsToRemove.forEach(substring => {
            modifiedName = modifiedName.replace(substring, '');  // Remove the substring from the item name
        });

        // Ensure that the modified name is not empty before adding it to the array
        if (modifiedName.trim() !== '') {
            modifiedItemNames.push(modifiedName);
        } 
    });

    // Compress the array by filtering out empty or invalid entries
    modifiedItemNames = modifiedItemNames.filter(name => name.trim() !== '');

    // Log the final compressed array

    // Loop through the modifiedItemNames to create machine recipes dynamically
    modifiedItemNames.forEach(modifiedName => {
        try {
            // Create first set of recipes
            catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:arboretum", 200)
                // OPTIONAL CUSTOMIZATION (can be adjusted as needed)
                .progressX(54)  // default 74
                .progressY(15)   // default 8
                .width(110)      // default 256
                .height(80)      // default 256
                // Energy requirements and production (can be customized)
                .requireEnergy(10000, 0, 0)
                // Using the modified item names for the required and produced items
                .requireItem(`1x ${modifiedName}_sapling`, 25, 0)   // Modify required item to be the modified item
                .requireFluid('10000x minecraft:water', 25, 20)
                .produceItem(`64x ${modifiedName}_log`, 90, 0)    // Modify produced item to be the modified item
                .produceItem(`2x ${modifiedName}_sapling`, 90, 20);    // Modify produced item to be the modified item

        } catch (error) {
            // Log the error if something fails during recipe creation
            console.error(`Failed to create first recipe for ${modifiedName}: ${error.message}`);
        }
    });

    // Create second set of recipes with additional items and conditions
    modifiedItemNames.forEach(modifiedName => {
        try {
            // Create second set of recipes
            catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:arboretum", 200)
                // OPTIONAL CUSTOMIZATION (can be adjusted as needed)
                .progressX(54)  // default 74
                .progressY(15)   // default 8
                .width(110)      // default 256
                .height(80)      // default 256
                // Energy requirements and production (can be customized)
                .requireEnergy(10000, 0, 0)
                // Using the modified item names for the required and produced items
                .requireItem(`1x ${modifiedName}_sapling`, 25, 0)   // Modify required item to be the modified item
                .requireFluid('10000x minecraft:water', 25, 40)
                .requireItem('reliquary:shears_of_winter', 0, 25, 20)  // Add extra required item
                .produceItem(`64x ${modifiedName}_log`, 90, 0)    // Modify produced item to be the modified item
                .produceItem(`2x ${modifiedName}_sapling`, 90, 40)    // Modify produced item to be the modified item
                .produceItem(`64x ${modifiedName}_leaves`, 90, 20)  // Add new produced item
                .priority(1);
        } catch (error) {
            // Log the error if something fails during recipe creation
            console.error(`Failed to create second recipe for ${modifiedName}: ${error.message}`);
        }
    });
});
/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
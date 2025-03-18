//helper function remove blocks
function removeBlocks(blocksToRemove) {
  blocksToRemove.forEach(block => {
    block.set('minecraft:air'); // Remove the block by setting it to air
  });
}
function summonEntities(catalyst, entityType, count, x, y, z) {
  for (let i = 0; i < count; i++) {
    catalyst.server.runCommandSilent(`summon minecraft:item ${x} ${y} ${z} {Item:{id:"${entityType}"}}`);;
  }
}
ServerEvents.recipes(catalyst => {
catalyst.remove({output: 'modular_machinery_reborn:modularium'})
})

//reinforced deepslate block crafting
BlockEvents.rightClicked('minecraft:polished_deepslate', catalyst => {
  // Check if the player is holding a Netherite Upgrade Smithing Template
  if (catalyst.player.getMainHandItem().id == 'eternalores:plate_netherite') {
    if (catalyst.player.getMainHandItem().count >= 6) {

    // Check the blocks in a 1-block radius around the polished deepslate
    let MachineCasingBlockCount = 0;
    let MachineCasingBlocksToRemove = [];

    // Loop through a 1-block radius (6 adjacent blocks)
    for (let dx = -1; dx <= 1; dx++) {
      for (let dy = -1; dy <= 1; dy++) {
        for (let dz = -1; dz <= 1; dz++) {
          if (Math.abs(dx) + Math.abs(dy) + Math.abs(dz) === 1) {
            let block = catalyst.block.offset(dx, dy, dz);
            if (block.id == 'mekanism:steel_casing') {
              MachineCasingBlockCount++;
              MachineCasingBlocksToRemove.push(block); // Store blocks to be removed later
            }
          }
        }
      }
      }
    

    // If there are at least 6 'mekanism:steel_casing', proceed with the crafting
    if (MachineCasingBlockCount >= 6) {
      // Change the block to Reinforced Deepslate
      catalyst.block.set('minecraft:reinforced_deepslate');
    
      // Remove the Netherite blocks by setting them to air using the removeBlocks function
      removeBlocks(MachineCasingBlocksToRemove);
    
      // Consume the Netherite Upgrade Smithing Template item
      catalyst.player.getMainHandItem().count -= 6;
    }
  }
  }
});

//modularium crafting
BlockEvents.rightClicked('justdirethings:gooblock_tier3', catalyst => {
  // Check if the player is holding a Netherite Upgrade Smithing Template
  if (catalyst.player.getMainHandItem().id == 'justdirethings:polymorphic_catalyst') {
    if (catalyst.player.getMainHandItem().count >= 64) {

      // Initialize counters and arrays for blocks
      let raweclipsealloyOreCount = 0;
      let raweclipsAlloyOreToRemove = [];
      let reinforce_casingCount = 0;
      let reinforcedCasingToRemove = [];

      // Initialize counters for new blocks and arrays to store blocks to be removed
      let quantumAlloyBlockCount = 0;
      let quantumAlloyBlocksToRemove = [];
      let nitroCrystalBlockCount = 0;
      let nitroCrystalBlocksToRemove = [];
      let empoweredEmeradicCrystalBlockCount = 0;
      let empoweredEmeradicCrystalBlocksToRemove = [];

      // Loop through the entire 3x3x3 area (center + adjacent blocks)
      for (let dx = -1; dx <= 1; dx++) {
        for (let dy = -1; dy <= 1; dy++) {
          for (let dz = -1; dz <= 1; dz++) {
            let block = catalyst.block.offset(dx, dy, dz);

            // Check for Raw Celestigem Ore
            if (block.id == 'justdirethings:raw_celestigem_ore') {
              raweclipsealloyOreCount++;
              raweclipsAlloyOreToRemove.push(block); // Store blocks to be removed later
            }

            // Check for Reinforced Deepslate in the 8 corners
            if (Math.abs(dx) + Math.abs(dy) + Math.abs(dz) === 3) {
              if (block.id == 'minecraft:reinforced_deepslate') {
                reinforce_casingCount++;
                reinforcedCasingToRemove.push(block); // Store blocks to be removed later
              }
            }

            // Check for Quantum Alloy Block
            if (block.id == 'advanced_ae:quantum_alloy_block') {
              quantumAlloyBlockCount++;
              quantumAlloyBlocksToRemove.push(block); // Store blocks to be removed later
            }

            // Check for Nitro Crystal Block
            if (block.id == 'powah:nitro_crystal_block') {
              nitroCrystalBlockCount++;
              nitroCrystalBlocksToRemove.push(block); // Store blocks to be removed later
            }

            // Check for Empowered Emeradic Crystal Block
            if (block.id == 'actuallyadditions:empowered_emeradic_crystal_block') {
              empoweredEmeradicCrystalBlockCount++;
              empoweredEmeradicCrystalBlocksToRemove.push(block); // Store blocks to be removed later
            }
          }
        }
      }

      // If there are at least 6 Raw Celestigem Ore Blocks, exactly 8 Reinforced Deepslate Blocks in the corners,
      // and 4 of each of the new blocks, proceed with the crafting
      if (
        raweclipsealloyOreCount == 6 &&
        reinforce_casingCount === 8 &&
        quantumAlloyBlockCount == 4 &&
        nitroCrystalBlockCount == 4 &&
        empoweredEmeradicCrystalBlockCount == 4
      ) {
        removeBlocks(raweclipsAlloyOreToRemove);
        removeBlocks(reinforcedCasingToRemove);
        removeBlocks(quantumAlloyBlocksToRemove);
        removeBlocks(nitroCrystalBlocksToRemove);
        removeBlocks(empoweredEmeradicCrystalBlocksToRemove);


        // Create the Modularium item entity 2 blocks above the center block
        let x = catalyst.block.x;
        let y = catalyst.block.y + 2; // 2 blocks above the center block
        let z = catalyst.block.z;
        summonEntities(catalyst, "modular_machinery_reborn:modularium", 8, x, y, z)

        // Consume the Netherite Upgrade Smithing Template item
        catalyst.player.getMainHandItem().count -= 64;
      }
    }
  }
});
//modularium crafting
BlockEvents.rightClicked('justdirethings:gooblock_tier4', catalyst => {
  // Check if the player is holding a Netherite Upgrade Smithing Template
  if (catalyst.player.getMainHandItem().id == 'justdirethings:portal_fluid_catalyst') {
    if (catalyst.player.getMainHandItem().count >= 64) {

      // Initialize counters and arrays for blocks
      let raweclipsealloyOreCount = 0;
      let raweclipsAlloyOreToRemove = [];
      let reinforce_casingCount = 0;
      let reinforcedCasingToRemove = [];

      // Initialize counters for new blocks and arrays to store blocks to be removed
      let quantumAlloyBlockCount = 0;
      let quantumAlloyBlocksToRemove = [];
      let nitroCrystalBlockCount = 0;
      let nitroCrystalBlocksToRemove = [];
      let empoweredEmeradicCrystalBlockCount = 0;
      let empoweredEmeradicCrystalBlocksToRemove = [];

      // Loop through the entire 3x3x3 area (center + adjacent blocks)
      for (let dx = -1; dx <= 1; dx++) {
        for (let dy = -1; dy <= 1; dy++) {
          for (let dz = -1; dz <= 1; dz++) {
            let block = catalyst.block.offset(dx, dy, dz);

            // Check for Raw Celestigem Ore
            if (block.id == 'justdirethings:raw_eclipsealloy_ore') {
              raweclipsealloyOreCount++;
              raweclipsAlloyOreToRemove.push(block); // Store blocks to be removed later
            }

            // Check for 'modular_machinery_reborn:casing_reinforced' in the 8 corners
            if (Math.abs(dx) + Math.abs(dy) + Math.abs(dz) === 3) {
              if (block.id == 'modular_machinery_reborn:casing_reinforced') {
                reinforce_casingCount++;
                reinforcedCasingToRemove.push(block); // Store blocks to be removed later
              }
            }

            // Check for Quantum Alloy Block
            if (block.id == 'mekanism:block_refined_obsidian') {
              quantumAlloyBlockCount++;
              quantumAlloyBlocksToRemove.push(block); // Store blocks to be removed later
            }

            // Check for Nitro Crystal Block
            if (block.id == 'mysticalagriculture:prudentium_block') {
              nitroCrystalBlockCount++;
              nitroCrystalBlocksToRemove.push(block); // Store blocks to be removed later
            }

            // Check for Empowered Emeradic Crystal Block
            if (block.id == 'powah:spirited_crystal_block') {
              empoweredEmeradicCrystalBlockCount++;
              empoweredEmeradicCrystalBlocksToRemove.push(block); // Store blocks to be removed later
            }
          }
      }

      // If there are at least 6 Raw Celestigem Ore Blocks, exactly 8 Reinforced Deepslate Blocks in the corners,
      // and 4 of each of the new blocks, proceed with the crafting
      if (
        raweclipsealloyOreCount == 6 &&
        reinforce_casingCount === 8 &&
        quantumAlloyBlockCount == 4 &&
        nitroCrystalBlockCount == 4 &&
        empoweredEmeradicCrystalBlockCount == 4
      ) {
        removeBlocks(raweclipsAlloyOreToRemove);
        removeBlocks(reinforcedCasingToRemove);
        removeBlocks(quantumAlloyBlocksToRemove);
        removeBlocks(nitroCrystalBlocksToRemove);
        removeBlocks(empoweredEmeradicCrystalBlocksToRemove);


        // Create the Modularium item entity 2 blocks above the center block
        let x = catalyst.block.x;
        let y = catalyst.block.y + 2; // 2 blocks above the center block
        let z = catalyst.block.z;
        summonEntities(catalyst, "modular_machinery_reborn:modularium", 72, x, y, z)

        // Consume the Netherite Upgrade Smithing Template item
        catalyst.player.getMainHandItem().count -= 64;
      }
    }
  }
}
});
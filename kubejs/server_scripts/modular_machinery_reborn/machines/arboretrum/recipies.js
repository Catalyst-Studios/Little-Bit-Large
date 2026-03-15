
/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/

ServerEvents.recipes(catalyst => {

    let mod = 0;
    /**
     * Format: 'sapling_id': { log: 'log_id', leaves: 'leaves_id' }
     */
    let specialTrees = {
        // Minecraft Vanilla
        'minecraft:mangrove_propagule': { log: 'minecraft:mangrove_log', leaves: 'minecraft:mangrove_leaves' },
        'minecraft:azalea': { log: 'minecraft:oak_log', leaves: 'minecraft:azalea_leaves' },
        'minecraft:flowering_azalea': { log: 'minecraft:oak_log', leaves: 'minecraft:flowering_azalea_leaves' },

        // Biomes O' Plenty
        'biomesoplenty:orange_maple_sapling': { log: 'biomesoplenty:maple_log', leaves: 'biomesoplenty:orange_maple_leaves' },
        'biomesoplenty:yellow_maple_sapling': { log: 'biomesoplenty:maple_log', leaves: 'biomesoplenty:yellow_maple_leaves' },
        'biomesoplenty:red_maple_sapling': { log: 'biomesoplenty:maple_log', leaves: 'biomesoplenty:red_maple_leaves' },
        'biomesoplenty:origin_sapling': { log: 'minecraft:oak_log', leaves: 'biomesoplenty:origin_leaves' },
        'biomesoplenty:cypress_sapling': { log: 'minecraft:spruce_log', leaves: 'biomesoplenty:cypress_leaves' },
        'biomesoplenty:flowering_oak_sapling': { log: 'minecraft:oak_log', leaves: 'biomesoplenty:flowering_oak_leaves' },
        'biomesoplenty:rainbow_birch_sapling': { log: 'minecraft:birch_log', leaves: 'biomesoplenty:rainbow_birch_leaves' },
        'biomesoplenty:snowblossom_sapling': { log: 'minecraft:cherry_log', leaves: 'biomesoplenty:snowblossom_leaves' },

        // Occultism
        'occultism:otherworld_sapling': { log: 'occultism:otherworld_log', leaves: 'occultism:otherworld_leaves' },
        'occultism:otherworld_sapling_natural': { log: 'occultism:otherworld_log', leaves: 'occultism:otherworld_leaves' },

        // Twilight Forest
        'twilightforest:darkwood_sapling': { log: 'twilightforest:dark_log', leaves: 'twilightforest:dark_leaves' }, // Darkwood -> Dark Log
        'twilightforest:rainbow_oak_sapling': { log: 'twilightforest:twilight_oak_log', leaves: 'twilightforest:rainbow_oak_leaves' }, // Rainbow Oak usa tronco de Twilight Oak
        'twilightforest:hollow_oak_sapling': { log: 'twilightforest:twilight_oak_log', leaves: 'twilightforest:twilight_oak_leaves' }  // Hollow usa tronco normal
    };

    let createArboretumRecipe = (saplingId, logId, leavesId) => {
        if(!Item.exists(logId))
        {
            console.warn(`[CatJS] Tree ${saplingId} can't be created (Log item '${logId}' not found)`);
            return;
        }

        catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:arboretum", 200)
            .progressData(ProgressData.create().x(54).y(20))
            .width(110).height(60)
            .requireEnergy(10000, 0, 0)
            .requireItem(`1x ${saplingId}`, 25, 0)
            .requireFluid('10000x minecraft:water', 25, 40)
            .produceItem(`64x ${logId}`, 90, 0)
            .produceItem(`2x ${saplingId}`, 90, 20)
            .jei()
            .requireEnergy(10000, 0, 0)
            .requireItem(`1x ${saplingId}`, 25, 0)
            .emptyItem(25, 20)
            .requireFluid('10000x minecraft:water', 25, 40)
            .produceItem(`64x ${logId}`, 90, 0)
            .emptyItem(90, 20)
            .produceItem(`2x ${saplingId}`, 90, 40)
            .id(`catalyst:mmr/arboretrum/${saplingId.replace(":", "/")}_${mod}`);

        //if the leaves exists, make the recipe
        if(Item.of(leavesId))
        {
            catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:arboretum", 200)
                .progressData(ProgressData.create().x(54).y(20))
                .width(110).height(60)
                .requireEnergy(10000, 0, 0)
                .requireItem(`1x ${saplingId}`, 25, 0)
                .requireItem('reliquary:shears_of_winter', 0, 25, 20)
                .requireFluid('10000x minecraft:water', 25, 40)
                .produceItem(`64x ${logId}`, 90, 0)
                .produceItem(`64x ${leavesId}`, 90, 20)
                .produceItem(`2x ${saplingId}`, 90, 40)
                .id(`catalyst:mmr/arboretrum/leaves_${saplingId.replace(":", "/")}_${mod}`)
                .priority(1);
        }
        mod++
    };

    Ingredient.of('#minecraft:saplings').stacks.forEach(item => {
        let saplingId = item.getId();
        let logId = '';
        let leavesId = '';

        //special cases
        if(specialTrees[saplingId])
        {
            logId = specialTrees[saplingId].log;
            leavesId = specialTrees[saplingId].leaves;
        } 
        else if(saplingId.endsWith('_sapling')) //that uses the sapling -> log name (blame on you if you dont)
        {
            let baseName = saplingId.replace('_sapling', '');
            logId = `${baseName}_log`;
            leavesId = `${baseName}_leaves`;
        } 
        else
        {
            console.warn(`[CatJS] Tree ${saplingId} can't be created (Unknown naming format & not in special list). Please report this`);
            return;
        }
        try {
            createArboretumRecipe(saplingId, logId, leavesId);
        }
        catch(e)
        {
            console.warn("[CatJS] Error on tree: " + saplingId + " --> " + e)
        }
        
    });

    console.log("[CatJS] Added Arboletum recipes")
});

/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/

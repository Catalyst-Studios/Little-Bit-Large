/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
This script specifically was written by GitHub user dmauldin
*/

const cropRegistry = Java.loadClass('com.blakebr0.mysticalagriculture.registry.CropRegistry')

const secondarySeed = 0.01
const secondarySeedTierCutoff = 5

ServerEvents.tags('item', catalyst => {
    let cropTiers = cropRegistry.getInstance().getTiers()
    let farmlandTiers = Array(cropTiers.length)

    for(const cropTier of cropTiers)
    {
        farmlandTiers[cropTier.getValue() - 1] = cropTier.getFarmland()

        if(cropTier.getValue() >= secondarySeedTierCutoff)
        {
            cropTier.setSecondarySeedDrop(false)
            cropTier.setBaseSecondaryChance(0)
        }
        else
        {
            cropTier.setBaseSecondaryChance(secondarySeed)
        }
    } 

    let farmlandTiersFiltered = farmlandTiers.filter(farm => farm !== null && 
                                                     farm !== undefined && 
                                                     farm.toString() !== "undefined")
    //
    for(let i = 0; i < farmlandTiersFiltered.length; i++)
    {
        for(let t = 0; t <= i; t++)
        {
            catalyst.add(`kubejs:farmland/${farmlandTiersFiltered[t].getIdLocation().getPath().replace('_farmland', '')}`, farmlandTiersFiltered[i].getId())
        }
    }
    catalyst.add(`kubejs:farmland/${farmlandTiersFiltered[farmlandTiersFiltered.length-1].getIdLocation().getPath().replace('_farmland', '')}`, farmlandTiersFiltered[farmlandTiersFiltered.length-1].getId())
})

ServerEvents.recipes(catalyst => {
    if(Platform.isLoaded('immersiveengineering'))
    {
        let crops = cropRegistry.getInstance().getCrops().filter(crop => 
                                                                 crop !== null && 
                                                                 crop !== undefined)
        crops.forEach(crop => {
            if(!crop.isEnabled()) return;
            catalyst.custom({
                type: 'immersiveengineering:cloche',
                results: [
                    {
                        basePredicate: {
                            item: crop.getEssenceItem().getId()
                        },
                        count: 2
                    }
                ],
                input: Ingredient.of(crop.getSeedsItem()).toJson(),
                soil: Ingredient.of((crop.getCruxBlock()) ?? (crop.getTier().getFarmland() === null ? 
                                                              "insanium" : 
                                                              `#kubejs:farmland/${crop.getTier().getFarmland().getIdLocation().getPath().replace('_farmland', '')}`)).toJson(),
                time: Math.min(75 + (100 * crop.getTier().getValue() * 0.75), 500),
                render: {
                    type: 'immersiveengineering:crop',
                    block: crop.getCropBlock().getId()
                }
            })
        })
    }
})

/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
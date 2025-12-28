ServerEvents.recipes(event => {
    event.remove({ 
        type: 'ars_nouveau:apparatus_enchanting',
        enchantment: 'ars_nouveau:reactive'
    })
    event.remove({ 
        type: 'ars_nouveau:enchantment',
        enchantment: 'ars_nouveau:reactive'
    })
    event.remove({type: 'ars_nouveau:reactive_enchantment'})

    event.custom({
        type: "ars_nouveau:enchanting_apparatus",
        keepNbtOfReagent: false,
        sourceCost: 3000,
        reagent: {
            item: "minecraft:iron_ingot"
        },
        pedestalItems: [
            { item: "ars_nouveau:spell_parchment" },
            { tag: "c:storage_blocks/lapis" },
            { tag: "c:storage_blocks/source" }
        ],
        result: {
            id: "minecraft:enchanted_book",
            count: 1,
            components: {
                "minecraft:stored_enchantments": {
                    levels: {
                        "ars_nouveau:reactive": 1
                    }
                }
            }
        }
    })

    event.custom({
        type: "ars_nouveau:enchanting_apparatus",
        keepNbtOfReagent: false,
        sourceCost: 6000,
        reagent: {
            item: "minecraft:gold_ingot"
        },
        pedestalItems: [
            { item: "minecraft:blaze_powder" },
            { item: "minecraft:blaze_powder" },
            { item: "minecraft:blaze_powder" },
            { item: "minecraft:blaze_powder" },
            { item: "ars_nouveau:air_essence" },
            { item: "ars_nouveau:earth_essence" },
            { item: "ars_nouveau:fire_essence" },
            { item: "ars_nouveau:water_essence" }
        ],
        result: {
            id: "minecraft:enchanted_book",
            count: 1,
            components: {
                "minecraft:stored_enchantments": {
                    levels: {
                        "ars_nouveau:reactive": 2
                    }
                }
            }
        }
    })

    event.custom({
        type: "ars_nouveau:enchanting_apparatus",
        keepNbtOfReagent: false,
        sourceCost: 9000,
        reagent: {
            item: "minecraft:diamond"
        },
        pedestalItems: [
            { tag: "c:gems/emerald" },
            { tag: "c:gems/emerald" },
            { tag: "c:gems/emerald" },
            { tag: "c:gems/emerald" },
            { tag: "c:ender_pearls" },
            { item: "ars_nouveau:abjuration_essence" },
            { item: "ars_nouveau:conjuration_essence" },
            { item: "ars_nouveau:manipulation_essence" }
        ],
        result: {
            id: "minecraft:enchanted_book",
            count: 1,
            components: {
                "minecraft:stored_enchantments": {
                    levels: {
                        "ars_nouveau:reactive": 3
                    }
                }
            }
        }
    })

    event.custom({
        type: "ars_nouveau:enchanting_apparatus",
        keepNbtOfReagent: false,
        sourceCost: 9000,
        reagent: {
            item: "minecraft:netherite_ingot"
        },
        pedestalItems: [
            { tag: "c:gems/diamond" },
            { tag: "c:gems/diamond" },
            { tag: "c:gems/diamond" },
            { tag: "c:gems/diamond" },
            { tag: "c:ender_pearls" },
            { item: "ars_nouveau:wilden_tribute" }
        ],
        result: {
            id: "minecraft:enchanted_book",
            count: 1,
            components: {
                "minecraft:stored_enchantments": {
                    levels: {
                        "ars_nouveau:reactive": 4
                    }
                }
            }
        }
    })

    console.log("[CatJS] Added new Reactive Recipe")
})
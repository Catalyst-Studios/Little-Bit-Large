
MMREvents.machines(catalyst => {
    catalyst.create("mmr:primitive_furnace")
        .color('#FFb68528')
        .name('Primitive Furnace')
        .structure(
            MMRStructureBuilder.create()
                .pattern([
                    ["aaa", "aba", "aaa"],
                    ["cmc", "e d", "ccc"],
                    ["ccc", "cfc", "ccc"],
                    [" c ", "cgc", " c "],
                    ["hch", "cic", "hch"]
                ])
                .keys({
                    "a": ["minecraft:bricks"],
                    "b": ["minecraft:magma_block"],
                    "c": ["minecraft:mud_bricks"],
                    "d": [
                        "modular_machinery_reborn:inputbus_tiny",
                        'modular_machinery_reborn:outputbus_tiny'
                    ],
                    "e": [
                        "modular_machinery_reborn:inputbus_tiny",
                        'modular_machinery_reborn:outputbus_tiny'
                    ],
                    "f": ["immersiveengineering:coke"],
                    "g": ["minecraft:campfire[lit=true]"],
                    "h": ["minecraft:mud_brick_slab[type=top]"],
                    "i": ["minecraft:iron_trapdoor[half=top]"]
                })
        )
        .texture("modular_machinery_reborn:item_input_bus_tiny",
                false,
                "minecraft:block/mud_bricks",
                null
        )
        .texture("modular_machinery_reborn:item_output_bus_tiny",
                false,
                "minecraft:block/mud_bricks",
                null
        )
})
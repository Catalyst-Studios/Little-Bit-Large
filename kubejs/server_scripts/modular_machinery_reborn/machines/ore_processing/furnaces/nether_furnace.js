/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
MMREvents.machines(catalyst => {
    catalyst.create("mmr:nether_furnace")
        .color('#ff5b1215')
        .name(Component.translatable("catalyst.mmr.machine.soul_furnace"))
        .structure(
            MMRStructureBuilder.create()
            .pattern([
                ["aaa", "aba", "aaa"],
                ["cmc", "f d", "ccc"],
                ["ici", "chc", "gcg"],
                [" j ", "jkj", " j "],
                ["ljl", "jnj", "ljl"],
                ["oio", "q p", "ogo"]
            ])
            .keys({
                "a": ["chipped:brick_bordered_red_nether_bricks"],
                "b": ["minecraft:magma_block"],
                "c": ["create:cut_scorchia_bricks"],
                "d": ["modular_machinery_reborn:inputbus_tiny"],
                "f": ["modular_machinery_reborn:outputbus_tiny"],
                "g": ["create:cut_scorchia_brick_stairs"],
                "h": ["minecraft:glowstone"],
                "i": ["create:cut_scorchia_brick_stairs"],
                "j": ["chipped:red_nether_bricks_bricks"],
                "k": ["minecraft:soul_campfire"],
                "l": ["minecraft:soul_lantern[hanging=true]"],
                "n": ["minecraft:iron_trapdoor"],
                "o": ["create:cut_scorchia_brick_slab[type=bottom]"],
                "p": ["create:cut_scorchia_brick_stairs"],
                "q": ["create:cut_scorchia_brick_stairs"]
            })
        )
})
/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
MMREvents.machines(catalyst => {
    catalyst.create("mmr:end_furnace")
        .color('#ff1f1b15')
        .name(Component.translatable("catalyst.mmr.machine.ender_furnace"))
        .structure(
            MMRStructureBuilder.create()
            .pattern([
                ["aaa", "aba", "aaa"],
                ["cmc", "f d", "ccc"],
                ["ccc", "cgc", "ccc"],
                ["jcj", "cic", "hch"],
                [" k ", "k k", " k "],
                [" l ", "l l", " l "],
                [" k ", "k k", " k "],
                ["ncn", "c c", "ncn"],
                ["ojo", "q p", "oho"]
            ])
            .keys({
                "a": ["minecraft:polished_blackstone_bricks"],
                "b": ["minecraft:magma_block"],
                "c": ["minecraft:end_stone_bricks"],
                "d": ["modular_machinery_reborn:outputbus_small"],
                "f": ["modular_machinery_reborn:inputbus_small"],
                "g": ["minecraft:purple_concrete"],
                "h": ["minecraft:polished_blackstone_brick_stairs"],
                "i": ["occultism:spirit_campfire"],
                "j": ["minecraft:polished_blackstone_brick_stairs"],
                "k": ["minecraft:end_stone_brick_wall"],
                "l": ["minecraft:polished_blackstone_brick_wall"],
                "n": ["ars_additions:sourcestone_magelight_lantern[hanging=true]"],
                "o": ["minecraft:polished_blackstone_brick_slab[type=bottom]"],
                "p": ["minecraft:polished_blackstone_brick_stairs"],
                "q": ["minecraft:polished_blackstone_brick_stairs"]
            })
        )
})
/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
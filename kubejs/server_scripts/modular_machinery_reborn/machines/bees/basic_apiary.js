/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
MMREvents.machines(catalyst => {
    catalyst.create("mmr:primitive_apiary")
        .color('#fff4cc45')
        .name(Component.translatable("catalyst.mmr.machine.primitive_apiary"))
        .structure(
            MMRStructureBuilder.create()
            .pattern([
                ["fgmgf", "ceeec", "bbdbb", " bbb ", "     ", "     "],
                [" jjj ", "c   c", " b b ", "  c  ", "     ", "     "],
                [" jjj ", "c   c", "olnlk", "  c  ", "     ", "     "],
                ["     ", "srrrs", "rrsrr", "rscsr", "qrsrq", "pqrqp"],
                ["     ", " qqqr", "qqrqq", "qrsrq", "pqrqp", "tpqpt"],
                ["     ", "     ", " pqp ", " qrq ", " pqp ", "     "],
                ["     ", "     ", "  p  ", " pqp ", "  p  ", "     "]
            ])
            .keys({
                "b": ['#minecraft:planks'],
                "c": ['#minecraft:logs'],
                "d": ["minecraft:campfire"],
                "e": [
                    "minecraft:grass_block",
                    "minecraft:dirt"
                ],
                "f": ["minecraft:lantern"],
                "g": ["modular_machinery_reborn:outputbus_tiny"],
                "j": ["minecraft:glass"],
                "k": ['#minecraft:fences'],
                "l": ['#minecraft:fences'],
                "n": [
                    '#productivebees:advanced_beehives',
                    'minecraft:beehive',
                    'minecraft:bee_nest'
                ],
                "o": ['#minecraft:fences'],
                "p": ['#minecraft:leaves'],
                "q": ['#minecraft:leaves'],
                "r": ['#minecraft:leaves'],
                "s": ['#minecraft:leaves'],
                "t": ['#minecraft:leaves']
            })
        )
})
/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
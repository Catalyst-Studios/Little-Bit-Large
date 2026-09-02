/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
MMREvents.machines(catalyst => {
    catalyst.create("mmr:space")
        .color('#FFaa7daa')
        .name(Component.translatable("catalyst.mmr.machine.space"))
        .structure(
            MMRStructureBuilder.create()
            .pattern([
                ["aaabbbcbbbaaa","adabeeceebada","aaabeeceebaaa","bbbieeceeibbb","beeeccccceeeb","beeechchceeeb","ccccccccccccc","beeechchceeeb","beeeccccceeeb","bbbfeeceegbbb","aaabeeceebaaa","adabeeceebada","aaabbbcbbbaaa"],
                ["j    bmb    j","             ","             ","             ","    hhhhh    ","b   hkhkh   b","b   hhhhh   b","b   hkhkh   b","    hhhhh    ","             ","             ","             ","j    bbb    j"],
                ["             ","             ","             ","             ","    h   h    ","      h      ","     hhh     ","      h      ","    h   h    ","             ","             ","             ","             "],
                ["             ","             ","             ","             ","    h   h    ","     hhh     ","     hhh     ","     hhh     ","    h   h    ","             ","             ","             ","             "],
                ["             ","             ","             ","             ","    j   j    ","     ccc     ","     ccc     ","     ccc     ","    j   j    ","             ","             ","             ","             "],
                ["             ","             ","             ","             ","             ","     ccc     ","     ccc     ","     ccc     ","             ","             ","             ","             ","             "],
                ["             ","             ","             ","             ","             ","             ","      c      ","             ","             ","             ","             ","             ","             "],
                ["             ","             ","             ","             ","             ","      k      ","     kck     ","      k      ","             ","             ","             ","             ","             "],
                ["             ","             ","             ","     hhh     ","    hhhhh    ","   hhhhhhh   ","   hhhchhh   ","   hhhhhhh   ","    hhhhh    ","     hhh     ","             ","             ","             "],
                ["             ","             ","             ","             ","      e      ","     kek     ","    eecee    ","     kek     ","      e      ","             ","             ","             ","             "],
                ["             ","             ","             ","             ","             ","      c      ","     ccc     ","      c      ","             ","             ","             ","             ","             "],
                ["             ","             ","             ","             ","     ccc     ","    cecec    ","    cckcc    ","    cecec    ","     ccc     ","             ","             ","             ","             "],
                ["             ","             ","             ","             ","             ","             ","      l      ","             ","             ","             ","             ","             ","             "]
            ])
            .keys({
                "a": [
                    "eternalores:pearl_block"
                ],
                "b": [
                    "modular_machinery_reborn:casing_reinforced",
                    '#modular_machinery_reborn:energyhatch',
                    '#modular_machinery_reborn:itembus',
                    '#modular_machinery_reborn:parallelhatch'
                ],
                "c": [
                    "eternalores:sculkite_block"
                ],
                "d": [
                    "chipped:edged_redstone_lamp"
                ],
                "e": [
                    "eternalores:sanguis_vivus_block"
                ],
                "f": [
                    "chipped:warning_black_concrete"
                ],
                "g": [
                    "chipped:warning_black_concrete"
                ],
                "h": [
                    "eternalores:biosteel_block"
                ],
                "i": [
                    "chipped:warning_black_concrete"
                ],
                "j": [
                    "immersiveengineering:cagelamp"
                ],
                "k": [
                    "minecraft:sea_lantern"
                ],
                "l": [
                    "mmr_cosmetics:sculk_cannon"
                ]
            })
        )
        // .sound("running", {
        //     ambient: "minecraft:entity.generic.explode",
        //     interaction: {
        //         volume: 100,
        //         pitch: 1
        //     }
        // })
        
})

/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
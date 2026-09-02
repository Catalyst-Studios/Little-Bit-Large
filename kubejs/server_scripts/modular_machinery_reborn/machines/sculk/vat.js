/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
MMREvents.machines(catalyst => {
    catalyst.create("mmr:vat")
        .color('#FF08C4CF')
        .name(Component.translatable("catalyst.mmr.machine.vat"))
        .structure(
            MMRStructureBuilder.create()
            .pattern([
                ["af     da","caaemeaab"," aaaaaaa "," eaaaaae ","geaaaaaeg"," eaaaaae "," aaaaaaa ","daaeeeaaf","ab     ca"],
                ["h       h","         ","  iiiii  ","  igggi  "," gigigig "," gigggig "," giiiiig ","         ","h       h"],
                ["h       h","         ","  iaeai  ","  aggga  ","  egige  "," gagggag "," giaeaig ","         ","h       h"],
                ["h       h","         ","  aaaaa  ","  aggga  ","  agiga  "," ga   ag ","  aaaaa  ","         ","h       h"],
                ["h       h","      g  ","  iaeai  ","  a  ga  ","  eggge  "," ga   ag ","  iaeai  ","         ","h       h"],
                ["h       h","     gg  ","     g   ","     g   ","  ggjg   "," gg   gg ","         ","         ","h       h"],
                ["h       h","         ","         ","         ","    i    ","         ","         ","         ","h       h"],
                ["h       h","   aia   ","  aaiaa  "," aaaiaaa "," iiiiiii "," aaaiaaa ","  aaiaa  ","   aia   ","h       h"],
                ["h       h","         ","    i    ","   iii   ","  iieii  ","   iii   ","    i    ","         ","h       h"],
                ["h       h","         ","         ","         ","    a    ","         ","         ","         ","h       h"],
                ["h       h","         ","         ","         ","    k    ","         ","         ","         ","h       h"],
                ["h       h","         ","         ","         ","    k    ","         ","         ","         ","h       h"],
                ["iiiiiiiii","iaaaiaaai","iaeaiaeai","iaaaiaaai","iiiiiiiii","iaaaiaaai","iaeaiaeai","iaaaiaaai","iiiiiiiii"]
            ])
            .keys({
                "a": [
                    "create:shadow_steel_casing"
                ],
                "b": [
                    "actuallyadditions:smooth_black_quartz_wall"
                ],
                "c": [
                    "actuallyadditions:smooth_black_quartz_wall"
                ],
                "d": [
                    "actuallyadditions:smooth_black_quartz_wall"
                ],
                "e": [
                    "create:refined_radiance_casing",
                    '#modular_machinery_reborn:energyhatch',
                    '#modular_machinery_reborn:itembus',
                    '#modular_machinery_reborn:fluidhatch',
                    '#modular_machinery_reborn_mekanism:chemicalhatch',
                    '#modular_machinery_reborn:parallelhatch'
                ],
                "f": [
                    "actuallyadditions:smooth_black_quartz_wall"
                ],
                "g": [
                    "minecraft:sculk"
                ],
                "h": [
                    "actuallyadditions:smooth_black_quartz_wall"
                ],
                "i": [
                    "modular_machinery_reborn:casing_reinforced"
                ],
                "j": [
                    "create:gearbox[axis=z]"
                ],
                "k": [
                    "ars_additions:archwood_chain[axis=y]"
                ]
            })
        )
        
})

/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
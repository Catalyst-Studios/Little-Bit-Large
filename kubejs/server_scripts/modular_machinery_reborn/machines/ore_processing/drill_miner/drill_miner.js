/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
MMREvents.machines(catalyst => {
    catalyst.create("mmr:drill_miner")
        .color('#FF484949')
        .name('Head Drill Miner')
        .structure(
            MMRStructureBuilder.create()
            .pattern([
                ["ljkji","gfffe","hfffh","gfffe","dbcba"],
                ["     "," wvu ","qtsrq"," pon ","     "],
                ["     ","     ","q m q","     ","     "],
                ["     "," GFE ","qDCBq"," Ayx ","     "],
                ["QPPPO","MLLLK","hLNLh","MLLLK","JIIIH"],
                ["RRRRR","R   R","R   R","R   R","RRRRR"],
                ["RRRRR","R   R","R   R","R   R","RRRRR"],
                ["RRRRR","R   R","R   R","R   R","RRRRR"],
                ["SURTS","W   W","R   R","V   V","SURTS"],
                ["  R  "," ZRZ ","RRYRR"," XRX ","  R  "]
            ])
            .keys({
                    "c": [
                        "modular_machinery_reborn:redstone_port",
                        "actuallyadditions:smooth_black_quartz_block"
                    ],
                    "f": ["modular_machinery_reborn:casing_plain"],
                    "h": ["modular_machinery_reborn:casing_circuitry"],
                    "s": ["modular_machinery_reborn:casing_reinforced"],
                    "Y": ["modular_machinery_reborn:casing_gearbox"],
                    "N": ["modular_machinery_reborn:entity_detector"],
                    "Z": ["#modular_machinery_reborn:energyinputhatch"],
                    "X": [
                        "#modular_machinery_reborn:fluidoutputhatch",
                        "#modular_machinery_reborn:itembus"
                    ],

                    "g": ["actuallyadditions:smooth_black_quartz_block"],
                    "e": ["actuallyadditions:smooth_black_quartz_block"],
                    "j": ["actuallyadditions:smooth_black_quartz_block"],
                    "b": ["actuallyadditions:smooth_black_quartz_block"],
                    "a": ["actuallyadditions:smooth_black_quartz_block"],
                    "d": ["actuallyadditions:smooth_black_quartz_block"],
                    "i": ["actuallyadditions:smooth_black_quartz_block"],
                    "l": ["actuallyadditions:smooth_black_quartz_block"],

                    "M": ["actuallyadditions:smooth_black_quartz_block"],
                    "K": ["actuallyadditions:smooth_black_quartz_block"],
                    "P": ["actuallyadditions:smooth_black_quartz_block"],
                    "I": ["actuallyadditions:smooth_black_quartz_block"],
                    "Q": ["actuallyadditions:smooth_black_quartz_block"],
                    "H": ["actuallyadditions:smooth_black_quartz_block"],
                    "J": ["actuallyadditions:smooth_black_quartz_block"],
                    "O": ["actuallyadditions:smooth_black_quartz_block"],

                    "t": ["luminax:black_luminax_block"],
                    "r": ["luminax:black_luminax_block"],
                    "v": ["luminax:black_luminax_block"],
                    "o": ["luminax:black_luminax_block"],
                    "p": ["luminax:black_luminax_block"],
                    "u": ["luminax:black_luminax_block"],
                    "w": ["luminax:black_luminax_block"],
                    "n": ["luminax:black_luminax_block"],

                    "D": ["luminax:black_luminax_block"],
                    "B": ["luminax:black_luminax_block"],
                    "F": ["luminax:black_luminax_block"],
                    "y": ["luminax:black_luminax_block"],
                    "A": ["luminax:black_luminax_block"],
                    "E": ["luminax:black_luminax_block"],
                    "G": ["luminax:black_luminax_block"],
                    "x": ["luminax:black_luminax_block"],

                    "S": ["mcwpaths:deepslate_crystal_floor"],
                    "U": ["mcwpaths:deepslate_crystal_floor"],
                    "T": ["mcwpaths:deepslate_crystal_floor"],
                    "W": ["mcwpaths:deepslate_crystal_floor"],
                    "V": ["mcwpaths:deepslate_crystal_floor"],

                    "k": ["modularrouters:modular_router"],
                    "C": ["industrialforegoing:stasis_chamber"],
                    "q": ["minecraft:reinforced_deepslate"],
                    "R": ["catalystcore:reinforced_glass"],
                    "L": ["forcecraft:force_brick_black"]
                })
        )
    
})
/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
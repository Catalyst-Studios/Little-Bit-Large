/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
MMREvents.machines(catalyst => {
    catalyst.create("mmr:crystalline_fabricator")
        .color('#fffff9f9')
        .name('Crystalline Fabricator')
        .structure(
            MMRStructureBuilder.create()
                .pattern([
                    ["      afgmgfa      ", "      bcdddcb      ", "      bddeddb      ", "      bdeeedb      ", "      bddeddb      ", "      bcdddcb      ", "      abbbbba      "],
                    ["      hcdddch      ", "ijjjjj k   k jjjjji", "illllln     nllllli", "illllln     nllllli", "illllln     nllllli", "ijjjjj k   k jjjjji", "      hcdddch      "],
                    ["      hdddddh      ", "illllln     nllllli", "qp   p       p   po", "qp   p       p   po", "qp   p       p   po", "illllln     nllllli", "      hdddddh      "],
                    ["      hdddddh      ", "illllln     nllllli", "qp   p       p   po", "ts   s       s   sr", "qp   p       p   po", "illllln     nllllli", "      hdddddh      "],
                    ["      hdddddh      ", "illllln     nllllli", "qp   p       p   po", "qp   p       p   po", "qp   p       p   po", "illllln     nllllli", "      hdddddh      "],
                    ["      hcdddch      ", "ijjjjj k   k jjjjji", "illllln     nllllli", "illllln     nllllli", "illllln     nllllli", "ijjjjj k   k jjjjji", "      hcdddch      "],
                    ["      abbbbba      ", "      bcdddcb      ", "      bddeddb      ", "      bdeeedb      ", "      bddeddb      ", "      bcdddcb      ", "      abbbbba      "]
                ])
                .keys({
                    "a": ["modular_machinery_reborn:casing_reinforced"],
                    "b": ["chipped:rough_quartz_block"],
                    "c": ["modular_machinery_reborn:casing_plain"],
                    "d": ["crystalix:black_crystalix_glass"],
                    "e": ["ae2:quartz_block"],
                    "f": ["modular_machinery_reborn:energyinputhatch_ultimate"],
                    "g": ["chipped:rough_quartz_block"],
                    "h": ["chipped:curly_quartz_block_pillar[axis=y]"],
                    "i": ["chipped:bordered_obsidian"],
                    "j": ["chipped:pillar_obsidian_bricks"],
                    "k": ["ae2:quartz_vibrant_glass"],
                    "l": ["crystalix:purple_crystalix_glass"],
                    "n": ["chisel:steelframe/glass"],
                    "o": ["ars_nouveau:sourcestone_large_bricks"],
                    "p": ["rechiseled:amethyst_block_bordered_diagonal_tiles_connecting"],
                    "q": ["ars_nouveau:sourcestone"],
                    "r": ["modular_machinery_reborn:inputbus_tiny"],
                    "s": ["minecraft:amethyst_block"],
                    "t": ["modular_machinery_reborn:outputbus_tiny"]
                })
        )
})
/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/


/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
MMREvents.machines(catalyst => {
    catalyst.create("mmr:data_extractor")
        .color('#00191919')
        .name('Data extractor')
        .structure(
            MMRStructureBuilder.create()
                .pattern([
                    [" b bmb b ", "bbbcccbbb", " bbbbbbb ", "bcb   bcb", "bcb   bcb", "bcb   bcb", " bbbbbbb ", "bbbcccbbb", " b bbb b "],
                    ["         ", "  l   l  ", " hfgggfe ", "  gnnng  ", "  gn ng  ", "  gnnng  ", " hfgggfe ", "  d   d  ", "         "],
                    ["         ", "  l   l  ", " hfgggfe ", "  g n g  ", "  gn ng  ", "  g n g  ", " hfgggfe ", "  d   d  ", "         "],
                    ["         ", "         ", "  lgggl  ", "  g   g  ", "  gnnng  ", "  g   g  ", "  dgggd  ", "         ", "         "],
                    ["         ", "         ", "  lgggl  ", "  g n g  ", "  g n g  ", "  g n g  ", "  dgggd  ", "         ", "         "],
                    ["         ", "  l   l  ", " hfgggfe ", "  g n g  ", "  gn ng  ", "  g n g  ", " hfgggfe ", "  d   d  ", "         "],
                    ["         ", "  l   l  ", " hfgggfe ", "  gnnng  ", "  gn ng  ", "  gnnng  ", " hfgggfe ", "  d   d  ", "         "],
                    [" b bbb b ", "bbbcccbbb", " bbbbbbb ", "bcbbbbbcb", "bcbbbbbcb", "bcbbbbbcb", " bbbbbbb ", "bbbcccbbb", " b bbb b "]])
                .keys({
                    "b": ["modular_machinery_reborn:casing_plain",
                        '#modular_machinery_reborn:itembus',
                        '#modular_machinery_reborn:energyinputhatch'
                    ],
                    "c": ["modular_machinery_reborn:casing_firebox"],
                    "d": ["hostilenetworks:loot_fabricator[facing=south]"],
                    "e": ["hostilenetworks:loot_fabricator[facing=east]"],
                    "f": ["modular_machinery_reborn:casing_vent"],
                    "g": ["ae2:quartz_vibrant_glass"],
                    "h": ["hostilenetworks:loot_fabricator[facing=west]"],
                    "l": ["hostilenetworks:loot_fabricator[facing=north]"],
                    "n": ["ae2:controller"]
                }))
})
/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
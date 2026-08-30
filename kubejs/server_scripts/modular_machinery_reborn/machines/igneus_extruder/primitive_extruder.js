MMREvents.machines(catalyst => {
    catalyst.create("mmr:primitive_extruder")
        .color('#ff66605f')
        .name(Component.translatable("catalyst.mmr.machine.primitive_extruder"))
        .structure(
            MMRStructureBuilder.create()
            .pattern([
                ["  g   g  ","  b   b  ","cbbdddbbe","  dfbfd  ","  dbbbd  ","  dfbfd  ","cbbdddbbe","  b   b  ","  a   a  "],
                ["         ","  b   b  "," bb   bb ","         ","    b    ","         "," bb   bb ","  b   b  ","         "],
                ["         ","  h   h  "," hb   bh ","         ","         ","         "," hb   bh ","  h   h  ","         "],
                ["         ","         ","  j   j  ","         ","    j    ","         ","  j   j  ","         ","         "],
                ["         ","         ","  j   j  ","         ","    m    ","         ","  j   j  ","         ","         "],
                ["         ","         ","  j   j  ","    n    ","    l    ","    k    ","  j   j  ","         ","         "],
                ["  s   s  ","  b   b  ","pbbqqqbbr","  b b b  ","  bbbbb  ","  b b b  ","pbbqqqbbr","  b   b  ","  o   o  "]
            ])
            .keys({
            "a": [
                'minecraft:cobblestone_wall'
            ],
            "b": [
                '#productivebees:flowers/quarry'
            ],
            "c": [
                'minecraft:cobblestone_wall'
            ],
            "d": [
                'minecraft:stone_slab',
                'modular_machinery_reborn:outputbus_tiny'
            ],
            "e": [
                'minecraft:cobblestone_wall'
            ],
            "f": [
                "minecraft:spruce_log"
            ],
            "g": [
                'minecraft:cobblestone_wall'
            ],
            "h": [
                "minecraft:lantern"
            ],
            "j": [
                'minecraft:cobblestone_wall'
            ],
            "k": [
                'minecraft:cobblestone_wall'
            ],
            "l": [
                'minecraft:cobblestone_wall'
            ],
            "n": [
                'minecraft:cobblestone_wall'
            ],
            "o": [
                "mcwlights:chain_wall_lantern"
            ],
            "p": [
                "mcwlights:chain_wall_lantern"
            ],
            "q": [
                "minecraft:spruce_log"
            ],
            "r": [
                "mcwlights:chain_wall_lantern"
            ],
            "s": [
                "mcwlights:chain_wall_lantern"
            ]
            })
        )
})
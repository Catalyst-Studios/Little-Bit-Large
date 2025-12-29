MMREvents.machines(catalyst => {
    catalyst.create("mmr:advanced_apiary")
        .color("#ff603b91")
        .name("Magical Apiary")
        .structure(
            MMRStructureBuilder.create()
                .pattern([
                    ["aaaaaaaaa","abbbbbbba","abbbbbbba","abbbbbbba","abbbbbbba","abbbbbbba","abbbbbbba","abbbbbbba","aaaaaaaaa"],
                    ["c       c"," d  i  d ","         ","    c    "," h cgc f ","    c    ","         "," d  e  d ","c       c"],
                    ["         "," d  i  d ","         ","         "," h  g  f ","         ","         "," d  e  d ","         "],
                    ["         "," kkkkkkk "," jlllllj "," jlllllj "," jlllllj "," jlllllj "," jlllllj "," kkkkkkj ","         "],
                    ["         "," nnnnnnn "," nooooon "," nopppon "," nopqpon "," nopppon "," nooooon "," nnnnnnn ","         "],
                    ["         "," raamaar "," aoooooa "," aosssoa "," rosqsor "," aosssoa "," aoooooa "," raaraar ","         "],
                    ["         "," nnnnnnn "," nooooon "," nopppon "," nopqpon "," nopppon "," nooooon "," nnnnnnn ","         "],
                    ["         "," gkkkggg "," glllllg "," glllllg "," glllllg "," glllllg "," glllllg "," ggggggg ","         "],
                    ["         ","         ","  tt tt  ","  t   t  ","    c    ","  t   t  ","  tt tt  ","         ","         "]
                ])
                .keys({
                    "a": [
                        "#modular_machinery_reborn:energyoutputhatch",
                        "#modular_machinery_reborn:energyinputhatch",
                        "#modular_machinery_reborn:fluidoutputhatch",
                        "#modular_machinery_reborn:outputbus",
                        "#modular_machinery_reborn:fluidinputhatch",
                        "#modular_machinery_reborn:inputbus",
                        "#modular_machinery_reborn:parallelhatch",
                        "modular_machinery_reborn:casing_plain"
                    ],
                    "b": ["ars_nouveau:sourcestone_large_bricks"],
                    "c": ["ars_additions:polished_sourcestone_lantern"],
                    "d": ["ars_elemental:stripped_yellow_archwood_log"],
                    "e": ["ars_nouveau:stripped_red_archwood_log"],
                    "f": ["ars_nouveau:stripped_green_archwood_log"],
                    "g": ["ars_nouveau:archwood_planks"],
                    "h": ["ars_nouveau:stripped_blue_archwood_log"],
                    "i": ["ars_nouveau:stripped_purple_archwood_log"],
                    "j": ["ars_nouveau:archwood_planks"],
                    "k": ['ars_nouveau:archwood_planks'],
                    "l": ["ars_nouveau:archwood_planks"],
                    "n": ["#c:storage_blocks/honeycombs"],
                    "o": ["minecraft:honey_block"],
                    "p": ["ars_nouveau:source_gem_block"],
                    "q": ["modular_machinery_reborn:casing_firebox"],
                    "r": ["modular_machinery_reborn:casing_reinforced"],
                    "s": ["#c:storage_blocks/honeycombs"],
                    "t": ["ars_nouveau:archwood_slab[type=bottom]"]
                })
        );
});


/*MMREvents.machines(catalyst => {
    catalyst.create("mmr:advanced_apiary")
    .color("#ffc9780a")
    .name("Advanced Apiary")
    .structure(
        MMRStructureBuilder.create()
        .pattern(
            [
                ["a   a","     ","     ","     ","a   a"],
                ["anmja","nfffn","cfffc","nfffn","ancna"],
                ["kkkkk","klllk","klhlk","klllk","kkkkk"],
                ["hhhhh","hlllh","hlhlh","hlllh","hhhhh"],
                ["kkkkk","klllk","klhlk","klllk","kkkkk"],
                ["ancna","nfffn","cfffc","nfffn","ancna"]
            ]
        )
        .keys(
            {
                "a":["modular_machinery_reborn:casing_reinforced"],
                "f":["modular_machinery_reborn:casing_circuitry"],
                "c":["modular_machinery_reborn:casing_plain"],
                "k":["#minecraft:planks"],
                "l":["minecraft:honey_block"],
                "h":["#c:storage_blocks/honeycombs"],
                "n": [
                    "#modular_machinery_reborn:energyoutputhatch",
                    "#modular_machinery_reborn:energyinputhatch",
                    "#modular_machinery_reborn:fluidoutputhatch",
                    "#modular_machinery_reborn:outputbus",
                    "#modular_machinery_reborn:fluidinputhatch",
                    "#modular_machinery_reborn:inputbus",
                    'modular_machinery_reborn:biome_reader',
                    'modular_machinery_reborn:weather_sensor',
                    'modular_machinery_reborn:time_counter',
                    'modular_machinery_reborn:height_meter',
                    'modular_machinery_reborn:dimensional_detector',
                    "modular_machinery_reborn:casing_plain"
                ],
                "j":["#modular_machinery_reborn:parallelhatch"]            
            }
        )
    )
})*/
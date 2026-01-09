MMREvents.machines(catalyst => {
    catalyst.create("mmr:apis_mutandis")
        .color("#ff603b91")
        .name("Apis Mutandis")
        .structure(
            MMRStructureBuilder.create()
                .pattern([
                    ["   rss sso   ", "  rqeemeepo  ", " rqeghihgepo ", "rqeghhihhgepo", "leghiihiihgek", "lehhihhhihhek", "leiihhnhhiiek", "lehhihhhihhek", "leghiihiihgek", "jfeghhihhgeda", " cfeghihgeda ", "  cfeeeeeda  ", "   cbbbbba   "],
                    ["             ", "             ", "             ", "   t  I  t   ", "     xwv     ", "    G H G    ", "   FwEDCwB   ", "    y A y    ", "     xwv     ", "   t  u  t   ", "             ", "             ", "             "],
                    ["             ", "             ", "             ", "   K     t   ", "             ", "      A      ", "     CJE     ", "      H      ", "             ", "   t     t   ", "             ", "             ", "             "],
                    ["             ", "             ", "             ", "         K   ", "             ", "      G      ", "     xJv     ", "      y      ", "             ", "   t     t   ", "             ", "             ", "             "],
                    ["             ", "             ", "             ", "             ", "             ", "             ", "      M      ", "             ", "             ", "   t     L   ", "             ", "             ", "             "],
                    ["             ", "             ", "             ", "             ", "             ", "      G      ", "     xJv     ", "      y      ", "             ", "   K         ", "             ", "             ", "             "],
                    ["             ", "             ", "             ", "             ", "             ", "      Q      ", "     PJO     ", "      N      ", "             ", "             ", "             ", "             ", "             "],
                    ["             ", "             ", "             ", "      I      ", "     xwv     ", "    G R G    ", "   FwTUTwS   ", "    y R y    ", "     xwv     ", "      u      ", "             ", "             ", "             "],
                    ["             ", "             ", "    V        ", "             ", "             ", "             ", "             ", "             ", "             ", "             ", "             ", "V            ", "             "],
                    ["             ", "             ", "    W        ", "             ", "             ", "             ", "      V      ", "             ", "             ", "             ", "             ", "W            ", "             "],
                    ["             ", "             ", "    W        ", "             ", "             ", "             ", "      W      ", "             ", "             ", "             ", "             ", "W            ", "             "],
                    ["             ", "   X         ", "   XX        ", "    X        ", "             ", "       X     ", "      XXX    ", "             ", "             ", "   X         ", " XXX       V ", "XXX          ", " X           "],
                    ["             ", "             ", "   X         ", "             ", "             ", "      XXXX   ", "      XX X   ", "        X    ", "             ", "             ", "  X       XW ", "          XX ", "             "],
                    ["             ", "             ", "             ", "             ", "             ", "       X     ", "       XXX   ", "             ", "             ", "             ", "           X ", "          XX ", "             "],
                    ["             ", "             ", "             ", "             ", "             ", "             ", "             ", "             ", "             ", "             ", "             ", "           X ", "             "]
                ])
                .keys({
                    "a": ["ars_nouveau:archwood_stairs[facing=north,half=bottom,shape=outer_left,waterlogged=false]"],
                    "b": ["ars_nouveau:archwood_stairs[facing=north,half=bottom,shape=straight,waterlogged=false]"],
                    "c": ["ars_nouveau:archwood_stairs[facing=east,half=bottom,shape=outer_left,waterlogged=false]"],
                    "d": ["ars_nouveau:archwood_stairs[facing=west,half=bottom,shape=inner_right,waterlogged=false]"],
                    "e": [
                        "#modular_machinery_reborn:energyoutputhatch",
                        "#modular_machinery_reborn:energyinputhatch",
                        "#modular_machinery_reborn:fluidoutputhatch",
                        "#modular_machinery_reborn:outputbus",
                        "#modular_machinery_reborn:fluidinputhatch",
                        "#modular_machinery_reborn:inputbus",
                        "modular_machinery_reborn:casing_plain"
                    ],
                    "f": ["ars_nouveau:archwood_stairs[facing=north,half=bottom,shape=inner_right,waterlogged=false]"],
                    "g": ["modular_machinery_reborn:casing_reinforced"],
                    "h": ["ars_nouveau:sourcestone_large_bricks"],
                    "i": ["#c:storage_blocks/honeycombs"],
                    "j": ["ars_nouveau:archwood_stairs[facing=north,half=bottom,shape=outer_right,waterlogged=false]"],
                    "k": ["ars_nouveau:archwood_stairs[facing=west,half=bottom,shape=straight,waterlogged=false]"],
                    "l": ["ars_nouveau:archwood_stairs[facing=east,half=bottom,shape=straight,waterlogged=false]"],
                    "n": ["ars_additions:cracked_sourcestone"],
                    "o": ["ars_nouveau:archwood_stairs[facing=west,half=bottom,shape=outer_left,waterlogged=false]"],
                    "p": ["ars_nouveau:archwood_stairs[facing=south,half=bottom,shape=inner_right,waterlogged=false]"],
                    "q": ["ars_nouveau:archwood_stairs[facing=east,half=bottom,shape=inner_right,waterlogged=false]"],
                    "r": ["ars_nouveau:archwood_stairs[facing=south,half=bottom,shape=outer_left,waterlogged=false]"],
                    "s": ["ars_nouveau:archwood_stairs[facing=south,half=bottom,shape=straight,waterlogged=false]"],
                    "t": ["ars_additions:sourcestone_wall"],
                    "u": ["ars_additions:sourcestone_trapdoor[facing=south,open=true,waterlogged=false,powered=false,half=bottom]"],
                    "v": ["ars_nouveau:sourcestone_grate[facing=east]"],
                    "w": ["ars_additions:sourcestone_wall"],
                    "x": ["ars_nouveau:sourcestone_grate[facing=west]"],
                    "y": ["ars_nouveau:sourcestone_grate[facing=south]"],
                    "A": ["ars_additions:sourcestone_wall"],
                    "B": ["ars_additions:sourcestone_trapdoor[facing=east,open=true,waterlogged=false,powered=false,half=top]"],
                    "C": ["ars_additions:sourcestone_wall"],
                    "D": ["minecraft:magenta_candle[candles=4,lit=false,waterlogged=false]"],
                    "E": ["ars_additions:sourcestone_wall"],
                    "F": ["ars_additions:sourcestone_trapdoor[facing=west,open=true,waterlogged=false,powered=false,half=bottom]"],
                    "G": ["ars_nouveau:sourcestone_grate[facing=north]"],
                    "H": ["ars_additions:sourcestone_wall"],
                    "I": ["ars_additions:sourcestone_trapdoor[facing=north,open=true,waterlogged=false,powered=false,half=bottom]"],
                    "J": ["ars_additions:sourcestone_wall"],
                    "K": ["ars_additions:sourcestone_magelight_lantern[hanging=false,level=0,waterlogged=false]"],
                    "L": ["ars_additions:golden_lantern[hanging=false,waterlogged=false]"],
                    "M": ["ars_nouveau:source_gem_block"],
                    "N": ["ars_additions:sourcestone_wall"],
                    "O": ["ars_additions:sourcestone_wall"],
                    "P": ["ars_additions:sourcestone_wall"],
                    "Q": ["ars_additions:sourcestone_wall"],
                    "R": ["ars_additions:sourcestone_wall"],
                    "S": ["ars_additions:sourcestone_trapdoor[facing=east,open=true,waterlogged=false,powered=false,half=bottom]"],
                    "T": ["ars_additions:sourcestone_wall"],
                    "U": ["luminax:purple_luminax_block"],
                    "V": ["ars_additions:golden_lantern[hanging=true,waterlogged=false]"],
                    "W": ["ars_additions:sourcestone_chain[axis=y,waterlogged=false]"],
                    "X": ["biomesoplenty:jacaranda_leaves[distance=7,persistent=true,waterlogged=false]"]
                })
        );
});
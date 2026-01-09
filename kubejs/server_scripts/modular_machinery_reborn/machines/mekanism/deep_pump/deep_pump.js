/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
MMREvents.machines(catalyst => {
    /**
     * Creates a machine with the given ResourceLocation (namespace:machine) equivalent to the json -> datapackNamespace:jsonName
     */
    catalyst.create("mmr:abyssal_pump")
        /**
         * Applies the color to the machine with the format:
         * #AlphaAlphaRedRedGreenGreenBlueBlue
         * color in int number format
         */
        .color('#FF1d1d20')
        /**
         * The name that the machine should display in the controller item and in the controller GUI -> default localized with the id of the creation
         */
        .name('Abyssal Pump')
        /**
         * The multiblock definition
         */
        .structure(
            MMRStructureBuilder.create()
                .pattern([
                    ["aaaaaaaaa","abbbbbbba","abcccccba","abcdddcba","abcdddcba","abcdddcba","abcccccba","abbbbbbba","aaaaaaaaa","         ","  aaaaa  ","  aaaaa  ","  aaaaa  ","  aaaaa  ","  aaaaa  "],
                    ["g  faf  g","         ","         ","f       f","a   h   a","f       f","         ","         ","g  faf  g","         ","   efe   ","  e a e  ","  faaaf  ","  e a e  ","   efe   "],
                    ["         ","         ","         ","         ","    h    ","         ","         ","         ","         ","         ","   e e   ","  e a e  ","   aaa   ","  e a e  ","   e e   "],
                    ["         ","         ","         ","         ","    h    ","         ","         ","         ","         ","         ","   e e   ","  e a e  ","   aaa   ","  e a e  ","   e e   "],
                    ["         ","         ","         ","         ","    h    ","         ","         ","         ","         ","         ","   e e   ","  e a e  ","   aaa   ","  e a e  ","   e e   "],
                    ["         ","         ","         ","         ","    h    ","         ","         ","         ","         ","         ","   fff   ","  ffaff  ","  faaaf  ","  ffaff  ","   fff   "],
                    ["         ","         ","         ","   iii   ","   iji   ","   iii   ","         ","         ","         ","         ","         ","    a    ","   aaa   ","    a    ","         "],
                    ["         ","         ","  gcccg  ","  ckkkc  ","  ckkkc  ","  ckkkc  ","  gcccg  ","         ","         ","         ","         ","    a    ","   aaa   ","    a    ","         "],
                    ["         ","         ","  lnnnl  ","  nooon  ","  gooog  ","  nooon  ","  annnl  ","         ","         ","         ","         ","    a    ","   aaa   ","    a    ","         "],
                    ["         ","         ","  lbmbl  ","  bkkkb  ","  bkkkb  ","  bkkkb  ","  abbbl  ","         ","         ","         ","         ","   pap   ","   aaa   ","   pap   ","         "],
                    ["         ","         ","  glllg  ","  loool  ","  loool  ","  loool  ","  glllg  ","         ","         ","         ","         ","    a    ","   aaa   ","    a    ","         "],
                    ["         ","         ","         ","   qqq   ","   qrq   ","   qqq   ","         ","         ","         ","         ","         ","    a    ","   aaa   ","    a    ","         "],
                    ["         ","         ","         ","         ","    e    ","         ","         ","         ","         ","         ","         ","    a    ","   aaa   ","    a    ","         "],
                    ["         ","         ","         ","         ","    e    ","         ","         ","         ","         ","         ","         ","    a    ","   aaa   ","    a    ","         "],
                    ["         ","         ","         ","         ","    e    ","         ","         ","         ","         ","         ","   ppp   ","   pap   ","   aaa   ","   pap   ","         "],
                    ["         ","         ","         ","         ","    s    ","    s    ","   sss   ","   sss   ","   sss   ","   sss   ","   fff   ","   sss   ","   sas   ","   sss   ","         "]
                ])
                .keys({
                    "a": ["minecraft:deepslate_bricks"],
                    "b": [
                        "modular_machinery_reborn:casing_plain",
                        "#modular_machinery_reborn_mekanism:chemicaloutputhatch",
                        "#modular_machinery_reborn:energyoutputhatch",
                        "#modular_machinery_reborn:energyinputhatch",
                        "#modular_machinery_reborn:fluidoutputhatch",
                        "#modular_machinery_reborn:outputbus",
                        "#modular_machinery_reborn:fluidinputhatch",
                        "#modular_machinery_reborn:inputbus"
                    ],
                    "c": ["mekanism:steel_casing"],
                    "d": ["minecraft:packed_ice"],
                    "e": ["minecraft:chain[axis=y,waterlogged=false]"],
                    "f": ["minecraft:deepslate_brick_slab[type=bottom,waterlogged=false]"],
                    "g": ["modular_machinery_reborn:casing_reinforced"],
                    "h": ["create:fluid_pipe[waterlogged=false,east=false,north=false,west=false,up=true,south=false,down=true]"],
                    "i": ["mekanism:superheating_element[active=false]"],
                    "j": ["mekanism:boiler_valve"],
                    "k": ["minecraft:magma_block"],
                    "l": ["minecraft:polished_deepslate"],
                    "n": ["modular_machinery_reborn:casing_vent"],
                    "o": ["immersiveengineering:sheetmetal_aluminum"],
                    "p": ["minecraft:deepslate_brick_slab[type=top,waterlogged=false]"],
                    "q": ["minecraft:cobbled_deepslate_slab[type=bottom,waterlogged=false]"],
                    "r": ["minecraft:cobbled_deepslate"],
                    "s": ["immersiveengineering:slab_alu_scaffolding_grate_top[type=bottom,waterlogged=false]"]
                })
        )
    
})
/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
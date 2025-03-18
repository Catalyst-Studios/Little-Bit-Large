/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
MMREvents.machines(catalyst => {
    /**
     * Creates a machine with the given ResourceLocation (namespace:machine) equivalent to the json -> datapackNamespace:jsonName
     */
    catalyst.create("mmr:arboretum")
        /**
         * Applies the color to the machine with the format:
         * #AlphaAlphaRedRedGreenGreenBlueBlue
         * color in int number format
         */
        .color('#00131313')
        /**
         * The name that the machine should display in the controller item and in the controller GUI -> default localized with the id of the creation
         */
        .name('Arboretum')
        /**
         * The multiblock definition
         */
        .structure(
            MMRStructureBuilder.create()
            .pattern([
                ["      lmk      ","    bbcccbb    ","  ebcccdcccbe  ","  bdccdcccdcb  "," bccddccccccdb "," bcdccccccddcb ","jcccccccccccccj","bccccccccccdccb","icccccccccdccci"," bddcccccdcdcb "," bccdccccccccb ","  bccdccddccb  ","  ebcdccdcdbe  ","    bbcdcbb    ","      bbb      "],
                ["               ","               ","               ","               ","     n   d     ","     d  ddn    ","      dddd     ","     nddd      ","     ddddd     ","   nd nddn     ","        d      ","               ","               ","               ","               "],
                ["               ","               ","               ","               ","               ","               ","      ndd      ","      dd       ","      ddd      ","        d      ","               ","               ","               ","               ","               "],
                ["               ","               ","               ","               ","               ","               ","               ","      dd       ","      ndn      ","               ","               ","               ","               ","               ","               "],
                ["               ","               ","               ","               ","               ","               ","               ","       d       ","       o       ","               ","               ","               ","               ","               ","               "],
                ["               ","               ","               ","               ","           p   ","         p     ","        p      ","       n       ","       d    p  ","  p            ","               ","    p          ","          p    ","               ","               "],
                ["               ","               ","    p p        ","       p       ","      p  p pp  ","   p p ppp     ","   p    p  p   "," p   p     pp  ","     p ddpp p  ","  p      pp p  ","   p    pp p   ","   pp     pp   ","    pp  p p    ","               ","               "],
                ["               ","     p         ","    p pp       ","     ppp   pp  ","   pp p  ppppp "," pppppop p pp  ","  pp odp p pp  "," p p ppdopppppp","     pddddoopp ","  pp   d oppppp","  pp      pppp ","   ppw    ppp  ","    pp pp  p   ","     p  p p    ","               "],
                ["               ","     p         ","    pop    p   ","    pdpp ppp   ","  ppppdp popp  "," ppddpp  pdop  ","poopppp  dpp   ","pppppp     ppp "," pp ddpdd pppp ","  pdp dd pp    ","   pppdoppdpp  ","   ppdppo pop  ","   ppp pp  pp  ","    p   ppp    ","        p      "],
                ["               ","               ","     p         ","    pp    p    ","   pppp  ppp   ","  ppppp   pp   "," ppppp   p     "," ppppp  d  p   ","    pp dd  p   ","   ppppd       ","   ppppp  pp   ","    ppppppppp  ","     p ppdpp   ","        pdp    ","        ppp    "],
                ["               ","               ","               ","               ","        p      ","    p          ","   ppp  d      ","    pp    o    ","        ddp    ","    p  d       ","     pp        ","       p       ","         pp    ","         pp    ","               "],
                ["               ","               ","        p      ","       ppp     ","     p ppop    ","       doppp   ","          pdp  ","          ppp  ","        d      ","    podpp d    ","    ppop       ","     pp        ","               ","               ","               "],
                ["               ","               ","               ","     pp p      ","    ppop p     ","   poodppp     ","   ppp    pp   ","          pp   ","       dd  pp  ","     pppp  ppp ","    ppp   doop ","         popp  ","       ppop    ","        ppp    ","               "],
                ["               ","               ","               ","               ","     pp        ","    ppp        ","    pppppp     ","        pp     ","     p dppp    ","         pppp  ","     pppppppp  ","       p  p    ","        ppp    ","               ","               "],
                ["               ","               ","               ","               ","               ","               ","      pp       ","     ppop      ","    pppopp     ","    ppodopp    ","    popppop    ","     pp ppp    ","               ","               ","               "],
                ["               ","               ","               ","               ","               ","               ","               ","      pp       ","     pppp      ","     pppp      ","     ppppp     ","               ","               ","               ","               "],
                ["               ","               ","               ","               ","               ","               ","               ","               ","      pp       ","      pp       ","               ","               ","               ","               ","               "]
            ])
            .keys({
                "b": ["modular_machinery_reborn:casing_plain"],
                "c": ["#minecraft:dirt"],
                "d": ["minecraft:oak_wood"],
                "e": ['#modular_machinery_reborn:energyinputhatch',
                      "modular_machinery_reborn:casing_plain"],
                "i": ['#modular_machinery_reborn:fluidinputhatch',
                      "modular_machinery_reborn:casing_plain"],
                "j": ['#modular_machinery_reborn:fluidoutputhatch',
                      "modular_machinery_reborn:casing_plain"],
                "k": ['#modular_machinery_reborn:itembus',
                      "modular_machinery_reborn:casing_plain"],
                "l": ['#modular_machinery_reborn:outputbus',
                      "modular_machinery_reborn:casing_plain"],
                "n": ["minecraft:oak_slab[type=bottom]"],
                "o": ["minecraft:oak_slab[type=top]"],
                "p": ["minecraft:oak_leaves[persistent=true]"],
                "w": ["minecraft:oak_fence"]
            }))
        });  


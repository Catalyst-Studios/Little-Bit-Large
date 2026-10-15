/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
MMREvents.machines(catalyst => {
    /**
     * Creates a machine with the given ResourceLocation (namespace:machine) equivalent to the json -> datapackNamespace:jsonName
     */
    catalyst.create("mmr:colider")
        /**
         * Applies the color to the machine with the format:
         * #AlphaAlphaRedRedGreenGreenBlueBlue
         * color in int number format
         */
        .color('#00131313')
        /**
         * The name that the machine should display in the controller item and in the controller GUI -> default localized with the id of the creation
         */
        .name(Component.translatable("catalyst.mmr.machine.colider"))
        /**
         * The multiblock definition
         */
        .structure(
        MMRStructureBuilder.create()
        .pattern([
        ["               ccccc               ","            cccdcccdccc            ","         cccddddcccddddccc         ","       ccddddcddcccddcddddcc       ","     ccdddddcccdcccdcccdddddcc     ","    cccddddddcddcccddcddddddccc    ","    ccccddddddddcccddddddddcccc    ","   cddcccdddddddcccdddddddcccddc   ","   cdddcccddddddcccddddddcccdddc   ","  cdddddcccdddddcccdddddcccdddddc  ","  cddddddcccddddcccddddcccddddddc  ","  cdddddddcccdddcccdddcccdddddddc  "," cddcddddddcccdcccccdcccddddddcddc "," cdcccddddddcccccccccccddddddcccdc "," cddcddddddddcccdcdcccddddddddcddc ","cdddddddddddcccddcddcccdddddddddddc","ccccccccccccccddcccddcccccccccccccc","cccccccccccccccccdccccccccccccccccc","ccccccccccccccddcccddcccccccccccccc","cdddddddddddcccddcddcccdddddddddddc"," cddcddddddddcccdcdcccddddddddcddc "," cdcccddddddcccccccccccddddddcccdc "," cddcddddddcccdcccccdcccddddddcddc ","  cdddddddcccdddcccdddcccdddddddc  ","  cddddddcccddddcccddddcccddddddc  ","  cdddddcccdddddcccdddddcccdddddc  ","   cdddcccddddddcccddddddcccdddc   ","   cddcccdddddddcccdddddddcccddc   ","    ccccddddddddcccddddddddcccc    ","    cccddddddcddcccddcddddddccc    ","     ccdddddcccdcccdcccdddddcc     ","       ccddddcddcccddcddddcc       ","         cccddddcccddddccc         ","            cccdcccdccc            ","               ccccc               "],
        ["                                   ","                                   ","                                   ","             i       i             ","            hgf     hgf            ","             e       e             ","       i                   i       ","      hgf                 hgf      ","       e                   e       ","                                   ","                                   ","                                   ","    i          j   j          i    ","   hgf       j       j       hgf   ","    e                         e    ","            j         j            ","                                   ","                 @                 ","                                   ","            j         j            ","    i                         i    ","   hgf       j       j       hgf   ","    e          j   j          e    ","                                   ","                                   ","                                   ","       i                   i       ","      hgf                 hgf      ","       e                   e       ","             i       i             ","            hgf     hgf            ","             e       e             ","                                   ","                                   ","                                   "],
        ["                                   ","                                   ","                                   ","             o       o             ","            ngl     ngl            ","             k       k             ","       o                   o       ","      ngl                 ngl      ","       k                   k       ","                                   ","                                   ","                                   ","    o          j   j          o    ","   ngl       j       j       ngl   ","    k                         k    ","            j         j            ","                                   ","                 m                 ","                                   ","            j         j            ","    o                         o    ","   ngl       j       j       ngl   ","    k          j   j          k    ","                                   ","                                   ","                                   ","       o                   o       ","      ngl                 ngl      ","       k                   k       ","             o       o             ","            ngl     ngl            ","             k       k             ","                                   ","                                   ","                                   "],
        ["                                   ","                                   ","               ppqpp               ","            pqprrqrrpqp            ","          pprqrppqpprqrpp          ","        pprrpqp     pqprrpp        ","      qprrpp           pprrpq      ","      pqpp               ppqp      ","     prpq                 qprp     ","     prp                   prp     ","    prp                     prp    ","    prp                     prp    ","   prp         s   s         prp   ","   qqq       s       s       qqq   ","   prp                       prp   ","  prp       s         s       prp  ","  prp                         prp  ","  qqq                         qqq  ","  prp                         prp  ","  prp       s         s       prp  ","   prp                       prp   ","   qqq       s       s       qqq   ","   prp         s   s         prp   ","    prp                     prp    ","    prp                     prp    ","     prp                   prp     ","     prpq                 qprp     ","      pqpp               ppqp      ","      qprrpp           pprrpq      ","        pprrpqp     pqprrpp        ","          pprqrppqpprqrpp          ","            pqprrqrrpqp            ","               ppqpp               ","                                   ","                                   "],
        ["                                   ","               ttqtt               ","             qt quq tq             ","         tttquq quq quqttt         ","       ttt  quq quq quq  ttt       ","     qq     quqttqttquq     qq     ","     quq    tqtt   ttqt    quq     ","    t quq ttt         ttt quq t    ","    t  quqt      S      tquq  t    ","   tt   qq   BC  y  Dw   qq   tt   ","   t   tt     xC y DA     tt   t   ","   t   t   VC  F y F  DU   t   t   ","   qqqtt   xHN JKTKJ OHA   ttqqq   ","  quuuq  S  IJ       JM  S  quuuq  ","  tqqqt  xC             DA  tqqqt  "," t   tt   xKJ         JKA   tt   t "," tqqqt      F         F      tqqqt "," quuuq  BPPPR         QPPPw  quuuq "," tqqqt      F         F      tqqqt "," t   tt   DKJ         JKC   tt   t ","  tqqqt  DA             xC  tqqqt  ","  quuuq  v  OJ       JN  v  quuuq  ","   qqqtt   DHM JKLKJ IHC   ttqqq   ","   t   t   GA  F y F  xE   t   t   ","   t   tt     DA y xC     tt   t   ","   tt   qq   BA  y  xw   qq   tt   ","    t  quqt      v      tquq  t    ","    t quq ttt         ttt quq t    ","     quq    tqtt   ttqt    quq     ","     qq     quqttqttquq     qq     ","       ttt  quq quq quq  ttt       ","         tttquq quq quqttt         ","             qt quq tq             ","               ttqtt               ","                                   "],
        ["               ppqpp               ","            pqp quq pqp            ","         pppquq  q  quqppp         ","       pp    q   q   q    pp       ","     qp      q   q   q      pq     ","    quq      q  quq  q      quq    ","    pqq     quq pqp quq     qqp    ","   p   q     qpp   ppq     q   p   ","   p    qq pp    W    pp qq    p   ","  p     quq  W       W  quq     p  ","  p      q               q      p  ","  p     p  W           W  p     p  "," pq   q p      s   s      p q   qp "," quqqquq W   s       s   W quqqquq "," pq   qp                   pq   qp ","p      p    s         s    p      p","pq   qp                     pq   qp","quqqquq W                 W quqqquq","pq   qp                     pq   qp","p      p    s         s    p      p"," pq   qp                   pq   qp "," quqqquq W   s       s   W quqqquq "," pq   q p      s   s      p q   qp ","  p     p  W           W  p     p  ","  p      q               q      p  ","  p     quq  W       W  quq     p  ","   p    qq pp    W    pp qq    p   ","   p   q     qpp   ppq     q   p   ","    pqq     quq pqp quq     qqp    ","    quq      q  quq  q      quq    ","     qp      q   q   q      pq     ","       pp    q   q   q    pp       ","         pppquq  q  quqppp         ","            pqp quq pqp            ","               ppqpp               "],
        ["               rrqrr               ","            rqr quq rqr            ","         rrrquq  q  quqrrr         ","       rr    q       q    rr       ","     qr          q          rq     ","    quq      q  quq  q      quq    ","    rqq     quq rJr quq     qqr    ","   r         Jrr F rrJ         r   ","   r    qq rrF   `   Frr qq    r   ","  r     quJ  `       `  Juq     r  ","  r      JYC           DYJ      r  ","  r     r x_           ^A r     r  "," rq   q r      j   j      r q   qr "," quq quJK]   j       j   aKJuq quq "," rq   qr                   rq   qr ","r      r    j         j    r      r","rq   qr                     rq   qr","quq quJK]                 aKJuq quq","rq   qr                     rq   qr","r      r    j         j    r      r"," rq   qr                   rq   qr "," quq quJK]   j       j   aKJuq quq "," rq   q r      j   j      r q   qr ","  r     r D[           ZC r     r  ","  r      JYA           xYJ      r  ","  r     quJ  X       X  Juq     r  ","   r    qq rrF   X   Frr qq    r   ","   r         Jrr F rrJ         r   ","    rqq     quq rJr quq     qqr    ","    quq      q  quq  q      quq    ","     qr          q          rq     ","       rr    q       q    rr       ","         rrrquq  q  quqrrr         ","            rqr quq rqr            ","               rrqrr               "],
        ["               ppqpp               ","            pqp quq pqp            ","         pppquq  q  quqppp         ","       pp    q   q   q    pp       ","     qp      q   q   q      pq     ","    quq      q  quq  q      quq    ","    pqq     quq pqp quq     qqp    ","   p   q     qpp   ppq     q   p   ","   p    qq pp         pp qq    p   ","  p     quq             quq     p  ","  p      q               q      p  ","  p     p                 p     p  "," pq   q p      j   j      p q   qp "," quqqquq     j       j     quqqquq "," pq   qp                   pq   qp ","p      p    j         j    p      p","pq   qp                     pq   qp","quqqquq                     quqqquq","pq   qp                     pq   qp","p      p    j         j    p      p"," pq   qp                   pq   qp "," quqqquq     j       j     quqqquq "," pq   q p      j   j      p q   qp ","  p     p                 p     p  ","  p      q               q      p  ","  p     quq             quq     p  ","   p    qq pp         pp qq    p   ","   p   q     qpp   ppq     q   p   ","    pqq     quq pqp quq     qqp    ","    quq      q  quq  q      quq    ","     qp      q   q   q      pq     ","       pp    q   q   q    pp       ","         pppquq  q  quqppp         ","            pqp quq pqp            ","               ppqpp               "],
        ["                                   ","               ttqtt               ","            pqt quq tqp            ","         tttquq quq quqttt         ","       ttt  quq quq quq  ttt       ","     qqt    quqttqttquq    tqq     ","     quq    tqtt   ttqt    quq     ","    ttquq ttt         ttt quqtt    ","    t  quqt             tquq  t    ","   tt   qq               qq   tt   ","   t   tt                 tt   t   ","   t   t                   t   t   ","  pqqqtt                   ttqqqp  ","  quuuq                     quuuq  ","  tqqqt                     tqqqt  "," t   tt                     tt   t "," tqqqt                       tqqqt "," quuuq                       quuuq "," tqqqt                       tqqqt "," t   tt                     tt   t ","  tqqqt                     tqqqt  ","  quuuq                     quuuq  ","  pqqqtt                   ttqqqp  ","   t   t                   t   t   ","   t   tt                 tt   t   ","   tt   qq               qq   tt   ","    t  quqt             tquq  t    ","    ttquq ttt         ttt quqtt    ","     quq    tqtt   ttqt    quq     ","     qqt    quqttqttquq    tqq     ","       ttt  quq quq quq  ttt       ","         tttquq quq quqttt         ","            pqt quq tqp            ","               ttqtt               ","                                   "],
        ["                                   ","                                   ","               ppqpp               ","            pqprrqrrpqp            ","          pprqrppqpprqrpp          ","        pprrpqp     pqprrpp        ","      qprrpp           pprrpq      ","      pqpp               ppqp      ","     prpq                 qprp     ","     prp                   prp     ","    prp                     prp    ","    prp                     prp    ","   prp                       prp   ","   qqq                       qqq   ","   prp                       prp   ","  prp                         prp  ","  prp                         prp  ","  qqq                         qqq  ","  prp                         prp  ","  prp                         prp  ","   prp                       prp   ","   qqq                       qqq   ","   prp                       prp   ","    prp                     prp    ","    prp                     prp    ","     prp                   prp     ","     prpq                 qprp     ","      pqpp               ppqp      ","      qprrpp           pprrpq      ","        pprrpqp     pqprrpp        ","          pprqrppqpprqrpp          ","            pqprrqrrpqp            ","               ppqpp               ","                                   ","                                   "]
        ])
        .keys({
            "@": [
                "modular_machinery_reborn:casing_plain",
                '#modular_machinery_reborn:parallelhatch'
            ],
            "c": ["create_new_age:reactor_casing"],
            "d": ["modular_machinery_reborn:casing_plain"],
            "e": ["immersiveengineering:stairs_steel_scaffolding_standard[facing=north+half=bottom+shape=straight]"],
            "f": ["immersiveengineering:stairs_steel_scaffolding_standard[facing=west+half=bottom+shape=straight]"],
            "g": ["immersiveengineering:steel_scaffolding_standard[waterlogged=false]"],
            "h": ["immersiveengineering:stairs_steel_scaffolding_standard[facing=east+half=bottom+shape=straight]"],
            "i": ["immersiveengineering:stairs_steel_scaffolding_standard[facing=south+half=bottom+shape=straight]"],
            "j": ["mekanism:ultimate_induction_cell"],
            "k": ["immersiveengineering:stairs_steel_scaffolding_standard[facing=north+half=top+shape=straight]"],
            "l": ["immersiveengineering:stairs_steel_scaffolding_standard[facing=west+half=top+shape=straight]"],
            "n": ["immersiveengineering:stairs_steel_scaffolding_standard[facing=east+half=top+shape=straight]"],
            "o": ["immersiveengineering:stairs_steel_scaffolding_standard[facing=south+half=top+shape=straight]"],
            "p": ["mekanismgenerators:reactor_glass"],
            "q": ["immersiveengineering:coil_hv"],
            "r": [
                "modular_machinery_reborn:casing_reinforced",
                'modular_machinery_reborn:inputbus_big',
                'modular_machinery_reborn:inputbus_huge',
                'modular_machinery_reborn:inputbus_ludicrous',
                'modular_machinery_reborn:outputbus_big',
                'modular_machinery_reborn:outputbus_huge',
                'modular_machinery_reborn:outputbus_ludicrous',
                'modular_machinery_reborn:fluidinputhatch_huge',
                'modular_machinery_reborn:fluidinputhatch_ludicrous',
                'modular_machinery_reborn:fluidinputhatch_vacuum',
                'modular_machinery_reborn:fluidoutputhatch_huge',
                'modular_machinery_reborn:fluidoutputhatch_ludicrous',
                'modular_machinery_reborn:fluidoutputhatch_vacuum',
                'modular_machinery_reborn_mekanism:chemicalinputhatch_huge',
                'modular_machinery_reborn_mekanism:chemicalinputhatch_ludicrous',
                'modular_machinery_reborn_mekanism:chemicalinputhatch_vacuum',
                'modular_machinery_reborn_mekanism:chemicaloutputhatch_huge',
                'modular_machinery_reborn_mekanism:chemicaloutputhatch_ludicrous',
                'modular_machinery_reborn_mekanism:chemicaloutputhatch_vacuum',
                "modular_machinery_reborn:energyinputhatch_ultimate",
                "modular_machinery_reborn:energyinputhatch_huge",
                "modular_machinery_reborn:energyinputhatch_ludicrous"
            ],
            "s": ["mekanism:ultimate_induction_provider"],
            "t": ["mekanism:sps_casing"],
            "u": ["create_new_age:netherite_magnet"],
            "v": ["oritech:superconductor", "oritech:superconductor_connection", 'energizedpower:energized_crystal_matrix_cable'],
            "w": ["oritech:superconductor", "oritech:superconductor_connection", 'energizedpower:energized_crystal_matrix_cable'],
            "x": ["oritech:superconductor", "oritech:superconductor_connection", 'energizedpower:energized_crystal_matrix_cable'],
            "y": ["oritech:superconductor", "oritech:superconductor_connection", 'energizedpower:energized_crystal_matrix_cable'],
            "A": ["oritech:superconductor", "oritech:superconductor_connection", 'energizedpower:energized_crystal_matrix_cable'],
            "B": ["oritech:superconductor", "oritech:superconductor_connection", 'energizedpower:energized_crystal_matrix_cable'],
            "C": ["oritech:superconductor", "oritech:superconductor_connection", 'energizedpower:energized_crystal_matrix_cable'],
            "D": ["oritech:superconductor", "oritech:superconductor_connection", 'energizedpower:energized_crystal_matrix_cable'],
            "E": ["oritech:superconductor", "oritech:superconductor_connection", 'energizedpower:energized_crystal_matrix_cable'],
            "F": ["oritech:superconductor", "oritech:superconductor_connection", 'energizedpower:energized_crystal_matrix_cable'],
            "G": ["oritech:superconductor", "oritech:superconductor_connection", 'energizedpower:energized_crystal_matrix_cable'],
            "H": ["oritech:superconductor", "oritech:superconductor_connection", 'energizedpower:energized_crystal_matrix_cable'],
            "I": ["oritech:superconductor", "oritech:superconductor_connection", 'energizedpower:energized_crystal_matrix_cable'],
            "J": [
                "modular_machinery_reborn:energyinputhatch_ultimate",
                "modular_machinery_reborn:energyinputhatch_huge",
                "modular_machinery_reborn:energyinputhatch_ludicrous"
            ],
            "K": ["oritech:superconductor", "oritech:superconductor_connection", 'energizedpower:energized_crystal_matrix_cable'],
            "L": ["oritech:superconductor", "oritech:superconductor_connection", 'energizedpower:energized_crystal_matrix_cable'],
            "M": ["oritech:superconductor", "oritech:superconductor_connection", 'energizedpower:energized_crystal_matrix_cable'],
            "N": ["oritech:superconductor", "oritech:superconductor_connection", 'energizedpower:energized_crystal_matrix_cable'],
            "O": ["oritech:superconductor", "oritech:superconductor_connection", 'energizedpower:energized_crystal_matrix_cable'],
            "P": ["oritech:superconductor", "oritech:superconductor_connection", 'energizedpower:energized_crystal_matrix_cable'],
            "Q": ["oritech:superconductor", "oritech:superconductor_connection", 'energizedpower:energized_crystal_matrix_cable'],
            "R": ["oritech:superconductor", "oritech:superconductor_connection", 'energizedpower:energized_crystal_matrix_cable'],
            "S": ["oritech:superconductor", "oritech:superconductor_connection", 'energizedpower:energized_crystal_matrix_cable'],
            "T": ["oritech:superconductor", "oritech:superconductor_connection", 'energizedpower:energized_crystal_matrix_cable'],
            "U": ["oritech:superconductor", "oritech:superconductor_connection", 'energizedpower:energized_crystal_matrix_cable'],
            "V": ["oritech:superconductor", "oritech:superconductor_connection", 'energizedpower:energized_crystal_matrix_cable'],
            "W": ["oritech:superconductor", "oritech:superconductor_connection", 'energizedpower:energized_crystal_matrix_cable'],
            "X": ["oritech:superconductor", "oritech:superconductor_connection", 'energizedpower:energized_crystal_matrix_cable'],
            "Y": ["oritech:superconductor", "oritech:superconductor_connection", 'energizedpower:energized_crystal_matrix_cable'],
            "Z": ["oritech:superconductor", "oritech:superconductor_connection", 'energizedpower:energized_crystal_matrix_cable'],
            "[": ["oritech:superconductor", "oritech:superconductor_connection", 'energizedpower:energized_crystal_matrix_cable'],
            "a": ["oritech:superconductor", "oritech:superconductor_connection", 'energizedpower:energized_crystal_matrix_cable'],
            "]": ["oritech:superconductor", "oritech:superconductor_connection", 'energizedpower:energized_crystal_matrix_cable'],
            "^": ["oritech:superconductor", "oritech:superconductor_connection", 'energizedpower:energized_crystal_matrix_cable'],
            "_": ["oritech:superconductor", "oritech:superconductor_connection", 'energizedpower:energized_crystal_matrix_cable'],
            "`": ["oritech:superconductor", "oritech:superconductor_connection", 'energizedpower:energized_crystal_matrix_cable']
            })
    )
});

/*
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/


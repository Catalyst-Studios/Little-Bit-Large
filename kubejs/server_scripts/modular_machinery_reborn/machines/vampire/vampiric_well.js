/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
MMREvents.machines(catalyst => {
    catalyst.create("mmr:vampire")
        .color('#FFfb3f2b')
        .name(Component.translatable("catalyst.mmr.machine.vampire"))
        .structure(
            MMRStructureBuilder.create()
            .pattern([
                ["aaaadefaaaa","accccacccca","accccacccca","accccacccca","bccccaccccb","baaaacaaaab","bccccaccccb","accccacccca","accccacccca","accccacccca","aaaabbbaaaa"],
                ["ag  hmg  ha","lj   l   jl","  kjj jjk  ","  j     j  ","i j     j i","ag   a   ha","l j     j l","  j     j  ","  kjj jjk  ","ij   i   ji","ag  hag  ha"],
                ["a         a","           ","  o     o  ","           ","           ","n    a    n","           ","           ","  o     o  ","           ","a    n    a"],
                ["o         o","           ","  o     o  ","           ","           ","     a     ","           ","           ","  o     o  ","           ","o         o"],
                ["p         q","           ","  o     o  ","           ","           ","           ","           ","           ","  o     o  ","           ","p         q"],
                ["           ","           ","  o     o  ","           ","    xyz    ","    vrw    ","    stu    ","           ","  o     o  ","           ","           "],
                ["           ","           ","  o     o  ","           ","     A     ","    BjB    ","     A     ","           ","  o     o  ","           ","           "],
                ["           ","           ","  o     o  ","           ","           ","    B B    ","           ","           ","  o     o  ","           ","           "],
                ["           ","           ","  o     o  ","           ","           ","    B B    ","           ","           ","  o     o  ","           ","           "],
                ["           ","           ","  aaaaaaa  ","  aCCCCCa  ","  aCCCCCa  ","  accccca  ","  aCCCCCa  ","  aCCCCCa  ","  aaaaaaa  ","           ","           "],
                ["           ","           ","  A     A  ","           ","           ","     A     ","           ","           ","  A     A  ","           ","           "]
            ])
            .keys({
                "a": [
                    "minecraft:polished_blackstone_bricks"
                ],
                "b": [
                    'minecraft:polished_blackstone_bricks',
                    '#modular_machinery_reborn:fluidhatch',
                    '#modular_machinery_reborn:itembus',
                    '#modular_machinery_reborn:parallelhatch'
                ],
                "c": [
                    "evilcraft:dark_brick"
                ],
                "d": [
                    'minecraft:polished_blackstone_bricks',
                    '#modular_machinery_reborn:fluidhatch',
                    '#modular_machinery_reborn:itembus',
                    '#modular_machinery_reborn:parallelhatch'
                ],
                "e": [
                    'minecraft:polished_blackstone_bricks',
                    '#modular_machinery_reborn:fluidhatch',
                    '#modular_machinery_reborn:itembus',
                    '#modular_machinery_reborn:parallelhatch'
                ],
                "f": [
                    'minecraft:polished_blackstone_bricks',
                    '#modular_machinery_reborn:fluidhatch',
                    '#modular_machinery_reborn:itembus',
                    '#modular_machinery_reborn:parallelhatch'
                ],
                "g": [
                    "evilcraft:dark_brick_stairs"
                ],
                "h": [
                    "evilcraft:dark_brick_stairs"
                ],
                "i": [
                    "evilcraft:dark_brick_stairs"
                ],
                "j": [
                    "minecraft:nether_brick_slab[type=bottom]"
                ],
                "k": [
                    "minecraft:nether_bricks"
                ],
                "l": [
                    "evilcraft:dark_brick_stairs"
                ],
                "n": [
                    "chipped:iron_bowl_soul_lantern"
                ],
                "o": [
                    "evilcraft:undead_fence"
                ],
                "p": [
                    "mcwlights:soul_double_street_lamp"
                ],
                "q": [
                    "mcwlights:soul_double_street_lamp"
                ],
                "r": [
                    'catalystcore:liquid_blood'
                ],
                "s": [
                    "evilcraft:dark_brick_stairs"
                ],
                "t": [
                    "evilcraft:dark_brick_stairs"
                ],
                "u": [
                    "evilcraft:dark_brick_stairs"
                ],
                "v": [
                    "evilcraft:dark_brick_stairs"
                ],
                "w": [
                    "evilcraft:dark_brick_stairs"
                ],
                "x": [
                    "evilcraft:dark_brick_stairs"
                ],
                "y": [
                    "evilcraft:dark_brick_stairs"
                ],
                "z": [
                    "evilcraft:dark_brick_stairs"
                ],
                "A": [
                    "chipped:wooden_cage_soul_lantern"
                ],
                "B": [
                    "mcwlights:golden_chain[axis=y]"
                ],
                "C": [
                    "minecraft:nether_brick_slab[type=top]"
                ]
            })
        )
        
})

/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
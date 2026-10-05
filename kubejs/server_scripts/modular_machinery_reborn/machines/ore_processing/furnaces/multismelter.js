/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
MMREvents.machines(catalyst => {
    catalyst.create("mmr:multismelter")
        .color('#0016161A')
        .name(Component.translatable("catalyst.mmr.machine.multismelter"))
        .structure(
        MMRStructureBuilder.create()
        .pattern([
        ["aaaacccaaaa","acbbbbbbbca","acbbbbbbbca","acbbeeebbca","acbbeeebbca","acbbeeebbca","aabbbbbbbaa","adbbdddbbda","adbbdddbbda","adbbdddbbda","aaabbbbbaaa","aaabbbbbaaa","aaabcccbaaa"],
        ["a   hhh   f","    hhh    ","   rjjjr   ","   pjjjp   ","   pjjjp   ","   pjjjp   ","arrajjjarra","qlpojjjonlk","qlpojjjonlk","qlpojjjonlk","aiaajjjaaia","  iihhhii  ","f   hhh   f"],
        ["m   hhh   f","    hhh    ","           ","   qvvvk   ","   qvvvk   ","   qvvvk   ","f  qaaak  f"," stquuukts "," stquuukts "," stquuukts ","           ","    hhh    ","f   hhh   f"],
        ["f         f","           ","           ","           ","           ","           ","f         f","           ","           ","           ","           ","           ","f         f"],
        ["A         A","x         x","x         x","x         x","x         x","x         x","y         y","x         x","x         x","x         x","x         x","x         x","w         w"],
        ["ECCCCGCCCCB","     x     ","     x     ","     x     ","     x     ","     x     ","ECCCCFCCCCB","     x     ","     x     ","     x     ","     x     ","     x     ","ECCCCDCCCCB"]
        ])
        .keys({
        "a":[
        "modular_machinery_reborn:casing_reinforced",
        '#modular_machinery_reborn:itembus',
        '#modular_machinery_reborn:energyhatch',
        '#modular_machinery_reborn:parallelhatch'],
        "b":"create_new_age:reactor_casing",
        "c":"modular_machinery_reborn:casing_reinforced",
        "d":"mekanism:superheating_element",
        "e":"minecraft:blue_ice",
        "f":"minecraft:polished_blackstone_wall[east=none+north=none+south=none+up=true+waterlogged=false+west=none]",
        "h":"#c:barrels",
        "i":"rechiseled:blackstone_polished_stairs_connecting[facing=north+half=bottom+shape=straight+waterlogged=false]",
        "j":"minecraft:air]",
        "k":"rechiseled:blackstone_polished_stairs_connecting[facing=west+half=bottom+shape=straight+waterlogged=false]",
        "l":"minecraft:magma_block",
        "n":"factory_blocks:fan_on[facing=east]",
        "o":"modular_machinery_reborn:casing_vent",
        "p":"factory_blocks:fan_on[facing=west]",
        "q":"rechiseled:blackstone_polished_stairs_connecting[facing=east+half=bottom+shape=straight+waterlogged=false]",
        "r":"rechiseled:blackstone_polished_stairs_connecting[facing=south+half=bottom+shape=straight+waterlogged=false]",
        "s":"immersiveengineering:steel_catwalk[dye=white+east=false+north=false+south=false+waterlogged=false+west=false]",
        "t":"#modular_machinery_reborn:energyhatch",
        "u":"modular_machinery_reborn:casing_firebox",
        "v":"minecraft:tinted_glass",
        "w":"minecraft:polished_blackstone_wall",
        "x":"minecraft:polished_blackstone_wall",
        "y":"minecraft:polished_blackstone_wall",
        "A":"minecraft:polished_blackstone_wall",
        "B":"minecraft:polished_blackstone_wall",
        "C":"minecraft:polished_blackstone_wall",
        "D":"minecraft:polished_blackstone_wall",
        "E":"minecraft:polished_blackstone_wall",
        "F":"minecraft:polished_blackstone_wall",
        "G":"minecraft:polished_blackstone_wall"}))
});
/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/

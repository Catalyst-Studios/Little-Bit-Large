/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
MMREvents.machines(catalyst => {
    catalyst.create("mmr:multismelter")
        .color('#0016161A')
        .name('MultiSmelter')
        .structure(
            MMRStructureBuilder.create()
            .pattern([
            ["aaaacccaaaa","acbbbbbbbca","acbbbbbbbca","acbbeeebbca","acbbeeebbca","acbbeeebbca","aabbbbbbbaa","adbbdddbbda","adbbdddbbda","adbbdddbbda","aaabbbbbaaa","aaabbbbbaaa","aaabcccbaaa"],
            ["a   iii   f","  u iii u  ","    qqq    ","   sqqqs   ","   sqqqs   ","   sqqqs   ","aa aqqqa aa","anrpqqqpona","anrpqqqpona","anrpqqqpona","aa lkkkh aa","   jiiih   ","f  jiiih  f"],
            ["m  wiiiv  f","    iii    ","  u     u  ","   bBBBb   ","   bBBBb   ","   bBBBb   ","f wbaaabv f"," jAbyyybxj "," jAbyyybxj "," jAbyyybxj ","           ","    iii    ","f  wiiiv  f"],
            ["f         f","           ","           ","  hH   Gl  ","  hl   hl  ","  hl   hl  ","f El   hC f","  AF   Fx  ","  AF   Fx  ","  AF   Fx  ","   EDDDC   ","           ","f         f"],
            ["f         f","           ","           ","           ","           ","           ","f         f","  I     I  ","  I     I  ","  I     I  ","           ","           ","f         f"],
            ["J         J","K         K","K         K","K         K","K         K","K         K","L         L","K         K","K         K","K         K","K         K","K         K","J         J"],
            ["PNNNNONNNNM","     K     ","     K     ","     K     ","     K     ","     K     ","MNNNNONNNNP","     K     ","     K     ","     K     ","     K     ","     K     ","PNNNNONNNNM"]])
            .keys({
            "a":["modular_machinery_reborn:casing_plain"],
            "b":["create_new_age:reactor_casing"],
            "c":[
                "modular_machinery_reborn:casing_reinforced",
                '#modular_machinery_reborn:itembus',
                '#modular_machinery_reborn:energyhatch'
            ],
            "d":["mekanism:superheating_element[active=false]"],
            "e":["minecraft:blue_ice"],
            "f":["create:metal_girder[z=false+top=true+x=false+axis=y+bottom=true]"],
            "h":["immersiveengineering:steel_catwalk"],
            "i":["create:item_vault[axis=x+large=false]"],
            "j":["immersiveengineering:steel_catwalk"],
            "k":["immersiveengineering:conveyor_extract[facing=south]"],
            "l":["immersiveengineering:steel_catwalk"],
            "n":["minecraft:lava"],
            "o":["immersiveengineering:blastfurnace_preheater[facing=east+multiblockslave=false]"],
            "p":["modular_machinery_reborn:casing_vent"],
            "q":["immersiveengineering:conveyor_basic[facing=south]"],
            "r":["immersiveengineering:blastfurnace_preheater[facing=west+multiblockslave=false]"],
            "s":["factory_blocks:fan_on[facing=west]"],
            "t":["factory_blocks:fan_on[facing=east]"],
            "u":["immersiveengineering:steel_catwalk_stairs"],
            "v":["pneumaticcraft:wall_lamp_inverted_red[facing=east+lit=true]"],
            "w":["pneumaticcraft:wall_lamp_inverted_red[facing=west+lit=true]"],
            "x":["immersiveengineering:blastfurnace_preheater[facing=east+multiblockslave=true]"],
            "y":["modular_machinery_reborn:casing_firebox"],
            "A":["immersiveengineering:blastfurnace_preheater[facing=west+multiblockslave=true]"],
            "B":["minecraft:tinted_glass"],
            "C":["immersiveengineering:steel_catwalk"],
            "D":["immersiveengineering:steel_catwalk"],
            "E":["immersiveengineering:steel_catwalk"],
            "F":["immersiveengineering:steel_catwalk"],
            "G":["immersiveengineering:steel_catwalk"],
            "H":["immersiveengineering:steel_catwalk"],
            "I":["modular_machinery_reborn:energyinputhatch_ultimate"],
            "J":["create:metal_girder[z=true+top=true+x=false+axis=y+bottom=true]"],
            "K":["create:metal_girder[z=true+top=false+x=false+axis=z+bottom=false]"],
            "L":["create:metal_girder[z=true+top=true+x=false+axis=z+bottom=true]"],
            "M":["create:metal_girder[z=false+top=true+x=true+axis=y+bottom=true]"],
            "N":["create:metal_girder[z=false+top=false+x=true+axis=x+bottom=false]"],
            "O":["create:metal_girder[z=true+top=false+x=true+axis=x+bottom=false]"],
            "P":["create:metal_girder[z=false+top=false+x=true+axis=x+bottom=true]"]
            })
        )
});
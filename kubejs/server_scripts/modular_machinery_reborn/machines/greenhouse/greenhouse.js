/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
MMREvents.machines(catalyst => {
    /**
     * Creates a machine with the given ResourceLocation (namespace:machine) equivalent to the json -> datapackNamespace:jsonName
     */
    catalyst.create("mmr:greenhouse")
        /**
         * Applies the color to the machine with the format:
         * #AlphaAlphaRedRedGreenGreenBlueBlue
         * color in int number format
         */
        .color('#00131313')
        /**
         * The name that the machine should display in the controller item and in the controller GUI -> default localized with the id of the creation
         */
        .name('Greenhouse')
        /**
         * The multiblock definition
         */
        .structure(
        MMRStructureBuilder.create()
        .pattern([
        ["ajjjjjjja","fdeeeeedc","feggeggec","fegghggec","fegghggec","feiihiiec","feiihiiec","feiihiiec","fegghggec","fegghggec","feggeggec","fdeeeeedc","abbbbbbba"],
        ["m        "," dllqlld "," l     l "," l     l "," d     d "," loo ool "," ldddddl "," lnn nnl "," d     d "," l     l "," l     l "," dlldlld ","         "],
        ["         "," dllrlld "," l     l "," l     l "," d     d "," l     l "," l  d  l "," l     l "," d     d "," l     l "," l     l "," dlldlld ","         "],
        ["         "," dlldlld "," l     l "," l     l "," d     d "," l     l "," l  s  l "," l     l "," d     d "," l     l "," l     l "," dlldlld ","         "],
        ["         ","  dldld  ","  l v l  ","  l u l  ","  d u d  ","  l u l  ","  l u l  ","  l u l  ","  d u d  ","  l u l  ","  l t l  ","  dldld  ","         "],
        ["         ","   ddd   ","   ldl   ","   ldl   ","   ddd   ","   ldl   ","   ldl   ","   ldl   ","   ddd   ","   ldl   ","   ldl   ","   ddd   ","         "]
        ])
        .keys({"a":"modular_machinery_reborn:casing_plain[connect_textures=true]",
        "b":"minecraft:stone_brick_stairs[facing=north+half=bottom+shape=straight]",
        "c":"minecraft:stone_brick_stairs[facing=west+half=bottom+shape=straight]",
        "d":"create:andesite_casing",
        "e":"minecraft:stone_bricks",
        "f":"minecraft:stone_brick_stairs[facing=east+half=bottom+shape=straight]",
        "g":"minecraft:farmland",
        "h":"minecraft:stone_brick_slab[type=bottom+waterlogged=true]",
        "i":"minecraft:dirt",
        "j":"minecraft:stone_brick_stairs[facing=south+half=bottom+shape=straight]",
        "l":"minecraft:glass",
        "n":"create:mechanical_harvester[facing=south]",
        "o":"create:mechanical_harvester[facing=north]",
        "q":"minecraft:oak_door[half=lower+hinge=right+facing=south]",
        "r":"minecraft:oak_door[half=upper+hinge=right+facing=south]",
        "s":"create:gantry_carriage[axis_along_first=true+facing=down]",
        "t":"create:gantry_shaft[facing=north]",
        "u":"create:gantry_shaft[facing=north]",
        "v":"create:gantry_shaft[facing=north]"}))
        });

/*
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/


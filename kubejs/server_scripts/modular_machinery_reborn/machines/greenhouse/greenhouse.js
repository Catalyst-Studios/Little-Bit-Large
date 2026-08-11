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
        .color('#ff0dfb6d')
        /**
         * The name that the machine should display in the controller item and in the controller GUI -> default localized with the id of the creation
         */
        .name(Component.translatable("catalyst.mmr.machine.greenhouse"))
        /**
         * The multiblock definition
         */
        .structure(
        MMRStructureBuilder.create()
        .pattern([
        ["afffffffa","fdeeeeedf","feggeggef","fegghggef","fegghggef","feiihiief","feiihiief","feiihiief","fegghggef","fegghggef","feggeggef","fdeeeeedf","afffffffa"],
        ["m        "," dllrlld "," l     l "," l     l "," d     d "," loo ool "," ldddddl "," lnn nnl "," d     d "," l     l "," l     l "," dlldlld ","         "],
        ["         "," dllrlld "," l     l "," l     l "," d     d "," l     l "," l  d  l "," l     l "," d     d "," l     l "," l     l "," dlldlld ","         "],
        ["         "," dlldlld "," l     l "," l     l "," d     d "," l     l "," l  s  l "," l     l "," d     d "," l     l "," l     l "," dlldlld ","         "],
        ["         ","  dldld  ","  l v l  ","  l v l  ","  d v d  ","  l v l  ","  l v l  ","  l v l  ","  d v d  ","  l v l  ","  l v l  ","  dldld  ","         "],
        ["         ","   ddd   ","   ldl   ","   ldl   ","   ddd   ","   ldl   ","   ldl   ","   ldl   ","   ddd   ","   ldl   ","   ldl   ","   ddd   ","         "]
        ])
        .keys({
            "a":[
                "modular_machinery_reborn:casing_plain",
                '#modular_machinery_reborn:fluidinputhatch',
                '#modular_machinery_reborn:energyinputhatch',
                '#modular_machinery_reborn:itembus'
            ],
            "d":["#create:casing"],
            "e":[
                '#minecraft:stone_bricks',
                'minecraft:deepslate_bricks',
                'minecraft:polished_blackstone_bricks',
                'minecraft:mud_bricks',
                'minecraft:end_stone_bricks',
                'minecraft:quartz_bricks',
                'chipped:rounded_raw_copper_block_bricks'
            ],
            "f":[
                'minecraft:quartz_stairs',
                'minecraft:deepslate_brick_stairs',
                'minecraft:stone_stairs',
                'minecraft:mud_brick_stairs',
                'create:cut_crimsite_stairs',
                'create:cut_veridium_stairs',
                'create:cut_scorchia_stairs',
                'create:cut_tuff_brick_stairs'
            ],
            "g":["minecraft:farmland"],
            "h":[
                "minecraft:stone_brick_slab",
                '#modular_machinery_reborn:parallelhatch'
            ],
            "i":["minecraft:dirt"],
            "l":['minecraft:glass'],
            "n":["create:mechanical_harvester[facing=south]"],
            "o":["create:mechanical_harvester[facing=north]"],
            "r":[
                'create:andesite_door',
                'create:brass_door',
                'create:copper_door',
                'create:train_door',
                'create:framed_glass_door'
            ],
            "s":["create:gantry_carriage[axis_along_first=true+facing=down]"],
            "v":["create:gantry_shaft"]
        })
    )
});

/*
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/


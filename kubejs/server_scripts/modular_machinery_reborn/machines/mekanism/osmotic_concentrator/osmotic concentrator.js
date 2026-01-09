/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
MMREvents.machines(catalyst => {
    /**
     * Creates a machine with the given ResourceLocation (namespace:machine) equivalent to the json -> datapackNamespace:jsonName
     */
    catalyst.create("mmr:osmotic_concentrator")
        /**
         * Applies the color to the machine with the format:
         * #AlphaAlphaRedRedGreenGreenBlueBlue
         * color in int number format
         */
        .color('#ff66605f')
        /**
         * The name that the machine should display in the controller item and in the controller GUI -> default localized with the id of the creation
         */
        .name('Osmotic Consentrator')
        /**
         * The multiblock definition
         */
        .structure(
            MMRStructureBuilder.create()
            .pattern([
                ["a   a","     ","     ","     ","a   a"],
                ["bcmcb","cbbbc","cbbbc","cbbbc","bcccb"],
                ["dfhfd","exxxe","fxxxf","exxxe","defed"],
                ["jklkj","k   k","l   l","k   k","jklkj"],
                ["jklkj","k   k","l   l","k   k","jklkj"],
                ["jklkj","k   k","l   l","k   k","jklkj"],
                ["dbbbd","b   b","b   b","b   b","dbbbd"],
                ["jnonj","n   n","o   o","n   n","jnonj"],
                ["jnonj","n   n","o   o","n   n","jnonj"],
                ["jnonj","n   n","o   o","n   n","jnonj"],
                ["dbbbd","b   b","b   b","b   b","dbbbd"],
                ["jklkj","k   k","l   l","k   k","jklkj"],
                ["jklkj","k   k","l   l","k   k","jklkj"],
                ["jklkj","k   k","l   l","k   k","jklkj"],
                ["dbbbd","b   b","b   b","b   b","dbbbd"]
            ])
            .keys({
                "a":["immersiveengineering:steel_scaffolding_standard[waterlogged=false]"],
                "b":["mekanism:steel_casing"],
                "c":["immersiveengineering:slab_steel_scaffolding_standard[type=bottom,waterlogged=false]"],
                "d":["modular_machinery_reborn:casing_reinforced"],
                "e":["modular_machinery_reborn:casing_vent"],
                "f":[
                    "#modular_machinery_reborn_mekanism:chemicaloutputhatch",
                    "#modular_machinery_reborn:fluidinputhatch",
                    "#modular_machinery_reborn:energyinputhatch",
                    "#modular_machinery_reborn_mekanism:chemicalinputhatch"
                ],
                "h":["modular_machinery_reborn:casing_circuitry"],
                "j":["modular_machinery_reborn:casing_plain"],
                "k":["glassential:glass_light"],
                "l":["minecraft:magma_block"],
                "n":["glassential:obsidian_glass"],
                "o":["minecraft:blue_ice"],
                "x": ['rechiseled:copper_block_shafts_connecting']
            }))
       
})
/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
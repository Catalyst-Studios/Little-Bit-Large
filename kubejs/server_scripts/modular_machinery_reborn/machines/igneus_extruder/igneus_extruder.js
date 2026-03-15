/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
MMREvents.machines(catalyst => {
    /**
     * Creates a machine with the given ResourceLocation (namespace:machine) equivalent to the json -> datapackNamespace:jsonName
     */
    catalyst.create("mmr:igneus_extruder")
        /**
         * Applies the color to the machine with the format:
         * #AlphaAlphaRedRedGreenGreenBlueBlue
         * color in int number format
         */
        .color('#00131313')
        /**
         * The name that the machine should display in the controller item and in the controller GUI -> default localized with the id of the creation
         */
        .name('Igneus Extruder')
        /**
         * The multiblock definition
         */
        .structure(
        MMRStructureBuilder.create()
        .pattern([
        ["aaa   aaa","a a   a a","aaaaaaaaa","  a   a  ","  a   a  ","  a   a  ","aaaaaaaaa","a a   a a","aaa   aaa"],
        ["a       a"," ccccccc "," cdddddc "," cdddddc "," cdddddc "," cdddddc "," cdddddc "," ccccccc ","a       a"],
        ["a       a"," ceefeec "," eiihgge "," eiihgge "," fiihggf "," eiihgge "," eiihgge "," ceefeec ","a       a"],
        ["a       a"," ceemeec "," eiihgge "," eiihgge "," fiihggf "," eiihgge "," eiihgge "," ceefeec ","a       a"],
        ["a       a"," ceefeec "," eiihgge "," eiihgge "," fiihggf "," eiihgge "," eiihgge "," ceefeec ","a       a"],
        ["a       a"," ceefeec "," eiihgge "," eiihgge "," fiihggf "," eiihgge "," eiihgge "," ceefeec ","a       a"],
        ["a       a"," ccccccc "," cdddddc "," cdddddc "," cdddddc "," cdddddc "," cdddddc "," ccccccc ","a       a"],
        ["aaa   aaa","a a   a a","aaaaaaaaa","  a   a  ","  a   a  ","  a   a  ","aaaaaaaaa","a a   a a","aaa   aaa"]
        ])
        .keys({
        "a":"immersiveengineering:steel_scaffolding_standard",
        "b":"minecraft:air",
        "c":"create:railway_casing",
        "d":"rechiseled:netherite_block_smooth",
        "e":"create_new_age:reactor_glass",
        "f":"modular_machinery_reborn:casing_plain[connect_textures=true]",
        "g":"minecraft:magma_block",
        "h":"enderio:dark_steel_bars[south=true+east=true+north=true+west=true]",
        "i":"minecraft:blue_ice"}))});
/*
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/


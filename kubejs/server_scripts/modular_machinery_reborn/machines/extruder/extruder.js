/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
MMREvents.machines(catalyst => {
    /**
     * Creates a machine with the given ResourceLocation (namespace:machine) equivalent to the json -> datapackNamespace:jsonName
     */
    catalyst.create("mmr:extruder")
        /**
         * Applies the color to the machine with the format:
         * #AlphaAlphaRedRedGreenGreenBlueBlue
         * color in int number format
         */
        .color('#fffba52b')
        /**
         * The name that the machine should display in the controller item and in the controller GUI -> default localized with the id of the creation
         */
        .name(Component.translatable("catalyst.mmr.machine.extruder"))
        /**
         * The multiblock definition
         */
        .structure(
            MMRStructureBuilder.create()
            .pattern([
                ["       ","   a   ","  aaa  "," aaaaa ","  aaa  ","   a   ","       "],
                ["       ","       ","  bcb  ","  ded  ","  bcb  ","       ","       "],
                ["       ","       ","       ","   f   ","       ","       ","       "],
                ["       ","       ","       ","       ","       ","       ","       "],
                ["       ","       ","       ","   g   ","       ","       ","       "],
                ["       ","       ","       ","   h   ","       ","       ","       "],
                ["   l   ","   h   ","   h   ","jhhhhhk","   h   ","   h   ","   i   "],
                ["   n   ","  opo  "," ooqoo ","npqrqpn"," ooqoo ","  opo  ","   n   "],
                ["   p   ","   p   ","   s   ","ppsrspp","   s   ","   p   ","   p   "],
                ["   p   ","       ","       ","p  b  p","       ","       ","   p   "],
                ["t  p  t","   u   ","   u   ","pvwxvwp","   u   ","   u   ","t  p  t"],
                ["yqqyqqy","qzzqzzq","qzzqzzq","yqqmqqy","qzzqzzq","qzzqzzq","yqqyqqy"]
            ])
            .keys({
                "a": [
                    "create:copper_casing"
                ],
                "b": [
                    "mcwlights:cross_lantern[hanging=false]"
                ],
                "c": [
                    "#modular_machinery_reborn:inputbus",
                    "#modular_machinery_reborn:outputbus",
                    "#modular_machinery_reborn:energyinputhatch",
                    '#modular_machinery_reborn:parallelhatch'
                ],
                "d": [
                    "#modular_machinery_reborn:inputbus",
                    "#modular_machinery_reborn:outputbus",
                    "#modular_machinery_reborn:energyinputhatch",
                    '#modular_machinery_reborn:parallelhatch'
                ],
                "e": [
                    "immersiveengineering:sheetmetal_constantan"
                ],
                "f": [
                    "create:depot"
                ],
                "g": [
                    "create:mechanical_saw[axis_along_first=true,facing=down,flipped=false]"
                ],
                "h": [
                    "mekanism:steel_casing"
                ],
                "i": [
                    "immersiveengineering:stairs_steel_scaffolding_standard"
                ],
                "j": [
                    "immersiveengineering:stairs_steel_scaffolding_standard"
                ],
                "k": [
                    "immersiveengineering:stairs_steel_scaffolding_standard"
                ],
                "l": [
                    "immersiveengineering:stairs_steel_scaffolding_standard"
                ],
                "n": [
                    "chisel:ornatesteel/glass"
                ],
                "o": [
                    "immersiveengineering:slab_steel_scaffolding_grate_top[type=top]"
                ],
                "p": [
                    "immersiveengineering:alu_scaffolding_standard"
                ],
                "q": [
                    "immersiveengineering:slab_steel_scaffolding_grate_top[type=bottom]"
                ],
                "r": [
                    "immersiveengineering:sheetmetal_copper"
                ],
                "s": [
                    "immersiveengineering:slab_sheetmetal_electrum[type=top]"
                ],
                "t": [
                    "mcwlights:cross_lantern[hanging=true]"
                ],
                "u": [
                    "create:gantry_shaft"
                ],
                "v": [
                    "create:gantry_shaft"
                ],
                "w": [
                    "create:gantry_shaft"
                ],
                "x": [
                    "create:gearbox[axis=y]"
                ],
                "y": [
                    "immersiveengineering:steel_scaffolding_grate_top"
                ],
                "z": [
                    "immersiveengineering:steel_scaffolding_wooden_top"
                ]
            })
        )
})
/*
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
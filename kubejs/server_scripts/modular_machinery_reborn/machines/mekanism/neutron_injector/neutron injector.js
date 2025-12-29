/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
MMREvents.machines(catalyst => {
    /**
     * Creates a machine with the given ResourceLocation (namespace:machine) equivalent to the json -> datapackNamespace:jsonName
     */
    catalyst.create("mmr:neutron_injector")
        /**
         * Applies the color to the machine with the format:
         * #AlphaAlphaRedRedGreenGreenBlueBlue
         * color in int number format
         */
        .color('#F43e3b3e')
        /**
         * The name that the machine should display in the controller item and in the controller GUI -> default localized with the id of the creation
         */
        .name('Neutron Injector')
        /**
         * The multiblock definition
         */
        .structure(
            MMRStructureBuilder.create()
            .pattern([
                ["a jjj a"," cdddc ","hdcccdf","hdcicdf","hdcccdf"," cdddc ","a bbb a"],
                ["a     a","       ","       ","   k   ","       ","       ","a     a"],
                ["a     a","       ","       ","       ","       ","       ","a     a"],
                ["a     a","       ","       ","       ","       ","       ","a     a"],
                ["a     a","       ","       ","       ","       ","       ","a     a"],
                ["lnomonl","npppppn","opnnnpo","opnqnpo","opnnnpo","npppppn","lnooonl"],
                ["       "," nrrrn "," r   r "," r   r "," r   r "," nrrrn ","       "],
                ["       "," nnnnn "," n   n "," n   n "," n   n "," nnnnn ","       "],
                ["       "," nrrrn "," r   r "," r   r "," r   r "," nrrrn ","       "],
                ["lnsssnl","npppppn","spnnnps","spnqnps","spnnnps","npppppn","lnsssnl"],
                ["a     a","       ","       ","       ","       ","       ","a     a"],
                ["a     a","       ","       ","       ","       ","       ","a     a"],
                ["a     a","       ","       ","       ","       ","       ","a     a"],
                ["a     a","       ","       ","   t   ","       ","       ","a     a"],
                ["asssssa","scdddcs","sdclcds","sdlilds","sdclcds","scdddcs","asssssa"]
            ])
            .keys({
                "a":["chipped:gilded_basalt_bone_block[axis=y]"],
                "b":["minecraft:deepslate_brick_slab[type=bottom]"],
                "c":[
                    "#modular_machinery_reborn_mekanism:chemicalinputhatch",
                    "#modular_machinery_reborn_mekanism:chemicaloutputhatch",
                    "#modular_machinery_reborn:energyinputhatch",
                    "modular_machinery_reborn:casing_plain"
                ],
                "d":["chipped:basalt_bricks"],
                "f":["minecraft:deepslate_brick_slab[type=bottom]"],
                "h":["minecraft:deepslate_brick_slab[type=bottom]"],
                "i":[
                    "mekanism:basic_energy_cube",
                    "mekanism:advanced_energy_cube",
                    "mekanism:elite_energy_cube",
                    "mekanism:ultimate_energy_cube",
                ],
                "j":["minecraft:deepslate_brick_slab[type=bottom]"],
                "k":["mekanism:laser[active=true,facing=up]"],
                "l":["modular_machinery_reborn:casing_reinforced"],
                "n":["chisel:ornatesteel/glass"],
                "o":["minecraft:deepslate_brick_slab[type=bottom]"],
                "p":["mekanism:steel_casing"],
                "q":["mekanismgenerators:laser_focus_matrix"],
                "r":["glassential:obsidian_glass"],
                "s":["minecraft:deepslate_brick_slab[type=top]"],
                "t":["mekanism:laser[active=true,facing=down]"]
            }))
        
})
/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
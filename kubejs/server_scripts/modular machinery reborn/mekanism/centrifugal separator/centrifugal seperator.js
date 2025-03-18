/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
MMREvents.machines(catalyst => {
    /**
     * Creates a machine with the given ResourceLocation (namespace:machine) equivalent to the json -> datapackNamespace:jsonName
     */
    catalyst.create("mmr:centrifugal_seperator")
        /**
         * Applies the color to the machine with the format:
         * #AlphaAlphaRedRedGreenGreenBlueBlue
         * color in int number format
         */
        .color('#F32291FF')
        /**
         * The name that the machine should display in the controller item and in the controller GUI -> default localized with the id of the creation
         */
        .name('Centrifugal Seperator WIP')
        /**
         * The multiblock definition
         */
        .structure(
            /**
             * Creates the structure builder
             */
            MMRStructureBuilder.create()
                /**
                 * Sets the patten (bottom to top and front to back)
                 * Must have ONLY one `m` representing the controller block
                 */
                .pattern(
                    [
                        ["rfr", "fpf", "rir"],
                        ["rmr", "i i", "rer"],
                        ["rfr", "fpf", "rir"]
                    ]
                )

                .keys(
                    {
                        /**
                         * Exact block
                         */
                        "r": "modular_machinery_reborn:casing_reinforced",
                        "f": "modular_machinery_reborn:casing_firebox",
                        "p": "modular_machinery_reborn:casing_plain",
                        /**
                         * Blocks defined in the tag
                         */
                        "e": "#modular_machinery_reborn:energyinputhatch",
                        /**
                         * Exact blocks that can be in that position
                         */
                        "i": [
                            "#modular_machinery_reborn:inputbus",
                            "#modular_machinery_reborn:fluidoutputhatch",
                            "#modular_machinery_reborn_mekanism:chemicaloutputhatch",
                            "#modular_machinery_reborn:outputbus",
                            "modular_machinery_reborn:biome_reader",
                            "modular_machinery_reborn:dimensional_detector",
                            "modular_machinery_reborn:weather_sensor",
                            "modular_machinery_reborn:time_counter",
                            "modular_machinery_reborn:chunkloader"
                        ]
                    }
                )
        )
    
})
/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
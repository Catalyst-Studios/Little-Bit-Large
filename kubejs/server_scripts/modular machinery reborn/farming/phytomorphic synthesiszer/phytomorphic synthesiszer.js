/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
MMREvents.machines(catalyst => {
    /**
     * Creates a machine with the given ResourceLocation (namespace:machine) equivalent to the json -> datapackNamespace:jsonName
     */
    catalyst.create("mmr:phytomorphic_synthesiszer")
        /**
         * Applies the color to the machine with the format:
         * #AlphaAlphaRedRedGreenGreenBlueBlue
         * color in int number format
         */
        .color('#ff202020')
        /**
         * The name that the machine should display in the controller item and in the controller GUI -> default localized with the id of the creation
         */
        .name('Phytomorphic synthesiszer')
        /**
         * The multiblock definition
         */
        .structure(
            MMRStructureBuilder.create()
                .pattern([
                    ["aamaa", "abbba", "abcba", "abbba", "aaaaa"],
                    ["aeeea", "e   e", "e c e", "e   e", "aeeea"],
                    ["aeeea", "e   e", "e c e", "e   e", "aeeea"],
                    ["aaaaa", "aggga", "agcga", "aggga", "aaaaa"]])
                .keys({
                    "a": ["modular_machinery_reborn:casing_plain",
                        '#modular_machinery_reborn:energyinputhatch',
                        '#modular_machinery_reborn:itembus',
                        '#modular_machinery_reborn:fluidhatch'
                    ],
                    "b": ["mysticalagradditions:insanium_farmland"],
                    "c": ["mysticalagriculture:awakened_supremium_growth_accelerator"],
                    "e": ["minecraft:lime_stained_glass_pane"],
                    "g": ["simplylight:illuminant_lime_block_on"]
                }))

})
/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/


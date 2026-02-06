/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
MMREvents.machines(catalyst => {
    catalyst.create("mmr:phytomorphic_synthesiszer")
        .color('#ff202020')
        .name('Phytomorphic synthesiszer')
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


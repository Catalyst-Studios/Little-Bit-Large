/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
MMREvents.machines(catalyst => {
    /**
     * Creates a machine with the given ResourceLocation (namespace:machine) equivalent to the json -> datapackNamespace:jsonName
     */
    catalyst.create("mmr:data_extractor")
        /**
         * Applies the color to the machine with the format:
         * #AlphaAlphaRedRedGreenGreenBlueBlue
         * color in int number format
         */
        .color('#00191919')
        /**
         * The name that the machine should display in the controller item and in the controller GUI -> default localized with the id of the creation
         */
        .name('Data extractor')
        /**
         * The multiblock definition
         */
        .structure(
            MMRStructureBuilder.create()
                .pattern([
                    [" b bmb b ", "bbbcccbbb", " bbbbbbb ", "bcb   bcb", "bcb   bcb", "bcb   bcb", " bbbbbbb ", "bbbcccbbb", " b bbb b "],
                    ["         ", "  l   l  ", " hfgggfe ", "  gnnng  ", "  gn ng  ", "  gnnng  ", " hfgggfe ", "  d   d  ", "         "],
                    ["         ", "  l   l  ", " hfgggfe ", "  g n g  ", "  gn ng  ", "  g n g  ", " hfgggfe ", "  d   d  ", "         "],
                    ["         ", "         ", "  lgggl  ", "  g   g  ", "  gnnng  ", "  g   g  ", "  dgggd  ", "         ", "         "],
                    ["         ", "         ", "  lgggl  ", "  g n g  ", "  g n g  ", "  g n g  ", "  dgggd  ", "         ", "         "],
                    ["         ", "  l   l  ", " hfgggfe ", "  g n g  ", "  gn ng  ", "  g n g  ", " hfgggfe ", "  d   d  ", "         "],
                    ["         ", "  l   l  ", " hfgggfe ", "  gnnng  ", "  gn ng  ", "  gnnng  ", " hfgggfe ", "  d   d  ", "         "],
                    [" b bbb b ", "bbbcccbbb", " bbbbbbb ", "bcbbbbbcb", "bcbbbbbcb", "bcbbbbbcb", " bbbbbbb ", "bbbcccbbb", " b bbb b "]])
                .keys({
                    "b": ["modular_machinery_reborn:casing_plain",
                        '#modular_machinery_reborn:itembus',
                        '#modular_machinery_reborn:energyinputhatch'
                    ],
                    "c": ["modular_machinery_reborn:casing_firebox"],
                    "d": ["hostilenetworks:loot_fabricator[facing=south]"],
                    "e": ["hostilenetworks:loot_fabricator[facing=east]"],
                    "f": ["modular_machinery_reborn:casing_vent"],
                    "g": ["ae2:quartz_vibrant_glass"],
                    "h": ["hostilenetworks:loot_fabricator[facing=west]"],
                    "l": ["hostilenetworks:loot_fabricator[facing=north]"],
                    "n": ["ae2:controller"]
                }))
})
/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
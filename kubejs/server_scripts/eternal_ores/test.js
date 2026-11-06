/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
ServerEvents.recipes(event => {
    let disabled = true;
    if(disabled) return;

    const MOD = 'eternalores';
    console.info(`[CatJS-${MOD}] Checking item existence...`);

    let warnIfMissing = (itemId) => {
        if(!Item.exists(itemId))
        {
            console.warn(`Missing item: ${itemId}`);
        }
    }

    const foilMaterials = [
        "aluminum", "ardite", "beryllium", "catalyrium", "cobalt", "gallium", "iridium", "lead",
        "molybdenum", "nickel", "osmium", "platinum", "sculkite", "silver", "tin", "titanium",
        "tungsten", "ultimatitanium", "uraninite", "uranium", "vanadium", "zinc", "iron", "gold",
        "copper", "netherite", "redstone", "aurorium", "biosteel", "black_steel", "blue_steel",
        "brass", "britannia_silver", "bronze", "cast_iron", "cast_steel", "chromium", "constantan",
        "cosmic_matter", "crystalline_alloy", "electrum", "enderium", "energetic_silver",
        "eternal_dark", "eternal_light", "eternity", "etherium", "graphite", "gravitronium",
        "hepatizon", "invar", "lumium", "magnesium", "melodic_alloy", "nethersteel", "osgloglas",
        "pewter", "pig_iron", "plutonium", "quartz_enriched_copper", "quartz_enriched_iron",
        "rose_gold", "shadowsteel", "signalum", "silicon", "stainless_steel", "steel",
        "stellar_alloy", "stellarium", "universium", "vivid_alloy", "wrought_iron"
    ];
    foilMaterials.forEach(mat => warnIfMissing(`${MOD}:${mat}_foil`));

    const rodMaterials = [
        "aluminum", "ardite", "beryllium", "catalyrium", "cobalt", "gallium", "iridium", "lead",
        "molybdenum", "nickel", "osmium", "platinum", "sculkite", "silver", "tin", "titanium",
        "tungsten", "ultimatitanium", "uraninite", "uranium", "vanadium", "zinc", "iron", "gold",
        "copper", "netherite", "redstone", "stone", "blackstone", "granite", "diorite", "andesite",
        "basalt", "tuff", "calcite", "deepslate", "end_stone", "netherrack", "amethyst", "diamond",
        "emerald", "lapis", "quartz", "prismarine", "amber", "apatite", "arcanum", "black_quartz",
        "certus_quartz", "cinnabar", "fluix", "garnet", "jade", "monazite", "necroticarite",
        "obsidian", "onyx", "pearl", "peridot", "pyrolite", "quantiquarite", "ruby",
        "sanguis_vivus", "sapphire", "source", "spectral_sky_bluerite", "tachyarite", "tanzanite",
        "temictetl", "voiderite", "zircon", "aurorium", "biosteel", "black_steel", "blue_steel",
        "brass", "britannia_silver", "bronze", "cast_iron", "cast_steel", "chromium", "constantan",
        "cosmic_matter", "crystalline_alloy", "electrum", "enderium", "energetic_silver",
        "eternal_dark", "eternal_light", "eternity", "etherium", "graphite", "gravitronium",
        "hepatizon", "invar", "lumium", "magnesium", "melodic_alloy", "nethersteel", "osgloglas",
        "pewter", "pig_iron", "plutonium", "quartz_enriched_copper", "quartz_enriched_iron",
        "rose_gold", "shadowsteel", "signalum", "silicon", "stainless_steel", "steel",
        "stellar_alloy", "stellarium", "universium", "vivid_alloy", "wrought_iron"
    ];
    rodMaterials.forEach(mat => warnIfMissing(`${MOD}:rod_${mat}`));

    const gearMaterials = [
        "aluminum", "ardite", "beryllium", "catalyrium", "cobalt", "gallium", "iridium", "lead",
        "molybdenum", "nickel", "osmium", "platinum", "sculkite", "silver", "tin", "titanium",
        "tungsten", "ultimatitanium", "uraninite", "uranium", "vanadium", "zinc", "iron", "gold",
        "copper", "netherite", "redstone", "wooden", "stone", "blackstone", "granite", "diorite",
        "andesite", "basalt", "tuff", "calcite", "deepslate", "end_stone", "netherrack", "amethyst",
        "diamond", "emerald", "lapis", "quartz", "prismarine", "amber", "apatite", "arcanum",
        "black_quartz", "certus_quartz", "cinnabar", "fluix", "garnet", "jade", "monazite",
        "necroticarite", "obsidian", "onyx", "pearl", "peridot", "pyrolite", "quantiquarite",
        "ruby", "sanguis_vivus", "sapphire", "source", "spectral_sky_bluerite", "tachyarite",
        "tanzanite", "temictetl", "voiderite", "zircon", "aurorium", "biosteel", "black_steel",
        "blue_steel", "brass", "britannia_silver", "bronze", "cast_iron", "cast_steel", "chromium",
        "constantan", "cosmic_matter", "crystalline_alloy", "electrum", "enderium",
        "energetic_silver", "eternal_dark", "eternal_light", "eternity", "etherium", "graphite",
        "gravitronium", "hepatizon", "invar", "lumium", "magnesium", "melodic_alloy", "nethersteel",
        "osgloglas", "pewter", "pig_iron", "plutonium", "quartz_enriched_copper",
        "quartz_enriched_iron", "rose_gold", "shadowsteel", "signalum", "silicon", "stainless_steel",
        "steel", "stellar_alloy", "stellarium", "universium", "vivid_alloy", "wrought_iron"
    ];
    gearMaterials.forEach(mat => warnIfMissing(`${MOD}:gear_${mat}`));

    const plateMaterials = [
        "aluminum", "ardite", "beryllium", "catalyrium", "cobalt", "gallium", "iridium", "lead",
        "molybdenum", "nickel", "osmium", "platinum", "sculkite", "silver", "tin", "titanium",
        "tungsten", "ultimatitanium", "uraninite", "uranium", "vanadium", "zinc", "iron", "gold",
        "copper", "netherite", "redstone", "wooden", "stone", "blackstone", "granite", "diorite",
        "andesite", "basalt", "tuff", "calcite", "deepslate", "end_stone", "netherrack", "amethyst",
        "diamond", "emerald", "lapis", "quartz", "prismarine", "amber", "apatite", "arcanum",
        "black_quartz", "certus_quartz", "cinnabar", "fluix", "garnet", "jade", "monazite",
        "necroticarite", "obsidian", "onyx", "pearl", "peridot", "pyrolite", "quantiquarite",
        "ruby", "sanguis_vivus", "sapphire", "source", "spectral_sky_bluerite", "tachyarite",
        "tanzanite", "temictetl", "voiderite", "zircon", "aurorium", "biosteel", "black_steel",
        "blue_steel", "brass", "britannia_silver", "bronze", "cast_iron", "cast_steel", "chromium",
        "constantan", "cosmic_matter", "crystalline_alloy", "electrum", "enderium",
        "energetic_silver", "eternal_dark", "eternal_light", "eternity", "etherium", "graphite",
        "gravitronium", "hepatizon", "invar", "lumium", "magnesium", "melodic_alloy", "nethersteel",
        "osgloglas", "pewter", "pig_iron", "plutonium", "quartz_enriched_copper",
        "quartz_enriched_iron", "rose_gold", "shadowsteel", "signalum", "silicon", "stainless_steel",
        "steel", "stellar_alloy", "stellarium", "universium", "vivid_alloy", "wrought_iron"
    ];
    plateMaterials.forEach(mat => warnIfMissing(`${MOD}:plate_${mat}`));

    const smallDustMaterials = [
        "aluminum", "ardite", "beryllium", "catalyrium", "cobalt", "gallium", "iridium", "lead",
        "molybdenum", "nickel", "osmium", "platinum", "sculkite", "silver", "sulfur", "tin",
        "titanium", "tungsten", "ultimatitanium", "uraninite", "uranium", "vanadium", "zinc",
        "iron", "gold", "copper", "netherite", "redstone", "amethyst", "diamond", "emerald",
        "lapis", "quartz", "prismarine", "coal", "charcoal", "anthracite_coal", "bituminous_coal",
        "lignite_coal", "peat_coal", "coke_coal", "stone", "blackstone", "granite", "diorite",
        "andesite", "basalt", "tuff", "calcite", "deepslate", "end_stone", "netherrack", "brick",
        "dripstone", "purpur", "nether_brick", "clay", "sand", "red_sand", "soul_sand",
        "nether_wart", "warped_nether_wart", "sculk", "shulker_shell", "flint", "nautilus",
        "ender_pearl", "nether_star", "blaze", "amber", "apatite", "arcanum", "black_quartz",
        "certus_quartz", "cinnabar", "fluorite", "garnet", "jade", "monazite", "necroticarite",
        "niter", "obsidian", "onyx", "pearl", "peridot", "pyrolite", "quantiquarite", "ruby",
        "sanguis_vivus", "sapphire", "source", "spectral_sky_bluerite", "tachyarite", "tanzanite",
        "temictetl", "voiderite", "zircon", "aurorium", "biosteel", "black_steel", "blue_steel",
        "brass", "britannia_silver", "bronze", "cast_iron", "cast_steel", "chromium", "constantan",
        "cosmic_matter", "crystalline_alloy", "electrum", "enderium", "energetic_silver",
        "eternal_dark", "eternal_light", "eternity", "etherium", "graphite", "gravitronium",
        "hepatizon", "invar", "lumium", "magnesium", "melodic_alloy", "nethersteel", "osgloglas",
        "pewter", "pig_iron", "plutonium", "quartz_enriched_copper", "quartz_enriched_iron",
        "rose_gold", "shadowsteel", "signalum", "silicon", "stainless_steel", "steel",
        "stellar_alloy", "stellarium", "universium", "vivid_alloy", "wrought_iron", "calcium",
        "dust", "phosphorus", "rare_earth", "salt"
    ];
    smallDustMaterials.forEach(mat => warnIfMissing(`${MOD}:${mat}_small_dust`));

    const dustMaterials = [
        "aluminum", "ardite", "beryllium", "catalyrium", "cobalt", "gallium", "iridium", "lead",
        "molybdenum", "nickel", "osmium", "platinum", "sculkite", "silver", "sulfur", "tin",
        "titanium", "tungsten", "ultimatitanium", "uraninite", "uranium", "vanadium", "zinc",
        "iron", "gold", "copper", "netherite", "amethyst", "diamond", "emerald", "lapis", "quartz",
        "prismarine", "coal", "charcoal", "anthracite_coal", "bituminous_coal", "lignite_coal",
        "peat_coal", "coke_coal", "stone", "blackstone", "granite", "diorite", "andesite", "basalt",
        "tuff", "calcite", "deepslate", "end_stone", "netherrack", "brick", "dripstone", "purpur",
        "nether_brick", "clay", "sand", "red_sand", "soul_sand", "nether_wart", "warped_nether_wart",
        "sculk", "shulker_shell", "flint", "nautilus", "ender_pearl", "nether_star", "amber",
        "apatite", "arcanum", "black_quartz", "certus_quartz", "cinnabar", "fluorite", "garnet",
        "jade", "monazite", "necroticarite", "niter", "obsidian", "onyx", "pearl", "peridot",
        "pyrolite", "quantiquarite", "ruby", "sanguis_vivus", "sapphire", "source",
        "spectral_sky_bluerite", "tachyarite", "tanzanite", "temictetl", "voiderite", "zircon",
        "aurorium", "biosteel", "black_steel", "blue_steel", "brass", "britannia_silver", "bronze",
        "cast_iron", "cast_steel", "chromium", "constantan", "cosmic_matter", "crystalline_alloy",
        "electrum", "enderium", "energetic_silver", "eternal_dark", "eternal_light", "eternity",
        "etherium", "graphite", "gravitronium", "hepatizon", "invar", "lumium", "magnesium",
        "melodic_alloy", "nethersteel", "osgloglas", "pewter", "pig_iron", "plutonium",
        "quartz_enriched_copper", "quartz_enriched_iron", "rose_gold", "shadowsteel", "signalum",
        "silicon", "stainless_steel", "steel", "stellar_alloy", "stellarium", "universium",
        "vivid_alloy", "wrought_iron", "calcium", "dust", "phosphorus", "rare_earth", "salt"
    ];
    dustMaterials.forEach(mat => warnIfMissing(`${MOD}:${mat}_dust`));

    const blockMaterials = [
        "aluminum", "ardite", "beryllium", "catalyrium", "cobalt", "gallium", "iridium", "lead",
        "molybdenum", "nickel", "osmium", "platinum", "sculkite", "silver", "sulfur", "tin",
        "titanium", "tungsten", "ultimatitanium", "uraninite", "uranium", "vanadium", "zinc",
        "redstone", "charcoal", "anthracite_coal", "bituminous_coal", "lignite_coal", "peat_coal",
        "coke_coal", "flint", "nautilus", "ender_eye", "sugar", "armadillo_scute", "turtle_scute",
        "phantom_membrane", "rotten_flesh", "ender_pearl", "nether_star", "blaze", "amber", "apatite",
        "arcanum", "black_quartz", "certus_quartz", "cinnabar", "fluorite", "garnet", "jade",
        "monazite", "necroticarite", "niter", "obsidian", "onyx", "pearl", "peridot", "pyrolite",
        "quantiquarite", "ruby", "sanguis_vivus", "sapphire", "source", "spectral_sky_bluerite",
        "tachyarite", "tanzanite", "temictetl", "voiderite", "zircon", "aurorium", "biosteel",
        "black_steel", "blue_steel", "brass", "britannia_silver", "bronze", "cast_iron", "cast_steel",
        "chromium", "constantan", "cosmic_matter", "crystalline_alloy", "electrum", "enderium",
        "energetic_silver", "eternal_dark", "eternal_light", "eternity", "etherium", "graphite",
        "gravitronium", "hepatizon", "invar", "lumium", "magnesium", "melodic_alloy", "nethersteel",
        "osgloglas", "pewter", "pig_iron", "plutonium", "quartz_enriched_copper",
        "quartz_enriched_iron", "rose_gold", "shadowsteel", "signalum", "silicon", "stainless_steel",
        "steel", "stellar_alloy", "stellarium", "universium", "vivid_alloy", "wrought_iron",
        "biomass", "antimatter", "exotic_matter", "strange_matter"
    ];
    blockMaterials.forEach(mat => warnIfMissing(`${MOD}:${mat}_block`));

    console.info(`[${MOD}] Item check completed.`);
});

/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
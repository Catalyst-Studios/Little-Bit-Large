//priority: 11

ItemEvents.modifyTooltips(event => {

    function tooltip(itemName, tier, biomes, noplant)
    {
        tier = (tier === null) ? null : tier;
        biomes = (biomes === null) ? null : biomes;
        noplant = (noplant === null) ? false : noplant;

        const essenceId = `mysticalagriculture:${itemName}_essence`;
        const seedsId = `mysticalagriculture:${itemName}_seeds`;
        
        if(Item.exists(essenceId))
        {
            event.modify(essenceId, text => {
                text.removeLine(1);
                text.add(Text.info("Created by: ").append(Text.of("Catalyst ").red()).append(Text.of("Studio").gold()));
            });
        }

        if(Item.exists(seedsId))
        {
            event.modify(seedsId, text => {
                text.removeLine(2);
                if(tier !== null)
                {
                    
                    switch(tier)
                    {
                        case "mag":
                            text.insert(1, Text.of("Tier: ").append(Text.of("Magical").lightPurple()));
                        break;

                        case "tech":
                            text.insert(1, Text.of("Tier: ").append(Text.of("Technology").yellow()));
                        break;

                        case "mys":
                            text.insert(1, Text.of("Tier: ").append(Text.of("Mystical").aqua()));
                        break;
                    
                        default:
                        break;
                    }
                    text.removeLine(2);
                }

                if(biomes !== null)
                {
                    text.insert(2, Text.of("Needs biome to grow on ").append(Text.of("farmland").green()).append(": "));
                    text.removeLine(3);
                }

                if(noplant)
                {
                    text.add(Text.warn("Cannot be planted nor it will growth, use machines to farm them!"))
                }

                text.add(Text.info("Created by: ").append(Text.of("Catalyst ").red()).append(Text.of("Studio").gold()));
            });
        }
    }
    //mag, tech, mys

    //progression essences
    tooltip("prudentium", null, null, true)
    tooltip("tertium", null, null, true)
    tooltip("imperium", null, null, true)
    tooltip("supremium", "mag", null, true)
    tooltip("insanium", "tech", null, true)
    tooltip("cognizian", null, null, true)

    //elemental
    tooltip("darkness", null, null, false)
    tooltip("mystical", null, null, false)
    tooltip("magic", null, null, false)
    tooltip("technology", null, null, true)

    //normal seeds
    tooltip("salt", null, null, false)
    tooltip("arcane", null, null, false)
    tooltip("industrial", null, null, false)
    tooltip("plastic", null, null, false)
    tooltip("prosperity", null, null, false)
    tooltip("xychorium", null, null, false)
    tooltip("dark_gem", null, "", false)
    tooltip("entro", null, null, false)
    tooltip("flux", null, null, true)
    tooltip("sculk", "mag", "", true)
    tooltip("dire", "tech", null, true)

    // Casos excepcionales
    let altar = 'mysticalagriculture:awakening_altar';
    if(Item.exists(altar))
    {  
        event.modify(altar, text => {
            text.removeLine(2);
            text.add(Text.info("Might cause fire").red())
        });
    }
});
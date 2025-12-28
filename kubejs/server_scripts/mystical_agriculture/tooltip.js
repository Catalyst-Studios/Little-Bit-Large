// priority: 11

ItemEvents.modifyTooltips(event => {

    const creditText = Text.info("Created by: ").append(Text.of("<glitch>Catalyst</glitch> ").red()).append(Text.of("Studio").gold());
    
    const TIERS = {
        mag: Text.of("Magical").lightPurple(),
        tech: Text.of("Technology").yellow(),
        mys: Text.of("Mystical").aqua()
    };

    const excludedEssences = new Set([
        'inferium', 'prudentium', 'imperium', 'supremium', 'tertium'
    ]);

    function modifyMA(itemName, options)
    {
        options = options || {};
        let tier = options.tier || null;
        let biome = options.biome || false;
        let noPlant = options.noPlant || false;
        const essenceId = `mysticalagriculture:${itemName}_essence`;
        const seedsId = `mysticalagriculture:${itemName}_seeds`;

        if(Item.exists(essenceId) && !excludedEssences.has(itemName))
        {
            event.modify(essenceId, text => {
                text.removeLine(1);
                text.add(creditText);
            });
        }

        if(Item.exists(seedsId))
        {
            event.modify(seedsId, text => {
                text.removeLine(2);

                if(tier && TIERS[tier])
                {
                    text.insert(1, Text.of("Tier: ").append(TIERS[tier]));
                    text.removeLine(2);
                }

                if(biome)
                {
                    text.insert(2, Text.of("Needs biome to grow on ").append(Text.of("farmland").green()).append(": "));
                    text.removeLine(3);
                }

                if(noPlant)
                {
                    text.add(Text.warn("Cannot be planted nor it will growth, use machines to farm them!"));
                }

                text.add(creditText);
            });
        }
    }

    const items = [
        // Progression
        ['prudentium', { noPlant: true }],
        ['tertium',    { noPlant: true }],
        ['imperium',   { noPlant: true }],
        ['supremium',  { tier: 'mag', noPlant: true }],
        ['insanium',   { tier: 'tech', noPlant: true }],
        ['cognizian',  { noPlant: true }],

        // Elemental & Normal
        ['darkness'],
        ['mystical'],
        ['magic'],
        ['technology', { noPlant: true }],
        ['salt'],
        ['arcane'],
        ['industrial'],
        ['plastic'],
        ['prosperity'],
        ['xychorium'],
        ['dark_gem',   { biome: true }],
        ['entro'],
        ['flux',       { noPlant: true }],
        ['sculk',      { tier: 'mag', biome: true, noPlant: true }],
        ['dire',       { tier: 'tech', noPlant: true }]
    ];

    items.forEach(([name, options]) => modifyMA(name, options));

    const altar = 'mysticalagriculture:awakening_altar';
    if (Item.exists(altar)) {
        event.modify(altar, text => {
            text.removeLine(2);
            text.add(Text.info("Might cause fire").red());
        });
    }

    console.log("[CatJS] Added tooltip to MA items")
});
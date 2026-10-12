// priority: 11
/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
ItemEvents.modifyTooltips(catalyst => {

    Color.createMapped("#ff9329", "cat_orange")
    Color.createMapped("#f2170c", "scarlet")
    
    const creditText = Text.info("Created by: ").append(Text.of("<glitch>Catalyst</glitch> ").color("scarlet")).append(Text.of("Studio").color("cat_orange"));
    
    const TIERS = {
        mag: Text.of("Magical").lightPurple(),
        tech: Text.of("Technology").yellow(),
        mys: Text.of("Mystical").aqua()
    };

    const excludedEssences = new Set([
        'inferium', 'prudentium', 'imperium', 'supremium', 'tertium', 'sculk'
    ]);

    const excludedSeeds = new Set([
        'sculk'
    ])

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
            catalyst.modify(essenceId, text => {
                text.removeLine(1);
                text.add(creditText);
            });
        }

        if(Item.exists(seedsId) && !excludedSeeds.has(itemName))
        {
            catalyst.modify(seedsId, text => {
                text.removeLine(2);

                if(tier && TIERS[tier])
                {
                    text.insert(1, Text.of("Tier: ").append(TIERS[tier]));
                    text.removeLine(2);
                }

                if(biome)
                {
                    text.insert(2, Text.of("Needs biome to grow on ").append(Text.of("farmland").green()));
                    text.removeLine(3);
                }

                if(noPlant)
                {
                    text.add(Text.warn("Cannot be planted, it will not grow. Try using machines to farm them instead!"));
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
        ['black_quartz'],
        ['enriched_copper'],
        ['prosperity'],
        ['xychorium'],
        ['dark_gem'],
        ['entro'],
        ['flux',       { noPlant: true }],
        ['sculk',      { tier: 'mag', noPlant: true }],
        ['dire',       { tier: 'tech', noPlant: true }],
        ["fluxite"],
        ["force_gem"],
        ["mystical_diamond",       { noPlant: true }],
        ["mystical_emerald",       { noPlant: true }],
        ["mystical_netherite",     { noPlant: true }],
        ['gem_tachyarite'],
        ['gallium'],
        ['replica'],
        ['etherium'],
        ['eternal_dark'],
        ['eternal_light'],
        ['britannia_silver'],
        ['cast_iron'],
        ['cast_steel'],
        ['catalyrium',             { tier: 'tech', noPlant: true }],
        ['cosmic_matter'],
        ['eternity'],
        ['missing'],
        ['modularium'],
        ['neodymium'],
        ['neptunium'],
        ['nethersteel'],
        ['pewter'],
        ['plutonium'],
        ['quartz_enriched_copper'],
        ['sculkite',               { tier: 'mys', noPlant: true }],
        ['shadowsteel'],
        ['titanium'],
        ['tungsten'],
        ['ultimatitanium'],
        ['wrought_iron'],
        ['biomass'],
        ['gem_obsidian'],
        ['gem_pyrolite'],
        ['gem_quantiquarite'],
        ['gem_sanguis_vivus'],
        ['gem_spectral_sky_bluerite'],
        ['gem_tanzanite'],
        ['gem_voiderite'],
        ['antimatter_pellet',      { tier: 'tech', noPlant: true }],
        ['exotic_matter_pellet',   { tier: 'tech', noPlant: true }],
        ['strange_matter_pellet',  { tier: 'tech', noPlant: true }],
        ['gem_necroticarite']
    ];

    items.forEach(([name, options]) => modifyMA(name, options));

    const altar = 'mysticalagriculture:awakening_altar';
    if (Item.exists(altar)) {
        catalyst.modify(altar, text => {
            text.removeLine(2);
            text.add(Text.info("Might cause fire").red());
        });
    }

    console.log("[CatJS] Added tooltip to MA items")
});
/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/

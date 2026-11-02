
/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/

ServerEvents.recipes(catalyst => {

    const buddingIds = [
        'justdynathings:echoing_budding_certus',
        'justdynathings:echoing_budding_entro',
        'justdynathings:echoing_budding_coal',
        'justdynathings:echoing_budding_copper',
        'justdynathings:echoing_budding_diamond',
        'justdynathings:echoing_budding_emerald',
        'justdynathings:echoing_budding_gold',
        'justdynathings:echoing_budding_iron',
        'justdynathings:echoing_budding_lapis',
        'justdynathings:echoing_budding_quartz',
        'justdynathings:echoing_budding_redstone',
        'justdynathings:echoing_budding_ancient_debris',
        'justdynathings:echoing_budding_ruby',
        'justdynathings:echoing_budding_sapphire',
        'justdynathings:echoing_budding_topaz',
        'justdynathings:echoing_budding_zinc',
        'justdynathings:echoing_budding_uraninite',
        'justdynathings:echoing_budding_black_quartz',
        'justdynathings:echoing_budding_monazite',
        'justdynathings:echoing_budding_aluminum',
        'justdynathings:echoing_budding_lead',
        'justdynathings:echoing_budding_nickel',
        'justdynathings:echoing_budding_osmium',
        'justdynathings:echoing_budding_platinum',
        'justdynathings:echoing_budding_silver',
        'justdynathings:echoing_budding_tin',
        'justdynathings:echoing_budding_tungsten',
        'justdynathings:echoing_budding_uranium',
        'justdynathings:echoing_budding_time',
        'justdynathings:echoing_budding_amethyst'
    ];

    buddingIds.forEach(id => {
        const name = id.split(':')[1];
        catalyst.shaped(Item.of(id, 1), [
            "PMP",
            "CEA",
            "PBP"
        ], {
            P: 'eternalores:plate_quantiquarite',
            M: 'eternalores:missing_ingot',
            C: 'eternalores:compressed_eternal_dark_block_2x',
            E: id,
            A: 'eternalores:compressed_eternal_light_block_2x',
            B: 'eternalores:compressed_time_crystal_block_3x'
        }).id(`catalyst:${name}`);
    });

    catalyst.shaped(Item.of('justdynathings:advanced_time_wand', 1), [
        "PCP",
        "ATA",
        "GAG"
    ],
    {
        P: 'eternalores:plate_catalyrium',
        C: 'eternalores:catalyric_capacitor',
        A: 'eternalores:catalyrium_ingot',
        T: 'justdirethings:time_wand',
        G: 'eternalores:gear_catalyrium'
    })
    .id("catalyst:advanced_time_wand");

    catalyst.shaped(Item.of('justdynathings:ticker', 1), [
        "PCP",
        "CTC",
        "GAG"
    ],
    {
        P: 'eternalores:plate_catalyrium',
        C: 'eternalores:catalyrium_ingot',
        T: 'justdirethings:time_wand',
        G: 'eternalores:gear_catalyrium',
        A: 'eternalores:catalyric_capacitor'
    })
    .id("catalyst:ticker");

    catalyst.shaped(Item.of('justdynathings:reforger', 1), [
        "TCT",
        "CAC",
        "TET"
    ],
    {
        T: 'justdirethings:time_crystal',
        C: 'justdirethings:coal_t4',
        A: 'justdirethings:clickert2',
        E: 'justdirethings:eclipsealloy_block'
    })
    .id("catalyst:reforger");

    catalyst.shaped(Item.of('justdynathings:energized_goo', 1), [
        "RER",
        "EGE",
        "ASA"
    ],
    {
        R: 'replication:replica_ingot',
        E: 'justdirethings:eclipsealloy_ingot',
        G: 'justdirethings:gooblock_tier4',
        A: 'eternalores:gear_sculkite',
        S: 'eternalores:signalum_capacitor'
    })
    .id("catalyst:energized_goo");

    catalyst.shaped(Item.of('justdynathings:charged_primogel_goo', 1), [
        "PTP",
        "GAG",
        "PTP"
    ], {
        P: 'eternalores:plate_uranium',
        T: 'eternalores:titanium_foil',
        G: 'eternalores:gear_tungsten',
        A: 'justdirethings:gooblock_tier1'
    }).id("catalyst:charged_primogel_goo");

    catalyst.shaped(Item.of('justdynathings:charged_blazebloom_goo', 1), [
        "PTP",
        "GAG",
        "PTP"
    ], {
        P: 'eternalores:plate_plutonium',
        T: 'eternalores:platinum_foil',
        G: 'eternalores:gear_shadowsteel',
        A: 'justdynathings:charged_primogel_goo'
    }).id("catalyst:charged_blazebloom_goo");

    catalyst.shaped(Item.of('justdynathings:charged_voidshimmer_goo', 1), [
        "PTP",
        "GAG",
        "PTP"
    ], {
        P: 'eternalores:plate_modularium',
        T: 'eternalores:ultimatitanium_foil',
        G: 'eternalores:gear_etherium',
        A: 'justdynathings:charged_blazebloom_goo'
    }).id("catalyst:charged_voidshimmer_goo");

    catalyst.shaped(Item.of('justdynathings:charged_shadowpulse_goo', 1), [
        "PTP",
        "GAG",
        "PTP"
    ], {
        P: 'eternalores:plate_cosmic_matter',
        T: 'eternalores:stellarium_foil',
        G: 'eternalores:gear_sculkite',
        A: 'justdynathings:charged_voidshimmer_goo'
    }).id("catalyst:charged_shadowpulse_goo");

    catalyst.shaped(Item.of('justdynathings:stabilizer', 1), [
        "EEE",
        "ECE",
        "GAG"
    ],
    {
        E: 'justdirethings:eclipsealloy_ingot',
        C: 'eternalores:compressed_time_crystal_block_3x',
        G: 'eternalores:gem_spectral_sky_bluerite',
        A: 'eternalores:gear_spectral_sky_bluerite'
    })
    .id("catalyst:stabilizer");

    catalyst.shaped(Item.of('justdynathings:goo_upgrader_t4', 1), [
        "PTP",
        "GAG",
        "PTP"
    ], {
        P: 'eternalores:plate_cosmic_matter',
        T: 'eternalores:stellarium_foil',
        G: 'eternalores:gear_sculkite',
        A: 'justdirethings:upgrade_blank'
    }).id("catalyst:goo_upgrader_t4");

    //Solar
    catalyst.shaped(Item.of('justdynathings:ferricore_solar_panel', 1), [
        "PPP",
        "F F",
        "FBF"
    ],
    {
        P: 'powah:photoelectric_pane',
        F: 'justdirethings:ferricore_ingot',
        B: 'justdirethings:blazegold_ingot'
    })
    .id("catalyst:ferricore_solar_panel");

    catalyst.shaped(Item.of('justdynathings:ferricore_solar_panel', 4), [
        "PPP",
        "FTF",
        "FBF"
    ],
    {
        P: 'powah:photoelectric_pane',
        F: 'justdirethings:ferricore_ingot',
        T: 'justdirethings:time_crystal_block',
        B: 'justdirethings:blazegold_ingot'
    })
    .id("catalyst:ferricore_solar_panel_alt");

    catalyst.shaped(Item.of('justdynathings:blazegold_solar_panel', 1), [
        "PPP",
        "B B",
        "BCB"
    ],
    {
        P: 'powah:photoelectric_pane',
        B: 'justdirethings:blazegold_ingot',
        C: 'justdirethings:celestigem'
    })
    .id("catalyst:blazegold_solar_panel");

    catalyst.shaped(Item.of('justdynathings:blazegold_solar_panel', 4), [
        "PPP",
        "BTB",
        "BCB"
    ],
    {
        P: 'powah:photoelectric_pane',
        B: 'justdirethings:blazegold_ingot',
        T: 'justdirethings:time_crystal_block',
        C: 'justdirethings:celestigem'
    })
    .id("catalyst:blazegold_solar_panel_alt");

    catalyst.shaped(Item.of('justdynathings:celestigem_solar_panel', 1), [
        "PPP",
        "C C",
        "CEC"
    ],
    {
        P: 'powah:photoelectric_pane',
        C: 'justdirethings:celestigem',
        E: 'justdirethings:eclipsealloy_ingot'
    })
    .id("catalyst:celestigem_solar_panel");

    catalyst.shaped(Item.of('justdynathings:celestigem_solar_panel', 4), [
        "PPP",
        "CTC",
        "CEC"
    ],
    {
        P: 'powah:photoelectric_pane',
        C: 'justdirethings:celestigem',
        T: 'justdirethings:time_crystal_block',
        E: 'justdirethings:eclipsealloy_ingot'
    })
    .id("catalyst:celestigem_solar_panel_alt");

    catalyst.shaped(Item.of('justdynathings:eclipse_alloy_solar_panel', 1), [
        "PPP",
        "E E",
        "EAE"
    ],
    {
        P: 'powah:photoelectric_pane',
        E: 'justdirethings:eclipsealloy_ingot',
        A: 'eternalores:plutonium_ingot'
    })
    .id("catalyst:eclipse_alloy_solar_panel");

    catalyst.shaped(Item.of('justdynathings:eclipse_alloy_solar_panel', 4), [
        "PPP",
        "ETE",
        "EAE"
    ],
    {
        P: 'powah:photoelectric_pane',
        E: 'justdirethings:eclipsealloy_ingot',
        T: 'justdirethings:time_crystal_block',
        A: 'eternalores:plutonium_ingot'
    })
    .id("catalyst:eclipse_alloy_solar_panel_alt");

    console.log("[CatJS] Added JDT recipes")
});

/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
RecipeViewerEvents.removeEntries('item', catalyst => {
    const itemsToRemove = [

        // Iron Jetpacks (Electrum)
        'ironjetpacks:capacitor[ironjetpacks:jetpack_id="ironjetpacks:electrum"]',
        'ironjetpacks:thruster[ironjetpacks:jetpack_id="ironjetpacks:electrum"]',
        'ironjetpacks:cell[ironjetpacks:jetpack_id="ironjetpacks:electrum"]',

        // Iron Jetpacks (Platinum)
        'ironjetpacks:capacitor[ironjetpacks:jetpack_id="ironjetpacks:platinum"]',
        'ironjetpacks:thruster[ironjetpacks:jetpack_id="ironjetpacks:platinum"]',
        'ironjetpacks:cell[ironjetpacks:jetpack_id="ironjetpacks:platinum"]',

        // Mekanism & AE2
        'mekanism:dimensional_stabilizer',
        'mekanism:upgrade_anchor',
        'ae2:spatial_anchor',

        // Reliquary & Energized Power
        'reliquary:alkahestry_tome',
        'energizedpower:time_controller',
        'energizedpower:weather_controller',

        // QuarryPlus
        'quarryplus:adv_quarry',
        'quarryplus:remove_bedrock_module',

        // Mystical Agriculture
        'mysticalagradditions:insanium_nugget',

        // Geore (Regex Patterns)
        /geore.*:allthemodium_.*/,
        /geore:.*_allthemodium/,
        /geore:.*_allthemodium_bud/,
        /geore.*:vibranium_.*/,
        /geore:.*_vibranium/,
        /geore:.*_vibranium_bud/,
        /geore.*:unobtainium_.*/,
        /geore:.*_unobtainium/,
        /geore:.*_unobtainium_bud/,

        // Geore Nouveau
        'georenouveau:allthemodium_geore_golem_charm',
        'georenouveau:vibranium_geore_golem_charm',
        'georenouveau:unobtainium_geore_golem_charm',
    ];

    itemsToRemove.forEach(item => {
        catalyst.remove(item);
    });
});
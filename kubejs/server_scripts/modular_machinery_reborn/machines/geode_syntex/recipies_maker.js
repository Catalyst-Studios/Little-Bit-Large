ServerEvents.recipes(catalyst => {
    let mineralTypes = [
        {budding: "minecraft:budding_amethyst", cluster: "minecraft:amethyst_cluster", shard: "minecraft:amethyst_shard", block: "minecraft:amethyst_block"},
        {budding: "ae2:flawless_budding_quartz", cluster: "ae2:quartz_cluster", shard: "ae2:certus_quartz_crystal", block: "ae2:quartz_block"},
        {budding: "extendedae:entro_budding_fully", cluster: "extendedae:entro_cluster", shard: "extendedae:entro_crystal", block: "extendedae:entro_block"},
        {budding: "justdirethings:time_crystal_budding_block", cluster: "justdirethings:time_crystal_cluster", shard: "justdirethings:time_crystal", block: "justdirethings:time_crystal_block"},
        {budding: "geore:budding_copper", cluster: "geore:copper_cluster", shard: "geore:copper_shard", block: "geore:copper_block"},
        {budding: "geore:budding_coal", cluster: "geore:coal_cluster", shard: "geore:coal_shard", block: "geore:coal_block"},
        {budding: "geore:budding_diamond", cluster: "geore:diamond_cluster", shard: "geore:diamond_shard", block: "geore:diamond_block"},
        {budding: "geore:budding_emerald", cluster: "geore:emerald_cluster", shard: "geore:emerald_shard", block: "geore:emerald_block"},
        {budding: "geore:budding_gold", cluster: "geore:gold_cluster", shard: "geore:gold_shard", block: "geore:gold_block"},
        {budding: "geore:budding_iron", cluster: "geore:iron_cluster", shard: "geore:iron_shard", block: "geore:iron_block"},
        {budding: "geore:budding_lapis", cluster: "geore:lapis_cluster", shard: "geore:lapis_shard", block: "geore:lapis_block"},
        {budding: "geore:budding_quartz", cluster: "geore:quartz_cluster", shard: "geore:quartz_shard", block: "geore:quartz_block"},
        {budding: "geore:budding_redstone", cluster: "geore:redstone_cluster", shard: "geore:redstone_shard", block: "geore:redstone_block"},
        {budding: "geore:budding_ancient_debris", cluster: "geore:ancient_debris_cluster", shard: "geore:ancient_debris_shard", block: "geore:ancient_debris_block"},
        {budding: "geore:budding_ruby", cluster: "geore:ruby_cluster", shard: "geore:ruby_shard", block: "geore:ruby_block"},
        {budding: "geore:budding_sapphire", cluster: "geore:sapphire_cluster", shard: "geore:sapphire_shard", block: "geore:sapphire_block"},
        {budding: "geore:budding_topaz", cluster: "geore:topaz_cluster", shard: "geore:topaz_shard", block: "geore:topaz_block"},
        {budding: "geore:budding_zinc", cluster: "geore:zinc_cluster", shard: "geore:zinc_shard", block: "geore:zinc_block"},
        {budding: "geore:budding_uraninite", cluster: "geore:uraninite_cluster", shard: "geore:uraninite_shard", block: "geore:uraninite_block"},
        {budding: "geore:budding_uranium", cluster: "geore:uranium_cluster", shard: "geore:uranium_shard", block: "geore:uranium_block"},
        {budding: "geore:budding_black_quartz", cluster: "geore:black_quartz_cluster", shard: "geore:black_quartz_shard", block: "geore:black_quartz_block"},
        {budding: "geore:budding_monazite", cluster: "geore:monazite_cluster", shard: "geore:monazite_shard", block: "geore:monazite_block"},
        {budding: "geore:budding_aluminum", cluster: "geore:aluminum_cluster", shard: "geore:aluminum_shard", block: "geore:aluminum_block"},
        {budding: "geore:budding_lead", cluster: "geore:lead_cluster", shard: "geore:lead_shard", block: "geore:lead_block"},
        {budding: "geore:budding_nickel", cluster: "geore:nickel_cluster", shard: "geore:nickel_shard", block: "geore:nickel_block"},
        {budding: "geore:budding_osmium", cluster: "geore:osmium_cluster", shard: "geore:osmium_shard", block: "geore:osmium_block"},
        {budding: "geore:budding_platinum", cluster: "geore:platinum_cluster", shard: "geore:platinum_shard", block: "geore:platinum_block"},
        {budding: "geore:budding_silver", cluster: "geore:silver_cluster", shard: "geore:silver_shard", block: "geore:silver_block"},
        {budding: "geore:budding_tin", cluster: "geore:tin_cluster", shard: "geore:tin_shard", block: "geore:tin_block"},
        {budding: "geore:budding_tungsten", cluster: "geore:tungsten_cluster", shard: "geore:tungsten_shard", block: "geore:tungsten_block"}
    ];
    
    mineralTypes.forEach(mineral => {
        catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:crystalline_fabricator", 2400)
        .progressData(ProgressData.create().x(54).y(20))
        .width(110)
        .height(60)
        .requireEnergy(10000, 0, 4)
        .requireItem(`32x ${mineral.block}`, 25, 20)
        .produceItem(`1x ${mineral.budding}`, 90, 20)
        .id(`catalyst:mmr/crystalline_fabricator/${mineral.budding.replace(":", "_")}`)
    });
});
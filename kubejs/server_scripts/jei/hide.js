RecipeViewerEvents.removeCategories(catalyst => {
    if(!Platform.isLoaded("emi") && !Platform.isLoaded("jei"))
    {
        return;
    }

    if(Platform.isLoaded("jei") && !Platform.isLoaded("emi"))
    {
        return;
    }

    if(!Platform.isLoaded("jei") && Platform.isLoaded("emi"))
    {
        return;
    }

    catalyst.remove('immersiveengineering:cloche')
    catalyst.remove("immersiveengineering:fertilizer")
    catalyst.remove('hostilenetworks:sim_chamber')
    catalyst.remove('hostilenetworks:loot_fabricator')
    catalyst.remove("mysticalagriculture:awakening")
    catalyst.remove('mysticalagriculture:crux')
    catalyst.remove('mysticalagriculture:enchanter')
    catalyst.remove('mysticalagriculture:infusion')
    catalyst.remove('mysticalagriculture:reprocessor')
    catalyst.remove('mysticalagriculture:soul_extractor')
    catalyst.remove('mysticalagriculture:soulium_spawner')
    console.info("[CatJS] Remove JEI categories")
})
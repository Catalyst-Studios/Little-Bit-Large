const $EssenceVesselsManager = Java.loadClass('com.blakebr0.mysticalagriculture.crafting.EssenceVesselColorManager')

ServerEvents.afterRecipes(catalyst =>{
    let manager = $EssenceVesselsManager.INSTANCE
    if(manager)
    {
        manager.addColor(Item.of('mysticalagriculture:darkness_essence'), 0x000000)
        manager.addColor(Item.of('mysticalagriculture:magic_essence'), 0xAA45ED)
        manager.addColor(Item.of('mysticalagriculture:mystical_essence'), 0x3DB2E0)
        manager.addColor(Item.of('mysticalagriculture:technology_essence'), 0xEDC45F)
        console.log("[CatJS] MA Essence colors has been applied")
    }
})
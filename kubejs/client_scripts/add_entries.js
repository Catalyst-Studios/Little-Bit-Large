/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
RecipeViewerEvents.addEntries("item", catalyst => {

    const beecombs = [
        "phil",
        "allergy",
        "sponge",
        "sussy",
        "sugarbag",
        "ribbeet",
        "water",
        "pepto_bismol"
    ]

    beecombs.forEach(entry => {
        let comb = Item.of('productivebees:configurable_comb', 1, {
            "productivebees:bee_type": `productivebees:${entry}`
        })
        catalyst.add(comb);
    })

    let seeds = [
        "cobalt", 
        "lumium", 
        "signalum", 
        "rose_gold", 
        "pig_iron", 
        "enderium"
    ]

    seeds.forEach(seed => {
        catalyst.add(Item.of(`mysticalagriculture:${seed}_seeds`))
        catalyst.add(Item.of(`mysticalagriculture:${seed}_essence`))
    })

    catalyst.add('create:refined_radiance_casing')
    catalyst.add('create:shadow_steel_casing')
})
/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
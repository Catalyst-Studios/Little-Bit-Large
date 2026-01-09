/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/

ServerEvents.recipes(catalyst => {
    const seeds = [
        ['mysticalagriculture:wood_seeds', '#minecraft:logs', 'mysticalagriculture:inferium_essence'],
        ['mysticalagriculture:rubber_seeds', '#c:rubber', 'mysticalagriculture:prudentium_essence'],
        ['mysticalagriculture:silicon_seeds', '#c:silicon', 'mysticalagriculture:prudentium_essence'],
        ['mysticalagriculture:sulfur_seeds', '#c:dusts/sulfur', 'mysticalagriculture:prudentium_essence'],
        ['mysticalagriculture:steel_seeds', '#c:ingots/steel', 'mysticalagriculture:imperium_essence'],
        ['mysticalagriculture:saltpeter_seeds', '#c:dusts/niter', 'mysticalagriculture:prudentium_essence'],
        ['mysticalagriculture:tin_seeds', '#c:ingots/tin', 'mysticalagriculture:tertium_essence'],
        ['mysticalagriculture:uraninite_seeds', '#c:ingots/uraninite', 'mysticalagriculture:supremium_essence']
    ]

    seeds.forEach(([output, input, essence]) => {
        let seedName = output.split(':')[1] // ej: wood_seeds
        
        let inputJson = input.startsWith('#') 
            ? { tag: input.substring(1)}
            : { item: input }

        catalyst.remove({ output: output })

        catalyst.custom({
            type: 'mysticalagriculture:infusion',
            input: { item: 'mysticalagriculture:prosperity_seed_base' },
            ingredients: [
                { item: essence }, inputJson,
                { item: essence }, inputJson,
                { item: essence }, inputJson,
                { item: essence }, inputJson
            ],
            result: { id: output } 
        }).id(`catalyst:mysticalagriculture/infusion/${seedName}_essence`)
    })
})
    
/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/

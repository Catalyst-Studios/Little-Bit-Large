/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
ServerEvents.recipes(catalyst => {

    const rename = (obj) => {
        let s = "unknown"
        if(typeof obj === "string") s = obj
        else if(obj.item) s = obj.item
        else if(obj.tag) s = obj.tag
        else if(obj.id) s = obj.id
        
        return s.split(':').pop().replace(/[^a-z0-9_.-]/gi, '_').toLowerCase()
    }

    const deploy = (input) => (transitionalItem) => {
        let ingredient = input
        if(typeof input === "string")
        {
            ingredient = input.startsWith("#") ? { tag: input.substring(1) } : { item: input }
        }
        else if(input.item)
        {
            ingredient = { item: input.item }
        }
        else if(input.tag)
        {
            ingredient = { tag: input.tag }
        }
        
        return {
            type: "create:deploying",
            ingredients: [{ item: transitionalItem }, ingredient],
            results: [{ id: transitionalItem }]
        }
    }

    const cut = (transitionalItem) => ({
        type: "create:cutting",
        ingredients: [{ item: transitionalItem }],
        results: [{ id: transitionalItem }] 
    })

    const press = (transitionalItem) => ({
        type: "create:pressing",
        ingredients: [{ item: transitionalItem }],
        results: [{ id: transitionalItem }] 
    })

    const fill = (fluidId, amount) => (transitionalItem) => {
        let fluid_id = fluidId
        let fluid_amount = amount
        if(typeof fluidId === 'object' && fluidId.fluid)
        {
            fluid_id = fluidId.fluid
            fluid_amount = fluidId.amount
        }

        return {
            type: "create:filling",
            ingredients: [
                { item: transitionalItem },
                { type: "neoforge:single", fluid: fluid_id, amount: fluid_amount }
            ],
            results: [{ id: transitionalItem }]
        }
    }

    const energise = (energyAmount) => (transitionalItem) => {
        if(Platform.isLoaded('create_new_age'))
        {
            return {
                type: "create_new_age:energising",
                energy_needed: energyAmount,
                ingredients: [{ item: transitionalItem }],
                results: [{ id: transitionalItem }]
            }
        }
        else
        {
            console.warn(`[CatJS] create_new_age not detected, changing for pressing.`)
            return press;
        }
    }

    const SequencedAssemblyBuilder = (event) => {
        let _ingredient = {}
        let _transitionalItem = 'minecraft:stone'
        let _loops = 1
        let _sequence = []
        let _customId = null

        return {
            withIngredient: function(input)
            {
                if(input.startsWith('#')) _ingredient = { tag: input.substring(1) }
                else _ingredient = { item: input }
                return this
            },

            withTransitionalItem: function(item)
            {
                _transitionalItem = item
                return this
            },

            withLoops: function(count)
            {
                _loops = count
                return this
            },

            withSequence: function(seqArray)
            {
                _sequence = seqArray
                return this
            },

            withId: function(id)
            {
                _customId = id
                return this
            },

            withResults: function(items, chances) {
                let resultsArray = []
                let inputItems = Array.isArray(items) ? items : [items]
                let inputChances = Array.isArray(chances) ? chances : [chances]

                if(inputChances[0] >= 100)
                {
                    resultsArray.push({ 
                        id: inputItems[0], 
                        chance: 1.0
                    })
                } 
                else
                {
                    inputItems.forEach((item, index) => {
                        let weight = inputChances[index] || 0
                        if(weight > 0) resultsArray.push({ id: item, chance: weight })
                    })
                }

                const finalSequence = _sequence.map(step => {
                    if(typeof step === 'function') return step(_transitionalItem)
                    return step
                })

                let finalId = _customId
                
                if(!finalId)
                {
                    //catalyst:create/sequencial_assembly/${input}_${loops}_${transitional}_${output_first}
                    let inName = rename(_ingredient)
                    let transName = rename(_transitionalItem)
                    let outName = rename(resultsArray[0].id)
                    
                    finalId = `catalyst:create/sequencial_assembly/${inName}_${_loops}_${transName}_${outName}`
                }

                event.custom({
                    type: "create:sequenced_assembly",
                    ingredient: _ingredient,
                    transitional_item: { 
                        id: _transitionalItem, 
                        count: 1 
                    }, 
                    sequence: finalSequence,
                    results: resultsArray,
                    loops: _loops
                }).id(finalId)
            }
        }
    }

    const assembly = (inputTag, loop, transitionalItem, sequence, result, id) => {
        let resultItems = []
        let resultChances = []
        
        if(Array.isArray(result))
        {
            result.forEach(r => {
                resultItems.push(r.id || r.item)
                resultChances.push(r.chance || 100.0)
            })
        }
        else if(typeof result === 'object')
        {
            resultItems.push(result.id || result.item)
            resultChances.push(result.chance || 100.0)
        }
        if(id)
        {

        }
        SequencedAssemblyBuilder(catalyst)
            .withIngredient(inputTag)
            .withLoops(loop)
            .withTransitionalItem(transitionalItem)
            .withSequence(sequence)
            .withResults(resultItems, resultChances)
    }


    /*SequencedAssemblyBuilder(catalyst)
        .withIngredient('catalystcore:bound_voidspawn')
        .withLoops(5)
        .withTransitionalItem('kubejs:incomplete_containment_ingot')
        .withSequence([
            fill("minecraft:lava", 1000),
            deploy("create:cogwheel"),
            press,
            cut
        ])
        .withId("catalyst:create/sequencial_finite")
        .withResults('eternalores:eternal_dark_ingot', 100)

    SequencedAssemblyBuilder(catalyst)
        .withIngredient('catalystcore:concentrated_radiance')
        .withLoops(5)
        .withTransitionalItem('kubejs:incomplete_containment_ingot')
        .withSequence([
            fill("minecraft:lava", 1000),
            deploy("#c:stones"),
            press,
            cut
        ])
        .withResults('eternalores:eternal_light_ingot', 100)
    
    assembly(
        'catalystcore:concentrated_radiance',
        1,
        'kubejs:incomplete_containment_ingot',
        [
            fill("minecraft:lava", 1000),
            deploy('minecraft:nether_star'),
            deploy('mekanism:ingot_refined_glowstone'),
            deploy('evilcraft:lightning_grenade'),
            press,
            fill("minecraft:water", 1000),
            cut
        ],
        [{ id: 'eternalores:eternal_light_ingot', chance: 120.0 }]
    )*/

    assembly(
      'catalystcore:bound_voidspawn',
      1,
      'kubejs:incomplete_imperfect_ingot',
      [
        fill("minecraft:lava", 1000),
        deploy({ item: 'reliquary:void_tear' }),
        deploy({ item: 'minecraft:sculk' }),
        deploy({ item: 'actuallyadditions:empowered_void_crystal' }),
        press,
        cut,
        fill("kubejs:liquid_darkness", 250)
      ],
      [{ id: 'eternalores:eternal_dark_ingot', chance: 120.0 }]
    )

    assembly(
    'catalystcore:concentrated_radiance',
    1,
    'kubejs:incomplete_imperfect_ingot',
    [
            fill("minecraft:lava", 1000),
            deploy({ item: 'minecraft:nether_star' }),
            deploy({ item: 'mekanism:ingot_refined_glowstone' }),
            deploy({ item: 'evilcraft:lightning_grenade' }),
            press,
            cut,
            fill("kubejs:liquid_light", 250)
          ],
          [{ id: 'eternalores:eternal_light_ingot', chance: 120.0 }]
    )

    assembly(
        'ars_nouveau:mob_jar',
        6,
        'ars_nouveau:mob_jar',
        [
                deploy({ item: 'eternalores:rod_netherite' }),
                deploy({ item: 'eternalores:rod_netherite' }),
                deploy({ item: 'eternalores:plate_diamond' }),
                press,
              ],
              [{ id: 'catalystcore:empty_containment_vessel', chance: 120.0 }]
    )

    SequencedAssemblyBuilder(catalyst)
        .withIngredient("catalystcore:empty_containment_vessel")
        .withLoops(3)
        .withTransitionalItem('kubejs:incomplete_containment_ingot')
        .withSequence([
            deploy('enderio:vibrant_crystal'),
            deploy('mysticalagriculture:mystical_seeds'),
            press,
            deploy('catalystcore:reinforced_glass'),
            energise(200000)
        ])
        .withResults('catalystcore:concentrated_radiance', 100)
    
    SequencedAssemblyBuilder(catalyst)
        .withIngredient("catalystcore:empty_containment_vessel")
        .withLoops(3)
        .withTransitionalItem('kubejs:incomplete_containment_ingot')
        .withSequence([
            deploy('enderio:pulsating_crystal'),
            deploy('mysticalagriculture:darkness_seeds'),
            press,
            deploy('catalystcore:reinforced_glass'),
            energise(200000)
        ])
        .withResults('catalystcore:bound_voidspawn', 100)

    SequencedAssemblyBuilder(catalyst)
        .withId('catalyst:create/precision_mechanism_no_percent')
        .withIngredient('#c:plates/gold')
        .withTransitionalItem('create:incomplete_precision_mechanism')
        .withLoops(3)
        .withSequence([
            deploy('create:cogwheel'),
            deploy('create:large_cogwheel'),
            deploy('#c:nuggets/iron')
        ])
        .withResults('create:precision_mechanism', 100)
})

/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/

/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
ServerEvents.recipes(catalyst => {
  const T = "__T__"

  const deploy = (extra) => ({
      type: "create:deploying",
      ingredients: [{ item: T }, extra],
      results: [{ id: T }]
    })

  let cut = {
      type: "create:cutting",
      ingredients: [{ item: T }],
      results: [{ id: T }]
    }

  let press = {
      type: "create:pressing",
      ingredients: [{ item: T }],
      results: [{ id: T }]
    }

  const fill = (fluidId, amount) => ({
      type: "create:filling",
      ingredients: [
        { item: T },
        { type: "neoforge:single", fluid: fluidId, amount: amount }
      ],
      results: [{ id: T }]
    })


  // Deep replace placeholder with the chosen transitionalItem
  const bindTransition = (obj, transitionalItem) => {
    if (Array.isArray(obj)) return obj.map(v => bindTransition(v, transitionalItem))
    if (obj && typeof obj === "object") {
      let out = {} // <-- IMPORTANT: use let, not const, and don't call it "o"
      for (const [k, v] of Object.entries(obj)) {
        if ((k === "item" || k === "id") && v === T) out[k] = transitionalItem
        else out[k] = bindTransition(v, transitionalItem)
      }
      return out
    }
    return obj
  }

  const assembly = (inputTag, loop, transitionalItem, sequence, result) => {
    catalyst.custom({
      type: "create:sequenced_assembly",
      ingredient: { item: inputTag },
      loops: loop,
      results: result,
      sequence: sequence.map(s => bindTransition(s, transitionalItem)),
      transitional_item: { id: transitionalItem }
    })
  }


    assembly(
      'catalystcore:bound_voidspawn',
      1,
      'kubejs:incomplete_containment_ingot',
      [
        fill("minecraft:lava", 1000),
        deploy({ item: 'reliquary:void_tear' }),
        deploy({ item: 'minecraft:sculk' }),
        deploy({ item: 'actuallyadditions:empowered_void_crystal' }),
        press,
        fill("minecraft:water", 1000),
        cut
      ],
      [{ id: 'eternalores:eternal_dark_ingot', chance: 120.0 }]
    )
    assembly(
    'catalystcore:concentrated_radiance',
    1,
    'kubejs:incomplete_containment_ingot',
    [
            fill("minecraft:lava", 1000),
            deploy({ item: 'minecraft:nether_star' }),
            deploy({ item: 'mekanism:ingot_refined_glowstone' }),
            deploy({ item: 'evilcraft:lightning_grenade' }),
            press,
            fill("minecraft:water", 1000),
            cut
          ],
          [{ id: 'eternalores:eternal_light_ingot', chance: 120.0 }]
    )
    assembly
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

})







/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
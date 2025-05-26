//priority: 10

const $Mth = Java.loadClass("net.minecraft.util.Mth")
const $ParticlesType = Java.loadClass("net.minecraft.core.particles.ParticleTypes")
const $Block = Java.loadClass("net.minecraft.world.level.block.Block");
const $ItemEntity = Java.loadClass("net.minecraft.world.entity.item.ItemEntity");
const $ItemStack = Java.loadClass("net.minecraft.world.item.ItemStack");
const $AABB = Java.loadClass("net.minecraft.world.phys.AABB");
const cropRegistry2 = Java.loadClass('com.blakebr0.mysticalagriculture.registry.CropRegistry')

//Changing recipes for tier 6, to use tier awakening
/**
 * 
 * @param {string} essence1 Essence name, like darkness
 * @param {string} essence2 Essence name, like darkness
 * @param {string} essence3 Essence name, like darkness
 * @param {string} essence4 Essence name, like darkness
 * @param {string} material1 Material to be used
 * @param {string} material2 Material to be used
 * @param {string} material3 Material to be used
 * @param {string} material4 Material to be used
 * @param {string} input Input item
 * @param {string} output Output item
 * @param {string} bees Number > 0 if this is a bee recipe, otherwise, 0
 */
function awakening_MA(essence1, essence2, essence3, essence4,
                          material1, material2, material3, material4,
                          input, output, event)
{
    event.custom({
        type: "mysticalagriculture:awakening",
        essences: [
            {
                id: `mysticalagriculture:${essence1}_essence`,
                count: 40
            },
            {
                id: `mysticalagriculture:${essence2}_essence`,
                count: 40
            },
            {
                id: `mysticalagriculture:${essence3}_essence`,
                count: 40
            },
            {
                id: `mysticalagriculture:${essence4}_essence`,
                count: 40
            }
        ],
        input: {
            item: input
        },
        ingredients: [
            {
                item: material1
            },
            {
                item: material2
            },
            {
                item: material3
            },
            {
                item: material4
            }
        ],
        result: {
            id: output
        }
    })
}

/**
 * 
 * @param {string} material1 Material to be used
 * @param {string} material2 Material to be used
 * @param {string} material3 Material to be used
 * @param {string} material4 Material to be used
 * @param {string} material5 Material to be used
 * @param {string} material6 Material to be used
 * @param {string} material7 Material to be used
 * @param {string} material8 Material to be used
 * @param {string} input Input item
 * @param {string} output Output item
 * @param {number} bees Number > 0 if this is a bee recipe
 */
function infusion_MA(material1, material2, material3, material4,
                          material5, material6, material7, material8,
                          input, output, bees, event)
{
    if(bees > 0) {
        event.custom({
            type: 'mysticalagriculture:infusion',
            input: {
                "type": "productivebees:component",
                "components": {
                  "minecraft:entity_data": {
                    "type": `productivebees:${input}`,
                    "id": "productivebees:configurable_bee"
                  }
                },
                "items": "productivebees:spawn_egg_configurable_bee"
            },
            ingredients: [
                {
                    item: material1
                },
                {
                    item: material2
                },
                {
                    item: material3
                },
                {
                    item: material4
                },
                {
                    item: material5
                },
                {
                    item: material6
                },
                {
                    item: material7
                },
                {
                    item: material8
                }
            ],
            result: {
                "components": {
                    "minecraft:entity_data": {
                        "type": `productivebees:${output}`,
                        "id": "productivebees:configurable_bee"
                    }
                },
                "count": 1,
                "id": "productivebees:spawn_egg_configurable_bee"
            }
        });
        return;
    }

    event.custom({
        type: 'mysticalagriculture:infusion',
        input: {
            item: input
        },
        ingredients: [
            {
                item: material1
            },
            {
                item: material2
            },
            {
                item: material3
            },
            {
                item: material4
            },
            {
                item: material5
            },
            {
                item: material6
            },
            {
                item: material7
            },
            {
                item: material8
            }
        ],
        result: {
            id: output,
            count: 1
        }
    });
}

function row(material1, material2, material3, output, number_output, type, event)
{
    if(type === 0)
    {
        event.shaped(`${number_output}x ${output}`, [
                'A C',
                ' B ',
                '   '
            ], {
                A: material1,
                B: material2,
                C: material3
            }
        )
    }
    else
    {
        event.shaped(`${number_output}x ${output}`, [
                'ABC',
                '   ',
                '   '
            ], {
                A: material1,
                B: material2,
                C: material3
            }
        )
    }
}

function row2(material1, material2, material3, output, number_output, type, event)
{
    if(type === 0)
    {
        event.shaped(`${number_output}x ${output}`, [
                '   ',
                'ABC',
                '   '
            ], {
                A: material1,
                B: material2,
                C: material3
            }
        )
    }
    else
    {
        event.shaped(`${number_output}x ${output}`, [
                '   ',
                'A C',
                ' B '
            ], {
                A: material1,
                B: material2,
                C: material3
            }
        )
    }
}

function row3(material1, material2, material3, output, number_output, type, event)
{
    if(type === 0)
    {
        event.shaped(`${number_output}x ${output}`, [
                '   ',
                '   ',
                'ABC'
            ], {
                A: material1,
                B: material2,
                C: material3
            }
        )
    }
    else
    {
        event.shaped(`${number_output}x ${output}`, [
                '   ',
                ' B ',
                'A C'
            ], {
                A: material1,
                B: material2,
                C: material3
            }
        )
    }
    
}

function diagonal(material1, material2, material3, output, number_output, event)
{
    event.shaped(`${number_output}x ${output}`, [
        'A  ',
        ' B ',
        '  C'
      ], {
        A: material1,
        B: material2,
        C: material3
      }
    )
}

function diagonal2(material1, material2, material3, output, number_output, event)
{
    event.shaped(`${number_output}x ${output}`, [
        '  A',
        ' B ',
        'C  '
      ], {
        A: material1,
        B: material2,
        C: material3
      }
    )
}

function square(material1, material2, material3, material4, output, number_output, event)
{
    event.shaped(`${number_output}x ${output}`, [
        ' A ',
        'B C',
        ' D '
      ], {
        A: material1,
        B: material2,
        C: material3,
        D: material4
      }
    )
}

const awaE = "mysticalagriculture:awakened_supremium_essence";
const awaEB = "mysticalagriculture:awakened_supremium_block";
const awaI = "mysticalagriculture:awakened_supremium_ingot";
const awaG = "mysticalagriculture:awakened_supremium_gemstone";
const awaIB = "mysticalagriculture:awakened_supremium_ingot_block";
const awaGB = "mysticalagriculture:awakened_supremium_gemstone_block";
const insa = "mysticalagradditions:insanium_essence"
const conig = "mysticalagriculture:cognizant_dust"

ServerEvents.recipes(event => {

    const crops = cropRegistry2.getInstance().getCrops()

    const fixSeed = [
        "cobalt", "lumium", "signalum", "rose_gold", "pig_iron", "enderium"
    ]

    crops.forEach(crop => {
        for(let i = 0; i < fixSeed.length; i++)
        {
            let name = fixSeed[i];
            if(crop.getName() === name) {crop.setEnabled(true); console.log("Seed " + name + " fixed")};
        }
    })

    //Seed fix

    // Enderium Seeds
    infusion_MA(
        "eternalores:enderium_ingot", "mysticalagriculture:supremium_essence",
        "eternalores:enderium_ingot", "mysticalagriculture:supremium_essence", 
        "eternalores:enderium_ingot", "mysticalagriculture:supremium_essence", 
        "eternalores:enderium_ingot", "mysticalagriculture:supremium_essence", 
        "mysticalagriculture:prosperity_seed_base", 
        "mysticalagriculture:enderium_seeds", 
        0, event
    );

    // Cobalt Seeds
    infusion_MA(
        "eternalores:cobalt_ingot", "mysticalagriculture:imperium_essence",
        "eternalores:cobalt_ingot", "mysticalagriculture:imperium_essence",
        "eternalores:cobalt_ingot", "mysticalagriculture:imperium_essence",
        "eternalores:cobalt_ingot", "mysticalagriculture:imperium_essence",
        "mysticalagriculture:prosperity_seed_base",
        "mysticalagriculture:cobalt_seeds",
        0, event
    );

    // Lumium Seeds
    infusion_MA(
        "eternalores:lumium_ingot", "mysticalagriculture:imperium_essence",
        "eternalores:lumium_ingot", "mysticalagriculture:imperium_essence",
        "eternalores:lumium_ingot", "mysticalagriculture:imperium_essence",
        "eternalores:lumium_ingot", "mysticalagriculture:imperium_essence",
        "mysticalagriculture:prosperity_seed_base",
        "mysticalagriculture:lumium_seeds",
        0, event
    );

    // Signalum Seeds
    infusion_MA(
        "eternalores:signalum_ingot", "mysticalagriculture:imperium_essence",
        "eternalores:signalum_ingot", "mysticalagriculture:imperium_essence",
        "eternalores:signalum_ingot", "mysticalagriculture:imperium_essence",
        "eternalores:signalum_ingot", "mysticalagriculture:imperium_essence",
        "mysticalagriculture:prosperity_seed_base",
        "mysticalagriculture:signalum_seeds",
        0, event
    );

    // Rose Gold Seeds
    infusion_MA(
        "eternalores:rose_gold_ingot", "mysticalagriculture:imperium_essence",
        "eternalores:rose_gold_ingot", "mysticalagriculture:imperium_essence",
        "eternalores:rose_gold_ingot", "mysticalagriculture:imperium_essence",
        "eternalores:rose_gold_ingot", "mysticalagriculture:imperium_essence",
        "mysticalagriculture:prosperity_seed_base",
        "mysticalagriculture:rose_gold_seeds",
        0, event
    );

    // Pig Iron Seeds
    infusion_MA(
        "eternalores:pig_iron_ingot", "mysticalagriculture:tertium_essence",
        "eternalores:pig_iron_ingot", "mysticalagriculture:tertium_essence",
        "eternalores:pig_iron_ingot", "mysticalagriculture:tertium_essence",
        "eternalores:pig_iron_ingot", "mysticalagriculture:tertium_essence",
        "mysticalagriculture:prosperity_seed_base",
        "mysticalagriculture:pig_iron_seeds",
        0, event
    );

    // Enderium
    square(
        "mysticalagriculture:enderium_essence", "mysticalagriculture:enderium_essence",
        "mysticalagriculture:enderium_essence", "mysticalagriculture:enderium_essence",
        "eternalores:enderium_ingot", 4, event
    );

    // Cobalt
    square(
        "mysticalagriculture:cobalt_essence", "mysticalagriculture:cobalt_essence",
        "mysticalagriculture:cobalt_essence", "mysticalagriculture:cobalt_essence",
        "eternalores:cobalt_ingot", 4, event
    );

    // Lumium
    square(
        "mysticalagriculture:lumium_essence", "mysticalagriculture:lumium_essence",
        "mysticalagriculture:lumium_essence", "mysticalagriculture:lumium_essence",
        "eternalores:lumium_ingot", 4, event
    );

    // Signalum
    square(
        "mysticalagriculture:signalum_essence", "mysticalagriculture:signalum_essence",
        "mysticalagriculture:signalum_essence", "mysticalagriculture:signalum_essence",
        "eternalores:signalum_ingot", 4, event
    );

    // Rose Gold
    square(
        "mysticalagriculture:rose_gold_essence", "mysticalagriculture:rose_gold_essence",
        "mysticalagriculture:rose_gold_essence", "mysticalagriculture:rose_gold_essence",
        "eternalores:rose_gold_ingot", 4, event
    );

    // Pig Iron
    square(
        "mysticalagriculture:pig_iron_essence", "mysticalagriculture:pig_iron_essence",
        "mysticalagriculture:pig_iron_essence", "mysticalagriculture:pig_iron_essence",
        "eternalores:pig_iron_ingot", 4, event
    );

    event.remove({output: 'mysticalagradditions:insanium_apple'}); //done
    event.remove({output: 'mysticalagradditions:insanium_ingot'}); //done
    event.remove({output: 'mysticalagradditions:insanium_block'}) //done
    event.remove({output: 'mysticalagradditions:insanium_gemstone'}); //Done
    event.remove({output: 'mysticalagradditions:insanium_farmland'}); //Done
    event.remove({output: 'mysticalagradditions:insanium_essence'}); //done
    event.remove({output: 'mysticalagradditions:insanium_nugget'}); //Useless recipe basically
    event.remove({type: 'mysticalagriculture:infusion', output: 'productivebees:spawn_egg_configurable_bee'}); //mainly because bees are cheap, going to seed treatment
    event.remove({type: 'mysticalagriculture:awakening', output: 'productivebees:spawn_egg_configurable_bee'});

    //Insanium block
    event.shaped('1x mysticalagradditions:insanium_block', [
        'AAA', 
        'AAA',
        'AAA'  
      ], {
        A: 'mysticalagradditions:insanium_essence'
      }
    )

    event.shapeless('9x mysticalagradditions:insanium_essence', '1x mysticalagradditions:insanium_block')

    //Magical block
    event.shaped('1x kubejs:mystical_block', [
        'AAA', 
        'AAA',
        'AAA'  
      ], {
        A: 'mysticalagriculture:mystical_essence'
      }
    )

    //Magical block
    event.shaped('1x kubejs:magical_block', [
        'AAA', 
        'AAA',
        'AAA'  
      ], {
        A: 'mysticalagriculture:magic_essence'
      }
    )

    event.shaped('1x kubejs:technology_block', [
        'AAA', 
        'AAA',
        'AAA'  
      ], {
        A: 'mysticalagriculture:technology_essence'
      }
    )

    //Insanium apple (darkness + magic)
    awakening_MA("darkness", "magic", "darkness", "magic",
                awaE, awaE, awaE, awaE,
                "mysticalagradditions:supremium_apple",
                "mysticalagradditions:insanium_apple",
                event  
    )

    //Insanium apple (darkness + mystical)
    awakening_MA("darkness", "mystical", "darkness", "mystical",
                insa, insa, insa, insa,
                "mysticalagradditions:supremium_apple",
                "mysticalagradditions:insanium_apple",
                event    
    )

    //Insanium ingot (darkness + magic)
    awakening_MA("darkness", "magic", "darkness", "magic",
                awaE, awaG, awaE, awaG,
                awaI,
                "mysticalagradditions:insanium_ingot",
                event   
    )

    //Insanium ingot (darkness + mystical)
    awakening_MA("darkness", "mystical", "darkness", "mystical",
                awaE, awaG, awaE, awaG,
                awaI,
                "mysticalagradditions:insanium_ingot",
                event   
    )

    //Insanium gem (darkness + magic)
    awakening_MA("darkness", "magic", "darkness", "magic",
                awaE, awaI, awaE, awaI,
                awaG,
                "mysticalagradditions:insanium_gemstone",
                event    
    )

    //Insanium gem (darkness + mystical)
    awakening_MA("darkness", "mystical", "darkness", "mystical",
                awaE, awaI, awaE, awaI,
                awaG,
                "mysticalagradditions:insanium_gemstone",
                event    
    )

    //Insanium farmland (darkness + magic)
    awakening_MA("darkness", "magic", "darkness", "magic",
                awaE, awaE, awaE, awaE,
                "mysticalagriculture:supremium_farmland",
                "mysticalagradditions:insanium_farmland",
                event    
    )

    //Insanium farmland (darkness + mystical)
    awakening_MA("darkness", "mystical", "darkness", "mystical",
                awaE, awaE, awaE, awaE,
                "mysticalagriculture:supremium_farmland",
                "mysticalagradditions:insanium_farmland",
                event    
    )

    //Insanium essence (darkness + magic)
    awakening_MA("darkness", "magic", "darkness", "mystical",
                awaEB, awaE, awaEB, awaE,
                "mysticalagriculture:supremium_essence",
                insa,
                event    
    )

    //Insanium block (1 output)
    awakening_MA("darkness", "magic", "technology", "mystical",
                awaEB, awaEB, awaEB, awaEB,
                "mysticalagriculture:supremium_block",
                "mysticalagradditions:insanium_block",
                event    
    )

    //Awakening block (2 output)
    event.custom({
        type: "mysticalagriculture:awakening",
        essences: [
            {
                id: `mysticalagriculture:mystical_essence`,
                count: 10
            },
            {
                id: `mysticalagriculture:magic_essence`,
                count: 10
            },
            {
                id: `mysticalagriculture:mystical_essence`,
                count: 10
            },
            {
                id: `mysticalagriculture:magic_essence`,
                count: 10
            }
        ],
        input: {
            item: "mysticalagriculture:supremium_block"
        },
        ingredients: [
            {
                item: conig
            },
            {
                item: conig
            },
            {
                item: conig
            },
            {
                item: conig
            }
        ],
        result: {
            id: awaEB,
            count: 2
        }
    })

    //Awakening block (4 output)
    event.custom({
        type: "mysticalagriculture:awakening",
        essences: [
            {
                id: `mysticalagriculture:mystical_essence`,
                count: 10
            },
            {
                id: `mysticalagriculture:technology_essence`,
                count: 10
            },
            {
                id: `mysticalagriculture:mystical_essence`,
                count: 10
            },
            {
                id: `mysticalagriculture:technology_essence`,
                count: 10
            }
        ],
        input: {
            item: "mysticalagriculture:supremium_block"
        },
        ingredients: [
            {
                item: conig
            },
            {
                item: conig
            },
            {
                item: conig
            },
            {
                item: conig
            }
        ],
        result: {
            id: awaEB,
            count: 4
        }
    })

    //Magic seeds
    event.custom({
        type: "ars_nouveau:enchanting_apparatus",
        keepNbtOfReagent: false,
        pedestalItems: [
          {
            item: "ars_nouveau:wilden_tribute"
          },
          {
            item: "ars_nouveau:fire_essence"
          },
          {
            item: "ars_nouveau:abjuration_essence"
          },
          {
            item: "ars_nouveau:conjuration_essence"
          },
          {
            item: "ars_nouveau:air_essence"
          },
          {
            item: "ars_nouveau:earth_essence"
          },
          {
            item: "ars_nouveau:manipulation_essence"
          },
          {
            item: "ars_nouveau:water_essence"
          },
          {
            item: "ars_elemental:anima_essence"
          },
          {
            item: "ars_elemental:firenando_charm"
          },
          {
            item: "ars_elemental:siren_charm"
          },
          {
            item: "ars_nouveau:bookwyrm_charm"
          },
          {
            item: "ars_nouveau:amethyst_golem_charm"
          }
        ],
        reagent: {
          item: "mysticalagriculture:inferium_seeds"
        },
        result: {
          count: 1,
          id: "mysticalagriculture:magic_seeds"
        },
        sourceCost: 10000
    })

    //Mystical seeds
    infusion_MA("reliquary:mercy_cross", "reliquary:hero_medallion", "reliquary:infernal_chalice",
                "reliquary:glacial_staff", "reliquary:witherless_rose", "apotheosis:epic_material",
                "reliquary:fertile_lily_pad", "reliquary:aphrodite_potion",
                  "mysticalagriculture:inferium_seeds", "mysticalagriculture:mystical_seeds", 0, event
    );
    
    //Darkness seeds
    infusion_MA("minecraft:sculk", "minecraft:deepslate", "minecraft:sculk", "minecraft:crying_obsidian",
                "minecraft:sculk", "minecraft:deepslate", "minecraft:sculk", "minecraft:crying_obsidian",
                "mysticalagriculture:obsidian_seeds", "mysticalagriculture:darkness_seeds", 0, event
    );

    //Enriched seeds
    event.custom({
        type: "mekanism:metallurgic_infusing",
        chemical_input: {
            amount: 100,
            tag: "mekanism:redstone"
        },
        item_input: {
            count: 1,
            item: "mysticalagriculture:inferium_seeds"
        },
        output: {
            count: 1,
            id: "kubejs:enriched_seeds"
        },
        per_tick_usage: true
    });

    //Powered seeds
    event.custom({
        type: "ae2:charger",
        ingredient: {
            item: "kubejs:enriched_seeds"
        },
        result: {
            count: 1,
            id: "kubejs:powered_seeds"
        }
    });

    //Ethereal seeds
    event.custom({
        type: "industrialforegoing:dissolution_chamber",
        input: [
            {
                item: "kubejs:powered_seeds"
            },
            {
                item: "minecraft:redstone_block"
            },
            {
                item: "minecraft:redstone_block"
            },
            {
                item: "minecraft:redstone_block"
            },
            {
                item: "minecraft:nether_star"
            },
            {
                tag: "c:ingots/steel"
            },
            {
                tag: "c:ingots/steel"
            },
            {
                tag: "c:ingots/steel"
            }
        ],
        inputFluid: {
            amount: 2000,
            fluid: "industrialforegoing:ether_gas"
        },
        output: {
            count: 1,
            id: "kubejs:ethereal_seeds"
        },
        processingTime: 1800
    })

    //Reinforced seeds
    event.custom({
        type: "integrateddynamics:mechanical_drying_basin",
        input_fluid: {
            id: "integrateddynamics:liquid_chorus",
            amount: 1000
        },
        input_item: {
            item: "kubejs:ethereal_seeds"
        },
        duration: 300,
        output_item: {
            id: "kubejs:reinforced_seeds"
        }
    })

    //Activated seeds
    event.custom({
        type: "powah:energizing",
        energy: 20000000,
        ingredients: [
            {
                item: "kubejs:reinforced_seeds"
            },
            {
                item: "powah:nitro_crystal_block"
            },
            {
                item: "powah:nitro_crystal_block"
            },
            {
                item: "powah:uraninite_block"
            },
            {
                item: "powah:uraninite_block"
            }
        ],
        result: {
            count: 1,
            id: "kubejs:activated_seeds"
        }
    })

    //Technology seeds
    event.custom({
        type: "mekanism:nucleosynthesizing",
        chemical_input: {
            amount: 20,
            chemical: "mekanism:antimatter"
        },
        duration: 1000,
        item_input: {
            count: 1,
            item: "kubejs:activated_seeds"
        },
        output: {
            count: 1,
            id: "mysticalagriculture:technology_seeds"
        },
        per_tick_usage: false
    })

    //Cognizant seeds
    infusion_MA("reliquary:witherless_rose", "minecraft:dragon_egg", "reliquary:witherless_rose",
                "minecraft:dragon_egg", "reliquary:witherless_rose", "minecraft:dragon_egg",
                "reliquary:witherless_rose", "minecraft:dragon_egg", "mysticalagriculture:inferium_seeds",
                "mysticalagriculture:cognizian_seeds", 0, event
    );

    infusion_MA("reliquary:witherless_rose", "minecraft:dragon_egg", "reliquary:witherless_rose",
                "minecraft:dragon_egg", "reliquary:witherless_rose", "minecraft:dragon_egg",
                "reliquary:witherless_rose", "minecraft:dragon_egg", "supremium",
                "awakened_supremium", 1, event
    );

    //Inferium bee
    event.custom({
        type: 'mysticalagriculture:infusion',
        input: { item: "minecraft:honeycomb" },
        ingredients: Array(8).fill({ item: "mysticalagriculture:inferium_essence" }),
        result: {
            components: {
                "minecraft:entity_data": {
                    type: "productivebees:inferium",
                    id: "productivebees:configurable_bee"
                }
            },
            count: 1,
            id: "productivebees:spawn_egg_configurable_bee"
        }
    });

    //Prudentium seeds and bee
    infusion_MA("mysticalagriculture:supremium_block", "mysticalagriculture:imperium_essence", "mysticalagriculture:supremium_block",
                "mysticalagriculture:imperium_essence", "mysticalagriculture:supremium_block", "mysticalagriculture:imperium_essence",
                "mysticalagriculture:supremium_block", "mysticalagriculture:imperium_essence", "mysticalagriculture:inferium_seeds",
                "mysticalagriculture:prudentium_seeds", 0, event
    );

    infusion_MA("mysticalagriculture:supremium_block", "mysticalagriculture:imperium_essence", "mysticalagriculture:supremium_block",
                "mysticalagriculture:imperium_essence", "mysticalagriculture:supremium_block", "mysticalagriculture:imperium_essence",
                "mysticalagriculture:supremium_block", "mysticalagriculture:imperium_essence", "inferium",
                "prudentium", 1, event
    );

    //Tertium seeds and bee
    infusion_MA(awaEB, "mysticalagriculture:supremium_essence", awaEB,
                "mysticalagriculture:supremium_essence", awaEB, "mysticalagriculture:supremium_essence",
                awaEB, "mysticalagriculture:supremium_essence", "mysticalagriculture:prudentium_seeds",
                "mysticalagriculture:tertium_seeds", 0, event
    );

    infusion_MA(awaEB, "mysticalagriculture:supremium_essence", awaEB,
                "mysticalagriculture:supremium_essence", awaEB, "mysticalagriculture:supremium_essence",
                awaEB, "mysticalagriculture:supremium_essence", "prudentium",
                "tertium", 1, event
    );

    //Imperium seeds and bee
    infusion_MA("mysticalagradditions:insanium_block", awaE, "mysticalagradditions:insanium_block",
                awaE, "mysticalagradditions:insanium_block", awaE,
                "mysticalagradditions:insanium_block", awaE, "mysticalagriculture:tertium_seeds",
                "mysticalagriculture:imperium_seeds", 0, event
    );

    infusion_MA("mysticalagradditions:insanium_block", awaE, "mysticalagradditions:insanium_block",
                awaE, "mysticalagradditions:insanium_block", awaE,
                "mysticalagradditions:insanium_block", awaE, "tertium",
                "imperium", 1, event
    );

    //Supremium seeds and bee
    infusion_MA("kubejs:mystical_block", insa, "kubejs:mystical_block",
                insa, "kubejs:mystical_block", insa,
                "kubejs:mystical_block", insa, "mysticalagriculture:imperium_seeds",
                "mysticalagriculture:supremium_seeds", 0, event
    );

    infusion_MA("kubejs:magical_block", insa, "kubejs:magical_block",
                insa, "kubejs:magical_block", insa,
                "kubejs:magical_block", insa, "mysticalagriculture:imperium_seeds",
                "mysticalagriculture:supremium_seeds", 0, event
    );

    infusion_MA("kubejs:mystical_block", insa, "kubejs:mystical_block",
                insa, "kubejs:mystical_block", insa,
                "kubejs:mystical_block", insa, "imperium",
                "supremium", 1, event
    );

    infusion_MA("kubejs:magical_block", insa, "kubejs:magical_block",
                insa, "kubejs:magical_block", insa,
                "kubejs:magical_block", insa, "imperium",
                "supremium", 1, event
    );

    //Insanium seeds and bee
    infusion_MA("kubejs:technology_block", "mysticalagriculture:mystical_essence", "kubejs:technology_block",
                "mysticalagriculture:mystical_essence", "kubejs:technology_block", "mysticalagriculture:mystical_essence",
                "kubejs:technology_block", "mysticalagriculture:mystical_essence", "mysticalagriculture:supremium_seeds",
                "mysticalagriculture:insanium_seeds", 0, event
    );

    infusion_MA("kubejs:technology_block", "mysticalagriculture:magic_essence", "kubejs:technology_block",
                "mysticalagriculture:magic_essence", "kubejs:technology_block", "mysticalagriculture:magic_essence",
                "kubejs:technology_block", "mysticalagriculture:magic_essence", "mysticalagriculture:supremium_seeds",
                "mysticalagriculture:insanium_seeds", 0, event
    );

    infusion_MA("kubejs:technology_block", "mysticalagriculture:mystical_essence", "kubejs:technology_block",
                "mysticalagriculture:mystical_essence", "kubejs:technology_block", "mysticalagriculture:mystical_essence",
                "kubejs:technology_block", "mysticalagriculture:mystical_essence", "supremium",
                "insanium", 1, event
    );

    infusion_MA("kubejs:technology_block", "mysticalagriculture:magic_essence", "kubejs:technology_block",
                "mysticalagriculture:magic_essence", "kubejs:technology_block", "mysticalagriculture:magic_essence",
                "kubejs:technology_block", "mysticalagriculture:magic_essence", "supremium",
                "insanium", 1, event
    );

    //Creative essence with insanium seeds
    event.custom({
        type: "mysticalagriculture:awakening",
        essences: [
            { id: "mysticalagriculture:darkness_essence", count: 40 },
            { id: "mysticalagriculture:magic_essence", count: 40 },
            { id: "mysticalagriculture:mystical_essence", count: 40 },
            { id: "mysticalagriculture:technology_essence", count: 40 }
        ],
        input: {
            item: "mysticalagriculture:insanium_seeds", 
        },
        ingredients: Array(4).fill({ item: "kubejs:technology_block" }),
        result: {
            id: "mysticalagradditions:creative_essence"
        }
    });

    //Creative essence with insanium bee
    event.custom({
        type: "mysticalagriculture:awakening",
        essences: [
            { id: "mysticalagriculture:darkness_essence", count: 40 },
            { id: "mysticalagriculture:magic_essence", count: 40 },
            { id: "mysticalagriculture:mystical_essence", count: 40 },
            { id: "mysticalagriculture:technology_essence", count: 40 }
        ],
        input: {
                "type": "productivebees:component",
                "components": {
                  "minecraft:entity_data": {
                    "type": `productivebees:insanium`,
                    "id": "productivebees:configurable_bee"
                  }
                },
                "items": "productivebees:spawn_egg_configurable_bee"
            },
        ingredients: Array(4).fill({ item: "kubejs:technology_block" }),
        result: {
            id: "mysticalagradditions:creative_essence"
        }
    });

    //-------Random seeds-------

    //Arcane seeds
    event.custom({
        type: "ars_nouveau:enchanting_apparatus",
        keepNbtOfReagent: false,
        pedestalItems: [
            {
                item: "ars_nouveau:source_gem"
            },
            {
                item: "mysticalagriculture:tertium_essence"
            },
            {
                item: "ars_nouveau:source_gem"
            },
            {
                item: "mysticalagriculture:tertium_essence"
            },
            {
                item: "ars_nouveau:source_gem"
            },
            {
                item: "mysticalagriculture:tertium_essence"
            },
            {
                item: "ars_nouveau:source_gem"
            },
            {
                item: "mysticalagriculture:tertium_essence"
            }
        ],
        reagent: {
          item: "mysticalagriculture:inferium_seeds"
        },
        result: {
          count: 1,
          id: "mysticalagriculture:arcane_seeds"
        },
        sourceCost: 30000
    });

    //source gem
    row2("mysticalagriculture:arcane_essence", "mysticalagriculture:arcane_essence", 
        "mysticalagriculture:arcane_essence", "ars_nouveau:source_gem", 12, 0, event 
    );

    //source stone
    diagonal("mysticalagriculture:stone_essence", "mysticalagriculture:arcane_essence", 
        "mysticalagriculture:stone_essence", "ars_nouveau:sourcestone", 32, event 
    );

    //wilden stuff
    row("mysticalagriculture:skeleton_essence", "mysticalagriculture:arcane_essence", 
        "mysticalagriculture:skeleton_essence", "ars_nouveau:wilden_horn", 4, 0, event 
    );

    row("mysticalagriculture:prismarine_essence", "mysticalagriculture:arcane_essence", 
        "mysticalagriculture:prismarine_essence", "ars_nouveau:wilden_spike", 4, 0, event 
    );

    row("mysticalagriculture:zombie_essence", "mysticalagriculture:arcane_essence", 
        "mysticalagriculture:zombie_essence", "ars_nouveau:wilden_wing", 4, 0, event 
    );

    //woods
    row2("mysticalagriculture:wood_essence", "mysticalagriculture:arcane_essence", 
        "mysticalagriculture:wood_essence", "ars_nouveau:blue_archwood_log", 16, 0, event 
    );

    row("mysticalagriculture:wood_essence", "mysticalagriculture:arcane_essence", 
        "mysticalagriculture:wood_essence", "ars_nouveau:red_archwood_log", 16, 0, event 
    );

    row3("mysticalagriculture:wood_essence", "mysticalagriculture:arcane_essence", 
        "mysticalagriculture:wood_essence", "ars_nouveau:purple_archwood_log", 16, 1, event 
    );

    diagonal("mysticalagriculture:wood_essence", "mysticalagriculture:arcane_essence", 
        "mysticalagriculture:wood_essence", "ars_nouveau:green_archwood_log", 16, event 
    );

    diagonal2("mysticalagriculture:wood_essence", "mysticalagriculture:arcane_essence", 
        "mysticalagriculture:wood_essence", "ars_elemental:yellow_archwood_log", 16, event 
    );

    //fruits
    row2("mysticalagriculture:nature_essence", "mysticalagriculture:arcane_essence", 
        "mysticalagriculture:nature_essence", "ars_nouveau:mendosteen_pod", 4, 0, event 
    );

    row("mysticalagriculture:nature_essence", "mysticalagriculture:arcane_essence", 
        "mysticalagriculture:nature_essence", "ars_nouveau:bastion_pod", 4, 0, event 
    );

    row3("mysticalagriculture:nature_essence", "mysticalagriculture:arcane_essence", 
        "mysticalagriculture:nature_essence", "ars_nouveau:frostaya_pod", 4, 1, event 
    );

    diagonal("mysticalagriculture:nature_essence", "mysticalagriculture:arcane_essence", 
        "mysticalagriculture:nature_essence", "ars_nouveau:bombegranate_pod", 4, event 
    );

    diagonal2("mysticalagriculture:nature_essence", "mysticalagriculture:arcane_essence", 
        "mysticalagriculture:nature_essence", "ars_elemental:flashpine_pod", 4, event 
    );

    row("mysticalagriculture:arcane_essence", "mysticalagriculture:nature_essence", 
        "mysticalagriculture:arcane_essence", "ars_nouveau:sourceberry_bush", 4, 0, event 
    );

    //Dark gems seeds
    event.custom({
        type: "evilcraft:blood_infuser",
        input_item: {
            item: "mysticalagriculture:darkness_seeds"
        },
        input_fluid: {
            id: "evilcraft:blood",
            amount: 20000
        },
        output_item: {
            id: "mysticalagriculture:dark_gem_seeds"
        },
        duration: 10,
        xp: 0.05,
        tier: 2
    });

    //undead wood
    row2("mysticalagriculture:wood_essence", "mysticalagriculture:dark_gem_essence", 
        "mysticalagriculture:wood_essence", "evilcraft:undead_log", 8, 0, event 
    );

    //undead leaves
    row2("mysticalagriculture:wood_essence", "mysticalagriculture:dark_gem_essence", 
        "mysticalagriculture:wood_essence", "evilcraft:undead_leaves", 8, 1, event 
    );

    //dark gems
    row2("mysticalagriculture:dark_gem_essence", "mysticalagriculture:dark_gem_essence", 
        "mysticalagriculture:dark_gem_essence", "evilcraft:dark_gem", 8, 1, event 
    );

    //werewolf flesh
    square("mysticalagriculture:zombie_essence", "mysticalagriculture:dark_gem_essence",
           "mysticalagriculture:dark_gem_essence", "mysticalagriculture:zombie_essence", 
           "evilcraft:flesh_werewolf", 1, event
    )

    //Blood bucket
    event.shaped('1x evilcraft:bucket_blood', [
        ' A ',
        ' B ',
        '   '
    ], {
        A: "mysticalagriculture:dark_gem_essence",
        B: "minecraft:bucket",
      }
    )

    //Poison bucket
    event.shaped('1x evilcraft:bucket_poison', [
        '   ',
        ' B ',
        ' A '
    ], {
        A: "mysticalagriculture:dark_gem_essence",
        B: "minecraft:bucket",
      }
    )

    //Vengeance essence
    event.shaped('1x evilcraft:vengeance_essence', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: "mysticalagriculture:mystical_essence",
        B: "mysticalagriculture:dark_gem_essence",
      }
    )

    square("mysticalagriculture:dark_gem_essence", "mysticalagriculture:deepslate_essence",
           "mysticalagriculture:deepslate_essence", "mysticalagriculture:dark_gem_essence", 
           "evilcraft:dark_brick", 6, event
    )

    event.shaped('1x evilcraft:weather_container[evilcraft:weather_container_type="RAIN"]', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: "mysticalagriculture:dark_gem_essence",
        B: "minecraft:water_bucket",
      }
    )

    //Plastic seeds
    awakening_MA("fire", "fire", "fire", "fire",
                 "pneumaticcraft:plastic", "pneumaticcraft:plastic", "pneumaticcraft:plastic" ,"pneumaticcraft:plastic",
                 "mysticalagriculture:inferium_seeds", "mysticalagriculture:plastic_seeds", event
    );

    //Plastic sheets
    event.shaped('2x pneumaticcraft:plastic', [
        'AAA',
        'A A',
        'AAA'
    ], {
        A: "mysticalagriculture:plastic_essence",
      }
    )

    //Plastic bucket (since there is no plastic to molten plastic)
    event.shaped('1x pneumaticcraft:plastic_bucket', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: "mysticalagriculture:plastic_essence",
        B: "minecraft:bucket"
      }
    )

    //Crude oil bucket
    event.shaped('1x pneumaticcraft:oil_bucket', [
        'AAA',
        ' B ',
        '   '
    ], {
        A: "mysticalagriculture:plastic_essence",
        B: "minecraft:bucket"
      }
    )

    //Drop of glycerol
    event.shaped('1x pneumaticcraft:glycerol', [
        'NDN',
        'NBN',
        'ADA'
    ], {
        A: "mysticalagriculture:plastic_essence",
        B: "minecraft:sugar",
        D: "mysticalagriculture:dirt_essence",
        N: "mysticalagriculture:nature_essence"
      }
    )

    //Dire things seeds
    awakening_MA("technology", "fire", "technology", "fire",
                 "justdirethings:blazegold_ingot", "justdirethings:celestigem",
                 "justdirethings:ferricore_ingot", "justdirethings:eclipsealloy_ingot",
                 "mysticalagriculture:iron_seeds", "mysticalagriculture:dire_seeds", event
    );

    //ferricore raw
    event.shaped('4x justdirethings:raw_ferricore', [
        'AAA',
        ' I ',
        'BBB'
    ], {
        A: "mysticalagriculture:dire_essence",
        I: "minecraft:iron_ingot",
        B: "mysticalagriculture:iron_essence"
      }
    )

    //blazegold raw
    event.shaped('4x justdirethings:raw_blazegold', [
        'AAA',
        ' I ',
        'BBB'
    ], {
        A: "mysticalagriculture:dire_essence",
        I: "minecraft:gold_ingot",
        B: "mysticalagriculture:gold_essence"
      }
    )

    //celestigem
    event.shaped('4x justdirethings:celestigem', [
        'AAA',
        ' I ',
        'BBB'
    ], {
        A: "mysticalagriculture:dire_essence",
        I: "minecraft:diamond",
        B: "mysticalagriculture:diamond_essence"
      }
    )

    //eclipsealloy raw
    event.shaped('4x justdirethings:raw_eclipsealloy', [
        'AAA',
        ' I ',
        'BBB'
    ], {
        A: "mysticalagriculture:dire_essence",
        I: "minecraft:gold_ingot",
        B: "mysticalagriculture:netherite_essence"
      }
    )

    //time crystal
    event.shaped('4x justdirethings:time_crystal', [
        'AAA',
        ' I ',
        'BBB'
    ], {
        A: "mysticalagriculture:dire_essence",
        I: "minecraft:amethyst_block",
        B: "mysticalagriculture:dye_essence"
      }
    )

    //Entro seeds
    infusion_MA("extendedae:entro_ingot", "mysticalagriculture:imperium_essence", "extendedae:entro_ingot", "mysticalagriculture:imperium_essence",
                "extendedae:entro_ingot", "mysticalagriculture:imperium_essence", "extendedae:entro_ingot",
                "mysticalagriculture:imperium_essence", "mysticalagriculture:fluix_seeds", "mysticalagriculture:entro_seeds", 0, event
    );

    event.shaped('4x extendedae:entro_crystal', [
        'AAA',
        'A A',
        'AAA'
    ], {
        A: "mysticalagriculture:entro_essence",
      }
    )

    row("mysticalagriculture:entro_essence", "mysticalagriculture:entro_essence",
        "mysticalagriculture:entro_essence", "extendedae:entro_dust", 3, 1, event
    )

    //Industrial seeds
    event.custom({
        type: "industrialforegoing:dissolution_chamber",
        input: [
            {
                item: "mysticalagriculture:inferium_seeds"
            },
            {
                item: "industrialforegoing:dryrubber"
            },
            {
                item: "industrialforegoing:dryrubber"
            },
            {
                item: "industrialforegoing:dryrubber"
            },
            {
                item: "industrialforegoing:pink_slime"
            }
        ],
        inputFluid: {
            amount: 2000,
            fluid: "minecraft:water"
        },
        output: {
            count: 1,
            id: "mysticalagriculture:industrial_seeds"
        },
        processingTime: 1800
    })

    //pink slime bucket
    event.shaped('1x industrialforegoing:pink_slime_bucket', [
        'AAA',
        ' B ',
        '   '
    ], {
        A: "mysticalagriculture:industrial_essence",
        B: "minecraft:bucket"
      }
    )

    //meat bucket
    event.shaped('1x industrialforegoing:meat_bucket', [
        '   ',
        ' B ',
        'AAA'
    ], {
        A: "mysticalagriculture:industrial_essence",
        B: "minecraft:bucket"
      }
    )

    //latex bucket
    event.shaped('1x industrialforegoing:latex_bucket', [
        '   ',
        'ABA',
        '   '
    ], {
        A: "mysticalagriculture:industrial_essence",
        B: "minecraft:bucket"
      }
    )

    //fertilizer
    event.shaped('2x industrialforegoing:fertilizer', [
        '   ',
        'ABA',
        '   '
    ], {
        A: "mysticalagriculture:industrial_essence",
        B: "#c:foods"
      }
    )

    //Prosperity seeds
    infusion_MA("mysticalagriculture:prosperity_shard", "mysticalagriculture:tertium_essence", "mysticalagriculture:prosperity_shard", "mysticalagriculture:tertium_essence",
                "mysticalagriculture:prosperity_shard", "mysticalagriculture:tertium_essence", "mysticalagriculture:prosperity_shard",
                "mysticalagriculture:tertium_essence", "mysticalagriculture:inferium_seeds", "mysticalagriculture:prosperity_seeds", 0, event
    );

    //Prosperity shard
    row("mysticalagriculture:prosperity_essence", "mysticalagriculture:prosperity_essence", "mysticalagriculture:prosperity_essence",
        "mysticalagriculture:prosperity_shard", 4, 0, event
    )

    //sculk seeds
    awakening_MA("darkness", "darkness", "darkness", "darkness",
                 "minecraft:sculk", "minecraft:echo_shard",
                 "minecraft:sculk", "minecraft:sculk_catalyst",
                "mysticalagriculture:darkness_seeds", "mysticalagriculture:sculk_seeds", event
    );

    //sculk block
    row("mysticalagriculture:sculk_essence", "mysticalagriculture:sculk_essence", "mysticalagriculture:sculk_essence",
        "minecraft:sculk", 4, 0, event
    )

    //sculk sensor
    row("mysticalagriculture:sculk_essence", "minecraft:comparator", "mysticalagriculture:sculk_essence",
        "minecraft:sculk_sensor", 1, 0, event
    )

    //sculk vein
    row("mysticalagriculture:sculk_essence", "mysticalagriculture:sculk_essence", "mysticalagriculture:sculk_essence",
        "minecraft:sculk_vein", 16, 1, event
    )

    //sculk shrieker
    event.shaped('1x minecraft:sculk_shrieker', [
        ' A ',
        'ABA',
        ' A '
    ], {
        A: "mysticalagriculture:sculk_essence",
        B: "minecraft:sculk_catalyst"
      }
    )

    //echo shard
    event.shaped('1x minecraft:echo_shard', [
        'A A',
        ' B ',
        'A A'
    ], {
        A: "mysticalagriculture:sculk_essence",
        B: "mysticalagriculture:magic_essence"
      }
    )

    //Salt seeds
    infusion_MA("mekanism:salt", "mysticalagriculture:inferium_essence", "mekanism:salt", "mysticalagriculture:inferium_essence",
                "mekanism:salt", "mysticalagriculture:inferium_essence", "mekanism:salt",
                "mysticalagriculture:inferium_essence", "mysticalagriculture:prosperity_seed_base", "mysticalagriculture:salt_seeds", 0, event
    );

    row("mysticalagriculture:salt_essence", "mysticalagriculture:salt_essence", "mysticalagriculture:salt_essence",
        "mekanism:salt", 16, 1, event
    )

    //Xych seeds
    infusion_MA("xycraft_world:xychorium_gem_blue", "mysticalagriculture:tertium_essence", "xycraft_world:xychorium_gem_blue", "mysticalagriculture:tertium_essence",
                "xycraft_world:xychorium_gem_blue", "mysticalagriculture:tertium_essence", "xycraft_world:xychorium_gem_blue",
                "mysticalagriculture:tertium_essence", "mysticalagriculture:prosperity_seed_base", "mysticalagriculture:xychorium_seeds", 0, event
    );

    infusion_MA("xycraft_world:xychorium_gem_green", "mysticalagriculture:tertium_essence", "xycraft_world:xychorium_gem_green", "mysticalagriculture:tertium_essence",
                "xycraft_world:xychorium_gem_green", "mysticalagriculture:tertium_essence", "xycraft_world:xychorium_gem_green",
                "mysticalagriculture:tertium_essence", "mysticalagriculture:prosperity_seed_base", "mysticalagriculture:xychorium_seeds", 0, event
    );

    infusion_MA("xycraft_world:xychorium_gem_red", "mysticalagriculture:tertium_essence", "xycraft_world:xychorium_gem_red", "mysticalagriculture:tertium_essence",
                "xycraft_world:xychorium_gem_red", "mysticalagriculture:tertium_essence", "xycraft_world:xychorium_gem_red",
                "mysticalagriculture:tertium_essence", "mysticalagriculture:prosperity_seed_base", "mysticalagriculture:xychorium_seeds", 0, event
    );

    infusion_MA("xycraft_world:xychorium_gem_dark", "mysticalagriculture:tertium_essence", "xycraft_world:xychorium_gem_dark", "mysticalagriculture:tertium_essence",
                "xycraft_world:xychorium_gem_dark", "mysticalagriculture:tertium_essence", "xycraft_world:xychorium_gem_dark",
                "mysticalagriculture:tertium_essence", "mysticalagriculture:prosperity_seed_base", "mysticalagriculture:xychorium_seeds", 0, event
    );
    
    infusion_MA("xycraft_world:xychorium_gem_light", "mysticalagriculture:tertium_essence", "xycraft_world:xychorium_gem_light", "mysticalagriculture:tertium_essence",
                "xycraft_world:xychorium_gem_light", "mysticalagriculture:tertium_essence", "xycraft_world:xychorium_gem_light",
                "mysticalagriculture:tertium_essence", "mysticalagriculture:prosperity_seed_base", "mysticalagriculture:xychorium_seeds", 0, event
    );

    //gems from xycraft
    row("mysticalagriculture:xychorium_essence", "mysticalagriculture:xychorium_essence", "mysticalagriculture:xychorium_essence",
        "xycraft_world:xychorium_gem_blue", 16, 1, event
    )

    row("mysticalagriculture:xychorium_essence", "mysticalagriculture:xychorium_essence", "mysticalagriculture:xychorium_essence",
        "xycraft_world:xychorium_gem_green", 16, 0, event
    )

    row3("mysticalagriculture:xychorium_essence", "mysticalagriculture:xychorium_essence", "mysticalagriculture:xychorium_essence",
        "xycraft_world:xychorium_gem_red", 16, 1, event
    )

    diagonal("mysticalagriculture:xychorium_essence", "mysticalagriculture:xychorium_essence", "mysticalagriculture:xychorium_essence",
        "xycraft_world:xychorium_gem_dark", 16, event
    )

    diagonal2("mysticalagriculture:xychorium_essence", "mysticalagriculture:xychorium_essence", "mysticalagriculture:xychorium_essence",
        "xycraft_world:xychorium_gem_light", 16, event
    )

    //Kiwi
    row("mysticalagriculture:xychorium_essence", "mysticalagriculture:deepslate_essence", "mysticalagriculture:xychorium_essence",
        "xycraft_world:kivi", 32, 1, event
    )

    //Flux dust
    row("mysticalagriculture:flux_essence", "mysticalagriculture:flux_essence", "mysticalagriculture:flux_essence",
        "fluxnetworks:flux_dust", 6, 1, event
    )

})

const farmlands = Item.getTypeList().filter(item => item.includes("farmland"))
const not_plant = Item.getList().filter(item => item.hasTag('c:dont_plant'))

const filteredCrops = cropRegistry2.getInstance().getCrops()
    .filter(c => c.getModId() === 'mysticalcustomization' && 
        not_plant.some(i => i.id.split(':')[1] === `${c.getName()}_seeds`))
    .map(c => c.getName());

//Disable player to place forbidden seeds for players, use machines
farmlands.forEach(farmland => {
    BlockEvents.rightClicked(farmland, event => {
        const item = event.item;
        const player = event.player;

        not_plant.forEach(e => {
            if(e === item.id)
            {
                event.getServer().scheduleInTicks(3, ctx => {
                    const selected = player.inventory.getSelected();
                    if(!selected.isEmpty())
                    {
                        selected.count--;
                        player.inventory.setChanged();
                    }

                    event.getServer().scheduleInTicks(3, ctx => {
                        selected.count++;
                        player.inventory.setChanged();
                    })
                });
                event.cancel();
            }
        })
    });
})

filteredCrops.forEach(crop => {
    BlockEvents.randomTick(`mysticalagriculture:${crop}_crop`, event => {
        event.cancel()
    })
})

//Flux seeds, need special treatment
BlockEvents.leftClicked("minecraft:obsidian", event => {
    const level = event.level;
    const pos = event.getBlock().pos;
    const crusher = level.getBlockState(pos)
    let base = level.getBlockState(pos.below(2))

    if (crusher.getBlock().id === "minecraft:obsidian" &&
       (base.getBlock().id === "minecraft:bedrock" ||
        base.getBlock().id === "fluxnetworks:flux_block"))
    {
        let entities = level.getEntitiesOfClass($ItemEntity, new $AABB(pos.below()));
        if(entities.size() === 0) return;
        let itemCount = 0;
        for(let i = 0; i < entities.size(); i++)
        {
            let entity = entities.get(i);
            if(entity.getItem().id === "mysticalagriculture:redstone_seeds")
            {
                itemCount += entity.getItem().getCount();
                entity.discard()
                if(itemCount >= 3) break;
            }
        }
        
        if(itemCount === 0) return;
        
        let stack = new $ItemStack("mysticalagriculture:flux_seeds", itemCount);
        level.removeBlock(pos, false);
        let entity = new $ItemEntity(level, pos.getX() + 0.5, pos.getY(), pos.getZ() + 0.5, stack);
        entity.setNoPickUpDelay();
        level.addFreshEntity(entity);
        if(level.getRandom().nextDouble() > Math.pow(0.9, itemCount >> 3))
        {
            level.setBlock(pos.below(), Blocks.COBBLESTONE.defaultBlockState(), $Block.UPDATE_ALL);      
        }
        else
        {
            level.setBlock(pos.below(), crusher, $Block.UPDATE_ALL);
        }
        let particleCount = $Mth.clamp(itemCount >> 2, 4, 64);
        level.sendParticles($ParticlesType.LAVA, pos.getX() + 0.5, pos.getY(), pos.getZ() + 0.5, particleCount, 0, 0, 0, 0);

        event.success();
    }
})
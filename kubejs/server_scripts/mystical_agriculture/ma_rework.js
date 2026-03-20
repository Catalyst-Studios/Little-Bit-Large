// priority: 10
/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
const $Mth = Java.loadClass("net.minecraft.util.Mth");
const $ParticlesType = Java.loadClass("net.minecraft.core.particles.ParticleTypes");
const $Block = Java.loadClass("net.minecraft.world.level.block.Block");
const $ItemEntity = Java.loadClass("net.minecraft.world.entity.item.ItemEntity");
const $ItemStack = Java.loadClass("net.minecraft.world.item.ItemStack");
let $AABB = Java.loadClass("net.minecraft.world.phys.AABB");
let $CropRegistry = Java.loadClass('com.blakebr0.mysticalagriculture.registry.CropRegistry');

const awaE = "mysticalagriculture:awakened_supremium_essence";
const awaEB = "mysticalagriculture:awakened_supremium_block";
const awaI = "mysticalagriculture:awakened_supremium_ingot";
const awaG = "mysticalagriculture:awakened_supremium_gemstone";
const awaIB = "mysticalagriculture:awakened_supremium_ingot_block";
const awaGB = "mysticalagriculture:awakened_supremium_gemstone_block";
const insa = "mysticalagradditions:insanium_essence"
const conig = "mysticalagriculture:cognizant_dust"

ServerEvents.recipes(catalyst => {

    let mod = 0;
    /**
     * @param {string} output
     * @param {string} input
     * @param {string[]} essences Array of 4 essences (ej: ['darkness', 'earth', ...])
     * @param {string[]} ingredients Array of 4 materials
     */
    function awakening(output, input, essences, ingredients) {
        let idName = output.includes(':') ? output.split(':')[1] : output;
        catalyst.custom({
            type: "mysticalagriculture:awakening",
            essences: essences.map(e => ({
                id: `mysticalagriculture:${e}_essence`,
                count: 40
            })),
            input: { item: input },
            ingredients: ingredients.map(i => ({ item: i })),
            result: { id: output }
        }).id(`catalyst:mysticalagriculture/awakening/${idName}_${mod}`);
        mod++;
    }

    /**
     * @param {string} output
     * @param {string} input
     * @param {string[]} ingredients Array of materials up to 8
     * @param {boolean} isBee True if bee
     */
    function infusion(output, input, ingredients, isBee) {
        let recipe = {
            type: 'mysticalagriculture:infusion',
            ingredients: ingredients.map(i => ({ item: i }))
        };

        let idName = output.includes(':') ? output.split(':')[1] : output;
        if (isBee) idName += "_bee";

        if (isBee) {
            recipe.input = {
                type: "productivebees:component",
                components: {
                    "minecraft:entity_data": {
                        type: `productivebees:${input}`,
                        id: "productivebees:configurable_bee"
                    }
                },
                items: "productivebees:spawn_egg_configurable_bee"
            };
            recipe.result = {
                components: {
                    "minecraft:entity_data": {
                        type: `productivebees:${output}`,
                        id: "productivebees:configurable_bee"
                    }
                },
                count: 1,
                id: "productivebees:spawn_egg_configurable_bee"
            };
        } else {
            recipe.input = { item: input };
            recipe.result = { id: output, count: 1 };
        }

        catalyst.custom(recipe).id(`catalyst:mysticalagriculture/infusion/${idName}_${mod}`);
        mod++;
    }

    const getCleanName = (item) => item.includes(':') ? item.split(':')[1] : item;

    function row(mats, output, count, type) {
        let pattern = (type === 0) ? ['A C', ' B ', '   '] : ['ABC', '   ', '   '];
        catalyst.shaped(`${count}x ${output}`, pattern, { A: mats[0], B: mats[1], C: mats[2] })
        .id(`catalyst:shaped/row/${getCleanName(output)}_${mod}`);
        mod++;
    }

    function row2(mats, output, count, type) {
        let pattern = (type === 0) ? ['   ', 'ABC', '   '] : ['   ', 'A C', ' B '];
        catalyst.shaped(`${count}x ${output}`, pattern, { A: mats[0], B: mats[1], C: mats[2] })
        .id(`catalyst:shaped/row2/${getCleanName(output)}_${mod}`);
        mod++;
    }

    function row3(mats, output, count, type) {
        let pattern = (type === 0) ? ['   ', '   ', 'ABC'] : ['   ', ' B ', 'A C'];
        catalyst.shaped(`${count}x ${output}`, pattern, { A: mats[0], B: mats[1], C: mats[2] })
        .id(`catalyst:shaped/row3/${getCleanName(output)}_${mod}`);
        mod++;
    }

    function diagonal(mats, output, count) {
        catalyst.shaped(`${count}x ${output}`, ['A  ', ' B ', '  C'], { A: mats[0], B: mats[1], C: mats[2] })
        .id(`catalyst:shaped/diagonal/${getCleanName(output)}_${mod}`);
        mod++;
    }

    function diagonal2(mats, output, count) {
        catalyst.shaped(`${count}x ${output}`, ['  A', ' B ', 'C  '], { A: mats[0], B: mats[1], C: mats[2] })
        .id(`catalyst:shaped/diagonal2/${getCleanName(output)}_${mod}`)
        mod++;
    }

    function square(mats, output, count) {
        catalyst.shaped(`${count}x ${output}`, [' A ', 'B C', ' D '], { A: mats[0], B: mats[1], C: mats[2], D: mats[3] })
        .id(`catalyst:shaped/square/${getCleanName(output)}_${mod}`)
        mod++;
    }

    const seedsToFix = new Set(["cobalt", "lumium", "signalum", "rose_gold", "pig_iron", "enderium"]);
    
    $CropRegistry.getInstance().getCrops().forEach(crop => {
        if(seedsToFix.has(crop.getName())) {
            crop.setEnabled(true);
        }
    });

    const metalSeeds = [
        ['enderium', 'eternalores', 'supremium', 4],
        ['cobalt', 'eternalores', 'imperium', 4],
        ['lumium', 'eternalores', 'imperium', 4],
        ['signalum', 'eternalores', 'imperium', 4],
        ['rose_gold', 'eternalores', 'imperium', 4],
        ['pig_iron', 'eternalores', 'tertium', 4]
    ];

    metalSeeds.forEach(([name, mod, tier, count]) => {
        const ingot = `${mod}:${name}_ingot`;
        const essence = `mysticalagriculture:${tier}_essence`;
        const seed = `mysticalagriculture:${name}_seeds`;
        const seedEssence = `mysticalagriculture:${name}_essence`;

        infusion(seed, "mysticalagriculture:prosperity_seed_base", 
            [ingot, essence, ingot, essence, ingot, essence, ingot, essence], false);

        square(
            [seedEssence, seedEssence, seedEssence, seedEssence],
            ingot,
            count
        );
    });
    console.log("[CatJS] MA ingots enable");

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
    console.log("[CatJS] MA seed recipe fixed");

    const shapedRecipes = [
        // Output, Pattern, Key, Count (optional, default 1)
        { out: 'mysticalagradditions:insanium_block', p: ['AAA', 'AAA', 'AAA'], k: { A: 'mysticalagradditions:insanium_essence' } },
        { out: 'kubejs:mystical_block', p: ['AAA', 'AAA', 'AAA'], k: { A: 'mysticalagriculture:mystical_essence' } },
        { out: 'kubejs:magical_block', p: ['AAA', 'AAA', 'AAA'], k: { A: 'mysticalagriculture:magic_essence' } },
        { out: 'kubejs:technology_block', p: ['AAA', 'AAA', 'AAA'], k: { A: 'mysticalagriculture:technology_essence' } },
        { out: 'evilcraft:bucket_blood', p: [' A ', ' B ', '   '], k: { A: "mysticalagriculture:dark_gem_essence", B: "minecraft:bucket" } },
        { out: 'evilcraft:bucket_poison', p: ['   ', ' B ', ' A '], k: { A: "mysticalagriculture:dark_gem_essence", B: "minecraft:bucket" } },
        { out: 'evilcraft:vengeance_essence', p: ['AAA', 'ABA', 'AAA'], k: { A: "mysticalagriculture:mystical_essence", B: "mysticalagriculture:dark_gem_essence" } },
        { out: 'evilcraft:weather_container[evilcraft:weather_container_type="RAIN"]', p: ['AAA', 'ABA', 'AAA'], k: { A: "mysticalagriculture:dark_gem_essence", B: "minecraft:water_bucket" } },
        { out: 'pneumaticcraft:plastic', p: ['AAA', 'A A', 'AAA'], k: { A: "mysticalagriculture:plastic_essence" }, count: 2 },
        { out: 'pneumaticcraft:plastic_bucket', p: ['AAA', 'ABA', 'AAA'], k: { A: "mysticalagriculture:plastic_essence", B: "minecraft:bucket" } },
        { out: 'pneumaticcraft:oil_bucket', p: ['AAA', ' B ', '   '], k: { A: "mysticalagriculture:plastic_essence", B: "minecraft:bucket" } },
        { out: 'pneumaticcraft:glycerol', p: ['NDN', 'NBN', 'ADA'], k: { A: "mysticalagriculture:plastic_essence", B: "minecraft:sugar", D: "mysticalagriculture:dirt_essence", N: "mysticalagriculture:nature_essence" } },
        { out: 'justdirethings:raw_ferricore', p: ['AAA', ' I ', 'BBB'], k: { A: "mysticalagriculture:dire_essence", I: "minecraft:iron_ingot", B: "mysticalagriculture:iron_essence" }, count: 4 },
        { out: 'justdirethings:raw_blazegold', p: ['AAA', ' I ', 'BBB'], k: { A: "mysticalagriculture:dire_essence", I: "minecraft:gold_ingot", B: "mysticalagriculture:gold_essence" }, count: 4 },
        { out: 'justdirethings:celestigem', p: ['AAA', ' I ', 'BBB'], k: { A: "mysticalagriculture:dire_essence", I: "minecraft:diamond", B: "mysticalagriculture:diamond_essence" }, count: 4 },
        { out: 'justdirethings:raw_eclipsealloy', p: ['AAA', ' I ', 'BBB'], k: { A: "mysticalagriculture:dire_essence", I: "minecraft:gold_ingot", B: "mysticalagriculture:netherite_essence" }, count: 4 },
        { out: 'justdirethings:time_crystal', p: ['AAA', ' I ', 'BBB'], k: { A: "mysticalagriculture:dire_essence", I: "minecraft:amethyst_block", B: "mysticalagriculture:dye_essence" }, count: 4 },
        { out: 'extendedae:entro_crystal', p: ['AAA', 'A A', 'AAA'], k: { A: "mysticalagriculture:entro_essence" }, count: 4 },
        { out: 'industrialforegoing:pink_slime_bucket', p: ['AAA', ' B ', '   '], k: { A: "mysticalagriculture:industrial_essence", B: "minecraft:bucket" } },
        { out: 'industrialforegoing:meat_bucket', p: ['   ', ' B ', 'AAA'], k: { A: "mysticalagriculture:industrial_essence", B: "minecraft:bucket" } },
        { out: 'industrialforegoing:latex_bucket', p: ['   ', 'ABA', '   '], k: { A: "mysticalagriculture:industrial_essence", B: "minecraft:bucket" } },
        { out: 'industrialforegoing:fertilizer', p: ['   ', 'ABA', '   '], k: { A: "mysticalagriculture:industrial_essence", B: "#c:foods" }, count: 2 },
        { out: 'minecraft:sculk_shrieker', p: [' A ', 'ABA', ' A '], k: { A: "mysticalagriculture:sculk_essence", B: "minecraft:sculk_catalyst" } },
        { out: 'minecraft:echo_shard', p: ['A A', ' B ', 'A A'], k: { A: "mysticalagriculture:sculk_essence", B: "mysticalagriculture:magic_essence" } }
    ];

    shapedRecipes.forEach(r => {
        let outName = r.out.split(':')[1].split('[')[0];
        catalyst.shaped(`${r.count || 1}x ${r.out}`, r.p, r.k)
        .id(`catalyst:shaped/${outName}_${mod}`);
        mod++;
    });

    // Shapeless simple
    catalyst.shapeless('9x mysticalagradditions:insanium_essence', '1x mysticalagradditions:insanium_block')
    .id('catalyst:shapeless/insanium_essence_from_block');

    //Awakening Altar Recipes
    const awakeningRecipes = [
        // Insanium Gear (Darkness + Magic)
        { out: "mysticalagradditions:insanium_apple", in: "mysticalagradditions:supremium_apple", ess: ["darkness", "magic", "darkness", "magic"], ing: [awaE, awaE, awaE, awaE] },
        { out: "mysticalagradditions:insanium_ingot", in: awaI, ess: ["darkness", "magic", "darkness", "magic"], ing: [awaE, awaG, awaE, awaG] },
        { out: "mysticalagradditions:insanium_gemstone", in: awaG, ess: ["darkness", "magic", "darkness", "magic"], ing: [awaE, awaI, awaE, awaI] },
        { out:"mysticalagradditions:insanium_farmland", in: "mysticalagriculture:supremium_farmland", ess: ["darkness", "magic", "darkness", "magic"], ing: [awaE, awaE, awaE, awaE] },
        { out: insa, in: "mysticalagriculture:supremium_essence", ess: ["darkness", "magic", "darkness", "mystical"], ing: [awaEB, awaE, awaEB, awaE] },
        { out: "mysticalagradditions:insanium_block", in: "mysticalagriculture:supremium_block", ess: ["darkness", "magic", "technology", "mystical"], ing: [awaEB, awaEB, awaEB, awaEB] },

        // Insanium Gear (Darkness + Mystical)
        { out: "mysticalagradditions:insanium_apple", in: "mysticalagradditions:supremium_apple", ess: ["darkness", "mystical", "darkness", "mystical"], ing: [insa, insa, insa, insa] },
        { out: "mysticalagradditions:insanium_ingot", in: awaI, ess: ["darkness", "mystical", "darkness", "mystical"], ing: [awaE, awaG, awaE, awaG] },
        { out: "mysticalagradditions:insanium_gemstone", in: awaG, ess: ["darkness", "mystical", "darkness", "mystical"], ing: [awaE, awaI, awaE, awaI] },
        { out:"mysticalagradditions:insanium_farmland", in: "mysticalagriculture:supremium_farmland", ess: ["darkness", "mystical", "darkness", "mystical"], ing: [awaE, awaE, awaE, awaE] },

        // Special Seeds via Awakening
        { out: "mysticalagriculture:plastic_seeds", in: "mysticalagriculture:inferium_seeds", ess: ["fire", "fire", "fire", "fire"], ing: ["pneumaticcraft:plastic", "pneumaticcraft:plastic", "pneumaticcraft:plastic", "pneumaticcraft:plastic"] },
        { out: "mysticalagriculture:dire_seeds", in: "mysticalagriculture:iron_seeds", ess: ["technology", "fire", "technology", "fire"], ing: ["justdirethings:blazegold_ingot", "justdirethings:celestigem", "justdirethings:ferricore_ingot", "justdirethings:eclipsealloy_ingot"] },
        { out: "mysticalagriculture:sculk_seeds", in: "mysticalagriculture:darkness_seeds", ess: ["darkness", "darkness", "darkness", "darkness"], ing: ["minecraft:sculk", "minecraft:echo_shard", "minecraft:sculk", "minecraft:sculk_catalyst"] },

        //Creative Essence (bee one is below)
        { out: "mysticalagradditions:creative_essence", in: "mysticalagriculture:insanium_seeds", ess: ["darkness", "magic", "mystical", "technology"], ing: ["kubejs:technology_block", "kubejs:technology_block", "kubejs:technology_block", "kubejs:technology_block"] },
    ];

    awakeningRecipes.forEach(r => {
        awakening(r.out, r.in, r.ess, r.ing);
    });

    //Infusion Altar Recipes
    const infusionRecipes = [
        // Seeds
        { out: "mysticalagriculture:mystical_seeds", in: "mysticalagriculture:inferium_seeds", ing: ["reliquary:mercy_cross", "reliquary:hero_medallion", "reliquary:infernal_chalice", "reliquary:glacial_staff", "reliquary:witherless_rose", "apotheosis:epic_material", "reliquary:fertile_lily_pad", "reliquary:aphrodite_potion"], bee: false },
        { out: "mysticalagriculture:darkness_seeds", in: "mysticalagriculture:obsidian_seeds", ing: ["minecraft:sculk", "minecraft:deepslate", "minecraft:sculk", "minecraft:crying_obsidian", "minecraft:sculk", "minecraft:deepslate", "minecraft:sculk", "minecraft:crying_obsidian"], bee: false },
        { out: "mysticalagriculture:cognizian_seeds", in: "mysticalagriculture:inferium_seeds", ing: ["reliquary:witherless_rose", "minecraft:dragon_egg", "reliquary:witherless_rose", "minecraft:dragon_egg", "reliquary:witherless_rose", "minecraft:dragon_egg", "reliquary:witherless_rose", "minecraft:dragon_egg"], bee: false },
        { out: "mysticalagriculture:prudentium_seeds", in: "mysticalagriculture:inferium_seeds", ing: ["mysticalagriculture:supremium_block", "mysticalagriculture:imperium_essence", "mysticalagriculture:supremium_block", "mysticalagriculture:imperium_essence", "mysticalagriculture:supremium_block", "mysticalagriculture:imperium_essence", "mysticalagriculture:supremium_block", "mysticalagriculture:imperium_essence"], bee: false },
        { out: "mysticalagriculture:tertium_seeds", in: "mysticalagriculture:prudentium_seeds", ing: [awaEB, "mysticalagriculture:supremium_essence", awaEB, "mysticalagriculture:supremium_essence", awaEB, "mysticalagriculture:supremium_essence", awaEB, "mysticalagriculture:supremium_essence"], bee: false },
        { out: "mysticalagriculture:imperium_seeds", in: "mysticalagriculture:tertium_seeds", ing: ["mysticalagradditions:insanium_block", awaE, "mysticalagradditions:insanium_block", awaE, "mysticalagradditions:insanium_block", awaE, "mysticalagradditions:insanium_block", awaE], bee: false },
        { out: "mysticalagriculture:supremium_seeds", in: "mysticalagriculture:imperium_seeds", ing: ["kubejs:mystical_block", insa, "kubejs:mystical_block", insa, "kubejs:mystical_block", insa, "kubejs:mystical_block", insa], bee: false },
        { out: "mysticalagriculture:supremium_seeds", in: "mysticalagriculture:imperium_seeds", ing: ["kubejs:magical_block", insa, "kubejs:magical_block", insa, "kubejs:magical_block", insa, "kubejs:magical_block", insa], bee: false },
        { out: "mysticalagriculture:insanium_seeds", in: "mysticalagriculture:supremium_seeds", ing: ["kubejs:technology_block", "mysticalagriculture:mystical_essence", "kubejs:technology_block", "mysticalagriculture:mystical_essence", "kubejs:technology_block", "mysticalagriculture:mystical_essence", "kubejs:technology_block", "mysticalagriculture:mystical_essence"], bee: false },
        { out: "mysticalagriculture:insanium_seeds", in: "mysticalagriculture:supremium_seeds", ing: ["kubejs:technology_block", "mysticalagriculture:magic_essence", "kubejs:technology_block", "mysticalagriculture:magic_essence", "kubejs:technology_block", "mysticalagriculture:magic_essence", "kubejs:technology_block", "mysticalagriculture:magic_essence"], bee: false },
        { out: "mysticalagriculture:entro_seeds", in: "mysticalagriculture:fluix_seeds", ing: ["extendedae:entro_ingot", "mysticalagriculture:imperium_essence", "extendedae:entro_ingot", "mysticalagriculture:imperium_essence", "extendedae:entro_ingot", "mysticalagriculture:imperium_essence", "extendedae:entro_ingot", "mysticalagriculture:imperium_essence"], bee: false },
        { out: "mysticalagriculture:prosperity_seeds", in: "mysticalagriculture:inferium_seeds", ing: ["mysticalagriculture:prosperity_shard", "mysticalagriculture:tertium_essence", "mysticalagriculture:prosperity_shard", "mysticalagriculture:tertium_essence", "mysticalagriculture:prosperity_shard", "mysticalagriculture:tertium_essence", "mysticalagriculture:prosperity_shard", "mysticalagriculture:tertium_essence"], bee: false },
        { out: "mysticalagriculture:salt_seeds", in: "mysticalagriculture:prosperity_seed_base", ing: ["mekanism:salt", "mysticalagriculture:inferium_essence", "mekanism:salt", "mysticalagriculture:inferium_essence", "mekanism:salt", "mysticalagriculture:inferium_essence", "mekanism:salt", "mysticalagriculture:inferium_essence"], bee: false },
        { out: "mysticalagriculture:xychorium_seeds", in: "mysticalagriculture:prosperity_seed_base", ing: ["xycraft_world:xychorium_gem_blue", "mysticalagriculture:tertium_essence", "xycraft_world:xychorium_gem_blue", "mysticalagriculture:tertium_essence", "xycraft_world:xychorium_gem_blue", "mysticalagriculture:tertium_essence", "xycraft_world:xychorium_gem_blue", "mysticalagriculture:tertium_essence"], bee: false },
        { out: "mysticalagriculture:xychorium_seeds", in: "mysticalagriculture:prosperity_seed_base", ing: ["xycraft_world:xychorium_gem_green", "mysticalagriculture:tertium_essence", "xycraft_world:xychorium_gem_green", "mysticalagriculture:tertium_essence", "xycraft_world:xychorium_gem_green", "mysticalagriculture:tertium_essence", "xycraft_world:xychorium_gem_green", "mysticalagriculture:tertium_essence"], bee: false },
        { out: "mysticalagriculture:xychorium_seeds", in: "mysticalagriculture:prosperity_seed_base", ing: ["xycraft_world:xychorium_gem_red", "mysticalagriculture:tertium_essence", "xycraft_world:xychorium_gem_red", "mysticalagriculture:tertium_essence", "xycraft_world:xychorium_gem_red", "mysticalagriculture:tertium_essence", "xycraft_world:xychorium_gem_red", "mysticalagriculture:tertium_essence"], bee: false },
        { out: "mysticalagriculture:xychorium_seeds", in: "mysticalagriculture:prosperity_seed_base", ing: ["xycraft_world:xychorium_gem_dark", "mysticalagriculture:tertium_essence", "xycraft_world:xychorium_gem_dark", "mysticalagriculture:tertium_essence", "xycraft_world:xychorium_gem_dark", "mysticalagriculture:tertium_essence", "xycraft_world:xychorium_gem_dark", "mysticalagriculture:tertium_essence"], bee: false },
        { out: "mysticalagriculture:xychorium_seeds", in: "mysticalagriculture:prosperity_seed_base", ing: ["xycraft_world:xychorium_gem_light", "mysticalagriculture:tertium_essence", "xycraft_world:xychorium_gem_light", "mysticalagriculture:tertium_essence", "xycraft_world:xychorium_gem_light", "mysticalagriculture:tertium_essence", "xycraft_world:xychorium_gem_light", "mysticalagriculture:tertium_essence"], bee: false },

        // Bees
        { out: "awakened_supremium", in: "supremium", ing: ["reliquary:witherless_rose", "minecraft:dragon_egg", "reliquary:witherless_rose", "minecraft:dragon_egg", "reliquary:witherless_rose", "minecraft:dragon_egg", "reliquary:witherless_rose", "minecraft:dragon_egg"], bee: true },
        { out: "prudentium", in: "inferium", ing: ["mysticalagriculture:supremium_block", "mysticalagriculture:imperium_essence", "mysticalagriculture:supremium_block", "mysticalagriculture:imperium_essence", "mysticalagriculture:supremium_block", "mysticalagriculture:imperium_essence", "mysticalagriculture:supremium_block", "mysticalagriculture:imperium_essence"], bee: true },
        { out: "tertium", in: "prudentium", ing: [awaEB, "mysticalagriculture:supremium_essence", awaEB, "mysticalagriculture:supremium_essence", awaEB, "mysticalagriculture:supremium_essence", awaEB, "mysticalagriculture:supremium_essence"], bee: true },
        { out: "imperium", in: "tertium", ing: ["mysticalagradditions:insanium_block", awaE, "mysticalagradditions:insanium_block", awaE, "mysticalagradditions:insanium_block", awaE, "mysticalagradditions:insanium_block", awaE], bee: true },
        { out: "supremium", in: "imperium", ing: ["kubejs:mystical_block", insa, "kubejs:mystical_block", insa, "kubejs:mystical_block", insa, "kubejs:mystical_block", insa], bee: true },
        { out: "supremium", in: "imperium", ing: ["kubejs:magical_block", insa, "kubejs:magical_block", insa, "kubejs:magical_block", insa, "kubejs:magical_block", insa], bee: true },
        { out: "insanium", in: "supremium", ing: ["kubejs:technology_block", "mysticalagriculture:mystical_essence", "kubejs:technology_block", "mysticalagriculture:mystical_essence", "kubejs:technology_block", "mysticalagriculture:mystical_essence", "kubejs:technology_block", "mysticalagriculture:mystical_essence"], bee: true },
        { out: "insanium", in: "supremium", ing: ["kubejs:technology_block", "mysticalagriculture:magic_essence", "kubejs:technology_block", "mysticalagriculture:magic_essence", "kubejs:technology_block", "mysticalagriculture:magic_essence", "kubejs:technology_block", "mysticalagriculture:magic_essence"], bee: true },
    ];

    infusionRecipes.forEach(r => {
        infusion(r.out, r.in, r.ing, r.bee);
    });

    //Geometric Pattern Recipes (Row/Diagonal/Square)
    const geometricRecipes = [
        // Rows
        { type: 'row2', mats: ["mysticalagriculture:arcane_essence", "mysticalagriculture:arcane_essence", "mysticalagriculture:arcane_essence"], out: "ars_nouveau:source_gem", count: 12, mode: 0 },
        { type: 'row', mats: ["mysticalagriculture:skeleton_essence", "mysticalagriculture:arcane_essence", "mysticalagriculture:skeleton_essence"], out: "ars_nouveau:wilden_horn", count: 4, mode: 0 },
        { type: 'row', mats: ["mysticalagriculture:prismarine_essence", "mysticalagriculture:arcane_essence", "mysticalagriculture:prismarine_essence"], out: "ars_nouveau:wilden_spike", count: 4, mode: 0 },
        { type: 'row', mats: ["mysticalagriculture:zombie_essence", "mysticalagriculture:arcane_essence", "mysticalagriculture:zombie_essence"], out: "ars_nouveau:wilden_wing", count: 4, mode: 0 },
        { type: 'row2', mats: ["mysticalagriculture:wood_essence", "mysticalagriculture:arcane_essence", "mysticalagriculture:wood_essence"], out: "ars_nouveau:blue_archwood_log", count: 16, mode: 0 },
        { type: 'row', mats: ["mysticalagriculture:wood_essence", "mysticalagriculture:arcane_essence", "mysticalagriculture:wood_essence"], out: "ars_nouveau:red_archwood_log", count: 16, mode: 0 },
        { type: 'row3', mats: ["mysticalagriculture:wood_essence", "mysticalagriculture:arcane_essence", "mysticalagriculture:wood_essence"], out: "ars_nouveau:purple_archwood_log", count: 16, mode: 1 },
        { type: 'row2', mats: ["mysticalagriculture:nature_essence", "mysticalagriculture:arcane_essence", "mysticalagriculture:nature_essence"], out: "ars_nouveau:mendosteen_pod", count: 4, mode: 0 },
        { type: 'row', mats: ["mysticalagriculture:nature_essence", "mysticalagriculture:arcane_essence", "mysticalagriculture:nature_essence"], out: "ars_nouveau:bastion_pod", count: 4, mode: 0 },
        { type: 'row3', mats: ["mysticalagriculture:nature_essence", "mysticalagriculture:arcane_essence", "mysticalagriculture:nature_essence"], out: "ars_nouveau:frostaya_pod", count: 4, mode: 1 },
        { type: 'row', mats: ["mysticalagriculture:arcane_essence", "mysticalagriculture:nature_essence", "mysticalagriculture:arcane_essence"], out: "ars_nouveau:sourceberry_bush", count: 4, mode: 0 },
        { type: 'row2', mats: ["mysticalagriculture:wood_essence", "mysticalagriculture:dark_gem_essence", "mysticalagriculture:wood_essence"], out: "evilcraft:undead_log", count: 8, mode: 0 },
        { type: 'row2', mats: ["mysticalagriculture:wood_essence", "mysticalagriculture:dark_gem_essence", "mysticalagriculture:wood_essence"], out: "evilcraft:undead_leaves", count: 8, mode: 1 },
        { type: 'row2', mats: ["mysticalagriculture:dark_gem_essence", "mysticalagriculture:dark_gem_essence", "mysticalagriculture:dark_gem_essence"], out: "evilcraft:dark_gem", count: 8, mode: 1 },
        { type: 'row', mats: ["mysticalagriculture:entro_essence", "mysticalagriculture:entro_essence", "mysticalagriculture:entro_essence"], out: "extendedae:entro_dust", count: 3, mode: 1 },
        { type: 'row', mats: ["mysticalagriculture:prosperity_essence", "mysticalagriculture:prosperity_essence", "mysticalagriculture:prosperity_essence"], out: "mysticalagriculture:prosperity_shard", count: 4, mode: 0 },
        { type: 'row', mats: ["mysticalagriculture:sculk_essence", "mysticalagriculture:sculk_essence", "mysticalagriculture:sculk_essence"], out: "minecraft:sculk", count: 4, mode: 0 },
        { type: 'row', mats: ["mysticalagriculture:sculk_essence", "minecraft:comparator", "mysticalagriculture:sculk_essence"], out: "minecraft:sculk_sensor", count: 1, mode: 0 },
        { type: 'row', mats: ["mysticalagriculture:sculk_essence", "mysticalagriculture:sculk_essence", "mysticalagriculture:sculk_essence"], out: "minecraft:sculk_vein", count: 16, mode: 1 },
        { type: 'row', mats: ["mysticalagriculture:salt_essence", "mysticalagriculture:salt_essence", "mysticalagriculture:salt_essence"], out: "mekanism:salt", count: 16, mode: 1 },
        { type: 'row', mats: ["mysticalagriculture:xychorium_essence", "mysticalagriculture:xychorium_essence", "mysticalagriculture:xychorium_essence"], out: "xycraft_world:xychorium_gem_blue", count: 16, mode: 1 },
        { type: 'row', mats: ["mysticalagriculture:xychorium_essence", "mysticalagriculture:xychorium_essence", "mysticalagriculture:xychorium_essence"], out: "xycraft_world:xychorium_gem_green", count: 16, mode: 0 },
        { type: 'row3', mats: ["mysticalagriculture:xychorium_essence", "mysticalagriculture:xychorium_essence", "mysticalagriculture:xychorium_essence"], out: "xycraft_world:xychorium_gem_red", count: 16, mode: 1 },
        { type: 'row', mats: ["mysticalagriculture:xychorium_essence", "mysticalagriculture:deepslate_essence", "mysticalagriculture:xychorium_essence"], out: "xycraft_world:kivi", count: 32, mode: 1 },
        { type: 'row', mats: ["mysticalagriculture:flux_essence", "mysticalagriculture:flux_essence", "mysticalagriculture:flux_essence"], out: "fluxnetworks:flux_dust", count: 6, mode: 1 },
        { type: 'row', mats: ["mysticalagriculture:soulium_essence", "mysticalagriculture:soulium_essence", "mysticalagriculture:soulium_essence"], out: "mysticalagriculture:soulstone_cobble", count: 16, mode: 1},

        // Diagonals
        { type: 'diagonal', mats: ["mysticalagriculture:stone_essence", "mysticalagriculture:arcane_essence", "mysticalagriculture:stone_essence"], out: "ars_nouveau:sourcestone", count: 32 },
        { type: 'diagonal', mats: ["mysticalagriculture:wood_essence", "mysticalagriculture:arcane_essence", "mysticalagriculture:wood_essence"], out: "ars_nouveau:green_archwood_log", count: 16 },
        { type: 'diagonal2', mats: ["mysticalagriculture:wood_essence", "mysticalagriculture:arcane_essence", "mysticalagriculture:wood_essence"], out: "ars_elemental:yellow_archwood_log", count: 16 },
        { type: 'diagonal', mats: ["mysticalagriculture:nature_essence", "mysticalagriculture:arcane_essence", "mysticalagriculture:nature_essence"], out: "ars_nouveau:bombegranate_pod", count: 4 },
        { type: 'diagonal2', mats: ["mysticalagriculture:nature_essence", "mysticalagriculture:arcane_essence", "mysticalagriculture:nature_essence"], out: "ars_elemental:flashpine_pod", count: 4 },
        { type: 'diagonal', mats: ["mysticalagriculture:xychorium_essence", "mysticalagriculture:xychorium_essence", "mysticalagriculture:xychorium_essence"], out: "xycraft_world:xychorium_gem_dark", count: 16 },
        { type: 'diagonal2', mats: ["mysticalagriculture:xychorium_essence", "mysticalagriculture:xychorium_essence", "mysticalagriculture:xychorium_essence"], out: "xycraft_world:xychorium_gem_light", count: 16 },

        // Squares
        { type: 'square', mats: ["mysticalagriculture:zombie_essence", "mysticalagriculture:dark_gem_essence", "mysticalagriculture:dark_gem_essence", "mysticalagriculture:zombie_essence"], out: "evilcraft:flesh_werewolf", count: 1 },
        { type: 'square', mats: ["mysticalagriculture:dark_gem_essence", "mysticalagriculture:deepslate_essence", "mysticalagriculture:deepslate_essence", "mysticalagriculture:dark_gem_essence"], out: "evilcraft:dark_brick", count: 6 },
    ];

    geometricRecipes.forEach(r => {
        if (r.type === 'row') row(r.mats, r.out, r.count, r.mode);
        if (r.type === 'row2') row2(r.mats, r.out, r.count, r.mode);
        if (r.type === 'row3') row3(r.mats, r.out, r.count, r.mode);
        if (r.type === 'diagonal') diagonal(r.mats, r.out, r.count);
        if (r.type === 'diagonal2') diagonal2(r.mats, r.out, r.count);
        if (r.type === 'square') square(r.mats, r.out, r.count);
    });

    // Creative essence with insanium bee
    catalyst.custom({
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
        result: { id: "mysticalagradditions:creative_essence" }
    }).id('catalyst:mysticalagriculture/awakening/creative_essence');

    // Awakening block (2 output)
    catalyst.custom({
        type: "mysticalagriculture:awakening",
        essences: [
            { id: `mysticalagriculture:mystical_essence`, count: 10 },
            { id: `mysticalagriculture:magic_essence`, count: 10 },
            { id: `mysticalagriculture:mystical_essence`, count: 10 },
            { id: `mysticalagriculture:magic_essence`, count: 10 }
        ],
        input: { item: "mysticalagriculture:supremium_block" },
        ingredients: Array(4).fill({ item: conig }),
        result: { id: awaEB, count: 2 }
    }).id('catalyst:mysticalagriculture/awakening/awakened_supremium_block_2');

    // Awakening block (4 output)
    catalyst.custom({
        type: "mysticalagriculture:awakening",
        essences: [
            { id: `mysticalagriculture:mystical_essence`, count: 10 },
            { id: `mysticalagriculture:technology_essence`, count: 10 },
            { id: `mysticalagriculture:mystical_essence`, count: 10 },
            { id: `mysticalagriculture:technology_essence`, count: 10 }
        ],
        input: { item: "mysticalagriculture:supremium_block" },
        ingredients: Array(4).fill({ item: conig }),
        result: { id: awaEB, count: 4 }
    }).id('catalyst:mysticalagriculture/awakening/awakened_supremium_block_4');

    // Magic seeds
    catalyst.custom({
        type: "ars_nouveau:enchanting_apparatus",
        keepNbtOfReagent: false,
        pedestalItems: [
            { item: "ars_nouveau:wilden_tribute" },
            { item: "ars_nouveau:fire_essence" },
            { item: "ars_nouveau:abjuration_essence" },
            { item: "ars_nouveau:conjuration_essence" },
            { item: "ars_nouveau:air_essence" },
            { item: "ars_nouveau:earth_essence" },
            { item: "ars_nouveau:manipulation_essence" },
            { item: "ars_nouveau:water_essence" },
            { item: "ars_elemental:anima_essence" },
            { item: "ars_elemental:firenando_charm" },
            { item: "ars_elemental:siren_charm" },
            { item: "ars_nouveau:bookwyrm_charm" },
            { item: "ars_nouveau:amethyst_golem_charm" }
        ],
        reagent: { item: "mysticalagriculture:inferium_seeds" },
        result: { count: 1, id: "mysticalagriculture:magic_seeds" },
        sourceCost: 10000
    }).id('catalyst:ars_nouveau/enchanting_apparatus/magic_seeds');

    // Enriched seeds
    catalyst.custom({
        type: "mekanism:metallurgic_infusing",
        chemical_input: { amount: 100, tag: "mekanism:redstone" },
        item_input: { count: 1, item: "mysticalagriculture:inferium_seeds" },
        output: { count: 1, id: "kubejs:enriched_seeds" },
        per_tick_usage: true
    }).id('catalyst:mekanism/infusing/enriched_seeds');

    // Powered seeds
    catalyst.custom({
        type: "ae2:charger",
        ingredient: { item: "kubejs:enriched_seeds" },
        result: { count: 1, id: "kubejs:powered_seeds" }
    }).id('catalyst:ae2/charger/powered_seeds');

    // Ethereal seeds
    catalyst.custom({
        type: "industrialforegoing:dissolution_chamber",
        input: [
            { item: "kubejs:powered_seeds" },
            { item: "minecraft:redstone_block" },
            { item: "minecraft:redstone_block" },
            { item: "minecraft:redstone_block" },
            { item: "minecraft:nether_star" },
            { tag: "c:ingots/steel" },
            { tag: "c:ingots/steel" },
            { tag: "c:ingots/steel" }
        ],
        inputFluid: { amount: 2000, fluid: "industrialforegoing:ether_gas" },
        output: { count: 1, id: "kubejs:ethereal_seeds" },
        processingTime: 1800
    }).id('catalyst:industrialforegoing/dissolution/ethereal_seeds');

    // Reinforced seeds
    catalyst.custom({
        type: "integrateddynamics:mechanical_drying_basin",
        input_fluid: { id: "integrateddynamics:liquid_chorus", amount: 1000 },
        input_item: { item: "kubejs:ethereal_seeds" },
        duration: 300,
        output_item: { id: "kubejs:reinforced_seeds" }
    }).id('catalyst:integrateddynamics/drying/reinforced_seeds');

    // Activated seeds
    catalyst.custom({
        type: "powah:energizing",
        energy: 20000000,
        ingredients: [
            { item: "kubejs:reinforced_seeds" },
            { item: "powah:nitro_crystal_block" },
            { item: "powah:nitro_crystal_block" },
            { item: "powah:uraninite_block" },
            { item: "powah:uraninite_block" }
        ],
        result: { count: 1, id: "kubejs:activated_seeds" }
    }).id('catalyst:powah/energizing/activated_seeds');

    // Technology seeds
    catalyst.custom({
        type: "mekanism:nucleosynthesizing",
        chemical_input: { amount: 20, chemical: "mekanism:antimatter" },
        duration: 1000,
        item_input: { count: 1, item: "kubejs:activated_seeds" },
        output: { count: 1, id: "mysticalagriculture:technology_seeds" },
        per_tick_usage: false
    }).id('catalyst:mekanism/nucleosynthesizing/technology_seeds');

    // Inferium bee
    catalyst.custom({
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
    }).id('catalyst:mysticalagriculture/infusion/inferium_bee');

    // Arcane seeds
    catalyst.custom({
        type: "ars_nouveau:enchanting_apparatus",
        keepNbtOfReagent: false,
        pedestalItems: [
            { item: "ars_nouveau:source_gem" },
            { item: "mysticalagriculture:tertium_essence" },
            { item: "ars_nouveau:source_gem" },
            { item: "mysticalagriculture:tertium_essence" },
            { item: "ars_nouveau:source_gem" },
            { item: "mysticalagriculture:tertium_essence" },
            { item: "ars_nouveau:source_gem" },
            { item: "mysticalagriculture:tertium_essence" }
        ],
        reagent: { item: "mysticalagriculture:inferium_seeds" },
        result: { count: 1, id: "mysticalagriculture:arcane_seeds" },
        sourceCost: 30000
    }).id('catalyst:ars_nouveau/enchanting_apparatus/arcane_seeds');

    // Dark gems seeds
    catalyst.custom({
        type: "evilcraft:blood_infuser",
        input_item: { item: "mysticalagriculture:darkness_seeds" },
        input_fluid: { id: "evilcraft:blood", amount: 20000 },
        output_item: { id: "mysticalagriculture:dark_gem_seeds" },
        duration: 10,
        xp: 0.05,
        tier: 2
    }).id('catalyst:evilcraft/blood_infuser/dark_gem_seeds');

    // Industrial seeds
    catalyst.custom({
        type: "industrialforegoing:dissolution_chamber",
        input: [
            { item: "mysticalagriculture:inferium_seeds" },
            { item: "industrialforegoing:dryrubber" },
            { item: "industrialforegoing:dryrubber" },
            { item: "industrialforegoing:dryrubber" },
            { item: "industrialforegoing:pink_slime" }
        ],
        inputFluid: { amount: 2000, fluid: "minecraft:water" },
        output: { count: 1, id: "mysticalagriculture:industrial_seeds" },
        processingTime: 1800
    }).id('catalyst:industrialforegoing/dissolution/industrial_seeds');

    console.log("[CatJS] Finished adding MA recipes")

});

const farmlands = Item.getTypeList().filter(item => item.includes("farmland"))
const not_plant = Item.getList().filter(item => item.hasTag('c:dont_plant'))

const filteredCrops = $CropRegistry.getInstance().getCrops() //all are mysticalagriculture now
    .filter(c => not_plant.some(i => i.id.split(':')[1] === `${c.getName()}_seeds`))
    .map(c => c.getName());

//Disable player to place forbidden seeds for players, use machines
farmlands.forEach(farmland => {
    BlockEvents.rightClicked(farmland, catalyst => {
        const item = catalyst.item;
        const player = catalyst.player;

        not_plant.forEach(e => {
            if(e === item.id)
            {
                catalyst.getServer().scheduleInTicks(3, ctx => {
                    const selected = player.inventory.getSelected();
                    if(!selected.isEmpty())
                    {
                        selected.count--;
                        player.inventory.setChanged();
                    }

                    catalyst.getServer().scheduleInTicks(3, ctx => {
                        selected.count++;
                        player.inventory.setChanged();
                    })
                });
                catalyst.cancel();
            }
        })
    });
})

filteredCrops.forEach(crop => {
    BlockEvents.randomTick(`mysticalagriculture:${crop}_crop`, catalyst => {
        catalyst.cancel()
    })
})

/* 
    Flux seeds, need special treatment
    JEI Recipe present in client_scripts/jei/recipe_viewer_add.js
*/
BlockEvents.leftClicked("minecraft:obsidian", catalyst => {
    const level = catalyst.level;
    const pos = catalyst.getBlock().pos;
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

        catalyst.success();
    }
})
/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
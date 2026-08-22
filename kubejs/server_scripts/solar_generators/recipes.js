/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/

ServerEvents.recipes(catalyst => {
    let glass = 'minecraft:blue_stained_glass_pane';
    let cell = 'powah:photoelectric_pane';
    let ingot = 'energizedpower:energized_gold_ingot';

    let plate = (name) => {
        return `eternalores:plate_${name}`
    }

    let foil = (name) => {
        return `eternalores:${name}_foil`
    }

    let gear = (name) => {
        return `eternalores:gear_${name}`
    }

    let energ = (name) => {
        return `energizedpower:solar_panel_${name}`
    }

    let solar = (name) => {
        return `solargeneration:solar_panel_${name}`
    }

    let solar_recipe = (middle, base, solar, last_tier, output, count) => {
        if(count === undefined) count = 1;

        catalyst.shaped(Item.of(output, count),
        [
            "SSS",
            "LML",
            "BBB"
        ],{
            S: solar,
            L: last_tier,
            M: middle,
            B: base
        
        }).id(`catalyst:solar_generators/${last_tier.replace(":", "_")}_to_${output.replace(":", "_")}`);
    }

    solar_recipe(foil("copper"), plate("aluminum"), glass, "energizedpower:tin_cable", solar("leadstone"))
    solar_recipe(foil("nickel"), plate("nickel"), glass, solar("leadstone"), energ("1"))
    solar_recipe(foil("silicon"), plate("britannia_silver"), glass, energ("1"), solar("hardened"))
    solar_recipe(gear("lead"), plate("tin"), cell, solar("hardened"), energ("2"))
    solar_recipe(gear("aluminum"), plate("invar"), cell, energ("2"), solar("redstone"))
    solar_recipe(gear("aluminum"), plate("electrum"), cell, solar("redstone"), energ("3"))
    solar_recipe(gear("necroticarite"), plate("signalum"), cell, energ("3"), solar("signalum"))
    solar_recipe(ingot, plate("lumium"), cell, solar("signalum"), energ("4"))
    solar_recipe(gear("enderium"), plate("titanium"), cell, energ("4"), solar("resonant"))
    solar_recipe(ingot, plate("tungsten"), cell, solar("resonant"), energ("5"))
    solar_recipe("eternalores:eternal_light_block", plate("eternal_dark"), cell, energ("5"), solar("advanced"))
    solar_recipe(ingot, plate("ultimatitanium"), cell, solar("advanced"), energ("6"))
    solar_recipe("eternalores:missing_ingot", plate("etherium"), cell, energ("6"), solar("ultimate"))
    
    catalyst.shaped(Item.of('energizedpower:solar_panel_7', 1), [
        "PPP",
        "SES",
        "AAA"
    ],
    {
        P: 'powah:photoelectric_pane',
        S: 'solargeneration:solar_panel_ultimate',
        E: 'energizedpower:elite_solar_cell',
        A: 'eternalores:plate_stellarium'
    })
    .id("catalyst:solar_generators/solar_generation_solar_panel_ultimate_to_energizedpower_solar_panel_7");

    console.log("[CatJS] Added Solar Generators recipes");
})

/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
let IOType = Java.loadClass("es.degrassi.mmreborn.common.machine.IOType");
let MobEffectInstance = Java.loadClass("net.minecraft.world.effect.MobEffectInstance");
let BuiltInRegistries = Java.loadClass("net.minecraft.core.registries.BuiltInRegistries");
let ResourceLocation = Java.loadClass("net.minecraft.resources.ResourceLocation");

let skip = ["@a", "@e", "@n", "@p", "@r", "@s"];
let duration = 1200 // ticks
let potency_multiplier = 1

let effects = [
    { 
        effect: "ars_nouveau:recovery_potion",
        element: "earth",
        secondary: "minecraft:lapis_lazuli",
        tertiary: "minecraft:emerald",
        potency: 1 * potency_multiplier,
        mod: "minecraft"
    },
    {
        effect: "minecraft:resistance",
        element: "earth",
        secondary: "minecraft:obsidian",
        tertiary: "minecraft:iron_block",
        potency: 1 * potency_multiplier,
        mod: "reliquary"
    },
    {
        effect: "minecraft:luck",
        element: "earth",
        secondary: "minecraft:emerald_block",
        tertiary: "minecraft:gold_block",
        potency: 1 * potency_multiplier,
        mod: "minecraft"
    },
    {
        effect: "ars_nouveau:spell_damage_potion",
        element: "fire",
        secondary: "ars_nouveau:source_gem",
        tertiary: "minecraft:blaze_powder",
        potency: 1 * potency_multiplier,
        mod: "minecraft"
    },
    {
        effect: "minecraft:strength",
        element: "fire",
        secondary: "minecraft:blaze_rod",
        tertiary: "minecraft:nether_wart_block",
        potency: 1 * potency_multiplier,
        mod: "minecraft"
    },
    {
        effect: "minecraft:fire_resistance",
        element: "fire",
        secondary: "minecraft:magma_cream",
        tertiary: "minecraft:nether_brick",
        potency: 1 * potency_multiplier,
        mod: "minecraft"
    },
    { 
        effect: "ars_nouveau:mana_regen_potion",
        element: "light",
        secondary: "ars_nouveau:source_berry_pie",
        tertiary: "minecraft:amethyst_shard",
        potency: 1 * potency_multiplier,
        mod: "minecraft"
    },
    {
        effect: "minecraft:regeneration",
        element: "light",
        secondary: "minecraft:ghast_tear",
        tertiary: "minecraft:pink_petals",
        potency: 1 * potency_multiplier,
        mod: "minecraft"
    },
    {
        effect: "minecraft:saturation",
        element: "light",
        secondary: "minecraft:golden_carrot",
        tertiary: "minecraft:honey_bottle",
        potency: 1 * potency_multiplier,
        mod: "reliquary"
    },
    {
        effect: "minecraft:conduit_power",
        element: "water",
        secondary: "minecraft:prismarine_crystals",
        tertiary: "minecraft:nautilus_shell",
        potency: 1,
        mod: "none",
        item: "minecraft:conduit"
    },
    {
        effect: "minecraft:dolphins_grace",
        element: "water",
        secondary: "minecraft:salmon",
        tertiary: "minecraft:seagrass",
        potency: 1 * potency_multiplier,
        mod: "none",
        item: "minecraft:dolphin_spawn_egg"
    },
    {
        effect: "minecraft:water_breathing",
        element: "water",
        secondary: "minecraft:pufferfish",
        tertiary: "minecraft:dried_kelp_block",
        potency: 1,
        mod: "minecraft"
    },
    {
        effect: "apothic_attributes:flying",
        element: "wind",
        secondary: "minecraft:phantom_membrane",
        tertiary: "minecraft:breeze_rod",
        potency: 1,
        mod: "minecraft"
    },
    {
        effect: "apothic_attributes:haste",
        element: "wind",
        secondary: "minecraft:gold_ingot",
        tertiary: "minecraft:cocoa_beans",
        potency: 1 * potency_multiplier,
        mod: "minecraft"
    },
    {
        effect: "minecraft:speed",
        element: "wind",
        secondary: "minecraft:sugar",
        tertiary: "minecraft:feather",
        potency: 1 * potency_multiplier,
        mod: "reliquary"
    },
    { 
        effect: "minecraft:healing",
        element: "catalyst",
        secondary: "minecraft:glistering_melon_slice",
        tertiary: "minecraft:redstone_block",
        potency: 1 * potency_multiplier,
        mod: "minecraft"
    }
];

ServerEvents.recipes(catalyst => {
    let recipe_time = 3600 //ticks

    const addBeaconRequirements = (recipeBuilder, effect) => {
        let r = recipeBuilder
            .progressData(ProgressData.create().x(64).y(20))
            .width(110)
            .height(60)
            .requireEnergyPerTick(1000)
        
        if(effect.secondary) r.requireItem(Item.of(effect.secondary), 20, 20)
        if(effect.tertiary) r.requireItem(Item.of(effect.tertiary), 20, 20)

        return r;
    };

    effects.forEach(effectData => {
        if(effectData.element !== "catalyst")
        {
            let item = `1x catalystcore:elemental_${effectData.element}_crystal`
            let potions = ""
            if(effectData.mod === "minecraft")
            {
                potions = `minecraft:potion[potion_contents={potion:"${effectData.effect}"}]`
            }
            else if(effectData.mod === "reliquary")
            {
                potions = `reliquary:potion[potion_contents={custom_effects:[{duration:1500,id:"${effectData.effect}","neoforge:cures":["milk","protected_by_totem"],show_icon:1b}]}]`
            }
            else
            {
                potions = effectData.item
            }
            
            let recipe = catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:personal_beacon", recipe_time)
            .requireItem("1x minecraft:name_tag", 0, 20, 0)
            .requireItem(item, 40, 0)
            .requireItem(`1x ${effectData.secondary}`, 20, 20)
            .requireItem(`1x ${effectData.tertiary}`, 20, 40)
            .requireSource(1000, 40, 20)
            //.requirefluid("evilcraft:blood", 1000)
            .requireFunctionOnStart("beacon_start", "check") 
            .requireFunctionEachTick("beacon_tick", effectData.effect)
            .jei()
            .requireItem("1x minecraft:name_tag", 0, 20, 0)
            .requireItem(item, 1, 40, 0)
            .requireItem(`1x ${effectData.secondary}`, 20, 20)
            .requireItem(`1x ${effectData.tertiary}`, 20, 40)
            .requireSource(1000, 40, 20)
            .produceItem(potions, 90, 20)
            .id(`catalyst:mmr/personal_beacon/${effectData.effect.replace(":", "-")}`)

            addBeaconRequirements(recipe, effectData)
        }
        else
        {
            let item = Item.of('eternalores:catalyrium_ingot')
            let potions = ""
            if(effectData.mod === "minecraft")
            {
                potions = `minecraft:potion[potion_contents={potion:"${effectData.effect}"}]`
            }
            else if(effectData.mod === "reliquary")
            {
                potions = `reliquary:potion[potion_contents={custom_effects:[{duration:1500,id:"${effectData.effect}","neoforge:cures":["milk","protected_by_totem"],show_icon:1b}]}]`
            }
            else
            {
                potions = effectData.item
            }
            
            let recipe = catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:personal_beacon", recipe_time)
            .requireItem(item, 40, 0)
            .requireItem(`1x ${effectData.secondary}`, 20, 20)
            .requireItem(`1x ${effectData.tertiary}`, 20, 40)
            .requireItem("1x minecraft:name_tag", 0, 20, 0)
            .requireSource(1000, 40, 20)
            //.requirefluid("evilcraft:blood", 1000)
            .requireFunctionOnStart("beacon_start", "check") 
            .requireFunctionEachTick("beacon_tick", effectData.effect)
            .jei()
            .requireItem("1x minecraft:name_tag", 0, 20, 0)
            .requireItem(item, 40, 0)
            .requireItem(`1x ${effectData.secondary}`, 20, 20)
            .requireItem(`1x ${effectData.tertiary}`, 20, 40)
            .requireSource(1000, 40, 20)
            .produceItem(potions, 90, 20)
            .id(`catalyst:mmr/personal_beacon/${effectData.effect.replace(":", "-")}`)

            addBeaconRequirements(recipe, effectData)
        }
        
    })
})

function getTargetPlayerName(machine)
{
    let inputItems = machine.getItemsStored(IOType.INPUT);
    for(let i = 0; i < inputItems.size(); i++)
    {
        let item = inputItems.get(i);
        if(item.id === 'minecraft:name_tag')
        {
            let nameComponent = item.getCustomName();
            if(nameComponent)
            {
                return nameComponent.getString()
            }
        }
    }
    return null;
}

MMREvents.recipeFunction("beacon_start", ctx => {
    let targetName = getTargetPlayerName(ctx.machine);

    if(!targetName || skip.includes(targetName))
    {
        return ctx.error("There is an invalid name (@a, @e, @n, @p, @r, @s) or no name on name tag");
    }

});

MMREvents.recipeFunction("beacon_tick", ctx => {
    let machine = ctx.machine;
    let level = ctx.getBlock().getLevel();
    let server = level.server;
    let effectId = ctx.get(0);

    ctx.setBaseSpeed(1.0);
    let currentTargetName = getTargetPlayerName(machine);
    if(!currentTargetName || skip.includes(currentTargetName))
    {
        ctx.setBaseSpeed(0.0);
        return;
    }
    let currentPlayer = server.getPlayerList().getPlayerByName(currentTargetName);

    if(currentPlayer)
    {
        ctx.setBaseSpeed(1.0);
        let effectRL = ResourceLocation.parse(effectId);
        let mobEffect = BuiltInRegistries.MOB_EFFECT.get(effectRL);
        if(mobEffect)
        {
            let instance = new MobEffectInstance(mobEffect, 240, 0, true, false);
            currentPlayer.addEffect(instance);
        }

    } else {
        ctx.setBaseSpeed(0.0);
    }
});
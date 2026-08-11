/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/

//Change this is you want to disable this function
let enabled = true;

//(Key: "x,y,z", Value: {level, entity})
let activeAltars = new Map();
let activeRituals = new Set();

let Integer = Java.loadClass("java.lang.Double");

let RITUAL_CONFIG = [
    { // 0: Storm & Cyan
        func: 'mysticalagriculture:circle_cyan',
        sound: 'minecraft:entity.wither.ambient',
        duration: 110,
        interval: 10,
        storm: true,
        rotate: false
    },
    { // 1: Red
        func: 'mysticalagriculture:circle_red',
        sound: 'minecraft:entity.ghast.ambient',
        duration: 110,
        interval: 10,
        storm: false,
        rotate: true
    },
    { // 2: Pink & Sphere
        func: 'mysticalagriculture:circle_pink',
        sound: 'ars_nouveau:gaia_family',
        duration: 110,
        interval: 10,
        storm: false,
        rotate: true,
        extra: (cmd, pos, dim) => {
            for(let i = 1; i < 10; i++)
            {
                cmd.scheduleInTicks(i * 5, c => c.source.server.runCommandSilent(`execute in ${dim} positioned ${pos.x} ${pos.y - 2} ${pos.z} run function mysticalagriculture:sphere`));
            }
        }
    },
    { // 3: Hidden
        func: 'mysticalagriculture:hidden',
        sound: 'apotheosis:reforge',
        duration: 55,
        interval: 5,
        storm: false,
        rotate: false
    }
];

ServerEvents.loaded(catalyst => {
    let data = JsonIO.read('kubejs/data/altar_effect_preferences.json') || {};
    if (data.activated !== undefined) enabled = data.activated;
});

ServerEvents.commandRegistry(catalyst => {
    let { commands: Commands } = catalyst;

    catalyst.register(Commands.literal('altareffects')
        .requires(source => source.hasPermission(2) || source.getServer().isSingleplayer())
        .then(Commands.literal('false').executes(ctx => {
            enabled = false;
            ctx.source.sendSuccess(
                Component.translate('catalyst.mysticalagriculture.altareffects.prefix').green()
                    .append(Component.translate('catalyst.mysticalagriculture.status.disabled').red()), 
                false
            );
            JsonIO.write('kubejs/data/altar_effect_preferences.json', {
                activated : enabled
            });
            return 1;
        }))
        .then(Commands.literal('true').executes(ctx => {
            enabled = true;
            ctx.source.sendSuccess(
                Component.translate('catalyst.mysticalagriculture.altareffects.prefix').green()
                    .append(Component.translate('catalyst.mysticalagriculture.status.enabled').aqua()), 
                false
            );
            JsonIO.write('kubejs/data/altar_effect_preferences.json', {
                activated : enabled
            });
            return 1;
        }))
    );
    console.log("[CatJS] Added command to disable/enable MA awakening altar effects");
});

ServerEvents.tick(catalyst => {
    if(!enabled) return;

    if(catalyst.server.tickCount % 200 === 0)
    {
        catalyst.server.getAllLevels().forEach(level => {
            level.blockEntityTickers.forEach(ticker => {
                if(ticker.type.includes("mysticalagriculture:awakening_altar"))
                {
                    let pos = ticker.getPos(); 
                    let key = `${pos.x},${pos.y},${pos.z}`;
                    if(!activeAltars.has(key))
                    {
                        activeAltars.set(key, {level: level, pos: pos});
                    }
                }
            });
        });
    }

    if(catalyst.server.tickCount % 20 === 0)
    {
        checkAltars(catalyst.server);
    }
});

function checkAltars(server)
{
    activeAltars.forEach((data, key) => {
        let {level, pos} = data;
        let block = level.getBlock(pos);
        
        if (block.id !== "mysticalagriculture:awakening_altar")
        {
            activeAltars.delete(key);
            return;
        }

        let nbt = block.entityData;
        if(nbt && nbt.Active && (nbt.Active == 1 || nbt.Active == true) && !activeRituals.has(key))
        {
            let nearbyPlayers = level.getPlayers().filter(p => {
                let dx = pos.x - p.x;
                let dy = pos.y - p.y;
                let dz = pos.z - p.z;
                return (dx*dx + dy*dy + dz*dz) <= 64;
            });

            if(nearbyPlayers.length > 0)
            {
                let ritualId = Math.floor(Math.random() * 4);
                startRitual(server, level.dimension, pos, nearbyPlayers, ritualId, key);
            }
        }
    });
}

function startRitual(server, dim, pos, players, typeId, key)
{
    const config = RITUAL_CONFIG[typeId];
    const tag = `altar_${key.replace(/,/g, '_')}`;
    activeRituals.add(key);
    
    const run = (cmd) => server.runCommandSilent(cmd);

    run(`execute in ${dim} positioned ${pos.x} ${pos.y} ${pos.z} align xyz run summon armor_stand ${pos.x} ${pos.y} ${pos.z} {Tags:["${tag}"],Invisible:1,Marker:1b}`);

    if(config.rotate)
    {
        run(`execute as @e[tag=${tag}] at @s run tp @s ~ ~ ~ ~${Math.floor(Math.random() * 50)} ~`);
    }

    if(config.storm)
    {
        triggerStorm(server, dim, pos);
    }

    players.forEach(player => {
        run(`execute in ${dim} facing ${pos.x} ${pos.y} ${pos.z} run playsound ${config.sound} master ${player.username} ${pos.x} ${pos.y} ${pos.z} 1 0.5`);
    });

    const steps = Math.floor(config.duration / config.interval);
    for(let i = 1; i < steps; i++)
    {
        server.scheduleInTicks(i * config.interval, () => {
            server.runCommandSilent(`execute in ${dim} at @e[tag=${tag}] run function ${config.func}`);
            if(config.rotate)
            {
                server.runCommandSilent(`execute in ${dim} as @e[tag=${tag}] at @s run tp @s ~ ~ ~ ~2 ~`);
            }
        });
    }

    if(config.extra) config.extra(server, pos, dim);
    
    server.scheduleInTicks(config.duration, () => {
        server.runCommandSilent(`execute in ${dim} run kill @e[tag=${tag}]`);
        activeRituals.delete(key);
    });
}

function triggerStorm(server, dim, pos)
{
    for(let i = 1; i < 7; i++)
    {
        server.scheduleInTicks(i * 10, () => {
            server.runCommandSilent(`execute in ${dim} run summon minecraft:lightning_bolt ${pos.x} ${pos.y + 2} ${pos.z}`);
        });
    }
    
    for(let i = 0; i < 40; i++)
    {
        server.scheduleInTicks(1 + i, () => {
            const offsets = [[3, 0], [-3, 0], [0, 3], [0, -3]];
            offsets.forEach(([dx, dz]) => {
                server.runCommandSilent(`execute in ${dim} run particle minecraft:soul_fire_flame ${pos.x + dx} ${pos.y + 2} ${pos.z + dz} 0.3 1.5 0.2 0 3 normal`);
            });
        });
    }
}
/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/

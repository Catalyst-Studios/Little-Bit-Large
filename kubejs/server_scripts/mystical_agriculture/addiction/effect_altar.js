const HashMap = Java.loadClass("java.util.HashMap");
const ArrayList = Java.loadClass("java.util.ArrayList");

let armor_stands = new HashMap();
let altars = new HashMap();

let enabled = true;

ServerEvents.loaded(event => {
    const savedData = JsonIO.read('kubejs/data/altar_effect_preferences.json') || {};
    Object.entries(savedData).forEach(([hello, enable]) => {
        enabled = enable;
    });
});

ServerEvents.commandRegistry(event => {
    const { commands: Commands } = event;

    event.register(Commands.literal('altareffects').requires(source => source.hasPermission(2) || source.getServer().isSingleplayer())
                   .then(Commands.literal('false').executes(ctx =>{
                        enabled = false;
                        ctx.source.sendSuccess(
                            Text.green('Visuals effects on Mystical Agriculture: ').append(Text.red('Disabled')), 
                            false
                        );
                        JsonIO.write('kubejs/data/altar_effect_preferences.json', {
                            activated : enabled
                        })
                        return 1;
                   }))
                   .then(Commands.literal('true').executes(ctx =>{
                        enabled = true;
                        ctx.source.sendSuccess(
                            Text.green('Visuals effects on Mystical Agriculture: ').append(Text.aqua('Enabled')), 
                            false
                        );
                        JsonIO.write('kubejs/data/altar_effect_preferences.json', {
                            activated : enabled
                        })
                        return 1;
                   }))
    )
});

ServerEvents.tick(event => {
    if(enabled)
    {
        if(event.server.tickCount % 20 === 0) check_status(event);
        if(event.server.tickCount % 200 !== 0) return;
        let levels = event.getServer().getAllLevels();
        levels.forEach(level => {
            let entities = level.blockEntityTickers;
            entities.forEach(enti => {
                if(enti.getType().match("mysticalagriculture:awakening_altar"))
                {
                    if(!altars.containsKey(enti))
                    {
                        altars.put(enti, level);
                    }
                }
            })
        })
    } 
})

function getNearbyPlayers(event, pos) {
    const RADIUS = 8;
    let altarX = pos.x + 0.5;
    let altarY = pos.y + 0.5;
    let altarZ = pos.z + 0.5;
    
    let nearbyPlayers = new ArrayList(); //JS arrays are a mess
    
    event.server.getAllLevels().forEach(dim => {
        dim.players.forEach(player => {
            let dx = player.getX() - altarX;
            let dy = player.getY() - altarY;
            let dz = player.getZ() - altarZ;
            let distance = Math.sqrt(dx*dx + dy*dy + dz*dz);

            if(distance <= RADIUS)
            {
                nearbyPlayers.add(player.getName().getString());
            }
        })
    })
    
    return nearbyPlayers;
}

function check_status(event) 
{
    let keys = altars.keySet().toArray();
    keys.forEach(block => {
        let level = altars.get(block)
        let pos = block.getPos();
        let dim = level.getBlock(pos).dimension;
        
        if(block.getType().match("mysticalagriculture:awakening_altar"))
        {
            let block_nbt = level.getBlock(pos).getEntityData();
            block_nbt.getAllKeys().forEach(nbt_data => {
                if(nbt_data.match("Active") && 
                   block_nbt.get(nbt_data).getAsString().match("1b") != null &&
                   !armor_stands.containsKey(`altar_${pos.x}_${pos.y}_${pos.z}`)
                )
                {
                    let players = getNearbyPlayers(event, pos);
                    
                    if(players.size() > 0)
                    {
                        switch (Math.floor(Math.random() * 4))
                        {
                            case 0:
                                ritual(0, event, dim, pos, players);
                            break;

                            case 1:
                                ritual(1, event, dim, pos, players);
                            break;

                            case 2:
                                ritual(2, event, dim, pos, players);
                            break;

                            case 3:
                                ritual(3, event, dim, pos, players);
                            break
                        
                            default:
                                break;
                        }
                    }
                    
                }
            });
        }
        else
        {
            altars.remove(k);
        }
    })
}


function storm(dim, pos, event)
{
    for(let i = 1; i < 7; i++)
    {
        let number = (10*i)
        event.server.scheduleInTicks(number, callback => {
            event.server.runCommandSilent(
                `execute in ${dim} run summon minecraft:lightning_bolt ${pos.x} ${pos.y + 2} ${pos.z}`
            )
        })
    }

    for(let i = 0; i < 40; i++)
    {
        event.server.scheduleInTicks((1 + i), callback => {
            event.server.runCommandSilent(
                `execute in ${dim} run particle minecraft:soul_fire_flame ${(pos.x + 3)} ${(pos.y + 2)} ${pos.z} 0.3 1.5 0.2 0 3 normal`
            )

            event.server.runCommandSilent(
                `execute in ${dim} run particle minecraft:soul_fire_flame ${(pos.x - 3)} ${(pos.y + 2)} ${pos.z} 0.3 1.5 0.2 0 3 normal`
            )

            event.server.runCommandSilent(
                `execute in ${dim} run particle minecraft:soul_fire_flame ${pos.x} ${(pos.y + 2)} ${(pos.z + 3)} 0.3 1.5 0.2 0 3 normal`
            )

            event.server.runCommandSilent(
                `execute in ${dim} run particle minecraft:soul_fire_flame ${pos.x} ${(pos.y + 2)} ${(pos.z - 3)} 0.3 1.5 0.2 0 3 normal`
            )
        })
    }
}

function ritual(number, event, dim, pos, players)
{
    event.server.runCommandSilent(
        `execute positioned ${pos.x} ${pos.y} ${pos.z} align xyz run summon armor_stand ${pos.x} ${pos.y} ${pos.z} {Tags:["altar_${pos.x}_${pos.y}_${pos.z}"],Invisible:1}`
    )
    if(number > 0 && number < 3)
    {
        let rotation_x = Math.floor(Math.random() * 50);
        event.server.runCommandSilent(
            `execute as @e[tag=altar_${pos.x}_${pos.y}_${pos.z}] at @s run tp @s ~ ~ ~ ~${rotation_x} ~`
        )
    }
    armor_stands.put(`altar_${pos.x}_${pos.y}_${pos.z}`, "1");

    if(number === 0)
    {
        storm(dim, pos, event);
        for(let i = 1; i < 10; i++)
        {
            let number = (10*i)
            event.server.scheduleInTicks(number, callback => {
                event.server.runCommandSilent(
                    `execute at @e[tag=altar_${pos.x}_${pos.y}_${pos.z}] run function mysticalagriculture:circle_cyan`
                )
            })
        }
        players.forEach(e => {
            event.server.runCommandSilent(`execute in ${dim} facing ${pos.x} ${pos.y} ${pos.z} run playsound minecraft:entity.wither.ambient master ${e} ${pos.x} ${pos.y} ${pos.z} 100 0.5`)
        })
        event.server.scheduleInTicks(10*11, callback => {
            event.server.runCommandSilent(
                `kill @e[tag=altar_${pos.x}_${pos.y}_${pos.z}]`
            )
            armor_stands.remove(`altar_${pos.x}_${pos.y}_${pos.z}`)
        })
    }

    if(number === 1)
    {
        for(let i = 1; i < 10; i++)
        {
            let number = (10*i)
            event.server.scheduleInTicks(number, callback => {
                event.server.runCommandSilent(
                    `execute at @e[tag=altar_${pos.x}_${pos.y}_${pos.z}] run function mysticalagriculture:circle_red`
                )
                event.server.runCommandSilent(
                    `execute as @e[tag=altar_${pos.x}_${pos.y}_${pos.z}] at @s run tp @s ~ ~ ~ ~2 ~`
                )
            })
        }
        players.forEach(e => {
            event.server.runCommandSilent(`execute in ${dim} facing ${pos.x} ${pos.y} ${pos.z} run playsound minecraft:entity.ghast.ambient master ${e} ${pos.x} ${pos.y} ${pos.z} 100 0.5`)
        })
        event.server.scheduleInTicks(10*11, callback => {
            event.server.runCommandSilent(
                `kill @e[tag=altar_${pos.x}_${pos.y}_${pos.z}]`
            )
            armor_stands.remove(`altar_${pos.x}_${pos.y}_${pos.z}`)
        })
    }

    if(number === 2)
    {
        for(let i = 1; i < 10; i++)
        {
            let number = (10*i)
            event.server.scheduleInTicks(number, callback => {
                event.server.runCommandSilent(
                    `execute at @e[tag=altar_${pos.x}_${pos.y}_${pos.z}] run function mysticalagriculture:circle_pink`
                )
                event.server.runCommandSilent(
                    `execute as @e[tag=altar_${pos.x}_${pos.y}_${pos.z}] at @s run tp @s ~ ~ ~ ~2 ~`
                )
            })
        }
        players.forEach(e => {
            event.server.runCommandSilent(`execute in ${dim} facing ${pos.x} ${pos.y} ${pos.z} run playsound ars_nouveau:gaia_family master ${e} ${pos.x} ${pos.y} ${pos.z} 100 0.5`)
        })
        event.server.scheduleInTicks(10*11, callback => {
            event.server.runCommandSilent(
                `kill @e[tag=altar_${pos.x}_${pos.y}_${pos.z}]`
            )
            armor_stands.remove(`altar_${pos.x}_${pos.y}_${pos.z}`)
        })

        for(let i = 1; i < 10; i++)
        {
            event.server.scheduleInTicks(i*5, callback => {
                event.server.runCommandSilent(
                    `execute in ${dim} positioned ${pos.x} ${pos.y-2} ${pos.z} run function mysticalagriculture:sphere`
                )
            })
            
        }
    }

    if(number === 3)
    {
        for(let i = 1; i < 10; i++)
        {
            let number = (5*i)
            event.server.scheduleInTicks(number, callback => {
                event.server.runCommandSilent(
                    `execute at @e[tag=altar_${pos.x}_${pos.y}_${pos.z}] run function mysticalagriculture:hidden`
                )
            })
        }
        players.forEach(e => {
            event.server.runCommandSilent(`execute in ${dim} facing ${pos.x} ${pos.y} ${pos.z} run playsound apotheosis:reforge master ${e} ${pos.x} ${pos.y} ${pos.z} 100 0.5`)
        })
        event.server.scheduleInTicks(5*11, callback => {
            event.server.runCommandSilent(
                `kill @e[tag=altar_${pos.x}_${pos.y}_${pos.z}]`
            )
            armor_stands.remove(`altar_${pos.x}_${pos.y}_${pos.z}`)
        })
    }
}


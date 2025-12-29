/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/

ServerEvents.recipes(catalyst => {
    const mmr = 'modular_machinery_reborn:';
    const mmr_mek = 'modular_machinery_reborn_mekanism:';

    // Helper function to create the shaped recipe
    // D = Input Port (Side), A = Center (Core), B = Top, C = Bottom
    const createPort = (input, output, core, top, bottom) => {
        catalyst.shaped(output, [
            'B B',
            'DAD',
            'C C'
        ], {
            D: input,
            A: core,
            B: top,
            C: bottom
        }).id(`catalyst:mmr/ports/${input}_to_${output}`);;
    };

    //energy
    const energyTiers = [
        { id: 'small',      next: 'normal',    cable: 'mekanism:advanced_universal_cable', hopper: 'powah:energy_hopper_niotic' },
        { id: 'normal',     next: 'reinforced',cable: 'mekanism:advanced_universal_cable', hopper: 'powah:energy_hopper_niotic' },
        { id: 'reinforced', next: 'big',       cable: 'mekanism:elite_universal_cable',    hopper: 'powah:energy_hopper_spirited' },
        { id: 'big',        next: 'huge',      cable: 'mekanism:elite_universal_cable',    hopper: 'powah:energy_hopper_spirited' },
        { id: 'huge',       next: 'ludicrous', cable: 'mekanism:ultimate_universal_cable', hopper: 'powah:energy_hopper_nitro' },
        { id: 'ludicrous',  next: 'ultimate',  cable: 'mekanism:ultimate_universal_cable', hopper: 'powah:energy_hopper_nitro' }
    ];

    energyTiers.forEach(t => {
        createPort(`${mmr}energyinputhatch_${t.id}`,  `${mmr}energyinputhatch_${t.next}`,  'minecraft:redstone_block', t.cable, t.hopper);
        createPort(`${mmr}energyoutputhatch_${t.id}`, `${mmr}energyoutputhatch_${t.next}`, 'minecraft:redstone_block', t.cable, t.hopper);
    });

    //item
    // Input: Top = Hopper, Bottom = Chest | Output: Top = Chest, Bottom = Hopper
    const itemTiers = [
        { id: 'small',      next: 'normal',     upg: 'pipez:basic_upgrade' },
        { id: 'normal',     next: 'reinforced', upg: 'pipez:basic_upgrade' },
        { id: 'reinforced', next: 'big',        upg: 'pipez:improved_upgrade' },
        { id: 'big',        next: 'huge',       upg: 'pipez:advanced_upgrade' },
        { id: 'huge',       next: 'ludicrous',  upg: 'pipez:ultimate_upgrade' }
    ];

    itemTiers.forEach(t => {
        createPort(`${mmr}inputbus_${t.id}`,  `${mmr}inputbus_${t.next}`,  t.upg, 'minecraft:hopper', '#c:chests');
        createPort(`${mmr}outputbus_${t.id}`, `${mmr}outputbus_${t.next}`, t.upg, '#c:chests', 'minecraft:hopper');
    });

    //fluid
    // Input: Top = Pipe, Bottom = Tank | Output: Top = Tank, Bottom = Pipe
    const fluidTiers = [
        { id: 'small',      next: 'normal',     upg: 'pipez:basic_upgrade',    pipe: 'mekanism:basic_mechanical_pipe',    tank: 'mekanism:basic_fluid_tank' },
        { id: 'normal',     next: 'reinforced', upg: 'pipez:basic_upgrade',    pipe: 'mekanism:basic_mechanical_pipe',    tank: 'mekanism:basic_fluid_tank' },
        { id: 'reinforced', next: 'big',        upg: 'pipez:improved_upgrade', pipe: 'mekanism:advanced_mechanical_pipe', tank: 'mekanism:advanced_fluid_tank' },
        { id: 'big',        next: 'huge',       upg: 'pipez:improved_upgrade', pipe: 'mekanism:advanced_mechanical_pipe', tank: 'mekanism:advanced_fluid_tank' },
        { id: 'huge',       next: 'ludicrous',  upg: 'pipez:advanced_upgrade', pipe: 'mekanism:elite_mechanical_pipe',    tank: 'mekanism:elite_fluid_tank' },
        { id: 'ludicrous',  next: 'vacuum',     upg: 'pipez:ultimate_upgrade', pipe: 'mekanism:ultimate_mechanical_pipe', tank: 'mekanism:ultimate_fluid_tank' }
    ];

    fluidTiers.forEach(t => {
        createPort(`${mmr}fluidinputhatch_${t.id}`,  `${mmr}fluidinputhatch_${t.next}`,  t.upg, t.pipe, t.tank);
        createPort(`${mmr}fluidoutputhatch_${t.id}`, `${mmr}fluidoutputhatch_${t.next}`, t.upg, t.tank, t.pipe);
    });

    //chemical
    // Base casing recipes
    createPort(`${mmr}casing_plain`, `${mmr_mek}chemicalinputhatch_small`,  'pipez:gas_pipe', 'pipez:gas_pipe', 'pipez:gas_pipe');
    createPort(`${mmr}casing_plain`, `${mmr_mek}chemicaloutputhatch_small`, 'pipez:gas_pipe', 'pipez:gas_pipe', 'pipez:gas_pipe');

    // Input: Top = Tube, Bottom = Tank | Output: Top = Tank, Bottom = Tube
    const chemTiers = [
        { id: 'small',      next: 'normal',     upg: 'pipez:basic_upgrade',    tube: 'mekanism:basic_pressurized_tube',    tank: 'mekanism:basic_chemical_tank' },
        { id: 'normal',     next: 'reinforced', upg: 'pipez:basic_upgrade',    tube: 'mekanism:basic_pressurized_tube',    tank: 'mekanism:basic_chemical_tank' },
        { id: 'reinforced', next: 'big',        upg: 'pipez:improved_upgrade', tube: 'mekanism:advanced_pressurized_tube', tank: 'mekanism:advanced_chemical_tank' },
        { id: 'big',        next: 'huge',       upg: 'pipez:improved_upgrade', tube: 'mekanism:advanced_pressurized_tube', tank: 'mekanism:advanced_chemical_tank' },
        { id: 'huge',       next: 'ludicrous',  upg: 'pipez:advanced_upgrade', tube: 'mekanism:elite_pressurized_tube',    tank: 'mekanism:elite_chemical_tank' },
        { id: 'ludicrous',  next: 'vacuum',     upg: 'pipez:ultimate_upgrade', tube: 'mekanism:ultimate_pressurized_tube', tank: 'mekanism:ultimate_chemical_tank' }
    ];

    chemTiers.forEach(t => {
        createPort(`${mmr_mek}chemicalinputhatch_${t.id}`,  `${mmr_mek}chemicalinputhatch_${t.next}`,  t.upg, t.tube, t.tank);
        createPort(`${mmr_mek}chemicaloutputhatch_${t.id}`, `${mmr_mek}chemicaloutputhatch_${t.next}`, t.upg, t.tank, t.tube);
    });

    //misc
    const miscRecipes = [
        ['minecraft:redstone_block',            `${mmr}casing_vent`,           `${mmr}casing_plain`,      'stevescarts:component_cleaning_fan', 'stevescarts:component_cleaning_fan'],
        ['mekanism:ultimate_control_circuit',   `${mmr}casing_circuitry`,      `${mmr}casing_plain`,      'railcraft:radio_circuit',            'railcraft:controller_circuit'],
        [`${mmr}casing_plain`,                  `${mmr}parallel_hatch_basic`,  'mekanism:robit',          'mekanism:robit',                     'stevescarts:component_cleaning_fan'],
        [`${mmr}parallel_hatch_basic`,          `${mmr}parallel_hatch_medium`, `${mmr}casing_reinforced`, `${mmr}casing_reinforced`,            `${mmr}casing_reinforced`],
        ['minecraft:paper',                     `${mmr}blueprint`,             `${mmr}casing_plain`,      'minecraft:blue_dye',                 'minecraft:blue_dye']
    ];

    miscRecipes.forEach(r => {
        // createPort(input, output, core, top, bottom)
        createPort(r[0], r[1], r[2], r[3], r[4]);
    });
});

ItemEvents.modifyTooltips(catalyst => {
    // Define tank sizes for each tier
    const tankSizes = {
        tiny: 1000,
        small: 10000,
        normal: 50000,
        reinforced: 200000,
        big: 1000000,
        huge: 5000000,
        ludicrous: 20000000,
        vacuum: 2147483647
    };

    // Process both input and output hatches for all tiers
    ['input', 'output'].forEach(ioType => {
        Object.keys(tankSizes).forEach(tier => {
            const targetId = `modular_machinery_reborn_mekanism:chemical${ioType}hatch_${tier}`;
            
            if (Item.exists(targetId)) {
                catalyst.modify(targetId, text => {
                    text.removeLine(1);
                    text.add(Text.of("Stores ").append(Text.of(tankSizes[tier]).red()).append(Text.of(" chemicals")));
                });
            }
        });
    });
});
/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/

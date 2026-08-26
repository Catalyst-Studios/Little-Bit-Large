/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
ServerEvents.recipes(catalyst => {
    let recipes = [
        {
            time: 500,
            energy: 10000000,
            outputs: [
                { id: "modular_machinery_reborn:energyinputhatch_huge", count: 1, chance: 1.0 },
                { id: "eternalores:tachyarite_block", count: 2, chance: 0.75 }
            ],
            inputs: [
                { id: "modular_machinery_reborn:casing_reinforced", count: 6, chance: 1.0 },
                { id: "curvy_pipes:huge_energy_pipe", count: 4, chance: 1.0 },
                { id: "eternalores:plate_eternal_dark", count: 20, chance: 1.0 },
                { id: "eternalores:rod_eternal_light", count: 20, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 300,
            energy: 20000000,
            outputs: [
                { id: "modular_machinery_reborn:energyinputhatch_ludicrous", count: 1, chance: 1.0 },
                { id: "eternalores:tachyarite_block", count: 2, chance: 0.75 }
            ],
            inputs: [
                { id: "modular_machinery_reborn:energyinputhatch_huge", count: 1, chance: 1.0 },
                { id: "modular_machinery_reborn:casing_reinforced", count: 3, chance: 1.0 },
                { id: "eternalores:ultimatitanium_foil", count: 10, chance: 1.0 },
                { id: "eternalores:rod_shadowsteel", count: 10, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 50000000,
            outputs: [
                { id: "modular_machinery_reborn:energyinputhatch_ultimate", count: 1, chance: 1.0 },
                { id: "eternalores:tachyarite_block", count: 2, chance: 0.75 }
            ],
            inputs: [
                { id: "modular_machinery_reborn:energyinputhatch_ludicrous", count: 1, chance: 1.0 },
                { id: "modular_machinery_reborn:casing_reinforced", count: 1, chance: 1.0 },
                { id: "eternalores:etherium_ingot", count: 1, chance: 1.0 },
                { id: "eternalores:rod_sculkite", count: 1, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 500,
            energy: 10000000,
            outputs: [
                { id: "modular_machinery_reborn:energyoutputhatch_huge", count: 1, chance: 1.0 },
                { id: "eternalores:tachyarite_block", count: 2, chance: 0.75 }
            ],
            inputs: [
                { id: "modular_machinery_reborn:casing_reinforced", count: 6, chance: 1.0 },
                { id: "curvy_pipes:huge_energy_pipe", count: 4, chance: 1.0 },
                { id: "eternalores:plate_eternal_dark", count: 20, chance: 1.0 },
                { id: "eternalores:rod_eternal_light", count: 20, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 300,
            energy: 20000000,
            outputs: [
                { id: "modular_machinery_reborn:energyoutputhatch_ludicrous", count: 1, chance: 1.0 },
                { id: "eternalores:tachyarite_block", count: 2, chance: 0.75 }
            ],
            inputs: [
                { id: "modular_machinery_reborn:energyoutputhatch_huge", count: 1, chance: 1.0 },
                { id: "modular_machinery_reborn:casing_reinforced", count: 3, chance: 1.0 },
                { id: "eternalores:ultimatitanium_foil", count: 10, chance: 1.0 },
                { id: "eternalores:rod_shadowsteel", count: 10, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 50000000,
            outputs: [
                { id: "modular_machinery_reborn:energyoutputhatch_ultimate", count: 1, chance: 1.0 },
                { id: "eternalores:tachyarite_block", count: 2, chance: 0.75 }
            ],
            inputs: [
                { id: "modular_machinery_reborn:energyoutputhatch_ludicrous", count: 1, chance: 1.0 },
                { id: "modular_machinery_reborn:casing_reinforced", count: 1, chance: 1.0 },
                { id: "eternalores:etherium_ingot", count: 1, chance: 1.0 },
                { id: "eternalores:rod_sculkite", count: 1, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 400,
            energy: 10000000,
            outputs: [
                { id: "modular_machinery_reborn:inputbus_big", count: 1, chance: 1.0 },
                { id: "eternalores:tachyarite_block", count: 2, chance: 0.75 }
            ],
            inputs: [
                { id: "modular_machinery_reborn:casing_reinforced", count: 6, chance: 1.0 },
                { id: "minecraft:chest", count: 64, chance: 1.0 },
                { id: 'eternalores:plate_tungsten', count: 20, chance: 1.0 },
                { id: 'eternalores:rod_uraninite', count: 20, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 250,
            energy: 20000000,
            outputs: [
                { id: "modular_machinery_reborn:inputbus_huge", count: 1, chance: 1.0 },
                { id: "eternalores:tachyarite_block", count: 2, chance: 0.75 }
            ],
            inputs: [
                { id: "modular_machinery_reborn:inputbus_big", count: 1, chance: 1.0 },
                { id: "modular_machinery_reborn:casing_reinforced", count: 3, chance: 1.0 },
                { id: "eternalores:plate_eternal_dark", count: 20, chance: 1.0 },
                { id: "eternalores:rod_eternal_light", count: 20, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 100,
            energy: 80000000,
            outputs: [
                { id: "modular_machinery_reborn:inputbus_ludicrous", count: 1, chance: 1.0 },
                { id: "eternalores:tachyarite_block", count: 2, chance: 0.75 }
            ],
            inputs: [
                { id: "modular_machinery_reborn:inputbus_huge", count: 1, chance: 1.0 },
                { id: "modular_machinery_reborn:casing_reinforced", count: 1, chance: 1.0 },
                { id: "eternalores:ultimatitanium_foil", count: 10, chance: 1.0 },
                { id: "eternalores:rod_shadowsteel", count: 10, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 400,
            energy: 10000000,
            outputs: [
                { id: "modular_machinery_reborn:outputbus_big", count: 1, chance: 1.0 },
                { id: "eternalores:tachyarite_block", count: 2, chance: 0.75 }
            ],
            inputs: [
                { id: "modular_machinery_reborn:casing_reinforced", count: 6, chance: 1.0 },
                { id: "minecraft:chest", count: 64, chance: 1.0 },
                { id: 'eternalores:plate_tungsten', count: 20, chance: 1.0 },
                { id: 'eternalores:rod_uraninite', count: 20, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 250,
            energy: 20000000,
            outputs: [
                { id: "modular_machinery_reborn:outputbus_huge", count: 1, chance: 1.0 },
                { id: "eternalores:tachyarite_block", count: 2, chance: 0.75 }
            ],
            inputs: [
                { id: "modular_machinery_reborn:outputbus_big", count: 1, chance: 1.0 },
                { id: "modular_machinery_reborn:casing_reinforced", count: 3, chance: 1.0 },
                { id: "eternalores:plate_eternal_dark", count: 20, chance: 1.0 },
                { id: "eternalores:rod_eternal_light", count: 20, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 100,
            energy: 80000000,
            outputs: [
                { id: "modular_machinery_reborn:outputbus_ludicrous", count: 1, chance: 1.0 },
                { id: "eternalores:tachyarite_block", count: 2, chance: 0.75 }
            ],
            inputs: [
                { id: "modular_machinery_reborn:outputbus_huge", count: 1, chance: 1.0 },
                { id: "modular_machinery_reborn:casing_reinforced", count: 1, chance: 1.0 },
                { id: "eternalores:ultimatitanium_foil", count: 10, chance: 1.0 },
                { id: "eternalores:rod_shadowsteel", count: 10, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 450,
            energy: 10000000,
            outputs: [
                { id: "modular_machinery_reborn:fluidinputhatch_huge", count: 1, chance: 1.0 },
                { id: "eternalores:tachyarite_block", count: 2, chance: 0.75 }
            ],
            inputs: [
                { id: "modular_machinery_reborn:casing_reinforced", count: 6, chance: 1.0 },
                { id: "mekanism:ultimate_fluid_tank", count: 4, chance: 1.0 },
                { id: "eternalores:plate_eternal_dark", count: 20, chance: 1.0 },
                { id: "eternalores:rod_eternal_light", count: 20, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 250,
            energy: 22000000,
            outputs: [
                { id: "modular_machinery_reborn:fluidinputhatch_ludicrous", count: 1, chance: 1.0 },
                { id: "eternalores:tachyarite_block", count: 2, chance: 0.75 }
            ],
            inputs: [
                { id: "modular_machinery_reborn:fluidinputhatch_huge", count: 1, chance: 1.0 },
                { id: "modular_machinery_reborn:casing_reinforced", count: 3, chance: 1.0 },
                { id: "eternalores:ultimatitanium_foil", count: 10, chance: 1.0 },
                { id: "eternalores:rod_shadowsteel", count: 10, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 120,
            energy: 60000000,
            outputs: [
                { id: "modular_machinery_reborn:fluidinputhatch_vacuum", count: 1, chance: 1.0 },
                { id: "eternalores:tachyarite_block", count: 2, chance: 0.75 }
            ],
            inputs: [
                { id: "modular_machinery_reborn:fluidinputhatch_ludicrous", count: 1, chance: 1.0 },
                { id: "modular_machinery_reborn:casing_reinforced", count: 1, chance: 1.0 },
                { id: "eternalores:etherium_ingot", count: 1, chance: 1.0 },
                { id: "eternalores:rod_sculkite", count: 1, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 450,
            energy: 10000000,
            outputs: [
                { id: "modular_machinery_reborn:fluidoutputhatch_huge", count: 1, chance: 1.0 },
                { id: "eternalores:tachyarite_block", count: 2, chance: 0.75 }
            ],
            inputs: [
                { id: "modular_machinery_reborn:casing_reinforced", count: 6, chance: 1.0 },
                { id: "mekanism:ultimate_fluid_tank", count: 4, chance: 1.0 },
                { id: "eternalores:plate_eternal_dark", count: 20, chance: 1.0 },
                { id: "eternalores:rod_eternal_light", count: 20, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 250,
            energy: 22000000,
            outputs: [
                { id: "modular_machinery_reborn:fluidoutputhatch_ludicrous", count: 1, chance: 1.0 },
                { id: "eternalores:tachyarite_block", count: 2, chance: 0.75 }
            ],
            inputs: [
                { id: "modular_machinery_reborn:fluidoutputhatch_huge", count: 1, chance: 1.0 },
                { id: "modular_machinery_reborn:casing_reinforced", count: 3, chance: 1.0 },
                { id: "eternalores:ultimatitanium_foil", count: 10, chance: 1.0 },
                { id: "eternalores:rod_shadowsteel", count: 10, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 120,
            energy: 60000000,
            outputs: [
                { id: "modular_machinery_reborn:fluidoutputhatch_vacuum", count: 1, chance: 1.0 },
                { id: "eternalores:tachyarite_block", count: 2, chance: 0.75 }
            ],
            inputs: [
                { id: "modular_machinery_reborn:fluidoutputhatch_ludicrous", count: 1, chance: 1.0 },
                { id: "modular_machinery_reborn:casing_reinforced", count: 1, chance: 1.0 },
                { id: "eternalores:etherium_ingot", count: 1, chance: 1.0 },
                { id: "eternalores:rod_sculkite", count: 1, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 500,
            energy: 12000000,
            outputs: [
                { id: "modular_machinery_reborn_mekanism:chemicalinputhatch_huge", count: 1, chance: 1.0 },
                { id: "eternalores:tachyarite_block", count: 2, chance: 0.75 }
            ],
            inputs: [
                { id: "modular_machinery_reborn:casing_reinforced", count: 6, chance: 1.0 },
                { id: "mekanism:ultimate_chemical_tank", count: 4, chance: 1.0 },
                { id: "eternalores:plate_eternal_dark", count: 20, chance: 1.0 },
                { id: "eternalores:rod_eternal_light", count: 20, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 300,
            energy: 25000000,
            outputs: [
                { id: "modular_machinery_reborn_mekanism:chemicalinputhatch_ludicrous", count: 1, chance: 1.0 },
                { id: "eternalores:tachyarite_block", count: 2, chance: 0.75 }
            ],
            inputs: [
                { id: "modular_machinery_reborn_mekanism:chemicalinputhatch_huge", count: 1, chance: 1.0 },
                { id: "modular_machinery_reborn:casing_reinforced", count: 3, chance: 1.0 },
                { id: "eternalores:ultimatitanium_foil", count: 10, chance: 1.0 },
                { id: "eternalores:rod_shadowsteel", count: 10, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 60000000,
            outputs: [
                { id: "modular_machinery_reborn_mekanism:chemicalinputhatch_vacuum", count: 1, chance: 1.0 },
                { id: "eternalores:tachyarite_block", count: 2, chance: 0.75 }
            ],
            inputs: [
                { id: "modular_machinery_reborn_mekanism:chemicalinputhatch_ludicrous", count: 1, chance: 1.0 },
                { id: "modular_machinery_reborn:casing_reinforced", count: 1, chance: 1.0 },
                { id: "eternalores:etherium_ingot", count: 1, chance: 1.0 },
                { id: "eternalores:rod_sculkite", count: 1, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 500,
            energy: 12000000,
            outputs: [
                { id: "modular_machinery_reborn_mekanism:chemicaloutputhatch_huge", count: 1, chance: 1.0 },
                { id: "eternalores:tachyarite_block", count: 2, chance: 0.75 }
            ],
            inputs: [
                { id: "modular_machinery_reborn:casing_reinforced", count: 6, chance: 1.0 },
                { id: "mekanism:ultimate_chemical_tank", count: 4, chance: 1.0 },
                { id: "eternalores:plate_eternal_dark", count: 20, chance: 1.0 },
                { id: "eternalores:rod_eternal_light", count: 20, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 300,
            energy: 25000000,
            outputs: [
                { id: "modular_machinery_reborn_mekanism:chemicaloutputhatch_ludicrous", count: 1, chance: 1.0 },
                { id: "eternalores:tachyarite_block", count: 2, chance: 0.75 }
            ],
            inputs: [
                { id: "modular_machinery_reborn_mekanism:chemicaloutputhatch_huge", count: 1, chance: 1.0 },
                { id: "modular_machinery_reborn:casing_reinforced", count: 3, chance: 1.0 },
                { id: "eternalores:ultimatitanium_foil", count: 10, chance: 1.0 },
                { id: "eternalores:rod_shadowsteel", count: 10, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 60000000,
            outputs: [
                { id: "modular_machinery_reborn_mekanism:chemicaloutputhatch_vacuum", count: 1, chance: 1.0 },
                { id: "eternalores:tachyarite_block", count: 2, chance: 0.75 }
            ],
            inputs: [
                { id: "modular_machinery_reborn_mekanism:chemicaloutputhatch_ludicrous", count: 1, chance: 1.0 },
                { id: "modular_machinery_reborn:casing_reinforced", count: 1, chance: 1.0 },
                { id: "eternalores:etherium_ingot", count: 1, chance: 1.0 },
                { id: "eternalores:rod_sculkite", count: 1, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 350,
            energy: 15000000,
            outputs: [
                { id: "modular_machinery_reborn_ars:sourceinputhatch_huge", count: 1, chance: 1.0 },
                { id: "eternalores:tachyarite_block", count: 2, chance: 0.75 }
            ],
            inputs: [
                { id: "modular_machinery_reborn:casing_reinforced", count: 6, chance: 1.0 },
                { id: "arseng:source_storage_cell_256k", count: 1, chance: 1.0 },
                { id: "eternalores:plate_eternal_dark", count: 20, chance: 1.0 },
                { id: "eternalores:rod_eternal_light", count: 20, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 350,
            energy: 15000000,
            outputs: [
                { id: "modular_machinery_reborn_ars:sourceinputhatch_huge", count: 1, chance: 1.0 },
                { id: "eternalores:tachyarite_block", count: 2, chance: 0.75 }
            ],
            inputs: [
                { id: "modular_machinery_reborn:casing_reinforced", count: 6, chance: 1.0 },
                { id: "refinedtypes:8192b_source_storage_part", count: 1, chance: 1.0 },
                { id: "eternalores:plate_eternal_dark", count: 20, chance: 1.0 },
                { id: "eternalores:rod_eternal_light", count: 20, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 30000000,
            outputs: [
                { id: "modular_machinery_reborn_ars:sourceinputhatch_ludicrous", count: 1, chance: 1.0 },
                { id: "eternalores:tachyarite_block", count: 2, chance: 0.75 }
            ],
            inputs: [
                { id: "modular_machinery_reborn_ars:sourceinputhatch_huge", count: 1, chance: 1.0 },
                { id: "modular_machinery_reborn:casing_reinforced", count: 3, chance: 1.0 },
                { id: "eternalores:ultimatitanium_foil", count: 10, chance: 1.0 },
                { id: "eternalores:rod_shadowsteel", count: 10, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 100,
            energy: 85000000,
            outputs: [
                { id: "modular_machinery_reborn_ars:sourceinputhatch_vacuum", count: 1, chance: 1.0 },
                { id: "eternalores:tachyarite_block", count: 2, chance: 0.75 }
            ],
            inputs: [
                { id: "modular_machinery_reborn_ars:sourceinputhatch_ludicrous", count: 1, chance: 1.0 },
                { id: "modular_machinery_reborn:casing_reinforced", count: 1, chance: 1.0 },
                { id: "eternalores:etherium_ingot", count: 1, chance: 1.0 },
                { id: "eternalores:rod_sculkite", count: 1, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 350,
            energy: 15000000,
            outputs: [
                { id: "modular_machinery_reborn_ars:sourceoutputhatch_huge", count: 1, chance: 1.0 },
                { id: "eternalores:tachyarite_block", count: 2, chance: 0.75 }
            ],
            inputs: [
                { id: "modular_machinery_reborn:casing_reinforced", count: 6, chance: 1.0 },
                { id: "arseng:source_storage_cell_256k", count: 1, chance: 1.0 },
                { id: "eternalores:plate_eternal_dark", count: 20, chance: 1.0 },
                { id: "eternalores:rod_eternal_light", count: 20, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 350,
            energy: 15000000,
            outputs: [
                { id: "modular_machinery_reborn_ars:sourceoutputhatch_huge", count: 1, chance: 1.0 },
                { id: "eternalores:tachyarite_block", count: 2, chance: 0.75 }
            ],
            inputs: [
                { id: "modular_machinery_reborn:casing_reinforced", count: 6, chance: 1.0 },
                { id: "refinedtypes:8192b_source_storage_part", count: 1, chance: 1.0 },
                { id: "eternalores:plate_eternal_dark", count: 20, chance: 1.0 },
                { id: "eternalores:rod_eternal_light", count: 20, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 30000000,
            outputs: [
                { id: "modular_machinery_reborn_ars:sourceoutputhatch_ludicrous", count: 1, chance: 1.0 },
                { id: "eternalores:tachyarite_block", count: 2, chance: 0.75 }
            ],
            inputs: [
                { id: "modular_machinery_reborn_ars:sourceoutputhatch_huge", count: 1, chance: 1.0 },
                { id: "modular_machinery_reborn:casing_reinforced", count: 3, chance: 1.0 },
                { id: "eternalores:ultimatitanium_foil", count: 10, chance: 1.0 },
                { id: "eternalores:rod_shadowsteel", count: 10, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 100,
            energy: 85000000,
            outputs: [
                { id: "modular_machinery_reborn_ars:sourceoutputhatch_vacuum", count: 1, chance: 1.0 },
                { id: "eternalores:tachyarite_block", count: 2, chance: 0.75 }
            ],
            inputs: [
                { id: "modular_machinery_reborn_ars:sourceoutputhatch_ludicrous", count: 1, chance: 1.0 },
                { id: "modular_machinery_reborn:casing_reinforced", count: 1, chance: 1.0 },
                { id: "eternalores:etherium_ingot", count: 1, chance: 1.0 },
                { id: "eternalores:rod_sculkite", count: 1, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },

        //Powah!
        {
            time: 50,
            energy: 3000000,
            outputs: [{ id: "powah:energy_cell_niotic", count: 1, chance: 1.0 }],
            inputs: [
                { id: "powah:niotic_crystal_block", count: 4, chance: 1.0 },
                { id: 'powah:capacitor_blazing', count: 4, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 50,
            energy: 3000000,
            outputs: [{ id: "powah:energy_cell_spirited", count: 1, chance: 1.0 }],
            inputs: [
                { id: "powah:niotic_crystal_block", count: 4, chance: 1.0 },
                { id: "powah:spirited_crystal_block", count: 2, chance: 1.0 },
                { id: 'powah:capacitor_niotic', count: 4, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 50,
            energy: 3000000,
            outputs: [{ id: "powah:energy_cell_nitro", count: 1, chance: 1.0 }],
            inputs: [
                { id: "powah:niotic_crystal_block", count: 4, chance: 1.0 },
                { id: "powah:spirited_crystal_block", count: 2, chance: 1.0 },
                { id: 'powah:nitro_crystal_block', count: 1, chance: 1.0 },
                { id: 'powah:capacitor_spirited', count: 4, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 50,
            energy: 3000000,
            outputs: [{ id: "powah:ender_cell_niotic", count: 1, chance: 1.0 }],
            inputs: [
                { id: "powah:niotic_crystal_block", count: 4, chance: 1.0 },
                { id: 'powah:ender_core', count: 4, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 50,
            energy: 3000000,
            outputs: [{ id: "powah:ender_cell_spirited", count: 1, chance: 1.0 }],
            inputs: [
                { id: "powah:niotic_crystal_block", count: 4, chance: 1.0 },
                { id: "powah:spirited_crystal_block", count: 2, chance: 1.0 },
                { id: 'powah:ender_core', count: 4, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 50,
            energy: 3000000,
            outputs: [{ id: "powah:ender_cell_nitro", count: 1, chance: 1.0 }],
            inputs: [
                { id: "powah:niotic_crystal_block", count: 4, chance: 1.0 },
                { id: "powah:spirited_crystal_block", count: 2, chance: 1.0 },
                { id: 'powah:nitro_crystal_block', count: 1, chance: 1.0 },
                { id: 'powah:ender_core', count: 4, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 50,
            energy: 3000000,
            outputs: [{ id: "powah:energy_cable_niotic", count: 64, chance: 1.0 }],
            inputs: [
                { id: "powah:niotic_crystal_block", count: 4, chance: 1.0 },
                { id: 'powah:dielectric_paste', count: 4, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 50,
            energy: 3000000,
            outputs: [{ id: "powah:energy_cable_spirited", count: 64, chance: 1.0 }],
            inputs: [
                { id: "powah:niotic_crystal_block", count: 4, chance: 1.0 },
                { id: "powah:spirited_crystal_block", count: 2, chance: 1.0 },
                { id: 'powah:dielectric_paste', count: 4, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 50,
            energy: 3000000,
            outputs: [{ id: "powah:energy_cable_nitro", count: 64, chance: 1.0 }],
            inputs: [
                { id: "powah:niotic_crystal_block", count: 4, chance: 1.0 },
                { id: "powah:spirited_crystal_block", count: 2, chance: 1.0 },
                { id: 'powah:nitro_crystal_block', count: 1, chance: 1.0 },
                { id: 'powah:dielectric_paste', count: 4, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 50,
            energy: 3000000,
            outputs: [{ id: "powah:ender_gate_niotic", count: 4, chance: 1.0 }],
            inputs: [
                { id: "powah:niotic_crystal_block", count: 4, chance: 1.0 },
                { id: 'minecraft:obsidian', count: 4, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 50,
            energy: 3000000,
            outputs: [{ id: "powah:ender_gate_spirited", count: 4, chance: 1.0 }],
            inputs: [
                { id: "powah:niotic_crystal_block", count: 4, chance: 1.0 },
                { id: "powah:spirited_crystal_block", count: 2, chance: 1.0 },
                { id: 'minecraft:obsidian', count: 4, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 50,
            energy: 3000000,
            outputs: [{ id: "powah:ender_gate_nitro", count: 4, chance: 1.0 }],
            inputs: [
                { id: "powah:niotic_crystal_block", count: 4, chance: 1.0 },
                { id: "powah:spirited_crystal_block", count: 2, chance: 1.0 },
                { id: 'powah:nitro_crystal_block', count: 1, chance: 1.0 },
                { id: 'minecraft:obsidian', count: 4, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 50,
            energy: 3000000,
            outputs: [{ id: "powah:energizing_rod_niotic", count: 2, chance: 1.0 }],
            inputs: [
                { id: "powah:niotic_crystal_block", count: 4, chance: 1.0 },
                { id: 'powah:dielectric_casing', count: 1, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 50,
            energy: 3000000,
            outputs: [{ id: "powah:energizing_rod_spirited", count: 2, chance: 1.0 }],
            inputs: [
                { id: "powah:niotic_crystal_block", count: 4, chance: 1.0 },
                { id: "powah:spirited_crystal_block", count: 2, chance: 1.0 },
                { id: 'powah:dielectric_casing', count: 1, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 50,
            energy: 3000000,
            outputs: [{ id: "powah:energizing_rod_nitro", count: 2, chance: 1.0 }],
            inputs: [
                { id: "powah:niotic_crystal_block", count: 4, chance: 1.0 },
                { id: "powah:spirited_crystal_block", count: 2, chance: 1.0 },
                { id: 'powah:nitro_crystal_block', count: 1, chance: 1.0 },
                { id: 'powah:dielectric_casing', count: 1, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 50,
            energy: 3000000,
            outputs: [{ id: "powah:furnator_niotic", count: 1, chance: 1.0 }],
            inputs: [
                { id: "powah:niotic_crystal_block", count: 4, chance: 1.0 },
                { id: 'minecraft:blast_furnace', count: 10, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 50,
            energy: 3000000,
            outputs: [{ id: "powah:furnator_spirited", count: 1, chance: 1.0 }],
            inputs: [
                { id: "powah:niotic_crystal_block", count: 4, chance: 1.0 },
                { id: "powah:spirited_crystal_block", count: 2, chance: 1.0 },
                { id: 'minecraft:blast_furnace', count: 10, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 50,
            energy: 3000000,
            outputs: [{ id: "powah:furnator_nitro", count: 1, chance: 1.0 }],
            inputs: [
                { id: "powah:niotic_crystal_block", count: 4, chance: 1.0 },
                { id: "powah:spirited_crystal_block", count: 2, chance: 1.0 },
                { id: 'powah:nitro_crystal_block', count: 1, chance: 1.0 },
                { id: 'minecraft:blast_furnace', count: 10, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 50,
            energy: 3000000,
            outputs: [{ id: "powah:magmator_niotic", count: 1, chance: 1.0 }],
            inputs: [
                { id: "powah:niotic_crystal_block", count: 4, chance: 1.0 },
                { id: 'minecraft:magma_block', count: 10, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 50,
            energy: 3000000,
            outputs: [{ id: "powah:magmator_spirited", count: 1, chance: 1.0 }],
            inputs: [
                { id: "powah:niotic_crystal_block", count: 4, chance: 1.0 },
                { id: "powah:spirited_crystal_block", count: 2, chance: 1.0 },
                { id: 'minecraft:magma_block', count: 10, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 50,
            energy: 3000000,
            outputs: [{ id: "powah:magmator_nitro", count: 1, chance: 1.0 }],
            inputs: [
                { id: "powah:niotic_crystal_block", count: 4, chance: 1.0 },
                { id: "powah:spirited_crystal_block", count: 2, chance: 1.0 },
                { id: 'powah:nitro_crystal_block', count: 1, chance: 1.0 },
                { id: 'minecraft:magma_block', count: 10, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 50,
            energy: 3000000,
            outputs: [{ id: "powah:thermo_generator_niotic", count: 1, chance: 1.0 }],
            inputs: [
                { id: "powah:niotic_crystal_block", count: 4, chance: 1.0 },
                { id: 'powah:thermoelectric_plate', count: 10, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 50,
            energy: 3000000,
            outputs: [{ id: "powah:thermo_generator_spirited", count: 1, chance: 1.0 }],
            inputs: [
                { id: "powah:niotic_crystal_block", count: 4, chance: 1.0 },
                { id: "powah:spirited_crystal_block", count: 2, chance: 1.0 },
                { id: 'powah:thermoelectric_plate', count: 10, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 50,
            energy: 3000000,
            outputs: [{ id: "powah:thermo_generator_nitro", count: 1, chance: 1.0 }],
            inputs: [
                { id: "powah:niotic_crystal_block", count: 4, chance: 1.0 },
                { id: "powah:spirited_crystal_block", count: 2, chance: 1.0 },
                { id: 'powah:nitro_crystal_block', count: 1, chance: 1.0 },
                { id: 'powah:thermoelectric_plate', count: 10, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 50,
            energy: 3000000,
            outputs: [{ id: "powah:solar_panel_niotic", count: 1, chance: 1.0 }],
            inputs: [
                { id: "powah:niotic_crystal_block", count: 4, chance: 1.0 },
                { id: 'powah:photoelectric_pane', count: 32, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 50,
            energy: 3000000,
            outputs: [{ id: "powah:solar_panel_spirited", count: 1, chance: 1.0 }],
            inputs: [
                { id: "powah:niotic_crystal_block", count: 4, chance: 1.0 },
                { id: "powah:spirited_crystal_block", count: 2, chance: 1.0 },
                { id: 'powah:photoelectric_pane', count: 32, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 50,
            energy: 3000000,
            outputs: [{ id: "powah:solar_panel_nitro", count: 1, chance: 1.0 }],
            inputs: [
                { id: "powah:niotic_crystal_block", count: 4, chance: 1.0 },
                { id: "powah:spirited_crystal_block", count: 2, chance: 1.0 },
                { id: 'powah:nitro_crystal_block', count: 1, chance: 1.0 },
                { id: 'powah:photoelectric_pane', count: 32, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 50,
            energy: 3000000,
            outputs: [{ id: "powah:reactor_niotic", count: 8, chance: 1.0 }],
            inputs: [
                { id: "powah:niotic_crystal_block", count: 4, chance: 1.0 },
                { id: 'eternalores:uraninite_ingot', count: 4, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 50,
            energy: 3000000,
            outputs: [{ id: "powah:reactor_spirited", count: 8, chance: 1.0 }],
            inputs: [
                { id: "powah:niotic_crystal_block", count: 4, chance: 1.0 },
                { id: "powah:spirited_crystal_block", count: 2, chance: 1.0 },
                { id: 'eternalores:uraninite_ingot', count: 4, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 50,
            energy: 3000000,
            outputs: [{ id: "powah:reactor_nitro", count: 8, chance: 1.0 }],
            inputs: [
                { id: "powah:niotic_crystal_block", count: 4, chance: 1.0 },
                { id: "powah:spirited_crystal_block", count: 2, chance: 1.0 },
                { id: 'powah:nitro_crystal_block', count: 1, chance: 1.0 },
                { id: 'eternalores:uraninite_ingot', count: 4, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 50,
            energy: 3000000,
            outputs: [{ id: "powah:player_transmitter_niotic", count: 1, chance: 1.0 }],
            inputs: [
                { id: "powah:niotic_crystal_block", count: 4, chance: 1.0 },
                { id: 'powah:player_aerial_pearl', count: 1, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 50,
            energy: 3000000,
            outputs: [{ id: "powah:player_transmitter_spirited", count: 1, chance: 1.0 }],
            inputs: [
                { id: "powah:niotic_crystal_block", count: 4, chance: 1.0 },
                { id: "powah:spirited_crystal_block", count: 2, chance: 1.0 },
                { id: 'powah:player_aerial_pearl', count: 1, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 50,
            energy: 3000000,
            outputs: [{ id: "powah:player_transmitter_nitro", count: 1, chance: 1.0 }],
            inputs: [
                { id: "powah:niotic_crystal_block", count: 4, chance: 1.0 },
                { id: "powah:spirited_crystal_block", count: 2, chance: 1.0 },
                { id: 'powah:nitro_crystal_block', count: 1, chance: 1.0 },
                { id: 'powah:player_aerial_pearl', count: 1, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 50,
            energy: 3000000,
            outputs: [{ id: "powah:energy_hopper_niotic", count: 1, chance: 1.0 }],
            inputs: [
                { id: "powah:niotic_crystal_block", count: 4, chance: 1.0 },
                { id: 'minecraft:hopper', count: 1, chance: 1.0}
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 50,
            energy: 3000000,
            outputs: [{ id: "powah:energy_hopper_spirited", count: 1, chance: 1.0 }],
            inputs: [
                { id: "powah:niotic_crystal_block", count: 4, chance: 1.0 },
                { id: "powah:spirited_crystal_block", count: 2, chance: 1.0 },
                { id: 'minecraft:hopper', count: 1, chance: 1.0}
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 50,
            energy: 3000000,
            outputs: [{ id: "powah:energy_hopper_nitro", count: 1, chance: 1.0 }],
            inputs: [
                { id: "powah:niotic_crystal_block", count: 4, chance: 1.0 },
                { id: "powah:spirited_crystal_block", count: 2, chance: 1.0 },
                { id: 'powah:nitro_crystal_block', count: 1, chance: 1.0 },
                { id: 'minecraft:hopper', count: 1, chance: 1.0}
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 50,
            energy: 3000000,
            outputs: [{ id: "powah:energy_discharger_niotic", count: 1, chance: 1.0 }],
            inputs: [
                { id: "powah:niotic_crystal_block", count: 4, chance: 1.0 },
                { id: 'mininggadgets:upgrade_battery_3', count: 1, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 50,
            energy: 3000000,
            outputs: [{ id: "powah:energy_discharger_spirited", count: 1, chance: 1.0 }],
            inputs: [
                { id: "powah:niotic_crystal_block", count: 4, chance: 1.0 },
                { id: "powah:spirited_crystal_block", count: 2, chance: 1.0 },
                { id: 'mininggadgets:upgrade_battery_3', count: 1, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 50,
            energy: 3000000,
            outputs: [{ id: "powah:energy_discharger_nitro", count: 1, chance: 1.0 }],
            inputs: [
                { id: "powah:niotic_crystal_block", count: 4, chance: 1.0 },
                { id: "powah:spirited_crystal_block", count: 2, chance: 1.0 },
                { id: 'powah:nitro_crystal_block', count: 1, chance: 1.0 },
                { id: 'mininggadgets:upgrade_battery_3', count: 1, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },

        // Energized power
        {
            time: 200,
            energy: 2500000,
            outputs: [{ id: "energizedpower:solar_panel_7", count: 1, chance: 1.0 }],
            inputs: [
                { id: 'solargeneration:solar_panel_ultimate', count: 1, chance: 1.0 },
                { id: 'energizedpower:elite_solar_cell', count: 1, chance: 1.0 },
                { id: "eternalores:silicon", count: 2048, chance: 1.0 },
                { id: "minecraft:glass_pane", count: 256, chance: 1.0 },
                { id: 'eternalores:stellarium_ingot', count: 1, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 1250000,
            outputs: [{ id: "energizedpower:solar_panel_6", count: 1, chance: 1.0 }],
            inputs: [
                { id: "solargeneration:solar_panel_advanced", count: 1, chance: 1.0 },
                { id: "energizedpower:reinforced_advanced_solar_cell", count: 4, chance: 1.0 },
                { id: "eternalores:silicon", count: 1024, chance: 1.0 },
                { id: "minecraft:glass_pane", count: 128, chance: 1.0 },
                { id: "energizedpower:energized_crystal_matrix", count: 4, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 2500000,
            outputs: [{ id: "energizedpower:solar_panel_5", count: 1, chance: 1.0 }],
            inputs: [
                { id: "solargeneration:solar_panel_resonant", count: 1, chance: 1.0 },
                { id: "energizedpower:advanced_solar_cell", count: 8, chance: 1.0 },
                { id: "eternalores:silicon", count: 512, chance: 1.0 },
                { id: "minecraft:glass_pane", count: 64, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 5000000,
            outputs: [{ id: "energizedpower:solar_panel_4", count: 1, chance: 1.0 }],
            inputs: [
                { id: "energizedpower:advanced_solar_cell", count: 1, chance: 1.0 },
                { id: "eternalores:silicon", count: 256, chance: 1.0 },
                { id: "energizedpower:energized_copper_cable", count: 32, chance: 1.0 },
                { id: "eternalores:plate_lumium", count: 20, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: "energizedpower:crystal_matrix", count: 64, chance: 1.0 }],
            inputs: [
                {id: 'minecraft:diamond', count: 128, chance: 1.0 },
                {id: 'minecraft:amethyst_shard', count: 64, chance: 1.0 },
                {id: 'minecraft:emerald', count: 128, chance: 1.0 },
                {id: 'enderio:redstone_alloy_ingot', count: 64, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: "energizedpower:energized_crystal_matrix", count: 64, chance: 1.0 }],
            inputs: [{id: 'energizedpower:crystal_matrix', count: 64, chance: 1.0 }],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: "energizedpower:energized_copper_ingot", count: 128, chance: 1.0 }],
            inputs: [{id: 'minecraft:copper_ingot', count: 128, chance: 1.0}],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: "energizedpower:energized_gold_ingot", count: 64, chance: 1.0 }],
            inputs: [{id: 'minecraft:gold_ingot', count: 64, chance: 1.0}],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 800000,
            outputs: [{ id: 'energizedpower:energized_alloy_ingot', count: 64, chance: 1.0 }],
            inputs: [{id: 'energizedpower:crystallized_alloy_ingot', count: 64, chance: 1.0}],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 1000000,
            outputs: [
                { id: 'energizedpower:crystallized_lapis_lazuli', count: 64, chance: 1.0 },
                { id: 'energizedpower:crystallized_lapis_lazuli', count: 32, chance: 0.5 },
                { id: 'energizedpower:crystallized_lapis_lazuli', count: 16, chance: 0.25 },
                { id: 'energizedpower:crystallized_lapis_lazuli', count: 8, chance: 0.125 },
            ],
            inputs: [{id: 'energizedpower:crystallized_lapis_lazuli', count: 64, chance: 1.0}],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: "energizedpower:reinforced_advanced_solar_cell", count: 1, chance: 1.0 }],
            inputs: [
                { id: 'energizedpower:crystal_matrix', count: 2, chance: 1.0 },
                { id: 'energizedpower:advanced_solar_cell', count: 1, chance: 1.0 },
                { id: 'minecraft:redstone', count: 12, chance: 1.0 },
                { id: 'eternalores:silicon', count: 16, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: 'energizedpower:advanced_solar_cell', count: 1, chance: 1.0 }],
            inputs: [
                { id: 'energizedpower:basic_solar_cell', count: 1, chance: 1.0 },
                { id: "energizedpower:energized_copper_ingot", count: 1, chance: 1.0 },
                { id: 'eternalores:tin_ingot', count: 1, chance: 1.0 },
                { id: 'enderio:redstone_alloy_ingot', count: 1, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },

        // AE2
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: "ae2:cell_component_4k", count: 1, chance: 1.0 }],
            inputs: [
                { id: "ae2:cell_component_1k", count: 1, chance: 1.0 },
                { id: "minecraft:redstone", count: 4, chance: 1.0 },
                { id: "ae2:charged_certus_quartz_crystal", count: 10, chance: 1.0 },
                { id: "ae2:quartz_glass", count: 1, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: "ae2:cell_component_16k", count: 1, chance: 1.0 }],
            inputs: [
                { id: "ae2:cell_component_4k", count: 1, chance: 1.0 },
                { id: "minecraft:redstone", count: 4, chance: 1.0 },
                { id: "ae2:charged_certus_quartz_crystal", count: 10, chance: 1.0 },
                { id: "ae2:quartz_glass", count: 1, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: "ae2:cell_component_64k", count: 1, chance: 1.0 }],
            inputs: [
                { id: "ae2:cell_component_16k", count: 1, chance: 1.0 },
                { id: "minecraft:redstone", count: 4, chance: 1.0 },
                { id: "ae2:charged_certus_quartz_crystal", count: 10, chance: 1.0 },
                { id: "ae2:quartz_glass", count: 1, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: "ae2:cell_component_256k", count: 1, chance: 1.0 }],
            inputs: [
                { id: "ae2:cell_component_64k", count: 1, chance: 1.0 },
                { id: "minecraft:redstone", count: 4, chance: 1.0 },
                { id: "ae2:charged_certus_quartz_crystal", count: 10, chance: 1.0 },
                { id: "ae2:quartz_glass", count: 1, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: "megacells:cell_component_1m", count: 1, chance: 1.0 }],
            inputs: [
                { id: "ae2:cell_component_256k", count: 1, chance: 1.0 },
                { id: "ae2:sky_dust", count: 4, chance: 1.0 },
                { id: "megacells:sky_steel_ingot", count: 1, chance: 1.0 },
                { id: "eternalores:gem_fluix", count: 10, chance: 1.0 },
                { id: "ae2:quartz_vibrant_glass", count: 1, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: "megacells:cell_component_4m", count: 1, chance: 1.0 }],
            inputs: [
                { id: "megacells:cell_component_1m", count: 1, chance: 1.0 },
                { id: "ae2:sky_dust", count: 4, chance: 1.0 },
                { id: "megacells:sky_steel_ingot", count: 1, chance: 1.0 },
                { id: "eternalores:gem_fluix", count: 10, chance: 1.0 },
                { id: "ae2:quartz_vibrant_glass", count: 1, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: "megacells:cell_component_16m", count: 1, chance: 1.0 }],
            inputs: [
                { id: "megacells:cell_component_4m", count: 1, chance: 1.0 },
                { id: "ae2:sky_dust", count: 4, chance: 1.0 },
                { id: "megacells:sky_steel_ingot", count: 1, chance: 1.0 },
                { id: "eternalores:gem_fluix", count: 10, chance: 1.0 },
                { id: "ae2:quartz_vibrant_glass", count: 1, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: "megacells:cell_component_64m", count: 1, chance: 1.0 }],
            inputs: [
                { id: "megacells:cell_component_16m", count: 1, chance: 1.0 },
                { id: "ae2:sky_dust", count: 4, chance: 1.0 },
                { id: "megacells:sky_steel_ingot", count: 1, chance: 1.0 },
                { id: "eternalores:gem_fluix", count: 10, chance: 1.0 },
                { id: "ae2:quartz_vibrant_glass", count: 1, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: "megacells:cell_component_256m", count: 1, chance: 1.0 }],
            inputs: [
                { id: "megacells:cell_component_64m", count: 1, chance: 1.0 },
                { id: "ae2:sky_dust", count: 4, chance: 1.0 },
                { id: "megacells:sky_steel_ingot", count: 1, chance: 1.0 },
                { id: "eternalores:gem_fluix", count: 10, chance: 1.0 },
                { id: "ae2:quartz_vibrant_glass", count: 1, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: "advanced_ae:quantum_storage_component", count: 1, chance: 1.0 }],
            inputs: [
                { id: "ae2:cell_component_256k", count: 1, chance: 1.0 },
                { id: "ae2:sky_dust", count: 4, chance: 1.0 },
                { id: "advanced_ae:quantum_alloy", count: 1, chance: 1.0 },
                { id: "eternalores:gem_fluix", count: 10, chance: 1.0 },
                { id: "ae2:quartz_vibrant_glass", count: 1, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: "appflux:core_4k", count: 1, chance: 1.0 }],
            inputs: [
                { id: "appflux:core_1k", count: 1, chance: 1.0 },
                { id: "minecraft:redstone", count: 4, chance: 1.0 },
                { id: "appflux:redstone_crystal", count: 10, chance: 1.0 },
                { id: "ae2:quartz_glass", count: 1, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: "appflux:core_16k", count: 1, chance: 1.0 }],
            inputs: [
                { id: "appflux:core_4k", count: 1, chance: 1.0 },
                { id: "minecraft:redstone", count: 4, chance: 1.0 },
                { id: "appflux:redstone_crystal", count: 10, chance: 1.0 },
                { id: "ae2:quartz_glass", count: 1, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: "appflux:core_64k", count: 1, chance: 1.0 }],
            inputs: [
                { id: "appflux:core_16k", count: 1, chance: 1.0 },
                { id: "minecraft:redstone", count: 4, chance: 1.0 },
                { id: "appflux:redstone_crystal", count: 10, chance: 1.0 },
                { id: "ae2:quartz_glass", count: 1, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: "appflux:core_256k", count: 1, chance: 1.0 }],
            inputs: [
                { id: "appflux:core_64k", count: 1, chance: 1.0 },
                { id: "minecraft:redstone", count: 4, chance: 1.0 },
                { id: "appflux:redstone_crystal", count: 10, chance: 1.0 },
                { id: "ae2:quartz_glass", count: 1, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: "appflux:core_1m", count: 1, chance: 1.0 }],
            inputs: [
                { id: "appflux:core_256k", count: 1, chance: 1.0 },
                { id: "ae2:sky_dust", count: 4, chance: 1.0 },
                { id: "megacells:sky_steel_ingot", count: 1, chance: 1.0 },
                { id: "appflux:charged_redstone", count: 10, chance: 1.0 },
                { id: "ae2:quartz_vibrant_glass", count: 1, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: "appflux:core_4m", count: 1, chance: 1.0 }],
            inputs: [
                { id: "appflux:core_1m", count: 1, chance: 1.0 },
                { id: "ae2:sky_dust", count: 4, chance: 1.0 },
                { id: "megacells:sky_steel_ingot", count: 1, chance: 1.0 },
                { id: "appflux:charged_redstone", count: 10, chance: 1.0 },
                { id: "ae2:quartz_vibrant_glass", count: 1, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: "appflux:core_16m", count: 1, chance: 1.0 }],
            inputs: [
                { id: "appflux:core_4m", count: 1, chance: 1.0 },
                { id: "ae2:sky_dust", count: 4, chance: 1.0 },
                { id: "megacells:sky_steel_ingot", count: 1, chance: 1.0 },
                { id: "appflux:charged_redstone", count: 10, chance: 1.0 },
                { id: "ae2:quartz_vibrant_glass", count: 1, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: "appflux:core_64m", count: 1, chance: 1.0 }],
            inputs: [
                { id: "appflux:core_16m", count: 1, chance: 1.0 },
                { id: "ae2:sky_dust", count: 4, chance: 1.0 },
                { id: "megacells:sky_steel_ingot", count: 1, chance: 1.0 },
                { id: "appflux:charged_redstone", count: 10, chance: 1.0 },
                { id: "ae2:quartz_vibrant_glass", count: 1, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: "appflux:core_256m", count: 1, chance: 1.0 }],
            inputs: [
                { id: "appflux:core_64m", count: 1, chance: 1.0 },
                { id: "ae2:sky_dust", count: 4, chance: 1.0 },
                { id: "megacells:sky_steel_ingot", count: 1, chance: 1.0 },
                { id: "appflux:charged_redstone", count: 10, chance: 1.0 },
                { id: "ae2:quartz_vibrant_glass", count: 1, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: "refinedstorage:4k_storage_part", count: 1, chance: 1.0 }],
            inputs: [
                { id: "refinedstorage:1k_storage_part", count: 1, chance: 1.0 },
                { id: 'eternalores:quartz_enriched_copper_ingot', count: 4, chance: 1.0 },
                { id: "refinedstorage:basic_processor", count: 1, chance: 1.0 },
                { id: "minecraft:chest", count: 10, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: "refinedstorage:16k_storage_part", count: 1, chance: 1.0 }],
            inputs: [
                { id: "refinedstorage:4k_storage_part", count: 1, chance: 1.0 },
                { id: 'eternalores:quartz_enriched_iron_ingot', count: 4, chance: 1.0 },
                { id: "refinedstorage:improved_processor", count: 1, chance: 1.0 },
                { id: "minecraft:chest", count: 10, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: "refinedstorage:64k_storage_part", count: 1, chance: 1.0 }],
            inputs: [
                { id: "refinedstorage:16k_storage_part", count: 1, chance: 1.0 },
                { id: 'eternalores:quartz_enriched_copper_ingot', count: 4, chance: 1.0 },
                { id: "refinedstorage:advanced_processor", count: 1, chance: 1.0 },
                { id: "minecraft:chest", count: 10, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: "refinedstorage:256b_fluid_storage_part", count: 1, chance: 1.0 }],
            inputs: [
                { id: "refinedstorage:64b_fluid_storage_part", count: 1, chance: 1.0 },
                { id: 'eternalores:quartz_enriched_iron_ingot', count: 4, chance: 1.0 },
                { id: "refinedstorage:improved_processor", count: 1, chance: 1.0 },
                { id: "minecraft:bucket", count: 5, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: "refinedstorage:1024b_fluid_storage_part", count: 1, chance: 1.0 }],
            inputs: [
                { id: "refinedstorage:256b_fluid_storage_part", count: 1, chance: 1.0 },
                { id: 'eternalores:quartz_enriched_copper_ingot', count: 4, chance: 1.0 },
                { id: "refinedstorage:advanced_processor", count: 1, chance: 1.0 },
                { id: "minecraft:bucket", count: 5, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: "refinedstorage:4096b_fluid_storage_part", count: 1, chance: 1.0 }],
            inputs: [
                { id: "refinedstorage:1024b_fluid_storage_part", count: 1, chance: 1.0 },
                { id: 'eternalores:quartz_enriched_iron_ingot', count: 4, chance: 1.0 },
                { id: "refinedstorage:advanced_processor", count: 1, chance: 1.0 },
                { id: "minecraft:bucket", count: 5, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: "refinedstorage_mekanism_integration:256b_chemical_storage_part", count: 1, chance: 1.0 }],
            inputs: [
                { id: "refinedstorage_mekanism_integration:64b_chemical_storage_part", count: 1, chance: 1.0 },
                { id: "mekanism:basic_chemical_tank", count: 1, chance: 1.0 },
                { id: "refinedstorage:basic_processor", count: 1, chance: 1.0 },
                { id: "minecraft:bucket", count: 5, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: "refinedstorage_mekanism_integration:1024b_chemical_storage_part", count: 1, chance: 1.0 }],
            inputs: [
                { id: "refinedstorage_mekanism_integration:256b_chemical_storage_part", count: 1, chance: 1.0 },
                { id: "mekanism:advanced_chemical_tank", count: 1, chance: 1.0 },
                { id: "refinedstorage:improved_processor", count: 1, chance: 1.0 },
                { id: "minecraft:bucket", count: 5, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: "refinedstorage_mekanism_integration:8192b_chemical_storage_part", count: 1, chance: 1.0 }],
            inputs: [
                { id: "refinedstorage_mekanism_integration:1024b_chemical_storage_part", count: 1, chance: 1.0 },
                { id: "mekanism:elite_chemical_tank", count: 1, chance: 1.0 },
                { id: "refinedstorage:advanced_processor", count: 1, chance: 1.0 },
                { id: "minecraft:bucket", count: 5, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: "extrastorage:storagepart_256k", count: 1, chance: 1.0 }],
            inputs: [
                { id: "refinedstorage:64k_storage_part", count: 1, chance: 1.0 },
                { id: 'eternalores:quartz_enriched_copper_ingot', count: 10, chance: 1.0 },
                { id: "refinedstorage:advanced_processor", count: 1, chance: 1.0 },
                { id: "minecraft:chest", count: 10, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: "extrastorage:storagepart_1024k", count: 1, chance: 1.0 }],
            inputs: [
                { id: "extrastorage:storagepart_256k", count: 1, chance: 1.0 },
                { id: 'eternalores:quartz_enriched_iron_ingot', count: 10, chance: 1.0 },
                { id: "refinedstorage:advanced_processor", count: 1, chance: 1.0 },
                { id: "minecraft:chest", count: 10, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: "extrastorage:storagepart_4096k", count: 1, chance: 1.0 }],
            inputs: [
                { id: "extrastorage:storagepart_1024k", count: 1, chance: 1.0 },
                { id: 'eternalores:quartz_enriched_copper_ingot', count: 10, chance: 1.0 },
                { id: "refinedstorage:advanced_processor", count: 1, chance: 1.0 },
                { id: "minecraft:chest", count: 10, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: "extrastorage:storagepart_16384k", count: 1, chance: 1.0 }],
            inputs: [
                { id: "extrastorage:storagepart_4096k", count: 1, chance: 1.0 },
                { id: 'eternalores:quartz_enriched_iron_ingot', count: 10, chance: 1.0 },
                { id: "refinedstorage:advanced_processor", count: 1, chance: 1.0 },
                { id: "minecraft:chest", count: 10, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: "extrastorage:storagepart_16384b_fluid", count: 1, chance: 1.0 }],
            inputs: [
                { id: "refinedstorage:4096b_fluid_storage_part", count: 1, chance: 1.0 },
                { id: 'eternalores:quartz_enriched_copper_ingot', count: 10, chance: 1.0 },
                { id: "refinedstorage:advanced_processor", count: 1, chance: 1.0 },
                { id: "minecraft:bucket", count: 5, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: "extrastorage:storagepart_65536b_fluid", count: 1, chance: 1.0 }],
            inputs: [
                { id: "extrastorage:storagepart_16384b_fluid", count: 1, chance: 1.0 },
                { id: 'eternalores:quartz_enriched_iron_ingot', count: 10, chance: 1.0 },
                { id: "refinedstorage:advanced_processor", count: 1, chance: 1.0 },
                { id: "minecraft:bucket", count: 5, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: "extrastorage:storagepart_262144b_fluid", count: 1, chance: 1.0 }],
            inputs: [
                { id: "extrastorage:storagepart_65536b_fluid", count: 1, chance: 1.0 },
                { id: 'eternalores:quartz_enriched_copper_ingot', count: 10, chance: 1.0 },
                { id: "refinedstorage:advanced_processor", count: 1, chance: 1.0 },
                { id: "minecraft:bucket", count: 5, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: "extrastorage:storagepart_1048576b_fluid", count: 1, chance: 1.0 }],
            inputs: [
                { id: "extrastorage:storagepart_262144b_fluid", count: 1, chance: 1.0 },
                { id: 'eternalores:quartz_enriched_iron_ingot', count: 10, chance: 1.0 },
                { id: "refinedstorage:advanced_processor", count: 1, chance: 1.0 },
                { id: "minecraft:bucket", count: 5, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },

        // RS energy
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: "refinedtypes:256k_energy_storage_part", count: 1, chance: 1.0 }],
            inputs: [
                { id: "refinedtypes:64k_energy_storage_part", count: 1, chance: 1.0 },
                { id: 'eternalores:quartz_enriched_copper_ingot', count: 32, chance: 1.0 },
                { id: "refinedstorage:destruction_core", count: 1, chance: 1.0 },
                { id: "extrastorage:neural_processor", count: 1, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: "refinedtypes:1024k_energy_storage_part", count: 1, chance: 1.0 }],
            inputs: [
                { id: "refinedtypes:256k_energy_storage_part", count: 1, chance: 1.0 },
                { id: 'eternalores:quartz_enriched_iron_ingot', count: 32, chance: 1.0 },
                { id: "refinedstorage:construction_core", count: 10, chance: 1.0 },
                { id: "extrastorage:neural_processor", count: 5, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: "refinedtypes:8192k_energy_storage_part", count: 1, chance: 1.0 }],
            inputs: [
                { id: "refinedtypes:1024k_energy_storage_part", count: 1, chance: 1.0 },
                { id: 'eternalores:quartz_enriched_copper_ingot', count: 32, chance: 1.0 },
                { id: "refinedstorage:destruction_core", count: 20, chance: 1.0 },
                { id: "extrastorage:neural_processor", count: 10, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: "refinedtypes:65536k_energy_storage_part", count: 1, chance: 1.0 }],
            inputs: [
                { id: "refinedtypes:8192k_energy_storage_part", count: 1, chance: 1.0 },
                { id: 'eternalores:quartz_enriched_iron_ingot', count: 32, chance: 1.0 },
                { id: "refinedstorage:construction_core", count: 30, chance: 1.0 },
                { id: "extrastorage:neural_processor", count: 15, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: "refinedtypes:262144k_energy_storage_part", count: 1, chance: 1.0 }],
            inputs: [
                { id: "refinedtypes:65536k_energy_storage_part", count: 1, chance: 1.0 },
                { id: 'eternalores:quartz_enriched_copper_ingot', count: 32, chance: 1.0 },
                { id: "refinedstorage:destruction_core", count: 40, chance: 1.0 },
                { id: "extrastorage:neural_processor", count: 20, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: "refinedtypes:1048576k_energy_storage_part", count: 1, chance: 1.0 }],
            inputs: [
                { id: "refinedtypes:262144k_energy_storage_part", count: 1, chance: 1.0 },
                { id: 'eternalores:quartz_enriched_iron_ingot', count: 32, chance: 1.0 },
                { id: "refinedstorage:construction_core", count: 50, chance: 1.0 },
                { id: "extrastorage:neural_processor", count: 25, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: "refinedtypes:8388608k_energy_storage_part", count: 1, chance: 1.0 }],
            inputs: [
                { id: "refinedtypes:1048576k_energy_storage_part", count: 1, chance: 1.0 },
                { id: 'eternalores:quartz_enriched_copper_ingot', count: 32, chance: 1.0 },
                { id: "refinedstorage:destruction_core", count: 60, chance: 1.0 },
                { id: "extrastorage:neural_processor", count: 30, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: "refinedtypes:infinite_energy_storage_part", count: 1, chance: 1.0 }],
            inputs: [
                { id: "refinedtypes:8388608k_energy_storage_part", count: 1, chance: 1.0 },
                { id: 'eternalores:quartz_enriched_iron_ingot', count: 32, chance: 1.0 },
                { id: "refinedstorage:construction_core", count: 70, chance: 1.0 },
                { id: "extrastorage:neural_processor", count: 35, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },

        //RS source
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: "refinedtypes:256b_source_storage_part", count: 1, chance: 1.0 }],
            inputs: [
                { id: "refinedtypes:64b_source_storage_part", count: 1, chance: 1.0 },
                { id: 'eternalores:quartz_enriched_copper_ingot', count: 32, chance: 1.0 },
                { id: "refinedstorage:destruction_core", count: 1, chance: 1.0 },
                { id: 'eternalores:gem_source', count: 16, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: "refinedtypes:1024b_source_storage_part", count: 1, chance: 1.0 }],
            inputs: [
                { id: "refinedtypes:256b_source_storage_part", count: 1, chance: 1.0 },
                { id: 'eternalores:quartz_enriched_iron_ingot', count: 32, chance: 1.0 },
                { id: "refinedstorage:construction_core", count: 10, chance: 1.0 },
                { id: 'eternalores:gem_source', count: 32, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: "refinedtypes:8192b_source_storage_part", count: 1, chance: 1.0 }],
            inputs: [
                { id: "refinedtypes:1024b_source_storage_part", count: 1, chance: 1.0 },
                { id: 'eternalores:quartz_enriched_copper_ingot', count: 32, chance: 1.0 },
                { id: "refinedstorage:destruction_core", count: 20, chance: 1.0 },
                { id: 'eternalores:gem_source', count: 64, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: "refinedtypes:65536b_source_storage_part", count: 1, chance: 1.0 }],
            inputs: [
                { id: "refinedtypes:8192b_source_storage_part", count: 1, chance: 1.0 },
                { id: 'eternalores:quartz_enriched_iron_ingot', count: 32, chance: 1.0 },
                { id: "refinedstorage:construction_core", count: 30, chance: 1.0 },
                { id: 'eternalores:gem_source', count: 128, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: "refinedtypes:262144b_source_storage_part", count: 1, chance: 1.0 }],
            inputs: [
                { id: "refinedtypes:65536b_source_storage_part", count: 1, chance: 1.0 },
                { id: 'eternalores:quartz_enriched_copper_ingot', count: 32, chance: 1.0 },
                { id: "refinedstorage:destruction_core", count: 40, chance: 1.0 },
                { id: 'eternalores:gem_source', count: 256, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: "refinedtypes:1048576b_source_storage_part", count: 1, chance: 1.0 }],
            inputs: [
                { id: "refinedtypes:262144b_source_storage_part", count: 1, chance: 1.0 },
                { id: 'eternalores:quartz_enriched_iron_ingot', count: 32, chance: 1.0 },
                { id: "refinedstorage:construction_core", count: 50, chance: 1.0 },
                { id: 'eternalores:gem_source', count: 512, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: "refinedtypes:8388608b_source_storage_part", count: 1, chance: 1.0 }],
            inputs: [
                { id: "refinedtypes:1048576b_source_storage_part", count: 1, chance: 1.0 },
                { id: 'eternalores:quartz_enriched_copper_ingot', count: 32, chance: 1.0 },
                { id: "refinedstorage:destruction_core", count: 60, chance: 1.0 },
                { id: 'eternalores:gem_source', count: 1024, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: "refinedtypes:infinite_source_storage_part", count: 1, chance: 1.0 }],
            inputs: [
                { id: "refinedtypes:8388608b_source_storage_part", count: 1, chance: 1.0 },
                { id: 'eternalores:quartz_enriched_iron_ingot', count: 32, chance: 1.0 },
                { id: "refinedstorage:construction_core", count: 70, chance: 1.0 },
                { id: 'eternalores:gem_source', count: 2048, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },

        //RS souls
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: "refinedtypes:8k_soul_storage_part", count: 1, chance: 1.0 }],
            inputs: [
                { id: "refinedtypes:1k_soul_storage_part", count: 1, chance: 1.0 },
                { id: 'eternalores:quartz_enriched_copper_ingot', count: 32, chance: 1.0 },
                { id: "refinedstorage:destruction_core", count: 1, chance: 1.0 },
                { id: "industrialforegoingsouls:soul_surge", count: 1, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: "refinedtypes:64k_soul_storage_part", count: 1, chance: 1.0 }],
            inputs: [
                { id: "refinedtypes:8k_soul_storage_part", count: 1, chance: 1.0 },
                { id: 'eternalores:quartz_enriched_iron_ingot', count: 32, chance: 1.0 },
                { id: "refinedstorage:construction_core", count: 10, chance: 1.0 },
                { id: "industrialforegoingsouls:soul_network_pipe", count: 4, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: "refinedtypes:512k_soul_storage_part", count: 1, chance: 1.0 }],
            inputs: [
                { id: "refinedtypes:64k_soul_storage_part", count: 1, chance: 1.0 },
                { id: 'eternalores:quartz_enriched_copper_ingot', count: 32, chance: 1.0 },
                { id: "refinedstorage:destruction_core", count: 20, chance: 1.0 },
                { id: "industrialforegoingsouls:soul_surge", count: 8, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: "refinedtypes:4096k_soul_storage_part", count: 1, chance: 1.0 }],
            inputs: [
                { id: "refinedtypes:512k_soul_storage_part", count: 1, chance: 1.0 },
                { id: 'eternalores:quartz_enriched_iron_ingot', count: 32, chance: 1.0 },
                { id: "refinedstorage:construction_core", count: 30, chance: 1.0 },
                { id: "industrialforegoingsouls:soul_network_pipe", count: 12, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: "refinedtypes:32768k_soul_storage_part", count: 1, chance: 1.0 }],
            inputs: [
                { id: "refinedtypes:4096k_soul_storage_part", count: 1, chance: 1.0 },
                { id: 'eternalores:quartz_enriched_copper_ingot', count: 32, chance: 1.0 },
                { id: "refinedstorage:destruction_core", count: 40, chance: 1.0 },
                { id: "industrialforegoingsouls:soul_surge", count: 16, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: "refinedtypes:262144k_soul_storage_part", count: 1, chance: 1.0 }],
            inputs: [
                { id: "refinedtypes:32768k_soul_storage_part", count: 1, chance: 1.0 },
                { id: 'eternalores:quartz_enriched_iron_ingot', count: 32, chance: 1.0 },
                { id: "refinedstorage:construction_core", count: 50, chance: 1.0 },
                { id: "industrialforegoingsouls:soul_network_pipe", count: 20, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: "refinedtypes:2097152k_soul_storage_part", count: 1, chance: 1.0 }],
            inputs: [
                { id: "refinedtypes:262144k_soul_storage_part", count: 1, chance: 1.0 },
                { id: 'eternalores:quartz_enriched_copper_ingot', count: 32, chance: 1.0 },
                { id: "refinedstorage:destruction_core", count: 60, chance: 1.0 },
                { id: "industrialforegoingsouls:soul_surge", count: 24, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: "refinedtypes:infinite_soul_storage_part", count: 1, chance: 1.0 }],
            inputs: [
                { id: "refinedtypes:2097152k_soul_storage_part", count: 1, chance: 1.0 },
                { id: 'eternalores:quartz_enriched_iron_ingot', count: 32, chance: 1.0 },
                { id: "refinedstorage:construction_core", count: 70, chance: 1.0 },
                { id: "industrialforegoingsouls:soul_network_pipe", count: 28, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },

        // Solargeneration panels
        {
            time: 200,
            energy: 10000000,
            outputs: [{ id: "solargeneration:solar_panel_resonant", count: 1, chance: 1.0 }],
            inputs: [
                { id: "energizedpower:solar_panel_4", count: 1, chance: 1.0 },
                { id: "powah:photoelectric_pane", count: 24, chance: 1.0 },
                { id: "eternalores:gear_enderium", count: 1, chance: 1.0 },
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 25000000,
            outputs: [{ id: "solargeneration:solar_panel_advanced", count: 1, chance: 1.0 }],
            inputs: [
                { id: "energizedpower:solar_panel_5", count: 1, chance: 1.0 },
                { id: "powah:photoelectric_pane", count: 48, chance: 1.0 },
                { id: "eternalores:eternal_light_block", count: 1, chance: 1.0 },
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 50000000,
            outputs: [{ id: "solargeneration:solar_panel_ultimate", count: 1, chance: 1.0 }],
            inputs: [
                { id: "energizedpower:solar_panel_6", count: 1, chance: 1.0 },
                { id: "powah:photoelectric_pane", count: 72, chance: 1.0 },
                { id: "eternalores:missing_ingot", count: 1, chance: 1.0 },
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },

        //parallel hatches
        {
            time: 300,
            energy: 50000000,
            outputs: [{ id: "modular_machinery_reborn:parallel_hatch_max", count: 1, chance: 1.0 }],
            inputs: [
                { id: "modular_machinery_reborn:parallel_hatch_ultimate", count: 2, chance: 1.0 },
                { id: "eternalores:universium_dust", count: 1, chance: 1.0 },
                { id: "eternalores:plate_universium", count: 4, chance: 1.0 },
                { id: "eternalores:universium_foil", count: 1, chance: 1.0 },
            ],
            fluid_input: [
                { id: "catalystcore:liquid_light", count: 10000, chance: 1.0 },
            ],
            fluid_output: [],
            energy_out: 10000000
        },
        {
            time: 300,
            energy: 25000000,
            outputs: [{ id: "modular_machinery_reborn:parallel_hatch_ultimate", count: 1, chance: 1.0 }],
            inputs: [
                { id: "modular_machinery_reborn:parallel_hatch_advanced", count: 2, chance: 1.0 },
                { id: "eternalores:eternity_dust", count: 1, chance: 1.0 },
                { id: "eternalores:plate_eternity", count: 4, chance: 1.0 },
                { id: "eternalores:eternity_foil", count: 1, chance: 1.0 },
            ],
            fluid_input: [
                { id: "catalystcore:liquid_darkness", count: 10000, chance: 1.0 },
            ],
            fluid_output: [],
            energy_out: 10000000
        },
        {
            time: 300,
            energy: 15000000,
            outputs: [{ id: "modular_machinery_reborn:parallel_hatch_advanced", count: 1, chance: 1.0 }],
            inputs: [
                { id: "modular_machinery_reborn:parallel_hatch_medium", count: 2, chance: 1.0 },
                { id: "eternalores:cosmic_matter_dust", count: 1, chance: 1.0 },
                { id: "eternalores:plate_cosmic_matter", count: 4, chance: 1.0 },
                { id: "eternalores:stellarium_foil", count: 1, chance: 1.0 },
            ],
            fluid_input: [
                { id: "industrialforegoing:ether_gas", count: 10000, chance: 1.0 },
            ],
            fluid_output: [],
            energy_out: 10000000
        },
        {
            time: 200,
            energy: 2500000,
            outputs: [{ id: "eternalores:modularium_ingot", count: 192, chance: 1.0 }],
            inputs: [
                { id: 'eternalores:onyx_block', count: 6, chance: 1.0 },
                { id: 'eternalores:sculkite_ingot', count: 4, chance: 1.0 },
                { id: 'minecraft:netherite_block', count: 2, chance: 1.0 },
                { id: 'eternalores:compressed_nitro_crystal_block_1x', count: 1, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 5000000
        },
        {
            time: 10,
            energy: 1000000,
            outputs: [
                { id: "expandedae:exp_crafting_accelerator_4", count: 1, chance: 1.0 },
                { id: 'eternalores:certus_quartz_block', count: 4, chance: 0.3 },
                { id: "eternalores:compressed_fluix_block_2x", count: 1, chance: 0.1 }
            ],
            inputs: [
                { id: "eternalores:plate_diamond", count: 9, chance: 1.0 },
                { id: "expandedae:exp_crafting_accelerator_2", count: 1, chance: 1.0 },
                { id: 'eternalores:certus_quartz_block', count: 4, chance: 1.0 },
                { id: "eternalores:compressed_fluix_block_2x", count: 1, chance: 1.0 },
                { id: "eternalores:compressed_redstone_block_2x", count: 2, chance: 1.0 },
                { id: "eternalores:silicon_block", count: 9, chance: 1.0 }
            ],
            fluid_input: [{ id: "minecraft:water", count: 100000, chance: 1.0 }],
            fluid_output: [{ id: "oritech:still_steam", count: 100000, chance: 1.0 }],
            energy_out: 0
        },
        {
            time: 20,
            energy: 2000000,
            outputs: [
                { id: "expandedae:exp_crafting_accelerator_8", count: 1, chance: 1.0 },
                { id: 'eternalores:certus_quartz_block', count: 4, chance: 0.3 },
                { id: "eternalores:compressed_fluix_block_2x", count: 1, chance: 0.1 }
            ],
            inputs: [
                { id: "eternalores:plate_diamond", count: 9, chance: 1.0 },
                { id: "expandedae:exp_crafting_accelerator_4", count: 1, chance: 1.0 },
                { id: 'eternalores:certus_quartz_block', count: 4, chance: 1.0 },
                { id: "eternalores:compressed_fluix_block_2x", count: 1, chance: 1.0 },
                { id: "eternalores:compressed_redstone_block_2x", count: 2, chance: 1.0 },
                { id: "eternalores:silicon_block", count: 9, chance: 1.0 }
            ],
            fluid_input: [{ id: "minecraft:water", count: 100000, chance: 1.0 }],
            fluid_output: [{ id: "oritech:still_steam", count: 100000, chance: 1.0 }],
            energy_out: 0
        },
        {
            time: 30,
            energy: 3000000,
            outputs: [
                { id: "expandedae:exp_crafting_accelerator_16", count: 1, chance: 1.0 },
                { id: 'eternalores:certus_quartz_block', count: 4, chance: 0.3 },
                { id: "eternalores:compressed_fluix_block_2x", count: 1, chance: 0.1 }
            ],
            inputs: [
                { id: "eternalores:plate_diamond", count: 9, chance: 1.0 },
                { id: "expandedae:exp_crafting_accelerator_8", count: 1, chance: 1.0 },
                { id: 'eternalores:certus_quartz_block', count: 4, chance: 1.0 },
                { id: "eternalores:compressed_fluix_block_2x", count: 1, chance: 1.0 },
                { id: "eternalores:compressed_redstone_block_2x", count: 2, chance: 1.0 },
                { id: "eternalores:silicon_block", count: 9, chance: 1.0 }
            ],
            fluid_input: [{ id: "minecraft:water", count: 100000, chance: 1.0 }],
            fluid_output: [{ id: "oritech:still_steam", count: 100000, chance: 1.0 }],
            energy_out: 0
        },
        {
            time: 40,
            energy: 4000000,
            outputs: [
                { id: "expandedae:exp_crafting_accelerator_32", count: 1, chance: 1.0 },
                { id: 'eternalores:certus_quartz_block', count: 4, chance: 0.3 },
                { id: "eternalores:compressed_fluix_block_2x", count: 1, chance: 0.1 }
            ],
            inputs: [
                { id: "eternalores:plate_diamond", count: 9, chance: 1.0 },
                { id: "expandedae:exp_crafting_accelerator_16", count: 1, chance: 1.0 },
                { id: 'eternalores:certus_quartz_block', count: 4, chance: 1.0 },
                { id: "eternalores:compressed_fluix_block_2x", count: 1, chance: 1.0 },
                { id: "eternalores:compressed_redstone_block_2x", count: 2, chance: 1.0 },
                { id: "eternalores:silicon_block", count: 9, chance: 1.0 }
            ],
            fluid_input: [{ id: "minecraft:water", count: 100000, chance: 1.0 }],
            fluid_output: [{ id: "oritech:still_steam", count: 100000, chance: 1.0 }],
            energy_out: 0
        },
        {
            time: 50,
            energy: 5000000,
            outputs: [
                { id: "expandedae:exp_crafting_accelerator_64", count: 1, chance: 1.0 },
                { id: 'eternalores:certus_quartz_block', count: 4, chance: 0.3 },
                { id: "eternalores:compressed_fluix_block_2x", count: 1, chance: 0.1 }
            ],
            inputs: [
                { id: "eternalores:plate_diamond", count: 9, chance: 1.0 },
                { id: "expandedae:exp_crafting_accelerator_32", count: 1, chance: 1.0 },
                { id: 'eternalores:certus_quartz_block', count: 4, chance: 1.0 },
                { id: "eternalores:compressed_fluix_block_2x", count: 1, chance: 1.0 },
                { id: "eternalores:compressed_redstone_block_2x", count: 2, chance: 1.0 },
                { id: "eternalores:silicon_block", count: 9, chance: 1.0 }
            ],
            fluid_input: [{ id: "minecraft:water", count: 100000, chance: 1.0 }],
            fluid_output: [{ id: "oritech:still_steam", count: 100000, chance: 1.0 }],
            energy_out: 0
        },
        {
            time: 60,
            energy: 6000000,
            outputs: [
                { id: "expandedae:exp_crafting_accelerator_128", count: 1, chance: 1.0 },
                { id: 'eternalores:certus_quartz_block', count: 4, chance: 0.3 },
                { id: "eternalores:compressed_fluix_block_2x", count: 1, chance: 0.1 }
            ],
            inputs: [
                { id: "eternalores:plate_diamond", count: 9, chance: 1.0 },
                { id: "expandedae:exp_crafting_accelerator_64", count: 1, chance: 1.0 },
                { id: 'eternalores:certus_quartz_block', count: 4, chance: 1.0 },
                { id: "eternalores:compressed_fluix_block_2x", count: 1, chance: 1.0 },
                { id: "eternalores:compressed_redstone_block_2x", count: 2, chance: 1.0 },
                { id: "eternalores:silicon_block", count: 9, chance: 1.0 }
            ],
            fluid_input: [{ id: "minecraft:water", count: 100000, chance: 1.0 }],
            fluid_output: [{ id: "oritech:still_steam", count: 100000, chance: 1.0 }],
            energy_out: 0
        },
        {
            time: 70,
            energy: 7000000,
            outputs: [
                { id: "expandedae:exp_crafting_accelerator_256", count: 1, chance: 1.0 },
                { id: 'eternalores:certus_quartz_block', count: 4, chance: 0.3 },
                { id: "eternalores:compressed_fluix_block_2x", count: 1, chance: 0.1 }
            ],
            inputs: [
                { id: "eternalores:plate_diamond", count: 9, chance: 1.0 },
                { id: "expandedae:exp_crafting_accelerator_128", count: 1, chance: 1.0 },
                { id: 'eternalores:certus_quartz_block', count: 4, chance: 1.0 },
                { id: "eternalores:compressed_fluix_block_2x", count: 1, chance: 1.0 },
                { id: "eternalores:compressed_redstone_block_2x", count: 2, chance: 1.0 },
                { id: "eternalores:silicon_block", count: 9, chance: 1.0 }
            ],
            fluid_input: [{ id: "minecraft:water", count: 100000, chance: 1.0 }],
            fluid_output: [{ id: "oritech:still_steam", count: 100000, chance: 1.0 }],
            energy_out: 0
        },
        {
            time: 80,
            energy: 8000000,
            outputs: [
                { id: "expandedae:exp_crafting_accelerator_512", count: 1, chance: 1.0 },
                { id: 'eternalores:certus_quartz_block', count: 4, chance: 0.3 },
                { id: "eternalores:compressed_fluix_block_2x", count: 1, chance: 0.1 }
            ],
            inputs: [
                { id: "eternalores:plate_diamond", count: 9, chance: 1.0 },
                { id: "expandedae:exp_crafting_accelerator_256", count: 1, chance: 1.0 },
                { id: 'eternalores:certus_quartz_block', count: 4, chance: 1.0 },
                { id: "eternalores:compressed_fluix_block_2x", count: 1, chance: 1.0 },
                { id: "eternalores:compressed_redstone_block_2x", count: 2, chance: 1.0 },
                { id: "eternalores:silicon_block", count: 9, chance: 1.0 }
            ],
            fluid_input: [{ id: "minecraft:water", count: 100000, chance: 1.0 }],
            fluid_output: [{ id: "oritech:still_steam", count: 100000, chance: 1.0 }],
            energy_out: 0
        },
        {
            time: 90,
            energy: 9000000,
            outputs: [
                { id: "expandedae:exp_crafting_accelerator_1k", count: 1, chance: 1.0 },
                { id: 'eternalores:certus_quartz_block', count: 4, chance: 0.3 },
                { id: "eternalores:compressed_fluix_block_2x", count: 1, chance: 0.1 }
            ],
            inputs: [
                { id: "eternalores:plate_diamond", count: 9, chance: 1.0 },
                { id: "expandedae:exp_crafting_accelerator_512", count: 1, chance: 1.0 },
                { id: 'eternalores:certus_quartz_block', count: 4, chance: 1.0 },
                { id: "eternalores:compressed_fluix_block_2x", count: 1, chance: 1.0 },
                { id: "eternalores:compressed_redstone_block_2x", count: 2, chance: 1.0 },
                { id: "eternalores:silicon_block", count: 9, chance: 1.0 }
            ],
            fluid_input: [{ id: "minecraft:water", count: 100000, chance: 1.0 }],
            fluid_output: [{ id: "oritech:still_steam", count: 100000, chance: 1.0 }],
            energy_out: 0
        },
        {
            time: 100,
            energy: 10000000,
            outputs: [
                { id: "expandedae:exp_crafting_accelerator_2k", count: 1, chance: 1.0 },
                { id: 'eternalores:certus_quartz_block', count: 4, chance: 0.3 },
                { id: "eternalores:compressed_fluix_block_2x", count: 1, chance: 0.1 }
            ],
            inputs: [
                { id: "eternalores:plate_diamond", count: 9, chance: 1.0 },
                { id: "expandedae:exp_crafting_accelerator_1k", count: 1, chance: 1.0 },
                { id: 'eternalores:certus_quartz_block', count: 4, chance: 1.0 },
                { id: "eternalores:compressed_fluix_block_2x", count: 1, chance: 1.0 },
                { id: "eternalores:compressed_redstone_block_2x", count: 2, chance: 1.0 },
                { id: "eternalores:silicon_block", count: 9, chance: 1.0 }
            ],
            fluid_input: [{ id: "minecraft:water", count: 100000, chance: 1.0 }],
            fluid_output: [{ id: "oritech:still_steam", count: 100000, chance: 1.0 }],
            energy_out: 0
        },
        {
            time: 110,
            energy: 11000000,
            outputs: [
                { id: "expandedae:exp_crafting_accelerator_4k", count: 1, chance: 1.0 },
                { id: 'eternalores:certus_quartz_block', count: 4, chance: 0.3 },
                { id: "eternalores:compressed_fluix_block_2x", count: 1, chance: 0.1 }
            ],
            inputs: [
                { id: "eternalores:plate_diamond", count: 9, chance: 1.0 },
                { id: "expandedae:exp_crafting_accelerator_2k", count: 1, chance: 1.0 },
                { id: 'eternalores:certus_quartz_block', count: 4, chance: 1.0 },
                { id: "eternalores:compressed_fluix_block_2x", count: 1, chance: 1.0 },
                { id: "eternalores:compressed_redstone_block_2x", count: 2, chance: 1.0 },
                { id: "eternalores:silicon_block", count: 9, chance: 1.0 }
            ],
            fluid_input: [{ id: "minecraft:water", count: 100000, chance: 1.0 }],
            fluid_output: [{ id: "oritech:still_steam", count: 100000, chance: 1.0 }],
            energy_out: 0
        },
        {
            time: 120,
            energy: 12000000,
            outputs: [
                { id: "expandedae:exp_crafting_accelerator_8k", count: 1, chance: 1.0 },
                { id: 'eternalores:certus_quartz_block', count: 4, chance: 0.3 },
                { id: "eternalores:compressed_fluix_block_2x", count: 1, chance: 0.1 }
            ],
            inputs: [
                { id: "eternalores:plate_diamond", count: 9, chance: 1.0 },
                { id: "expandedae:exp_crafting_accelerator_4k", count: 1, chance: 1.0 },
                { id: 'eternalores:certus_quartz_block', count: 4, chance: 1.0 },
                { id: "eternalores:compressed_fluix_block_2x", count: 1, chance: 1.0 },
                { id: "eternalores:compressed_redstone_block_2x", count: 2, chance: 1.0 },
                { id: "eternalores:silicon_block", count: 9, chance: 1.0 }
            ],
            fluid_input: [{ id: "minecraft:water", count: 100000, chance: 1.0 }],
            fluid_output: [{ id: "oritech:still_steam", count: 100000, chance: 1.0 }],
            energy_out: 0
        },
        {
            time: 130,
            energy: 13000000,
            outputs: [
                { id: "expandedae:exp_crafting_accelerator_16k", count: 1, chance: 1.0 },
                { id: 'eternalores:certus_quartz_block', count: 4, chance: 0.3 },
                { id: "eternalores:compressed_fluix_block_2x", count: 1, chance: 0.1 }
            ],
            inputs: [
                { id: "eternalores:plate_diamond", count: 9, chance: 1.0 },
                { id: "expandedae:exp_crafting_accelerator_8k", count: 1, chance: 1.0 },
                { id: 'eternalores:certus_quartz_block', count: 4, chance: 1.0 },
                { id: "eternalores:compressed_fluix_block_2x", count: 1, chance: 1.0 },
                { id: "eternalores:compressed_redstone_block_2x", count: 2, chance: 1.0 },
                { id: "eternalores:silicon_block", count: 9, chance: 1.0 }
            ],
            fluid_input: [{ id: "minecraft:water", count: 100000, chance: 1.0 }],
            fluid_output: [{ id: "oritech:still_steam", count: 100000, chance: 1.0 }],
            energy_out: 0
        },
        {
            time: 140,
            energy: 14000000,
            outputs: [
                { id: "expandedae:exp_crafting_accelerator_32k", count: 1, chance: 1.0 },
                { id: 'eternalores:certus_quartz_block', count: 4, chance: 0.3 },
                { id: "eternalores:compressed_fluix_block_2x", count: 1, chance: 0.1 }
            ],
            inputs: [
                { id: "eternalores:plate_diamond", count: 9, chance: 1.0 },
                { id: "expandedae:exp_crafting_accelerator_16k", count: 1, chance: 1.0 },
                { id: 'eternalores:certus_quartz_block', count: 4, chance: 1.0 },
                { id: "eternalores:compressed_fluix_block_2x", count: 1, chance: 1.0 },
                { id: "eternalores:compressed_redstone_block_2x", count: 2, chance: 1.0 },
                { id: "eternalores:silicon_block", count: 9, chance: 1.0 }
            ],
            fluid_input: [{ id: "minecraft:water", count: 100000, chance: 1.0 }],
            fluid_output: [{ id: "oritech:still_steam", count: 100000, chance: 1.0 }],
            energy_out: 0
        },
        {
            time: 150,
            energy: 15000000,
            outputs: [
                { id: "expandedae:exp_crafting_accelerator_64k", count: 1, chance: 1.0 },
                { id: 'eternalores:certus_quartz_block', count: 4, chance: 0.3 },
                { id: "eternalores:compressed_fluix_block_2x", count: 1, chance: 0.1 }
            ],
            inputs: [
                { id: "eternalores:plate_diamond", count: 9, chance: 1.0 },
                { id: "expandedae:exp_crafting_accelerator_32k", count: 1, chance: 1.0 },
                { id: 'eternalores:certus_quartz_block', count: 4, chance: 1.0 },
                { id: "eternalores:compressed_fluix_block_2x", count: 1, chance: 1.0 },
                { id: "eternalores:compressed_redstone_block_2x", count: 2, chance: 1.0 },
                { id: "eternalores:silicon_block", count: 9, chance: 1.0 }
            ],
            fluid_input: [{ id: "minecraft:water", count: 100000, chance: 1.0 }],
            fluid_output: [{ id: "oritech:still_steam", count: 100000, chance: 1.0 }],
            energy_out: 0
        },
        {
            time: 160,
            energy: 16000000,
            outputs: [
                { id: "expandedae:exp_crafting_accelerator_128k", count: 1, chance: 1.0 },
                { id: 'eternalores:certus_quartz_block', count: 4, chance: 0.3 },
                { id: "eternalores:compressed_fluix_block_2x", count: 1, chance: 0.1 }
            ],
            inputs: [
                { id: "eternalores:plate_diamond", count: 9, chance: 1.0 },
                { id: "expandedae:exp_crafting_accelerator_64k", count: 1, chance: 1.0 },
                { id: 'eternalores:certus_quartz_block', count: 4, chance: 1.0 },
                { id: "eternalores:compressed_fluix_block_2x", count: 1, chance: 1.0 },
                { id: "eternalores:compressed_redstone_block_2x", count: 2, chance: 1.0 },
                { id: "eternalores:silicon_block", count: 9, chance: 1.0 }
            ],
            fluid_input: [{ id: "minecraft:water", count: 100000, chance: 1.0 }],
            fluid_output: [{ id: "oritech:still_steam", count: 100000, chance: 1.0 }],
            energy_out: 0
        },
        {
            time: 170,
            energy: 17000000,
            outputs: [
                { id: "expandedae:exp_crafting_accelerator_256k", count: 1, chance: 1.0 },
                { id: 'eternalores:certus_quartz_block', count: 4, chance: 0.3 },
                { id: "eternalores:compressed_fluix_block_2x", count: 1, chance: 0.1 }
            ],
            inputs: [
                { id: "eternalores:plate_diamond", count: 9, chance: 1.0 },
                { id: "expandedae:exp_crafting_accelerator_128k", count: 1, chance: 1.0 },
                { id: 'eternalores:certus_quartz_block', count: 4, chance: 1.0 },
                { id: "eternalores:compressed_fluix_block_2x", count: 1, chance: 1.0 },
                { id: "eternalores:compressed_redstone_block_2x", count: 2, chance: 1.0 },
                { id: "eternalores:silicon_block", count: 9, chance: 1.0 }
            ],
            fluid_input: [{ id: "minecraft:water", count: 100000, chance: 1.0 }],
            fluid_output: [{ id: "oritech:still_steam", count: 100000, chance: 1.0 }],
            energy_out: 0
        },
        {
            time: 180,
            energy: 18000000,
            outputs: [
                { id: "expandedae:exp_crafting_accelerator_512k", count: 1, chance: 1.0 },
                { id: 'eternalores:certus_quartz_block', count: 4, chance: 0.3 },
                { id: "eternalores:compressed_fluix_block_2x", count: 1, chance: 0.1 }
            ],
            inputs: [
                { id: "eternalores:plate_diamond", count: 9, chance: 1.0 },
                { id: "expandedae:exp_crafting_accelerator_256k", count: 1, chance: 1.0 },
                { id: 'eternalores:certus_quartz_block', count: 4, chance: 1.0 },
                { id: "eternalores:compressed_fluix_block_2x", count: 1, chance: 1.0 },
                { id: "eternalores:compressed_redstone_block_2x", count: 2, chance: 1.0 },
                { id: "eternalores:silicon_block", count: 9, chance: 1.0 }
            ],
            fluid_input: [{ id: "minecraft:water", count: 100000, chance: 1.0 }],
            fluid_output: [{ id: "oritech:still_steam", count: 100000, chance: 1.0 }],
            energy_out: 0
        },
        {
            time: 190,
            energy: 19000000,
            outputs: [
                { id: "expandedae:exp_crafting_accelerator_1m", count: 1, chance: 1.0 },
                { id: 'eternalores:certus_quartz_block', count: 4, chance: 0.3 },
                { id: "eternalores:compressed_fluix_block_2x", count: 1, chance: 0.1 }
            ],
            inputs: [
                { id: "eternalores:plate_diamond", count: 9, chance: 1.0 },
                { id: "expandedae:exp_crafting_accelerator_512k", count: 1, chance: 1.0 },
                { id: 'eternalores:certus_quartz_block', count: 4, chance: 1.0 },
                { id: "eternalores:compressed_fluix_block_2x", count: 1, chance: 1.0 },
                { id: "eternalores:compressed_redstone_block_2x", count: 2, chance: 1.0 },
                { id: "eternalores:silicon_block", count: 9, chance: 1.0 }
            ],
            fluid_input: [{ id: "minecraft:water", count: 100000, chance: 1.0 }],
            fluid_output: [{ id: "oritech:still_steam", count: 100000, chance: 1.0 }],
            energy_out: 0
        },
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: "ae2:charged_certus_quartz_crystal", count: 128, chance: 1.0 }],
            inputs: [{ id: "eternalores:gem_certus_quartz", count: 128, chance: 1.0 }],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: "ae2:matter_ball", count: 64, chance: 1.0 }],
            inputs: [{ id: "minecraft:cobblestone", count: 16384, chance: 1.0 }],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: "ae2:singularity", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [{ id: "minecraft:water", count: 32000000, chance: 1.0 }],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: "ae2:singularity", count: 64, chance: 1.0 }],
            inputs: [{ id: "ae2:matter_ball", count: 4096, chance: 1.0 }],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: "oritech:overcharged_crystal", count: 9, chance: 1.0 }],
            inputs: [
                { id: 'oritech:fluxite_block', count: 1, chance: 1.0 },
                { id: 'oritech:energite_block', count: 1, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: "oritech:enderic_compound", count: 192, chance: 1.0 }],
            inputs: [
                { id: 'minecraft:ender_pearl', count: 16, chance: 1.0}
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: "oritech:enderic_compound", count: 64, chance: 1.0 }],
            inputs: [
                { id: 'minecraft:end_stone', count: 64, chance: 1.0}
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: "oritech:enderic_compound", count: 64, chance: 1.0 }],
            inputs: [
                { id: 'minecraft:sculk', count: 64, chance: 1.0}
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: "oritech:enderic_compound", count: 128, chance: 1.0 }],
            inputs: [
                { id: 'minecraft:redstone', count: 64, chance: 1.0},
                { id: 'minecraft:rotten_flesh', count: 64, chance: 1.0}
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: "minecraft:echo_shard", count: 1, chance: 1.0 }],
            inputs: [
                {id: 'minecraft:sculk', count: 10, chance: 1.0 },
                {id: 'minecraft:blaze_rod', count: 1, chance: 1.0}
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: "minecraft:elytra", count: 1, chance: 1.0 }],
            inputs: [
                {id: 'minecraft:netherite_chestplate', count: 1, chance: 1.0 },
                {id: 'minecraft:ender_eye', count: 16, chance: 1.0 },
                {id: 'eternalores:netherite_gem_cutter', count: 1, chance: 1.0 },
                {id: 'eternalores:cobalt_wire_cutter', count: 1, chance: 1.0 },
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: "minecraft:heavy_core", count: 1, chance: 1.0 }],
            inputs: [
                {id: 'minecraft:wind_charge', count: 16, chance: 1.0 },
                {id: 'minecraft:breeze_rod', count: 32, chance: 1.0 },
                {id: 'minecraft:reinforced_deepslate', count: 1, chance: 1.0 },
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: "eternalores:plutonium_dust", count: 9, chance: 1.0 }],
            inputs: [
                {id: 'eternalores:uranium_block', count: 1, chance: 1.0 },
                {id: 'eternalores:fluorite_dust_block', count: 1, chance: 1.0},
                {id: 'oritech:fluxite_block', count: 1, chance: 1.0}
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: "oritech:banana", count: 1, chance: 0.75 }],
            inputs: [
                { id: 'minecraft:enchanted_golden_apple', count: 9, chance: 1.0 },
                { id: 'minecraft:yellow_dye', count: 1, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: "actuallyadditions:enori_crystal_block", count: 64, chance: 1.0 }],
            inputs: [{ id: "minecraft:iron_block", count: 64, chance: 1.0 }],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: "actuallyadditions:restonia_crystal_block", count: 64, chance: 1.0 }],
            inputs: [{ id: "minecraft:redstone_block", count: 64, chance: 1.0 }],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: "actuallyadditions:palis_crystal_block", count: 64, chance: 1.0 }],
            inputs: [{ id: "minecraft:lapis_block", count: 64, chance: 1.0 }],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: "actuallyadditions:diamatine_crystal_block", count: 64, chance: 1.0 }],
            inputs: [{ id: "minecraft:diamond_block", count: 64, chance: 1.0 }],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: "actuallyadditions:void_crystal_block", count: 64, chance: 1.0 }],
            inputs: [{ id: "minecraft:coal_block", count: 64, chance: 1.0 }],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: "actuallyadditions:emeradic_crystal_block", count: 64, chance: 1.0 }],
            inputs: [{ id: "minecraft:emerald_block", count: 64, chance: 1.0 }],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: "actuallyadditions:empowered_enori_crystal_block", count: 64, chance: 1.0 }],
            inputs: [{ id: "actuallyadditions:enori_crystal_block", count: 64, chance: 1.0 }],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: "actuallyadditions:empowered_restonia_crystal_block", count: 64, chance: 1.0 }],
            inputs: [{ id: "actuallyadditions:restonia_crystal_block", count: 64, chance: 1.0 }],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: "actuallyadditions:empowered_palis_crystal_block", count: 64, chance: 1.0 }],
            inputs: [{ id: "actuallyadditions:palis_crystal_block", count: 64, chance: 1.0 }],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: "actuallyadditions:empowered_diamatine_crystal_block", count: 64, chance: 1.0 }],
            inputs: [{ id: "actuallyadditions:diamatine_crystal_block", count: 64, chance: 1.0 }],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: "actuallyadditions:empowered_void_crystal_block", count: 64, chance: 1.0 }],
            inputs: [{ id: "actuallyadditions:void_crystal_block", count: 64, chance: 1.0 }],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: "actuallyadditions:empowered_emeradic_crystal_block", count: 64, chance: 1.0 }],
            inputs: [{ id: "actuallyadditions:emeradic_crystal_block", count: 64, chance: 1.0 }],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: "actuallyadditions:crystallized_canola_seed", count: 64, chance: 1.0 }],
            inputs: [{ id: "actuallyadditions:canola_seeds", count: 64, chance: 1.0 }],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: "minecraft:soul_sand", count: 64, chance: 1.0 }],
            inputs: [{ id: "minecraft:sand", count: 64, chance: 1.0 }],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: "actuallyadditions:ethetic_green_block", count: 64, chance: 1.0 }],
            inputs: [{ id: "actuallyadditions:ethetic_white_block", count: 64, chance: 1.0 }],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: "actuallyadditions:ethetic_white_block", count: 64, chance: 1.0 }],
            inputs: [{ id: "minecraft:quartz_block", count: 64, chance: 1.0 }],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: "minecraft:leather", count: 64, chance: 1.0 }],
            inputs: [{ id: "minecraft:rotten_flesh", count: 64, chance: 1.0 }],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 300,
            energy: 1000000,
            outputs: [{ id: "generatorgalore:potion_generator_64x", count: 1, chance: 1.0 }],
            inputs: [
                { id: "generatorgalore:potion_generator_8x", count: 1, chance: 1.0 },
                { id: "eternalores:invar_capacitor", count: 1, chance: 1.0 },
                { id: "minecraft:conduit", count: 1, chance: 1.0 },
                { id: "minecraft:brewing_stand", count: 16, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 300,
            energy: 1000000,
            outputs: [{ id: "generatorgalore:obsidian_generator_8x", count: 1, chance: 1.0 }],
            inputs: [
                { id: "generatorgalore:obsidian_generator", count: 1, chance: 1.0 },
                { id: "enderio:octadic_capacitor", count: 1, chance: 1.0 },
                { id: "minecraft:echo_shard", count: 1, chance: 1.0 },
                { id: "minecraft:obsidian", count: 16, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 300,
            energy: 1000000,
            outputs: [{ id: "generatorgalore:netherstar_generator_64x", count: 1, chance: 1.0 }],
            inputs: [
                { id: "generatorgalore:netherstar_generator_8x", count: 1, chance: 1.0 },
                { id: "eternalores:invar_capacitor", count: 1, chance: 1.0 },
                { id: "minecraft:conduit", count: 1, chance: 1.0 },
                { id: "minecraft:nether_star", count: 16, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 300,
            energy: 1000000,
            outputs: [{ id: "generatorgalore:netherite_generator_64x", count: 1, chance: 1.0 }],
            inputs: [
                { id: "generatorgalore:netherite_generator_8x", count: 1, chance: 1.0 },
                { id: "eternalores:invar_capacitor", count: 1, chance: 1.0 },
                { id: "minecraft:conduit", count: 1, chance: 1.0 },
                { id: "minecraft:netherite_block", count: 1, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 300,
            energy: 1000000,
            outputs: [{ id: "generatorgalore:magmatic_generator_64x", count: 1, chance: 1.0 }],
            inputs: [
                { id: "generatorgalore:magmatic_generator_8x", count: 1, chance: 1.0 },
                { id: "eternalores:invar_capacitor", count: 1, chance: 1.0 },
                { id: "minecraft:conduit", count: 1, chance: 1.0 },
                { id: "minecraft:magma_block", count: 64, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 300,
            energy: 1000000,
            outputs: [{ id: "generatorgalore:iron_generator_8x", count: 1, chance: 1.0 }],
            inputs: [
                { id: "generatorgalore:iron_generator", count: 1, chance: 1.0 },
                { id: "enderio:octadic_capacitor", count: 1, chance: 1.0 },
                { id: "minecraft:echo_shard", count: 1, chance: 1.0 },
                { id: "minecraft:iron_block", count: 8, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 300,
            energy: 1000000,
            outputs: [{ id: "generatorgalore:honey_generator_64x", count: 1, chance: 1.0 }],
            inputs: [
                { id: "generatorgalore:honey_generator_8x", count: 1, chance: 1.0 },
                { id: "eternalores:invar_capacitor", count: 1, chance: 1.0 },
                { id: "minecraft:conduit", count: 1, chance: 1.0 },
                { id: "minecraft:honey_block", count: 16, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 300,
            energy: 1000000,
            outputs: [{ id: "generatorgalore:halitosis_generator_64x", count: 1, chance: 1.0 }],
            inputs: [
                { id: "generatorgalore:halitosis_generator_8x", count: 1, chance: 1.0 },
                { id: "eternalores:invar_capacitor", count: 1, chance: 1.0 },
                { id: "minecraft:conduit", count: 1, chance: 1.0 },
                { id: "minecraft:amethyst_shard", count: 64, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 300,
            energy: 1000000,
            outputs: [{ id: "generatorgalore:gold_generator_8x", count: 1, chance: 1.0 }],
            inputs: [
                { id: "generatorgalore:gold_generator", count: 1, chance: 1.0 },
                { id: "enderio:octadic_capacitor", count: 1, chance: 1.0 },
                { id: "minecraft:echo_shard", count: 1, chance: 1.0 },
                { id: "minecraft:gold_block", count: 8, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 300,
            energy: 1000000,
            outputs: [{ id: "generatorgalore:ender_generator_64x", count: 1, chance: 1.0 }],
            inputs: [
                { id: "generatorgalore:ender_generator_8x", count: 1, chance: 1.0 },
                { id: "eternalores:invar_capacitor", count: 1, chance: 1.0 },
                { id: "minecraft:conduit", count: 1, chance: 1.0 },
                { id: "minecraft:ender_eye", count: 16, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 300,
            energy: 1000000,
            outputs: [{ id: "generatorgalore:enchantment_generator_64x", count: 1, chance: 1.0 }],
            inputs: [
                { id: "generatorgalore:enchantment_generator_8x", count: 1, chance: 1.0 },
                { id: "eternalores:invar_capacitor", count: 1, chance: 1.0 },
                { id: "minecraft:conduit", count: 1, chance: 1.0 },
                { id: "minecraft:enchanting_table", count: 12, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 300,
            energy: 1000000,
            outputs: [{ id: "generatorgalore:emerald_generator_8x", count: 1, chance: 1.0 }],
            inputs: [
                { id: "generatorgalore:emerald_generator", count: 1, chance: 1.0 },
                { id: "enderio:octadic_capacitor", count: 1, chance: 1.0 },
                { id: "minecraft:echo_shard", count: 1, chance: 1.0 },
                { id: "minecraft:emerald_block", count: 8, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 300,
            energy: 1000000,
            outputs: [{ id: "generatorgalore:diamond_generator_8x", count: 1, chance: 1.0 }],
            inputs: [
                { id: "generatorgalore:diamond_generator", count: 1, chance: 1.0 },
                { id: "enderio:octadic_capacitor", count: 1, chance: 1.0 },
                { id: "minecraft:echo_shard", count: 1, chance: 1.0 },
                { id: "minecraft:diamond_block", count: 8, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 300,
            energy: 1000000,
            outputs: [{ id: "generatorgalore:culinary_generator_64x", count: 1, chance: 1.0 }],
            inputs: [
                { id: "generatorgalore:culinary_generator_8x", count: 1, chance: 1.0 },
                { id: "eternalores:invar_capacitor", count: 1, chance: 1.0 },
                { id: "minecraft:conduit", count: 1, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 300,
            energy: 1000000,
            outputs: [{ id: "generatorgalore:copper_generator_8x", count: 1, chance: 1.0 }],
            inputs: [
                { id: "generatorgalore:copper_generator", count: 1, chance: 1.0 },
                { id: "enderio:octadic_capacitor", count: 1, chance: 1.0 },
                { id: "minecraft:echo_shard", count: 1, chance: 1.0 },
                { id: "minecraft:copper_block", count: 8, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 300,
            energy: 1000000,
            outputs: [{ id: "generatorgalore:potion_generator_8x", count: 1, chance: 1.0 }],
            inputs: [
                { id: "generatorgalore:potion_generator", count: 1, chance: 1.0 },
                { id: "enderio:octadic_capacitor", count: 1, chance: 1.0 },
                { id: "minecraft:echo_shard", count: 1, chance: 1.0 },
                { id: "minecraft:brewing_stand", count: 1, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 300,
            energy: 1000000,
            outputs: [{ id: "generatorgalore:netherstar_generator_8x", count: 1, chance: 1.0 }],
            inputs: [
                { id: "generatorgalore:netherstar_generator", count: 1, chance: 1.0 },
                { id: "enderio:octadic_capacitor", count: 1, chance: 1.0 },
                { id: "minecraft:echo_shard", count: 1, chance: 1.0 },
                { id: "minecraft:nether_star", count: 1, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 300,
            energy: 1000000,
            outputs: [{ id: "generatorgalore:netherite_generator_8x", count: 1, chance: 1.0 }],
            inputs: [
                { id: "generatorgalore:netherite_generator", count: 1, chance: 1.0 },
                { id: "enderio:octadic_capacitor", count: 1, chance: 1.0 },
                { id: "minecraft:echo_shard", count: 1, chance: 1.0 },
                { id: "minecraft:netherite_ingot", count: 1, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 300,
            energy: 1000000,
            outputs: [{ id: "generatorgalore:magmatic_generator_8x", count: 1, chance: 1.0 }],
            inputs: [
                { id: "generatorgalore:magmatic_generator", count: 1, chance: 1.0 },
                { id: "enderio:octadic_capacitor", count: 1, chance: 1.0 },
                { id: "minecraft:echo_shard", count: 1, chance: 1.0 },
                { id: "minecraft:magma_block", count: 16, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 300,
            energy: 1000000,
            outputs: [{ id: "generatorgalore:honey_generator_8x", count: 1, chance: 1.0 }],
            inputs: [
                { id: "generatorgalore:honey_generator", count: 1, chance: 1.0 },
                { id: "enderio:octadic_capacitor", count: 1, chance: 1.0 },
                { id: "minecraft:echo_shard", count: 1, chance: 1.0 },
                { id: "minecraft:honey_block", count: 1, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 300,
            energy: 1000000,
            outputs: [{ id: "generatorgalore:halitosis_generator_8x", count: 1, chance: 1.0 }],
            inputs: [
                { id: "generatorgalore:halitosis_generator", count: 1, chance: 1.0 },
                { id: "enderio:octadic_capacitor", count: 1, chance: 1.0 },
                { id: "minecraft:echo_shard", count: 1, chance: 1.0 },
                { id: "minecraft:amethyst_shard", count: 1, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 300,
            energy: 1000000,
            outputs: [{ id: "generatorgalore:ender_generator_8x", count: 1, chance: 1.0 }],
            inputs: [
                { id: "generatorgalore:ender_generator", count: 1, chance: 1.0 },
                { id: "enderio:octadic_capacitor", count: 1, chance: 1.0 },
                { id: "minecraft:echo_shard", count: 1, chance: 1.0 },
                { id: "minecraft:ender_pearl", count: 1, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 300,
            energy: 1000000,
            outputs: [{ id: "generatorgalore:enchantment_generator_8x", count: 1, chance: 1.0 }],
            inputs: [
                { id: "generatorgalore:enchantment_generator", count: 1, chance: 1.0 },
                { id: "enderio:octadic_capacitor", count: 1, chance: 1.0 },
                { id: "minecraft:echo_shard", count: 1, chance: 1.0 },
                { id: "minecraft:enchanting_table", count: 1, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 300,
            energy: 1000000,
            outputs: [{ id: "generatorgalore:culinary_generator_8x", count: 1, chance: 1.0 }],
            inputs: [
                { id: "generatorgalore:culinary_generator", count: 1, chance: 1.0 },
                { id: "enderio:octadic_capacitor", count: 1, chance: 1.0 },
                { id: "minecraft:echo_shard", count: 1, chance: 1.0 },
                { id: "generatorgalore:iron_generator", count: 1, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 1200,
            energy: 100000000,
            outputs: [{ id: "relics:experience_disperser{\"relics:data\":{abilities:{abilities:{dispersion:{lock:{breaks:5},points:0,research:{links:{},researched:0b},stats:{distribution_ratio:{initialQuality:9},player_xp_ratio:{initialQuality:8},same_item_bonus:{initialQuality:3}}}},synergies:{}},leveling:{},statistic:{}}}", count: 1, chance: 1.0 }],
            inputs: [
                { id: "eternalores:modularium_ingot", count: 64, chance: 1.0 },
                { id: "eternalores:gem_sanguis_vivus", count: 64, chance: 1.0 },
                { id: "eternalores:gem_jade", count: 64, chance: 1.0 },
                { id: "minecraft:experience_bottle", count: 64, chance: 1.0 },
                { id: "minecraft:amethyst_cluster", count: 8, chance: 1.0 }
            ],
            fluid_input: [
                { id: "minecraft:lava", count: 10000000, chance: 1.0 },
                { id: 'advanced_ae:quantum_infusion_source', count: 10000, chance: 1.0 }
            ],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 1200,
            energy: 100000000,
            outputs: [{ id: "relics:chorus_staff{\"relics:chorus_staff/charge\":4,\"relics:data\":{abilities:{abilities:{blink:{lock:{breaks:5},points:0,research:{links:{},researched:0b},stats:{cooldown:{initialQuality:2},distance:{initialQuality:6},max_charge:{initialQuality:5}}}},synergies:{}},leveling:{},statistic:{}}}", count: 1, chance: 1.0 }],
            inputs: [
                { id: "eternalores:modularium_ingot", count: 64, chance: 1.0 },
                { id: "eternalores:gem_sanguis_vivus", count: 64, chance: 1.0 },
                { id: "eternalores:gem_jade", count: 64, chance: 1.0 },
                { id: "relics:experience_disperser{\"relics:data\":{abilities:{abilities:{dispersion:{lock:{breaks:5},points:0,research:{links:{},researched:0b},stats:{distribution_ratio:{initialQuality:9},player_xp_ratio:{initialQuality:8},same_item_bonus:{initialQuality:3}}}},synergies:{}},leveling:{},statistic:{}}}", count: 1, chance: 1.0 },
                { id: "minecraft:chorus_flower", count: 16, chance: 1.0 },
                { id: "minecraft:ender_eye", count: 16, chance: 1.0 }
            ],
            fluid_input: [
                { id: "minecraft:lava", count: 10000000, chance: 1.0 },
                { id: 'advanced_ae:quantum_infusion_source', count: 10000, chance: 1.0 }
            ],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 1200,
            energy: 100000000,
            outputs: [{ id: "relics:leafy_mantle{\"relics:data\":{abilities:{abilities:{camouflage:{lock:{breaks:5},points:0,research:{links:{},researched:0b},stats:{absorption:{initialQuality:1},cooldown:{initialQuality:7},heal:{initialQuality:8}}},revival:{lock:{breaks:0},points:0,research:{links:{},researched:0b},stats:{damage:{initialQuality:7},heal:{initialQuality:2},paralysis:{initialQuality:10},radius:{initialQuality:10}}}},synergies:{}},leveling:{},statistic:{}}}", count: 1, chance: 1.0 }],
            inputs: [
                { id: "eternalores:modularium_ingot", count: 64, chance: 1.0 },
                { id: "eternalores:gem_sanguis_vivus", count: 64, chance: 1.0 },
                { id: "eternalores:gem_jade", count: 64, chance: 1.0 },
                { id: "minecraft:spore_blossom", count: 4, chance: 1.0 },
                { id: "minecraft:heart_of_the_sea", count: 1, chance: 1.0 }
            ],
            fluid_input: [
                { id: "minecraft:lava", count: 10000000, chance: 1.0 },
                { id: 'advanced_ae:quantum_infusion_source', count: 10000, chance: 1.0 }
            ],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 1200,
            energy: 100000000,
            outputs: [{ id: "relics:springy_boot{\"relics:data\":{abilities:{abilities:{bounce:{lock:{breaks:5},points:0,research:{links:{},researched:0b},stats:{damage:{initialQuality:5},damage_modifier:{initialQuality:8},power:{},radius:{initialQuality:8},stun:{initialQuality:7}}}},synergies:{}},leveling:{},statistic:{}}}", count: 1, chance: 1.0 }],
            inputs: [
                { id: "eternalores:modularium_ingot", count: 64, chance: 1.0 },
                { id: "eternalores:gem_sanguis_vivus", count: 64, chance: 1.0 },
                { id: "eternalores:gem_jade", count: 64, chance: 1.0 },
                { id: "minecraft:slime_block", count: 16, chance: 1.0 },
                { id: "minecraft:piston", count: 4, chance: 1.0 }
            ],
            fluid_input: [
                { id: "minecraft:lava", count: 10000000, chance: 1.0 },
                { id: 'advanced_ae:quantum_infusion_source', count: 10000, chance: 1.0 }
            ],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 1200,
            energy: 100000000,
            outputs: [{ id: "relics:kinetic_belt{\"relics:data\":{abilities:{abilities:{gliding:{lock:{breaks:5},points:0,research:{links:{},researched:0b},stats:{damage:{initialQuality:1},efficiency:{initialQuality:3},resistance:{initialQuality:5}}},slots:{lock:{breaks:5},points:0,research:{links:{},researched:0b},stats:{amount:{initialQuality:9}}}},synergies:{}},leveling:{},statistic:{}}}", count: 1, chance: 1.0 }],
            inputs: [
                { id: "eternalores:modularium_ingot", count: 64, chance: 1.0 },
                { id: "eternalores:gem_sanguis_vivus", count: 64, chance: 1.0 },
                { id: "eternalores:gem_jade", count: 64, chance: 1.0 },
                { id: "relics:springy_boot{\"relics:data\":{abilities:{abilities:{bounce:{lock:{breaks:5},points:0,research:{links:{},researched:0b},stats:{damage:{initialQuality:5},damage_modifier:{initialQuality:8},power:{},radius:{initialQuality:8},stun:{initialQuality:7}}}},synergies:{}},leveling:{},statistic:{}}}", count: 1, chance: 1.0 },
                { id: "minecraft:elytra", count: 1, chance: 1.0 }
            ],
            fluid_input: [
                { id: "minecraft:lava", count: 10000000, chance: 1.0 },
                { id: 'advanced_ae:quantum_infusion_source', count: 10000, chance: 1.0 }
            ],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 1200,
            energy: 100000000,
            outputs: [{ id: "relics:reflective_necklace{\"relics:data\":{abilities:{abilities:{reflection:{lock:{breaks:5},points:0,research:{links:{},researched:0b},stats:{bounces:{initialQuality:3},chance:{initialQuality:9},damage:{initialQuality:4},lifetime:{initialQuality:6},piercings:{initialQuality:4},stun:{initialQuality:7}}}},synergies:{}},leveling:{},statistic:{}}}", count: 1, chance: 1.0 }],
            inputs: [
                { id: "eternalores:modularium_ingot", count: 64, chance: 1.0 },
                { id: "eternalores:gem_sanguis_vivus", count: 64, chance: 1.0 },
                { id: "eternalores:gem_jade", count: 64, chance: 1.0 },
                { id: "minecraft:tinted_glass", count: 32, chance: 1.0 },
                { id: "minecraft:totem_of_undying", count: 1, chance: 1.0 }
            ],
            fluid_input: [
                { id: "minecraft:lava", count: 10000000, chance: 1.0 },
                { id: 'advanced_ae:quantum_infusion_source', count: 10000, chance: 1.0 }
            ],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 1200,
            energy: 100000000,
            outputs: [{ id: "relics:jellyfish_necklace{\"relics:data\":{abilities:{abilities:{regeneration:{lock:{breaks:5},points:0,research:{links:{},researched:0b},stats:{max_health:{},regeneration:{}}},shock:{lock:{breaks:5},points:0,research:{links:{},researched:0b},stats:{bounces:{initialQuality:6},cooldown:{},damage:{initialQuality:9},damage_modifier:{initialQuality:8},distance:{initialQuality:1},duration:{initialQuality:7},knockback:{initialQuality:10},paralysis:{initialQuality:9},radius:{initialQuality:1},rings:{initialQuality:9}}}},synergies:{}},leveling:{},statistic:{}}}", count: 1, chance: 1.0 }],
            inputs: [
                { id: "eternalores:modularium_ingot", count: 64, chance: 1.0 },
                { id: "eternalores:gem_sanguis_vivus", count: 64, chance: 1.0 },
                { id: "eternalores:gem_jade", count: 64, chance: 1.0 },
                { id: "relics:reflective_necklace{\"relics:data\":{abilities:{abilities:{reflection:{lock:{breaks:5},points:0,research:{links:{},researched:0b},stats:{bounces:{initialQuality:3},chance:{initialQuality:9},damage:{initialQuality:4},lifetime:{initialQuality:6},piercings:{initialQuality:4},stun:{initialQuality:7}}}},synergies:{}},leveling:{},statistic:{}}}", count: 1, chance: 1.0 },
                { id: "minecraft:sea_lantern", count: 16, chance: 1.0 },
                { id: "minecraft:lightning_rod", count: 4, chance: 1.0 }
            ],
            fluid_input: [
                { id: "minecraft:lava", count: 10000000, chance: 1.0 },
                { id: 'advanced_ae:quantum_infusion_source', count: 10000, chance: 1.0 }
            ],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 1200,
            energy: 100000000,
            outputs: [{ id: "relics:midnight_mantle{\"relics:data\":{abilities:{abilities:{constellation:{lock:{breaks:0},points:0,research:{links:{},researched:0b},stats:{constellation_radius:{initialQuality:7},explosion_damage:{initialQuality:3},explosion_radius:{initialQuality:7},star_chance:{initialQuality:10},star_lifetime:{initialQuality:6},stun_duration:{initialQuality:7},tremor_duration:{initialQuality:6}}},invisibility:{lock:{breaks:0},points:0,research:{links:{},researched:0b},stats:{brightness:{initialQuality:10},cooldown:{initialQuality:8},damage:{}}},phase:{lock:{breaks:5},points:0,research:{links:{},researched:0b},stats:{attack_damage:{initialQuality:4},attack_speed:{initialQuality:9},duration:{initialQuality:1},health_regeneration:{initialQuality:10},max_health:{initialQuality:4},modifier:{}}},starfall:{lock:{breaks:0},points:0,research:{links:{},researched:0b},stats:{bounce_chance:{initialQuality:10},chance:{initialQuality:7},damage:{initialQuality:10},radius:{initialQuality:3},stun:{initialQuality:2}}}},synergies:{}},leveling:{},statistic:{}}}", count: 1, chance: 1.0 }],
            inputs: [
                { id: "eternalores:modularium_ingot", count: 64, chance: 1.0 },
                { id: "eternalores:gem_sanguis_vivus", count: 64, chance: 1.0 },
                { id: "eternalores:gem_jade", count: 64, chance: 1.0 },
                { id: "relics:leafy_mantle{\"relics:data\":{abilities:{abilities:{camouflage:{lock:{breaks:5},points:0,research:{links:{},researched:0b},stats:{absorption:{initialQuality:1},cooldown:{initialQuality:7},heal:{initialQuality:8}}},revival:{lock:{breaks:0},points:0,research:{links:{},researched:0b},stats:{damage:{initialQuality:7},heal:{initialQuality:2},paralysis:{initialQuality:10},radius:{initialQuality:10}}}},synergies:{}},leveling:{},statistic:{}}}", count: 1, chance: 1.0 },
                { id: "minecraft:nether_star", count: 2, chance: 1.0 },
                { id: "minecraft:obsidian", count: 32, chance: 1.0 }
            ],
            fluid_input: [
                { id: "minecraft:lava", count: 10000000, chance: 1.0 },
                { id: 'advanced_ae:quantum_infusion_source', count: 10000, chance: 1.0 }
            ],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 1200,
            energy: 100000000,
            outputs: [{ id: "relics:roller_skate{\"relics:data\":{abilities:{abilities:{skating:{lock:{breaks:5},points:0,research:{links:{},researched:0b},stats:{damage:{initialQuality:8},ignite:{initialQuality:5},resistance:{initialQuality:1},speed:{initialQuality:7},step_height:{initialQuality:3}}}},synergies:{}},leveling:{},statistic:{}}}", count: 1, chance: 1.0 }],
            inputs: [
                { id: "eternalores:modularium_ingot", count: 64, chance: 1.0 },
                { id: "eternalores:gem_sanguis_vivus", count: 64, chance: 1.0 },
                { id: "eternalores:gem_jade", count: 64, chance: 1.0 },
                { id: "minecraft:iron_block", count: 4, chance: 1.0 },
                { id: "minecraft:netherite_scrap", count: 8, chance: 1.0 }
            ],
            fluid_input: [
                { id: "minecraft:lava", count: 10000000, chance: 1.0 },
                { id: 'advanced_ae:quantum_infusion_source', count: 10000, chance: 1.0 }
            ],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 1200,
            energy: 100000000,
            outputs: [{ id: "relics:clot_of_time{\"relics:data\":{abilities:{abilities:{rewind:{lock:{breaks:5},points:0,research:{links:{},researched:0b},stats:{time:{initialQuality:1}}}},synergies:{}},leveling:{},statistic:{}}}", count: 1, chance: 1.0 }],
            inputs: [
                { id: "eternalores:modularium_ingot", count: 64, chance: 1.0 },
                { id: "eternalores:gem_sanguis_vivus", count: 64, chance: 1.0 },
                { id: "eternalores:gem_jade", count: 64, chance: 1.0 },
                { id: "minecraft:clock", count: 16, chance: 1.0 },
                { id: "minecraft:crying_obsidian", count: 16, chance: 1.0 }
            ],
            fluid_input: [
                { id: "minecraft:lava", count: 10000000, chance: 1.0 },
                { id: 'advanced_ae:quantum_infusion_source', count: 10000, chance: 1.0 }
            ],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 1200,
            energy: 100000000,
            outputs: [{ id: "relics:piglin_mask{\"relics:data\":{abilities:{abilities:{barter:{lock:{breaks:5},points:0,research:{links:{},researched:0b},stats:{items_count:{initialQuality:3},trades:{initialQuality:8}}},looting:{lock:{breaks:0},points:0,research:{links:{},researched:0b},stats:{attack_damage:{initialQuality:7},attack_speed:{initialQuality:7},chance:{initialQuality:1},duration:{},health:{initialQuality:7}}},neutrality:{lock:{breaks:5},points:0,research:{links:{},researched:0b},stats:{}}},synergies:{}},leveling:{},statistic:{}}}", count: 1, chance: 1.0 }],
            inputs: [
                { id: "eternalores:modularium_ingot", count: 64, chance: 1.0 },
                { id: "eternalores:gem_sanguis_vivus", count: 64, chance: 1.0 },
                { id: "eternalores:gem_jade", count: 64, chance: 1.0 },
                { id: "minecraft:gold_block", count: 16, chance: 1.0 },
                { id: "minecraft:gilded_blackstone", count: 16, chance: 1.0 }
            ],
            fluid_input: [
                { id: "minecraft:lava", count: 10000000, chance: 1.0 },
                { id: 'advanced_ae:quantum_infusion_source', count: 10000, chance: 1.0 }
            ],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 1200,
            energy: 100000000,
            outputs: [{ id: "relics:chef_hat{\"relics:data\":{abilities:{abilities:{satiety:{lock:{breaks:5},points:0,research:{links:{},researched:0b},stats:{chance:{initialQuality:4},healing:{initialQuality:8}}}},synergies:{}},leveling:{},statistic:{}}}", count: 1, chance: 1.0 }],
            inputs: [
                { id: "eternalores:modularium_ingot", count: 64, chance: 1.0 },
                { id: "eternalores:gem_sanguis_vivus", count: 64, chance: 1.0 },
                { id: "eternalores:gem_jade", count: 64, chance: 1.0 },
                { id: "minecraft:golden_apple", count: 8, chance: 1.0 },
                { id: "minecraft:cake", count: 4, chance: 1.0 }
            ],
            fluid_input: [
                { id: "minecraft:lava", count: 10000000, chance: 1.0 },
                { id: 'advanced_ae:quantum_infusion_source', count: 10000, chance: 1.0 }
            ],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 1200,
            energy: 100000000,
            outputs: [{ id: "relics:rider_flute{\"relics:data\":{abilities:{abilities:{stable:{lock:{breaks:5},points:0,research:{links:{},researched:0b},stats:{heal:{initialQuality:2},max_slots:{initialQuality:3},resistance:{initialQuality:2}}}},synergies:{}},leveling:{},statistic:{}}}", count: 1, chance: 1.0 }],
            inputs: [
                { id: "eternalores:modularium_ingot", count: 64, chance: 1.0 },
                { id: "eternalores:gem_sanguis_vivus", count: 64, chance: 1.0 },
                { id: "eternalores:gem_jade", count: 64, chance: 1.0 },
                { id: "minecraft:saddle", count: 2, chance: 1.0 },
                { id: "minecraft:goat_horn", count: 1, chance: 1.0 }
            ],
            fluid_input: [
                { id: "minecraft:lava", count: 10000000, chance: 1.0 },
                { id: 'advanced_ae:quantum_infusion_source', count: 10000, chance: 1.0 }
            ],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 1200,
            energy: 100000000,
            outputs: [{ id: "relics:ring_of_the_seven_deadly_sins{\"relics:data\":{abilities:{abilities:{envy:{lock:{breaks:5},points:0,research:{links:{},researched:0b},stats:{incoming_damage_multiplier:{initialQuality:10},outgoing_damage_multiplier:{initialQuality:5}}},gluttony:{lock:{breaks:5},points:0,research:{links:{},researched:0b},stats:{early_multiplier:{initialQuality:2},late_multiplier:{initialQuality:2}}},greed:{lock:{breaks:5},points:0,research:{links:{},researched:0b},stats:{chance:{initialQuality:6},looting:{initialQuality:9},luck:{initialQuality:2}}},lust:{lock:{breaks:5},points:0,research:{links:{},researched:0b},stats:{amount:{initialQuality:5},time:{initialQuality:5}}},pride:{lock:{breaks:5},points:0,research:{links:{},researched:0b},stats:{multiplier:{initialQuality:5}}},sloth:{lock:{breaks:5},points:0,research:{links:{},researched:0b},stats:{speed:{initialQuality:9},time:{initialQuality:7}}},wrath:{lock:{breaks:5},points:0,research:{links:{},researched:0b},stats:{early_multiplier:{initialQuality:2},late_multiplier:{initialQuality:9},window:{initialQuality:5}}}},synergies:{}},leveling:{},statistic:{}}}", count: 1, chance: 1.0 }],
            inputs: [
                { id: "eternalores:modularium_ingot", count: 64, chance: 1.0 },
                { id: "eternalores:gem_sanguis_vivus", count: 64, chance: 1.0 },
                { id: "eternalores:gem_jade", count: 64, chance: 1.0 },
                { id: "relics:clot_of_time{\"relics:data\":{abilities:{abilities:{rewind:{lock:{breaks:5},points:0,research:{links:{},researched:0b},stats:{time:{initialQuality:1}}}},synergies:{}},leveling:{},statistic:{}}}", count: 1, chance: 1.0 },
                { id: "relics:piglin_mask{\"relics:data\":{abilities:{abilities:{barter:{lock:{breaks:5},points:0,research:{links:{},researched:0b},stats:{items_count:{initialQuality:3},trades:{initialQuality:8}}},looting:{lock:{breaks:0},points:0,research:{links:{},researched:0b},stats:{attack_damage:{initialQuality:7},attack_speed:{initialQuality:7},chance:{initialQuality:1},duration:{},health:{initialQuality:7}}},neutrality:{lock:{breaks:5},points:0,research:{links:{},researched:0b},stats:{}}},synergies:{}},leveling:{},statistic:{}}}", count: 1, chance: 1.0 },
                { id: "minecraft:wither_skeleton_skull", count: 3, chance: 1.0 }
            ],
            fluid_input: [
                { id: "minecraft:lava", count: 10000000, chance: 1.0 },
                { id: 'advanced_ae:quantum_infusion_source', count: 10000, chance: 1.0 }
            ],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 1200,
            energy: 100000000,
            outputs: [{ id: "relics:sphere_of_self_sacrifice{\"relics:data\":{abilities:{abilities:{sacrifice:{lock:{breaks:5},points:0,research:{links:{},researched:0b},stats:{resistance:{initialQuality:7},stacks:{}}}},synergies:{}},leveling:{},statistic:{}}}", count: 1, chance: 1.0 }],
            inputs: [
                { id: "eternalores:modularium_ingot", count: 64, chance: 1.0 },
                { id: "eternalores:gem_sanguis_vivus", count: 64, chance: 1.0 },
                { id: "eternalores:gem_jade", count: 64, chance: 1.0 },
                { id: "relics:ring_of_the_seven_deadly_sins{\"relics:data\":{abilities:{abilities:{envy:{lock:{breaks:5},points:0,research:{links:{},researched:0b},stats:{incoming_damage_multiplier:{initialQuality:10},outgoing_damage_multiplier:{initialQuality:5}}},gluttony:{lock:{breaks:5},points:0,research:{links:{},researched:0b},stats:{early_multiplier:{initialQuality:2},late_multiplier:{initialQuality:2}}},greed:{lock:{breaks:5},points:0,research:{links:{},researched:0b},stats:{chance:{initialQuality:6},looting:{initialQuality:9},luck:{initialQuality:2}}},lust:{lock:{breaks:5},points:0,research:{links:{},researched:0b},stats:{amount:{initialQuality:5},time:{initialQuality:5}}},pride:{lock:{breaks:5},points:0,research:{links:{},researched:0b},stats:{multiplier:{initialQuality:5}}},sloth:{lock:{breaks:5},points:0,research:{links:{},researched:0b},stats:{speed:{initialQuality:9},time:{initialQuality:7}}},wrath:{lock:{breaks:5},points:0,research:{links:{},researched:0b},stats:{early_multiplier:{initialQuality:2},late_multiplier:{initialQuality:9},window:{initialQuality:5}}}},synergies:{}},leveling:{},statistic:{}}}", count: 1, chance: 1.0 },
                { id: "minecraft:beacon", count: 1, chance: 1.0 }
            ],
            fluid_input: [
                { id: "minecraft:lava", count: 10000000, chance: 1.0 },
                { id: 'advanced_ae:quantum_infusion_source', count: 10000, chance: 1.0 }
            ],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 1200,
            energy: 100000000,
            outputs: [{ id: "relics:hunting_belt{\"relics:data\":{abilities:{abilities:{pack:{lock:{breaks:5},points:0,research:{links:{},researched:0b},stats:{damage_modifier:{initialQuality:3},pet_radius:{initialQuality:10},resistance_per_pet:{initialQuality:6},revival_cost:{initialQuality:6}}},slots:{lock:{breaks:5},points:0,research:{links:{},researched:0b},stats:{amount:{initialQuality:10}}}},synergies:{}},leveling:{},statistic:{}}}", count: 1, chance: 1.0 }],
            inputs: [
                { id: "eternalores:modularium_ingot", count: 64, chance: 1.0 },
                { id: "eternalores:gem_sanguis_vivus", count: 64, chance: 1.0 },
                { id: "eternalores:gem_jade", count: 64, chance: 1.0 },
                { id: "relics:rider_flute{\"relics:data\":{abilities:{abilities:{stable:{lock:{breaks:5},points:0,research:{links:{},researched:0b},stats:{heal:{initialQuality:2},max_slots:{initialQuality:3},resistance:{initialQuality:2}}}},synergies:{}},leveling:{},statistic:{}}}", count: 1, chance: 1.0 },
                { id: "minecraft:netherite_chestplate", count: 1, chance: 1.0 },
                { id: "minecraft:lead", count: 4, chance: 1.0 }
            ],
            fluid_input: [
                { id: "minecraft:lava", count: 10000000, chance: 1.0 },
                { id: 'advanced_ae:quantum_infusion_source', count: 10000, chance: 1.0 }
            ],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 10,
            energy: 10,
            outputs: [{ id: "immersiveengineering:component_iron", count: 2, chance: 1.0 }],
            inputs: [
                { id: "minecraft:iron_ingot", count: 1, chance: 1.0 },
                { id: "eternalores:copper_nugget", count: 4, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 10,
            energy: 10,
            outputs: [{ id: "immersiveengineering:component_steel", count: 2, chance: 1.0 }],
            inputs: [
                { id: 'eternalores:steel_ingot', count: 1, chance: 1.0 },
                { id: "eternalores:copper_nugget", count: 2, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 10,
            energy: 10,
            outputs: [{ id: "immersiveengineering:electron_tube", count: 12, chance: 1.0 }],
            inputs: [
                { id: "minecraft:glass", count: 1, chance: 1.0 },
                { id: "minecraft:copper_ingot", count: 1, chance: 1.0 },
                { id: "minecraft:redstone", count: 1, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 10,
            energy: 10,
            outputs: [{ id: "immersiveengineering:light_bulb", count: 6, chance: 1.0 }],
            inputs: [
                { id: "minecraft:glass", count: 1, chance: 1.0 },
                { id: "eternalores:copper_nugget", count: 3, chance: 1.0 },
                { id: "minecraft:paper", count: 1, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 10,
            energy: 10,
            outputs: [{ id: "immersiveengineering:light_bulb", count: 6, chance: 1.0 }],
            inputs: [
                { id: "minecraft:glass", count: 1, chance: 1.0 },
                { id: "eternalores:copper_nugget", count: 3, chance: 1.0 },
                { id: "minecraft:bamboo", count: 1, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 10,
            energy: 10,
            outputs: [{ id: "immersiveengineering:circuit_board", count: 1, chance: 1.0 }],
            inputs: [
                { id: 'pneumaticcraft:plastic', count: 1, chance: 1.0 },
                { id: "eternalores:copper_nugget", count: 5, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 10,
            energy: 10,
            outputs: [{ id: "immersiveengineering:component_electronic", count: 3, chance: 1.0 }],
            inputs: [
                { id: "immersiveengineering:circuit_board", count: 1, chance: 1.0 },
                { id: 'minecraft:quartz', count: 2, chance: 1.0 },
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 10,
            energy: 10,
            outputs: [{ id: "immersiveengineering:component_electronic_adv", count: 3, chance: 1.0 }],
            inputs: [
                { id: "immersiveengineering:component_electronic", count: 1, chance: 1.0 },
                { id: "immersiveengineering:light_bulb", count: 2, chance: 1.0 },
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: "pneumaticcraft:printed_circuit_board", count: 3, chance: 1.0 }],
            inputs: [
                {id: 'pneumaticcraft:plastic', count: 1, chance: 1.0},
                {id: 'eternalores:invar_capacitor', count: 6, chance: 1.0},
                {id: 'pneumaticcraft:transistor', count: 12, chance: 1.0},
                {id: 'minecraft:copper_block', count: 4, chance: 1.0}
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 50,
            energy: 2000,
            outputs: [{ id: "mekanism:alloy_atomic", count: 2, chance: 1.0 }],
            inputs: [
                {id: 'mekanism:enriched_refined_obsidian', count: 1, chance: 1.0 },
                {id: "minecraft:diamond", count: 2, chance: 1.0}
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 1,
            energy: 27000,
            outputs: [{ id: "industrialforegoing:machine_frame_simple", count: 1, chance: 1.0 }],
            inputs: [
                { id: "minecraft:iron_block", count: 1, chance: 1.0 },
                { id: "minecraft:redstone_block", count: 2, chance: 1.0 },
                { id: "minecraft:smooth_stone", count: 4, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 10,
            energy: 270000,
            outputs: [{ id: "industrialforegoing:machine_frame_advanced", count: 1, chance: 1.0 }],
            inputs: [
                { id: "industrialforegoing:machine_frame_simple", count: 1, chance: 1.0 },
                { id: "minecraft:gold_block", count: 2, chance: 1.0 },
                { id: "minecraft:diamond", count: 4, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 20,
            energy: 270000,
            outputs: [{ id: "industrialforegoing:machine_frame_supreme", count: 1, chance: 1.0 }],
            inputs: [
                { id: "industrialforegoing:machine_frame_advanced", count: 1, chance: 1.0 },
                { id: "minecraft:netherite_ingot", count: 2, chance: 1.0 },
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 2400,
            energy: 100000,
            outputs: [{ id: "minecraft:netherite_upgrade_smithing_template", count: 1, chance: 1.0 }],
            inputs: [
                { id: "minecraft:netherrack", count: 4, chance: 1.0 },
                { id: "minecraft:netherite_scrap", count: 1, chance: 1.0 },
                { id: "minecraft:diamond", count: 2, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 2400,
            energy: 100000,
            outputs: [{ id: "minecraft:sentry_armor_trim_smithing_template", count: 1, chance: 1.0 }],
            inputs: [
                { id: "minecraft:cobblestone", count: 4, chance: 1.0 },
                { id: "minecraft:iron_ingot", count: 2, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 2400,
            energy: 100000,
            outputs: [{ id: "minecraft:vex_armor_trim_smithing_template", count: 1, chance: 1.0 }],
            inputs: [
                { id: "minecraft:cobblestone", count: 4, chance: 1.0 },
                { id: "minecraft:emerald", count: 2, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 2400,
            energy: 100000,
            outputs: [{ id: "minecraft:wild_armor_trim_smithing_template", count: 1, chance: 1.0 }],
            inputs: [
                { id: "minecraft:mossy_cobblestone", count: 4, chance: 1.0 },
                { id: "minecraft:vine", count: 2, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 2400,
            energy: 100000,
            outputs: [{ id: "minecraft:coast_armor_trim_smithing_template", count: 1, chance: 1.0 }],
            inputs: [
                { id: "minecraft:cobblestone", count: 4, chance: 1.0 },
                { id: "minecraft:copper_ingot", count: 2, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 2400,
            energy: 100000,
            outputs: [{ id: "minecraft:dune_armor_trim_smithing_template", count: 1, chance: 1.0 }],
            inputs: [
                { id: "minecraft:sandstone", count: 4, chance: 1.0 },
                { id: "minecraft:lapis_lazuli", count: 2, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 2400,
            energy: 100000,
            outputs: [{ id: "minecraft:wayfinder_armor_trim_smithing_template", count: 1, chance: 1.0 }],
            inputs: [
                { id: "minecraft:terracotta", count: 4, chance: 1.0 },
                { id: "minecraft:redstone", count: 4, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 2400,
            energy: 100000,
            outputs: [{ id: "minecraft:raiser_armor_trim_smithing_template", count: 1, chance: 1.0 }],
            inputs: [
                { id: "minecraft:terracotta", count: 4, chance: 1.0 },
                { id: "minecraft:iron_nugget", count: 4, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 2400,
            energy: 100000,
            outputs: [{ id: "minecraft:shaper_armor_trim_smithing_template", count: 1, chance: 1.0 }],
            inputs: [
                { id: "minecraft:terracotta", count: 4, chance: 1.0 },
                { id: "minecraft:gold_nugget", count: 4, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 2400,
            energy: 100000,
            outputs: [{ id: "minecraft:host_armor_trim_smithing_template", count: 1, chance: 1.0 }],
            inputs: [
                { id: "minecraft:terracotta", count: 4, chance: 1.0 },
                { id: "minecraft:clay_ball", count: 4, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 2400,
            energy: 100000,
            outputs: [{ id: "minecraft:ward_armor_trim_smithing_template", count: 1, chance: 1.0 }],
            inputs: [
                { id: "minecraft:deepslate", count: 4, chance: 1.0 },
                { id: "minecraft:amethyst_shard", count: 2, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 2400,
            energy: 100000,
            outputs: [{ id: "minecraft:silence_armor_trim_smithing_template", count: 1, chance: 1.0 }],
            inputs: [
                { id: "minecraft:deepslate", count: 4, chance: 1.0 },
                { id: "minecraft:echo_shard", count: 1, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 2400,
            energy: 100000,
            outputs: [{ id: "minecraft:tide_armor_trim_smithing_template", count: 1, chance: 1.0 }],
            inputs: [
                { id: "minecraft:prismarine", count: 4, chance: 1.0 },
                { id: "minecraft:prismarine_crystals", count: 2, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 2400,
            energy: 100000,
            outputs: [{ id: "minecraft:snout_armor_trim_smithing_template", count: 1, chance: 1.0 }],
            inputs: [
                { id: "minecraft:blackstone", count: 4, chance: 1.0 },
                { id: "minecraft:raw_gold", count: 2, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 2400,
            energy: 100000,
            outputs: [{ id: "minecraft:rib_armor_trim_smithing_template", count: 1, chance: 1.0 }],
            inputs: [
                { id: "minecraft:netherrack", count: 4, chance: 1.0 },
                { id: "minecraft:bone", count: 2, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 2400,
            energy: 100000,
            outputs: [{ id: "minecraft:eye_armor_trim_smithing_template", count: 1, chance: 1.0 }],
            inputs: [
                { id: "minecraft:end_stone", count: 4, chance: 1.0 },
                { id: "minecraft:ender_eye", count: 1, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 2400,
            energy: 100000,
            outputs: [{ id: "minecraft:spire_armor_trim_smithing_template", count: 1, chance: 1.0 }],
            inputs: [
                { id: "minecraft:purpur_block", count: 4, chance: 1.0 },
                { id: "minecraft:chorus_fruit", count: 2, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 2400,
            energy: 100000,
            outputs: [{ id: "minecraft:flow_armor_trim_smithing_template", count: 1, chance: 1.0 }],
            inputs: [
                { id: "minecraft:tuff", count: 4, chance: 1.0 },
                { id: "minecraft:breeze_rod", count: 1, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 2400,
            energy: 100000,
            outputs: [{ id: "minecraft:bolt_armor_trim_smithing_template", count: 1, chance: 1.0 }],
            inputs: [
                { id: "minecraft:tuff", count: 4, chance: 1.0 },
                { id: "minecraft:copper_bulb", count: 1, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: "minecraft:heart_of_the_sea", count: 1, chance: 1.0 }],
            inputs: [
                { id: "minecraft:nautilus_shell", count: 4, chance: 1.0 },
                { id: "minecraft:prismarine_crystals", count: 4, chance: 1.0 },
                { id: "minecraft:blue_dye", count: 1, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: "minecraft:turtle_scute", count: 5, chance: 1.0 }],
            inputs: [
                { id: "minecraft:seagrass", count: 4, chance: 1.0 },
                { id: "minecraft:kelp", count: 2, chance: 1.0 },
                { id: "minecraft:slime_ball", count: 1, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: "minecraft:armadillo_scute", count: 16, chance: 1.0 }],
            inputs: [
                { id: "minecraft:dirt", count: 1, chance: 1.0 },
                { id: "minecraft:coarse_dirt", count: 2, chance: 1.0 },
                { id: "minecraft:clay_ball", count: 2, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: "minecraft:rabbit_hide", count: 4, chance: 1.0 }],
            inputs: [
                { id: "minecraft:leather", count: 1, chance: 1.0 },
                { id: "minecraft:carrot", count: 1, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: "minecraft:breeze_rod", count: 2, chance: 1.0 }],
            inputs: [
                { id: "minecraft:chiseled_tuff", count: 2, chance: 1.0 },
                { id: 'minecraft:oxidized_copper_bulb', count: 8, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 150,
            energy: 200000,
            outputs: [{ id: "minecraft:ominous_bottle{\"minecraft:ominous_bottle_amplifier\":4}", count: 1, chance: 1.0 }],
            inputs: [
                { id: "minecraft:glass_bottle", count: 1, chance: 1.0 },
                { id: "minecraft:trial_key", count: 1, chance: 1.0 },
                { id: "minecraft:emerald", count: 16, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 120,
            energy: 100000,
            outputs: [{ id: "minecraft:trial_key", count: 1, chance: 1.0 }],
            inputs: [
                { id: "minecraft:copper_ingot", count: 3, chance: 1.0 },
                { id: "minecraft:tuff", count: 2, chance: 1.0 },
                { id: "minecraft:chiseled_tuff", count: 1, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 240,
            energy: 100000,
            outputs: [{ id: "minecraft:ominous_trial_key", count: 1, chance: 1.0 }],
            inputs: [
                { id: "minecraft:oxidized_copper", count: 3, chance: 1.0 },
                { id: "minecraft:diamond", count: 1, chance: 1.0 },
                { id: "minecraft:breeze_rod", count: 16, chance: 1.0 }
            ],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 240,
            energy: 100000,
            outputs: [
                { id: 'eternalores:eternity_ingot', count: 1, chance: 1.0 },
                { id: 'eternalores:universium_small_dust', count: 3, chance: 1.0}
            ],
            inputs: [
                { id: 'eternalores:antimatter_block', count: 1, chance: 1.0 },
                { id: 'eternalores:strange_matter_block', count: 1, chance: 1.0 },
                { id: 'eternalores:exotic_matter_block', count: 1, chance: 1.0 },
                { id: 'eternalores:enriched_voiderite', count: 1, chance: 0.33 },
                { id: 'malum:umbral_spirit', count: 1, chance: 0 }
            ],
            fluid_input: [{ id: 'pastel:midnight_solution', count: 10000, chance: 1.0 }],
            fluid_output: [],
            energy_out: 0
        }
    ];

    let machine_id = "mmr:colider";

    let input_slots = [
        { x: 19, y: 12 }, { x: 37, y: 12 }, { x: 55, y: 12 },
        { x: 19, y: 30 }, { x: 37, y: 30 }, { x: 55, y: 30 },
        { x: 19, y: 48 }, { x: 37, y: 48 }, { x: 55, y: 48 }
    ];

    let output_slots = [
        { x: 105, y: 12 }, { x: 123, y: 12 }, { x: 141, y: 12 },
        { x: 105, y: 30 }, { x: 123, y: 30 }, { x: 141, y: 30 },
        { x: 105, y: 48 }, { x: 123, y: 48 }, { x: 141, y: 48 }
    ];

    let energy_in = { x: 0, y: 12 };
    let energy_out = { x: 160, y: 12 };
    let progressArrow = { x: 77, y: 30 };

    let i = 0;
    recipes.forEach(rs => {
        i++;

        let recipe = catalyst.recipes.modular_machinery_reborn.machine_recipe(machine_id, rs.time)
            .width(180)
            .height(80)
            .progressData(ProgressData.create().x(progressArrow.x).y(progressArrow.y))
            .requireFunctionOnStart("starting")
            .requireFunctionOnEnd("ending");
            
        let total_inputs = 0;
        if(rs.inputs && rs.inputs.length > 0)
        {
            rs.inputs.forEach(input => {
                total_inputs++;
                recipe.requireItem(Item.of(input.id, input.count), input.chance)
            })
        }

        if(total_inputs > 9) throw Error("Can't have more than 9 item inputs! " + rs)

        if(rs.fluid_input && rs.fluid_input.length > 0)
        {
            rs.fluid_input.forEach(input => {
                total_inputs++;
                recipe.requireFluid(Fluid.of(input.id, input.count), input.chance)
            })
        }

        if(total_inputs > 9) throw Error("Can't have more than 9 inputs in total! " + rs)

        if(rs.energy && rs.energy > 0)
        {
            recipe.requireEnergyPerTick(rs.energy);
        }

        //outputs
        let total_outputs = 0;
        if(rs.outputs && rs.outputs.length > 0)
        {
            rs.outputs.forEach(input => {
                total_outputs++;
                recipe.produceItem(Item.of(input.id, input.count), input.chance)
            })
        }

        if(total_outputs > 9) throw Error("Can't have more than 9 item outputs! " + rs)

        if(rs.fluid_output && rs.fluid_output.length > 0)
        {
            rs.fluid_output.forEach(input => {
                total_outputs++;
                recipe.produceFluid(Fluid.of(input.id, input.count), input.chance)
            })
        }

        if(total_outputs > 9) throw Error("Can't have more than 9 outputs in total! " + rs)

        if(rs.energy_out && rs.energy_out > 0)
        {
            recipe.produceEnergyPerTick(rs.energy_out);
        }

        recipe.jei(); //Indica que estamos construyendo la paguina de JEI, pero la receta es la de arriba
            
        let inputIdx = 0;
            
        if(rs.inputs && rs.inputs.length > 0)
        {
            rs.inputs.forEach(input => {
                let slot = input_slots[inputIdx];
                recipe.requireItem(Item.of(input.id, input.count), input.chance, slot.x, slot.y);
                inputIdx++;
            });
        }

        if(rs.fluid_input && rs.fluid_input.length > 0)
        {
            rs.fluid_input.forEach(fluid => {
                let slot = input_slots[inputIdx];
                recipe.requireFluid(Fluid.of(fluid.id, fluid.count), fluid.chance, slot.x, slot.y);
                inputIdx++;
            });
        }

        for(let slot_index = inputIdx; slot_index < 9; slot_index++)
        {
            recipe.emptyItem(input_slots[slot_index].x, input_slots[slot_index].y);
        }
            
        if(rs.energy && rs.energy > 0)
        {
            recipe.requireEnergyPerTick(rs.energy, energy_in.x, energy_in.y);
        }
            
        if(rs.energy_out && rs.energy_out > 0)
        {
            recipe.produceEnergyPerTick(rs.energy_out, energy_out.x, energy_out.y);
        }
            
        let output_index = 0;
            
        if(rs.outputs && rs.outputs.length > 0)
        {
            rs.outputs.forEach(out => {
                let slot = output_slots[output_index];
                recipe.produceItem(Item.of(out.id, out.count), out.chance, slot.x, slot.y);
                output_index++;
            });
        }

        if(rs.fluid_output && rs.fluid_output.length > 0)
        {
            rs.fluid_output.forEach(out => {
                let slot = output_slots[output_index];
                recipe.produceFluid(Fluid.of(out.id, out.count), out.chance, slot.x, slot.y);
                output_index++;
            });
        }

        for(let slot_index = output_index; slot_index < 9; slot_index++)
        {
            recipe.emptyItem(output_slots[slot_index].x, output_slots[slot_index].y);
        }

        let raw_id = (rs.outputs && rs.outputs.length > 0) ? rs.outputs[0].id : `recipe_${i}`;
        let recipe_name = raw_id.split('{')[0];
            
        recipe.id(`catalyst:mmr/colider/${i}/${recipe_name.replace(':', '_')}`);
    });

    console.log("[CatJS] Finished Colider recipes");
});

MMREvents.recipeFunction("starting", catalyst => {
    let tile = catalyst.getTile();
    let level = tile.getLevel();
    let pos = tile.getBlockPos();
    let targetPos = pos.above(4); 
    
    let data = tile.getPersistentData();
    let jobs = data.getInt("parallels") || 0;
    
    let state = level.getBlockState(targetPos);
    if(state.getBlock().id !== 'catalystcore:gravity_anomaly')
    {
        jobs = 0;
    }
    
    jobs++;
    data.putInt("parallels", jobs);

    if(jobs === 1)
    {
        level.setBlock(targetPos, Block.getBlock('catalystcore:gravity_anomaly').defaultBlockState(), 3);
    }
});

MMREvents.recipeFunction("ending", catalyst => {
    let tile = catalyst.getTile();
    let level = tile.getLevel();
    let pos = tile.getBlockPos();
    let targetPos = pos.above(4); 

    let state = level.getBlockState(targetPos);
    let blockId = state.getBlock().id;

    if(blockId !== 'catalystcore:gravity_anomaly')
    {
        catalyst.error("No black hole");
    }

    let data = tile.getPersistentData();
    let jobs = data.getInt("parallels") || 0;

    if(jobs > 0)
    {
        jobs--;
        data.putInt("parallels", jobs);
    }

    if(jobs === 0)
    {
        level.setBlock(targetPos, Block.getBlock('minecraft:air').defaultBlockState(), 3);
    }
});

/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
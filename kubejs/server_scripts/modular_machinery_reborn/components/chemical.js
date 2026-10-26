/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/

ServerEvents.recipes(catalyst => {

    // Small tier
    catalyst.shaped(Item.of('modular_machinery_reborn_mekanism:chemicalinputhatch_small'),
        [
            'BCB',
            'FEF',
            'ADA'
        ],
        {
            A: 'eternalores:plate_biosteel',
            B: 'eternalores:plate_cast_iron',
            C: 'pipez:gas_pipe',
            D: 'pipez:gas_pipe',
            E: 'eternalores:biosteel_foil',
            F: 'mekanism:ultimate_chemical_tank'
        }
    ).id(`catalyst:mmr/ports/small_input_chemical_hatch`);

    catalyst.shaped(Item.of('modular_machinery_reborn_mekanism:chemicaloutputhatch_small'),
        [
            'BDB',
            'FEF',
            'ACA'
        ],
        {
            B: 'eternalores:plate_biosteel',
            A: 'eternalores:plate_cast_iron',
            C: 'pipez:gas_pipe',
            D: 'pipez:gas_pipe',
            E: 'eternalores:biosteel_foil',
            F: 'mekanism:ultimate_chemical_tank'
        }
    ).id(`catalyst:mmr/ports/small_output_chemical_hatch`);

    // Normal tier
    catalyst.shaped(Item.of('modular_machinery_reborn_mekanism:chemicalinputhatch_normal'),
        [
            'BCB',
            'FEF',
            'ADA'
        ],
        {
            A: 'energizedpower:energized_copper_plate',
            B: 'eternalores:plate_lumium',
            C: 'mekanism:basic_pressurized_tube',
            D: 'mekanism:basic_chemical_tank',
            E: 'eternalores:netherite_foil',
            F: 'modular_machinery_reborn_mekanism:chemicalinputhatch_small'
        }
    ).id(`catalyst:mmr/ports/normal_input_chemical_hatch`);

    catalyst.shaped(Item.of('modular_machinery_reborn_mekanism:chemicaloutputhatch_normal'),
        [
            'BDB',
            'FEF',
            'ACA'
        ],
        {
            A: 'energizedpower:energized_copper_plate',
            B: 'eternalores:plate_lumium',
            C: 'mekanism:basic_pressurized_tube',
            D: 'mekanism:basic_chemical_tank',
            E: 'eternalores:netherite_foil',
            F: 'modular_machinery_reborn_mekanism:chemicaloutputhatch_small'
        }
    ).id(`catalyst:mmr/ports/normal_output_chemical_hatch`);

    // Reinforced Tier
    catalyst.shaped(Item.of('modular_machinery_reborn_mekanism:chemicalinputhatch_reinforced'),
        [
            'BCB',
            'FEF',
            'ADA'
        ],
        {
            A: 'eternalores:plate_titanium',
            B: 'eternalores:plate_nethersteel',
            C: 'mekanism:basic_pressurized_tube',
            D: 'mekanism:basic_chemical_tank',
            E: 'eternalores:cast_steel_foil',
            F: 'modular_machinery_reborn_mekanism:chemicalinputhatch_normal'
        }
    ).id(`catalyst:mmr/ports/reinforced_input_chemical_hatch`);

    catalyst.shaped(Item.of('modular_machinery_reborn_mekanism:chemicaloutputhatch_reinforced'),
        [
            'BDB',
            'FEF',
            'ACA'
        ],
        {
            A: 'eternalores:plate_titanium',
            B: 'eternalores:plate_nethersteel',
            C: 'mekanism:basic_pressurized_tube',
            D: 'mekanism:basic_chemical_tank',
            E: 'eternalores:cast_steel_foil',
            F: 'modular_machinery_reborn_mekanism:chemicaloutputhatch_normal'
        }
    ).id(`catalyst:mmr/ports/reinforced_output_chemical_hatch`);

    // Big Tier
    catalyst.shaped(Item.of('modular_machinery_reborn_mekanism:chemicalinputhatch_big'),
        [
            'BCB',
            'FEF',
            'ADA'
        ],
        {
            A: 'eternalores:plate_tungsten',
            B: 'eternalores:plate_uraninite',
            C: 'mekanism:advanced_pressurized_tube',
            D: 'mekanism:advanced_chemical_tank',
            E: 'eternalores:iridium_foil',
            F: 'modular_machinery_reborn_mekanism:chemicalinputhatch_reinforced'
        }
    ).id(`catalyst:mmr/ports/big_input_chemical_hatch`);

    catalyst.shaped(Item.of('modular_machinery_reborn_mekanism:chemicaloutputhatch_big'),
        [
            'BDB',
            'FEF',
            'ACA'
        ],
        {
            A: 'eternalores:plate_tungsten',
            B: 'eternalores:plate_uraninite',
            C: 'mekanism:advanced_pressurized_tube',
            D: 'mekanism:advanced_chemical_tank',
            E: 'eternalores:iridium_foil',
            F: 'modular_machinery_reborn_mekanism:chemicaloutputhatch_reinforced'
        }
    ).id(`catalyst:mmr/ports/big_output_chemical_hatch`);

    // Huge Tier
    catalyst.shaped(Item.of('modular_machinery_reborn_mekanism:chemicalinputhatch_huge'),
        [
            'BCB',
            'FEF',
            'ADA'
        ],
        {
            A: 'eternalores:plate_eternal_dark',
            B: 'eternalores:plate_eternal_light',
            C: 'mekanism:advanced_pressurized_tube',
            D: 'mekanism:advanced_chemical_tank',
            E: 'eternalores:plutonium_foil',
            F: 'modular_machinery_reborn_mekanism:chemicalinputhatch_big'
        }
    ).id(`catalyst:mmr/ports/huge_input_chemical_hatch`);

    catalyst.shaped(Item.of('modular_machinery_reborn_mekanism:chemicaloutputhatch_huge'),
        [
            'BDB',
            'FEF',
            'ACA'
        ],
        {
            A: 'eternalores:plate_eternal_dark',
            B: 'eternalores:plate_eternal_light',
            C: 'mekanism:advanced_pressurized_tube',
            D: 'mekanism:advanced_chemical_tank',
            E: 'eternalores:plutonium_foil',
            F: 'modular_machinery_reborn_mekanism:chemicaloutputhatch_big'
        }
    ).id(`catalyst:mmr/ports/huge_output_chemical_hatch`);

    // Ludicrous Tier
    catalyst.shaped(Item.of('modular_machinery_reborn_mekanism:chemicalinputhatch_ludicrous'),
        [
            'BCB',
            'FEF',
            'ADA'
        ],
        {
            A: 'eternalores:modularium_ingot',
            B: 'eternalores:plate_shadowsteel',
            C: 'mekanism:elite_pressurized_tube',
            D: 'mekanism:elite_chemical_tank',
            E: 'eternalores:ultimatitanium_foil',
            F: 'modular_machinery_reborn_mekanism:chemicalinputhatch_huge'
        }
    ).id(`catalyst:mmr/ports/ludicrous_input_chemical_hatch`);

    catalyst.shaped(Item.of('modular_machinery_reborn_mekanism:chemicaloutputhatch_ludicrous'),
        [
            'BDB',
            'FEF',
            'ACA'
        ],
        {
            A: 'eternalores:modularium_ingot',
            B: 'eternalores:plate_shadowsteel',
            C: 'mekanism:elite_pressurized_tube',
            D: 'mekanism:elite_chemical_tank',
            E: 'eternalores:ultimatitanium_foil',
            F: 'modular_machinery_reborn_mekanism:chemicaloutputhatch_huge'
        }
    ).id(`catalyst:mmr/ports/ludicrous_output_chemical_hatch`);

    // Vacuum Tier
    catalyst.shaped(Item.of('modular_machinery_reborn_mekanism:chemicalinputhatch_vacuum'),
        [
            'BCB',
            'FEF',
            'ADA'
        ],
        {
            A: 'eternalores:etherium_ingot',
            B: 'eternalores:plate_sculkite',
            C: 'mekanism:ultimate_pressurized_tube',
            D: 'mekanism:ultimate_chemical_tank',
            E: 'eternalores:gem_tachyarite',
            F: 'modular_machinery_reborn_mekanism:chemicalinputhatch_ludicrous'
        }
    ).id(`catalyst:mmr/ports/vacuum_input_chemical_hatch`);

    catalyst.shaped(Item.of('modular_machinery_reborn_mekanism:chemicaloutputhatch_vacuum'),
        [
            'BDB',
            'FEF',
            'ACA'
        ],
        {
            A: 'eternalores:etherium_ingot',
            B: 'eternalores:plate_sculkite',
            C: 'mekanism:ultimate_pressurized_tube',
            D: 'mekanism:ultimate_chemical_tank',
            E: 'eternalores:gem_tachyarite',
            F: 'modular_machinery_reborn_mekanism:chemicaloutputhatch_ludicrous'
        }
    ).id(`catalyst:mmr/ports/vacuum_output_chemical_hatch`);
})

/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/

ServerEvents.recipes(catalyst => {
function CreatePort(port_inn, Port_out, inn1, inn2, inn3) {
    catalyst.shaped(
        Item.of(Port_out, 1), // arg 1: output
        [
          'B B',
          'DAD', // arg 2: the shape (array of strings)
          'C C'
        ],
        {
          A: inn1,
          B: inn2,  //arg 3: the mapping object
          C: inn3,
          D: port_inn
        }
      )
}
//energy inn
CreatePort('modular_machinery_reborn:energyinputhatch_small','modular_machinery_reborn:energyinputhatch_normal','minecraft:redstone_block','mekanism:advanced_universal_cable','powah:energy_hopper_niotic')
CreatePort('modular_machinery_reborn:energyinputhatch_normal','modular_machinery_reborn:energyinputhatch_reinforced','minecraft:redstone_block','mekanism:advanced_universal_cable','powah:energy_hopper_niotic')
CreatePort('modular_machinery_reborn:energyinputhatch_reinforced','modular_machinery_reborn:energyinputhatch_big','minecraft:redstone_block','mekanism:elite_universal_cable','powah:energy_hopper_spirited')
CreatePort('modular_machinery_reborn:energyinputhatch_big','modular_machinery_reborn:energyinputhatch_huge','minecraft:redstone_block','mekanism:elite_universal_cable','powah:energy_hopper_spirited')
CreatePort('modular_machinery_reborn:energyinputhatch_huge','modular_machinery_reborn:energyinputhatch_ludicrous','minecraft:redstone_block','mekanism:ultimate_universal_cable','powah:energy_hopper_nitro')
CreatePort('modular_machinery_reborn:energyinputhatch_ludicrous','modular_machinery_reborn:energyinputhatch_ultimate','minecraft:redstone_block','mekanism:ultimate_universal_cable','powah:energy_hopper_nitro')
//energy out
CreatePort('modular_machinery_reborn:energyoutputhatch_small','modular_machinery_reborn:energyoutputhatch_normal','minecraft:redstone_block','mekanism:advanced_universal_cable','powah:energy_hopper_niotic')
CreatePort('modular_machinery_reborn:energyoutputhatch_normal','modular_machinery_reborn:energyoutputhatch_reinforced','minecraft:redstone_block','mekanism:advanced_universal_cable','powah:energy_hopper_niotic')
CreatePort('modular_machinery_reborn:energyoutputhatch_reinforced','modular_machinery_reborn:energyoutputhatch_big','minecraft:redstone_block','mekanism:elite_universal_cable','powah:energy_hopper_spirited')
CreatePort('modular_machinery_reborn:energyoutputhatch_big','modular_machinery_reborn:energyoutputhatch_huge','minecraft:redstone_block','mekanism:elite_universal_cable','powah:energy_hopper_spirited')
CreatePort('modular_machinery_reborn:energyoutputhatch_huge','modular_machinery_reborn:energyoutputhatch_ludicrous','minecraft:redstone_block','mekanism:ultimate_universal_cable','powah:energy_hopper_nitro')
CreatePort('modular_machinery_reborn:energyoutputhatch_ludicrous','modular_machinery_reborn:energyoutputhatch_ultimate','minecraft:redstone_block','mekanism:ultimate_universal_cable','powah:energy_hopper_nitro')
//item inn
CreatePort('modular_machinery_reborn:inputbus_small','modular_machinery_reborn:inputbus_normal','pipez:basic_upgrade','minecraft:hopper','#c:chests')
CreatePort('modular_machinery_reborn:inputbus_normal','modular_machinery_reborn:inputbus_reinforced','pipez:basic_upgrade','minecraft:hopper','#c:chests')
CreatePort('modular_machinery_reborn:inputbus_reinforced','modular_machinery_reborn:inputbus_big','pipez:improved_upgrade','minecraft:hopper','#c:chests')
CreatePort('modular_machinery_reborn:inputbus_big','modular_machinery_reborn:inputbus_huge','pipez:advanced_upgrade','minecraft:hopper','#c:chests')
CreatePort('modular_machinery_reborn:inputbus_huge','modular_machinery_reborn:inputbus_ludicrous','pipez:ultimate_upgrade','minecraft:hopper','#c:chests')
//item out
CreatePort('modular_machinery_reborn:outputbus_small','modular_machinery_reborn:outputbus_normal','pipez:basic_upgrade','#c:chests','minecraft:hopper')
CreatePort('modular_machinery_reborn:outputbus_normal','modular_machinery_reborn:outputbus_reinforced','pipez:basic_upgrade','#c:chests','minecraft:hopper')
CreatePort('modular_machinery_reborn:outputbus_reinforced','modular_machinery_reborn:outputbus_big','pipez:improved_upgrade','#c:chests','minecraft:hopper')
CreatePort('modular_machinery_reborn:outputbus_big','modular_machinery_reborn:outputbus_huge','pipez:advanced_upgrade','#c:chests','minecraft:hopper')
CreatePort('modular_machinery_reborn:outputbus_huge','modular_machinery_reborn:outputbus_ludicrous','pipez:ultimate_upgrade','#c:chests','minecraft:hopper')
//fluid inn
CreatePort('modular_machinery_reborn:fluidinputhatch_small','modular_machinery_reborn:fluidinputhatch_normal','pipez:basic_upgrade','mekanism:basic_mechanical_pipe','mekanism:basic_fluid_tank')
CreatePort('modular_machinery_reborn:fluidinputhatch_normal','modular_machinery_reborn:fluidinputhatch_reinforced','pipez:basic_upgrade','mekanism:basic_mechanical_pipe','mekanism:basic_fluid_tank')
CreatePort('modular_machinery_reborn:fluidinputhatch_reinforced','modular_machinery_reborn:fluidinputhatch_big','pipez:improved_upgrade','mekanism:advanced_mechanical_pipe','mekanism:advanced_fluid_tank')
CreatePort('modular_machinery_reborn:fluidinputhatch_big','modular_machinery_reborn:fluidinputhatch_huge','pipez:improved_upgrade','mekanism:advanced_mechanical_pipe','mekanism:advanced_fluid_tank')
CreatePort('modular_machinery_reborn:fluidinputhatch_huge','modular_machinery_reborn:fluidinputhatch_ludicrous','pipez:advanced_upgrade','mekanism:elite_mechanical_pipe','mekanism:elite_fluid_tank')
CreatePort('modular_machinery_reborn:fluidinputhatch_ludicrous','modular_machinery_reborn:fluidinputhatch_vacuum','pipez:ultimate_upgrade','mekanism:ultimate_mechanical_pipe','mekanism:ultimate_fluid_tank')
//fluid out
CreatePort('modular_machinery_reborn:fluidoutputhatch_small','modular_machinery_reborn:fluidoutputhatch_normal','pipez:basic_upgrade','mekanism:basic_fluid_tank','mekanism:basic_mechanical_pipe')
CreatePort('modular_machinery_reborn:fluidoutputhatch_normal','modular_machinery_reborn:fluidoutputhatch_reinforced','pipez:basic_upgrade','mekanism:basic_fluid_tank','mekanism:basic_mechanical_pipe')
CreatePort('modular_machinery_reborn:fluidoutputhatch_reinforced','modular_machinery_reborn:fluidoutputhatch_big','pipez:improved_upgrade','mekanism:advanced_fluid_tank','mekanism:advanced_mechanical_pipe')
CreatePort('modular_machinery_reborn:fluidoutputhatch_big','modular_machinery_reborn:fluidoutputhatch_huge','pipez:improved_upgrade','mekanism:advanced_fluid_tank','mekanism:advanced_mechanical_pipe')
CreatePort('modular_machinery_reborn:fluidoutputhatch_huge','modular_machinery_reborn:fluidoutputhatch_ludicrous','pipez:advanced_upgrade','mekanism:elite_fluid_tank','mekanism:elite_mechanical_pipe')
CreatePort('modular_machinery_reborn:fluidoutputhatch_ludicrous','modular_machinery_reborn:fluidoutputhatch_vacuum','pipez:ultimate_upgrade','mekanism:ultimate_fluid_tank','mekanism:ultimate_mechanical_pipe')
//vent
CreatePort("minecraft:redstone_block",'modular_machinery_reborn:casing_vent',"modular_machinery_reborn:casing_plain",'stevescarts:component_cleaning_fan','stevescarts:component_cleaning_fan')
CreatePort("minecraft:paper",'modular_machinery_reborn:blueprint',"modular_machinery_reborn:casing_plain","minecraft:blue_dye",'minecraft:blue_dye')










});
/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/

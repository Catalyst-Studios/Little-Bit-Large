/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/

ServerEvents.recipes(catalyst => {
    catalyst.remove('forcecraft:infuser/convert_time_torch')
    catalyst.remove('ae2:network/blocks/spatial_anchor')
    catalyst.remove('reliquary:alkahestry_tome')
    catalyst.remove('energizedpower:crafting/time_controller')
    catalyst.remove('energizedpower:crafting/weather_controller')
    catalyst.remove('mekanism:dimensional_stabilizer')
    catalyst.remove('mekanism:upgrade_anchor')
    catalyst.remove('quarryplus:adv_quarry')
    catalyst.remove('quarryplus:remove_bedrock_module')
    catalyst.remove('industrialforegoing:infinity_nuke')
    catalyst.remove({id: 'productivebees:evilcraft/bloody_bee_2'})
    
    /* Removed due to recipes giving incorrect item*/
    catalyst.remove({ id: 'utilitarian:utility/tnt_minecart' })
    catalyst.remove({ id: 'utilitarian:utility/hopper_minecart' })

    /*catalyst.remove('extradisks:disk/shaped/infinite_storage_disk')
    catalyst.remove('extradisks:blocks/infinite_storage_block')
    catalyst.remove('extradisks:part/infinite_storage_part')
    catalyst.remove('extradisks:disk/shaped/infinite_fluid_storage_disk')
    catalyst.remove('extradisks:part/infinite_fluid_storage_part')
    catalyst.remove('extradisks:blocks/infinite_fluid_storage_block')*/
})

/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
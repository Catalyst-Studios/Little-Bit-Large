/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
ServerEvents.recipes((catalyst) => {
function nbt_reset (item){
 catalyst.shapeless(

    Item.of( item, 1), 
    [
      item   
    ]
  )}
nbt_reset ('occultism:miner_djinni_ores[damage=0]')
nbt_reset ('occultism:miner_afrit_deeps[damage=0]')
nbt_reset ('occultism:miner_foliot_unspecialized[damage=0]')
nbt_reset ('occultism:miner_marid_master[damage=0]')
nbt_reset ('occultism:miner_ancient_eldritch[damage=0]')  
})
/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
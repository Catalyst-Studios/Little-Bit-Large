/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/

ServerEvents.recipes(catalyst => {
function infusing(input_tag, output, amount, infuse_material, infuse_amount)
    {
    catalyst.custom({
    "type": "mekanism:metallurgic_infusing",
          "chemical_input": {
            "amount": infuse_amount,
            "tag": infuse_material},
          "item_input": {
            "count": amount,
            "tag": input_tag},
          "output": {
            "count": amount,
            "id": output},
          "per_tick_usage": false});
     }

  infusing('c:storage_blocks/iron','eternalores:steel_block', 1, "mekanism:carbon", 180)
})
/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
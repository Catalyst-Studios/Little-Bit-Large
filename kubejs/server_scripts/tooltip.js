/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
ItemEvents.modifyTooltips(catalyst => {

    const deprecatedItems = [
        'jamd:end_portal',
        'jamd:portal_block',
        'jamd:nether_portal'
    ];

    catalyst.add(deprecatedItems, [
        Text.red("This item and its dimension will be removed in the near future, don't use it. If you have already use it, move your infra from that dimension")
    ]);

});
/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
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
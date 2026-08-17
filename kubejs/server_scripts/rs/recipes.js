
/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/

ServerEvents.recipes(catalyst => {

    catalyst.shaped(Item.of('refinedstorage:fortune_1_upgrade', 1), [
        "   ",
        " U ",
        " D "
    ],
    {
        U: 'refinedstorage:upgrade',
        D: 'minecraft:diamond'
    })
    .id("catalyst:rs/fortune_1_upgrade");

    catalyst.shaped(Item.of('refinedstorage:fortune_2_upgrade', 1), [
        " N ",
        " U ",
        "   "
    ],
    {
        N: 'minecraft:netherite_ingot',
        U: 'refinedstorage:upgrade'
    })
    .id("catalyst:rs/fortune_2_upgrade");

    catalyst.shaped(Item.of('refinedstorage:fortune_3_upgrade', 1), [
        "PAP",
        "AUA",
        "PAP"
    ],
    {
        P: 'eternalores:plate_pyrolite',
        A: 'eternalores:plate_platinum',
        U: 'refinedstorage:upgrade'
    })
    .id("catalyst:rs/fortune_3_upgrade");

    catalyst.shaped(Item.of('refinedstorage:silk_touch_upgrade', 1), [
        "   ",
        " U ",
        " C "
    ],
    {
        U: 'refinedstorage:upgrade',
        C: 'eternalores:cast_steel_ingot'
    })
    .id("catalyst:rs/silk_touch_upgrade");

    catalyst.shaped(Item.of('refinedstorage:creative_range_upgrade', 1), [
        "WRW",
        "RUR",
        "PRP"
    ],
    {
        W: 'refinedstorage:wireless_transmitter',
        R: 'refinedstorage:range_upgrade',
        U: 'refinedstorage:upgrade',
        P: 'eternalores:plate_ultimatitanium'
    })
    .id("catalyst:rs/creative_range_upgrade");

    console.log("[CatJS] Added RS recipes")
});

/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
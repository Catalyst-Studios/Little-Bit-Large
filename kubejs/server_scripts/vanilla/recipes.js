/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/

ServerEvents.recipes(catalyst => {
    catalyst.shapeless('4x minecraft:amethyst_shard', 'minecraft:amethyst_block')
    catalyst.shapeless('9x minecraft:ice', 'minecraft:packed_ice')
    catalyst.shapeless('9x minecraft:packed_ice', 'minecraft:blue_ice')
    catalyst.shapeless('4x minecraft:magma_cream', 'minecraft:magma_block')
    catalyst.shapeless('4x minecraft:sandstone', 'minecraft:cut_sandstone')
    catalyst.shapeless('2x minecraft:sandstone_slab', 'minecraft:chiseled_sandstone')
    catalyst.shapeless('4x minecraft:polished_tuff', 'minecraft:tuff_bricks')
    catalyst.shapeless('2x minecraft:tuff_brick_slab', 'minecraft:chiseled_tuff_bricks')
    catalyst.shapeless('2x minecraft:tuff_slab', 'minecraft:chiseled_tuff')
    catalyst.shapeless('9x minecraft:bamboo', 'minecraft:bamboo_block')
    catalyst.shapeless('2x minecraft:bamboo_slab', 'minecraft:bamboo_mosaic')
    catalyst.shapeless('4x minecraft:polished_deepslate', 'minecraft:deepslate_bricks')
    catalyst.shapeless('4x minecraft:deepslate_bricks', 'minecraft:deepslate_tiles')
    catalyst.shapeless('2x minecraft:cobbled_deepslate_slab', 'minecraft:chiseled_deepslate')
    catalyst.shapeless('4x minecraft:basalt', 'minecraft:polished_basalt')
    catalyst.shapeless('2x minecraft:purpur_slab', 'minecraft:purpur_pillar')
    catalyst.shapeless('minecraft:sculk_vein', '4x minecraft:sculk')

    catalyst.smelting('minecraft:dead_bush', '#minecraft:saplings', 0.1, 100)
    
    catalyst.shaped(
        Item.of('minecraft:shroomlight', 1),[
            'NGN',
            'NSN'
        ],{
            G: 'minecraft:glowstone',
            N: 'minecraft:netherrack',
            S: 'minecraft:mushroom_stem'
    })

    catalyst.shaped(
        Item.of('minecraft:mushroom_stem', 1),[
            'MM ',
            'MM '
        ],{
            M: '#c:mushrooms'
    })

    function mushroom(output, mushroomInput){
        catalyst.shaped(output,[
            'MM ',
            'MM '
        ],{
            M: mushroomInput
        })}
    mushroom('minecraft:red_mushroom_block', 'minecraft:red_mushroom')
    mushroom('minecraft:brown_mushroom_block', 'minecraft:brown_mushroom')


    function minecarts(output, minecartItem){
        catalyst.shaped(output,[
            'IMI',
            'III'
        ],{
            I: '#c:ingots/iron',
            M: minecartItem
        })}
    minecarts('minecraft:tnt_minecart', 'minecraft:tnt')
    minecarts('minecraft:hopper_minecart', 'minecraft:hopper')
    minecarts('minecraft:furnace_minecart', 'minecraft:furnace')
})

/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
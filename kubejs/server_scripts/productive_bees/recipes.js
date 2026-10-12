
/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/

ServerEvents.recipes(catalyst => {

    catalyst.shaped(Item.of('productivebees:spawn_egg_configurable_bee[entity_data={id:"productivebees:configurable_bee",type:"productivebees:cobalt"}]', 1),
    [
        "CCC",
        "CBC",
        "CCC"
    ],{
        C: 'eternalores:cobalt_ingot',
        B: 'minecraft:bee_spawn_egg'
    
    }).id("catalyst:prod_bees/cobalt_bee");

    console.log("[CatJS] Added Productive Bees recipes")

    catalyst.forEachRecipe({ type: 'productivebees:centrifuge' }, recipe => {
        let recipe_json = recipe.json;

        if(recipe_json.has('fluid'))
        {
            let fluid_element = recipe_json.get('fluid');
            
            if(fluid_element.isJsonPrimitive())
            {
                if(fluid_element.getAsString() === 'productivebees:honey')
                {
                    recipe_json.addProperty('fluid', 'create:honey');
                }
            }
            else if(fluid_element.isJsonObject())
            {
                let fluid_obj = fluid_element.getAsJsonObject();
                if(fluid_obj.has('fluid'))
                {
                    let fluid_id = fluid_obj.get('fluid').getAsString();
                    if(fluid_id === 'productivebees:honey')
                    {
                        fluid_obj.addProperty('fluid', 'create:honey');
                    }
                }
            }
        }
        else
        {
            let new_fluid_obj = JsonParser.parseString('{"fluid": "create:honey", "amount": 100}').getAsJsonObject();
            
            recipe_json.add('fluid', new_fluid_obj);
        }
    });

    console.log("[CatJS] Changes to the Fluids of centrifuge")

    catalyst.shaped(Item.of('productivebees:powered_centrifuge', 1), [
        "IBI",
        "CAC",
        "IBI"
    ],
    {
        I: 'minecraft:iron_ingot',
        B: 'energizedpower:battery_2',
        C: 'energizedpower:copper_cable',
        A: 'productivebees:centrifuge'
    })
    .id("catalyst:powered_centrifuge");
    console.log("[CatJS] Added recipes");
    
});

/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
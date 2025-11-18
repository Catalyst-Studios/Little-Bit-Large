//priority: 20
/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/

ServerEvents.recipes(event => {

  // Get all items from the item tag
  let buds = Ingredient.of('#geore:geore_budding').stacks.toArray();

  buds.forEach(item => {

    // Convert "geore:budding_copper" → "copper"
    let material = item.getId().replace('geore:budding_', '');

    // Create budding conversion recipe
    event.custom({
      type: "ars_nouveau:budding_conversion",
      input: `geore:${material}_block`,
      result: `geore:budding_${material}`
    });

  });
});

/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
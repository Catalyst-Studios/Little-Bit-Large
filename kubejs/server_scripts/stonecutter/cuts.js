let chiseled_groups = {};
let disable = true; //Disable lots of recipe and tags

ServerEvents.tags('item', catalyst => {
    if(disable) return;
    let all_item_ids = Item.getTypeList();
    let base_map = {};
    
    let cosmetic_mods = {
        'rechiseled': true,
        'chipped': true,
        'chisel': true,
    };

    for(let i = 0; i < all_item_ids.length; i++)
    {
        let id = all_item_ids[i];
        if(id === 'minecraft:brick') continue;

        let parts = id.split(':');
        if(parts.length !== 2) continue;
        
        if(!cosmetic_mods[parts[0]])
        {
            base_map[parts[1]] = id;
        }
    }
   
    let regex_suffix_2 = /(_connecting|_diagonal|_bricks|_square|_panel|_pattern|_pillar|_wavy|_tiles|_chiseled|_carved|_cracked|_mossy|_smooth|_layered|_shingles|_paved|_checkered|_offset|_large|_small|_borderless|_clear)$/;
    let regex_prefix = /^(borderless_|clear_|smooth_|chiseled_|mossy_|cracked_)/;
   
    for(let i = 0; i < all_item_ids.length; i++)
    {
        let id = all_item_ids[i];
        let parts = id.split(':');
        if(parts.length !== 2) continue;
        
        let namespace = parts[0];
        let path = parts[1];
       
        if(!cosmetic_mods[namespace]) continue;
        
        if(namespace === 'chisel' && path === 'chisel') continue;
       
        let guessed_path = path;
        
        if(namespace === 'chisel' && path.indexOf('/') !== -1)
        {
            guessed_path = path.substring(path.lastIndexOf('/') + 1);
        }

        guessed_path = guessed_path.replace(regex_suffix_2, "")
                                   .replace(regex_prefix, "");
                                   
        let base_id = base_map[guessed_path];
       
        if(!base_id && guessed_path.indexOf('_') !== -1)
        {
            let path_parts = guessed_path.split('_');
            
            let parts_copy_1 = path_parts.slice(0);
            while(parts_copy_1.length > 1)
            {
                parts_copy_1.pop();
                let check_path = parts_copy_1.join('_');
                if(base_map[check_path])
                {
                    base_id = base_map[check_path];
                    break;
                }
            }
            
            if(!base_id)
            {
                let parts_copy_2 = path_parts.slice(0);
                while(parts_copy_2.length > 1)
                {
                    let removed_word = parts_copy_2.shift();
                    
                    if(base_map[removed_word])
                    {
                        break; 
                    }
                    
                    let check_path = parts_copy_2.join('_');
                    if(base_map[check_path])
                    {
                        base_id = base_map[check_path];
                        break;
                    }
                }
            }
        }
       
        if(base_id)
        {
            if(!chiseled_groups[base_id])
            {
                chiseled_groups[base_id] = {
                    base_id: base_id,
                    tag_name: 'catalystic:chisel_group/' + base_id.replace(':', '_'),
                    variants: []
                };
            }
           
            chiseled_groups[base_id].variants.push(id);
        }
    }
   
    let group_keys = Object.keys(chiseled_groups);
    for(let i = 0; i < group_keys.length; i++)
    {
        let base_id = group_keys[i];
        let group = chiseled_groups[base_id];
        let tag = catalyst.get(group.tag_name);
       
        tag.add(group.base_id);
        for(let j = 0; j < group.variants.length; j++)
        {
            tag.add(group.variants[j]);
        }
    }

    console.log("[CatJS] Finished stonecutter tags");
    
    all_item_ids = null;
    base_map = null;
    cosmetic_mods = null;
    regex_suffix_2 = null;
    regex_prefix = null;
    group_keys = null;
});

ServerEvents.recipes(catalyst => {
    if(disable) return;
    let group_keys = Object.keys(chiseled_groups);
   
    for(let i = 0; i < group_keys.length; i++)
    {
        let base_id = group_keys[i];
        let group = chiseled_groups[base_id];
       
        let all_blocks = [group.base_id].concat(group.variants);
        let tag_string = '#' + group.tag_name;
       
        for(let j = 0; j < all_blocks.length; j++)
        {
            let output_id = all_blocks[j];
            let recipe_id = 'catalyst:stonecutter/' + output_id.replace(':', '_');
            catalyst.stonecutting(output_id, tag_string).id(recipe_id);
        }
       
    }

    let factory_tag = '#factory_blocks:factory';
    let factory_items = Ingredient.of(factory_tag).getItemIds();
    
    for(let i = 0; i < factory_items.length; i++)
    {
        let output_id = factory_items[i];
        let recipe_id = 'catalyst:stonecutter/'+ i + "/"  + output_id.replace(':', '_');
        catalyst.stonecutting(output_id, factory_tag).id(recipe_id);
    }

    console.log("[CatJS] Finished stonecutter recipes");

    chiseled_groups = null;
    group_keys = null;
    factory_tag = null;
    factory_items = null;
});
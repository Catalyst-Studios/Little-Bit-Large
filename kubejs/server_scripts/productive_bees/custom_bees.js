/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
ServerEvents.generateData('after_mods', event => {

/**
     * @typedef {Object} BeeAttributes
     * @property {number} [temper] - Bee temper attribute.
     * @property {number} [endurance] - Bee endurance attribute.
     * @property {number} [behavior] - Bee behavior attribute.
     * @property {number} [productivity] - Bee productivity level.
     * @property {number} [weather_tolerance] - Weather tolerance level.
     * @property {number} [solitary] - Solitary behavior attribute (0 for hive, 1 for solitary).
     */

    /**
     * @param {string} id - The unique identifier of the bee.
     * @param {string} displayName - The display name of the bee.
     */
    let BeeBuilder = (id, displayName) => {
        let _id = id;
        let _name = displayName;

        /** @type {BeeAttributes} */
        let FULL_DEFAULT_ATTRIBUTES = {
            temper: 1,
            endurance: 1,
            behavior: 1,
            productivity: 1,
            weather_tolerance: 0,
            solitary: 0
        };

        /** @type {BeeAttributes|null} */
        let _attributes = null;

        /** @type {string} */
        let _primaryColor = "#ffffff";
        /** @type {string} */
        let _secondaryColor = "#ffffff";
        /** @type {string|null} */
        let _particleColor = null;
        /** @type {string|null} */
        let _description = null;
        /** @type {string|null} */
        let _beeTexture = null;
        /** @type {boolean} */
        let _createComb = true;
        /** @type {string|null} */
        let _attackResponse = "sting";
        /** @type {string|null} */
        let _flowerTag = null;
        /** @type {string|null} */
        let _nestingPreference = null;
        /** @type {number} */
        let _size = 1.0;
        /** @type {boolean} */
        let _teleporting = false;
        /** @type {boolean} */
        let _translucent = false;
        /** @type {boolean} */
        let _redstoned = false;
        /** @type {boolean} */
        let _slimy = false;
        /** @type {boolean} */
        let _fireproof = false;
        /** @type {boolean} */
        let _draconic = false;
        /** @type {boolean} */
        let _withered = false;
        /** @type {boolean} */
        let _blinding = false;
        /** @type {boolean} */
        let _munchies = false;
        /** @type {string|null} */
        let _renderer = null;
        /** @type {Array<Object>} */
        let _conditions = [];

        // Recipe objects
        /** @type {Object|null} */
        let _conversion = null;
        /** @type {Object|null} */
        let _breeding = null;
        /** @type {Object|null} */
        let _produce = null;
        /** @type {Object|null} */
        let _centrifugeComb = null;
        /** @type {Object|null} */
        let _centrifugeHoneycomb = null;

        /**
         * Normalizes output item definitions into standard centrifuge output objects.
         *
         * @param {Array<Object|string>|string} resultItems - Item(s) or tag(s) to convert into recipe output format.
         * @returns {Array<Object>} Formatted output items array with chances and amounts.
         */
        function parseOutputs(resultItems) {
            let outputsList = [];
            if (!resultItems) {
                outputsList.push({ chance: 1.0, item: { item: "minecraft:stone" }, max: 1, min: 1 });
            } else if (typeof resultItems === "string") {
                let isTag = resultItems.startsWith("#");
                let itemId = isTag ? resultItems.slice(1) : resultItems;
                outputsList.push({
                    chance: 1.0,
                    item: isTag ? { tag: itemId } : { item: itemId },
                    max: 1,
                    min: 1
                });
            } else if (Array.isArray(resultItems)) {
                resultItems.forEach(out => {
                    if (typeof out === "string") {
                        let isTag = out.startsWith("#");
                        let itemId = isTag ? out.slice(1) : out;
                        outputsList.push({
                            chance: 1.0,
                            item: isTag ? { tag: itemId } : { item: itemId },
                            max: 1,
                            min: 1
                        });
                    } else {
                        outputsList.push(out);
                    }
                });
            }
            return outputsList;
        }

        let builderInstance = {
            /** @param {string} c - Primary HEX color code */
            primaryColor: function(c) { _primaryColor = c; return this; },
            /** @param {string} c - Secondary HEX color code */
            secondaryColor: function(c) { _secondaryColor = c; return this; },
            /** @param {string} c - Particle HEX color code */
            particleColor: function(c) { _particleColor = c; return this; },
            /** @param {string} d - Bee description key or text */
            description: function(d) { _description = d; return this; },
            /** @param {string} t - Resource location for custom bee texture */
            beeTexture: function(t) { _beeTexture = t; return this; },
            /** @param {boolean} [cc=true] - Whether to automatically create a honeycomb variant */
            createComb: function(cc) { _createComb = cc !== undefined ? cc : true; return this; },
            /** @param {string} a - Bee attack response type (e.g., "sting", "none") */
            attackResponse: function(a) { _attackResponse = a; return this; },
            /** @param {string} f - Flower tag required for pollination */
            flowerTag: function(f) { _flowerTag = f; return this; },
            /** @param {string} n - Nesting preference block/tag */
            nestingPreference: function(n) { _nestingPreference = n; return this; },
            /** @param {number} s - Bee model scale factor */
            size: function(s) { _size = s; return this; },
            /** @param {boolean} [v=true] - Enable teleporting trait */
            teleporting: function(v) { _teleporting = v !== undefined ? v : true; return this; },
            /** @param {boolean} [v=true] - Enable translucent model rendering */
            translucent: function(v) { _translucent = v !== undefined ? v : true; return this; },
            /** @param {boolean} [v=true] - Enable redstone emission/interaction trait */
            redstoned: function(v) { _redstoned = v !== undefined ? v : true; return this; },
            /** @param {boolean} [v=true] - Enable slimy trait */
            slimy: function(v) { _slimy = v !== undefined ? v : true; return this; },
            /** @param {boolean} [v=true] - Enable fireproof trait */
            fireproof: function(v) { _fireproof = v !== undefined ? v : true; return this; },
            /** @param {boolean} [v=true] - Enable draconic trait */
            draconic: function(v) { _draconic = v !== undefined ? v : true; return this; },
            /** @param {boolean} [v=true] - Enable withered trait */
            withered: function(v) { _withered = v !== undefined ? v : true; return this; },
            /** @param {boolean} [v=true] - Enable blinding trait */
            blinding: function(v) { _blinding = v !== undefined ? v : true; return this; },
            /** @param {boolean} [v=true] - Enable munchies trait */
            munchies: function(v) { _munchies = v !== undefined ? v : true; return this; },
            /** @param {string} r - Custom bee entity renderer */
            renderer: function(r) { _renderer = r; return this; },

            /**
             * Sets bee attribute values, overriding defaults.
             * @param {BeeAttributes} a - Attribute overrides.
             */
            attributes: function(a) {
                _attributes = Object.assign({}, FULL_DEFAULT_ATTRIBUTES, a);
                return this;
            },

            /**
             * Sets NeoForge load conditions for the bee JSON.
             * @param {Array<Object>} conds - Condition array.
             */
            conditions: function(conds) { _conditions = conds; return this; },

            /**
             * Configures a conversion recipe for this bee.
             * @param {string} sourceBee - Source bee ID.
             * @param {string|Object} catalystItem - Catalyst item needed for conversion.
             * @param {Array<Object>} [customConditions] - Optional recipe conditions.
             */
            conversion: function(sourceBee, catalystItem, customConditions) {
                let source = sourceBee.includes(":") ? sourceBee : `productivebees:${sourceBee}`;
                _conversion = {
                    type: "productivebees:bee_conversion",
                    source: source,
                    result: `productivebees:${_id}`,
                    item: typeof catalystItem === "string" ? { item: catalystItem } : catalystItem
                };
                if (customConditions) _conversion.conditions = customConditions;
                return this;
            },

            /**
             * Configures a breeding recipe for this bee.
             * @param {string} parent1 - First parent bee ID.
             * @param {string} parent2 - Second parent bee ID.
             * @param {Array<Object>} [customConditions] - Optional recipe conditions.
             */
            breeding: function(parent1, parent2, customConditions) {
                let p1 = parent1.includes(":") ? parent1 : `productivebees:${parent1}`;
                let p2 = parent2.includes(":") ? parent2 : `productivebees:${parent2}`;
                _breeding = {
                    type: "productivebees:bee_breeding",
                    parent1: p1,
                    parent2: p2,
                    offspring: `productivebees:${_id}`
                };
                if (customConditions) _breeding.conditions = customConditions;
                return this;
            },

            /**
             * Configures hive production results for this bee.
             * @param {Array<Object>} [customResults] - Produced items array.
             * @param {Array<Object>} [customConditions] - Optional recipe conditions.
             */
            produce: function(customResults, customConditions) {
                let results = customResults || [
                    {
                        item: {
                            item: "productivebees:configurable_honeycomb"
                        }
                    }
                ];
                _produce = {
                    type: "productivebees:advanced_beehive",
                    ingredient: `productivebees:${_id}`,
                    results: results
                };
                if (customConditions) _produce.conditions = customConditions;
                return this;
            },

            /**
             * centrifugeHoneycomb
             * Registers centrifuge recipe for individual comb item (configurable_comb).
             * @param {Array<Object>|string} resultItems - Output item(s).
             * @param {string} [fluidType='productivebees:honey'] - Fluid ID.
             * @param {number} [fluidAmount=100] - Fluid amount produced.
             * @param {number} [processingTime=200] - Processing time in ticks.
             * @param {Array<Object>} [customConditions] - Optional recipe conditions.
             */
            centrifugeHoneycomb: function(resultItems, fluidType, fluidAmount, processingTime, customConditions) {
                _centrifugeComb = {
                    outputs: parseOutputs(resultItems),
                    fluid: fluidType || "productivebees:honey",
                    fluidAmount: fluidAmount !== undefined ? fluidAmount : 100,
                    processingTime: processingTime !== undefined ? processingTime : 200,
                    conditions: customConditions || null
                };
                return this;
            },

            /**
             * centrifugeComb
             * Registers centrifuge recipe for honeycomb block (configurable_honeycomb).
             * @param {Array<Object>|string} resultItems - Output item(s).
             * @param {string} [fluidType='productivebees:honey'] - Fluid ID.
             * @param {number} [fluidAmount=50] - Fluid amount produced.
             * @param {number} [processingTime=0] - Processing time in ticks.
             * @param {Array<Object>} [customConditions] - Optional recipe conditions.
             */
            centrifugeComb: function(resultItems, fluidType, fluidAmount, processingTime, customConditions) {
                _centrifugeHoneycomb = {
                    outputs: parseOutputs(resultItems),
                    fluid: fluidType || "productivebees:honey",
                    fluidAmount: fluidAmount !== undefined ? fluidAmount : 50,
                    processingTime: processingTime !== undefined ? processingTime : 0,
                    conditions: customConditions || null
                };
                return this;
            },

            /**
             * Emits all JSON definition and recipe files to KubeJS data generator event.
             */
            register: function() {
                let beeJson = {
                    primaryColor: _primaryColor,
                    secondaryColor: _secondaryColor,
                    createComb: _createComb,
                    size: _size
                };

                if (_beeTexture) beeJson.beeTexture = _beeTexture;
                if (_renderer) beeJson.renderer = _renderer;
                if (_attributes !== null) beeJson.attributes = _attributes;
                if (_particleColor) beeJson.particleColor = _particleColor;
                if (_description) beeJson.description = _description;
                if (_attackResponse) beeJson.attackResponse = _attackResponse;
                if (_flowerTag) beeJson.flowerTag = _flowerTag;
                if (_nestingPreference) beeJson.nestingPreference = _nestingPreference;
                if (_teleporting) beeJson.teleporting = _teleporting;
                if (_translucent) beeJson.translucent = _translucent;
                if (_redstoned) beeJson.redstoned = _redstoned;
                if (_slimy) beeJson.slimy = _slimy;
                if (_fireproof) beeJson.fireproof = _fireproof;
                if (_draconic) beeJson.draconic = _draconic;
                if (_withered) beeJson.withered = _withered;
                if (_blinding) beeJson.blinding = _blinding;
                if (_munchies) beeJson.munchies = _munchies;
                if (_conditions && _conditions.length > 0) beeJson.conditions = _conditions;

                // 1. Bee definition JSON file
                event.json(`productivebees:productivebees/${_id}`, beeJson);

                // 2. Conversion, Breeding, and Production recipe files
                if (_conversion) event.json(`productivebees:recipe/bee_conversion/${_id}_bee`, _conversion);
                if (_breeding) event.json(`productivebees:recipe/bee_breeding/${_id}_bee`, _breeding);
                if (_produce) event.json(`productivebees:recipe/bee_produce/${_id}_bee`, _produce);

                // 3. Single comb centrifuge recipe (configurable_comb)
                if (_centrifugeComb) {
                    let allOutputs = [
                        { chance: 1.0, item: { tag: "c:waxes" }, max: 1, min: 1 }
                    ];
                    _centrifugeComb.outputs.forEach(output => allOutputs.push(output));

                    let recipeConditions = [
                        { type: "productivebees:bee_exists", bee: `productivebees:${_id}` }
                    ];
                    if (_centrifugeComb.conditions) {
                        if (Array.isArray(_centrifugeComb.conditions)) {
                            _centrifugeComb.conditions.forEach(cond => recipeConditions.push(cond));
                        } else {
                            recipeConditions.push(_centrifugeComb.conditions);
                        }
                    }

                    let combRecipe = {
                        "neoforge:conditions": recipeConditions,
                        type: "productivebees:centrifuge",
                        fluid: {
                            amount: _centrifugeComb.fluidAmount,
                            fluid: _centrifugeComb.fluid
                        },
                        ingredient: {
                            type: "productivebees:component",
                            components: {
                                "productivebees:bee_type": `productivebees:${_id}`
                            },
                            items: "productivebees:configurable_comb"
                        },
                        outputs: allOutputs,
                        processingTime: _centrifugeComb.processingTime
                    };

                    event.json(`productivebees:recipe/centrifuge/${_id}_comb`, combRecipe);
                }

                // 4. Honeycomb block centrifuge recipe (configurable_honeycomb)
                if (_centrifugeHoneycomb) {
                    let allOutputs = [
                        { chance: 1.0, item: { tag: "c:waxes" }, max: 1, min: 1 }
                    ];
                    _centrifugeHoneycomb.outputs.forEach(output => allOutputs.push(output));

                    let recipeConditions = [
                        { type: "productivebees:bee_exists", bee: `productivebees:${_id}` }
                    ];
                    if (_centrifugeHoneycomb.conditions) {
                        if (Array.isArray(_centrifugeHoneycomb.conditions)) {
                            _centrifugeHoneycomb.conditions.forEach(cond => recipeConditions.push(cond));
                        } else {
                            recipeConditions.push(_centrifugeHoneycomb.conditions);
                        }
                    }

                    let honeycombRecipe = {
                        "neoforge:conditions": recipeConditions,
                        type: "productivebees:centrifuge",
                        fluid: {
                            amount: _centrifugeHoneycomb.fluidAmount,
                            fluid: _centrifugeHoneycomb.fluid
                        },
                        ingredient: {
                            type: "productivebees:component",
                            components: {
                                "productivebees:bee_type": `productivebees:${_id}`
                            },
                            items: "productivebees:configurable_honeycomb"
                        },
                        outputs: allOutputs,
                        processingTime: _centrifugeHoneycomb.processingTime
                    };

                    event.json(`productivebees:recipe/centrifuge/${_id}_honeycomb`, honeycombRecipe);
                }
            }
        };

        return builderInstance;
    };

    BeeBuilder('gem_tachyarite', 'Tachyarite Bee')
        .primaryColor('#242b45')
        .secondaryColor('#ac320f')
        
        .produce()
        .centrifugeComb([{ chance: 1.0, item: { item: "eternalores:gem_tachyarite" }, max: 1, min: 1 }])
        .centrifugeHoneycomb([{ chance: 1.0, item: { item: "eternalores:gem_tachyarite" }, max: 4, min: 1 }])
        .register();

    BeeBuilder('gallium_ingot', 'Gallium Bee')
        .primaryColor('#caf6f1')
        .secondaryColor('#3b6c68')
        
        .produce()
        .centrifugeComb([{ chance: 1.0, item: { item: "eternalores:gallium_ingot" }, max: 1, min: 1 }])
        .centrifugeHoneycomb([{ chance: 1.0, item: { item: "eternalores:gallium_ingot" }, max: 4, min: 1 }])
        .register();

    BeeBuilder('replica_ingot', 'Replica Bee')
        .primaryColor('#9a9da1')
        .secondaryColor('#4f4647')
        
        .produce()
        .centrifugeComb([{ chance: 1.0, item: { item: "replication:replica_ingot" }, max: 1, min: 1 }])
        .centrifugeHoneycomb([{ chance: 1.0, item: { item: "replication:replica_ingot" }, max: 4, min: 1 }])
        .register();

    BeeBuilder('etherium_ingot', 'Etherium Bee')
        .primaryColor('#546173')
        .secondaryColor('#333544')
        
        .produce()
        .centrifugeComb([{ chance: 1.0, item: { item: "eternalores:etherium_ingot" }, max: 1, min: 1 }])
        .centrifugeHoneycomb([{ chance: 1.0, item: { item: "eternalores:etherium_ingot" }, max: 4, min: 1 }])
        .register();

    BeeBuilder('eternal_dark_ingot', 'Eternal Dark Bee')
        .primaryColor('#9e96d0')
        .secondaryColor('#5b4a80')
        
        .produce()
        .centrifugeComb([{ chance: 1.0, item: { item: "eternalores:eternal_dark_ingot" }, max: 1, min: 1 }])
        .centrifugeHoneycomb([{ chance: 1.0, item: { item: "eternalores:eternal_dark_ingot" }, max: 4, min: 1 }])
        .register();

    BeeBuilder('eternal_light_ingot', 'Eternal Light Bee')
        .primaryColor('#f9f9f9')
        .secondaryColor('#130b0c')
        
        .produce()
        .centrifugeComb([{ chance: 1.0, item: { item: "eternalores:eternal_light_ingot" }, max: 1, min: 1 }])
        .centrifugeHoneycomb([{ chance: 1.0, item: { item: "eternalores:eternal_light_ingot" }, max: 4, min: 1 }])
        .register();

    BeeBuilder('britannia_silver_ingot', 'Britannia Silver Bee')
        .primaryColor('#cacdce')
        .secondaryColor('#7a7a7c')
        
        .produce()
        .centrifugeComb([{ chance: 1.0, item: { item: "eternalores:britannia_silver_ingot" }, max: 1, min: 1 }])
        .centrifugeHoneycomb([{ chance: 1.0, item: { item: "eternalores:britannia_silver_ingot" }, max: 4, min: 1 }])
        .register();

    BeeBuilder('cast_iron_ingot', 'Cast Iron Bee')
        .primaryColor('#d4d4d4')
        .secondaryColor('#6b6d70')
        
        .produce()
        .centrifugeComb([{ chance: 1.0, item: { item: "eternalores:cast_iron_ingot" }, max: 1, min: 1 }])
        .centrifugeHoneycomb([{ chance: 1.0, item: { item: "eternalores:cast_iron_ingot" }, max: 4, min: 1 }])
        .register();

    BeeBuilder('cast_steel_ingot', 'Cast Steel Bee')
        .primaryColor('#758698')
        .secondaryColor('#374651')
        
        .produce()
        .centrifugeComb([{ chance: 1.0, item: { item: "eternalores:cast_steel_ingot" }, max: 1, min: 1 }])
        .centrifugeHoneycomb([{ chance: 1.0, item: { item: "eternalores:cast_steel_ingot" }, max: 4, min: 1 }])
        .register();

    BeeBuilder('catalyrium_ingot', 'Catalyrium Bee')
        .primaryColor('#717473')
        .secondaryColor('#3f403f')
        
        .size(6)
        .produce()
        .centrifugeComb([{ chance: 1.0, item: { item: "eternalores:catalyrium_ingot" }, max: 1, min: 1 }])
        .centrifugeHoneycomb([{ chance: 1.0, item: { item: "eternalores:catalyrium_ingot" }, max: 4, min: 1 }])
        .register();

    BeeBuilder('cosmic_matter_ingot', 'Cosmic Matter Bee')
        .primaryColor('#000000')
        .secondaryColor('#ffffff')
        
        .produce()
        .centrifugeComb([{ chance: 1.0, item: { item: "eternalores:cosmic_matter_ingot" }, max: 1, min: 1 }])
        .centrifugeHoneycomb([{ chance: 1.0, item: { item: "eternalores:cosmic_matter_ingot" }, max: 4, min: 1 }])
        .register();

    BeeBuilder('eternity_ingot', 'Eternity Bee')
        .primaryColor('#e796a5')
        .secondaryColor('#42141b')
        
        .produce()
        .centrifugeComb([{ chance: 1.0, item: { item: "eternalores:eternity_ingot" }, max: 1, min: 1 }])
        .centrifugeHoneycomb([{ chance: 1.0, item: { item: "eternalores:eternity_ingot" }, max: 4, min: 1 }])
        .register();

    BeeBuilder('missing_ingot', 'Missing Bee')
        .primaryColor('#fc00cf')
        .secondaryColor('#000000')
        
        .produce()
        .centrifugeComb([{ chance: 1.0, item: { item: "eternalores:missing_ingot" }, max: 1, min: 1 }])
        .centrifugeHoneycomb([{ chance: 1.0, item: { item: "eternalores:missing_ingot" }, max: 4, min: 1 }])
        .register();

    BeeBuilder('modularium_ingot', 'Modularium Bee')
        .primaryColor('#ce3f09')
        .secondaryColor('#5e1a06')
        
        .produce()
        .centrifugeComb([{ chance: 1.0, item: { item: "eternalores:modularium_ingot" }, max: 1, min: 1 }])
        .centrifugeHoneycomb([{ chance: 1.0, item: { item: "eternalores:modularium_ingot" }, max: 4, min: 1 }])
        .register();

    BeeBuilder('neodymium_ingot', 'Neodymium Bee')
        .primaryColor('#a0788f')
        .secondaryColor('#4d3040')
        
        .produce()
        .centrifugeComb([{ chance: 1.0, item: { item: "eternalores:neodymium_ingot" }, max: 1, min: 1 }])
        .centrifugeHoneycomb([{ chance: 1.0, item: { item: "eternalores:neodymium_ingot" }, max: 4, min: 1 }])
        .register();

    BeeBuilder('neptunium_ingot', 'Neptunium Bee')
        .primaryColor('#88b29d')
        .secondaryColor('#43604f')
        
        .produce()
        .centrifugeComb([{ chance: 1.0, item: { item: "eternalores:neptunium_ingot" }, max: 1, min: 1 }])
        .centrifugeHoneycomb([{ chance: 1.0, item: { item: "eternalores:neptunium_ingot" }, max: 4, min: 1 }])
        .register();

    BeeBuilder('nethersteel_ingot', 'Nethersteel Bee')
        .primaryColor('#c74648')
        .secondaryColor('#531519')
        
        .produce()
        .centrifugeComb([{ chance: 1.0, item: { item: "eternalores:nethersteel_ingot" }, max: 1, min: 1 }])
        .centrifugeHoneycomb([{ chance: 1.0, item: { item: "eternalores:nethersteel_ingot" }, max: 4, min: 1 }])
        .register();

    BeeBuilder('pewter_ingot', 'Pewter Bee')
        .primaryColor('#757b77')
        .secondaryColor('#3d4c44')
        
        .produce()
        .centrifugeComb([{ chance: 1.0, item: { item: "eternalores:pewter_ingot" }, max: 1, min: 1 }])
        .centrifugeHoneycomb([{ chance: 1.0, item: { item: "eternalores:pewter_ingot" }, max: 4, min: 1 }])
        .register();

    BeeBuilder('plutonium_ingot', 'Plutonium Bee')
        .primaryColor('#e8d0c8')
        .secondaryColor('#88674c')
        
        .produce()
        .centrifugeComb([{ chance: 1.0, item: { item: "eternalores:plutonium_ingot" }, max: 1, min: 1 }])
        .centrifugeHoneycomb([{ chance: 1.0, item: { item: "eternalores:plutonium_ingot" }, max: 4, min: 1 }])
        .register();

    BeeBuilder('quartz_enriched_copper_ingot', 'Quartz Enriched Copper Bee')
        .primaryColor('#e28e6c')
        .secondaryColor('#823b21')
        
        .produce()
        .centrifugeComb([{ chance: 1.0, item: { item: "eternalores:quartz_enriched_copper_ingot" }, max: 1, min: 1 }])
        .centrifugeHoneycomb([{ chance: 1.0, item: { item: "eternalores:quartz_enriched_copper_ingot" }, max: 4, min: 1 }])
        .register();

    BeeBuilder('sculkite_ingot', 'Sculkite Bee')
        .primaryColor('#084f55')
        .secondaryColor('#f17256')
        
        .produce()
        .centrifugeComb([{ chance: 1.0, item: { item: "eternalores:sculkite_ingot" }, max: 1, min: 1 }])
        .centrifugeHoneycomb([{ chance: 1.0, item: { item: "eternalores:sculkite_ingot" }, max: 4, min: 1 }])
        .register();

    BeeBuilder('shadowsteel_ingot', 'Shadowsteel Bee')
        .primaryColor('#070509')
        .secondaryColor('#3c2f48')
        
        .produce()
        .centrifugeComb([{ chance: 1.0, item: { item: "eternalores:shadowsteel_ingot" }, max: 1, min: 1 }])
        .centrifugeHoneycomb([{ chance: 1.0, item: { item: "eternalores:shadowsteel_ingot" }, max: 4, min: 1 }])
        .register();

    BeeBuilder('silicon_ingot', 'Silicon Bee')
        .primaryColor('#595583')
        .secondaryColor('#25111d')
        
        .produce()
        .centrifugeComb([{ chance: 1.0, item: { item: "eternalores:silicon_ingot" }, max: 1, min: 1 }])
        .centrifugeHoneycomb([{ chance: 1.0, item: { item: "eternalores:silicon_ingot" }, max: 4, min: 1 }])
        .register();

    BeeBuilder('ultimatitanium_ingot', 'Ultimatitanium Bee')
        .primaryColor('#9265ad')
        .secondaryColor('#42214c')
        
        .produce()
        .centrifugeComb([{ chance: 1.0, item: { item: "eternalores:ultimatitanium_ingot" }, max: 1, min: 1 }])
        .centrifugeHoneycomb([{ chance: 1.0, item: { item: "eternalores:ultimatitanium_ingot" }, max: 4, min: 1 }])
        .register();

    BeeBuilder('wrought_iron_ingot', 'Wrought Iron Bee')
        .primaryColor('#a7a793')
        .secondaryColor('#5a573f')
        
        .produce()
        .centrifugeComb([{ chance: 1.0, item: { item: "eternalores:wrought_iron_ingot" }, max: 1, min: 1 }])
        .centrifugeHoneycomb([{ chance: 1.0, item: { item: "eternalores:wrought_iron_ingot" }, max: 4, min: 1 }])
        .register();

    BeeBuilder('biomass', 'Biomass Bee')
        .primaryColor('#65621f')
        .secondaryColor('#241f08')
        
        .produce()
        .centrifugeComb([{ chance: 1.0, item: { item: "eternalores:biomass" }, max: 1, min: 1 }])
        .centrifugeHoneycomb([{ chance: 1.0, item: { item: "eternalores:biomass" }, max: 4, min: 1 }])
        .register();

    BeeBuilder('gem_obsidian', 'Obsidian Gem Bee')
        .primaryColor('#8057cb')
        .secondaryColor('#1c0846')
        
        .produce()
        .centrifugeComb([{ chance: 1.0, item: { item: "eternalores:gem_obsidian" }, max: 1, min: 1 }])
        .centrifugeHoneycomb([{ chance: 1.0, item: { item: "eternalores:gem_obsidian" }, max: 4, min: 1 }])
        .register();

    BeeBuilder('gem_pyrolite', 'Pyrolite Gem Bee')
        .primaryColor('#ba4a2a')
        .secondaryColor('#fce4bc')
        
        .produce()
        .centrifugeComb([{ chance: 1.0, item: { item: "eternalores:gem_pyrolite" }, max: 1, min: 1 }])
        .centrifugeHoneycomb([{ chance: 1.0, item: { item: "eternalores:gem_pyrolite" }, max: 4, min: 1 }])
        .register();

    BeeBuilder('gem_quantiquarite', 'Quantiquarite Gem Bee')
        .primaryColor('#847999')
        .secondaryColor('#15201f')
        
        .produce()
        .centrifugeComb([{ chance: 1.0, item: { item: "eternalores:gem_quantiquarite" }, max: 1, min: 1 }])
        .centrifugeHoneycomb([{ chance: 1.0, item: { item: "eternalores:gem_quantiquarite" }, max: 4, min: 1 }])
        .register();

    BeeBuilder('gem_sanguis_vivus', 'Sanguis Vivus Gem Bee')
        .primaryColor('#c0000d')
        .secondaryColor('#5f0010')
        
        .produce()
        .centrifugeComb([{ chance: 1.0, item: { item: "eternalores:gem_sanguis_vivus" }, max: 1, min: 1 }])
        .centrifugeHoneycomb([{ chance: 1.0, item: { item: "eternalores:gem_sanguis_vivus" }, max: 4, min: 1 }])
        .register();

    BeeBuilder('gem_spectral_sky_bluerite', 'Spectral Sky Bluerite Gem Bee')
        .primaryColor('#a2ebed')
        .secondaryColor('#299484')
        
        .produce()
        .centrifugeComb([{ chance: 1.0, item: { item: "eternalores:gem_spectral_sky_bluerite" }, max: 1, min: 1 }])
        .centrifugeHoneycomb([{ chance: 1.0, item: { item: "eternalores:gem_spectral_sky_bluerite" }, max: 4, min: 1 }])
        .register();

    BeeBuilder('gem_voiderite', 'Voiderite Gem Bee')
        .primaryColor('#826bda')
        .secondaryColor('#261143')
        
        .produce()
        .centrifugeComb([{ chance: 1.0, item: { item: "eternalores:gem_voiderite" }, max: 1, min: 1 }])
        .centrifugeHoneycomb([{ chance: 1.0, item: { item: "eternalores:gem_voiderite" }, max: 4, min: 1 }])
        .register();

    BeeBuilder('antimatter_pellet', 'Antimatter Pellet Bee')
        .primaryColor('#b571bf')
        .secondaryColor('#45224f')
        
        .produce()
        .centrifugeComb([{ chance: 1.0, item: { item: "eternalores:antimatter_pellet" }, max: 1, min: 1 }])
        .centrifugeHoneycomb([{ chance: 1.0, item: { item: "eternalores:antimatter_pellet" }, max: 4, min: 1 }])
        .register();

    BeeBuilder('exotic_matter_pellet', 'Exotic Matter Pellet Bee')
        .primaryColor('#b3b18f')
        .secondaryColor('#3b3231')
        
        .produce()
        .centrifugeComb([{ chance: 1.0, item: { item: "eternalores:exotic_matter_pellet" }, max: 1, min: 1 }])
        .centrifugeHoneycomb([{ chance: 1.0, item: { item: "eternalores:exotic_matter_pellet" }, max: 4, min: 1 }])
        .register();

    BeeBuilder('strange_matter_pellet', 'Strange Matter Pellet Bee')
        .primaryColor('#9cc29b')
        .secondaryColor('#2b6a22')
        
        .produce()
        .centrifugeComb([{ chance: 1.0, item: { item: "eternalores:strange_matter_pellet" }, max: 1, min: 1 }])
        .centrifugeHoneycomb([{ chance: 1.0, item: { item: "eternalores:strange_matter_pellet" }, max: 4, min: 1 }])
        .register();

    BeeBuilder('gem_necroticarite', 'Necroticarite Gem Bee')
        .primaryColor('#53017c')
        .secondaryColor('#26033e')
        .produce()
        .centrifugeComb([{ chance: 1.0, item: { item: "eternalores:gem_necroticarite" }, max: 1, min: 1 }])
        .centrifugeHoneycomb([{ chance: 1.0, item: { item: "eternalores:gem_necroticarite" }, max: 4, min: 1 }])
        .register();

    console.log("[CatJS] Added Custom bees!");
});
/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
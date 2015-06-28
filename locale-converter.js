var localeConverter = (function () {

    var UNITS = {
        "CENTIARE":{
            name:"CENTIARE",
            som: "SI",
            type: "area"
        },
        "HECTARE":{
            name:"HECTARE",
            som: "SI",
            type: "area"
        },
        // Square meter
        "SQM":{
            name:"SQM",
            som: "METRIC",
            type: "area"
        },
        "DUNAM":{
            name:"DUNAM",
            som: "METRIC",
            type: "area"
        },
        "SQFT":{
            name:"SQFT",
            som: "IMPERIAL",
            type: "area"
        },
        "ACRE":{
            name:"ACRE",
            som: "IMPERIAL",
            type: "area"
        },
        "KPH":{
            name:"KPH",
            som: "SI",
            type: "speed"
        },
        "MPH":{
            name:"MPH",
            som: "IMPERIAL",
            type: "speed"
        },
        "KILO": {
            name:"KILO",
            som: "SI",
            type: "weight"
        },
        "GRAM": {
            name:"GRAM",
            som: "SI",
            type: "weight"
        },
        "TON": {
            name:"TON",
            som: "SI",
            type: "weight"
        },
        "OUNCE": {
            name:"OUNCE",
            som: "IMPERIAL",
            type: "weight"
        },
        "POUND": {
            name:"POUND",
            som: "IMPERIAL",
            type: "weight"
        },
        "TON_IMPERIAL": {
            name:"TON",
            som: "IMPERIAL",
            type: "weight"
        }
    };

    // Systems of measurement
    var SOM = {
        METRIC:{
            area:{
                units:{
                    sqm:{
                        to_base: function (value) {
                            return value;
                        },
                        from_base: function (value) {
                            return value;
                        }
                    },
                    dunam:{
                        to_base: function (value) {
                            return value * 1000;
                        },
                        from_base: function (value) {
                            return value / 1000;
                        }
                    }
                },
                conversion_formula:{
                    // To square foot
                    IMPERIAL: function (value) {
                        return value * 10.76391041671;
                    },
                    // To Centiare
                    SI: function (value) {
                        return value;
                    },
                    METRIC: function (value) {
                        return value;
                    },
                }
            }
        },
        SI: {
            area:{
                units:{
                    centiare:{
                        to_base: function (value) {
                            return value;
                        },
                        from_base: function (value) {
                            return value;
                        }
                    },
                    // Base unit is Centiare
                    hectare:{
                        to_base: function (value) {
                            return value * 10000;
                        },
                        from_base: function (value) {
                            return value / 10000;
                        }
                    }
                    
                },
                conversion_formula:{
                    // To square foot
                    IMPERIAL: function (value) {
                        return value * 10.76391041671;
                    },

                    // To Square meter
                    METRIC: function (value) {
                        return value;
                    },

                    SI: function (value) {
                        return value;
                    } 
                }
            },
            speed:{
                units:{
                    kph:{
                        to_base: function (value) {
                            return value;
                        },
                        from_base: function (value) {
                            return value;
                        }
                    }
                },
                conversion_formula:{
                    IMPERIAL: function (value) {
                        return value / 1.609344;
                    },
                    SI: function (value) {
                        return value;
                    } 
                }
            },
            weight: {
                units: {
                    gram: {
                        to_base: function (value) {
                            return value / 1000;
                        },
                        from_base: function (value) {
                            return value * 1000;
                        }
                    },
                // base unit
                kilo: {
                    to_base: function (value) {
                        return value;
                    },
                    from_base: function (value) {
                        return value;
                    }
                },
                ton: {
                    to_base: function (value) {
                        return value * 1000;
                    },
                    from_base: function (value) {
                        return value / 1000;
                    }
                }
            },
            conversion_formula: {
                IMPERIAL: function (value) {
                    return value * 0.453592;
                },
                SI: function (value) {
                    return value;
                }
            }
        }
    },
    IMPERIAL: {
        area:{
            units:{
                // Base unit is square foot
                sqft:{
                    to_base: function (value) {
                        return value;
                    },
                    from_base: function (value) {
                        return value;
                    }
                },
                
                acre:{
                    to_base: function (value) {
                        return value * 43560;
                    },
                    from_base: function (value) {
                        return value / 43560;
                    }
                }
            },
            conversion_formula:{
                // To centiare
                SI: function (value) {
                    return value * 0.09290304;
                },

                // To Square meter
                METRIC: function (value) {
                    return value * 0.09290304;
                },
                
                // To Square meter
                IMPERIAL: function (value) {
                    return value;
                } 
            }
        },
        speed:{
            units:{
                mph:{
                    to_base: function (value) {
                        return value;
                    },
                    from_base: function (value) {
                        return value;
                    }
                }
            },
            conversion_formula:{
               IMPERIAL: function (value) {
                return value;
            },
            SI: function (value) {
                return value * 1.609344;
            } 
        }
    },
    weight: {
        units: {
            ounce: {
                to_base: function (value) {
                    return value * 16;
                },
                from_base: function (value) {
                    return value / 16;
                }
            },
                    // base unit
                    pound: {
                        to_base: function (value) {
                            return value;
                        },
                        from_base: function (value) {
                            return value;
                        }
                    },
                    ton: {
                        to_base: function (value) {
                            return value / 2240;
                        },
                        from_base: function (value) {
                            return value * 2240;
                        }
                    }
                },
                conversion_formula: {
                    SI: function (value) {
                        return value / 0.453592;
                    }
                }
            }
        }
    };

    var LOCALE = {
        "he-IL": {
            weight: "SI",
            speed:"SI",
            area:"METRIC"
        },
        "en-US": {
            weight: "IMPERIAL",
            speed: "IMPERIAL",
            area: "IMPERIAL",
        }
    };

    var CONVERSION = {};


    var target_locale;

    var ConversionRequest = function (params) {

        var input_locale = params.locale,
        input_value = params.value,
        input_units = params.units.toLowerCase(),
        input_type = UNITS[params.units].type;

        var to = function (target_units) {
            if (!target_locale) {
                console.error("Please set target locale like this: localeConverter.setTargetLocale('en-US');");
            }
            else {
                var target_som = LOCALE[target_locale][input_type];
                // First normalize to base units

                // Grab the conversion formula from input_units to base_units for this type and locale
                var typeObj = SOM[LOCALE[input_locale][input_type]][input_type];

                // Apply to input_value
                var base_value = typeObj.units[input_units].to_base(input_value);


                // Grab the conversion formula from base_units of input_type from input_locale to target_locale
                var si_base_value = typeObj.conversion_formula["SI"](base_value);
                var converted_base_value = SOM["SI"][input_type].conversion_formula[target_som](si_base_value);

                var targetTypeObj = SOM[target_som][input_type];
                var converted_value = targetTypeObj.units[target_units.toLowerCase()].from_base(converted_base_value);

                return converted_value;
            }
        };

        return {
            to: to
        }
    };

    var setTargetLocale = function (_target_locale) {
        target_locale = _target_locale;
    };

    // This should be something like
    // {
    //      locale:"he-IL",
    //      value:"6",
    //      units:"KMH"
    // }
    var convert = function (conversionRequestParams) {
        return new ConversionRequest(conversionRequestParams);
    };

    return {
        setTargetLocale: setTargetLocale,
        convert: convert,
        UNITS: UNITS,
        LOCALES: LOCALE
    }
})();
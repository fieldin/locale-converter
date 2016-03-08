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
        "LITER":{
            name:"LITER",
            som: "SI",
            type: "volume"
        },
        "GALLON":{
            name:"GALLON",
            som: "IMPERIAL",
            type: "volume"
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
        },
        "CELSIUS":{
            name:"CELSIUS",
            som: "SI",
            type: "degree"
        },
        "FAHRENHEIT":{
            name:"FAHRENHEIT",
            som: "IMPERIAL",
            type: "degree"
        },
        "METER":{
            name:"METER",
            som: "METRIC",
            type: "distance"
        },
        "YARD":{
            name:"YARD",
            som: "IMPERIAL",
            type: "distance"
        },
        "KM":{
            name:"KM",
            som: "METRIC",
            type: "distance"
        },
        "MILE":{
            name:"MILE",
            som: "IMPERIAL",
            type: "distance"
        }
    };

    // Systems of measurement
    var SOM = {
        METRIC:{
            area:{
                common_unit:"dunam",
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
            },
            distance:{
                common_unit:"km",
                units:{
                    meter:{
                        to_base: function (value) {
                            return value / 1000;
                        },
                        from_base: function (value) {
                            return value * 1000;
                        }
                    },
                    km:{
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
                    },
                    METRIC: function (value) {
                        return value;
                    }
                }
            },
        },
        SI: {
            area:{
                common_unit:"hectare",
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
                common_unit:"kph",
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
            volume:{
                common_unit:"liter",
                units:{
                    liter:{
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
                        return value * 0.264172;
                    },
                    SI: function (value) {
                        return value;
                    } 
                }
            },
            degree:{
                common_unit:"celsius",
                units:{
                    celsius:{
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
                        return value * 1.8 + 32;
                    },
                    SI: function (value) {
                        return value;
                    } 
                }
            },
            distance:{
                common_unit:"km",
                units:{
                    meter:{
                        to_base: function (value) {
                            return value / 1000;
                        },
                        from_base: function (value) {
                            return value * 1000;
                        }
                    },
                    km:{
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
                    },
                    METRIC: function (value) {
                        return value;
                    }
                }
            },
            weight: {
                common_unit:"kilo",
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
                common_unit:"acre",
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
            common_unit:"mph",
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
    volume:{
        common_unit:"gallon",
        units:{
            gallon:{
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
            return value / 0.264172;
        } 
    }
},
degree:{
    common_unit:"fahrenheit",
    units:{
        fahrenheit:{
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
        return (value - 32) / 1.8;
    } 
}
},
distance:{
    common_unit:"mile",
    units:{
        yard:{
            to_base: function (value) {
                return value / 1760;
            },
            from_base: function (value) {
                return value / 1760;
            }
        },
        mile:{
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
        METRIC: function (value) {
            return value * 1.609344;
        } 
    }
},
weight: {
    common_unit:"pound",
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
            area:"METRIC",
            volume: "SI",
            degree: "SI",
            distance: "METRIC"
        },
        "it-IT": {
            weight: "SI",
            speed:"SI",
            area:"SI",
            volume: "SI",
            degree: "SI",
            distance: "METRIC"
        },
        "en-US": {
            weight: "IMPERIAL",
            speed: "IMPERIAL",
            area: "IMPERIAL",
            volume: "IMPERIAL",
            degree: "IMPERIAL",
            distance: "IMPERIAL"
        }
    };

    var CONVERSION = {};


    var target_locale;

    var ConversionRequest = function (params) {
        // origin locale
        var origin_locale = params.locale,
        input_value = params.value,
        origin_units = (params.units && params.units.toLowerCase()),
        input_type = params.type || UNITS[params.units].type;

        var to = function (target_unit) {

            if (!target_locale) {
                console.error("Please set target locale like this: localeConverter.setTargetLocale('en-US');");
            }
            else {
                var target_som = LOCALE[target_locale][input_type];
                // First normalize to base units

                // Grab the conversion formula from origin_units to base_units for this type and locale
                var typeObj = SOM[LOCALE[origin_locale][input_type]][input_type];

                // If we dont get origin_units we should get it from the content (locale) - the common unit
                origin_units = origin_units || typeObj.common_unit;

                // Apply to input_value
                var base_value = typeObj.units[origin_units].to_base(input_value);

                // Say we don't have a target_unit, grab the base unit from the locale / field of conversion
                target_unit = target_unit || SOM[target_som][input_type].common_unit;

                // Grab the conversion formula from base_units of input_type from origin_locale to target_locale
                var si_base_value = typeObj.conversion_formula["SI"](base_value);
                var converted_base_value = SOM["SI"][input_type].conversion_formula[target_som](si_base_value);

                var targetTypeObj = SOM[target_som][input_type];
                var converted_value = targetTypeObj.units[target_unit.toLowerCase()].from_base(converted_base_value);

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

var localeConvertor = (function () {

    var LOCALE = {
        "he-IL": {
            weight: "SI"
        },
        "en-US": {
            weight: "IMPERIAL"
        }
    };

    // Systems of measurement
    var SOM = {
        SI: {
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
    }

    var CONVERSION = {};


    var target_locale;

    var ConversionRequest = function (params) {

        var input_locale = params.locale,
            input_value = params.value,
            input_units = params.units,
            input_type = params.type;

        var to = function (target_units) {
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
            var converted_value = targetTypeObj.units[target_units].from_base(converted_base_value);

            return converted_value;
        };

        return {
            to: to
        }
    };

    var setTargetLocale = function (_target_locale) {
        target_locale = _target_locale;
    };

    var convert = function (conversionRequestParams) {
        return new ConversionRequest(conversionRequestParams);
    };

    return {
        setTargetLocale: setTargetLocale,
        convert: convert
    }
})();
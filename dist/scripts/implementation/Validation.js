"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cascade_1 = require("cascade");
var Validation = (function () {
    function Validation(parent) {
        this.ruleIndex = {};
        this.rules = [];
        this.parent = parent;
    }
    Validation.attachGraph = function (obj) {
        if (!obj._validation) {
            Object.defineProperty(obj, '_validation', {
                configurable: true,
                writable: true,
                enumerable: false,
                value: new Validation(obj)
            });
        }
        return obj._validation;
    };
    Validation.createProperty = function (obj, property, rule) {
        Validation.attachGraph(obj);
        obj._validation.ruleIndex[property] = rule;
    };
    Validation.createRule = function (obj, property, rule) {
        cascade_1.default.attachObservable(obj, property + '-valid', rule);
        Validation.createProperty(obj, property, rule);
    };
    Validation.addRule = function (obj, property, rule) {
        var validation = Validation.attachGraph(obj);
        var oldRule = validation.ruleIndex[property];
        if (oldRule) {
            var index = validation.rules.indexOf(oldRule);
            if (index >= 0) {
                validation.rules.splice(index, 1);
            }
        }
        validation.ruleIndex[property] = rule;
        validation.rules.push(rule);
    };
    return Validation;
}());
exports.default = Validation;
//# sourceMappingURL=Validation.js.map
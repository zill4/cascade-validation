"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.required = void 0;
var cascade_1 = require("cascade");
var Validation_1 = require("./Validation");
var Rule_1 = require("./Rule");
function required(target, propertyKey, descriptor) {
    var validPropertyKey = propertyKey + '-valid';
    Object.defineProperty(target, validPropertyKey, {
        enumerable: true,
        configurable: true,
        get: function () {
            var _this = this;
            var graph = cascade_1.default.attachGraph(this);
            Validation_1.default.attachGraph(this);
            if (!graph.observables[validPropertyKey]) {
                var rule = new Rule_1.default(function () {
                    return !!_this[propertyKey];
                });
                graph.observables[validPropertyKey] = rule;
                Validation_1.default.addRule(this, propertyKey, rule);
            }
            return graph.observables[validPropertyKey].getValue();
        }
    });
}
exports.required = required;
//# sourceMappingURL=Decorators.js.map
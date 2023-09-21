"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var cascade_1 = require("cascade");
var CascadeValidation_1 = require("../scripts/CascadeValidation");
describe('required', function () {
    var Model = (function () {
        function Model() {
        }
        __decorate([
            CascadeValidation_1.required,
            cascade_1.observable,
            __metadata("design:type", String)
        ], Model.prototype, "value", void 0);
        return Model;
    }());
    it('should be false with default values', function () {
        var model = new Model();
        var valid = model['value-valid'];
        (0, chai_1.expect)(valid).to.equal(false);
    });
    it('should be true if property is truthy', function () {
        var model = new Model();
        model.value = 'abcd';
        var valid = model['value-valid'];
        (0, chai_1.expect)(valid).to.equal(true);
    });
    it('should be false if property is falsy', function () {
        var model = new Model();
        model.value = '';
        var valid = model['value-valid'];
        (0, chai_1.expect)(valid).to.equal(false);
    });
});
//# sourceMappingURL=requiredTest0.js.map
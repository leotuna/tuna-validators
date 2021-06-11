"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringHas = void 0;
var StringHas = /** @class */ (function () {
    function StringHas() {
    }
    StringHas.prototype.lower = function (value) {
        return /[a-z]/.test(value);
    };
    StringHas.prototype.upper = function (value) {
        return /[A-Z]/.test(value);
    };
    StringHas.prototype.number = function (value) {
        return /\d+/g.test(value);
    };
    return StringHas;
}());
exports.stringHas = new StringHas();

"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValid = void 0;
var IsValid = /** @class */ (function () {
    function IsValid() {
    }
    IsValid.prototype.cpf = function (value) {
        var sum;
        var rest;
        sum = 0;
        value = value.replace(/\D/g, '');
        if (value == '00000000000') {
            return false;
        }
        for (var i = 1; i <= 9; i++) {
            sum += parseInt(value.substring(i - 1, i)) * (11 - i);
        }
        rest = (sum * 10) % 11;
        if ((rest == 10) || (rest == 11)) {
            rest = 0;
        }
        if (rest != parseInt(value.substring(9, 10))) {
            return false;
        }
        sum = 0;
        for (var i = 1; i <= 10; i++) {
            sum += parseInt(value.substring(i - 1, i)) * (12 - i);
        }
        rest = (sum * 10) % 11;
        if ((rest == 10) || (rest == 11)) {
            rest = 0;
        }
        if (rest != parseInt(value.substring(10, 11))) {
            return false;
        }
        return true;
    };
    IsValid.prototype.cnpj = function (value) {
        if (!value)
            return false;
        var validTypes = typeof value === 'string' || Number.isInteger(value) || Array.isArray(value);
        if (!validTypes)
            return false;
        var match = value.toString().match(/\d/g);
        var numbers = Array.isArray(match) ? match.map(Number) : [];
        if (numbers.length !== 14)
            return false;
        var items = __spreadArray([], __read(new Set(numbers)));
        if (items.length === 1)
            return false;
        var calc = function (x) {
            var slice = numbers.slice(0, x);
            var factor = x - 7;
            var sum = 0;
            for (var i = x; i >= 1; i--) {
                var n = slice[x - i];
                sum += n * factor--;
                if (factor < 2)
                    factor = 9;
            }
            var result = 11 - (sum % 11);
            return result > 9 ? 0 : result;
        };
        var digits = numbers.slice(12);
        var digit0 = calc(12);
        if (digit0 !== digits[0])
            return false;
        var digit1 = calc(13);
        return digit1 === digits[1];
    };
    IsValid.prototype.phone = function (value, country) {
        throw new Error("Phone validation not implemented for this country yet.");
    };
    IsValid.prototype.fullName = function (value) {
        if (value.length < 1) {
            return false;
        }
        if (value.length > 60) {
            return false;
        }
        if (!value.includes(" ")) {
            return false;
        }
        if (!(/[[ ]|\p{L}*]+$/.test(value))) {
            return false;
        }
        if (value.split(" ").filter(function (x) { return x !== ""; }).length < 2) {
            return false;
        }
        return true;
    };
    IsValid.prototype.nomeFantasia = function (value) {
        if (value.length < 1) {
            return false;
        }
        if (value.length > 60) {
            return false;
        }
        return true;
    };
    IsValid.prototype.razaoSocial = function (value) {
        if (value.length < 1) {
            return false;
        }
        if (value.length > 60) {
            return false;
        }
        return true;
    };
    return IsValid;
}());
exports.isValid = new IsValid();

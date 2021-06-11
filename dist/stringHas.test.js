"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stringHas_1 = require("./stringHas");
describe('lower', function () {
    test('string that has lower character returns true', function () {
        expect(stringHas_1.stringHas.lower('This has a lower')).toBe(true);
    });
    test('string that does not have lower character returns false', function () {
        expect(stringHas_1.stringHas.lower('NO LOWER HERE')).toBe(false);
    });
});
describe('upper', function () {
    test('string that has upper character returns true', function () {
        expect(stringHas_1.stringHas.upper('This has an upper')).toBe(true);
    });
    test('string that does not have lower character returns false', function () {
        expect(stringHas_1.stringHas.upper('no upper here')).toBe(false);
    });
});
describe('number', function () {
    test('string that has number character returns true', function () {
        expect(stringHas_1.stringHas.number('1 is a number')).toBe(true);
    });
    test('string that does not have number character returns false', function () {
        expect(stringHas_1.stringHas.number('no number here')).toBe(false);
    });
});

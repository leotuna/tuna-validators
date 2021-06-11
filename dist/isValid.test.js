"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isValid_1 = require("./isValid");
describe('cpf', function () {
    test('valid cpf returns true', function () {
        expect(isValid_1.isValid.cpf('20839266090')).toBe(true);
    });
    test('valid cpf with punctuation returns true', function () {
        expect(isValid_1.isValid.cpf('870.599.040-85')).toBe(true);
    });
    test('invalid cpf returns false', function () {
        expect(isValid_1.isValid.cpf('20839266091')).toBe(false);
    });
    test('invalid cpf with punctuation returns false', function () {
        expect(isValid_1.isValid.cpf('870.599.040-81')).toBe(false);
    });
});
describe('cnpj', function () {
    test('valid cnpj returns true', function () {
        expect(isValid_1.isValid.cnpj('52758441000150')).toBe(true);
    });
    test('valid cnpj with punctuation returns true', function () {
        expect(isValid_1.isValid.cnpj('77.449.018/0001-08')).toBe(true);
    });
    test('invalid cnpj returns false', function () {
        expect(isValid_1.isValid.cnpj('5275844100015')).toBe(false);
    });
    test('invalid cnpj with punctuation returns false', function () {
        expect(isValid_1.isValid.cnpj('77.449.018/0001-04')).toBe(false);
    });
});
describe('fullName', function () {
    test('valid fullName returns true', function () {
        expect(isValid_1.isValid.fullName('José da Silva')).toBe(true);
    });
    test('valid fullName returns true', function () {
        expect(isValid_1.isValid.fullName('José Silva')).toBe(true);
    });
    test('invalid fullName returns false', function () {
        expect(isValid_1.isValid.fullName('José')).toBe(false);
    });
    test('invalid fullName returns false', function () {
        expect(isValid_1.isValid.fullName('José ')).toBe(false);
    });
    test('invalid fullName returns false', function () {
        expect(isValid_1.isValid.fullName(' José ')).toBe(false);
    });
});
describe('nomeFantasia', function () {
    test('sixty less caracter nomeFantasia returns true', function () {
        expect(isValid_1.isValid.nomeFantasia(new Array(60 + 1).join('*'))).toBe(true);
    });
    test('sixty plus caracter nomeFantasia returns false', function () {
        expect(isValid_1.isValid.nomeFantasia(new Array(60 + 2).join('*'))).toBe(false);
    });
    test('empty nomeFantasia returns false', function () {
        expect(isValid_1.isValid.nomeFantasia('')).toBe(false);
    });
});

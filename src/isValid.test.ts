import { isValid } from './isValid';

describe('cpf', () => {
  test('valid cpf returns true', () => {
    expect(isValid.cpf('20839266090')).toBe(true);
  });

  test('valid cpf with punctuation returns true', () => {
    expect(isValid.cpf('870.599.040-85')).toBe(true);
  });

  test('invalid cpf returns false', () => {
    expect(isValid.cpf('20839266091')).toBe(false);
  });

  test('invalid cpf with punctuation returns false', () => {
    expect(isValid.cpf('870.599.040-81')).toBe(false);
  });

  test('all zero cpf returns false', () => {
    expect(isValid.cpf('00000000000')).toBe(false);
  });
})

describe('cnpj', () => {
  test('valid cnpj returns true', () => {
    expect(isValid.cnpj('52758441000150')).toBe(true);
  });

  test('valid cnpj with punctuation returns true', () => {
    expect(isValid.cnpj('77.449.018/0001-08')).toBe(true);
  });

  test('invalid cnpj returns false', () => {
    expect(isValid.cnpj('5275844100015')).toBe(false);
  });

  test('invalid cnpj with punctuation returns false', () => {
    expect(isValid.cnpj('77.449.018/0001-04')).toBe(false);
  });
});

describe('fullName', () => {
  test('valid fullName returns true', () => {
    expect(isValid.fullName('José da Silva')).toBe(true);
  });

  test('valid fullName returns true', () => {
    expect(isValid.fullName('José Silva')).toBe(true);
  });

  test('invalid fullName returns false', () => {
    expect(isValid.fullName('José')).toBe(false);
  });

  test('invalid fullName returns false', () => {
    expect(isValid.fullName('José ')).toBe(false);
  });

  test('invalid fullName returns false', () => {
    expect(isValid.fullName(' José ')).toBe(false);
  });
});

describe('nomeFantasia', () => {
  test('sixty less caracter nomeFantasia returns true', () => {
    expect(isValid.nomeFantasia(new Array(60 + 1).join('*'))).toBe(true);
  });

  test('sixty plus caracter nomeFantasia returns false', () => {
    expect(isValid.nomeFantasia(new Array(60 + 2).join('*'))).toBe(false);
  });

  test('empty nomeFantasia returns false', () => {
    expect(isValid.nomeFantasia('')).toBe(false);
  });
});

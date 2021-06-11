import { stringHas } from './stringHas';

describe('lower', () => {
  test('string that has lower character returns true', () => {
    expect(stringHas.lower('This has a lower')).toBe(true);
  });

  test('string that does not have lower character returns false', () => {
    expect(stringHas.lower('NO LOWER HERE')).toBe(false);
  });
})

describe('upper', () => {
  test('string that has upper character returns true', () => {
    expect(stringHas.upper('This has an upper')).toBe(true);
  });

  test('string that does not have lower character returns false', () => {
    expect(stringHas.upper('no upper here')).toBe(false);
  });
})

describe('number', () => {
  test('string that has number character returns true', () => {
    expect(stringHas.number('1 is a number')).toBe(true);
  });

  test('string that does not have number character returns false', () => {
    expect(stringHas.number('no number here')).toBe(false);
  });
})

import { getCurrencySymbol } from './CurrencyHelper';

// returns the currency symbol for the given currency code USD
test('getCurrencySymbol USD', () => {
  expect(getCurrencySymbol('USD')).toBe('$');
});

// returns the currency symbol for the given currency code EUR
test('getCurrencySymbol EUR', () => {
    expect(getCurrencySymbol('EUR')).toBe('€');
});

// returns the given currency code when the currency code is not supported
test('getCurrencySymbol not supported', () => {
  expect(getCurrencySymbol('XYZ')).toBe('XYZ');
});
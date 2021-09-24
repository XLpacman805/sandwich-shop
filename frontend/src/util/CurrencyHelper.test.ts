import { getCurrencySymbol, format } from './CurrencyHelper';

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

// returns a formatted string for the given amount and currency code USD
test('format USD', () => {
  expect(format(100.00, 'USD')).toBe('$100');
});

// returns a formatted string for the given amount and currency code USD 0
test('format USD 0', () => {
  expect(format(0.00, 'USD')).toBe('$0');
});

// returns a formatted string for the given amount and currency code USD 7.50
test('format USD 7.50', () => {
  expect(format(7.50, 'USD')).toBe('$7.50');
});

// returns a formatted string for the given amount and currency code USD 01.05
test('format USD 01.05', () => {
  expect(format(1.05, 'USD')).toBe('$1.05');
});

// returns a formatted string for the given amount and currency code USD 0.05
test('format USD 0.05', () => {
  expect(format(0.05, 'USD')).toBe('$0.05');
});

// returns a formatted string for the given amount and currency code USD 0.005
test('format USD 0.005', () => {
  expect(format(0.005, 'USD')).toBe('$0.01');
});

// returns a formatted string for the given amount and currency code USD 100.299995
test('format USD 100.299995', () => {
  expect(format(100.299995, 'USD')).toBe('$100.30');
});
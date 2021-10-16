const CURRENCY_MAP: Map<string, string> = new Map<string, string>([
    ['USD', '$'],
    ['EUR', '€'],
]);

export const getCurrencySymbol = (currency: string): string => {
    //find the currency symbol
    const currencySymbol = CURRENCY_MAP.get(currency);
    if (currencySymbol) {
        return currencySymbol;
    }
    return currency;
}

// format the number to a currency. Will need to be updated to handle different currencies other than USD.
export const format = (amount: number, currency = 'USD', locale = 'en-US'): string => {
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currency
    }).format(amount).replace('.00', '');
}

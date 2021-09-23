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

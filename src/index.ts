/**
 * Caribbean Currency Formatter
 * Engineered by Webitt Digital Agency (https://thewebitt.com)
 * License: MIT
 */

export type CaribbeanCurrencyCode = 
  | 'TTD' // Trinidad and Tobago Dollar
  | 'JMD' // Jamaican Dollar
  | 'BBD' // Barbadian Dollar
  | 'XCD' // East Caribbean Dollar
  | 'GYD' // Guyanese Dollar
  | 'BSD' // Bahamian Dollar
  | 'USD';// US Dollar

export interface CurrencyConfig {
  name: string;
  symbol: string;
  disambiguatedSymbol: string;
  decimals: number;
}

export const CARIBBEAN_CURRENCIES: Record<CaribbeanCurrencyCode, CurrencyConfig> = {
  TTD: { name: 'Trinidad and Tobago Dollar', symbol: '$', disambiguatedSymbol: 'TT$', decimals: 2 },
  JMD: { name: 'Jamaican Dollar', symbol: '$', disambiguatedSymbol: 'J$', decimals: 2 },
  BBD: { name: 'Barbadian Dollar', symbol: '$', disambiguatedSymbol: 'Bds$', decimals: 2 },
  XCD: { name: 'East Caribbean Dollar', symbol: '$', disambiguatedSymbol: 'EC$', decimals: 2 },
  GYD: { name: 'Guyanese Dollar', symbol: '$', disambiguatedSymbol: 'G$', decimals: 2 },
  BSD: { name: 'Bahamian Dollar', symbol: '$', disambiguatedSymbol: 'B$', decimals: 2 },
  USD: { name: 'US Dollar', symbol: '$', disambiguatedSymbol: 'US$', decimals: 2 },
};

export interface FormatOptions {
  currency?: CaribbeanCurrencyCode;
  style?: 'symbol' | 'disambiguated' | 'code' | 'none';
  decimals?: number;
  compact?: boolean;
}

/**
 * Format a number into clean, regional Caribbean currency string
 */
export function formatCaribbeanCurrency(
  amount: number,
  options: FormatOptions = {}
): string {
  const {
    currency = 'TTD',
    style = 'disambiguated',
    decimals,
    compact = false,
  } = options;

  const config = CARIBBEAN_CURRENCIES[currency] || CARIBBEAN_CURRENCIES.TTD;
  const numDecimals = decimals !== undefined ? decimals : config.decimals;

  let formattedNumber: string;

  if (compact) {
    if (Math.abs(amount) >= 1_000_000) {
      formattedNumber = (amount / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
    } else if (Math.abs(amount) >= 1_000) {
      formattedNumber = (amount / 1_000).toFixed(1).replace(/\.0$/, '') + 'k';
    } else {
      formattedNumber = amount.toFixed(numDecimals);
    }
  } else {
    formattedNumber = amount.toLocaleString('en-US', {
      minimumFractionDigits: numDecimals,
      maximumFractionDigits: numDecimals,
    });
  }

  switch (style) {
    case 'symbol':
      return `${config.symbol}${formattedNumber}`;
    case 'code':
      return `${formattedNumber} ${currency}`;
    case 'none':
      return formattedNumber;
    case 'disambiguated':
    default:
      return `${config.disambiguatedSymbol} ${formattedNumber}`;
  }
}

/**
 * Safely parse a formatted currency string into a clean numeric value
 */
export function parseCaribbeanAmount(input: string): number {
  if (typeof input !== 'string') return 0;
  const cleaned = input.replace(/[^0-9.-]+/g, '');
  const parsed = parseFloat(cleaned);
  return isNaN(parsed) ? 0 : parsed;
}

# Caribbean Currency Formatter

[![Engineered by Webitt](https://img.shields.io/badge/Maintained%20by-Webitt-0066FF.svg)](https://thewebitt.com)
[![TypeScript](https://img.shields.io/badge/Language-TypeScript-blue.svg)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A zero-dependency TypeScript and JavaScript utility for formatting Caribbean currencies with correct regional symbol placement, ISO codes, and clean decimal precision.

Built specifically for regional e-commerce stores, SaaS billing, and fintech web applications serving Caribbean markets.

---

## The Problem

Standard internationalization APIs (`Intl.NumberFormat`) frequently confuse Caribbean currencies:
- Formatting `TTD 100` often outputs just `$100.00`, leading to confusion between US Dollars and Trinidad & Tobago Dollars in multi-currency stores.
- Eastern Caribbean Dollar (`XCD`), Jamaican Dollar (`JMD`), and Guyanese Dollar (`GYD`) have regional conventions (such as disambiguation prefixes like `TT$` or `J$`) that standard formatters omit or render inconsistently.

This package provides consistent, reliable formatting out-of-the-box.

---

## Features

- **Disambiguated Symbols:** Automatically prefixes ambiguous dollar signs (`TT$`, `J$`, `Bds$`, `EC$`) when needed to prevent customer checkout confusion.
- **Full Regional Support:** Trinidad & Tobago (`TTD`), Jamaica (`JMD`), Barbados (`BBD`), Eastern Caribbean (`XCD`), Guyana (`GYD`), Bahamas (`BSD`), and US Dollar (`USD`).
- **Flexible Display Formats:** Standard symbol, ISO code, compact notations (`$1.2k`), and accounting formats.
- **Zero Dependencies:** Ultra-lightweight footprint (< 2KB), perfect for Next.js, React, Astro, Vue, Node.js, and browser environments.

---

## Quick Start

### Installation

```bash
git clone https://github.com/webittdigital/caribbean-currency-formatter.git
```

### Usage (TypeScript / JavaScript)

```typescript
import { formatCaribbeanCurrency, parseCaribbeanAmount } from './src/index';

// Standard formatting with regional disambiguation
formatCaribbeanCurrency(2500, { currency: 'TTD' });
// Output: "TT$ 2,500.00"

// Disambiguation for Jamaican Dollars
formatCaribbeanCurrency(15400, { currency: 'JMD' });
// Output: "J$ 15,400.00"

// ISO code format
formatCaribbeanCurrency(350, { currency: 'BBD', style: 'code' });
// Output: "350.00 BBD"

// Compact format for dashboards & analytics
formatCaribbeanCurrency(1250000, { currency: 'TTD', compact: true });
// Output: "TT$ 1.25M"

// Safe numeric parsing from formatted strings
parseCaribbeanAmount("TT$ 4,500.50");
// Output: 4500.5
```

---

## Supported Currencies

| Country / Territory | ISO Code | Default Symbol | Disambiguated |
| :--- | :--- | :--- | :--- |
| Trinidad & Tobago | `TTD` | `$` | `TT$` |
| Jamaica | `JMD` | `$` | `J$` |
| Barbados | `BBD` | `$` | `Bds$` |
| Eastern Caribbean (OECS) | `XCD` | `$` | `EC$` |
| Guyana | `GYD` | `$` | `G$` |
| Bahamas | `BSD` | `$` | `B$` |
| United States | `USD` | `$` | `US$` |

---

## Maintained By

Engineered and maintained by **[Webitt](https://thewebitt.com)**.

We build modern websites, scalable web applications, and high-performance digital tools for businesses across the Caribbean and the US.

- **Website:** [thewebitt.com](https://thewebitt.com)
- **Services:** [Web Applications](https://thewebitt.com/services/web-applications) | [Web Design & Development](https://thewebitt.com/services/web-design-development) | [SEO Strategy](https://thewebitt.com/services/seo)
- **GitHub:** [@webittdigital](https://github.com/webittdigital)

---

## License

MIT © [Webitt](https://thewebitt.com)

// currency-card.ts
import { Component, signal, computed } from '@angular/core';
import { CurrencyInput } from './currency-input/currency-input';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-currency-card',
  standalone: true,
  imports: [CurrencyInput, DecimalPipe],
  templateUrl: './currency-card.html',
})
export class CurrencyCard {
  amount = signal(100);
  fromCurrency = signal('INR');
  toCurrency = signal('USD');
  currency: Record<string, string> = { USD: '$', EUR: '€', GBP: '£', INR: '₹' };
  rates: Record<string, number> = { USD: 1, EUR: 0.92, GBP: 0.79, INR: 83.2 };

  converted = computed(() => {
    const usd = this.amount() / this.rates[this.fromCurrency()];
    return usd * this.rates[this.toCurrency()];
  });
}
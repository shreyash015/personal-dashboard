import { Component, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-currency-card',
  imports: [FormsModule, DecimalPipe],
  templateUrl: './currency-card.html',
  styleUrl: './currency-card.css',
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

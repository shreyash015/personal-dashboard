import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-currency-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './currency-input.html',
})
export class CurrencyInput {
  @Input() amount = 0;
  @Input() currencyCode = 'USD';
  @Input() currencySymbol = '$';
  @Input() readonly = false;

  @Output() amountChange = new EventEmitter<number>();
  @Output() currencyCodeChange = new EventEmitter<string>();

  onAmountInput(value: string) {
    this.amountChange.emit(+value);
  }

  onCurrencyChange(value: string) {
    this.currencyCodeChange.emit(value);
  }
}
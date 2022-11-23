import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogRef } from '@core/layout/dialog/dialog-ref';
import { DialogService } from '@core/layout/dialog/dialog.service';
import { AddNewCurrencyComponent } from './components/add-new-currency/add-new-currency.component';
import { CurrencyForm } from './models/currency-convert';
import { ExchangeRates } from './models/exchange-rates';
import { HomeService } from './services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  result: number = 0;

  symbols: string[] = [];

  newCurrencyDialog!: DialogRef;

  exchangeForm: FormGroup = this.fb.group({
    amount: [null, [Validators.required, Validators.min(1)]],
    from: ['HUF', Validators.required],
    to: ['EUR', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private homeService: HomeService,
    private dialog: DialogService
  ) {}

  ngOnInit(): void {
    this.getSymbols();
  }

  getSymbols(): void {
    this.homeService.getSymbols().subscribe({
      next: (symbols: string[]) => {
        this.symbols = symbols;
      },
      error: () => {},
      complete: () => {},
    });
  }

  convert(): void {
    if (this.exchangeForm.valid) {
      this.homeService.convert().subscribe({
        next: (res: ExchangeRates) => {
          this.calculate(res);
        },
        error: () => {},
        complete: () => {},
      });
    }
  }

  addCurrency(): void {
    this.newCurrencyDialog = this.dialog.open(AddNewCurrencyComponent, {});

    this.newCurrencyDialog.afterClosed.subscribe((res) => {
      if (res) {
        return;
      }
    });
  }

  private calculate(exchangeRates: ExchangeRates): void {
    const currency = this.exchangeForm.value as CurrencyForm;

    const currencyKey = exchangeRates[currency.from].find((i) => i.key === currency.to);
    if (currencyKey) {
      this.result = currency.amount * currencyKey.rate;
    }
  }
}

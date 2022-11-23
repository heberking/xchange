import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogRef } from '@core/layout/dialog/dialog-ref';
import { DialogService } from '@core/layout/dialog/dialog.service';
import { AddNewCurrencyComponent } from './components/add-new-currency/add-new-currency.component';
import { HomeService } from './services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  symbols: string[] = [];

  newCurrencyDialog!: DialogRef;

  exchangeForm: FormGroup<any> = this.fb.group({
    amount: ['', Validators.required, Validators.min(0)],
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
      return;
    }
  }

  addCurrency(): void {
    this.newCurrencyDialog = this.dialog.open(AddNewCurrencyComponent, {});

    this.newCurrencyDialog.afterClosed.subscribe((res) => {
      if (res) {
      }
    });
  }
}

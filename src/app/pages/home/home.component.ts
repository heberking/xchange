import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HomeService } from './services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  symbols: string[] = [];

  exchangeForm: FormGroup<any> = this.fb.group({
    amount: ['', Validators.required],
    from: ['HUF', Validators.required],
    to: ['EUR', Validators.required],
  });

  constructor(private fb: FormBuilder, private homeService: HomeService) {}

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

  addCurrency(): void {}
}

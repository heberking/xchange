import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogRef } from '@core/layout/dialog/dialog-ref';
import { NewCurrency } from '@pages/home/models/new-currency';

@Component({
  selector: 'app-add-new-currency',
  templateUrl: './add-new-currency.component.html',
  styleUrls: ['./add-new-currency.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddNewCurrencyComponent implements OnInit {
  symbols: string[] = ['HUF', 'EUR', 'USD', 'CHF', 'GBP', 'CNY'];

  newCurrencyForm: FormGroup = this.fb.group({
    from: ['HUF', Validators.required],
    to: ['EUR', Validators.required],
    rate: [null, [Validators.required, Validators.min(0)]],
  });

  constructor(private fb: FormBuilder, private dialogRef: DialogRef) {}

  ngOnInit(): void {}

  addCurrency(): void {
    if (this.newCurrencyForm.valid) {
      const formValue = this.newCurrencyForm.value as NewCurrency;
      this.dialogRef.close(formValue);
    }
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}

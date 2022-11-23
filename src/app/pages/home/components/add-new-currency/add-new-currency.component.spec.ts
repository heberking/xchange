import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewCurrencyComponent } from './add-new-currency.component';

describe('AddNewCurrencyComponent', () => {
  let component: AddNewCurrencyComponent;
  let fixture: ComponentFixture<AddNewCurrencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewCurrencyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

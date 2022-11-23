import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { AddNewCurrencyComponent } from './components/add-new-currency/add-new-currency.component';

@NgModule({
  declarations: [HomeComponent, AddNewCurrencyComponent],
  imports: [CommonModule, HomeRoutingModule, FormsModule, ReactiveFormsModule],
})
export class HomeModule {}

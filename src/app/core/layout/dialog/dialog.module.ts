import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DialogComponent } from './dialog.component';
import { DialogConfig } from './dialog.config';
import { InsertionDirective } from './insertion.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [DialogComponent, InsertionDirective],
  entryComponents: [DialogComponent],
  providers: [DialogConfig],
})
export class DialogModule {}

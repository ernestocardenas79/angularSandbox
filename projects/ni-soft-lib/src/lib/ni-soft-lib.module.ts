import { NgModule } from '@angular/core';
import { NiSoftLibComponent } from './ni-soft-lib.component';
import { FloatingLabelComponent } from './floating-label/floating-label.component';

@NgModule({
  declarations: [NiSoftLibComponent, FloatingLabelComponent],
  imports: [
  ],
  exports: [NiSoftLibComponent]
})
export class NiSoftLibModule { }

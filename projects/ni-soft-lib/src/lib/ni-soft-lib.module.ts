import { NgModule } from '@angular/core';
import { FloatingLabelComponent } from './floating-label/floating-label.component';
import { FloatingLabelDirective } from './floating-label.directive';
import { ScoreCounterComponent } from './score-counter/score-counter.component';
import { SliderModule } from './slider/slider.module';
import { ToastComponent } from './toast/toast.component';

@NgModule({
  declarations: [
    FloatingLabelComponent,
    FloatingLabelDirective,
    ScoreCounterComponent,
    ToastComponent],
  imports: [],
  entryComponents: [ToastComponent],
  exports: [FloatingLabelComponent,
    ScoreCounterComponent,
    ToastComponent]
})
export class NiSoftLibModule { }

import { NgModule } from '@angular/core';
import { FloatingLabelComponent } from './floating-label/floating-label.component';
import { FloatingLabelDirective } from './floating-label.directive';
import { ScoreCounterComponent } from './score-counter/score-counter.component';
import { SliderModule } from './slider/slider.module';

@NgModule({
  declarations: [FloatingLabelComponent, FloatingLabelDirective, ScoreCounterComponent],
  imports: [],
  exports: [FloatingLabelComponent]
})
export class NiSoftLibModule { }

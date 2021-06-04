import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { FloatingLabelComponent } from './floating-label/floating-label.component';
import { FloatingLabelDirective } from './floating-label.directive';
import { ScoreCounterComponent } from './score-counter/score-counter.component';

@NgModule({
    declarations: [
        FloatingLabelComponent,
        FloatingLabelDirective,
        ScoreCounterComponent,
    ],
    imports: [CommonModule],
    exports: [FloatingLabelComponent, ScoreCounterComponent],
})
export class NiSoftLibModule {}

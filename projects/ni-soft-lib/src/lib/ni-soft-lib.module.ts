import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { FloatingLabelComponent } from './floating-label/floating-label.component';
import { FloatingLabelDirective } from './floating-label.directive';
import { ScoreCounterComponent } from './score-counter/score-counter.component';

import { ToastComponent } from './toast/toast.component';

@NgModule({
    declarations: [
        FloatingLabelComponent,
        FloatingLabelDirective,
        ScoreCounterComponent,
    ],
    imports: [CommonModule],
    entryComponents: [ToastComponent],
    exports: [FloatingLabelComponent, ScoreCounterComponent],
})
export class NiSoftLibModule {}

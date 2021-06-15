import {
    ComponentFactoryResolver,
    Directive,
    OnInit,
    ViewContainerRef,
} from '@angular/core';
import { ScoreCounterComponent } from '../../../../../ni-soft-lib/src/lib/score-counter/score-counter.component';

@Directive({
    selector: 'app-player-score',
})
export class PalyerScoreDirective {
    constructor(
        private view: ViewContainerRef,
        private resolver: ComponentFactoryResolver
    ) {}
    /*
    ngOnInit() {
        console.log('directive');
        const factory = this.resolver.resolveComponentFactory(
            ScoreCounterComponent
        );
        const scoreCounter = this.view.createComponent<ScoreCounterComponent>(
            factory
        );
        scoreCounter.instance.puntos = 1;
    }
*/
}

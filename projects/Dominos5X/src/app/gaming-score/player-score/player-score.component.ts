import {
    AfterViewInit,
    Component,
    ComponentFactoryResolver,
    OnInit,
    ViewChild,
    ViewContainerRef,
} from '@angular/core';
import { ScoreCounterComponent } from 'projects/ni-soft-lib/src/lib/score-counter/score-counter.component';

@Component({
    selector: 'app-player-score',
    templateUrl: './player-score.component.html',
    styleUrls: ['./player-score.component.scss'],
})
export class PlayerScoreComponent implements OnInit {
    @ViewChild('counter', { read: ViewContainerRef }) counter: ViewContainerRef;

    constructor(private resolver: ComponentFactoryResolver) {}

    ngOnInit(): void {
        const factory = this.resolver.resolveComponentFactory(
            ScoreCounterComponent
        );
        const scoreCounter = this.counter.createComponent(factory);
        scoreCounter.instance.puntos = 1;
    }
}

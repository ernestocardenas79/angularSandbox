import { ScoreCounterComponent } from '../../../../../ni-soft-lib/src/lib/score-counter/score-counter.component';
import {
    Component,
    OnInit,
    Input,
    HostListener,
    ViewChildren,
    ViewContainerRef,
    QueryList,
    ComponentFactoryResolver,
    AfterViewInit,
} from '@angular/core';

@Component({
    selector: 'app-player-score',
    templateUrl: './player-score.component.html',
    styleUrls: ['./player-score.component.scss'],
})
export class PlayerScoreComponent implements OnInit, AfterViewInit {
    constructor(private cfr: ComponentFactoryResolver) {}
    puntos = 0;
    instances: ScoreCounterComponent;

    @Input()
    nombre: string;

    @ViewChildren(ScoreCounterComponent)
    scoreCounterList: QueryList<ScoreCounterComponent>;

    @ViewChildren('counterContainer', { read: ViewContainerRef })
    counterContainerVCR: QueryList<ViewContainerRef>;

    @HostListener('click', ['$event.target'])
    onClick() {
        this.incrementarPuntaje();
    }

    ngOnInit(): void {}

    incrementarPuntaje() {
        this.puntos += 5;
        this.instances.assignSlots(1);
    }

    ngAfterViewInit() {
        this.instances = this.scoreCounterList.first;
        this.scoreCounterList.changes.subscribe();
    }

    createCounter() {
        console.log('CreateCounter');
        const factory = this.cfr.resolveComponentFactory(ScoreCounterComponent);

        const containerRef = this.counterContainerVCR.last.createComponent(
            factory
        );

        this.instances = containerRef.instance;
    }
}

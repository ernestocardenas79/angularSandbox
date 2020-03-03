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
    EventEmitter,
    Output,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { GameConfigService } from '../../services/game-config.service';

@Component({
    selector: 'app-player-score',
    templateUrl: './player-score.component.html',
    styleUrls: ['./player-score.component.scss'],
})
export class PlayerScoreComponent implements OnInit, AfterViewInit {
    constructor(
        private cfr: ComponentFactoryResolver,
        private gameConfigService: GameConfigService
    ) {}
    puntos = 0;
    instances: ScoreCounterComponent;
    completeSubscripton: Subscription;
    config;

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

    ngOnInit(): void {
        this.config = this.gameConfigService.loadConfig;
    }

    incrementarPuntaje() {
        if (this.puntos < this.config.winScore) {
            this.puntos += 5;
            this.instances.assignSlots(1);
        } else {
            this.gameConfigService.winner(this.nombre);
        }
    }

    ngAfterViewInit() {
        this.instances = this.scoreCounterList.first;
        this.scoreCounterList.changes.subscribe();
    }

    createCounter() {
        const factory = this.cfr.resolveComponentFactory(ScoreCounterComponent);

        const containerRef = this.counterContainerVCR.last.createComponent(
            factory
        );

        this.completeSubscripton = containerRef.instance.isCompleted.subscribe(
            isCompleted => {
                this.createCounter();
            }
        );

        this.instances = containerRef.instance;
    }
}

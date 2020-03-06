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
    ComponentRef,
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
    scoreCounterCollection: Array<ComponentRef<ScoreCounterComponent>>;

    @Input()
    nombre: string;

    @Input()
    juegoTerminado: boolean;

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
        if (this.puntos < this.config.winScore && !this.juegoTerminado) {
            console.log('incrementarPuntaje', this.puntos);
            this.puntos += 5;
            this.instances.assignSlots(1);
        } else {
            this.gameConfigService.winner(this.nombre);
        }
    }

    ngAfterViewInit() {
        this.instances = this.scoreCounterList.first;
        this.scoreCounterCollection = new Array<
            ComponentRef<ScoreCounterComponent>
        >();
        console.log(
            'ngAfterViewInit',
            this.scoreCounterCollection,
            this.scoreCounterList.first,
            this.scoreCounterList,
            this.instances
        );
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
        this.scoreCounterCollection.push(containerRef);
    }

    resetGame() {
        this.puntos = 0;

        this.scoreCounterCollection.forEach(sc => sc.destroy());
        const firstComponent = this.scoreCounterList.first;
        firstComponent.completed = false;
        firstComponent.assignedSlots = 0;
    }
}

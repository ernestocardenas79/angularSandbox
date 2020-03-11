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
    OnDestroy,
    ViewChild,
    ChangeDetectorRef,
} from '@angular/core';
import { Subscription, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { GameConfigService } from '../../services/game-config.service';

@Component({
    selector: 'app-player-score',
    templateUrl: './player-score.component.html',
    styleUrls: ['./player-score.component.scss'],
})
export class PlayerScoreComponent implements OnInit, AfterViewInit, OnDestroy {
    constructor(
        private cfr: ComponentFactoryResolver,
        private gameConfigService: GameConfigService,
        private cdr: ChangeDetectorRef
    ) {}

    puntos = 0;
    instances: ScoreCounterComponent;
    completeSubscripton: Subscription;
    config;
    scoreCounterCollection: Array<ComponentRef<ScoreCounterComponent>>;
    private unsubscribe$ = new Subject<void>();

    @Input()
    nombre: string;

    @Input()
    juegoTerminado: boolean;

    @ViewChildren(ScoreCounterComponent)
    scoreCounterList: QueryList<ScoreCounterComponent>;

    @ViewChild('counterContainer', { read: ViewContainerRef })
    counterContainerVCR: ViewContainerRef;

    @HostListener('click', ['$event.target'])
    onClick() {
        this.incrementarPuntaje();
    }

    ngOnInit(): void {
        this.config = this.gameConfigService.loadConfig;

        this.scoreCounterCollection = new Array<
            ComponentRef<ScoreCounterComponent>
        >();
    }

    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }

    incrementarPuntaje() {
        if (this.puntos < this.config.winScore && !this.juegoTerminado) {
            this.puntos += 5;
            this.instances.assignSlots(1);
        } else {
            this.gameConfigService.winner(this.nombre);
        }
    }

    ngAfterViewInit() {
        this.createCounter();
        this.cdr.detectChanges();
    }

    createCounter() {
        const factory = this.cfr.resolveComponentFactory(ScoreCounterComponent);

        const containerRef = this.counterContainerVCR.createComponent(factory);

        this.completeSubscripton = containerRef.instance.isCompleted
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe(isCompleted => {
                this.createCounter();
            });

        this.instances = containerRef.instance;
        this.scoreCounterCollection.push(containerRef);
    }

    resetGame() {
        this.puntos = 0;

        this.scoreCounterCollection.forEach(sc => sc.destroy());

        setTimeout(() => {
            this.createCounter();
        }, 200);
    }
}

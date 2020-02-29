import {
    Component,
    OnInit,
    Input,
    HostListener,
    ViewChildren,
    ViewContainerRef,
    QueryList,
    ComponentFactoryResolver,
} from '@angular/core';

@Component({
    selector: 'app-player-score',
    templateUrl: './player-score.component.html',
    styleUrls: ['./player-score.component.scss'],
})
export class PlayerScoreComponent implements OnInit {
    constructor(private cfr: ComponentFactoryResolver) {}
    puntos = 0;

    @Input()
    nombre: string;

    @ViewChildren('counterContainer', { read: ViewContainerRef })
    counterContainerVCR: QueryList<ViewContainerRef>;

    @HostListener('click', ['$event.target'])
    onClick() {
        alert(this.nombre);
    }

    ngOnInit(): void {}

    incrementarPuntaje() {
        this.puntos += 5;
    }

    ngAfterInit() {
        this.counterContainerVCR.changes.subscribe();
    }
}

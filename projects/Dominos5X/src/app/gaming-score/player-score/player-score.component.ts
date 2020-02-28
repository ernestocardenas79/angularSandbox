import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
    selector: 'app-player-score',
    templateUrl: './player-score.component.html',
    styleUrls: ['./player-score.component.scss'],
})
export class PlayerScoreComponent implements OnInit {
    puntos = 0;

    @Input()
    nombre: string;

    @HostListener('click', ['$event.target'])
    onClick() {
        alert(this.nombre);
    }

    constructor() {}

    ngOnInit(): void {}

    incrementarPuntaje() {
        this.puntos += 5;
    }
}

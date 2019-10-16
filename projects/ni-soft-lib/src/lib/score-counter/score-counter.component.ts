import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'nisl-score-counter',
  templateUrl: './score-counter.component.html',
  styleUrls: ['./score-counter.component.scss']
})
export class ScoreCounterComponent implements OnInit {

  puntosList: string[];

  @Input()
  set puntos(ptos: number) {
    let aux = '';
    for (let i = 0; i < ptos; i++) {
        aux = aux + '|';
    }
    console.log(ptos, aux);

    this.puntosList = aux.split('|').slice(1);
  }

  @Input()
  player: string;

  constructor() { }

  ngOnInit() {
    console.log(this.player);
  }




}

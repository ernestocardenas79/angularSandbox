import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ConcatSource } from 'webpack-sources';

@Component({
    selector: 'nisl-score-counter',
    templateUrl: './score-counter.component.html',
    styleUrls: ['./score-counter.component.scss'],
})
export class ScoreCounterComponent implements OnInit {
    puntosList: string[];
    completed = false;
    private maxSlots = 5;
    private assignedSlots = 0;

    @Output()
    isCompleted: EventEmitter<boolean> = new EventEmitter();

    assignSlots(ptos: number) {
        console.log('assignSlots', ptos, this.assignedSlots);
        if (!this.completed) {
            let slotForAssign = ptos;

            if (this.assignedSlots + ptos >= this.maxSlots) {
                this.completed = true;
                slotForAssign = this.SlotsToAssing;

                if (this.assignedSlots + ptos >= this.maxSlots) {
                    this.isCompleted.emit(true);
                }
                this.assignedSlots = this.maxSlots;
            } else {
                this.assignedSlots += ptos;
            }
            this.incrementSlots(slotForAssign);
        }
    }

    get SlotsToAssing() {
        return this.maxSlots - this.assignedSlots;
    }

    private incrementSlots(ptos: number) {
        let aux = '';

        if (this.puntosList?.length > 0) {
            aux = this.puntosList.join('|');
            for (let i = 0; i < ptos; i++) {
                aux += '|a';
            }
            this.puntosList = aux.split('|');
            console.log('aux', aux);
        } else {
            this.puntosList = ['a'];
        }

        console.log('incrementSlots', ptos, aux, this.puntosList);
    }

    constructor() {}

    ngOnInit() {}
}

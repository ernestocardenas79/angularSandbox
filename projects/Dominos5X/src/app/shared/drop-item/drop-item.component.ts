import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ConcatSource } from 'webpack-sources';

@Component({
    selector: 'app-drop-item',
    templateUrl: './drop-item.component.html',
    styleUrls: ['./drop-item.component.scss'],
})
export class DropItemComponent implements OnInit {
    @Input()
    referencia: number;

    @Output()
    deleteItem: EventEmitter<number> = new EventEmitter();

    constructor() {}

    ngOnInit() {}

    drop() {
        console.log('Drop Item', this.referencia);
        this.deleteItem.emit(this.referencia);
    }
}

import { Component, OnInit, Input, Output, EventEmitter, ViewContainerRef } from '@angular/core';
import { ConcatSource } from 'webpack-sources';

export interface MyInterface {
  remove(index: number);
}

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

    public index: number;
    public selfRef: DropItemComponent;

    // interface for Parent-Child interaction
    public compInteraction: MyInterface;

    constructor() {}

    ngOnInit() {}

    drop() {
        console.log('Drop Item', this.referencia);
        this.deleteItem.emit(this.referencia);
    }

    removeMe(index) {
        // this.compInteraction.remove(this.referencia);

    }
}

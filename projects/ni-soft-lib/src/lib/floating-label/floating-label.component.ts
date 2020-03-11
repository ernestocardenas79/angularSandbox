import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'nisl-floating-label',
    templateUrl: './floating-label.component.html',
    styleUrls: ['./floating-label.component.css'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => FloatingLabelComponent),
            multi: true,
        },
    ],
})
export class FloatingLabelComponent {
    @Input()
    type;

    @Input()
    label: string;

    onChange = _ => {};
    onTouched = () => {};

    writeValue(obj: any): void {}

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }
    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }
}

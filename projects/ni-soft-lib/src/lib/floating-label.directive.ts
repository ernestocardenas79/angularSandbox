import { Directive, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

// const CUSTOM_VALUE_ACCESSOR = new ClassProvider(NG_VALUE_ACCESSOR, {
//     useExisting: forwardRef(() => FloatingLabelDirective),
//     multi: true,
// });

@Directive({
    selector: 'nisl-floating-label',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => FloatingLabelDirective),
            multi: true,
        },
    ],
})
export class FloatingLabelDirective implements ControlValueAccessor {
    onChange = _ => {};
    onTouched = () => {};

    writeValue(obj: any): void {}

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }
    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    constructor() {}
}

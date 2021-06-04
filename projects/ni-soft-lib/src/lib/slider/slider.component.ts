import { Component, OnInit, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'nisl-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SliderComponent),
    multi: true
  }]
})
export class SliderComponent implements OnInit, ControlValueAccessor {
  value: boolean;
  isDisabled: boolean;
  onChange = (_: any) => { };
  onTouch = () => { };

  toggle() {
    this.value = !this.value;
    this.onChange(this.value);
  }

  writeValue(value: any): void {
    if (value) {
      this.value = value;
    } else {
      this.value = false;
    }
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void { }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  constructor() {
  }

  ngOnInit() {
  }

}

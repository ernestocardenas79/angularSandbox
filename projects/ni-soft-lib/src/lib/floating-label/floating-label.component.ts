import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'nsl-floating-label',
  templateUrl: './floating-label.component.html',
  styleUrls: ['./floating-label.component.css']
})
export class FloatingLabelComponent implements OnInit {

  @Input()
  type;

  constructor() { }

  ngOnInit() {
  }
}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'nisl-floating-label',
  templateUrl: './floating-label.component.html',
  styleUrls: ['./floating-label.component.css']
})
export class FloatingLabelComponent implements OnInit {

  @Input()
  type;

  @Input()
  label: string;


  constructor() { }

  ngOnInit() {
  }
}

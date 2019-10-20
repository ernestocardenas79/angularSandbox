import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nis-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  name: string;
  lastName: string;
  brithDay: Date;
  selected: boolean;
  constructor() { }

  ngOnInit() {

  }

  submit() {
    console.log('adasd');
  }
}

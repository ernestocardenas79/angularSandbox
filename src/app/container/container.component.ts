import { Component, OnInit } from '@angular/core';
import { ToastService } from 'ni-soft-lib';

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
  constructor(private toast: ToastService) { }

  ngOnInit() {

  }

  submit() {
    console.log('sumbit');
    this.toast.show({ text: 'Toast, Toast, Toast', type: 'success'});
  }
}

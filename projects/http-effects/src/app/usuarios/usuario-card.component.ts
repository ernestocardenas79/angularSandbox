import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-usuario-card',
  templateUrl: './usuario-card.component.html',
  styleUrls: ['./usuario-card.component.scss']
})
export class UsuarioCardComponent implements OnInit {

  constructor() { }

  @Input()
  img:string;

  @Input()
  name:string;

  @Input()
  Id:number

  ngOnInit() {
  }

}

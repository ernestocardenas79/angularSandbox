import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-game-config',
  templateUrl: './game-config.component.html',
  styleUrls: ['./game-config.component.scss']
})
export class GameConfigComponent implements OnInit {

  configuracion: FormGroup;
  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.configuracion = this.formBuilder.group({
      players: this.formBuilder.array([
              new FormControl('', Validators.required),
              new FormControl('', Validators.required),
          ])
    });
  }

  AddPlayer() {
    // this.players.push(new FormControl('', Validators.required));
  }
}

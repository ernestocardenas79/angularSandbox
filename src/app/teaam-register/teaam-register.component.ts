import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SliderComponent } from '../../../projects/ni-soft-lib/src/lib/slider/slider.component';


@Component({
  selector: 'nis-teaam-register',
  templateUrl: './teaam-register.component.html',
  styleUrls: ['./teaam-register.component.scss']
})
export class TeaamRegisterComponent implements OnInit {

  teamForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.teamForm = this.fb.group({
      name: ['', Validators.required],
      selected: true
    });
  }

  Save() {
    console.log(this.teamForm.pristine && !this.teamForm.valid);
  }
}

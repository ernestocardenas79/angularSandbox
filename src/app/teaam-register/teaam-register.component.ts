import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'nis-teaam-register',
  templateUrl: './teaam-register.component.html',
  styleUrls: ['./teaam-register.component.scss']
})
export class TeaamRegisterComponent implements OnInit {

  teamForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.teamForm = this.fb.group({
      name: ['', Validators.required]
    });
  }

  Save() {
    console.log(this.teamForm.pristine && !this.teamForm.valid);
  }
}

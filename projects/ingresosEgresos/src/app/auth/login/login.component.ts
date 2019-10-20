import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../auth.service';

@Component({
  selector: 'fhu-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService,
              private angularFireAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  onSubmit(data: any) {
    this.authService.login(data.email, data.password);
  }
}

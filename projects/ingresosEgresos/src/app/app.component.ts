import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'fhu-root',
  template: `
  <div class="container-scroller">
    <router-outlet></router-outlet>
    </div>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  title = 'ingresosEgresos';

  constructor(private authService:AuthService){

  }

  ngOnInit(){
    this.authService.initAuthListener();
  }
}

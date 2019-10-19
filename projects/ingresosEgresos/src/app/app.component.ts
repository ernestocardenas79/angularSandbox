import { Component } from '@angular/core';

@Component({
  selector: 'fhu-root',
  template: `
  <div class="container-scroller">
    <router-outlet></router-outlet>
    </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'ingresosEgresos';
}

import { Component } from '@angular/core';

@Component({
  selector: 'fhu-root',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'ingresosEgresos';
}

// <!--
// <div class="container-scroller">
//   <fhu-navbar></fhu-navbar>
//   <div class="page-body-wrapper">
//     <fhu-sidebar></fhu-sidebar>
//     <div class="main-panel">
//       <div class="content-wrapper">
//         //Paginas
//       </div>
//       <fhu-footer></fhu-footer>
//     </div>
//   </div>
// </div>-->

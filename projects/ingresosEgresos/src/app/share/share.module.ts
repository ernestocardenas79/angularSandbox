import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    FooterComponent, 
    SidebarComponent,
    NavbarComponent],
  exports:[
    FooterComponent, 
    SidebarComponent, 
    NavbarComponent]
})
export class ShareModule { }

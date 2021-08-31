import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DaybookModule } from './daybook/daybook.module';
import { DayBookLayoutComponent } from './daybook/layout/day-book-layout/day-book-layout.component';
import { DaybookRoutingModule } from './daybook/router';

const routes = [
  { path: '', component: HomeComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    DaybookModule,
    RouterModule.forRoot(routes),
    DaybookRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

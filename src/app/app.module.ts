import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { TeaamRegisterComponent } from './teaam-register/teaam-register.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule, Route } from '@angular/router';
import { GameScheduleComponent } from '../../projects/SPRTA/src/app/game-schedule/game-schedule.component';
import { CommonModule } from '@angular/common';
import { SliderModule } from 'ni-soft-lib';

const providers = [];

const routing: Route[] = [
  { path: '', component: ContainerComponent },
  { path: 'team', component: TeaamRegisterComponent },
  // { path: 'gameScheduler', component: GameScheduleComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routing),
    SliderModule
  ],
  declarations: [
    AppComponent,
    ContainerComponent,
    TeaamRegisterComponent,
    NavBarComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

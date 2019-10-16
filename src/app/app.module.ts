import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { TeaamRegisterComponent } from './teaam-register/teaam-register.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule, Route} from '@angular/router';
import { SPRTASharedModule } from '../../projects/SPRTA/src/app/app.module';
import { GameScheduleComponent } from '../../projects/SPRTA/src/app/game-schedule/game-schedule.component';
import { NiSoftLibModule } from 'projects/ni-soft-lib/src/public-api';

const providers = [];

const routing: Route[] = [
  {path: '', component: ContainerComponent},
  {path: 'team', component: TeaamRegisterComponent },
  {path: 'gameScheduler', component: GameScheduleComponent },
  {path: '**', redirectTo: '/'}
];

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    TeaamRegisterComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    SPRTASharedModule.forRoot(),
    RouterModule.forRoot(routing)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

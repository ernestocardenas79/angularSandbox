import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { GameScheduleComponent } from './game-schedule/game-schedule.component';
import { NiSoftLibModule } from 'projects/ni-soft-lib/src/public-api';

@NgModule({
  declarations: [
    AppComponent,
    GameScheduleComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    NiSoftLibModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [GameScheduleComponent]
})
export class AppModule { }

@NgModule({})
export class SPRTASharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppModule,
      providers: []
    };
  }
}

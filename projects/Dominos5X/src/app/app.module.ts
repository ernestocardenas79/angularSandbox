import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameConfigComponent } from './game-config/game-config.component';
import { GamingScoreComponent } from './gaming-score/gaming-score.component';

@NgModule({
  declarations: [
    AppComponent,
    GameConfigComponent,
    GamingScoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameConfigComponent } from './game-config/game-config.component';
import { GamingScoreComponent } from './gaming-score/gaming-score.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';

@NgModule({
    declarations: [AppComponent, GameConfigComponent, GamingScoreComponent],
    imports: [
        BrowserModule,
        CommonModule,
        ReactiveFormsModule,
        AppRoutingModule,
        SharedModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}

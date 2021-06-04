import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { GamingScoreModule } from './gaming-score/gaming-score.module';
import { GameConfigComponent } from './game-config/game-config.component';

@NgModule({
    declarations: [AppComponent, GameConfigComponent],
    imports: [
        BrowserModule,
        CommonModule,
        ReactiveFormsModule,
        AppRoutingModule,
        SharedModule,
        GamingScoreModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}

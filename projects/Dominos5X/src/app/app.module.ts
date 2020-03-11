import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { GamingScoreModule } from './gaming-score/gaming-score.module';
import { GameConfigComponent } from './game-config/game-config.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { NiSoftLibModule } from 'ni-soft-lib';

@NgModule({
    declarations: [AppComponent, GameConfigComponent],
    imports: [
        BrowserModule,
        CommonModule,
        ReactiveFormsModule,
        AppRoutingModule,
        SharedModule,
        GamingScoreModule,
        OverlayModule,
        NiSoftLibModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}

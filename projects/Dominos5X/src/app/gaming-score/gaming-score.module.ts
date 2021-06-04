import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { PlayerScoreComponent } from './player-score/player-score.component';
import { GamingScoreComponent } from './gaming-score.component';
import { PalyerScoreDirective } from './player-score/palyer-score.directive';
import { NiSoftLibModule } from 'projects/ni-soft-lib/src/public-api';


@NgModule({
  declarations: [
    PlayerScoreComponent,
    GamingScoreComponent,
    PalyerScoreDirective,
  ],
  imports: [CommonModule, NiSoftLibModule],
})
export class GamingScoreModule { }

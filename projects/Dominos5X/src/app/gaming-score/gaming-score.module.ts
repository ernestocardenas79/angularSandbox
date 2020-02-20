import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerScoreComponent } from './player-score/player-score.component';
import { GamingScoreComponent } from './gaming-score.component';



@NgModule({
  declarations: [PlayerScoreComponent, GamingScoreComponent],
  imports: [
    CommonModule
  ]
})
export class GamingScoreModule { }

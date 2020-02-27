import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerScoreComponent } from './player-score/player-score.component';
import { GamingScoreComponent } from './gaming-score.component';
import { NiSoftLibModule } from 'ni-soft-lib';

@NgModule({
    declarations: [PlayerScoreComponent, GamingScoreComponent],
    imports: [CommonModule, NiSoftLibModule],
})
export class GamingScoreModule {}

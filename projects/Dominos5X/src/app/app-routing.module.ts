import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameConfigComponent } from './game-config/game-config.component';
import { GamingScoreComponent } from './gaming-score/gaming-score.component';

const routes: Routes = [
  {path: '', component: GameConfigComponent},
  {path: 'score', component: GamingScoreComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

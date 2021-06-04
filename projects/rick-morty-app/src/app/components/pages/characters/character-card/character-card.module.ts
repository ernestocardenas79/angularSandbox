import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterCardComponent } from './character-card.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CharacterCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [CharacterCardComponent]
})
export class CharacterCardModule { }

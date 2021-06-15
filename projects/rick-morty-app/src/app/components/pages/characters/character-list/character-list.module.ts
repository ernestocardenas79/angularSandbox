import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterListRoutingModule } from './character-list-routing.module';
import { CharacterListComponent } from '@RickMorty/characters/character-list/character-list.component';
import { CharacterCardModule } from '@RickMorty/characters/character-card/character-card.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


@NgModule({
  declarations: [
    CharacterListComponent,
  ],
  imports: [
    CommonModule,
    CharacterListRoutingModule,
    CharacterCardModule,
    InfiniteScrollModule
  ]
})
export class CharacterListModule { }

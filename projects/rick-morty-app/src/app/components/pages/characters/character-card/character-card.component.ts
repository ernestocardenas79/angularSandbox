import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Character } from '@RickMorty/App/shared/interface/character.interface';
import { LocalStorageService } from '@RickMorty/App/shared/services/localStorage.service';

@Component({
  selector: 'rm-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterCardComponent {

  @Input() character: Character;

  constructor(private localStorageService: LocalStorageService) { }

  toggleFavorite() {
    const isFavorite = this.character.isFavorite;
    this.getIcon();
    this.character.isFavorite = !this.character.isFavorite;

    this.localStorageService.toggleFavorite(this.character);
  }

  getIcon(): string {
    return this.character.isFavorite ? 'heart-solid.svg' : 'heart.svg';
  }

}

/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/member-ordering */
import { JsonpClientBackend } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';
import { Character } from '../interface/character.interface';

const MY_FAVORITES = 'MyFavorites';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private charactersFavSubject = new BehaviorSubject<Character[]>(null);
  charactersFav$ = this.charactersFavSubject.asObservable();

  constructor(private toastSrvc: ToastrService) {
    this.initLocalStorage();
  }

  getFavoriteCharacters(): any[] {
    try {
      const charactersFav = JSON.parse(localStorage.getItem(MY_FAVORITES));
      this.charactersFavSubject.next(charactersFav);
      return charactersFav;
    } catch (error) {
      console.error('Error getting favorites from localstorage');
    }
  }

  clearStorage(): void {
    localStorage.clear();
  }

  private initLocalStorage(): void {
    const currents = JSON.parse(localStorage.getItem(MY_FAVORITES));

    if (!currents) {
      localStorage.setItem(MY_FAVORITES, JSON.stringify([]));
    }
    this.getFavoriteCharacters();
  }

  toggleFavorite(character: Character): void {
    const { id } = character;
    const currentsFav = this.getFavoriteCharacters();
    const found = !!currentsFav.find((fav: Character) => fav.id === id);

    found ? this.removeFromFavorite(id) : this.addToFavorite(character);
  }

  private removeFromFavorite(id: number) {
    try {
      const currentsFav = this.getFavoriteCharacters();
      const characters = currentsFav.filter(item => item.id !== id);
      localStorage.setItem(MY_FAVORITES, JSON.stringify([...characters]));
      this.charactersFavSubject.next([...characters]); this.toastSrvc.warning(`Removed from favorite`, 'RickAndMortyApp');
    } catch (error) {
      this.toastSrvc.error(`Error removing localsotrage ${error}`, 'RickAndMortyApp');
    }
  }

  private addToFavorite(character: Character) {
    try {
      const currentsFav = this.getFavoriteCharacters();
      localStorage.setItem(MY_FAVORITES, JSON.stringify([...currentsFav, character]));
      this, this.charactersFavSubject.next([...currentsFav, character]);
      this.toastSrvc.success(`${character.name} added to favorite`, 'RickAndMortyApp');
    } catch (error) {
      this.toastSrvc.error(`Error saving localsotrage ${error}`, 'RickAndMortyApp');
    }
  }
}

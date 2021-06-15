/* eslint-disable @typescript-eslint/member-ordering */
import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { BehaviorSubject } from 'rxjs';
import { pluck, take, tap, withLatestFrom } from 'rxjs/operators';
import { Character } from '../interface/character.interface';
import { DataResponse } from '../interface/data-response.interface';
import { Episode } from '../interface/episode.interface';
import { LocalStorageService } from './localStorage.service';

const QUERY = gql`
  query{
    episodes{
      results{
        name
        episode
      }
    }
    characters{
      info{
        count
      }
      results{
        id
        name
        status
        species
        gender
        origin{
          name
        }
        location{
          name
        }
        image
      }
    }
  }
`;

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private episodesSubject = new BehaviorSubject<Episode[]>(null);
  episodes$ = this.episodesSubject.asObservable();

  private charactersSubject = new BehaviorSubject<Character[]>(null);
  characters$ = this.charactersSubject.asObservable();

  constructor(private apolo: Apollo, private localstorageService: LocalStorageService) {
    this.getDataApi();
  }

  private getDataApi(): void {
    this.apolo.watchQuery<DataResponse>({
      query: QUERY
    }).valueChanges.pipe(
      take(1),
      tap(({ data }) => {
        const { characters, episodes } = data;
        this.episodesSubject.next(episodes.results);
        this.parseCharactersData(characters.results);
      })
    ).subscribe();
  }

  private parseCharactersData(characters: Character[]): void {
    const currentFavs = this.localstorageService.getFavoriteCharacters();
    const newData = characters.map(character => {
      const found = currentFavs.some(fav => fav.id === character.id);
      return { ...character, isFavorite: found };
    });
    this.charactersSubject.next(newData);
  }

  getCharacterByPage(pageNumber: number) {
    const QUERYBYPAGE = gql`
      query{
        characters(page: ${pageNumber}){
          results{
            id
            name
            status
            species
            gender
            image
          }
        }
      }`;

    this.apolo.watchQuery<any>({
      query: QUERYBYPAGE
    }).valueChanges.pipe(
      take(1),
      pluck('data', 'characters'),
      withLatestFrom(this.characters$),
      tap(([apiResponse, characters]) => {
        console.log({ apiResponse, characters });
        this.parseCharactersData([...characters, ...apiResponse.results]);
      })
    ).subscribe();
  }
}

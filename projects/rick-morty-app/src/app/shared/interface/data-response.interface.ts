import { APIResponse } from './api-response.interface';
import { Character } from './character.interface';
import { Episode } from './episode.interface';

export interface DataResponse {
  characters: APIResponse<Character[]>;
  episodes: APIResponse<Episode[]>;
}

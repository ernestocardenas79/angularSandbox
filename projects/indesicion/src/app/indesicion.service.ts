import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Answer } from './answer';

@Injectable({
  providedIn: 'root',
})
export class IndesicionService {
  constructor(private http: HttpClient) {}

  figureoutAnswer() {
    return this.http.get<Answer>('https://yesno.wtf/api');
  }
}

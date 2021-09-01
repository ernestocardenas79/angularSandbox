import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Entry } from '../interfaces/entry';

@Injectable()
export class DayBookService {
  constructor(private http: HttpClient) {}

  url = 'https://vue-demo-4a7e9-default-rtdb.firebaseio.com/';

  private entrySub = new BehaviorSubject<Entry[]>([]);
  entries$ = this.entrySub.asObservable();

  loadEntries() {
    this.http
      .get<Entry[]>(`${this.url}entries.json`)
      .pipe(
        map((entries) => {
          const idx = Object.keys(entries);

          return idx.map((entry) => <Entry>{ id: entry, ...entries[entry] });
        }),
        tap((r) => console.log('consultando'))
      )
      .subscribe((entry) => this.entrySub.next(entry));
  }

  getEntryById(id: string) {
    return this.http
      .get<Entry>(`${this.url}entries/${id}.json`)
      .pipe(map((entry) => ({ id, ...entry })));
  }

  addEntry() {}

  deleteEntry() {}
}

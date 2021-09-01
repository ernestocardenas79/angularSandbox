import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Entry } from '../interfaces/entry';

@Injectable()
export class DayBookService {
  constructor(private http: HttpClient) {}

  url = 'https://vue-demo-4a7e9-default-rtdb.firebaseio.com/';

  private entries: Entry[] = [];
  private entrySub = new BehaviorSubject<Entry[]>([]);
  entries$ = this.entrySub.asObservable();

  loadEntries() {
    this.http
      .get<Entry[]>(`${this.url}entries.json`)
      .pipe(
        map((entries) => {
          let newEntry = [];
          if (entries) {
            this.entries = [];
            const idx = Object.keys(entries);
            this.entries = idx.map((llave) => ({
              ...entries[llave],
              id: llave,
            }));
          }

          return this.entries;
        })
      )
      .subscribe((entry) => this.entrySub.next(entry));
  }

  getEntryById(id: string) {
    return this.http
      .get<Entry>(`${this.url}entries/${id}.json`)
      .pipe(map((entry) => ({ ...entry, id })));
  }

  addEntry(newEntry: Entry) {
    const entry = newEntry;
    return this.http.post(`${this.url}/entries.json`, entry).pipe(
      tap((data: any) => {
        entry.id = data.name;
        this.entries = [...this.entries, entry];
        this.entrySub.next(this.entries);
      }),
      map((data: any) => (entry.id = data.name))
    );
  }

  deleteEntry(id: string) {
    return this.http.delete(`${this.url}/entries/${id}.json`).pipe(
      tap((r) => {
        this.entries = this.entries.filter((e) => e.id != id);
        this.entrySub.next(this.entries);
      })
    );
  }

  updateEntry(entry: Entry) {
    const { date, text, picture } = entry;
    return this.http
      .put(`${this.url}/entries/${entry.id}.json`, {
        date,
        text,
        picture,
      })
      .pipe(
        tap((r) => {
          const idx = this.entries.map((e) => e.id).indexOf(entry.id);
          this.entries[idx] = { ...entry };
          this.entrySub.next(this.entries);
        })
      );
  }
}

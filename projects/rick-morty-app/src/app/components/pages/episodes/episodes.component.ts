import { Component, OnInit } from '@angular/core';
import { DataService } from '@RickMorty/App/shared/services/data.service';

@Component({
  selector: 'rm-episodes',
  template: `
      <section class="container">
        <ul class="episodes__list">
          <li *ngFor="let episode of episode$ | async">
            {{ episode.episode }} - {{ episode.name }}
          </li>
        </ul>
      </section>`,
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit {
  episode$ = this.dataService.episodes$;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

}

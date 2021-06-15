import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { DataService } from '@RickMorty/App/shared/services/data.service';
import { LocalStorageService } from '@RickMorty/App/shared/services/localStorage.service';

@Component({
  selector: 'rm-character-list',
  template: `
    <section class="character__list"
      infiniteScroll
      (scrolled)="onScrollDown()"
    >
      <rm-character-card
        *ngFor="let character of characters$ | async"
        [character]="character"
      ></rm-character-card>
      <button *ngIf="showUpButton" type="button" (click)="onScrollTop()">⬆️</button>
    </section>`,
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent {

  characters$ = this.dataService.characters$;
  showUpButton = false;

  private scrollHeight = 500;
  private pageNum = 1;

  constructor(private dataService: DataService, private localStorageService: LocalStorageService,
    @Inject(DOCUMENT) private document: Document) { }

  @HostListener('window:scroll')
  onWindowScroll(e) {
    const yOffset = window.pageYOffset;
    const scrollTop = this.document.documentElement.scrollTop;
    this.showUpButton = (yOffset || scrollTop) > this.scrollHeight;
  }

  onScrollTop() {
    this.document.documentElement.scrollTop = 0;
  }

  onScrollDown() {
    this.pageNum++;
    this.dataService.getCharacterByPage(this.pageNum);
  }
}

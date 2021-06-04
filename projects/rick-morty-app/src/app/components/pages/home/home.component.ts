import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '@RickMorty/App/shared/services/localStorage.service';

@Component({
  selector: 'rm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  characterFav$ = this.localStorageService.charactersFav$;
  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
  }

}

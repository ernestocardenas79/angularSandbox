import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faPlus, faUpload } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-no-entry-selected',
  templateUrl: './no-entry-selected.component.html',
  styleUrls: ['./no-entry-selected.component.scss'],
})
export class NoEntrySelectedComponent {
  faPlus = faPlus;

  constructor(private router: Router) {}

  addEntry() {
    this.router.navigate(['/daybook', 'new']);
  }
}

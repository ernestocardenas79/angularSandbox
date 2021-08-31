import { Component, OnInit } from '@angular/core';
import { faPlus, faUpload } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-no-entry-selected',
  templateUrl: './no-entry-selected.component.html',
  styleUrls: ['./no-entry-selected.component.scss'],
})
export class NoEntrySelectedComponent {
  faPlus = faPlus;

  addEntry() {
    console.log('addEntry');
  }
}

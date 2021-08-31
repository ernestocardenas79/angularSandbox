import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { getDayMonthYear } from '../../helpers/getDayMonthYear';
import { Entry } from '../../interfaces/entry';
import { DayBookService } from '../../services/day-book.service';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.scss'],
})
export class EntryListComponent implements OnInit, OnDestroy {
  constructor(private daybookSrv: DayBookService) {}

  entries$: Observable<Entry[]>;
  plusCircle = faPlusCircle;

  ngOnInit(): void {
    this.entries$ = this.daybookSrv.loadEntries();
  }

  ngOnDestroy(): void {}
}

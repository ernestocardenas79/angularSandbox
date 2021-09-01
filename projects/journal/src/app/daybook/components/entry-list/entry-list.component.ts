import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Observable } from 'rxjs';
import { getDayMonthYear } from '../../helpers/getDayMonthYear';
import { Entry } from '../../interfaces/entry';
import { DayBookService } from '../../services/day-book.service';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { map, throttleTime } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.scss'],
})
export class EntryListComponent implements OnInit, OnDestroy {
  constructor(private daybookSrv: DayBookService, private router: Router) {}

  entries$: Observable<Entry[]>;
  plusCircle = faPlusCircle;

  ngOnInit(): void {
    this.daybookSrv.loadEntries();
    this.entries$ = this.daybookSrv.entries$;
  }

  @ViewChild('searchEntry')
  searchEntry: ElementRef;

  search() {
    this.entries$ = this.daybookSrv.entries$.pipe(
      throttleTime(300),
      map((e) =>
        e.filter((r) => r.text.includes(this.searchEntry.nativeElement.value))
      )
    );
  }

  addEntry() {
    this.router.navigate(['/daybook', 'new']);
  }

  ngOnDestroy(): void {}
}

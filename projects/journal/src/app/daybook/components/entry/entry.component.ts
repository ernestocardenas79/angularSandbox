import { Component, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';
import { getDayMonthYear } from '../../helpers/getDayMonthYear';
import { Entry } from '../../interfaces/entry';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss'],
})
export class EntryComponent {
  id: string;
  day: number;
  month: string;
  yearDay: string;
  description: string;

  constructor(private router: Router) {}

  @Input('entry')
  set entry(entry: Entry) {
    this.description = entry.text;
    const { day, month, yearDay } = getDayMonthYear(entry.date);
    this.day = day;
    this.month = month;
    this.yearDay = yearDay;
    this.id = entry.id;
  }

  @HostListener('click')
  onClick() {
    this.router.navigate(['/daybook', this.id]);
  }
}

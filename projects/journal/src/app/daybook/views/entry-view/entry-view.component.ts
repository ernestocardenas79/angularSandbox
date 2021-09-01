import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { Observable, Subscription } from 'rxjs';
import { getDayMonthYear } from '../../helpers/getDayMonthYear';
import { Entry } from '../../interfaces/entry';
import { DayBookService } from '../../services/day-book.service';

@Component({
  selector: 'app-entry-view',
  templateUrl: './entry-view.component.html',
  styleUrls: ['./entry-view.component.scss'],
})
export class EntryViewComponent implements OnInit, OnDestroy {
  icon = faUpload;
  paramSubscription: Subscription;
  id: string;
  entry: Entry;
  day: number;
  month: string;
  yearDay: string;
  localImage = null;
  file = null;

  constructor(
    private route: ActivatedRoute,
    private daybookSrv: DayBookService
  ) {
    this.route.params.subscribe((params) => {
      this.entryId = params['id'];
    });
  }

  ngOnInit() {
    console.log('inicializando componente');
  }

  ngOnDestroy() {
    this.paramSubscription.unsubscribe();
  }

  uploadEntry() {
    console.log('Upload entry');
  }

  set entryId(id: string) {
    if (id === 'new') {
      this.entry = { id: 'A', date: new Date().toDateString(), text: null };
      const { day, month, yearDay } = getDayMonthYear(new Date());
      this.day = day;
      this.month = month;
      this.yearDay = yearDay;
    } else {
      this.localImage = null;
      this.file = null;
      this.entry = null;
      this.daybookSrv.getEntryById(id).subscribe((r) => {
        const { day, month, yearDay } = getDayMonthYear(r.date);
        this.day = day;
        this.month = month;
        this.yearDay = yearDay;
        this.entry = r;
      });
    }
  }

  onSelectedImage(event) {
    const file = event.target.files[0];
    if (!file) {
      this.localImage = null;
      this.file = null;
      return;
    }
    this.file = file;
    const fr = new FileReader();
    fr.onload = () => (this.localImage = fr.result);
    fr.readAsDataURL(file);
    console.log(this.file, fr, 'local', this.localImage);
  }
}

import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { getDayMonthYear } from '../../helpers/getDayMonthYear';
import { Entry } from '../../interfaces/entry';
import { DayBookService } from '../../services/day-book.service';
import { UploadImageService } from '../../services/upload-image.service';

@Component({
  selector: 'app-entry-view',
  templateUrl: './entry-view.component.html',
  styleUrls: ['./entry-view.component.scss'],
})
export class EntryViewComponent implements OnInit, OnDestroy {
  icon = faUpload;
  paramSubscription: Subscription[] = [];
  id: string;
  entry: Entry;
  day: number;
  month: string;
  yearDay: string;
  localImage = null;
  file = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private daybookSrv: DayBookService,
    private uploadImageSrv: UploadImageService
  ) {}

  @ViewChild('description')
  description: ElementRef;

  ngOnInit() {
    const param = this.route.params.subscribe((params) => {
      this.entryId = params['id'];
    });
    this.paramSubscription.push(param);
  }

  ngOnDestroy() {
    this.paramSubscription.forEach((s) => s.unsubscribe());
  }

  uploadEntry() {
    if (!this.entry.id) {
      this.entry.text = this.description.nativeElement.value;
      this.entry.picture = this.file;

      this.uploadImageSrv
        .uploadImage(this.file)
        .pipe(
          mergeMap((secure_url) => {
            this.entry.picture = secure_url;
            return this.daybookSrv.addEntry(this.entry);
          })
        )
        .subscribe((r) => this.router.navigate(['/daybook', this.entry.id]));
    } else {
      this.entry.text = this.description.nativeElement.value;
      this.entry.picture = this.file;

      this.uploadImageSrv
        .uploadImage(this.file)
        .pipe(
          mergeMap((secure_url) => {
            this.entry.picture = secure_url;
            return this.daybookSrv.updateEntry(this.entry);
          })
        )
        .subscribe();
    }
  }

  set entryId(id: string) {
    if (id === 'new') {
      this.localImage = null;
      this.file = null;
      this.entry = null;

      this.entry = { text: null, date: new Date().getTime() };
      const { day, month, yearDay } = getDayMonthYear(new Date());
      this.day = day;
      this.month = month;
      this.yearDay = yearDay;
    } else {
      this.localImage = null;
      this.file = null;
      this.entry = null;

      this.paramSubscription.push(
        this.daybookSrv.getEntryById(id).subscribe((r) => {
          const { day, month, yearDay } = getDayMonthYear(r.date);
          this.day = day;
          this.month = month;
          this.yearDay = yearDay;
          this.entry = r;
        })
      );
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
  }

  deleteEntry() {
    this.daybookSrv
      .deleteEntry(this.entry.id)
      .subscribe((r) => this.router.navigate(['/daybook']));
  }
}

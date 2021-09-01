import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { DayBookLayoutComponent } from './layout/day-book-layout/day-book-layout.component';
import { EntryListComponent } from './components/entry-list/entry-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { EntryComponent } from './components/entry/entry.component';
import { EntryViewComponent } from './views/entry-view/entry-view.component';
import { NoEntrySelectedComponent } from './views/no-entry-selected/no-entry-selected.component';
import { FabComponent } from './components/fab/fab.component';
import { DayBookService } from './services/day-book.service';
import { HttpClientModule } from '@angular/common/http';
import { UploadImageService } from './services/upload-image.service';

@NgModule({
  declarations: [
    NavBarComponent,
    DayBookLayoutComponent,
    EntryListComponent,
    EntryComponent,
    EntryViewComponent,
    NoEntrySelectedComponent,
    FabComponent,
  ],
  imports: [CommonModule, FontAwesomeModule, RouterModule, HttpClientModule],
  providers: [DayBookService, UploadImageService],
})
export class DaybookModule {}

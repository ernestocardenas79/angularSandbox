import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { DayBookLayoutComponent } from './layout/day-book-layout/day-book-layout.component';
import { EntryViewComponent } from './views/entry-view/entry-view.component';
import { NoEntrySelectedComponent } from './views/no-entry-selected/no-entry-selected.component';

const routes = [
  {
    path: 'daybook',
    component: DayBookLayoutComponent,
    children: [
      { path: '', component: NoEntrySelectedComponent },
      { path: ':id', component: EntryViewComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DaybookRoutingModule {}

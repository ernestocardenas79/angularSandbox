import { Component, OnInit, OnDestroy } from '@angular/core';
import { SubSink } from 'subsink';
import { filter, tap } from 'rxjs/operators';
import { AppState } from '../../app.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'fhu-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  subs = new SubSink();
  nombre = '';
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.subs.sink = this.store
      .select('auth')
      .pipe(
        filter(data => data.user != null),
        tap(i => console.log('tap', i))
      )
      .subscribe(data => (this.nombre = data.user.nombre));
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}

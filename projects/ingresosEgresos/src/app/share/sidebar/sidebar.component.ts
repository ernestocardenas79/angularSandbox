import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { AppState } from '../../app.reducer';
import { Store } from '@ngrx/store';
import { SubSink } from 'subsink';
import { tap, filter } from 'rxjs/operators';

@Component({
  selector: 'fhu-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {
  private subs = new SubSink();
  nombre = '';
  constructor(
    private authService: AuthService,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.subs.sink = this.store
      .select('auth')
      .pipe(filter(data => data.user != null))
      .subscribe(data => (this.nombre = data.user.nombre));
  }

  logout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}

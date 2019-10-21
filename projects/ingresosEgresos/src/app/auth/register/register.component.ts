import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth.service';
import { AppState } from '../../app.reducer';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

@Component({
  selector: 'fhu-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit, OnDestroy {
  constructor(public authService: AuthService, public store: Store<AppState>) {}

  cargando: boolean;
  subscription: Subscription = new Subscription();

  ngOnInit() {
    this.subscription = this.store
      .select('ui')
      .subscribe(ui => (this.cargando = ui.isLoading));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSubmit(data: any) {
    this.authService.crearUsurio(data.nombre, data.email, data.password);
  }
}

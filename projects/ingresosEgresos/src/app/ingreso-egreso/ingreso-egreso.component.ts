import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { IngresoEgresoModel } from './ingreso-egreso.model';
import { IngresoEgresoService } from './ingreso-egreso.service';
import Swal from 'sweetalert2';
import { AppState } from '../app.reducer';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { subscribeOn } from 'rxjs/operators';
import {
  ActivarLoadingAction,
  DesactivarLoadingAction
} from '../share/ui.actions';

@Component({
  selector: 'fhu-ingreso-egreso',
  templateUrl: './ingreso-egreso.component.html',
  styles: []
})
export class IngresoEgresoComponent implements OnInit, OnDestroy {
  forma: FormGroup;
  tipo = 'ingreso';

  loadingSub: Subscription = new Subscription();
  cargando: boolean;

  constructor(
    private ingresoEgresoService: IngresoEgresoService,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.loadingSub = this.store
      .select('ui')
      .subscribe(ui => (this.cargando = ui.isLoading));

    this.forma = new FormGroup({
      descripcion: new FormControl('', Validators.required),
      monto: new FormControl(0, Validators.min(0))
    });
  }

  ngOnDestroy() {
    this.loadingSub.unsubscribe();
  }

  crearIngresoEgreso() {
    this.store.dispatch(new ActivarLoadingAction());

    const ingresoEgreso = new IngresoEgresoModel({
      ...this.forma.value,
      tipo: this.tipo
    });
    this.ingresoEgresoService
      .crearIngresoEgreso(ingresoEgreso)
      .then(() => {
        this.forma.reset({ monto: 0 });
        Swal.fire('Creado', ingresoEgreso.descripcion, 'success');
        this.store.dispatch(new DesactivarLoadingAction());
      })
      .catch(() => {
        this.store.dispatch(new DesactivarLoadingAction());
        Swal.fire('Error', 'Ocurrio un error inesperado', 'error');
      });
  }
}

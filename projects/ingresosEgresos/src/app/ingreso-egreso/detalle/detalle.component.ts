import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppState } from '../../app.reducer';
import { Store } from '@ngrx/store';
import { IngresoEgresoModel } from '../ingreso-egreso.model';
import { Subscription } from 'rxjs';
import { IngresoEgresoService } from '../ingreso-egreso.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'fhu-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit, OnDestroy {
  items: IngresoEgresoModel[];
  subscription: Subscription = new Subscription();

  constructor(
    private store: Store<AppState>,
    private ingresoEgresoService: IngresoEgresoService
  ) {}

  ngOnInit() {
    this.subscription = this.store
      .select('ingresoEgreso')
      .subscribe(ie => (this.items = ie.items));
  }

  borrarItem(item: any) {
    this.ingresoEgresoService
      .borrarIngresoEgreso(item.uid)
      .then(() => Swal.fire('Eliminado', item.descripcion, 'success'));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

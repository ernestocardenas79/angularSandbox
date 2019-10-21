import { Component, OnInit } from '@angular/core';
import { AppState } from '../../app.reducer';
import { Store } from '@ngrx/store';
import { IngresoEgresoModel } from '../ingreso-egreso.model';

@Component({
  selector: 'fhu-estadistica',
  templateUrl: './estadistica.component.html',
  styleUrls: ['./estadistica.component.scss']
})
export class EstadisticaComponent implements OnInit {
  ingresos: number;
  egresos: number;

  cuantosIngresos: number;
  cuantosEgresos: number;
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.select('ingresoEgreso').subscribe(ingresoEgreso => {
      this.contarIngrsoEgreso(ingresoEgreso.items);
    });
  }

  contarIngrsoEgreso(items: IngresoEgresoModel[]) {
    this.ingresos = 0;
    this.egresos = 0;
    this.cuantosEgresos = 0;
    this.cuantosIngresos = 0;

    items.forEach(item => {
      if (item.tipo === 'ingreso') {
        this.cuantosIngresos++;
        this.ingresos += item.monto;
      } else {
        this.cuantosEgresos++;
        this.egresos += item.monto;
      }
    });
  }
}

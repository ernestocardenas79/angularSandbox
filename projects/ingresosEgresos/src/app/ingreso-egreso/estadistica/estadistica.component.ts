import { Component, OnInit, OnDestroy } from '@angular/core';
// import { AppState } from '../../app.reducer';
import { Store } from '@ngrx/store';
import { IngresoEgresoModel } from '../ingreso-egreso.model';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';


import * as fromIngresoEgreso from '../ingreso-egreso.reducers';
import { Subscription } from 'rxjs';

@Component({
  selector: 'fhu-estadistica',
  templateUrl: './estadistica.component.html',
  styleUrls: ['./estadistica.component.scss']
})
export class EstadisticaComponent implements OnInit, OnDestroy {
  ingresos: number;
  egresos: number;

  cuantosIngresos: number;
  cuantosEgresos: number;

  subscription: Subscription = new Subscription();

  public doughnutChartLabels: Label[] = ['Ingresos', 'Egresos'];
  public doughnutChartType: ChartType = 'doughnut';
  public doughnutChartData: MultiDataSet = [[0, 0]];

  constructor(private store: Store<fromIngresoEgreso.AppState>) {}

  ngOnInit() {
    this.subscription = this.store.select('ingresoEgreso').subscribe(ingresoEgreso => {
      this.contarIngrsoEgreso(ingresoEgreso.items);
    });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
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

    this.doughnutChartData = [[this.cuantosIngresos, this.cuantosEgresos]];
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalleComponent } from './detalle/detalle.component';
import { EstadisticaComponent } from './estadistica/estadistica.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OrdenIngresoEgresoPipe } from './orden-ingreso-egreso.pipe';
import { ChartsModule } from 'ng2-charts';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ShareModule } from '../share/share.module';
import { DashboardRoutingModule } from '../dashboard/dashboard-routing.module';
import { StoreModule } from '@ngrx/store';
import { ingresoEgresoReducer } from './ingreso-egreso.reducers';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ChartsModule,
    ShareModule,
    DashboardRoutingModule,
    StoreModule.forFeature('ingresoEgreso', ingresoEgresoReducer)
  ],
  declarations: [
    DashboardComponent,
    DetalleComponent, 
    EstadisticaComponent, 
    OrdenIngresoEgresoPipe],
  exports:[
    DetalleComponent,
    EstadisticaComponent]
})
export class IngresoEgresoModule { }


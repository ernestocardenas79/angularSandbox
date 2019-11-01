import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalleComponent } from './detalle/detalle.component';
import { EstadisticaComponent } from './estadistica/estadistica.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { OrdenIngresoEgresoPipe } from './orden-ingreso-egreso.pipe';



@NgModule({
  declarations: [DetalleComponent, EstadisticaComponent, OrdenIngresoEgresoPipe],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[DetalleComponent, EstadisticaComponent]
})
export class IngresoEgresoModule { }

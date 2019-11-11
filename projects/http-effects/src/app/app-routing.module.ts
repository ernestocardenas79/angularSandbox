import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { DetalleUsuarioComponent } from './usuarios/detalle-usuario/detalle-usuario.component';

const routes: Routes = [
  { path: 'home', component: UsuariosComponent, },
  { path: 'usuario/:id', component: DetalleUsuarioComponent},
  { path:'**', redirectTo:'home'}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }

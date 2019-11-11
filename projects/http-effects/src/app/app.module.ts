import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { appReducers } from './store/app.reducer';

import { AppComponent } from './app.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuarioCardComponent } from './usuarios/usuario-card.component';
import { DetalleUsuarioComponent } from './usuarios/detalle-usuario/detalle-usuario.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { efectsArray } from './store/effects';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    UsuarioCardComponent,
    DetalleUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot(efectsArray),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    SharedModule,
    UsuariosModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

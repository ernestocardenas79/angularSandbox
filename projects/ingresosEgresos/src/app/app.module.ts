import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { AppReducer } from './app.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AuthModule } from './auth/auth.module';
import { ShareModule } from './share/share.module';
import { IngresoEgresoModule } from './ingreso-egreso/ingreso-egreso.module';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    AuthModule,
    ShareModule,
    IngresoEgresoModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    StoreModule.forRoot(AppReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production // Restrict extension to log-only mode
    }),
  ],
  declarations: [
    AppComponent,
    DashboardComponent    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

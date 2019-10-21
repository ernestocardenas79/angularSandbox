import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { IngresoEgresoModel } from './ingreso-egreso.model';
import { AuthService } from '../auth/auth.service';
import { AppState } from '../app.reducer';
import { Store } from '@ngrx/store';
import { filter, map } from 'rxjs/operators';
import { SetItemAction } from './ingreso-egreso.actions';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IngresoEgresoService {
  ingresoEgresoSubcription: Subscription = new Subscription();
  ingresoEgresoItemSubcription: Subscription = new Subscription();

  constructor(
    private angularFireDb: AngularFirestore,
    private authService: AuthService,
    private store: Store<AppState>
  ) {}

  initIngresoEgresoListener() {
    const user = this.authService.Usuario;

    this.ingresoEgresoSubcription = this.store
      .select('auth')
      .pipe(filter(auth => auth.user != null))
      .subscribe(auth => {
        this.ingresoEgresoItems(auth.user.uid);
      });
  }

  private ingresoEgresoItems(uid: string) {
    this.ingresoEgresoItemSubcription = this.angularFireDb
      .collection(`${uid}/ingresos-egresos/items`)
      .snapshotChanges()
      .pipe(
        map(docData => {
          return docData.map(doc => {
            return { uid: doc.payload.doc.id, ...doc.payload.doc.data() };
          });
        })
      )
      .subscribe((coleccion: any[]) =>
        this.store.dispatch(new SetItemAction(coleccion))
      );
  }

  crearIngresoEgreso(ingresoEgreso: IngresoEgresoModel) {
    return this.angularFireDb
      .doc(`${this.authService.Usuario.uid}/ingresos-egresos`)
      .collection('items')
      .add({ ...ingresoEgreso });
  }

  borrarIngresoEgreso(uid: string) {
    return this.angularFireDb
      .doc(`${this.authService.Usuario.uid}/ingresos-egresos/items/${uid}`)
      .delete();
  }

  cancelSubcripciones() {
    this.ingresoEgresoItemSubcription.unsubscribe();
    this.ingresoEgresoSubcription.unsubscribe();
  }
}

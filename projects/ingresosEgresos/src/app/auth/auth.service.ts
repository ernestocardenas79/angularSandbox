import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

import * as firebase from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';

import Swal from 'sweetalert2';

import { map } from 'rxjs/operators';
import { User } from './user.model';
import { AppState } from '../app.reducer';
import { Store } from '@ngrx/store';
import { SetUserAction } from './auth.action';
import {
  ActivarLoadingAction,
  DesactivarLoadingAction
} from '../share/ui.actions';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSubcrption: Subscription;
  private usuario: User;

  constructor(
    private angularfireAuth: AngularFireAuth,
    private router: Router,
    private angularFireDB: AngularFirestore,
    private store: Store<AppState>
  ) {}

  initAuthListener() {
    this.angularfireAuth.authState.subscribe((fbUser: firebase.User) => {
      if (fbUser) {
        this.userSubcrption = this.angularFireDB
          .doc(`${fbUser.uid}/usuario`)
          .valueChanges()
          .subscribe((usuarioObj: any) => {
            const newUser = new User(usuarioObj);
            this.store.dispatch(new SetUserAction(newUser));
            this.usuario = newUser;
          });
      } else {
        this.usuario = null;
        this.userSubcrption.unsubscribe();
      }
    });
  }

  crearUsurio(nombre: string, email: string, password: string) {
    this.store.dispatch(new ActivarLoadingAction());

    this.angularfireAuth.auth
      .createUserWithEmailAndPassword(email, password)
      .then(resp => {
        const user: User = {
          uid: resp.user.uid,
          email: resp.user.email,
          nombre
        };

        this.angularFireDB
          .doc(`${user.uid}/usuario`)
          .set(user)
          .then(() => {
            this.router.navigate(['/']);
            this.store.dispatch(new DesactivarLoadingAction());
          });
      })
      .catch(error => {
        Swal.fire('Error al crear usuario', error.message, 'error');
        this.store.dispatch(new DesactivarLoadingAction());
      });
  }

  login(email: string, password: string) {
    this.store.dispatch(new ActivarLoadingAction());

    this.angularfireAuth.auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('ruteando');
        this.router.navigate(['/']);
        this.store.dispatch(new DesactivarLoadingAction());
      })
      .catch(error => {
        console.log('error');
        Swal.fire('Error en el login', error.message, 'error');
        this.store.dispatch(new DesactivarLoadingAction());
      });
  }

  logout() {
    this.router.navigate(['/login']);
    this.angularfireAuth.auth.signOut();
  }

  isAuth() {
    return this.angularfireAuth.authState.pipe(
      map(fbUser => {
        if (fbUser == null) {
          this.router.navigate(['/login']);
        }
        return fbUser != null;
      })
    );
  }

  get Usuario() {
    return { ...this.usuario };
  }
}

import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";

import * as firebase from "firebase";
import { AngularFirestore } from "@angular/fire/firestore";

import Swal from "sweetalert2";

import { map } from "rxjs/operators";
import { User } from "./user.model";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(
    private angularfireAuth: AngularFireAuth,
    private router: Router,
    private angularFireDB: AngularFirestore
  ) {}

  initAuthListener() {
    this.angularfireAuth.authState.subscribe((fbUser: firebase.User) => {});
  }

  crearUsurio(nombre: string, email: string, password: string) {
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
          .then(() => this.router.navigate(["/"]));
      })
      .catch(error => {
        Swal.fire("Error al crear usuario", error.message, "error");
      });
  }

  login(email: string, password: string) {
    this.angularfireAuth.auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log("ruteando");
        this.router.navigate(["/"]);
      })
      .catch(error => {
        console.log("error");
        Swal.fire("Error en el login", error.message, "error");
      });
  }

  logout() {
    this.router.navigate(["/login"]);
    this.angularfireAuth.auth.signOut();
  }

  isAuth() {
    return this.angularfireAuth.authState.pipe(
      map(fbUser => {
        if (fbUser == null) {
          this.router.navigate(["/login"]);
        }
        return fbUser != null;
      })
    );
  }
}

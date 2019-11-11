import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../models/usuario.model';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.reducer';

import * as usuarioActions from '../store/actions'

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  usuarios: UsuarioModel[];
  loading:boolean;
  error:any;

  constructor(private store: Store<AppState>) { 


  }

  ngOnInit() {
    this.store.dispatch(new usuarioActions.CargarUsuarios);

    this.store
      .select('usuarios')
      .subscribe(usuarios=>{
        this.usuarios=usuarios.users;
        this.loading = usuarios.loading;
        this.error = usuarios.error;
      })
  }
}

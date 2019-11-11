import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import * as usuariosActions from '../actions'; 
import { UsuariosService } from '../../services/usuarios.service';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class UsuariosEffects {

    constructor(
        private actions$ : Actions,
        private usuarioService: UsuariosService
    ){

    }

    caragarUsuarios$ = createEffect(() =>
        this.actions$
        .pipe(
            ofType( usuariosActions.CARGAR_USUARIOS),
            mergeMap(()=>  
                this.usuarioService
                    .getUsers()
                    .pipe(
                        map(users=> new usuariosActions.CargarUsuariosSuccess(users)),
                        catchError(error => of(new usuariosActions.CargarUsuariosFail(error)))
                        )
            )
        )
    );
}

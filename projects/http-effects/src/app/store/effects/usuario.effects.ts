import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import * as usuarioActions from '../actions'; 
import { UsuariosService } from '../../services/usuarios.service';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class UsuarioEffects {

    constructor(
        private actions$ : Actions,
        private usuarioService: UsuariosService
    ){

    }

    caragarUsuario$ = createEffect(() =>
        this.actions$
        .pipe(
            ofType( usuarioActions.CARGAR_USUARIO),
            mergeMap((action: usuarioActions.CargarUsuario)=>
                this.usuarioService
                    .getUser(action.id)
                    .pipe(
                        map(users=> new usuarioActions.CargarUsuarioSuccess(users)),
                        catchError(error => of(new usuarioActions.CargarUsuarioFail(error)))
                        )
            )
        )
    );
}

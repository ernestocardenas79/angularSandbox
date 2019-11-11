import { Action } from '@ngrx/store';
import { UsuarioModel } from '../../models/usuario.model';


export  const CARGAR_USUARIO = '[Usuario] Cargar usuario';
export  const CARGAR_USUARIO_FAIL = '[Usuario] Cargar usuario FAIL';
export  const CARGAR_USUARIO_SUCCESS = '[Usuario] Cargar usuario SUCCESS';

export class CargarUsuario  implements Action {
    readonly type =CARGAR_USUARIO;
    constructor(public id:number){}
}

export class CargarUsuarioFail implements Action{
    readonly type =CARGAR_USUARIO_FAIL;

    constructor(public payload: any){}
    
}


export class CargarUsuarioSuccess implements Action{
    readonly type =CARGAR_USUARIO_SUCCESS;

    constructor(public usuario: UsuarioModel){}
    
}

export type usuarioAcciones = CargarUsuario |
                                    CargarUsuarioFail |
                                    CargarUsuarioSuccess;
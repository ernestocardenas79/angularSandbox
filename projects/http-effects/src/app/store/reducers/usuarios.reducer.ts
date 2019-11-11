import { UsuarioModel } from '../../models/usuario.model';
import * as fromUsuarios from '../actions';


export interface UsuariosState {
    users: UsuarioModel[];
    loaded: boolean;
    loading: boolean;
    error: any;
}


const initState : UsuariosState = {
    users:[],
    loading: false,
    loaded:false,
    error:null
}


export function usariosReducer(state = initState, 
                                actions: fromUsuarios.usuariosAcciones ): UsuariosState {

        switch(actions.type){
            case fromUsuarios.CARGAR_USUARIOS:
                return {
                    ...state,
                    loading: true,
                    error:null
                };
            case fromUsuarios.CARGAR_USUARIOS_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    loaded: true,
                    users: [...actions.usuarios]
                };
            case fromUsuarios.CARGAR_USUARIOS_FAIL:
                return {
                    ...state,
                    loaded:false,
                    loading: false,
                    error: {
                        status : actions.payload.status,
                        message: actions.payload.message,
                        url:actions.payload.url
                    }
                };
            default: return state
        }
}
import { UsuarioModel } from '../../models/usuario.model';
import * as fromUsuario from '../actions';


export interface UsuarioState {
    user: UsuarioModel;
    loaded: boolean;
    loading: boolean;
    error: any;
}


const initState : UsuarioState = {
    user:null,
    loading: false,
    loaded:false,
    error:null
}


export function usarioReducer(state = initState, 
                                action: fromUsuario.usuarioAcciones ): UsuarioState {

        switch(action.type){
            case fromUsuario.CARGAR_USUARIO:
                return {
                    ...state,
                    loading: true,
                    error:null
                };
            case fromUsuario.CARGAR_USUARIO_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    loaded: true,
                    user: action.usuario
                };
            case fromUsuario.CARGAR_USUARIO_FAIL:
                return {
                    ...state,
                    loaded:false,
                    loading: false,
                    error: {
                        status : action.payload.status,
                        message: action.payload.message,
                        url:action.payload.url
                    }
                };
            default: return state
        }
}
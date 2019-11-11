import {UsuariosEffects} from './usuarios.effects';
import { UsuarioEffects} from './usuario.effects';

export const efectsArray: any[] = 
    [ UsuariosEffects,
      UsuarioEffects];

export * from './usuario.effects';
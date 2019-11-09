import * as fromIngresoEgreso from './ingreso-egreso.actions';
import { IngresoEgresoModel } from './ingreso-egreso.model';
import { AppState} from '../app.reducer';

export interface IngresoEgresoState {
  items: IngresoEgresoModel[];
}

const estadoInicial: IngresoEgresoState = {
  items: []
};

export interface AppState extends AppState{
  ingreso: IngresoEgresoState;
}

export function ingresoEgresoReducer(
  state = estadoInicial,
  action: fromIngresoEgreso.Actions
): IngresoEgresoState {
  switch (action.type) {
    case fromIngresoEgreso.SET_ITEMS:
      return {
        items: [
          ...action.items.map(item => {
            return { ...item };
          })
        ]
      };
    case fromIngresoEgreso.UNSET_ITEMS:
      return { items: [] };
    default:
      return state;
  }
}

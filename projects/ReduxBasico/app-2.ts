import {Action} from './ngrx-fake/ngrx';
import { incrementadorAction,
  decrementadorAction,
  multiplicarAction,
  dividirAction} from './contador/contador.actions';

function reducer(state= 10, action: Action)  {

  switch (action.type) {
    case 'INCREMENTAR':
        return state++;
    case 'DECREMENTAR':
      return --state;
    case 'MULTIPLICAR':
      return state * action.payload;
    case 'DIVIDIR':
      return state / action.payload;
    default:
      return state;
  }
}


reducer(10, incrementadorAction);
console.log(reducer(10, decrementadorAction));
console.log(reducer(10, multiplicarAction));
console.log(reducer(10, dividirAction));

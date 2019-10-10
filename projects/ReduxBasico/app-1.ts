 interface Action {
  type: string;
  payload?: any;
}

 const reducer = (state= 10, action: Action) => {

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
};

 const incrementadorAction: Action = {
  type:  'INCREMENTAR'
};



 const decrementadorAction: Action = {
  type:  'DECREMENTAR'
};


 const multiplicarAction: Action = {
  type:  'MULTIPLICAR',
  payload: 2
};

 const dividirAction: Action = {
  type: 'DIVIDIR',
  payload: 2
};

 console.log(reducer(10, incrementadorAction));
 console.log(reducer(10, decrementadorAction));
 console.log(reducer(10, multiplicarAction));
 console.log(reducer(10, dividirAction));


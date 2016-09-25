import {createStore, applyMiddleware} from "redux";

// our initial state
const initState = {
  user : null,
  items: []
};

// helper constants
export const ACTIONS = {
  LOGIN        : 'LOGIN',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  ADD_ITEM     : 'ADD_ITEM',
  REMOVE_ITEM  : 'REMOVE_ITEM'
};

// middlware will catch the login action
const auth = state => next => action => {

  if (action.type === ACTIONS.LOGIN) {

    // go to server
    setTimeout(() => next({
      type   : ACTIONS.LOGIN_SUCCESS,
      payload: {username: 'nir'}
    }), 3000)
  }

};

// wrapper for the reducer
class TodosReducer {

  // calculate the next state
  static reduce(state = initState, action):any {

    switch (action.type) {
      case ACTIONS.LOGIN_SUCCESS:
        return Object.assign({}, state, {user: action.payload});
      case ACTIONS.ADD_ITEM:
        return Object.assign({}, state, {items: [...state.items, action.payload]});
      default:
        return state;
    }
  }
}

export const store = createStore(TodosReducer.reduce, applyMiddleware(auth));
import { createStore, combineReducers } from 'redux';
import { cardReducer, modalReducer } from './reducer';

const reducer = combineReducers({
  modal: modalReducer,
  card: cardReducer,
});

const store = createStore(reducer);

export default store;

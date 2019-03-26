import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import loginReducer from './reducers/login';
import productsReducer from './reducers/products';

const reducers = combineReducers({
  login: loginReducer,
  products: productsReducer
});
const store = createStore(reducers, applyMiddleware(thunk));

export default store;

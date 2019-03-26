import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import loginReducer from './reducers/login';

const reducers = combineReducers({
  login: loginReducer
});
const store = createStore(reducers, applyMiddleware(thunk));

export default store;

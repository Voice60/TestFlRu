import { combineReducers, compose, createStore } from "redux";
import loginReducer from './loginReducer'
import regReducer from './regReducer'

const reducers = combineReducers({
  login: loginReducer,
  reg: regReducer
})

let store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store;
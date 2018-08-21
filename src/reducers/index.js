import { combineReducers } from 'redux';
import loginReducer from '../components/Login/loginReducer';
import usuarioReducer from '../components/Usuario/usuarioReducer';

// noinspection JSUnusedGlobalSymbols
const rootReducer = combineReducers({
  loginReducer,
  usuarioReducer,
});

export default rootReducer;

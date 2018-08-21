import { combineReducers } from 'redux';
import loginReducer from '../components/Login/loginReducer';
import usuarioReducer from '../components/Usuario/usuarioReducer';
import movimentacaoReducer from '../components/Movimentacao/movimentacaoReducer';

// noinspection JSUnusedGlobalSymbols
const rootReducer = combineReducers({
  loginReducer,
  usuarioReducer,
  movimentacaoReducer,
});

export default rootReducer;

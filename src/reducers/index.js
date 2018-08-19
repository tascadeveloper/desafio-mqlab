import { combineReducers } from 'redux';
import loginReducer from '../components/Login/loginReducer';

// noinspection JSUnusedGlobalSymbols
const rootReducer = combineReducers({
  loginReducer,
});

export default rootReducer;

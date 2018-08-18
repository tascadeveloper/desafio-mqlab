import { combineReducers } from 'redux';
import loginReducer from '../components/Login/loginReducers';

const rootReducer = combineReducers({
  loginReducer,
});

export default rootReducer;

import {
  LOGIN_BEGIN, LOGIN_ERROR, LOGIN_SUCCESS, LOGOUT_BEGIN, LOGOUT_ERROR, LOGOUT_SUCCESS,
} from './loginTypes';


const initialState = {
  loginData: {},
  logoutData: {},
  isLoadingLogin: false,
  isLoadingLogout: false,
  loginError: null,
  logoutError: null,
};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_BEGIN:
      return {
        ...state,
        isLoadingLogin: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isLoadingLogin: false,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        isLoadingLogin: false,
        ...action.payload,
      };

    case LOGOUT_BEGIN:
      return {
        ...state,
        isLoadingLogout: true,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isLoadingLogout: false,
      };
    case LOGOUT_ERROR:
      return {
        ...state,
        isLoadingLogout: false,
        ...action.payload,
      };

    default:
      return state;
  }
}

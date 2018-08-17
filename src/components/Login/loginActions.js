import { LOGIN_BEGIN, LOGIN_ERROR, LOGIN_SUCCESS, LOGOUT_BEGIN, LOGOUT_ERROR, LOGOUT_SUCCESS } from "./loginTypes";


export const loginActionBegin = () => ( {
    type: LOGIN_BEGIN,
} );

export const loginActionError = loginError => ( {
    type: LOGIN_ERROR,
    payload: { loginError },
} );

export const loginActionSuccess = loginData => ( {
    type: LOGIN_SUCCESS,
    payload: { loginData },
} );

export const logoutActionBegin = () => ( {
    type: LOGOUT_BEGIN,
} );

export const logoutActionError = loginError => ( {
    type: LOGOUT_ERROR,
    payload: { loginError },
} );

export const logoutActionSuccess = loginData => ( {
    type: LOGOUT_SUCCESS,
    payload: { loginData },
} );

export function performLogin(userCredentials, history) {
    return (dispatch) => {
        dispatch(loginActionBegin());
        const data = new FormData();
        data.append( "json", JSON.stringify( userCredentials ) );

        fetch("/auth/login",
            {
                method: "POST",
                body: data
            })
            .then(function(res){ return res.json(); })
            .then(function(loginData){
                dispatch(loginActionSuccess(loginData));
                history.push('/');
            })
            .catch((loginError) => {
                dispatch(loginActionError(loginError));
            });
    }
}

export function performLogout(userAuthToken, history) {
    return (dispatch) => {
        dispatch(logoutActionBegin());
        const data = new FormData();
        data.append( "json", JSON.stringify( userAuthToken ) );

        fetch("/auth/logout",
            {
                method: "POST",
                body: data
            })
            .then(function(res){ return res.json(); })
            .then(function(logoutData){
                dispatch(logoutActionSuccess(logoutData));
                history.push('/login');
            })
            .catch((loginError) => {
                dispatch(logoutActionError(loginError));
            });
    }
}
import { LOGIN_BEGIN, LOGIN_ERROR, LOGIN_SUCCESS, LOGOUT_BEGIN, LOGOUT_ERROR, LOGOUT_SUCCESS } from "./loginTypes";


export const loginActionBegin = () => ({
	type: LOGIN_BEGIN,
});

export const loginActionError = loginError => ({
	type: LOGIN_ERROR,
	payload: {loginError},
});

export const loginActionSuccess = loginData => ({
	type: LOGIN_SUCCESS,
	payload: {loginData},
});

export const logoutActionBegin = () => ({
	type: LOGOUT_BEGIN,
});

export const logoutActionError = logoutError => ({
	type: LOGOUT_ERROR,
	payload: {logoutError},
});

export const logoutActionSuccess = logoutData => ({
	type: LOGOUT_SUCCESS,
	payload: {logoutData},
});

export function performLogin(userCredentials, history) {
	return (dispatch) => {
		dispatch(loginActionBegin());
		const data = new FormData();
		data.append("json", JSON.stringify(userCredentials));

		fetch("/auth/login",
			{
				method: "POST",
				body: data
			})
			.then(function (res) {
				return res.json();
			})
			.then(function (loginData) {
				dispatch(loginActionSuccess(loginData));
				history.push('/');
			})
			.catch((loginError) => {
				dispatch(loginActionError(loginError));
			});
	}
}

export function performLogout(userAuthToken) {

	function performLogoutSync(userAuthToken) {
		return new Promise((resolve, reject) => {
			const data = new FormData();
			data.append( "json", JSON.stringify( userAuthToken ) );

			fetch("/auth/logout",
				{
					method: "POST",
					body: data
				})
				.then(function(res){ return res.json(); })
				.then(function(logoutData) {
					resolve(logoutData);
				})
				.catch((logoutError) => {
					reject(logoutError);
				});
		});
	}

	return (dispatch) => {
		dispatch(logoutActionBegin());
		return performLogoutSync(userAuthToken, dispatch).then(
			(logoutData) => {
				dispatch(logoutActionSuccess(logoutData));
			},
			(logoutError) => {
				dispatch(logoutActionError(logoutError));
			});
	}
}

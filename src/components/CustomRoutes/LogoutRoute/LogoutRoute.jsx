import { Component } from "react";
import { performLogout } from "../../Login/loginActions";
import connect from "react-redux/es/connect/connect";
import { Route } from "react-router-dom";
import React from "react";
import Logout from "../../Login/Logout";

class LogoutRoute extends Component {
	getAuthToken = (cookieProps) => {
		const {cookies} = cookieProps;
		return cookies['auth-token'];
	};

	componentWillReceiveProps(){
		const {cookies, performLogout} = this.props;
		const authToken = this.getAuthToken(cookies);
		performLogout(authToken);
	}

	render() {
		const {cookies} = this.props;
		return (
			<Route {...this.props}
			render={() => {
				console.log(this.props, 'this.props dentro do logout');
				var a  = 12;
				console.log(a);
				var b  = 13;
				console.log(b);
				var c  = 14;
				console.log(c);
				return ((this.props.logoutData && this.props.logoutData.logged) || this.getAuthToken(cookies)) ? <div className="loading loading-lg"/> : <Logout {...this.props} />
			}}
		/>)
	}
}

const mapStateToProps = ({loginReducer}) => ({
	logoutData: loginReducer.logoutData,
	isLoadingLogout: loginReducer.isLoadingLogout,
	logoutError: loginReducer.logoutError
});


const mapDispatchToProps = dispatch => ({
	performLogout: (userAuthToken, history) => {
		dispatch(performLogout(userAuthToken, history));
	}
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(LogoutRoute)

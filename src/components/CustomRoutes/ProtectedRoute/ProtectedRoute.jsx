import React, { Component } from "react";
import { Redirect, Route } from "react-router-dom";

class ProtectedRoute extends Component {
	validateToken = (cookieProps) => {
		const {cookies} = cookieProps;
		return cookies['auth-token'] && !!cookies['auth-token'];
	};

	render() {
		const {component: Component, cookies, ...props} = this.props;
		return (
			<Route
				{...props}
				render={props => (
					this.validateToken(cookies) ?
						<Component {...props} /> :
						<Redirect to='/login'/>
				)}
			/>
		)
	}
}

export default ProtectedRoute;

import React, {Component}from 'react';
import { Link } from "react-router-dom";
import { performLogout } from "./loginActions";
import connect from "react-redux/es/connect/connect";
import { instanceOf } from "prop-types";
import { Cookies, withCookies } from "react-cookie";
import * as _ from "lodash";

class Logout extends Component {
	static propTypes = {
		cookies: instanceOf(Cookies).isRequired
	};

	getAuthToken = (cookieProps) => {
		const {cookies} = cookieProps;
		return cookies['auth-token'];
	};

	componentDidMount() {
		console.log('component mounted');
		if(this.props) {
			const {cookies, performLogout} = this.props;
			const authToken = this.getAuthToken(cookies);
			performLogout(authToken);
		}
	}

	render() {
		const {isLoadingLogout} = this.props;
		return (
			<div className="column col-12 col-gapless px-0">
			<div className="empty">
				{isLoadingLogout ? <div className="loading loading-lg"/> :
					(	<div>
					<div className="empty-icon"><i className="icon icon-3x icon-flag"/></div>
					<p className="empty-title h5">Você foi Deslogado</p>
					<p className="empty-title subtitle">
						<Link to="/login" className="btn">Gerenciador Financeiro</Link>
					</p>
				</div>)}
			</div>
		</div>
		);
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
)(withCookies(Logout))

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { instanceOf, bool, func } from 'prop-types';
import { Cookies, withCookies } from 'react-cookie';
import { performLogout } from './loginActions';

class Logout extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired,
    performLogout: func.isRequired,
    isLoadingLogout: bool.isRequired,
  };

  componentDidMount() {
    if (this.props) {
      const { cookies, performLogout: performLogoutAction } = this.props;
      const authToken = this.getAuthToken(cookies);
      performLogoutAction(authToken);
    }
  }

  getAuthToken = (cookieProps) => {
    const { cookies } = cookieProps;
    return cookies['auth-token'];
  };


  render() {
    const { isLoadingLogout } = this.props;
    return (
      <div id="logout-wrapper" className="container grid-xl">
        <div className="column col-12 col-gapless px-0">
          <div className="empty">
            {isLoadingLogout
              ? (
                <div>
                  <div className="empty-icon"><i className="icon icon-3x icon-link" /></div>
                  <p className="empty-title h5">Carregando...</p>
                  <p className="empty-title subtitle">
                    &nbsp;
                  </p>
                  <div className="loading loading-lg" />
                </div>)
              : (
                <div>
                  <div className="empty-icon"><i className="icon icon-3x icon-flag" /></div>
                  <p className="empty-title h5">Logout efetuado com sucesso</p>
                  <p className="empty-title subtitle">
                    <Link to="/login" className="btn btn-link">Voltar</Link>
                  </p>
                </div>)}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ loginReducer }) => ({
  logoutData: loginReducer.logoutData,
  isLoadingLogout: loginReducer.isLoadingLogout,
  logoutError: loginReducer.logoutError,
});

const mapDispatchToProps = dispatch => ({
  performLogout: (userAuthToken, history) => {
    dispatch(performLogout(userAuthToken, history));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withCookies(Logout));

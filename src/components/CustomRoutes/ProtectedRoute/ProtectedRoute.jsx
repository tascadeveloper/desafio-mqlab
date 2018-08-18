import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { instanceOf } from 'prop-types';
import { Cookies, withCookies } from 'react-cookie';

class ProtectedRoute extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired,
  };

  validateToken = (cookieProps) => {
    const { cookies } = cookieProps;
    return cookies['auth-token'] && !!cookies['auth-token'];
  };

  render() {
    // eslint-disable-next-line no-shadow
    const { component: Component, cookies, ...props } = this.props;
    return (
      <Route
        {...props}
        render={innerProps => (
          this.validateToken(cookies)
            ? <Component {...innerProps} />
            : <Redirect to="/login" />
        )}
      />
    );
  }
}

export default withCookies(ProtectedRoute);

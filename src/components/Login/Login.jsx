import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bool, func } from 'prop-types';
import { performLogin } from './loginActions';

class Login extends Component {
  static propTypes = {
    performLogin: func.isRequired,
    isLoadingLogin: bool.isRequired,
  };

  efetuarLogin = () => {
    const { performLogin: performLoginAction } = this.props;
    performLoginAction({ usuario: 'mauricio', senha: '1234' });
  };

  render() {
    const { isLoadingLogin } = this.props;

    return (
      <div id="login-wrapper" className="app-content container grid-xl">
        <div className="column col-12 col-gapless px-0">
          <div className="empty">
            <div className="empty-icon">
              <i className="icon icon-3x icon-people" />
            </div>
            <p className="empty-title h5">
              Bem vindo ao Gerenciador Financeiro
            </p>
            {isLoadingLogin ? <div className="loading loading-lg" /> : (
              <div className="empty-action column col-4 centered">
                <div className="form-group text-left">
                  <label htmlFor="usuario" className="form-label">
                    Usuário
                    <input className="form-input" type="text" id="usuario" />
                  </label>

                  <label htmlFor="senha" className="form-label">
                    Senha
                    <input className="form-input" type="password" id="senha" />
                  </label>

                  <label htmlFor="lembrar" className="form-checkbox">
                    <input id="lembrar" type="checkbox" />
                    <i className="form-icon" />
                    {' '}
                    Lembrar Senha
                  </label>
                  <button type="button" onClick={this.efetuarLogin} className="btn btn-primary btn-block my-1">
                    Entrar
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ loginReducer }) => ({
  loginData: loginReducer.loginData,
  isLoadingLogin: loginReducer.isLoadingLogin,
  loginError: loginReducer.loginError,
});


const mapDispatchToProps = dispatch => ({
  performLogin: (userCredentials) => {
    dispatch(performLogin(userCredentials));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);

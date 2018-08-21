import React, { Component } from 'react';
import './Usuario.css';
import { bool, func, shape } from 'prop-types';
import { connect } from 'react-redux';
import * as _ from 'lodash';
import { clearUsuarioData, createUsuario } from './usuarioActions';

class Usuario extends Component {
  static propTypes = {
    createUsuario: func.isRequired,
    clearUsuarioData: func.isRequired,
    usuarioData: shape({}).isRequired,
    isLoadingUsuarioCreate: bool.isRequired,
  };

  state = {
    nomeCompleto: '',
    endereco: '',
    telefone: '',
    razaoSocial: '',
  };

  handleNomeCompletoChange = (event) => {
    this.setState({ nomeCompleto: event.target.value });
  };

  handleEnderecoChange = (event) => {
    this.setState({ endereco: event.target.value });
  };

  handleTelefoneChange = (event) => {
    this.setState({ telefone: event.target.value });
  };

  handleRazaoSocialChange = (event) => {
    this.setState({ razaoSocial: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { createUsuario: createUsuarioAction } = this.props;
    createUsuarioAction(this.state);
  };

  clearFormData = () => {
    const { clearUsuarioData: createUsuarioDataAction } = this.props;
    this.setState({
      nomeCompleto: '',
      endereco: '',
      telefone: '',
      razaoSocial: '',
    });
    createUsuarioDataAction();
  };

  render() {
    const {
      nomeCompleto, endereco, telefone, razaoSocial,
    } = this.state;

    const { isLoadingUsuarioCreate, usuarioData } = this.props;

    return (
      <div id="usuario-wrapper" className="container grid-xl bg-gray p-2">
        <div className="column col-6 centered col-gapless">
          <h3>Cadastro de Usuário</h3>
        </div>
        <div className="column col-6 centered col-gapless">
          <form onSubmit={this.handleSubmit} className="form-horizontal">
            <div className="form-group">
              <div className="col-12">
                <label htmlFor="nomeCompleto">
                  <span className="form-label">
                    Name
                  </span>
                  <input
                    className="form-input"
                    type="text"
                    id="nomeCompleto"
                    value={nomeCompleto}
                    onChange={this.handleNomeCompletoChange}
                    placeholder="Nome completo"
                  />
                </label>
              </div>
            </div>

            <div className="form-group">
              <div className="col-12">
                <label htmlFor="endereco">
                  <span className="form-label">
                    Endereço
                  </span>
                  <input
                    className="form-input"
                    type="text"
                    id="endereco"
                    value={endereco}
                    onChange={this.handleEnderecoChange}
                    placeholder="Endereço"
                  />
                </label>
              </div>
            </div>

            <div className="form-group">
              <div className="col-12">
                <label htmlFor="telefone">
                  <span className="form-label">
                    Telefone
                  </span>
                  <input
                    className="form-input"
                    type="tel"
                    id="telefone"
                    value={telefone}
                    onChange={this.handleTelefoneChange}
                    placeholder="Telefone"
                  />
                </label>
              </div>
            </div>

            <div className="form-group">
              <div className="col-12">
                <label htmlFor="razaoSocial">
                  <span className="form-label">
                    Razão Social
                  </span>
                  <input
                    className="form-input"
                    type="text"
                    id="razaoSocial"
                    value={razaoSocial}
                    onChange={this.handleRazaoSocialChange}
                    placeholder="Razão Social"
                  />
                </label>
              </div>
            </div>

            <div className="form-group submit-margin">
              <div className="column col-12 px-0 ">
                <button type="submit" className="btn btn-primary btn-lg">Salvar</button>
              </div>
            </div>

            {isLoadingUsuarioCreate ? <div className="loading lg" /> : false}
            {!_.isEmpty(usuarioData) ? (
              <div className="toast toast-success">
                <button onClick={this.clearFormData} type="button" className="btn btn-clear float-right" />
                Usuário salvo com sucesso!
              </div>) : false}

          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ usuarioReducer }) => ({
  usuarioData: usuarioReducer.usuarioData,
  isLoadingUsuarioCreate: usuarioReducer.isLoadingUsuarioCreate,
  loginError: usuarioReducer.usuarioError,
});


const mapDispatchToProps = dispatch => ({
  createUsuario: (userPayload) => {
    dispatch(createUsuario(userPayload));
  },
  clearUsuarioData: () => {
    dispatch(clearUsuarioData());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Usuario);

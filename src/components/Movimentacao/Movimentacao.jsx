import React, { Component } from 'react';
import './Movimentacao.css';
import { bool, func, shape } from 'prop-types';
import { connect } from 'react-redux';
import * as _ from 'lodash';
import { clearMovimentacaoData, createMovimentacao } from './movimentacaoActions';

class Movimentacao extends Component {
  static propTypes = {
    createMovimentacao: func.isRequired,
    clearMovimentacaoData: func.isRequired,
    movimentacaoData: shape({}).isRequired,
    isLoadingMovimentacaoCreate: bool.isRequired,
  };

  state = {
    valorMovimentacao: '',
  };

  handleValorMovimentacaoChange = (event) => {
    this.setState({ valorMovimentacao: event.target.value });
  };

  clearFormData = () => {
    const { clearMovimentacaoData: clearMovimentacaoDataAction } = this.props;
    this.setState({
      valorMovimentacao: '',
    });
    clearMovimentacaoDataAction();
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { createMovimentacao: createMovimentacaoAction } = this.props;
    createMovimentacaoAction(this.state);
  };

  render() {
    const {
      valorMovimentacao,
    } = this.state;

    const { isLoadingMovimentacaoCreate, movimentacaoData } = this.props;

    return (
      <div id="usuario-wrapper" className="app-content container grid-xl bg-gray">
        <div className="column col-6 centered col-gapless">
          <h3>Cadastro de Movimentação</h3>
        </div>
        <div className="column col-6 centered col-gapless">
          <form onSubmit={this.handleSubmit} className="form-horizontal">

            <div className="col-12">
              <span className="form-label">
                Valor Movimentação
              </span>
            </div>

            <div className="input-group col-12">
              <input
                className="form-input"
                type="text"
                id="valorMovimentacao"
                value={valorMovimentacao}
                onChange={this.handleValorMovimentacaoChange}
                placeholder="R$ 0,00"
              />
              <button type="submit" className="btn btn-primary input-group-btn">Inserir</button>
            </div>


            {isLoadingMovimentacaoCreate ? <div className="loading lg" /> : false}
            {!_.isEmpty(movimentacaoData) ? (
              <div className="toast toast-success my-2">
                <button type="button" onClick={this.clearFormData} className="btn btn-clear float-right" />
                Movimentacao inserida com sucesso!
              </div>) : false}

          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ movimentacaoReducer }) => ({
  movimentacaoData: movimentacaoReducer.movimentacaoData,
  isLoadingMovimentacaoCreate: movimentacaoReducer.isLoadingMovimentacaoCreate,
  movimentacaoError: movimentacaoReducer.movimentacaoError,
});


const mapDispatchToProps = dispatch => ({
  createMovimentacao: (userPayload) => {
    dispatch(createMovimentacao(userPayload));
  },
  clearMovimentacaoData: () => {
    dispatch(clearMovimentacaoData());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Movimentacao);

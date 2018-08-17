import React, { Component, Fragment } from 'react';
import './App.css';

class App extends Component {
    render() {
        return (
            <Fragment>
                <header className="container grid-xl my-2 navbar">
                    <section className="navbar-section">
                        <a href="/" className="navbar-brand mr-2">Gerenciador Financeiro</a>

                    </section>
                    <section className="navbar-section">
                        <a href="/" className="btn btn-link">Home</a>
                        <a href="/" className="btn btn-link">Movimentações</a>
                    </section>
                </header>

                <div className="app-content container grid-xl">
                    <div className="column col-12 col-gapless px-0">
                        <div className="empty">
                            <div className="empty-icon"><i className="icon icon-3x icon-people"/></div>
                            <p className="empty-title h5">Bem vindo ao Gerenciador Financeiro</p>
                            <div className="empty-action column col-4 centered">
                                <div className="form-group text-left">
                                    <label className="form-label" htmlFor="input-example-1">Usuário</label>
                                    <input className="form-input" type="text" id="input-example-1" />

                                    <label className="form-label" htmlFor="input-example-1">Senha</label>
                                    <input className="form-input" type="text" id="input-example-1" />

                                    <label className="form-checkbox">
                                        <input type="checkbox"/>
                                        <i className="form-icon"/> Lembrar Senha
                                    </label>
                                    <button className="btn btn-primary btn-block my-2">Entrar</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <footer className="container grid-xl my-2">
                    <div className="col-12 text-center">
                        <p class="text-secondary">Desenvolvido por Mauricio Tasca dos Reis Corr&ecirc;a</p>
                    </div>

                </footer>
            </Fragment>
        );
    }
}

export default App;

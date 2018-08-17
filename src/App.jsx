import React, { Component, Fragment } from 'react';
import './App.css';
import RouterOutlet from "./RouterOutlet";
import { NavLink } from "react-router-dom";

class App extends Component {
    render() {
        return (
            <Fragment>
                <header className="container grid-xl my-2 navbar">
                    <section className="navbar-section">
                        <NavLink to="/" className="navbar-brand mr-2">Gerenciador Financeiro</NavLink>
                    </section>

                    <section className="navbar-section">
                        <NavLink to="/movimentacoes" className="btn btn-link">Movimentações</NavLink>
                    </section>
                </header>

                <RouterOutlet/>


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

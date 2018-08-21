import React, { Fragment } from 'react';
import './App.css';
import { NavLink, withRouter } from 'react-router-dom';
import RouterOutlet from './RouterOutlet';

const App = () => (
  <Fragment>
    <header className="container grid-xl my-2 navbar">
      <section className="navbar-section">
        <NavLink to="/" className="navbar-brand mr-2">
          Gerenciador Financeiro
        </NavLink>
      </section>

      <section className="navbar-section">
        <NavLink to="/usuario" className="btn btn-link">
          Usuários
        </NavLink>
        <NavLink to="/movimentacoes" className="btn btn-link">
          Movimentações
        </NavLink>
        <NavLink to="/logout" className="btn btn-primary">
          Logout
        </NavLink>
      </section>

    </header>

    <RouterOutlet />

    <footer className="container grid-xl my-2">
      <div className="col-12 text-center">
        <p className="text-secondary">
          Desenvolvido por Mauricio Tasca dos Reis Corr&ecirc;a
        </p>
      </div>

    </footer>
  </Fragment>
);

export default withRouter(App);

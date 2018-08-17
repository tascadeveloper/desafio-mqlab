import React, { Component, Fragment } from 'react';
import './App.css';
import RouterOutlet from "./RouterOutlet";
import { NavLink } from "react-router-dom";
import { instanceOf } from 'prop-types';
import { Cookies, withCookies } from 'react-cookie';

class App extends Component {
	static propTypes = {
		cookies: instanceOf(Cookies).isRequired
	};

	render() {
		const {cookies} = this.props;

		return (
			<Fragment>
				<header className="container grid-xl my-2 navbar">
					<section className="navbar-section">
						<NavLink to="/" className="navbar-brand mr-2">Gerenciador Financeiro</NavLink>
					</section>

					<section className="navbar-section">
						<NavLink to="/movimentacoes" className="btn btn-link">Movimentações</NavLink>
						<NavLink to="/logout" className="btn btn-primary">Logout</NavLink>
					</section>

				</header>

				<RouterOutlet cookies={cookies}/>

				<footer className="container grid-xl my-2">
					<div className="col-12 text-center">
						<p className="text-secondary">Desenvolvido por Mauricio Tasca dos Reis Corr&ecirc;a</p>
					</div>

				</footer>
			</Fragment>
		);
	}
}

export default withCookies(App);

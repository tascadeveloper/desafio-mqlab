import React from "react";
import { connect } from 'react-redux'
import { performLogin } from "./loginActions";


function Login(props) {

	const efetuarLogin = () => {
		const {performLogin, history} = props;
		performLogin({usuario: 'mauricio', senha: '1234'}, history);
	};

	const {isLoadingLogin} = props;

	return <div className="app-content container grid-xl">
		<div className="column col-12 col-gapless px-0">
			<div className="empty">
				<div className="empty-icon"><i className="icon icon-3x icon-people"/></div>
				<p className="empty-title h5">Bem vindo ao Gerenciador Financeiro</p>
				{isLoadingLogin ? <div className="loading loading-lg"/> : (
					<div className="empty-action column col-4 centered">
						<div className="form-group text-left">
							<label className="form-label" htmlFor="usuario">Usuário</label>
							<input className="form-input" type="text" id="usuario"/>

							<label className="form-label" htmlFor="senha">Senha</label>
							<input className="form-input" type="password" id="senha"/>

							<label className="form-checkbox">
								<input type="checkbox"/>
								<i className="form-icon"/> Lembrar Senha
							</label>
							<button onClick={efetuarLogin} className="btn btn-primary btn-block my-1">Entrar</button>
						</div>

					</div>
				)}

			</div>
		</div>
	</div>;
}

const mapStateToProps = ({loginReducer}) => ({
	loginData: loginReducer.loginData,
	isLoadingLogin: loginReducer.isLoadingLogin,
	loginError: loginReducer.loginError
});


const mapDispatchToProps = dispatch => ({
	performLogin: (userCredentials, history) => {
		dispatch(performLogin(userCredentials, history));
	}
});


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Login)

import React from "react";

const Login = () => (
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
                        <button className="btn btn-primary btn-block my-1">Entrar</button>
                    </div>

                </div>
            </div>
        </div>
    </div>
);

export default Login;
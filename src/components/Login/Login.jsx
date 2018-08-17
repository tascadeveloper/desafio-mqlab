import React from "react";

function efetuarLogin() {
    const payload = {
        a: 1,
        b: 2
    };

    const data = new FormData();
    data.append( "json", JSON.stringify( payload ) );

    fetch("/auth/login",
        {
            method: "POST",
            body: data
        })
        .then(function(res){ return res.json(); })
        .then(function(data){ alert( JSON.stringify( data ) ) })

}

const Login = () => (
    <div className="app-content container grid-xl">
        <div className="column col-12 col-gapless px-0">
            <div className="empty">
                <div className="empty-icon"><i className="icon icon-3x icon-people"/></div>
                <p className="empty-title h5">Bem vindo ao Gerenciador Financeiro</p>
                <div className="empty-action column col-4 centered">
                    <div className="form-group text-left">
                        <label className="form-label" htmlFor="usuario">Usuário</label>
                        <input className="form-input" type="text" id="usuario" />

                        <label className="form-label" htmlFor="senha">Senha</label>
                        <input className="form-input" type="password" id="senha" />

                        <label className="form-checkbox">
                            <input type="checkbox"/>
                            <i className="form-icon"/> Lembrar Senha
                        </label>
                        <button onClick={efetuarLogin} className="btn btn-primary btn-block my-1">Entrar</button>
                    </div>

                </div>
            </div>
        </div>
    </div>
);

export default Login;
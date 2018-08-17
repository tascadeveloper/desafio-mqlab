const express = require('express');
const app = express();

app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "http://localhost:3000");
	res.header("Access-Control-Allow-Methods", "POST, GET");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.post('/auth/login', (req, res) => {
	setTimeout(() => {
		res.cookie('auth-token', 'mocktoken123');
		res.setHeader('content-type', 'application/json');
		res.status(200).send({data: {logged: true}, message: 'Login efetuado com sucesso!', error: null});
	}, 2000);
});

app.post('/auth/logout', (req, res) => {
	setTimeout(() => {
		res.clearCookie('auth-token');
		res.setHeader('content-type', 'application/json');
		res.status(200).send({data: {logged: false}, message: 'Logout efetuado com sucesso!', error: null});
	}, 2000);

});

app.listen(process.env.PORT || 5000, () => console.log('🚀 Servidor Gerenciador Financeiro rodando na porta 5000!'));

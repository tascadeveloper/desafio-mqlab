const express = require('express');
const router = express.Router({});

router.use(function timeLog(req, res, next) {
  console.log('Auth routes - '+ req.originalUrl +' - Time: ', Date.now());
  next();
});

// define the login auth route
router.post('/login', (req, res) => {
  setTimeout(() => {
    res.cookie('auth-token', 'mocktoken123');
    res.setHeader('content-type', 'application/json');
    res.status(200).send({ data: { logged: true }, message: 'Login efetuado com sucesso!', error: null });
  }, 2000);
});

// define the logout route
router.post('/logout', (req, res) => {
  setTimeout(() => {
    res.clearCookie('auth-token');
    res.setHeader('content-type', 'application/json');
    res.status(200).send({ data: { logged: false }, message: 'Logout efetuado com sucesso!', error: null });
  }, 2000);
});

module.exports = router;


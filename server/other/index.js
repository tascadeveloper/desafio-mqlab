const express = require('express');
const router = express.Router({});

router.use(function timeLog(req, res, next) {
  console.log('Other routes - '+ req.originalUrl +' - Time: ', Date.now());
  next();
});

// define the login auth route
router.get('*', (req, res) => {
  res.status(404).send('404 Rota nao encontrada');
});

module.exports = router;


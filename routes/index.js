const express = require("express");

const vaccinationRouter = require('./vaccination.router');
const drugsRouter = require('./drugs.router');
const loginRouter = require('./login.router');
const signupRouter = require('./signup.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/vaccination', vaccinationRouter);
  router.use('/drugs', drugsRouter);
  router.use('/login', loginRouter);
  router.use('/signup', signupRouter);
}

module.exports = routerApi;

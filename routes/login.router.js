const express = require('express');
const LoginService = require('./../services/login.services');
const validatorHandler = require('./../middlewares/validatorHandler');
const { loginUserSchema } = require('./../schemas/user.schema');

const router = express.Router();
const service = new LoginService();

router.post("/",
validatorHandler(loginUserSchema, 'body'),
async (req, res, next) =>{
  try {
    const body = req.body;
    const rta = await service.login(body);
    res.status(200).json(rta);
  } catch (error) {
    next(error);
  }

});

module.exports = router;

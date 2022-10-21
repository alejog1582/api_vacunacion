const express = require('express');
const SignupService = require('./../services/signup.services');
const validatorHandler = require('./../middlewares/validatorHandler');
const { createUserSchema } = require('./../schemas/user.schema');

const router = express.Router();
const service = new SignupService();

router.post("/",
  validatorHandler(createUserSchema, 'body'),
  async (req, res, next) =>{
    try {
      const body = req.body;
      const newUser = await service.create(body);
      res.status(201).json({
        message: "Usuario Creado con Exito",
        data: newUser
      });
    } catch (error) {
      next(error);
    }
});

module.exports = router;

const express = require('express');
const SignupService = require('./../services/signup.services');

const router = express.Router();
const service = new SignupService();

router.post("/", async (req, res) =>{
  const body = req.body;
  const newUser = await service.create(body);
  res.status(201).json({
    message: "Usuario Creado con Exito",
    data: newUser
  });
});

module.exports = router;

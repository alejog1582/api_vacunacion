const express = require('express');
const LoginService = require('./../services/login.services');

const router = express.Router();
const service = new LoginService();

router.post("/", async (req, res) =>{
  const body = req.body;
  const rta = await service.login(body);
  res.status(200).json(rta);
});

module.exports = router;

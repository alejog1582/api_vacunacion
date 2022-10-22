const express = require('express');
const UserService = require('./../services/user.services');
const validatorHandler = require('./../middlewares/validatorHandler');
const { getUserSchema, updateUserSchema, deleteUserSchema } = require('./../schemas/user.schema');
const auth = require('../utils/auth');

const router = express.Router();
const service = new UserService();

router.get('/',
  auth.authenticate('jwt', {session: false}),
  async (req, res) => {
    const users = await service.find();
    res.json(users);
});

router.get('/:id',
  auth.authenticate('jwt', {session: false}),
  validatorHandler(getUserSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const user = await service.findOne(id);
      res.json(user);
    } catch (error) {
      next(error);
    }
    }
);

router.put('/:id',
  auth.authenticate('jwt', {session: false}),
  validatorHandler(getUserSchema, 'params'),
  validatorHandler(updateUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const user = await service.update(id, body);
      res.json(user);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  auth.authenticate('jwt', {session: false}),
  validatorHandler(deleteUserSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const rta = await service.delete(id);
      res.json(rta);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;

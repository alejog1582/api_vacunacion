const express = require('express');
const VaccinationService = require('./../services/vaccination.services');
const validatorHandler = require('./../middlewares/validatorHandler');
const { createVaccinationSchema, updateVaccinationSchema, getVaccinationSchema, deleteVaccinationSchema } = require('./../schemas/vaccination.schema');
const auth = require('../utils/auth');

const router = express.Router();
const service = new VaccinationService();

router.post("/",
  auth.authenticate('jwt', {session: false}),
  validatorHandler(createVaccinationSchema, 'body'),
  async (req, res, next) =>{
    try {
      const body = req.body;
      const newVaccination = await service.create(body);
      res.status(201).json({
        message: "Vacunacion Creado con Exito",
        data: newVaccination
      });
    } catch (error) {
      next(error);
    }
  }
);

router.get('/',
  auth.authenticate('jwt', {session: false}),
  async (req, res) => {
    const vaccination = await service.find();
    res.json(vaccination);
  }
);

router.get('/:id',
  auth.authenticate('jwt', {session: false}),
  validatorHandler(getVaccinationSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const vaccination = await service.findOne(id);
      res.json(vaccination);
    } catch (error) {
      next(error);
    }
  }
);

router.put('/:id',
  auth.authenticate('jwt', {session: false}),
  validatorHandler(getVaccinationSchema, 'params'),
  validatorHandler(updateVaccinationSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const vaccination = await service.update(id, body);
      res.json(vaccination);
    } catch (error) {
      next(error);
    }
}
);

router.delete('/:id',
  auth.authenticate('jwt', {session: false}),
  validatorHandler(deleteVaccinationSchema, 'params'),
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

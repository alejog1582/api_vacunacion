const express = require('express');
const VaccinationService = require('./../services/vaccination.services');
const validatorHandler = require('./../middlewares/validatorHandler');
const { createVaccinationSchema, updateVaccinationSchema, getVaccinationSchema, deleteVaccinationSchema } = require('./../schemas/vaccination.schema');

const router = express.Router();
const service = new VaccinationService();

router.post("/",
  validatorHandler(createVaccinationSchema, 'body'),
  async (req, res, next) =>{
    try {
      const body = req.body;
      const newVaccination = await service.create(body);
        res.json(newVaccination);
    } catch (error) {
      next(error);
    }
  }
);

router.get('/', async (req, res) => {
  const vaccination = await service.find();
  res.json(vaccination);
});

router.get('/:id',
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

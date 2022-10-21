const express = require('express');
const DrugService = require('./../services/drug.services');
const validatorHandler = require('./../middlewares/validatorHandler');
const { createDrugSchema, updateDrugSchema, getDrugSchema, deleteDrugSchema } = require('./../schemas/drug.schema');

const router = express.Router();
const service = new DrugService();

router.post("/",
  validatorHandler(createDrugSchema, 'body'),
  async (req, res, next) =>{
    try {
      const body = req.body;
      const newDrug = await service.create(body);
      res.status(201).json({
        message: "Medicamento Creado con Exito",
        data: newDrug
      });
    } catch (error) {
      next(error);
    }

});

router.get('/',
  async (req, res, next) => {
    try {
      const drugs = await service.find();
      res.json(drugs);
    } catch (error) {
      next(error);
    }
});

router.get('/:id',
  validatorHandler(getDrugSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const drug = await service.findOne(id);
      res.json(drug);
    } catch (error) {
      next(error);
    }
}
);

router.put('/:id',
  validatorHandler(getDrugSchema, 'params'),
  validatorHandler(updateDrugSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const drug = await service.update(id, body);
      res.json(drug);
    } catch (error) {
      next(error);
    }
}
);

router.delete('/:id',
  validatorHandler(deleteDrugSchema, 'params'),
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

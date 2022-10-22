const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string();
const drugId = Joi.number().integer();
const dose = Joi.number().integer();
const date = Joi.date();

const createVaccinationSchema = Joi.object({
  name: name.required(),
  drugId: drugId.required(),
  dose: dose.required(),
  date: date.required(),
});

const updateVaccinationSchema = Joi.object({
  name: name,
  drugId: drugId,
  dose: dose,
  date: date,
});

const getVaccinationSchema = Joi.object({
  id: id.required(),
});

const deleteVaccinationSchema = Joi.object({
  id: id.required(),
});

module.exports = { createVaccinationSchema, updateVaccinationSchema, getVaccinationSchema, deleteVaccinationSchema }

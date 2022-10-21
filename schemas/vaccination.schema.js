const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string();
const drug_id = Joi.number().integer();
const dose = Joi.number().integer();
const date = Joi.date();

const createVaccinationSchema = Joi.object({
  name: name.required(),
  drug_id: drug_id.required(),
  dose: dose.required(),
  date: date.required(),
});

const updateVaccinationSchema = Joi.object({
  name: name,
  drug_id: drug_id,
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

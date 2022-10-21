const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string();
const approved = Joi.boolean();
const min_dose = Joi.number().integer();
const max_dose = Joi.number().integer();
const available_at = Joi.date();

const createDrugSchema = Joi.object({
  name: name.required(),
  approved: approved.required(),
  min_dose: min_dose.required(),
  max_dose: max_dose.required(),
  available_at: available_at.required()
});

const updateDrugSchema = Joi.object({
  name: name,
  approved: approved,
  min_dose: min_dose,
  max_dose: max_dose,
  available_at: available_at
});

const getDrugSchema = Joi.object({
  id: id.required(),
});

const deleteDrugSchema = Joi.object({
  id: id.required(),
});

module.exports = { createDrugSchema, updateDrugSchema, getDrugSchema, deleteDrugSchema }

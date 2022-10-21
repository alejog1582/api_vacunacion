const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string();
const email = Joi.string().email();
const password = Joi.string().min(8);

const createUserSchema = Joi.object({
  name: name,
  email: email.required(),
  password: password.required()
});

const updateUserSchema = Joi.object({
  name: name,
  email: email,
});

const getUserSchema = Joi.object({
  id: id.required(),
});

const deleteUserSchema = Joi.object({
  id: id.required(),
});

const loginUserSchema = Joi.object({
  email: email.required(),
  password: password.required()
});

module.exports = { createUserSchema, updateUserSchema, getUserSchema,loginUserSchema, deleteUserSchema }

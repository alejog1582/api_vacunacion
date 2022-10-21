//const boom = require('@hapi/boom');

const {models} = require('./../libs/sequelize');

class SignupService {
  constructor() {}

  async create(data) {
    const newUser = await models.User.create(data)
    return newUser;
  }
}

module.exports = SignupService;

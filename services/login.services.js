const {models} = require('./../libs/sequelize');

class LoginService {
  constructor() {}

  async findByEmail(email){
    const rta = await models.User.findOne({
      where: { email }
    });
    return rta;
  }

  }

module.exports = LoginService;

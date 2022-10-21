const boom = require('@hapi/boom');
const {models} = require('./../libs/sequelize');

class UserService {
  constructor() {}

  async find() {
    const rta = await models.User.findAll();
    return rta;
  }

  async findOne(id) {
    const user = await models.User.findByPk(id);
    if (!user) {
      throw boom.notFound("Usuario no encontrado") ;
    }
    return user;
  }

  async update(id, changes) {
    const user = await this.findOne(id);
    if (user.id) {
      await user.update(changes);
      return "Usuario Actualizado con Exito";
    }else{
      throw boom.notFound("Usuario no encontrado") ;
    }
  }

  async delete(id) {
    const user = await this.findOne(id);
    await user.destroy();
    return "Usuario Eliminado";
  }
}

module.exports = UserService;

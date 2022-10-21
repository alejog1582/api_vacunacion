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
      return 'usuario no encontrado';
    }
    return user;
  }

  async update(id, changes) {
    const user = await this.findOne(id);
    if (user.id) {
      await user.update(changes);
      return "Usuario Actualizado con Exito";
    }else{
      return "Usuario no encontrado"
    }
  }

  async delete(id) {
    const user = await this.findOne(id);
    if (user.id) {
      await user.destroy();
      return true;
    }else{
      return false;
    }
  }

}

module.exports = UserService;

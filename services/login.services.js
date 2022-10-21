//const boom = require('@hapi/boom');

//const pool = require('./../libs/postgresPool');
const {models} = require('./../libs/sequelize');

class LoginService {
  constructor() {
    //this.pool = pool;
    //this.pool.on('error', (err) => console.log(err));
  }

  async login(data) {
    const email = data.email;
    const password = data.password;
    const user = await models.User.findOne({
      where: {
        email: email,
      },
    });
    if (user) {
      if (password === user.password) {
        const rta = "Usuario logueado con exito";
        return rta
      }else{
        const rta = "Las credenciales no son correctas";
        return rta
      }
    }else{
      const rta = "Usuario no encontrado";
      return rta
    }
  }
}

module.exports = LoginService;

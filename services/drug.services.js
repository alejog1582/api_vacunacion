const {models} = require('./../libs/sequelize');

class DrugService {
  constructor() {}

  async create(data) {
    const newDrug = await models.Drug.create(data)
    return newDrug;
  }

  async find() {
    const rta = await models.Drug.findAll();
    return rta;
  }

  async findOne(id) {
    const drug = await models.Drug.findByPk(id);
    if (!drug) {
      return 'medicamento no encontrado';
    }
    return drug;
  }

  async update(id, changes) {
    const drug = await this.findOne(id);
    if (drug.id) {
      await drug.update(changes);
      return "medicamento Actualizado con Exito";
    }else{
      return "medicamento no encontrado"
    }
  }

  async delete(id) {
    const drug = await this.findOne(id);
    if (drug.id) {
      await drug.destroy();
      return true;
    }else{
      return false;
    }
  }

}

module.exports = DrugService;

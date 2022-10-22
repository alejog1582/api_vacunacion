const boom = require('@hapi/boom');
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
    const drug = await models.Drug.findByPk(id,{
      include: ['vaccinations']
    });
    if (!drug) {
      throw boom.notFound("medicamento no encontrado");
    }
    return drug;
  }

  async update(id, changes) {
    const drug = await this.findOne(id);
    if (drug.id) {
      await drug.update(changes);
      return "medicamento Actualizado con Exito";
    }else{
      throw boom.notFound("medicamento no encontrado");
    }
  }

  async delete(id) {
    const drug = await this.findOne(id);
    await drug.destroy();
    return "Medicamento Eliminado";
  }
}

module.exports = DrugService;

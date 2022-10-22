const boom = require('@hapi/boom');
const {models} = require('./../libs/sequelize');

class VaccinationService {
  constructor() {}

  async create(data) {
    const id = data.drugId;
    const drug = await models.Drug.findOne({
      where: {
        id: id,
      },
    });
    if (drug) {
      const newVaccination = await models.Vaccination.create(data)
      return newVaccination;
    }else{
      throw boom.conflict("El id de la drogra ingresada no existe. Por favor validar");
    }
  }

  async find() {
    const rta = await models.Vaccination.findAll({
      include: ['drug']
    });
    return rta;
  }

  async findOne(id) {
    const vaccination = await models.Vaccination.findByPk(id , {
      include: ['drug']
    });
    if (!vaccination) {
      throw boom.notFound("Vacunacion no encontrada");
    }
    return vaccination;
  }

  async update(id, changes) {
    const vaccination = await this.findOne(id);
    if (changes.drugId) {
      const id_drug = changes.drugId
      const drug = await models.Drug.findOne({
        where: {
          id: id_drug,
        },
      });
      if (drug != null) {
        await vaccination.update(changes);
        return "vacunacion Actualizado con Exito";
      }else{
        throw boom.conflict("El id de la drogra ingresada no existe. Por favor validar");
      }
    }else{
      await vaccination.update(changes);
      return "vacunacion Actualizado con Exito";
    }
  }

  async delete(id) {
    const vaccination = await this.findOne(id);
    await vaccination.destroy();
    return "Vacunacion Eliminada";

  }

}

module.exports = VaccinationService;

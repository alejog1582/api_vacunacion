const {models} = require('./../libs/sequelize');

class VaccinationService {
  constructor() {}

  async create(data) {
    const id = data.drug_id;
    const drug = await models.Drug.findOne({
      where: {
        id: id,
      },
    });
    if (drug) {
      const newVaccination = await models.Vaccination.create(data)
      return newVaccination;
    }else{
      return false
    }
  }

  async find() {
    const rta = await models.Vaccination.findAll();
    return rta;
  }

  async findOne(id) {
    const vaccination = await models.Vaccination.findByPk(id);
    if (!vaccination) {
      return 'vacunacion no encontrado';
    }
    return vaccination;
  }

  async update(id, changes) {
    const id_drug = 0;
    if (changes.drug_id !== undefined && changes.drug_id > 0) {
      changes.drug_id
      this.id_drug = changes.drug_id;
    }
    const vaccination = await this.findOne(id);
    const drug = await models.Drug.findOne({
      where: {
        id: this.id_drug,
      },
    });
    if (vaccination.id) {
      if (drug) {
        await vaccination.update(changes);
        return "vacunacion Actualizado con Exito";
      }else{
        return "El id de la drogra ingresada no existe. Por favor validar";
      }
    }else{
      return "vacunacion no encontrado"
    }
  }

  async delete(id) {
    const vaccination = await this.findOne(id);
    if (vaccination.id) {
      await vaccination.destroy();
      return true;
    }else{
      return false;
    }
  }

}

module.exports = VaccinationService;

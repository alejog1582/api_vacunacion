'use strict';

const{VaccinationSchema, VACCINATION_TABLE}=require('./../models/vaccination.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(VACCINATION_TABLE, VaccinationSchema);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(VACCINATION_TABLE);
  }
};

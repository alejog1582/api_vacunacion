'use strict';

const{DrugSchema, DRUG_TABLE}=require('./../models/drug.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(DRUG_TABLE, DrugSchema);
  },

  async down (queryInterface) {
    await queryInterface.drop(DRUG_TABLE);
  }
};

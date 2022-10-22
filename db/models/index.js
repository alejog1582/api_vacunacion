const{ User, UserSchema}=require('./user.model');
const{ Drug, DrugSchema}=require('./drug.model');
const{ Vaccination, VaccinationSchema}=require('./vaccination.model');

function setupModels(sequelize){
  User.init(UserSchema, User.config(sequelize));
  Drug.init(DrugSchema, Drug.config(sequelize));
  Vaccination.init(VaccinationSchema, Vaccination.config(sequelize));

  Drug.associate(sequelize.models);
  Vaccination.associate(sequelize.models);
}

module.exports = setupModels;

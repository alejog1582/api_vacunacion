const{ Model, DataTypes, Sequelize } = require('sequelize');

const VACCINATION_TABLE='vaccinations';

const VaccinationSchema={
  id:{
    allowNull:false,
    autoIncrement:true,
    primaryKey:true,
    type:DataTypes.INTEGER
  },
  name:{
    allowNull:false,
    type:DataTypes.STRING,
  },
  drugId:{
    field: 'drug_id',
    allowNull:false,
    type:DataTypes.INTEGER,
    references:{
      model: 'drugs',
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete:'SET NULL'
  },
  dose:{
    allowNull:false,
    type:DataTypes.INTEGER,
  },
  date:{
    allowNull:false,
    type:DataTypes.DATE,
  },
  createdAt:{
    allowNull:false,
    type:DataTypes.DATE,
    field:'create_at',
    defaultValue:Sequelize.NOW
  }}

class Vaccination extends Model{
  static associate(models){
    this.belongsTo(models.Drug, {as: 'drug'});
  }
  static config(sequelize){
    return{
      sequelize,
      tableName:VACCINATION_TABLE,
      modelName:'Vaccination',
      timestamps:false}
    }
}

module.exports={VACCINATION_TABLE, VaccinationSchema, Vaccination}

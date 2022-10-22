const{ Model, DataTypes, Sequelize } = require('sequelize');

const DRUG_TABLE='drugs';

const DrugSchema={
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
  approved:{
    allowNull:false,
    type:DataTypes.BOOLEAN,
  },
  min_dose:{
    allowNull:false,
    type:DataTypes.INTEGER,
  },
  max_dose:{
    allowNull:false,
    type:DataTypes.INTEGER,
  },
  available_at:{
    allowNull:false,
    type:DataTypes.DATE,
  },
  createdAt:{
    allowNull:false,
    type:DataTypes.DATE,
    field:'create_at',
    defaultValue:Sequelize.NOW
  }}

class Drug extends Model{
  static associate(models){
    this.hasMany(models.Vaccination,{
      as: 'vaccinations',
      foreignKey: 'drugId'
    })
  }
  static config(sequelize){
    return{
      sequelize,
      tableName:DRUG_TABLE,
      modelName:'Drug',
      timestamps:false}
    }
}

module.exports={DRUG_TABLE, DrugSchema, Drug}

const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Cars extends Model {}

Cars.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    car_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    make_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    car_model: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    year: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    mileage: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    color: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    salvage_title: {
        type: DataTypes.BOOLEAN,
    },
    transmission: {
        type: DataTypes.STRING,
        allowNull: false,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'cars',
  }
);

module.exports = Cars;
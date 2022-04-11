const sequelize = require('../config/connection');
const { User, Car } = require('../models');
const carData = require('./carData.json');
const userData = require('./userData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  await Car.bulkCreate(carData)
  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
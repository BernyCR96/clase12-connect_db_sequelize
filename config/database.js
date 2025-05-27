// database.js
const { Sequelize } = require('sequelize');
require('dotenv').config();
// Configura los parámetros de conexión
const sequelize = new Sequelize(
    'edd_galileo',
    process.env.DB_USER,
    'galile0_2025',
    {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      dialect: 'postgres',
      logging: false,
    }
  );

  module.exports = sequelize;


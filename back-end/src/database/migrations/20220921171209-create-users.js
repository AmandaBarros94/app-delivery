const { DataTypes } = require('sequelize');

'use strict';
module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
        type: DataTypes.STRING
      },
      email: {
        type: DataTypes.STRING
      },
      password: {
        type: DataTypes.STRING
      },
      role: {
        type: DataTypes.STRING
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('users');
  }
};
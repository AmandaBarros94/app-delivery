const { DataTypes } = require('sequelize');

'use strict';
module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      price: {
        type: DataTypes.DECIMAL(4, 2),
        allowNull: false,
      },
      urlImage: {
        type: DataTypes.STRING(200),
        allowNull: false,
        field: "url_image",
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('products');
  }
};
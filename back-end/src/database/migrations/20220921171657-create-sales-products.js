const { DataTypes } = require('sequelize');

'use strict';
module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable('sales_products', {
      saleId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        field: "sale_id",
        references: {
          model: "sales",
          key: "id",
        },
      },
      productId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        field: "product_id",
        references: {
          model: "products",
          key: "id",
        },
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('sales_products');
  }
};
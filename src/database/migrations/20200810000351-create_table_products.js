'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('products', {
      id: {
        type: Sequelize.DataTypes.INTEGER(10).UNSIGNED,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.DataTypes.STRING(60),
        allowNull: false
      },
      material_id: {
        type: Sequelize.DataTypes.INTEGER(10).UNSIGNED,
        foreignKey: true,
        allowNull: false
      },
      color_id: {
        type: Sequelize.DataTypes.INTEGER(10).UNSIGNED,
        foreignKey: true,
        allowNull: false
      },
      category_id: {
        type: Sequelize.DataTypes.INTEGER(10).UNSIGNED,
        foreignKey: true,
        allowNull: false
      },
      age: {
        type: Sequelize.DataTypes.INTEGER(3).UNSIGNED,
        allowNull: false
      },
      discount: {
        type:Sequelize.DataTypes.DECIMAL(15,2),
        allowNull: true
      },
      price: {
        type:Sequelize.DataTypes.DECIMAL(25,2),
        allowNull: false
      },
      image: {
        type:Sequelize.DataTypes.STRING(55),
        allowNull: true
      },
      stock: {
        type:Sequelize.DataTypes.INTEGER(3).UNSIGNED,
        allowNull: false
      },
      description: {
        type:Sequelize.DataTypes.STRING(255),
        allowNull: false
      },
      created_at: Sequelize.DataTypes.DATE,
      updated_at: Sequelize.DataTypes.DATE
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('products')

  }
};

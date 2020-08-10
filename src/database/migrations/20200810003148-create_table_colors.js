'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('colors', {
      id: {
        type: Sequelize.DataTypes.INTEGER(10).UNSIGNED,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.DataTypes.STRING(60),
        allowNull: false
      },
      code: {
        type: Sequelize.DataTypes.STRING(20),
        allowNull: false
      } 
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('colors')

  }
};

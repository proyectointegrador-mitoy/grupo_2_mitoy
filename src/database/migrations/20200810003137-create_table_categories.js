'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('categories', {
      id: {
        type: Sequelize.DataTypes.INTEGER(10).UNSIGNED,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.DataTypes.STRING(60),
        allowNull: false
      } 
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('categories')

  }
};

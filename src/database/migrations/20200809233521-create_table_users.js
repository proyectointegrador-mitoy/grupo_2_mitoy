'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        type: Sequelize.DataTypes.INTEGER(10).UNSIGNED,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.DataTypes.STRING(60),
        allowNull: true
      },
      email: {
        type: Sequelize.DataTypes.STRING(100),
        allowNull: false,
        unique: true
      },
      password: {
        type:Sequelize.DataTypes.STRING(100),
        allowNull: false
      },
      dni: {
        type:Sequelize.INTEGER(8).UNSIGNED,
        allowNull: true
      },
      phone: {
        type:Sequelize.DataTypes.STRING(45),
        allowNull: true
      },
      street: {
        type:Sequelize.DataTypes.STRING(255),
        allowNull: true
      },
      gender: {
        type:Sequelize.DataTypes.STRING(20),
        allowNull: true
      },
      avatar: {
        type:Sequelize.DataTypes.STRING(55),
        allowNull: true
      },
      group_id: {
        type:Sequelize.DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false
      },
      active: {
        type:Sequelize.DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false
      },
      remember_token: {
        type:Sequelize.DataTypes.STRING(45),
        allowNull: false
      },
      created_at: Sequelize.DataTypes.DATE,
      updated_at: Sequelize.DataTypes.DATE,

    });

  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users')
  }
};

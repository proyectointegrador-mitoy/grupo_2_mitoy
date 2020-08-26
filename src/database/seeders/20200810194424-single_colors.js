'use strict';
const faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('colors', [{
      name: 'Rojo',
      code:'0000055',

    }]);
    
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('colors', null, {});
  }
};
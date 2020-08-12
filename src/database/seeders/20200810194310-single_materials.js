'use strict';
const faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
     return queryInterface.bulkInsert('materials', [{
        name: 'Maderas',
      }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('materials', null, {});
  }
};
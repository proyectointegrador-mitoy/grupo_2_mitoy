'use strict';
const faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
     return queryInterface.bulkInsert('categories', [{
         name: 'Buenas',
       }]);
   
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('cotegories', null, {});
  }
};
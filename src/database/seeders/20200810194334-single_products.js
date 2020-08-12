'use strict';
const faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('products', [{
      name: 'Ajedrez',
      material_id: 2,
      color_id: "Celeste",
      category_id: 0,
      age: 3,
      discount: '',
      price: 0,
      image: 'imagen2.jpg',
      quantity:'',
      details:'',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('products', null, {});
  }
};

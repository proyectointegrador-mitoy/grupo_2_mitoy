'use strict';
const faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('products', [{
      name: 'Ajedrez',
      material_id: 2,
      color_id: 1,
      category_id: 0,
      age: 3,
      discount: 0,
      price: 1200,
      image: 'imagen2.jpg',
      stock:3,
      description:'Descripcion de un ajedrez de color celeste.',
      created_at: new Date(),
      updated_at: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('products', null, {});
  }
};

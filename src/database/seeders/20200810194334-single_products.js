'use strict';
const faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('products', [{
      name: 'Bloques personalizables',
      material_id: 2,
      color_id: 1,
      category_id: 1,
      age: 3,
      discount: 0,
      price: 1200,
      image: 'imagen2.jpg',
      stock:3,
      description:'Descripcion de un bloques con tiza para dibujar.',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Bloques de colores',
      material_id: 2,
      color_id: 1,
      category_id: 2,
      age: 3,
      discount: 0,
      price: 455,
      stock:3,
      description:'Descripcion de un bloques de colores de madera.',
      created_at: new Date(),
      updated_at: new Date(),
      image: "imagen-1594411479480.jpeg",
    },
    {
      name: 'Ajedrez',
      material_id: 2,
      color_id: 1,
      category_id: 3,
      age: 3,
      discount: 0,
      price: 500,
      stock:3,
      description:'Descripcion de un ajedrez de color madera.',
      created_at: new Date(),
      updated_at: new Date(),
      image: "imagen-1594411635236.jpeg"
    },
    {
      name: 'Autito',
      material_id: 2,
      color_id: 1,
      category_id: 1,
      age: 3,
      discount: 0,
      price: 4300,
      stock:3,
      description:'Descripcion de un autito ecologico.',
      created_at: new Date(),
      updated_at: new Date(),
      image: "imagen-1594411773613.jpeg"
    },
    {
      name: 'Casita Ecológica',
      material_id: 2,
      color_id: 1,
      category_id: 3,
      age: 3,
      discount: 0,
      price: 760,
      stock:3,
      description:'Descripcion de un casita de madera.',
      created_at: new Date(),
      updated_at: new Date(),      
      image: "imagen-1594411908884.jpeg"
    },
    {
      name: 'Autito de carreras',
      material_id: 2,
      color_id: 1,
      category_id: 1,
      age: 3,
      discount: 0,
      price: 200,
      stock:3,
      description:'Descripcion de un autito de carreras de madera.',
      created_at: new Date(),
      updated_at: new Date(),
      image: "imagen-1595458360323.png"
    },
    {
      name: 'Trompo ecológico',
      material_id: 2,
      color_id: 1,
      category_id: 2,
      age: 3,
      discount: 0,
      price: 700,
      stock:3,
      description:'Trompo de madera. Para niños de 5 años en adelante',
      created_at: new Date(),
      updated_at: new Date(),
      image: "imagen-1595458611791.jpg"
    }
  ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('products', null, {});
  }
};

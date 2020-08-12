'use strict';
const faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      name: 'Antonio',
      email: 'Saburo_tsutsumi@yahoo.com.ar',
      password: faker.internet.password(16),
      phone: faker.phone.phoneNumber('0165#######'),
      street: 'Jauretche 210',
      gender: 'Masculino',
      avatar: 'imagen2.jpg',
      group_id: 0,
      remember_token: 'aaaaa',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};

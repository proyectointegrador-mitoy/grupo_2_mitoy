'use strict';
const faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      name: null,
      email: 'German.settino@gmail.com',
      password: faker.internet.password(16),
      dni: '12345678',
      phone: faker.phone.phoneNumber('0165#######'),
      street: 'Jauretche 210',
      gender: 'Masculino',
      avatar: 'imagen2.jpg',
      group_id: 0,
      active: 1,
      remember_token: 'bbbbbb',
      created_at: new Date(),
      updated_at: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};

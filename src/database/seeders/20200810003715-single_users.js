'use strict';
const faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      name: 'German Settino',
      email: 'German.settino@gmail.com',
      password: faker.internet.password(16),
      phone: faker.phone.phoneNumber('0165#######'),
      street: 'Artigos 5500',
      gender: 'Masculino',
      avatar: 'imagen2.jpg',
      group_id: 0,
      remember_token: 'bbbbbb',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};

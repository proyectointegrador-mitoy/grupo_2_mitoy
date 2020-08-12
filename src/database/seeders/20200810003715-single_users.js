'use strict';
const faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
<<<<<<< HEAD
      name: 'Antonio',
      email: 'Saburo_tsutsumi@yahoo.com.ar',
=======
      name: null,
      email: 'German.settino@gmail.com',
>>>>>>> 4dfd642bdb269b0ddaf0bb846729bec40ead7ac7
      password: faker.internet.password(16),
      dni: '12345678',
      phone: faker.phone.phoneNumber('0165#######'),
      street: 'Jauretche 210',
      gender: 'Masculino',
      avatar: 'imagen2.jpg',
      group_id: 0,
<<<<<<< HEAD
      remember_token: 'aaaaa',
      createdAt: new Date(),
      updatedAt: new Date()
=======
      active: 1,
      remember_token: 'bbbbbb',
      created_at: new Date(),
      updated_at: new Date()
>>>>>>> 4dfd642bdb269b0ddaf0bb846729bec40ead7ac7
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Users',
    [
      {
        name: 'Rodrigo',
        email: 'rodrigo@gmail.com',
        password: '$2b$10$L0qiimxkhD/f8sJtUx3m1.ImUZNNL9fEOFry15772ihcXWFAQvCOW',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        name: 'Tales',
        email: 'tales@gmail.com',
        password: '$2b$10$L0qiimxkhD/f8sJtUx3m1.ImUZNNL9fEOFry15772ihcXWFAQvCOW',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ],

    {},
  ),

  down: async (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
};

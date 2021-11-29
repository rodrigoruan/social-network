module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Comments',
    [
      {
        comment: 'num vo ti chama pra come um coca cola cumigo',
        userId: 1,
        postId: 1,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        comment: 'num vo ti chama pra come uma coxinha cumigo',
        userId: 2,
        postId: 1,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ],
    {},
  ),

  down: async (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
};

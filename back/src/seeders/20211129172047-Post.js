module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Posts',
    [
      {
        content: 'JavaScript é melhor que java',
        image: 'https://ichef.bbci.co.uk/news/640/amz/worldservice/live/assets/images/2016/03/30/160330173054_pato_original_640x360_reproducao_nocredit.jpg',
        userId: 1,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        content: 'Pato e cabrito',
        image: 'https://razoesparaacreditar.com/wp-content/uploads/2020/09/cabra-capa-1068x561.jpg',
        userId: 2,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ],

    {},
  ),

  down: async (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
};

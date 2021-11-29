module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    'Comment',
    {
      comment: DataTypes.STRING,
      userId: { type: DataTypes.INTEGER, foreignKey: true },
      postId: { type: DataTypes.INTEGER, foreignKey: true },
    },
    { timestamps: true },
  );

  Comment.associate = (model) => {
    Comment.belongsTo(model.User, { foreignKey: 'userId', as: 'user' });
  };

  Comment.associate = (model) => {
    Comment.belongsTo(model.Post, { foreignKey: 'postId', as: 'posts' });
  };

  return Comment;
};

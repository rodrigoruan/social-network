module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    'Post',
    {
      content: DataTypes.STRING,
      image: DataTypes.STRING,
      userId: { type: DataTypes.INTEGER, foreignKey: true },
    },
    { timestamps: true },
  );

  Post.associate = (model) => {
    Post.belongsTo(
      model.User,
      { foreignKey: 'userId', as: 'User' },
    );
  };

  Post.associate = (model) => {
    Post.hasMany(
      model.Comment,
      { foreignKey: 'commentId', as: 'Comments' },
    );
  };

  return Post;
};

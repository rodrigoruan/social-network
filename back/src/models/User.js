module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    { timestamps: true },
  );

  User.associate = (model) => {
    User.hasMany(model.Post, { foreignKey: 'id', as: 'Posts' });
  };

  User.associate = (model) => {
    User.hasMany(model.Comment, { foreignKey: 'id', as: 'comments' });
  };

  return User;
};

const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  }, {
    underscored: true,
    timestamps: false,
  });

  // User.associate = (models) => {
  //   User.hasMany(Models.BlogPosts)
  // }

  // (async () => {
  //   await sequelize.sync({ force: true });
  //   // As funções vão aqui
  // })();


  return User;
};

module.exports = UserModel;
const CategoryModel = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: DataTypes.STRING,
  }, {
    underscored: true,
    timestamps: false,
  });

  // Category.associate = (models) => {
  //   Category.hasMany(Models.BlogPosts)
  // }

  return Category;
};

module.exports = CategoryModel;
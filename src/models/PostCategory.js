const PostCategoryModel = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', 
  {
    postId: {
      type: DataTypes.INTEGER, foreignKey: true ,
    },
    categoryId: {
      type: DataTypes.INTEGER, foreignKey: true ,
    },
  }, {
    timestamps: false,
    underscored: true,
    tableName: 'posts_categories',
  });

  PostCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      through: PostCategory,
      foreignKey: 'postId',
      as: 'postId', 
      otherKey: 'categoryId'
    })
    models.BlogPost.belongsToMany(models.Category, {
      through: PostCategory,
      foreignKey: 'categoryId',
      as: 'categoryId', 
      otherKey: 'postId'
    })
  }

  return PostCategory;
};

module.exports = PostCategoryModel;
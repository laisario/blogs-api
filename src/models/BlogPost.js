const BlogPostModel = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER, foreignKey: true ,
    },
    published: {type: DataTypes.DATE, defaultValue: new Date()},
    updated: {type: DataTypes.DATE, defaultValue: new Date()},
  }, {
    underscored: true,
    timestamps: false,
    tableName: 'blog_posts',
  });

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User,
      { foreignKey: 'userId', as: 'user' })
    BlogPost.belongsToMany(models.Category, {through: 'Posts_Categories'})
  }

  return BlogPost;
};

module.exports = BlogPostModel;
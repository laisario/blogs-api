const { BlogPost, Category, PostCategory } = require('../models');

const create = async (newPost) => {
  const { dataValues } = await BlogPost.create(newPost);
  return dataValues;
};

const createPostCategory = async ({ postId, categoryId }) => PostCategory.create({ postId, categoryId });



module.exports = { create, createPostCategory };
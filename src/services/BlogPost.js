const Sequelize = require('sequelize');
const config = require('../config/config');

const env = process.env.NODE_ENV || 'development';
const sequelize = new Sequelize(config[env]);

const { BlogPost, PostCategory, User, Category } = require('../models');

const create = async (newPost, categoryIds) => {
  const result = await sequelize.transaction(async (t) => {
    const { dataValues } = await BlogPost.create(newPost, { transaction: t });
    const { id } = dataValues;

    const promises = categoryIds.map(async (categoryId) => PostCategory
        .create({ postId: id, categoryId }, { transaction: t }));

    await Promise.all(promises);
    return dataValues;
  });
  return result;
};

const findAll = async () => {
  const posts = await BlogPost
  .findAll({ 
    include: [{
      model: User,
      as: 'user',
      attributes: { exclude: ['password'] },
    },
    {
      model: Category,
      as: 'categories',
    }],
  });
  return posts;
}; 

const findById = async (id) => {
  const post = await BlogPost.findOne({ 
    where: { id },
    include: [{
      model: User,
      as: 'user',
      attributes: { exclude: ['password'] },
    },
    {
      model: Category,
      as: 'categories',
      attributes: { exclude: ['PostCategory'] },
    }],
  });
  return post;
};

const findByUserId = async (userId, postId) => {
  const post = await BlogPost.findAll({ 
    where: { userId, id: postId },
    include: [{
      model: User,
      as: 'user',
      attributes: { exclude: ['password'] },
    },
    {
      model: Category,
      as: 'categories',
      through: { attributes: [] },
    }],
  });
  return post;
};

const update = async (id, newData) => {
  const { title, content } = newData;
  const post = await BlogPost.update({ title, content }, {
    where: { id },
  });
  return post;
};

module.exports = { create, findAll, findById, findByUserId, update };

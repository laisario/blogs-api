const { User } = require('../models');

const findByEmail = (email) => User.findOne({ where: { email } });

const findByUserId = (id) => User.findOne({ where: { id }, attributes: { exclude: ['password'] }, });

const getAllUsers = () => {
  const users = User.findAll({
    attributes: { exclude: ['password'] },
  });

  return users;
};

const createUser = (newUser) => {
  const { displayName, email, password, image } = newUser;
  const user = User.create({ displayName, email, password, image });

  return user;
};

module.exports = { findByEmail, createUser, getAllUsers, findByUserId };

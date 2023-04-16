const {User} = require('../models');

const findByEmail = (email) => {
  const user = User.findOne({ where: { email: email } });
  return user;
};

const getAllUsers = () => {
  const users = User.findAll()
  return users
}


const createUser = (newUser) => {
  const {displayName, email, password, image} = newUser;
  const user = User.create({displayName, email, password, image});
  return user;
};

module.exports = {findByEmail, createUser, getAllUsers};

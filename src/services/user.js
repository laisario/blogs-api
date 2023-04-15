const {User} = require('../models');

const findByEmail = (email) => {
  const user = User.findOne({ where: { email: email } });
  return user;
};

module.exports = {findByEmail};

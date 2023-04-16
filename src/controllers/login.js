const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'secretPassword';

const login = async (req, res) => { 
  const { user } = res.locals;
  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };
  const token = jwt.sign({ userId: user.id }, secret, jwtConfig);
  res.status(200).json({ token });
};

module.exports = { login };
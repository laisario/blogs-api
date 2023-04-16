const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'secretPassword';
const userService = require('../services/user');

const create = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    // const jwtConfig = {
    //   expiresIn: '7d',
    //   algorithm: 'HS256',
    // };
    await userService.createUser({ displayName, email, password, image });
    const token = jwt.sign({ email, displayName }, secret);
    res.status(201).json({ token });
  } catch (error) {
    return res.status(409).json({ message: 'User already registered' });
  }
};

module.exports = { create };
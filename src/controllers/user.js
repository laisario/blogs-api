const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'secretPassword';
const userService = require('../services/user');

const create = async (req, res) => {
    const { displayName, email, password, image } = req.body;
    const jwtConfig = {
      expiresIn: '7d',
      algorithm: 'HS256',
    };
    await userService.createUser({ displayName, email, password, image });
    const token = jwt.sign({ email, displayName: displayName }, secret, jwtConfig);
    res.status(201).json({ token });
};

const getAll = async (req, res) => {
  const users = await userService.getAllUsers();
  res.status(200).json(users);
};

const getByUserId = async (req, res) => {
  const { id } = req.params;
  const user = await userService.findByUserId(id)
  if (!user) return res.status(404).json({ "message": "User does not exist" })
  res.status(200).json(user);
};

module.exports = { create, getAll, getByUserId };
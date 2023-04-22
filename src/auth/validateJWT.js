const jwt = require('jsonwebtoken');

const userService = require('../services/user');

const secret = process.env.JWT_SECRET || 'secretPassword';

const validateJWT = async (req, res, next) => {
    // const token = req.header('Authorization');
    const { authorization: token } = req.headers;
    if (!token) {
      return res.status(401).json({ message: 'Token not found' });
    }
    try {
      const decoded = jwt.verify(token, secret);
      const { userId } = decoded;
      const user = await userService.findByUserId(userId);
  
      if (!user) {
        return res.status(401).json({ message: 'Expired or invalid token' });
      }

      req.user = user;
      next();
    } catch (e) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }
};

module.exports = { validateJWT };
const userService = require('../services/user');

const validateDisplayName = (req, res, next) => {
  const { displayName } = req.body;
  const validate = displayName && displayName.length >= 8;
  if (!validate) {
    return res
      .status(400)
      .json({
        message: '"displayName" length must be at least 8 characters long',
      });
  }
  next();
};

const validateEmail = async (req, res, next) => {
  const { email } = req.body;
  const validateEmailRegex = /^\S+@\S+\.\S+$/;
  const validate = validateEmailRegex.test(email);
  if (!validate) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }
  const user = await userService.findByEmail(email);
  if (user) return res.status(409).json({ message: 'User already registered' });
  next();
};

const validatePassword = (req, res, next) => {
  const { password } = req.body;
  const validate = password.length >= 6;
  if (!validate) {
    return res
      .status(400)
      .json({
        message: '"password" length must be at least 6 characters long',
      });
  }
  next();
};

module.exports = { validateDisplayName, validateEmail, validatePassword };

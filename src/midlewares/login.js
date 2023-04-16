const userService = require('../services/user');

const loginValidationFields = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
        .status(400)
        .json({ message: 'Some required fields are missing' }); 
  }
  next();
};

const loginValidationPassword = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await userService.findByEmail(email);
  const matchPassword = user && password === user.password;
   if (!user || !matchPassword) return res.status(400).json({ message: 'Invalid fields' });
 
  res.locals.user = user;
  next();
};

module.exports = { loginValidationFields, loginValidationPassword };
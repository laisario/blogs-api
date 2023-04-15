const userService = require('../services/user')
const loginValidation = async (req, res, next) => {
  const { email, password  } = req.body;
  if (!email || !password) {
    return res
        .status(400)
        .json({ message: 'Some required fields are missing' }); 
  }
  const user = await userService.findByEmail(email);
  const matchPassword = password === user?.password;
   if(!user || !matchPassword) return res.status(400).json({ message: 'Invalid fields' });
 
  res.locals.user = user
  next();
};; 

module.exports = loginValidation;
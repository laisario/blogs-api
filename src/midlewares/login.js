const loginValidation = async (req, res, next) => {
  const { email, password  } = req.body;
  if (!email || !password) {
    return res
        .status(400)
        .json({ message: 'Some required fields are missing' }); 
  }
  // if (name.length < 5) {
  //   return res.status(422).json({ message: '"name" length must be at least 5 characters long' });
  // }
  next();
};; 

module.exports = loginValidation;
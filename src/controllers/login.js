const loginService = require('../services/login')

const login = async (req, res) => { 
  const { email, password } = req.body;
  const response = await loginService.login({email, password});
  console.log(response)
  res.status(200).json({response});
};

module.exports = login;
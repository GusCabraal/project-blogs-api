const { userService } = require('../services');
const { tokenGenerate } = require('./login');

const createUser = async (req, res) => {
  try {
    const token = tokenGenerate(req.body.email);
    const user = await userService.getByEmail(req.body.email);
    if (user) {
      return res.status(409).json({ message: 'User already registered' });
    }
    await userService.createUser(req.body);
    return res.status(201).json({ token });
  } catch (e) {
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

module.exports = {
  createUser,
};

const { userService } = require('../services');
const { tokenGenerate } = require('./login');

const getAll = async (_req, res) => {
  try {
    const users = await userService.getAll();
    return res.status(200).json(users);
  } catch (e) {
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const users = await userService.getUserById(Number(id));
    if (users) {
      return res.status(200).json(users);
    }
    return res.status(404).json({ message: 'User does not exist' });
  } catch (e) {
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

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

const removeUser = async (req, res) => {
  try {
    const { id } = req.user;
    await userService.deleteUser(id);
    return res.status(204).end();
  } catch (e) {
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

module.exports = {
  createUser,
  getAll,
  getById,
  removeUser,
};

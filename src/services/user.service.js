const { User } = require('../models');

const getAll = async () => {
  const users = await User.findAll({
    attributes: { exclude: ['password'] },
  });

  return users;
};

const getByEmail = async (email) => {
  const user = await User.findOne({ where: { email } });

  return user;
};

const getById = async (id) => {
    const user = await User.findByPk(id);

    return user;
  };

const getUserById = async (id) => {
    const user = await User.findOne({
      where: id,
      attributes: { exclude: ['password'] },
    });

    return user;
  };

  const createUser = async ({ displayName, email, password, image = '' }) => {
    const newUser = await User.create({ displayName, email, password, image });
  
    return newUser;
  };

  const deleteUser = async (id) => User.destroy({ where: { id } });

module.exports = {
  getAll,
  getUserById,
  getByEmail,
  getById,
  createUser,
  deleteUser,
};
const { User } = require('../models');

const getByEmail = async (email) => {
  const user = await User.findOne({ where: { email } });

  return user;
};

const getById = async (id) => {
    const user = await User.findByPk(id);

    return user;
  };

module.exports = {
  getByEmail,
  getById,
};
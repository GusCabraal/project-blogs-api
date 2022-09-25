const { addNewUser } = require('./schemas');

const validateNewUser = async (req, res, next) => {
  const { displayName, email, password } = req.body;
  const { error } = addNewUser.validate({ displayName, email, password });
  if (error) {
      const { message } = error;
      return res.status(400).json({ message });
  }
  next();
};

module.exports = {
  validateNewUser,
};
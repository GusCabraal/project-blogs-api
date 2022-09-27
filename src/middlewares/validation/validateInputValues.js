const { addNewUser, addNewPost } = require('./schemas');

const validateNewUser = async (req, res, next) => {
  const { displayName, email, password } = req.body;
  const { error } = addNewUser.validate({ displayName, email, password });
  if (error) {
      const { message } = error;
      return res.status(400).json({ message });
  }
  next();
};
const validateNewPostContent = async (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  const { error } = addNewPost.validate({ title, content, categoryIds });
  if (error) {
      // const { message } = error;
      return res.status(400).json({ message: 'Some required fields are missing' });
  }

  next();
};

module.exports = {
  validateNewUser,
  validateNewPostContent,
};
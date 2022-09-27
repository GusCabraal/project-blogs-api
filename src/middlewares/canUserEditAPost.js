const { blogPostService } = require('../services');

const canUserEditAPost = async (req, res, next) => {
    const { id } = req.params;
    const { id: userId } = req.user;

    const blogPost = await blogPostService.getById(id);
    if (blogPost.user.id !== userId) {
      return res.status(401).json({ message: 'Unauthorized user' });
    }
    next();
};

module.exports = canUserEditAPost;
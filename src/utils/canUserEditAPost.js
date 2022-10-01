const { blogPostService } = require('../services');

module.exports = async (userId, postId) => {
    const {
      dataValues: {
        user: { id },
      },
    } = await blogPostService.getById(postId);
  
    if (id !== userId) {
      const error = { status: 401, message: 'Unauthorized user' };
      throw error;
    }
  };
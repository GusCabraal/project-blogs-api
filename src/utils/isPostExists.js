const { blogPostService } = require('../services');

module.exports = async (id) => {
  const blogPost = await blogPostService.getById(id);
  if (!blogPost) {
    const error = { status: 404, message: 'Post does not exist' };
    throw error;
  }
  return blogPost;
};

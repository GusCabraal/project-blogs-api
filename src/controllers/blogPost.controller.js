const { blogPostService, categoryService } = require('../services');

const published = new Date();
const updated = new Date();

const createPost = async (req, res) => {
  try {
    const { id: userId } = req.user;

    const result = await categoryService.allCategoryExists(req.body.categoryIds);
    if (result) {
      return res.status(400).json({ message: '"categoryIds" not found' });
    }
    
    const newPost = { ...req.body, userId, published, updated };
    const newBlogPost = await blogPostService.insert(newPost);
    return res.status(201).json(newBlogPost);
  } catch (e) {
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const getAll = async (_req, res) => {
  try {
    const blogPosts = await blogPostService.getAll();
    return res.status(200).json(blogPosts);
  } catch (e) {
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

module.exports = {
  createPost,
  getAll,
};

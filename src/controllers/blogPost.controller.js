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
    // res.status(500).json({ message: 'Ocorreu um erro' });
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

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const blogPost = await blogPostService.getById(id);
    if (!blogPost) {
      return res.status(404).json({ message: 'Post does not exist' });
    }
    return res.status(200).json(blogPost);
  } catch (e) {
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const getByText = async (req, res) => {
  try {
    const { q } = req.query;
    const blogPost = await blogPostService.getByText(q);
    return res.status(200).json(blogPost);
  } catch (e) {
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const removeById = async (req, res) => {
  try {
    const { id } = req.params;
    const { id: userId } = req.user;
    const blogPost = await blogPostService.getById(id);
    if (!blogPost) {
      return res.status(404).json({ message: 'Post does not exist' });
    }
    if (blogPost.user.id !== userId) {
      return res.status(401).json({ message: 'Unauthorized user' });
    }
    await blogPostService.deletePost(id);
    return res.status(204).end();
  } catch (e) {
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

module.exports = {
  createPost,
  getAll,
  getById,
  getByText,
  removeById,
};

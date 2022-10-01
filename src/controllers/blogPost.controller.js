const { blogPostService, categoryService } = require('../services');
const { isPostExists, canUserEditAPost } = require('../utils');

const published = new Date();
const updated = new Date();

const createPost = async (req, res, next) => {
  try {
    const { id: userId } = req.user;

    const result = await categoryService.allCategoryExists(
      req.body.categoryIds,
    );
    if (result) {
      return res.status(400).json({ message: '"categoryIds" not found' });
    }

    const newPost = { ...req.body, userId, published, updated };
    const newBlogPost = await blogPostService.insert(newPost);
    return res.status(201).json(newBlogPost);
  } catch (e) {
    next(e);
  }
};

const updatedPost = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { id: userId } = req.user;

    await canUserEditAPost(userId, id);

    const updatePostContent = { ...req.body, userId, updated };
    
    await blogPostService.updatePost(id, updatePostContent);
    
    const updatedBlogPost = await blogPostService.getById(id);
    updatedBlogPost.userId = userId;
    
    return res.status(200).json(updatedBlogPost);
  } catch (e) {
    next(e);
  }
};

const getAll = async (_req, res, next) => {
  try {
    const blogPosts = await blogPostService.getAll();
    return res.status(200).json(blogPosts);
  } catch (e) {
    next(e);
  }
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    
    await isPostExists(id);
    
    const blogPost = await blogPostService.getById(id);
    return res.status(200).json(blogPost);
  } catch (e) {
    next(e);
  }
};

const getByText = async (req, res, next) => {
  try {
    const { q } = req.query;
    const blogPost = await blogPostService.getByText(q);
    return res.status(200).json(blogPost);
  } catch (e) {
    next(e);
  }
};

const removeById = async (req, res, next) => {
  try {
    const { id: postId } = req.params;
    const { id: userId } = req.user;

    await isPostExists(postId);

    await canUserEditAPost(userId, postId);

    await blogPostService.deletePost(postId);
    return res.status(204).end();
  } catch (e) {
    next(e);
  }
};

module.exports = {
  createPost,
  updatedPost,
  getAll,
  getById,
  getByText,
  removeById,
};

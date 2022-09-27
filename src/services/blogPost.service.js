const Sequelize = require('sequelize');
const { BlogPost, PostCategory, Category, User } = require('../models');

const config = require('../config/config');

const env = process.env.NODE_ENV || 'development';
const sequelize = new Sequelize(config[env]);

const getAll = async () => {
  const blogPost = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
    attributes: { exclude: ['userId'] },
  });

  return blogPost;
};

const getById = async (id) => {
  const [blogPost] = await BlogPost.findAll({
    where: { id },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
    attributes: { exclude: ['userId'] },
  });

  return blogPost;
};

const insert = async ({ userId, title, content, published, updated, categoryIds }) => {
  const result = await sequelize.transaction(
    async (t = sequelize.transaction()) => {
      const blogPost = await BlogPost.create(
        { title, content, userId, published, updated },
        { transaction: t },
      );

      const categoriesInserts = categoryIds.map(async (category) => {
        await PostCategory.create(
          { categoryId: Number(category), postId: blogPost.id },
          { transaction: t },
        );
      });
      await Promise.all(categoriesInserts);
      return blogPost;
    },
  );
  return result;
};

const deletePost = async (id) => {
  const post = await BlogPost.destroy(
    { where: { id } },
  );

  return post;
};

module.exports = {
  insert,
  getAll,
  getById,
  deletePost,
};

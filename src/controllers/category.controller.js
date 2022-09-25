const { categoryService } = require('../services');

const getAll = async (_req, res) => {
  try {
    const categories = await categoryService.getAll();
    return res.status(200).json(categories);
  } catch (e) {
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const createCategory = async (req, res) => {
  try {
    if (!req.body.name) {
      return res.status(400).json({ message: '"name" is required' });
    }
    const newCategory = await categoryService.createCategory(req.body);
    return res.status(201).json(newCategory);
  } catch (e) {
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

module.exports = {
  getAll,
  createCategory,
};

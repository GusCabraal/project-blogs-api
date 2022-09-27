const express = require('express');
const validateJWT = require('../auth/validateJWT');
const { categoryController } = require('../controllers');

const router = express.Router();

router.get('/', validateJWT, categoryController.getAll);
router.post('/', validateJWT, categoryController.createCategory);

module.exports = router;
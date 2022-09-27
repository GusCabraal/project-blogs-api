const express = require('express');
const validateJWT = require('../auth/validateJWT');
const { blogPostController } = require('../controllers');
const canUserEditAPost = require('../middlewares/canUserEditAPost');
const {
  validateUpdatedPost,
  validateNewPostContent,
} = require('../middlewares/validation/validateInputValues');

const router = express.Router();

router.post(
  '/',
  validateJWT,
  validateNewPostContent,
  blogPostController.createPost,
);
router.get('/search', validateJWT, blogPostController.getByText);
router.get('/', validateJWT, blogPostController.getAll);
router.get('/:id', validateJWT, blogPostController.getById);
router.put(
  '/:id',
  validateJWT,
  validateUpdatedPost,
  canUserEditAPost,
  blogPostController.updatedPost,
);
router.delete('/:id', validateJWT, canUserEditAPost, blogPostController.removeById);
module.exports = router;

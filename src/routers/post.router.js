const express = require('express');
const validateJWT = require('../auth/validateJWT');
const { blogPostController } = require('../controllers');
const {
  validateUpdatedPost,
  validateNewPostContent,
} = require('../middlewares/validation/validateInputValues');

const router = express.Router();

router.use(validateJWT);

router.post('/', validateNewPostContent, blogPostController.createPost);
router.get('/search', blogPostController.getByText);
router.get('/', blogPostController.getAll);

router.get('/:id', blogPostController.getById);
// router.use(isPostExist);

// router.use(canUserEditAPost);
router.delete('/:id', blogPostController.removeById);
router.put('/:id', validateUpdatedPost, blogPostController.updatedPost);
module.exports = router;

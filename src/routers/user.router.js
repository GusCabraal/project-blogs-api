const express = require('express');
const validateJWT = require('../auth/validateJWT');
const { userController } = require('../controllers');
const { validateNewUser } = require('../middlewares/validation/validateInputValues');

const router = express.Router();

router.post('/', validateNewUser, userController.createUser);
router.get('/', validateJWT, userController.getAll);
router.get('/:id', validateJWT, userController.getById);
router.delete('/me', validateJWT, userController.removeUser);

module.exports = router;
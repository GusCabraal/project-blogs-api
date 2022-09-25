const express = require('express');
const { loginController, userController, categoryController } = require('./controllers');
const validateJWT = require('./auth/validateJWT');
const { validateNewUser } = require('./middlewares/validation/validateInputValues');
// ...

const app = express();

app.use(express.json());

// ...

app.post('/login', loginController.login);
app.post('/user', validateNewUser, userController.createUser);
app.get('/user', validateJWT, userController.getAll);
app.get('/user/:id', validateJWT, userController.getById);
app.get('/categories', validateJWT, categoryController.getAll);
app.post('/categories', validateJWT, categoryController.createCategory);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivoo `src/server.js`
module.exports = app;

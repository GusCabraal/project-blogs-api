const express = require('express');
const { userRoutes, categoriesRoutes, postRoutes, loginRoutes } = require('./routers');
// ...

const app = express();

app.use(express.json());

// ...

app.use('/login', loginRoutes);
app.use('/user', userRoutes);
app.use('/categories', categoriesRoutes);
app.use('/post', postRoutes);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivoo `src/server.js`
module.exports = app;

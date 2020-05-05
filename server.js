const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const {port} = require('./env.config');
const mongoDB = require('./src/common/services/mongoose');

const app = express();

app.use(helmet());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

mongoDB.connect();

const UsersRouter = require('./src/user/routes.config');

UsersRouter.routesConfig(app);

// Error Handling middleware
const ErrorHandler = require('./errorHandler');
ErrorHandler.use(app);

app.get('/', (req, res) => {
  res.send('Hell-o World');
});

const listener = app.listen(port || 3000, () => {
  console.log('Your app is listening on port:', listener.address().port);
});

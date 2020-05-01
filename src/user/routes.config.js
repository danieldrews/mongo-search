const UserController = require('./controllers/user.controller');


exports.routesConfig = (app) => {
  app.post('/users', [
    UserController.insert,
  ]);
};

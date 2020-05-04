const UserController = require('./controllers/user.controller');

const basePath = '/users';

exports.routesConfig = (app) => {
  app.post(basePath, [
    UserController.insert,
  ]);

  app.put(basePath + '/:userId', [
    UserController.update,
  ]);
};

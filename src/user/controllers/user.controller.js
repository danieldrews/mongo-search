const UserModel = require('../models/user.model');

exports.insert = (req, res) => {
  UserModel.create(req.body, (err, user) => {
    res.status(201).json({id: user._id});
  });
};

exports.update = (req, res) => {
  UserModel.update(req.params.userId, req.body, (err) => {
    res.status(204).json({});
  });
};


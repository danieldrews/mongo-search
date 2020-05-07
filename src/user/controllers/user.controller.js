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

exports.removeById = (req, res) => {
  UserModel.removeById(req.params.userId, (err) => {
    res.status(204).json({});
  });
};

exports.list = (req, res) => {
  const limit = req.query.limit? parseInt(req.query.limit): undefined;
  const skip = req.query.skip? parseInt(req.query.skip): undefined;
  UserModel.list(limit, skip, (err, data) => {
    res.status(200).json(data);
  });
};


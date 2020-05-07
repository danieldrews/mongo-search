const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

const Schema = mongoose.Schema;

const NAME = 'user';

const userSchema = new Schema({
  createdAt: {type: Date, default: Date.now},
  updatedAt: {type: Date, default: Date.now},
  name: String,
  email: String,
});

userSchema.plugin(autoIncrement.plugin, NAME);

const User = mongoose.model(NAME, userSchema);

exports.create = (user, next) => {
  const nextUser = new User(user);
  return nextUser.save(next);
};

exports.update = (userId, user, next) => {
  User.findById(userId, (err, dbUser) => {
    if (err) {
      next(err);
      return;
    }

    for (const prop in user) {
      if (user.hasOwnProperty(prop)) {
        dbUser[prop] = user[prop];
      }
    }

    dbUser.updatedAt = Date.now();

    dbUser.save((err) => {
      next(err ? err : undefined);
    });
  });
};

exports.removeById = (userId, next) => {
  User.deleteOne({_id: userId}, (err) => next(err));
};

exports.list = (limit, skip, next) => {
  const query = User.find();

  if (limit) {
    query.limit(limit);
  }

  if (skip) {
    query.skip(skip);
  }

  query.exec(next);
};


const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

const Schema = mongoose.Schema;

const NAME = 'user';

const userSchema = new Schema({
  createdAt: {type: Date, default: Date.now},
  name: String,
  email: String,
});

userSchema.plugin(autoIncrement.plugin, NAME);

const User = mongoose.model(NAME, userSchema);

exports.create = (user, next) => {
  const nextUser = new User(user);
  return nextUser.save(next);
};

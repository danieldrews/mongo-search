const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
const {mongoUri} = require('../../../env.config');

exports.connect = () => {
  mongoose.connect(mongoUri, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });
  autoIncrement.initialize(mongoose.connection);
};

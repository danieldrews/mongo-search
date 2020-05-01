const express = require('express');
const { port, mongoUri } = require('./config');
const app = express();

app.get('/', (req, res) => {
  res.send('Hell-o World');
});

var listener = app.listen(port || 3000, () => {
  console.log('Your app is listening on port:', listener.address().port);
});

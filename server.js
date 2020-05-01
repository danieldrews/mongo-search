const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hell-o World');
});

app.listen(8000, () => {
  console.log('listening por 8000');
});

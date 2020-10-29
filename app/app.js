const os = require('os');
const express = require('express');
const morgan = require('morgan');

const port = process.env.PORT || 3000;
const app = express();

app.use(morgan('combined'))

app.get('/*', function (req, res) {
  const hostname = os.hostname();
  res.json({hostname, version: '2'});
});

app.listen(port, () => {
  console.log(`demo-app listening on port ${port}`);
});

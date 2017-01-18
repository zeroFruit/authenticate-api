require('./config/config');

const _               = require('lodash');
const express         = require('express');

var app = express();
const port = process.env.PORT;

app.use(bodyParser.json());

app.use(require('./router'));


app.listen(port, () => {
  console.log(`Connected to ${port}`);
});

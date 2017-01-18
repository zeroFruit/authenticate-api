const _ = require('lodash');
const bodyParser      = require('body-parser');

const {User}          = require('../models/user');
const {authenticate}  = require('../middleware/authenticate');

var add = (req, res) => {
  var body = _.pick(req.body, ['email', 'password']);
  var user = new User(body);

  user.save().then(() => {
    /* When new user is signed up then send back token to them */
    return user.generateAuthToken(); /**/
  }).then((token) => {
    res.header('x-auth', token).send(user);
  }).catch((e) => res.status(400).send(e));
};

var login = (req, res) => {
  var body = _.pick(req.body, ['email', 'password']);

  User.findByCredentials(body.email, body.password).then((user) => {
    return user.generateAuthToken().then((token) => {
      res.header('x-auth', token).send(user);
    });
  });
};

var logout = (req, res) => {
  req.user.removeToken(req.token).then(() => {
    res.status(200).send();
  }).catch(() => res.status(400).send());
};

module.exports = {
  add, login, logout
}

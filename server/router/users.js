const express         = require('express');

const router          = express.Router();
var _user             = require('../controller/user');


router.post('/', _user.add);
router.post('/login', _user.login);
router.delete('/me/token', authenticate, _user.logout);

module.exports = router;

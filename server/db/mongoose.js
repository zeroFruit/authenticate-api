var mongoose = require('mongoose');

mongoose.Promise = global.Promise; /* now mongoose can user Promise */
mongoose.connect(process.env.MONGODB_URI);

module.exports = {mongoose}

var convertNum = require('./module2');

var account = function() {
  return "Account Balance\n" + convertNum();
}

module.exports = account;

var randomNum = require('./module1.js')

var convertNum = function() {
var answer = ('$' + randomNum.toLocaleString());
  return answer;
}

module.exports = convertNum;

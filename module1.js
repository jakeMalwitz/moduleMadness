
var random = randomNumber(100, 100000);

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

module.exports = random;

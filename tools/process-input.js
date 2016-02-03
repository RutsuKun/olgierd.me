'use strict';

module.exports = function processInput(done) {
  var input = '';

  process.stdin.on('data', buffer => {
    input += buffer;
  });

  process.stdin.on('end', () => {
    process.stdout.write(done(input));
  });
};

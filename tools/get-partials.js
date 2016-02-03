'use strict';

var fs = require('fs');
var path = require('path');

var partialsDir = __dirname + '/../partials/';
var partials = {};

fs.readdirSync(partialsDir)
  .filter(filename => filename.match(/\.mustache$/))
  .forEach(filename => {
    partials[path.basename(filename, '.mustache')] = fs.readFileSync(partialsDir + filename, 'UTF-8');
  });

module.exports = partials;

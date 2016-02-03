'use strict';

var mustache = require('mustache');
var fs = require('fs');
var path = require('path');
var config = require('./config.json');
var fm = require('front-matter');
var partialsDir = __dirname + '/partials/';
var partials = {};

fs.readdirSync(partialsDir)
  .filter(filename => filename.match(/\.mustache$/))
  .forEach(filename => {
    partials[path.basename(filename, '.mustache')] = fs.readFileSync(partialsDir + filename, 'UTF-8');
  });
var input = '';

process.stdin.on('data', buf => {
  input += buf;
});
process.stdin.on('end', () => {
  let data = fm(input);
  let attributes = Object.assign({}, config, data.attributes);
  process.stdout.write(mustache.render(data.body, attributes, partials));
});

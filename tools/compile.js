'use strict';

var mustache = require('mustache');

var config = require('../config.json');
var fm = require('front-matter');
var partials = require('./get-partials');

var input = '';

require('./process-input')(input => {
  let data = fm(input);
  let attributes = Object.assign({}, config, data.attributes);
  return mustache.render(data.body, attributes, partials);
});

'use strict';

var mustache = require('mustache');
var marked = require('marked');
var fs = require('fs');

var config = require('../config');
var fm = require('front-matter');
var partials = require('./get-partials');
var template = fs.readFileSync(__dirname + '/markdown.mustache', 'UTF-8');

var input = '';

require('./process-input')(input => {
  let data = fm(input);
  let content = marked(data.body);
  let attributes = Object.assign({ content, stylesheets: [{ url: '/css/light.css?' + config.revision }] }, config, data.attributes);
  return mustache.render(template, attributes, partials);
});

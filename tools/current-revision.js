'use strict';

var spawnSync = require('child_process').spawnSync;
var revision = spawnSync('git', ['log', '-1', '--format=%h'])
  .stdout
  .toString()
  .replace(/\n/g, '');

module.exports = revision;

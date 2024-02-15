'use strict';

const projectBrowser = require('..');
const assert = require('assert').strict;

assert.strictEqual(projectBrowser(), 'Hello from projectBrowser');
console.info('projectBrowser tests passed');

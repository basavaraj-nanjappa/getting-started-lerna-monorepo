'use strict';

const projectCreator = require('..');
const assert = require('assert').strict;

assert.strictEqual(projectCreator(), 'Hello from projectCreator');
console.info('projectCreator tests passed');

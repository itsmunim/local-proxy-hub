#!/usr/bin/env node

const shell = require('shelljs');

let code = shell.exec('npm start').code;

if (code !== 0) {
  console.error('Failed to start the server.');
}

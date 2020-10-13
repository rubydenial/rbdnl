#!/usr/bin/env node
const pkgJSON = require('./package');
const welcome = require('cli-welcome');

welcome({
  title: pkgJSON.name,
  tagLine:  'Get to know Rubydenial',
  version: pkgJSON.version,
  description: pkgJSON.description,
  bgColor: `#FADC00`,
  color: `#000000`,
  bold: true,
  clear: true,
});

console.log(`
Rubydenial 
Rb-Dnl

My test app

🐜 -Bug fixing;
😎 -Joy results;

`);


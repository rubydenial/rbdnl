#!/usr/bin/env node
const pkgJSON = require('./package');
const welcome = require('cli-welcome');
const chalk = require('chalk');
const log = console.log;

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

log(`
${chalk.bgBlue.hex('#25d366').bold(' Rubydenial ')} 
Rb-Dnl

${chalk.hex('#00a98f').bold('My test app')}

🐜 ${chalk.italic('-Bug fixing;')}
😎 -Joy results;

`);


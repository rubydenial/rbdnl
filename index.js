#!/usr/bin/env node
const pkgJSON = require('./package');
const welcome = require('cli-welcome');
const chalk = require('chalk');
const log = console.log;
const ls = require('log-symbols');

//alerts
const success = chalk.green;
const info = chalk.blue;
const warning = chalk.hex('#ffd400');
const error = chalk.red.bold;

welcome({
  title: pkgJSON.name,
  tagLine: 'Get to know Rubydenial',
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

log(`
${ls.success} ${success(' SUCCESS ')}: Thank for checking out my CLI.
${ls.info} ${info(' INFO ')}: I'm creating a course on NodeCLI.com
${ls.warning} ${warning(' WARNING ')}: Please don't copy me. Be yourself.
${ls.error} ${error(' ERROR ')}: I'm on vacation. Contact me next week. 
`);


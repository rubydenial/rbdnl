const chalk = require('chalk');
const ls = require('log-symbols');
const log = console.log;

//alerts
const success = chalk.green;
const error = chalk.red.bold;
const warning = chalk.yellow;
const info = chalk.blue;


module.exports = (options) => {
  const defaultOption = {
    type: 'error',
    msg: 'You forgot to define all options.',
    name: ''
  };
  const opts = {...defaultOption, ...options};
  const {type, msg, name} = opts;
  const nameShow = ` ${name ? name : type.toUpperCase()} `;

  // log(`WORKING !!! ${type} = ${msg}`);

  if (type === 'success') {
    log(`\n${ls.success} ${success.inverse(nameShow)} ${success(msg)}\n`);
  }

  if (type === 'error') {
    log(`\n${ls.error} ${error.inverse(nameShow)} ${error(msg)}\n`);
  }


  if (type === 'warning') {
    log(`\n${ls.warning} ${warning.inverse(nameShow)} ${warning(msg)}\n`);
  }

  if (type === 'info') {
    log(`\n${ls.warning} ${info.inverse(nameShow)} ${info(msg)}\n`);
  }

};
const validator = require('validator');
const getNotes = require('./notes.js');
const chalk = require('chalk');

const msg = getNotes()
console.log(msg);
console.log(validator.isEmail('ahmad@gmail.com'));
console.log(chalk.green.inverse.bold('SUCCESS!'));
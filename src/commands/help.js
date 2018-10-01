'use strict';

const version = require(`./version.js`);
const author = require(`./author.js`);
const description = require(`./description.js`);
const license = require(`./license.js`);
require(`colors`);

const commands = [version, author, description, license];

module.exports = {
  name: `help`,
  description: `Показывает список доступных команд`,
  execute() {
    console.log(`--${this.name.grey} - ${this.description.green}`);
    commands.forEach((elem) => {
      console.log(`--${elem.name.grey} - ${elem.description.green}`);
    });
  }
};

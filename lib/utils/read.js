const chalk = require('chalk')
const fs = require('fs')

module.exports = function read (path) {
  try {
    return JSON.parse(fs.readFileSync(path))
  } catch (error) {
    console.log(chalk.red(error))
  }
}

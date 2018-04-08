const chalk = require('chalk')
const fs = require('fs')

module.exports = function write (path, data) {
  fs.writeFileSync(path, JSON.stringify(data), err => {
    if (err) {
      console.log(chalk.red(err))
    }
  })
}

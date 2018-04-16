const chalk = require('chalk')

const { dataPath, exportPath } = require('./../config')
const { Collection } = require('./Collection')
const read = require('./utils/read')
const write = require('./utils/write')

module.exports = function () {
  const collection = new Collection(read(dataPath))
  write(exportPath, collection)
  console.log()
  console.log(`   ✔ Exported collection to ${chalk.yellow(exportPath)}`)
  console.log()
}

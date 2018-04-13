const fs = require('fs')

const { Collection } = require('./Collection')
const { dataPath } = require('./../config')
const write = require('./utils/write')

module.exports = function () {
  if (!fs.existsSync(dataPath)) {
    const collection = new Collection()
    write(dataPath, collection)
    return false
  } else {
    return true
  }
}

const path = require('path')
const os = require('os')

const dataPath = path.resolve(os.homedir(), 'jin.json')

module.exports = {
  dataPath
}

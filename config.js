const path = require('path')
const os = require('os')

const fileName = 'jin.json'
const dataPath = path.resolve(os.homedir(), fileName)
const exportPath = path.resolve(process.cwd(), fileName)

module.exports = {
  dataPath,
  exportPath
}

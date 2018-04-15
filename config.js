const path = require('path')
const os = require('os')

const fileName = 'jin.json'
const dataPath =
  process.env === 'test'
    ? path.resolve(process.cwd(), '__tests__', 'test.json')
    : path.resolve(os.homedir(), fileName)
const exportPath = path.resolve(process.cwd(), fileName)

module.exports = {
  dataPath,
  exportPath
}

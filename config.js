const path = require('path')
const os = require('os')

const fileName = 'jin.json'
const dataPath =
  process.env.NODE_ENV === 'test'
    ? path.resolve(__dirname, '__tests__', 'test.json')
    : path.resolve(os.homedir(), fileName)
const exportPath = path.resolve(process.cwd(), fileName)

module.exports = {
  dataPath,
  exportPath
}

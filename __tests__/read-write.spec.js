const fs = require('fs')
const path = require('path')
const write = require('./../lib/utils/write')
const read = require('./../lib/utils/read')

const dataPath = path.resolve(process.cwd(), '__tests__', 'test.json')

afterAll(() => {
  fs.unlinkSync(dataPath)
})

test('writes "hello world"', () => {
  const data = {
    test: 'hello world'
  }
  write(dataPath, data)
  expect(fs.existsSync(dataPath)).toBeTruthy()
})

test('read "hello world"', () => {
  const returnData = read(dataPath)
  expect(returnData.test).toBe('hello world')
})

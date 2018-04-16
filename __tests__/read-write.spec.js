const fs = require('fs')
const write = require('./../lib/utils/write')
const read = require('./../lib/utils/read')
const { dataPath } = require('./../config')

afterAll(() => {
  fs.unlinkSync(dataPath)
})

describe('read and write utilities', () => {
  test('writes "bar"', () => {
    const data = {
      foo: 'bar'
    }
    write(dataPath, data)
    expect(fs.existsSync(dataPath)).toBeTruthy()
  })

  test('read "bar"', () => {
    const returnData = read(dataPath)
    expect(returnData.foo).toBe('bar')
  })
})

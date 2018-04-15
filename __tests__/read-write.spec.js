const fs = require('fs')
const path = require('path')
const write = require('./../lib/utils/write')
const read = require('./../lib/utils/read')
const { dataPath } = require('./../config')

describe('read and write utilities', () => {
  afterAll(() => {
    fs.unlinkSync(dataPath)
  })

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

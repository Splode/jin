const fs = require('fs')
const _ = require('lodash')
const execa = require('execa')
const read = require('./../lib/utils/read')
const { dataPath } = require('./../config')


describe('add actions', () => {
  test('createNotebook should add a notebook by name', async () => {
    const result = await execa
      .stdout('bin/jin.js', ['add', 'foobar'])
      .then(result => result)
    const collection = read(dataPath)
    const notebook = _.find(collection.notebooks, ['name', 'foobar'])
    expect(result).toBe('\n   ✔ Created new notebook foobar.')
    expect(notebook.name).toBe('foobar')
  })
  
  test('createNote should add a note "foo" to the notebook "foobar"', async () => {
    const result = await execa
      .stdout('bin/jin.js', ['add', 'foobar', 'foo'])
      .then(result => result)
    const collection = read(dataPath)
    const notebook = _.find(collection.notebooks, ['name', 'foobar'])
    expect(result).toBe('\n   ✔ Added foo to foobar.')
    expect(notebook.notes[0].note).toBe('foo')
  })
})

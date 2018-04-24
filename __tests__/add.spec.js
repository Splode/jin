const _ = require('lodash')
const execa = require('execa')
const read = require('./../lib/utils/read')
const { dataPath } = require('./../config')


describe('add actions', () => {
  test('adding a notebook "foobar" by name', async () => {
    const result = await execa
      .stdout('bin/jin.js', ['add', 'foobar'])
      .then(result => result)
    const collection = read(dataPath)
    const notebook = _.find(collection.notebooks, ['name', 'foobar'])
    expect(result).toBe('\n   ✔ Created new notebook foobar.\n')
    expect(notebook.name).toBe('foobar')
  })

  test('duplicate notebook "foobar" should not be created', async () => {
    const result = await execa
      .stdout('bin/jin.js', ['add', 'foobar'])
      .then(result => result)
    const collection = read(dataPath)
    expect(result).toBe('\n    ! Notebook foobar already exists.\n')
  })
  
  test('adding a note "foo" to the notebook "foobar"', async () => {
    const result = await execa
      .stdout('bin/jin.js', ['add', 'foobar', 'foo'])
      .then(result => result)
    const collection = read(dataPath)
    const notebook = _.find(collection.notebooks, ['name', 'foobar'])
    expect(result).toBe('\n   ✔ Added foo to foobar.\n')
    expect(notebook.notes[0].note).toBe('foo')
    expect(notebook.modified).not.toBe(notebook.created)
  })

  test('adding a note "wizzbang" to a new notebook "fizzle"', async () => {
    const result = await execa
      .stdout('bin/jin.js', ['add', 'fizzle', 'wizzbang'])
      .then(result => result)
    const collection = read(dataPath)
    const notebook = _.find(collection.notebooks, ['name', 'fizzle'])
    expect(result).toBe('\n   ✔ Added wizzbang to new notebook fizzle.\n')
    expect(notebook.notes[0].note).toBe('wizzbang')
  })
})

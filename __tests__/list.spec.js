const execa = require('execa')

describe('list actions', () => {
  beforeAll(() => {
    return execa('bin/jin.js', ['add', 'list-foo', 'bar']).then(result => result)
  })

  test('list returns a list of notebooks', async () => {
    const result = await execa
      .stdout('bin/jin.js', ['list'])
      .then(result => result)
      expect(result).toEqual(
        expect.stringContaining('list-foo')
      )
  })
  
  test('list returns a list of notes', async () => {
    const result = await execa
      .stdout('bin/jin.js', ['list', 'list-foo'])
      .then(result => result)
      expect(result).toEqual(
        expect.stringContaining('bar')
      )
  })
})

const { Note, Notebook, Collection } = require('./../lib/Collection')

const note = new Note('foo')
const emptyNotebook = new Notebook('test-notebook')
const notebook = new Notebook({
  created: 'date-created',
  name: 'test-notebook',
  notes: [
    note
  ]
})
const emptyCollection = new Collection()
const collection = new Collection({
  created: 'date-created',
  modified: 'date-mod',
  notebooks: [
    notebook
  ]
})

// note

test('note is an instance of Note', () => {
  expect(note).toBeInstanceOf(Note)
})

test('Note is an object with a value of "foo"', () => {
  expect(note.created).not.toBeUndefined()
  expect(note.note).toBe('foo')
})

// emptyNotebook

test('emptyNotebook is an instance of Notebook', () => {
  expect(emptyNotebook).toBeInstanceOf(Notebook)
})

test('emptyNotebook has no undefined values', () => {
  expect(emptyNotebook.created).not.toBeUndefined()
  expect(emptyNotebook.name).not.toBeUndefined()
  expect(emptyNotebook.notes).not.toBeUndefined()
})

// notebook

test('notebook is an instance of Notebook', () => {
  expect(notebook).toBeInstanceOf(Notebook)
})

test('notebook has no undefined values', () => {
  expect(notebook.created).not.toBeUndefined()
  expect(notebook.name).not.toBeUndefined()
  expect(notebook.notes).not.toBeUndefined()
})

test('notebook contains a note', () => {
  expect(notebook.notes[0]).toMatchObject(note)
})

test('get note from notebook by index', () => {
  expect(notebook.getNote(0)).toMatchObject(note)
})

test('replace note in notebook at index', () => {
  notebook.setNote(new Note('bar'), 0)
  const updatedNote = notebook.notes[0]
  expect(updatedNote).toBeInstanceOf(Note)
  expect(updatedNote.note).toBe('bar')
})

test('remove note from notebook at index', () => {
  notebook.destroyNote(0)
  expect(notebook.notes.length).toBe(0)
})

// emptyCollection

test('emptyCollection is an instance of Collection', () => {
  expect(emptyCollection).toBeInstanceOf(Collection)
})

test('emptyCollection has no undefined values', () => {
  expect(emptyCollection.created).not.toBeUndefined()
  expect(emptyCollection.modified).not.toBeUndefined()
  expect(emptyCollection.notebooks).not.toBeUndefined()
})

// collection

test('collection is an instance of Collection', () => {
  expect(collection).toBeInstanceOf(Collection)
})

test('collection has no undefined values', () => {
  expect(collection.created).not.toBeUndefined()
  expect(collection.modified).not.toBeUndefined()
  expect(collection.notebooks).not.toBeUndefined()
})

test('collection contains a notebook', () => {
  expect(collection.notebooks[0]).toMatchObject(notebook)
})

test('get notebook from collection by name', () => {
  expect(collection.getNotebook('test-notebook')).toBeInstanceOf(Notebook)
})

test('get notebook index from collection by name', () => {
  expect(collection.getNotebookIndex('test-notebook')).toBe(0)
})

test('update modified property of collection', () => {
  collection.updateModDate()
  expect(collection.modified).not.toBeUndefined()
})

test('remove notebook from collection by index', () => {
  collection.destroyNotebook(0)
  expect(collection.notebooks).toHaveLength(0)
})

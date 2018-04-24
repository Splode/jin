const { Note, Notebook, Collection } = require('./../lib/Collection')

const noteFromString = new Note('foo')
const noteFromObject = new Note({
  created: 'dated-created',
  modified: 'date-modified',
  note: 'bizbaz'
})

const notebookFromString = new Notebook('notebook-from-string')
const notebookFromObject = new Notebook({
  created: 'date-created',
  modified: 'date-modified',
  name: 'notebook-from-object',
  notes: [
    noteFromString
  ]
})

const emptyCollection = new Collection()
const collection = new Collection({
  created: 'date-created',
  modified: 'date-modified',
  notebooks: [
    notebookFromObject
  ]
})

// note

test('note is an instance of Note', () => {
  expect(noteFromString).toBeInstanceOf(Note)
})

test('note has no undefined values', () => {
  expect(noteFromString.created).not.toBeUndefined()
  expect(noteFromString.modified).not.toBeUndefined()
  expect(noteFromString.note).not.toBeUndefined()
})

test('Note is an object with a value of "foo"', () => {
  expect(noteFromString.created).not.toBeUndefined()
  expect(noteFromString.note).toBe('foo')
})

test('note from object is an instance of Note', () => {
  expect(noteFromObject).toBeInstanceOf(Note)
})

test('note from object has no undefined values', () => {
  expect(noteFromObject.created).not.toBeUndefined()
  expect(noteFromObject.modified).not.toBeUndefined()
  expect(noteFromObject.note).not.toBeUndefined()
})

test('note from object is an object with a value of "bizbaz"', () => {
  expect(noteFromObject.created).not.toBeUndefined()
  expect(noteFromObject.note).toBe('bizbaz')
})

test('set note contents to "fizzbang"', () => {
  noteFromObject.setNote('fizzbang')
  expect(noteFromObject.note).toBe('fizzbang')
})

// notebookFromString

test('notebookFromString is an instance of Notebook', () => {
  expect(notebookFromString).toBeInstanceOf(Notebook)
})

test('notebookFromString has no undefined values', () => {
  expect(notebookFromString.created).not.toBeUndefined()
  expect(notebookFromString.modified).not.toBeUndefined()
  expect(notebookFromString.name).not.toBeUndefined()
  expect(notebookFromString.notes).not.toBeUndefined()
})

// notebookFromObject

test('notebookFromObject is an instance of Notebook', () => {
  expect(notebookFromObject).toBeInstanceOf(Notebook)
})

test('notebookFromObject has no undefined values', () => {
  expect(notebookFromObject.created).not.toBeUndefined()
  expect(notebookFromObject.modified).not.toBeUndefined()
  expect(notebookFromObject.name).not.toBeUndefined()
  expect(notebookFromObject.notes).not.toBeUndefined()
})

test('notebookFromObject contains a note', () => {
  expect(notebookFromObject.notes[0]).toMatchObject(noteFromString)
})

test('get note from notebookFromObject by index', () => {
  expect(notebookFromObject.getNote(0)).toMatchObject(noteFromString)
})

test('add a new note to notebookFromObject', () => {
  notebookFromObject.addNote(notebookFromObject)
  expect(notebookFromObject.notes.length).toBeGreaterThan(1)
})

test('replace note in notebookFromObject at index', () => {
  notebookFromObject.setNote(new Note('bar'), 0)
  const updatedNote = notebookFromObject.notes[0]
  expect(updatedNote).toBeInstanceOf(Note)
  expect(updatedNote.note).toBe('bar')
})

test('remove note from notebookFromObject at index', () => {
  notebookFromObject.destroyNote(0)
  expect(notebookFromObject.notes.length).toBe(1)
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
  expect(collection.notebooks[0]).toMatchObject(notebookFromObject)
})

test('get notebook from collection by name', () => {
  expect(collection.getNotebook('notebook-from-object')).toBeInstanceOf(Notebook)
})

test('get notebook index from collection by name', () => {
  expect(collection.getNotebookIndex('notebook-from-object')).toBe(0)
})

test('add a new notebook to the collection', () => {
  const notebook = new Notebook('bamboozle')
  collection.addNotebook(notebook)
  expect(collection.getNotebookIndex(notebook.name)).not.toBeFalsy()
})

test('replace a new notebook in the collection', () => {
  const oldNotebookName = 'bamboozle'
  const notebook = new Notebook('hornswaggle')
  collection.setNotebook(collection.getNotebookIndex(oldNotebookName), notebook)
  expect(collection.getNotebookIndex(notebook.name)).not.toBe(-1)
  expect(collection.getNotebookIndex(oldNotebookName)).toBe(-1)
})

test('update modified property of collection', () => {
  collection.updateModDate()
  expect(collection.modified).not.toBeUndefined()
})

test('remove notebook from collection by index', () => {
  collection.destroyNotebook(0)
  expect(collection.getNotebookIndex('notebook-from-object')).toBe(-1)
})

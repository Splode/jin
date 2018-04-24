const _ = require('lodash')
const moment = require('moment')

class Note {
  constructor (opts) {
    if (typeof (opts) === 'string') {
      this.created = moment().format('MMMM Do YYYY, h:mm:ss a')
      this.modified = moment().format('MMMM Do YYYY, h:mm:ss a')
      this.note = opts
    } else if (typeof (opts) === 'object') {
      this.created = opts.created
      this.modified = opts.modified
      this.note = opts.note
    }
  }

  setNote (contents) {
    this.note = contents
    this.updateModDate()
  }

  updateModDate () {
    this.modified = moment().format('MMMM Do YYYY, h:mm:ss a')
  }
}

class Notebook {
  constructor (opts) {
    if (typeof (opts) === 'string') {
      this.created = moment().format('MMMM Do YYYY, h:mm:ss a')
      this.modified = moment().format('MMMM Do YYYY, h:mm:ss a')
      this.name = opts
      this.notes = []
    } else if (typeof (opts) === 'object') {
      this.created = opts.created
      this.modified = opts.modified
      this.name = opts.name
      this.notes = opts.notes
    }
  }

  addNote (note) {
    this.notes.push(note)
    this.updateModDate()
  }

  getNote (index) {
    return this.notes[index]
  }

  destroyNote (index) {
    this.updateModDate()
    return _.pullAt(this.notes, index)
  }

  setNote (note, index) {
    this.notes[index] = note
    this.updateModDate()
  }

  updateModDate () {
    this.modified = moment().format('MMMM Do YYYY, h:mm:ss a')
  }
}

class Collection {
  constructor (self) {
    this.created = self ? self.created : moment().format('MMMM Do YYYY, h:mm:ss a')
    this.modified = self ? self.modified : moment().format('MMMM Do YYYY, h:mm:ss a')
    this.notebooks = self ? self.notebooks : []
  }

  addNotebook (notebook) {
    this.notebooks.push(notebook)
    this.updateModDate()
  }

  getNotebook (notebookName) {
    return _.find(this.notebooks, ['name', notebookName])
  }

  getNotebookIndex (notebookName) {
    return _.findIndex(this.notebooks, ['name', notebookName])
  }

  setNotebook (notebookIndex, notebook) {
    this.notebooks[notebookIndex] = notebook
    this.updateModDate()
  }

  updateModDate () {
    this.modified = moment().format('MMMM Do YYYY, h:mm:ss a')
  }

  destroyNotebook (index) {
    this.updateModDate()
    return _.pullAt(this.notebooks, index)
  }
}

module.exports = {
  Note,
  Notebook,
  Collection
}

const _ = require('lodash')
const moment = require('moment')

class Note {
  constructor (note) {
    this.created = moment().format('MMMM Do YYYY, h:mm:ss a')
    this.note = note
  }
}

class Notebook {
  constructor (opts) {
    if (typeof (opts) === 'string') {
      this.created = moment().format('MMMM Do YYYY, h:mm:ss a')
      this.name = opts
      this.notes = []
    } else if (typeof (opts) === 'object') {
      this.created = opts.created
      this.name = opts.name
      this.notes = opts.notes
    }
  }

  destroyNote (index) {
    return _.pullAt(this.notes, index)
  }
}

class Collection {
  constructor (self) {
    this.created = self ? self.created : moment().format('MMMM Do YYYY, h:mm:ss a')
    this.modified = self ? self.modified : moment().format('MMMM Do YYYY, h:mm:ss a')
    this.notebooks = self ? self.notebooks : []
  }

  getNotebook (notebookName) {
    return _.find(this.notebooks, ['name', notebookName])
  }

  getNotebookIndex (notebookName) {
    return _.findIndex(this.notebooks, ['name', notebookName])
  }

  updateModDate () {
    this.modified = moment().format('MMMM Do YYYY, h:mm:ss a')
  }

  destroyNotebook (index) {
    return _.pullAt(this.notebooks, index)
  }
}

module.exports = {
  Note,
  Notebook,
  Collection
}

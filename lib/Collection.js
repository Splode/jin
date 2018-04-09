const _ = require('lodash')
const moment = require('moment')

class Note {
  constructor (note) {
    this.created = moment().format('MMMM Do YYYY, h:mm:ss a')
    this.note = note
  }
}

class Notebook {
  constructor (name, noteLs) {
    // TODO: setup constructor to create from json
    this.created = moment().format('MMMM Do YYYY, h:mm:ss a')
    this.name = name
    this.notes = noteLs || []
  }

  // TODO: pull note by index
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

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
    this.created = moment().format('MMMM Do YYYY, h:mm:ss a')
    this.name = name
    this.notes = noteLs || []
  }
}

class Collection {
  constructor (self) {
    this.created = self.created || moment().format('MMMM Do YYYY, h:mm:ss a')
    this.modified = self.modified || moment().format('MMMM Do YYYY, h:mm:ss a')
    this.notebooks = self.notebooks || []
  }

  getNotebook (notebookName) {
    return _.find(this.notebooks, ['name', notebookName])
  }

  updateModDate () {
    this.modified = moment().format('MMMM Do YYYY, h:mm:ss a')
  }
}

module.exports = {
  Note,
  Notebook,
  Collection
}

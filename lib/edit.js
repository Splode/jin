// const fs = require('fs')
// const chalk = require('chalk')

const { Notebook, Collection } = require('./Collection')
const { dataPath } = require('./../config')
const read = require('./utils/read')

module.exports = {
  editNote (notebookName, noteIndex) {
    const collection = new Collection(read(dataPath))
    const notebook = new Notebook(collection.getNotebook(notebookName))
    console.log(notebook.getNote(noteIndex))
  }
}

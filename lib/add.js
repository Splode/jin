const fs = require('fs')
const chalk = require('chalk')

const { Note, Notebook, Collection } = require('./Collection')
const { dataPath } = require('./../config')
const read = require('./utils/read')
const write = require('./utils/write')

module.exports = {
  createNotebook (notebookName) {
    if (!fs.existsSync(dataPath)) {
      const collection = new Collection()
      write(dataPath, collection)
    }

    const collection = new Collection(read(dataPath))

    if (!collection.getNotebook(notebookName)) {
      const notebook = new Notebook(notebookName)
      collection.notebooks.push(notebook)

      collection.updateModDate()
      write(dataPath, collection)

      console.log()
      console.log('Created new notebook ' + chalk.blue(notebookName) + '.')
    } else {
      console.log()
      console.log(
        'Notebook ' + chalk.blue(notebookName) + chalk.white(' already exists.')
      )
    }
  },

  createNote (notebookName, noteName) {
    if (!fs.existsSync(dataPath)) {
      const collection = new Collection()
      write(dataPath, collection)
    }

    const collection = new Collection(read(dataPath))
    const note = new Note(noteName)
    let notebook = collection.getNotebook(notebookName)

    if (!notebook) {
      // const notes = [note]
      notebook = new Notebook(notebookName)
      notebook.notes.push(note)
      collection.notebooks.push(notebook)

      console.log()
      console.log(
        'Added ' +
          chalk.green(noteName) +
          ' to new notebook ' +
          chalk.blue(notebookName) +
          '.'
      )
    } else {
      notebook.notes.push(note)

      console.log()
      console.log(
        'Added ' +
          chalk.green(noteName) +
          ' to ' +
          chalk.blue(notebookName) +
          '.'
      )
    }
    collection.updateModDate()
    write(dataPath, collection)
  }
}

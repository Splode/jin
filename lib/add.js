const chalk = require('chalk')

const { Note, Notebook, Collection } = require('./Collection')
const { dataPath } = require('./../config')
const read = require('./utils/read')
const write = require('./utils/write')

module.exports = {
  createNotebook (notebookName) {
    const collection = new Collection(read(dataPath))

    if (!collection.getNotebook(notebookName)) {
      const notebook = new Notebook(notebookName)
      collection.notebooks.push(notebook)

      collection.updateModDate()
      write(dataPath, collection)

      console.log()
      console.log(`   ✔ Created new notebook ${chalk.magenta(notebookName)}.`)
    } else {
      console.log()
      console.log(chalk.yellow(`    ! Notebook ${chalk.magenta(notebookName)} already exists.`))
    }
  },

  createNote (notebookName, noteName) {
    const collection = new Collection(read(dataPath))
    const note = new Note(noteName)
    let notebook = collection.getNotebook(notebookName)

    if (!notebook) {
      notebook = new Notebook(notebookName)
      notebook.notes.push(note)
      collection.notebooks.push(notebook)

      console.log()
      console.log(`   ✔ Added ${chalk.green(noteName)} to new notebook ${chalk.magenta(notebookName)}.`)
    } else {
      notebook.notes.push(note)

      console.log()
      console.log(`   ✔ Added ${chalk.green(noteName)} to ${chalk.magenta(notebookName)}.`)
    }
    collection.updateModDate()
    write(dataPath, collection)
  }
}

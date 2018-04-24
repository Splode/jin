const chalk = require('chalk')

const { Notebook, Collection } = require('./Collection')
const { dataPath } = require('./../config')
const read = require('./utils/read')
const write = require('./utils/write')

module.exports = {
  removeNoteboook (notebookName, force) {
    const collection = new Collection(read(dataPath))
    const notebook = collection.getNotebook(notebookName)
    const notebookIndex = collection.getNotebookIndex(notebookName)

    if (notebookIndex < 0) {
      console.log()
      console.log(chalk.yellow(`    ! Notebook ${chalk.magenta(notebookName)} not found.`))
      console.log()
    } else if (notebook.notes.length > 0 && !force) {
      console.log()
      console.log('   Notebook ' + chalk.magenta(notebookName) + chalk.white(' is not empty.'))
      console.log()
      console.log('   Use the ' + chalk.green('--force') + ' flag to force remove.')
      console.log('   See ' + chalk.green('jin rm --help') + ' for more information.')
      console.log()
    } else if (notebook.notes.length <= 0 || force) {
      collection.destroyNotebook(notebookIndex)
      write(dataPath, collection)
      console.log()
      console.log('   ✔ Removed ' + chalk.magenta(notebookName) + ' notebook.')
      console.log()
    }
  },

  removeNote (notebookName, index) {
    const collection = new Collection(read(dataPath))
    const notebook = new Notebook(collection.getNotebook(notebookName))
    notebook.destroyNote(index)
    collection.setNotebook(collection.getNotebookIndex(notebookName), notebook)
    write(dataPath, collection)
    console.log()
    console.log(`   ✔ Removed note at index ${chalk.green(index)} from ${chalk.magenta(notebookName)} notebook.`)
    console.log()
  }
}

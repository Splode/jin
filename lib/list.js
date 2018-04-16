const chalk = require('chalk')

const { Collection } = require('./Collection')
const { dataPath } = require('./../config')
const read = require('./utils/read')

module.exports = {
  listNotes (notebookName) {
    const collection = new Collection(read(dataPath))
    const notebook = collection.getNotebook(notebookName)
    if (!notebook) {
      console.log()
      console.log(chalk.yellow(`    ! Could note find a notebook named ${chalk.magenta(notebookName)}.`))
      process.exit(1)
    }
    console.log()
    console.log(`   ${chalk.magenta(notebook.name)} Notes`)
    console.log(chalk.gray('   ----------------'))
    if (notebook.notes.length <= 0) {
      console.log(chalk.gray('    No notes.'))
    }
    notebook.notes.forEach((note, i) => {
      console.log(`   ${chalk.gray(i)}   ${chalk.green(note.note)}`)
    })
  },

  listNotebooks () {
    const collection = read(dataPath)
    console.log()
    console.log('   Notebooks')
    console.log(chalk.gray('   ----------------'))
    collection.notebooks.forEach((notebook, i) => {
      console.log(`   ${chalk.gray(i)}   ${chalk.magenta(notebook.name)}`)
    })
  }
}

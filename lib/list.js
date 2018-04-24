const chalk = require('chalk')

const { Collection } = require('./Collection')
const { dataPath } = require('./../config')
const read = require('./utils/read')

module.exports = {
  listNotes (notebookName, opts) {
    const collection = new Collection(read(dataPath))
    const notebook = collection.getNotebook(notebookName)
    if (!notebook) {
      console.log()
      console.log(chalk.yellow(`    ! Could not find a notebook named ${chalk.magenta(notebookName)}.`))
      console.log()
      process.exit(1)
    }
    console.log()
    console.log(`   ${chalk.magenta(notebook.name)} Notes`)
    console.log(chalk.gray('   ----------------'))
    if (notebook.notes.length <= 0) {
      console.log(chalk.gray('   No notes.'))
    } else if (opts.long) {
      notebook.notes.forEach((note, i) => {
        let modified = note.modified
        if (!modified) {
          modified = note.created
        }
        console.log(`   ${chalk.gray(i)}   ${chalk.green(note.note)}`)
        console.log(`       created     ${note.created}`)
        console.log(`       modified    ${modified}`)
        console.log()
      })
    } else {
      notebook.notes.forEach((note, i) => {
        console.log(`   ${chalk.gray(i)}   ${chalk.green(note.note)}`)
      })
    }
    console.log()
  },

  listNotebooks (opts) {
    const collection = read(dataPath)
    console.log()
    if (collection.notebooks.length <= 0) {
      console.log(chalk.yellow('   ! No notebooks found.'))
      console.log()
      console.log(`   Add some notes with ${chalk.green(`jin add <notebook> [note]`)}.`)
    } else {
      console.log('   Notebooks')
      console.log(chalk.gray('   ----------------'))
      if (opts.long) {
        collection.notebooks.forEach((notebook, i) => {
          let modified = notebook.modified
          if (!modified) {
            modified = notebook.created
          }
          console.log(`   ${chalk.gray(i)}   ${chalk.magenta(notebook.name)}`)
          console.log(`       notes       ${notebook.notes.length}`)
          console.log(`       created     ${notebook.created}`)
          console.log(`       modified    ${modified}`)
          console.log()
        })
      } else {
        collection.notebooks.forEach((notebook, i) => {
          console.log(`   ${chalk.gray(i)}   ${chalk.magenta(notebook.name)}`)
        })
      }
    }
    console.log()
  }
}

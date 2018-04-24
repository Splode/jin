const chalk = require('chalk')
const prompts = require('prompts')

const { Note, Notebook, Collection } = require('./Collection')
const { dataPath } = require('./../config')
const read = require('./utils/read')
const write = require('./utils/write')

module.exports = {
  async editNote (notebookName, noteIndex) {
    const collection = new Collection(read(dataPath))
    const notebook = new Notebook(collection.getNotebook(notebookName))

    if (!collection.getNotebook(notebookName)) {
      console.log()
      console.log(
        `${chalk.red(`    ! Could not find a notebook named`)} ${chalk.yellow(
          notebookName
        )}${chalk.red(`.`)}`
      )
      console.log()
      process.exit(1)
    } else if (notebook.notes.length <= 0) {
      console.log()
      console.log(
        `${chalk.red(`    ! Notebook does not contain any notes.`)}`)
      console.log()
      process.exit(1)
    }

    const note = new Note(notebook.getNote(noteIndex))

    if (!notebook.getNote(noteIndex)) {
      console.log()
      console.log(
        `${chalk.red(`    ! Could not find a note at index`)} ${chalk.yellow(noteIndex)}`)
      console.log()
      process.exit(1)
    }

    console.log()
    const response = await prompts({
      type: 'text',
      name: 'note',
      message: 'Edit the following note:',
      initial: note.note
    })

    note.setNote(response.note)
    notebook.setNote(note, noteIndex)
    collection.setNotebook(collection.getNotebookIndex(notebookName), notebook)
    write(dataPath, collection)

    console.log()
    console.log(
      `   ✔ Replaced ${chalk.yellow(note.note)} with ${chalk.green(response.note)} in the ${chalk.magenta(notebookName)} notebook.`
    )
    console.log()
  }
}

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
        `${chalk.red(`Could not find a notebook named`)} ${chalk.yellow(
          notebookName
        )}${chalk.red(`.`)}`
      )
      process.exit(1)
    } else if (notebook.notes.length <= 0) {
      console.log()
      console.log(
        `${chalk.red(`Notebook does not contain any notes.`)}`)
      process.exit(1)
    }

    const note = notebook.getNote(noteIndex)

    if (!note) {
      console.log()
      console.log(
        `${chalk.red(`Could not find note at index`)} ${chalk.yellow(noteIndex)}`)
      process.exit(1)
    }

    console.log()
    const response = await prompts({
      type: 'text',
      name: 'note',
      message: 'Edit the following note:',
      initial: note.note
    })

    notebook.setNote(new Note(response.note), noteIndex)
    collection.updateModDate()
    write(dataPath, collection)

    console.log()
    console.log(
      `Replaced ${chalk.yellow(note.note)} with ${chalk.green(response.note)} in the ${chalk.blue(notebookName)} notebook.`
    )
  }
}

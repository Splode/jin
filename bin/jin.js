#!/usr/bin/env node

const pckg = require('./../package.json')
const program = require('commander')

const add = require('./../lib/add')
const list = require('./../lib/list')

program.version(pckg.version, '-v, --version')
program.usage('<command> [notebook] [note]')

program
  .command('add <notebook> [note]')
  .alias('a')
  .description(
    'Add a new note to a notebook. Creates the specified notebook if it does not already exist.'
  )
  .action((notebook, note) => {
    if (!note) {
      add.createNotebook(notebook)
    } else {
      add.createNote(notebook, note)
    }
  })

program
  .command('list [notebook]')
  .alias('ls')
  .description('List the notes for a given notebook. Lists all notebooks.')
  .action(notebook => {
    if (!notebook) {
      list.listNotebooks()
    } else {
      list.listNotes(notebook)
    }
  })

program.parse(process.argv)

if (process.argv.length === 2) {
  program.outputHelp()
}

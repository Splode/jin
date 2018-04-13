#!/usr/bin/env node

const pckg = require('./../package.json')
const program = require('commander')

const check = require('./../lib/check')
const add = require('./../lib/add')
const list = require('./../lib/list')
const destroy = require('./../lib/destroy')
const edit = require('./../lib/edit')
const exp = require('./../lib/export')

program.version(pckg.version, '-v, --version')
program.usage('<command> [notebook] [note]')

program
  .command('add <notebook> [note]')
  .alias('a')
  .description(
    'Add a new note to a notebook. Creates the specified notebook if it does not already exist.'
  )
  .action((notebook, note) => {
    check()
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
    check()
    if (!notebook) {
      list.listNotebooks()
    } else {
      list.listNotes(notebook)
    }
  })

program
  .command('edit <notebook> <index>')
  .alias('ed')
  .description('Edit the note at the given index of a notebook.')
  .action((notebook, index) => {
    check()
    edit.editNote(notebook, index)
  })

program
  .command('export')
  .alias('exp')
  .description('Export a copy of the notebook collection to the current directory.')
  .action(() => {
    check()
    exp()
  })

program
  .command('remove <notebook> [index]')
  .alias('rm')
  .option('-f, --force', 'Force delete notebook non-empty notebook.')
  .description('Permanently delete a note from the specified notebook. Permanently delete the specified notebook.')
  .action((notebook, index, cmd) => {
    if (!index) {
      destroy.removeNoteboook(notebook, cmd.force)
    } else {
      destroy.removeNote(notebook, index)
    }
  })

program.parse(process.argv)

if (process.argv.length === 2) {
  program.outputHelp()
}

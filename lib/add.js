const fs = require('fs')
const _ = require('lodash')
const chalk = require('chalk')
const moment = require('moment')

const { dataPath } = require('./../config')
const read = require('./../utils/read')
const write = require('./../utils/write')

class Note {
  constructor (note) {
    this.created = moment().format('MMMM Do YYYY, h:mm:ss a')
    this.note = note
  }
}

class Notebook {
  constructor (name, noteLs) {
    this.created = moment().format('MMMM Do YYYY, h:mm:ss a')
    this.name = name
    this.notes = noteLs || []
  }
}

class Collection {
  constructor () {
    this.created = moment().format('MMMM Do YYYY, h:mm:ss a')
    this.modified = moment().format('MMMM Do YYYY, h:mm:ss a')
    this.notebooks = []
  }
}

module.exports = {
  createNotebook (notebookName) {
    if (!fs.existsSync(dataPath)) {
      const collection = new Collection()
      write(dataPath, collection)
    }

    const collection = read(dataPath)

    if (!_.find(collection.notebooks, ['name', notebookName])) {
      const notebook = new Notebook(notebookName)
      collection.notebooks.push(notebook)

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

    const collection = read(dataPath)
    const note = new Note(noteName)
    let notebook = _.find(collection.notebooks, ['name', notebookName])

    if (!notebook) {
      const notes = [note]
      notebook = new Notebook(notebookName, notes)
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
    write(dataPath, collection)
  }
}

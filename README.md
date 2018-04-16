<p align="center">
    <img src="./.github/jin-icon--color.png" height="150"/>
</p>

# jin

*A CLI app for taking simple notes without ever leaving the terminal.*

<!-- ![jin screenshot](https://github.com/Splode/jin/raw/master/.github/jin-ss.png) -->

## Overview

jin allows you to take and organize simple notes without ever leaving the command line. Capture ideas, track tasks, and reference code snippets with straightforward and intuitive commands.

## Table of contents

* [Overview](#overview)
* [Installation](#installation)
* [Usage](#usage)
* [Related](#related-projects)
* [License](#license)

## Installation

```bash
$ npm install --global jin-app
```

## Usage

### Commands

* [`add`](#add-note)
* [`list`](#list-notes)
* [`edit`](#edit-note)
* [`remove`](#remove-note)
* [`export`](#export-notes)
* [`help`](#help)
<!-- * [`backup`](#backup) -->

### Add Note

```bash
# Add a new note to an existing notebook.
# If the notebook does not exist, it will be created.

$ jin add [notebook] <note>
# jin a [notebook] <note>
```

```bash
# Create a new, empty notebook.

$ jin add [notebook]
# jin a [notebook]
```

> Note: a notebook name is required.

#### Example

```console
$ jin add nodejs "Use 'util.promisify()' to promisify a callback-style function."

    ✔ Added "Use 'util.promisify()' to promisify a callback-style function." to "nodejs".
```

### List Notes

```bash
# List all notes in the given notebook.

$ jin list [notebook]
# jin ls [notebook]
```

```bash
# List all notebooks.

$ jin list
# jin ls
```

#### Example

```console
$ jin list nodejs

    nodejs Notes
    ----------------
    0   Use 'os.homedir()' to access the home directory.
    1   Use 'util.promisify()' to promisify a callback-style function.
```

### Edit Note

```bash
# Edit the contents of a note at the given index of a given notebook.

$ jin edit <notebook> <index>
# jin ed <notebook> <index>
```

### Remove Note

```bash
# Remove a note at the given index of a given notebook.

$ jin remove [notebook] <index>
# jin rm [notebook] <index>
```

```bash
# Remove a given notebook.

$ jin remove [notebook]
# jin rm [notebook]
```

> Note: You must pass in the `--force` flag when attempting to remove a notebook that contains notes.

#### Examples

```console
$ jin remove nodejs 0

    ✔ Removed note at index 0 from nodejs notebook.
```

```console
$ jin rm --force nodejs

    ✔ Removed nodejs notebook.
```

<!-- ### Backup -->

<!-- WIP -->

### Export Notes

```bash
# Create an exports of the notes collection in the current directory.

$ jin export
# jin exp
```

> The notes collection is stored in the user's home directory by default.

### Help

```bash
# Display general help output.

$ jin --help
# jin -h
```

```bash
# Display command-specific help output.

$ jin [cmd] --help
```

## Related Projects

* [Dnote](https://github.com/dnote-io/cli)
* [Idea](https://github.com/IonicaBizau/idea)

## License

MIT &copy; [Christopher Murphy](https://github.com/splode)

[⬆](#jin)

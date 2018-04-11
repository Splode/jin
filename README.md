![Jin screenshot](./.github/jin-ss.png)

<h1 align="center">jin</h1>

<p align="center"><em>A CLI app for taking simple notes without ever leaving the terminal.</em></p>

## Overview

Jin allows you to take and organize simple notes without ever leaving the command line. Capture ideas, track tasks, and reference code snippets with straightforward and intuitive commands.

## Installation

```bash
$ npm install --global jin-app
```

## Usage

### Commands

* [`add`](#add-notes)
* [`list`](#list-notes)
* [`remove`](#remove-notes)
* [`backup`](#backup)
* [`export`](#export)
* [`help`](#help)

### Add Notes

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

```bash
$ jin add nodejs "Use 'util.promisify()' to promisify a callback-style function."

Added "Use 'util.promisify()' to promisify a callback-style function." to "nodejs".
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

```bash
$ jin list nodejs

nodejs
----------------
0 Use 'os.homedir()' to access the home directory.
1 Use 'util.promisify()' to promisify a callback-style function.
```

### Edit Notes

WIP

### Remove Notes

```bash
# Remove a note at the given index from the given notebook.

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

```bash
$ jin remove nodejs 0

Removed note at index 0 from nodejs notebook.
```

```bash
$ jin rm --force nodejs

Removed nodejs notebook.
```

### Backup

WIP

### Export

WIP

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

- [Dnote](https://github.com/dnote-io/cli)
- [Idea](https://github.com/IonicaBizau/idea)

## License

MIT &copy; [Christopher Murphy](https://github.com/splode)

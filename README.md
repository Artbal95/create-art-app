CREATE ART APP
=================

Create Art App CLI

[![github-downloads](https://img.shields.io/github/downloads/Artbal95/create-art-app/total)](https://github.com/Artbal95/create-art-app)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g publish-todo-cli-test
$ todo COMMAND
running command...
$ todo (--version)
publish-todo-cli-test/0.0.0 linux-x64 node-v14.18.2
$ todo --help [COMMAND]
USAGE
  $ todo COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`todo fc NAME`](#todo-fc-name)
* [`todo hello PERSON`](#todo-hello-person)
* [`todo hello world`](#todo-hello-world)
* [`todo help [COMMAND]`](#todo-help-command)
* [`todo plugins`](#todo-plugins)
* [`todo plugins:install PLUGIN...`](#todo-pluginsinstall-plugin)
* [`todo plugins:inspect PLUGIN...`](#todo-pluginsinspect-plugin)
* [`todo plugins:install PLUGIN...`](#todo-pluginsinstall-plugin-1)
* [`todo plugins:link PLUGIN`](#todo-pluginslink-plugin)
* [`todo plugins:uninstall PLUGIN...`](#todo-pluginsuninstall-plugin)
* [`todo plugins:uninstall PLUGIN...`](#todo-pluginsuninstall-plugin-1)
* [`todo plugins:uninstall PLUGIN...`](#todo-pluginsuninstall-plugin-2)
* [`todo plugins update`](#todo-plugins-update)

## `todo fc NAME`

Create Simple React Function Component

```
USAGE
  $ todo fc [NAME] [-i <value>] [-s <value>]

ARGUMENTS
  NAME  Name of Component

FLAGS
  -i, --iprops=<value>     Create With Interface and Props
  -s, --skip-test=<value>  Create Without Tests

DESCRIPTION
  Create Simple React Function Component
```

_See code: [dist/commands/fc/index.ts](https://github.com/testCLI/hello-world/blob/v0.0.0/dist/commands/fc/index.ts)_

## `todo hello PERSON`

Say hello

```
USAGE
  $ todo hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Whom is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/testCLI/hello-world/blob/v0.0.0/dist/commands/hello/index.ts)_

## `todo hello world`

Say hello world

```
USAGE
  $ todo hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ todo hello world
  hello world! (./src/commands/hello/world.ts)
```

## `todo help [COMMAND]`

Display help for todo.

```
USAGE
  $ todo help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for todo.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.10/src/commands/help.ts)_

## `todo plugins`

List installed plugins.

```
USAGE
  $ todo plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ todo plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.11/src/commands/plugins/index.ts)_

## `todo plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ todo plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ todo plugins add

EXAMPLES
  $ todo plugins:install myplugin 

  $ todo plugins:install https://github.com/someuser/someplugin

  $ todo plugins:install someuser/someplugin
```

## `todo plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ todo plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ todo plugins:inspect myplugin
```

## `todo plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ todo plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ todo plugins add

EXAMPLES
  $ todo plugins:install myplugin 

  $ todo plugins:install https://github.com/someuser/someplugin

  $ todo plugins:install someuser/someplugin
```

## `todo plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ todo plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ todo plugins:link myplugin
```

## `todo plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ todo plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ todo plugins unlink
  $ todo plugins remove
```

## `todo plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ todo plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ todo plugins unlink
  $ todo plugins remove
```

## `todo plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ todo plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ todo plugins unlink
  $ todo plugins remove
```

## `todo plugins update`

Update installed plugins.

```
USAGE
  $ todo plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->

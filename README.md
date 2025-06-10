<h2 align="center"><img src="https://raw.githubusercontent.com/VSCodeVim/Vim/master/images/icon.png" height="128"><br>NVim</h2>
<p align="center"><strong>Vim emulation for Visual Studio Code</strong></p>

VSCodeVim is a Vim emulator for [Visual Studio Code](https://code.visualstudio.com/).

it is a fork from [Vim](https://marketplace.visualstudio.com/items?itemName=vscodevim.vim)

**Please read the link above first.**

- 🚚 For a full list of supported Vim features, please refer to our [roadmap](ROADMAP.md).
- 📃 Our [change log](CHANGELOG.md) outlines the breaking/major/minor updates between releases.
- Report missing features/bugs on [GitHub](https://github.com/VSCodeVim/Vim/issues).

- [vim-flash](#vim-flash)
  - [The most basic usage method](#the-most-basic-usage-method)
  - [Support displaying the currently entered search character in StatusBar](#support-displaying-the-currently-entered-search-character-in-statusbar)
  - [Support recording jump points](#support-recording-jump-points)
  - [Support visualization mode](#support-visualization-mode)
  - [Support operator](#support-operator)
  - [Support automatic jump to the next marker point with a carriage return](#support-automatic-jump-to-the-next-marker-point-with-a-carriage-return)
  - [Support previous search](#support-previous-search)
  - [Want to use native f functionality?](#want-to-use-native-f-functionality)
- [vim-indentwise](#vim-indentwise)

### vim-flash

Based on [flash.nvim](https://github.com/folke/flash.nvim) and configured through the following settings:

| Setting                                   | Description                                       | Type    | Default Value                  |
| ----------------------------------------- | ------------------------------------------------- | ------- | ------------------------------ |
| vim.flash.enable                          | Enable the Flash plugin for Vim.                  | Boolean | false                          |
| vim.flash.ignorecase                      | Set to consider case sensitive in search patterns | Boolean | true                           |
| vim.flash.labels                          | Set the characters used for jump marker name.     | String  | 'hklyuiopnm,qwertzxcvbasdgjf;' |
| vim.flash.marker.backgroundColor          | The background color of the marker box.           | String  | '#ccff88'                      |
| vim.flash.marker.nextMatchBackgroundColor | The background color of the next marker box.      | String  | '#ffb86c'                      |

#### The most basic usage method

The most basic way to use flash is: `f` + `search characters` + `marker point label`

#### Support displaying the currently entered search character in StatusBar

To maintain consistency with `/` search, the current input character will be displayed during search

#### Support recording jump points

After using flash to jump, it will be recorded in the jump list. So this means that you can jump back to the previous position through `ctrl+o/i`

#### Support visualization mode

flash can also be used in conjunction with visualization mode

Just press `v` and then press `f` + `the search character`

#### Support operator

flash also supports operators

Now you can use it in conjunction with operators such as `d` `y`

#### Support automatic jump to the next marker point with a carriage return

If you want to jump directly to the next marker point, Just press the enter key directly, Here, different background colors have been added to indicate the next marker point

#### Support previous search

Sometimes I still want to search for the previous search character, but I am too lazy to input it repeatedly

All you need to do is press `f` + `enter`

The previous search record will only be recorded after a successful challenge

If there is no previous search record, a prompt will be given

#### Want to use native f functionality?

Just enter `\,` everything is the same as before

### vim-indentwise

Based on [vim-indentwise](https://github.com/jeetsukumaran/vim-indentwise), it allows moving by indentation level. Useful in languages that don't use braces around statements (e.g. Python) but also for other languages (e.g. to move to the next line that starts at column 0)

| Setting        | Description                   | Type    | Default Value |
| -------------- | ----------------------------- | ------- | ------------- |
| vim.indentwise | Enable/disable vim-indentwise | Boolean | false         |

There are 3 main ways of moving:

- By **relative indent level**, either to a line with less, equal or greater indent.
- To an **absolute indent level**. If spaces are used, the number of spaces that constitute a level is taken from the tabSize editor setting.
- To the **beginning/end of the current block** (i.e. to the last line above/first line below the next/last line with less indent than block the current line is part of). Vim-indent-object described above is another useful alternative for this.

In all modes, empty lines are ignored and never jumped to (use the jump by paragraph motion to go to empty lines).

Absolute indent level jumps work a bit differently than they do in `vim-indentwise`: instead of using the optional count prefix to specify the level, the level is given at the end explicitly. This allows both to combine it with counts (e.g. `2]_0` to jump to the 2nd next line that has 0 indent), and also allows custom key remaps to specific levels (e.g. in python jumping to the next/previous line at indent level 0 is very common and you may want to use a custom keyboard shortcut to do this quicker)

| Motion Command | Description                                                                                         |
| -------------- | --------------------------------------------------------------------------------------------------- |
| `]-`           | Move forward to the next line with less indentation than the current line                           |
| `]=`           | Move forward to the next line with equal indentation with the current line                          |
| `]+`           | Move forward to the next line with greater indentation than the current line                        |
| `[-`           | Move backward to the last line with less indentation than the current line                          |
| `[=`           | Move backward to the last line with equal indentation with the current line                         |
| `[+`           | Move backward to the last line with greater indentation than the current line                       |
| `]_0`          | Move forward to the next line with indent level 0                                                   |
| `]_1`          | Move forward to the next line with indent level 1                                                   |
| `]_2`          | Move forward to the next line with indent level 2                                                   |
| `]_3`          | Move forward to the next line with indent level 3                                                   |
| `]_4`          | Move forward to the next line with indent level 4                                                   |
| `]_5`          | Move forward to the next line with indent level 5                                                   |
| `]_6`          | Move forward to the next line with indent level 6                                                   |
| `]_7`          | Move forward to the next line with indent level 7                                                   |
| `]_8`          | Move forward to the next line with indent level 8                                                   |
| `]_9`          | Move forward to the next line with indent level 9                                                   |
| `[_0`          | Move backward to the last line with indent level 0                                                  |
| `[_1`          | Move backward to the last line with indent level 1                                                  |
| `[_2`          | Move backward to the last line with indent level 2                                                  |
| `[_3`          | Move backward to the last line with indent level 3                                                  |
| `[_4`          | Move backward to the last line with indent level 4                                                  |
| `[_5`          | Move backward to the last line with indent level 5                                                  |
| `[_6`          | Move backward to the last line with indent level 6                                                  |
| `[_7`          | Move backward to the last line with indent level 7                                                  |
| `[_8`          | Move backward to the last line with indent level 8                                                  |
| `[_9`          | Move backward to the last line with indent level 9                                                  |
| `]%`           | Move to the end of the current indentation block (the last line with the same indentation level)    |
| `[%`           | Move to the start of the current indentation block (the first line with the same indentation level) |

# Change Log

## [v2.1.9](https://github.com/HenryTSZ/NVim/tree/v2.1.9) (2024-09-09)

### Added

- [Implement basic separator targets from `targets.vim`](https://github.com/VSCodeVim/Vim/pull/9127)

### Fixed

- fixes flash ignorecase = true, the case of the label is different from that of the next search character & add test
- fixes gB When the word are not in current view, It flashed the view to the selected word but jump back to the original one.

merge VSCodeVim/master

### Added

- Support `langmap` ([@Opisek](https://github.com/Opisek)).
- Partial support for expressions, `:let`, and `:ec[ho]` ([@J-Fields](https://github.com/J-Fields)).

### Fixed

- Fixed `h` with unicode surrogate pairs ([@semicube](https://github.com/semicube)).

## [v2.1.8](https://github.com/HenryTSZ/NVim/tree/v2.1.8) (2024-08-26)

### Fixed

- [add easymotionSearchLines](https://github.com/VSCodeVim/Vim/issues/8783)

merge VSCodeVim/master

### Added

- Support `:norm[al]` ([@s-kai273](https://github.com/s-kai273)).
- Status item click mapped to `toggleVim` command ([@JoeyShapiro](https://github.com/JoeyShapiro)).
- Set `vim.command` in `VSCodeContext` on key press ([@raineorshine](https://github.com/raineorshine)).
- Support `:b[uffer] {bufname}` ([@ccassise](https://github.com/ccassise)).
- Support `<Del>` in Replace mode ([@s-kai273](https://github.com/s-kai273)).

### Changed

- `:on[ly]` joins groups but does not close editors ([@kopiczko](https://github.com/kopiczko)).

### Fixed

- Fixed split pane (`<C-w>v` and `<C-w>s`) on VS Code 1.90 ([@HenryTSZ](https://github.com/HenryTSZ)).
- Fixed `:tabe[dit]` with relative path ([@iblislin](https://github.com/iblislin)).
- Fixed `easymotionDimColor` ([@HenryTSZ](https://github.com/HenryTSZ)).
- Fixed escaping multiple forward slashes in `visualstar` search ([@zaneduffield](https://github.com/zaneduffield)).
- Fixed `.` with numbered registers ([@SirTomme](https://github.com/SirTomme)).
- Fixed `H` and `L` not respecting `scrolloff` ([@rpuhalovich](https://github.com/rpuhalovich)).
- Fixed surround with HTML tag attributes ([@Nestastnikos](https://github.com/Nestastnikos)).
- Fixed deleting unicode surrogate pairs ([@semicube](https://github.com/semicube)).
- Fixed repeating Ex commands with `<Leader>` in them ([@HenryTSZ](https://github.com/HenryTSZ)).

## [v2.1.7](https://github.com/HenryTSZ/NVim/tree/v2.1.7) (2024-06-12)

### Fixed

- [`<C-w> + v and <C-w> + s split pane not working on VSCode 1.90`](https://github.com/VSCodeVim/Vim/issues/9061)
- [`easymotionDimColor` has no effect](https://github.com/VSCodeVim/Vim/issues/9006)

## [v2.1.6](https://github.com/HenryTSZ/NVim/tree/v2.1.6) (2024-05-23)

### Added

- [add a textobject:SelectAttrs i-r/a-r](https://github.com/VSCodeVim/Vim/pull/9037)
- [Add `gB` keybinding for finding the previous match](https://github.com/VSCodeVim/Vim/pull/9008)

### Fixed

- [Wrong cursor orientation after adding multi-cursor selection](https://github.com/VSCodeVim/Vim/issues/9000)

## [v2.1.5](https://github.com/HenryTSZ/NVim/tree/v2.1.5) (2024-05-21)

merge VSCodeVim/master

### Added

- Custom digraphs can be added via `:dig[raphs]` ([@J-Fields](https://github.com/J-Fields)).
- `:Ex[plore]` is mapped to `workbench.view.explorer` ([@JaiminBrahmbhatt](https://github.com/JaiminBrahmbhatt)).

### Changed

- When used with a count, `<C-d>` and `<C-u>` set the `scroll` option to the count ([@ontanj](https://github.com/ontanj)).

### Fixed

- Fix `:s[ubstitute]` with the `n` flag moving cursor ([@J-Fields](https://github.com/J-Fields)).
- Fix special marks displaying in gutter ([@shinohara-rin](https://github.com/shinohara-rin)).
- Fix several edge cases of `<C-o>` ([@harunou](https://github.com/harunou)).
- Fix incorrect digraph mappings ([@mlbykn](https://github.com/mlbykn)).
- Fix `gv` after visual selection with mouse or command ([@zyd2001](https://github.com/zyd2001)).
- Fix `gv` being unaffected by `m<` and `m>` ([@J-Fields](https://github.com/J-Fields)).

## [v2.1.4](https://github.com/HenryTSZ/NVim/tree/v2.1.4) (2024-03-19)

### Fixed

- [Fix #8935 Special marks like '<' won't display in gutter](https://github.com/VSCodeVim/Vim/pull/8936)

## [v2.1.3](https://github.com/HenryTSZ/NVim/tree/v2.1.3) (2024-03-05)

### Added

- [Killring support](https://github.com/VSCodeVim/Vim/pull/8803)

This PR is to support kill ring feature, and default binding to activate yanking from kill ring (A-y).

## [v2.1.2](https://github.com/HenryTSZ/NVim/tree/v2.1.2) (2024-03-01)

### Fixed

- [Fix: #8418 Fix <C-i> Vim keybinding for Normal mode](https://github.com/VSCodeVim/Vim/pull/8767)

## [v2.1.1](https://github.com/HenryTSZ/NVim/tree/v2.1.1) (2024-02-27)

### Added

[added flash usage](https://github.com/HenryTSZ/NVim/tree/v2.1.1?tab=readme-ov-file#vim-flash)

## [v2.1.0](https://github.com/HenryTSZ/NVim/tree/v2.1.0) (2024-01-11)

### Fixed

- [fixes #8787 add vim.openFilePosition](https://github.com/VSCodeVim/Vim/pull/8819)

## [v2.0.9](https://github.com/HenryTSZ/NVim/tree/v2.0.9) (2024-01-07)

- merge Vim/master

## [v2.0.8](https://github.com/HenryTSZ/NVim/tree/v2.0.8) (2023-12-08)

### Added

- [Added config options to customise status bar text.](https://github.com/VSCodeVim/Vim/pull/7770)
- [Enable vim plugins for web extension](https://github.com/VSCodeVim/Vim/pull/7728)

## [v2.0.7](https://github.com/HenryTSZ/NVim/tree/v2.0.7) (2023-12-07)

### Added

- [add ls command](https://github.com/VSCodeVim/Vim/pull/8761)

### Fixed

- [fixes #7859 #5582: support global mark jumping](https://github.com/VSCodeVim/Vim/pull/7876)

## [v2.0.6](https://github.com/HenryTSZ/NVim/tree/v2.0.6) (2023-11-30)

### Fixed

- [Fix: Cursor position is broken at v1.26.0](https://github.com/VSCodeVim/Vim/pull/8756)

## [v2.0.5](https://github.com/HenryTSZ/NVim/tree/v2.0.5) (2023-11-28)

### Added

- [Added Langmap Feature](https://github.com/VSCodeVim/Vim/pull/8541)

## [v2.0.4](https://github.com/HenryTSZ/NVim/tree/v2.0.4) (2023-11-24)

### Fixed

- [Do not revert to a single cursor when escape is pressed after a block selection](https://github.com/VSCodeVim/Vim/pull/8510)

## [v2.0.3](https://github.com/HenryTSZ/NVim/tree/v2.0.3) (2023-11-23)

### Fixed

- [Fix: avoid escaping the exact word search twice](https://github.com/VSCodeVim/Vim/pull/8566)

## [v2.0.2](https://github.com/HenryTSZ/NVim/tree/v2.0.2) (2023-11-21)

### Fixed

- [Fix: only create new file on split when specified](https://github.com/VSCodeVim/Vim/pull/8733)

## [v2.0.1](https://github.com/HenryTSZ/NVim/tree/v2.0.1) (2023-11-20)

### Added

- [Add new plugin: vim-indentwise](https://github.com/VSCodeVim/Vim/pull/7668)

## [v2.0.0](https://github.com/HenryTSZ/NVim/tree/v2.0.0) (2023-11-20)

### Added

- Add [flash](https://github.com/cuixiaorui/VSCodeVim/tree/flash)

### Fixed

- Fix [VSCodeVim#8576](https://github.com/VSCodeVim/Vim/issues/8576) Cursor position is broken at v1.26.0

## Unreleased

### Added

- Support `langmap` ([@Opisek](https://github.com/Opisek)).
- Partial support for expressions, `:let`, and `:ec[ho]` ([@J-Fields](https://github.com/J-Fields)).

## [v1.28.1](https://github.com/vscodevim/vim/tree/v1.28.1) (2024-09-07)

### Fixed

- Fixed `h` with unicode surrogate pairs ([@semicube](https://github.com/semicube)).

## [v1.28.0](https://github.com/vscodevim/vim/tree/v1.28.0) (2024-08-25)

### Added

- Support `:norm[al]` ([@s-kai273](https://github.com/s-kai273)).
- Status item click mapped to `toggleVim` command ([@JoeyShapiro](https://github.com/JoeyShapiro)).
- Set `vim.command` in `VSCodeContext` on key press ([@raineorshine](https://github.com/raineorshine)).
- Support `:b[uffer] {bufname}` ([@ccassise](https://github.com/ccassise)).
- Support `<Del>` in Replace mode ([@s-kai273](https://github.com/s-kai273)).

### Changed

- `:on[ly]` joins groups but does not close editors ([@kopiczko](https://github.com/kopiczko)).

### Fixed

- Fixed split pane (`<C-w>v` and `<C-w>s`) on VS Code 1.90 ([@HenryTSZ](https://github.com/HenryTSZ)).
- Fixed `:tabe[dit]` with relative path ([@iblislin](https://github.com/iblislin)).
- Fixed `easymotionDimColor` ([@HenryTSZ](https://github.com/HenryTSZ)).
- Fixed escaping multiple forward slashes in `visualstar` search ([@zaneduffield](https://github.com/zaneduffield)).
- Fixed `.` with numbered registers ([@SirTomme](https://github.com/SirTomme)).
- Fixed `H` and `L` not respecting `scrolloff` ([@rpuhalovich](https://github.com/rpuhalovich)).
- Fixed surround with HTML tag attributes ([@Nestastnikos](https://github.com/Nestastnikos)).
- Fixed deleting unicode surrogate pairs ([@semicube](https://github.com/semicube)).
- Fixed repeating Ex commands with `<Leader>` in them ([@HenryTSZ](https://github.com/HenryTSZ)).

## [v1.27.3](https://github.com/vscodevim/vim/tree/v1.27.3) (2024-05-20)

### Added

- Custom digraphs can be added via `:dig[raphs]` ([@J-Fields](https://github.com/J-Fields)).
- `:Ex[plore]` is mapped to `workbench.view.explorer` ([@JaiminBrahmbhatt](https://github.com/JaiminBrahmbhatt)).

### Changed

- When used with a count, `<C-d>` and `<C-u>` set the `scroll` option to the count ([@ontanj](https://github.com/ontanj)).

### Fixed

- Fix `:s[ubstitute]` with the `n` flag moving cursor ([@J-Fields](https://github.com/J-Fields)).
- Fix special marks displaying in gutter ([@shinohara-rin](https://github.com/shinohara-rin)).
- Fix several edge cases of `<C-o>` ([@harunou](https://github.com/harunou)).
- Fix incorrect digraph mappings ([@mlbykn](https://github.com/mlbykn)).
- Fix `gv` after visual selection with mouse or command ([@zyd2001](https://github.com/zyd2001)).
- Fix `gv` being unaffected by `m<` and `m>` ([@J-Fields](https://github.com/J-Fields)).

## [v1.27.2](https://github.com/vscodevim/vim/tree/v1.27.2) (2023-12-22)

### Added

- Map `:ls` to `workbench.action.quickOpenLeastRecentlyUsedEditorInGroup` ([@riyuejiuzhao](https://github.com/riyuejiuzhao)).

### Fixed

- Fix scrolling when `editor.smoothScrolling` is enabled ([@zhuowei](https://github.com/zhuowei)).
- Fix cursor movement when `vim.foldfix` is enabled ([@HenryTSZ](https://github.com/HenryTSZ)).
- Fix `editor.action.smartSelection.expand` command in VisualLine mode ([@rogeryk](https://github.com/rogeryk)).

## [v1.27.1](https://github.com/vscodevim/vim/tree/v1.27.1) (2023-11-22)

### Fixed

- Fix `:sp[lit]` and `:vs[plit]` with no file name ([@bcho](https://github.com/bcho)).

## [v1.27.0](https://github.com/vscodevim/vim/tree/v1.27.0) (2023-11-17)

### Added

- Allow `:sp[lit]` and `:vs[plit]` to open non-existing files ([@JLMSC](https://github.com/JLMSC)).
- Support changing case via `:s[ubstitute]` with `\L`, `\U`, `\E`, `\u`, and `\l` ([@J-Fields](https://github.com/J-Fields)).
- Add border to search and `:s[ubstitute]` decorations, based on the `editor.findMatchBorder` and `editor.findMatchHighlightBorder` ThemeColors ([@bryclee](https://github.com/bryclee)).

### Fixed

- Make `gf` interpret non-absolute paths as relative to project root ([@Foo-x](https://github.com/Foo-x)).
- Fix `gf` with a line number after the path ([@Foo-x](https://github.com/Foo-x)).
- Fix status bar color in VisualLine mode ([@chandradeepdey](https://github.com/chandradeepdey)).

## [v1.26.2](https://github.com/vscodevim/vim/tree/v1.26.2) (2023-10-21)

### Fixed

- Fixed illegible text with certain color schemes when `vim.statusBarColorControl` is enabled ([@chandradeepdey](https://github.com/chandradeepdey)).

### Changed

- Changed extension's `activationEvents` to include `onStartupFinished` rather than `*`, which may improve startup performance ([@whitphx](https://github.com/whitphx)).

## [v1.26.1](https://github.com/vscodevim/vim/tree/v1.26.1) (2023-10-09)

### Fixed

- Fixed several Insert mode bugs caused by a regression in `v1.26.0` ([@nullbus](https://github.com/nullbus)).
- Fixed dot repeat (`.`) after `:reg[isters]` ([@dannoe](https://github.com/dannoe)).
- Fixed overlapping text in Quick Pick caused by `:reg[isters]` ([@dannoe](https://github.com/dannoe)).
- Fixed some uses of `vim.remap` ([@jdanbrown](https://github.com/jdanbrown)).

## [v1.26.0](https://github.com/vscodevim/vim/tree/v1.26.0) (2023-09-09)

### Added

- Implemented `:m[ove]` ([@zhanyi22333](https://github.com/zhanyi22333)).
- Implemented `:red[o]` ([@hamza-tam](https://github.com/hamza-tam)).
- Implemented `:pu[t] =` ([@elazarcoh](https://github.com/elazarcoh)).

### Fixed

- Fixed misbehavior when selecting from bottom to top with shift+click ([@lqqyt2423](https://github.com/lqqyt2423)).
- Fixed `@@` when used in a different editor ([@J-Fields](https://github.com/J-Fields)).
- Fixed race condition in the `c` operator and a few other actions when `vim.autoSwitchInputMethod` is enabled ([@listenerri](https://github.com/listenerri)).
- Fixed `when` clause for provided `<C-p>` key bind to enable it being remapped ([@grosssoftware](https://github.com/grosssoftware)).
- Fixed `:sp[lit] [file]` ([@fernando-gap](https://github.com/fernando-gap)).
- Fixed `<Tab>` key bind which was blocking menu navigation in VS Code's find dialog ([@devrelm](https://github.com/devrelm)).
- Fixed VSCode's auto-surround functionality in Insert mode ([@Elliot-Roberts](https://github.com/Elliot-Roberts)).
- Fixed `<C-d>` and `<C-u>` not respecting `[count]` ([@rpuhalovich](https://github.com/rpuhalovich)).

## [v1.25.2](https://github.com/vscodevim/vim/tree/v1.25.2) (2023-03-01)

### Added

- Support for `:w <FILENAME>` ([@JLMSC](https://github.com/JLMSC)).

### Changed

- Reduced extension bundle size by removing source maps ([@kidonng](https://github.com/kidonng)).
- Replaced "Report bug" popup on exceptions with an error log message ([@J-Fields](https://github.com/J-Fields)).

### Fixed

- Fixed remaps which pass multiple positional arguments to a command ([@elmar-peise](https://github.com/elmar-peise)).
- Fixed cursor position after certain surround actions ([@J-Fields](https://github.com/J-Fields)).

## [v1.25.0](https://github.com/vscodevim/vim/tree/v1.25.0) (2023-02-28)

### Added

- Support for `:cw[indow]`, `:lw[indow]`, and related commands ([@mogelbrod](https://github.com/mogelbrod)).

### Changed

- Logging is now done to a `LogOutputChannel`. It can be accessed in the `Output` panel and configured using `workbench.action.setLogLevel` ([@J-Fields](https://github.com/J-Fields)).
- Scope for settings under `vim.autoSwitchInputMethod.*` is now `machine` ([@Quanuanc](https://github.com/Quanuanc)).

### Fixed

- Fixed undo/redo after recent VS Code update ([@J-Fields](https://github.com/J-Fields)).
- Fixed `.` after exiting Visual mode or command line with `<Esc>` ([@wgr45097](https://github.com/wgr45097)).
- Fixed ex command line ranges with no explicit start, such as `,5` ([@lazygyu](https://github.com/lazygyu)).

## [v1.24.3](https://github.com/vscodevim/vim/tree/v1.24.3) (2022-11-06)

### Added

- Text registers can now be executed as macros with `@` ([@elazarcoh](https://github.com/elazarcoh)).

### Fixed

- Fixed some ex commands when repeated with `@:` ([@J-Fields](https://github.com/J-Fields)).
- Fixed cursor position after `gp` or `gP` in VisualBlock mode ([@burnsdy](https://github.com/burnsdy)).
- Fixed edge case of `i{` and `a{` ([@elazarcoh](https://github.com/elazarcoh)).

## [v1.24.2](https://github.com/vscodevim/vim/tree/v1.24.2) (2022-10-29)

### Added

- Support for the `'scrolloff'` option, which is mapped to VS Code's `editor.cursorSurroundingLines` setting ([@LinHeLurking](https://github.com/LinHeLurking)).

### Fixed

- Fixed indent (`>`) and outdent (`<`) in VisualBlock mode ([@burnsdy](https://github.com/burnsdy)).
- Fixed `cW` when the cursor is on the last character of a word ([@wgr45097](https://github.com/wgr45097)).
- Fixed indent textobjects (`ii`, `ai`, and `aI`) in VisualLine mode ([@mogelbrod](https://github.com/mogelbrod)).

## [v1.24.1](https://github.com/vscodevim/vim/tree/v1.24.1) (2022-09-26)

### Fixed

- Fixed `gt` and `gT` ([@J-Fields](https://github.com/J-Fields)).

## [v1.24.0](https://github.com/vscodevim/vim/tree/v1.24.0) (2022-09-26)

### Added

- Support for `zf`/`zd` commands, which fold/unfold arbitrary ranges ([@elazarcoh](https://github.com/elazarcoh)).
- Support for surrounding with function call ([@riccardofano](https://github.com/riccardofano)).
- Support for `:sor[t] n`, which sorts lines numerically, rather than lexicographically ([@jan25](https://github.com/jan25)).

### Changed

- `P` in Visual modes no longer overwrites the default register with the selection's contents ([@J-Fields](https://github.com/J-Fields)).
- Yanking block-wise now pads shorter lines with spaces ([@burnsdy](https://github.com/burnsdy)).
- `<C-]>` now goes to definition, not declaration ([@J-Fields](https://github.com/J-Fields)).
- `:tabn[ext] {N}` now goes to the Nth tab, not N tabs forward [@elazarcoh](https://github.com/elazarcoh).

### Fixed

- Fixed insertion of surrogate pairs, like emoji 🙂 ([@garzj](https://github.com/garzj)).
- Fixed `<BS>` and `<Del>` when cursor is at start of command line ([@J-Fields](https://github.com/J-Fields)).

## [v1.23.2](https://github.com/vscodevim/vim/tree/v1.23.2) (2022-08-01)

### Fixed

- Fix the jump list ([@pitkali](https://github.com/pitkali)).
- Make increment/decrement (`<C-a>` and `<C-x>`) preserve case of hex numbers ([@smallkirby](https://github.com/smallkirby)).
- Fix search highlights on inactive but visible editors ([@J-Fields](https://github.com/J-Fields)).

## [v1.23.1](https://github.com/vscodevim/vim/tree/v1.23.1) (2022-06-28)

### Fixed

- Fold commands such as `zo` and `zc` no longer throw error ([@J-Fields](https://github.com/J-Fields)).
- Fix regression in VisualBlock `c` ([@J-Fields](https://github.com/J-Fields)).

## [v1.23.0](https://github.com/vscodevim/vim/tree/v1.23.0) (2022-06-27)

### Added

- Partial implementation of the [targets.vim](https://github.com/wellle/targets.vim#quote-text-objects) plugin ([@elazarcoh](https://github.com/elazarcoh)).
  - See the configuration available under `vim.targets`.
- Support for `:breaka[dd]`, `:breakd[el]`, and `:breakl[ist]` ([@elazarcoh](https://github.com/elazarcoh)).
- Support for `:ret[ab]` ([@ivanmaeder](https://github.com/ivanmaeder)).
- Support for `:<` and `:>` ([@J-Fields](https://github.com/J-Fields)).
- In the replacement string of `:s[ubstitute]`, `~` stands for previous replace string ([@J-Fields](https://github.com/J-Fields)).

### Changed

- Searches now abort after ~1 second, rather than after finding 1000 matches ([@elazarcoh](https://github.com/elazarcoh)).
- In the replacement string of `:s[ubstitute]`, `&` (rather than `\&`) stands for entire matched text ([@J-Fields](https://github.com/J-Fields)).
- The `vim.textwidth` configuration option can now be set per-language ([@BlakeWilliams](https://github.com/BlakeWilliams)).

### Fixed

- Allow space in ex command file names if preceded by a backslash ([@J-Fields](https://github.com/J-Fields)).
- Fix Replace mode with multiple cursors ([@J-Fields](https://github.com/J-Fields)).
- Fix `<C-e>` and `<C-y>` (scroll view) with multiple cursors ([@J-Fields](https://github.com/J-Fields)).
- Fix `<C-^>` (go to alternate file) ([@J-Fields](https://github.com/J-Fields)).
- Fix the `CamelCaseMotion` plugin ([@rcywongaa](https://github.com/rcywongaa))
- Fix behavior around surrogate pairs ([@smallkirby](https://github.com/smallkirby)).
- Fix `:delm[arks]` ([@chewcw](https://github.com/chewcw)).
- Fix `<C-d>` in Insert mode when tabs are used ([@J-Fields](https://github.com/J-Fields)).
- Fix `c` in VisualBlock mode when block extends over short lines ([@J-Fields](https://github.com/J-Fields)).
- Make `c`, `s`, and `D` in VisualBlock mode copy to register ([@monjara](https://github.com/monjara)).
- Fix several edge cases of `gv` ([@J-Fields](https://github.com/J-Fields)).
- Fix `p` in Visual modes with multiple cursors ([@joel1st](https://github.com/joel1st)).
- Improve search performance ([@J-Fields](https://github.com/J-Fields)).

### Removed

- Remove the following deprecated and unused configuration ([@J-Fields](https://github.com/J-Fields)):
  - `vim.easymotionMarkerForegroundColorTwoChar`
  - `vim.easymotionMarkerWidthPerChar`
  - `vim.easymotionMarkerFontFamily`
  - `vim.easymotionMarkerFontSize`
  - `vim.easymotionMarkerMargin`

## **_For versions older than 1.23.0, please see [CHANGELOG.OLD.md](CHANGELOG.OLD.md)_**

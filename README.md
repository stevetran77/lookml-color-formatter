# LookML Color Formatter

A VS Code extension that provides syntax highlighting and formatting for LookML files with a carefully curated color scheme.

## What It Does

- **Syntax Highlighting** — Colors keywords, strings, types, and interpolations in LookML files
- **Formatting** — Automatic indentation of LookML blocks using 2-space indentation
- **SQL Support** — Highlights `sql:` blocks and `${TABLE}` interpolations

## Installation

1. Clone or download this repository
2. Run `npm install` to install dependencies
3. Run `npm run compile` to build the extension
4. Open VS Code and press `Ctrl+Shift+D` (or `Cmd+Shift+D` on Mac)
5. Click "Run and Debug" to launch the extension in a new window
6. Open `.lkml` or `.lookml` files to see syntax highlighting

## Features — Color Scheme

| Element | Color | Example |
|---------|-------|---------|
| **Keywords** | Blue | `view`, `dimension`, `measure`, `include`, `extends`, `type`, `sql` |
| **Strings** | Orange | `"Free Time Adjustment"` |
| **Type Values** | Purple | `string`, `number`, `yesno`, `date`, `count`, `sum` |
| **Interpolation** | Red | `${TABLE}`, `${view_name.field}` |
| **SQL Terminator** | Gray | `;;` |
| **Comments** | Gray Italic | `# comment` |

### Supported Keywords

Blocks and properties: `view`, `explore`, `dimension`, `measure`, `join`, `filter`, `type`, `sql`, `label`, `group_label`, `view_label`, `primary_key`, `derived_table`, `relationship`, `fields`, `drill_fields`, and more.

### Supported Type Values

`string`, `number`, `yesno`, `date`, `date_time`, `time`, `count`, `sum`, `average`, `min`, `max`, `list`, and duration types.

## Usage

1. Open a `.lkml` or `.lookml` file in VS Code
2. Syntax highlighting is applied automatically
3. Format the file with `Shift+Alt+F` (or right-click → "Format Document")
4. Indentation adjusts automatically for opening/closing braces

## Configuration

To customize colors, open **Settings** (`Ctrl+,`) and search for `editor.tokenColorCustomizations`:

```json
"editor.tokenColorCustomizations": {
  "textMateRules": [{
    "scope": "keyword.control.lookml",
    "settings": { "foreground": "#YOUR_COLOR" }
  }]
}
```

## Requirements

- VS Code 1.110.0 or later
- TypeScript 5.0.0 or later (for development)

## Release Notes

### 0.0.1
Initial release with syntax highlighting and formatting support.

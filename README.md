# LookML Color Formatter

An extension that provides syntax highlighting and formatting for LookML files with a carefully curated color scheme.

## What It Does

Just make your LookML code look better :))

## Installation

1. Download the latest `.vsix` file from the releases
2. Open VS Code and go to Extensions (`Ctrl+Shift+X`)
3. Click the `...` menu → **Install from VSIX...**
4. Select the downloaded `.vsix` file


## Repository

[GitHub: stevetran77/lookml-color-formatter](https://github.com/stevetran77/lookml-color-formatter)

## Building from Source

If you want to build the extension locally:

```bash
# 1. Install dependencies
npm install

# 2. Compile TypeScript to JavaScript
npm run compile

# 3. Package as .vsix
vsce package
```

This generates `lookml-color-formatter-0.0.1.vsix` which you can then install.

## Usage

1. Open a `.lkml` or `.lookml` file in VS Code
2. Syntax highlighting is applied automatically


## Requirements

- VS Code 1.110.0 or later
- TypeScript 5.0.0 or later (for development)

## Release Notes

### 0.0.1
Initial release with syntax highlighting and formatting support.

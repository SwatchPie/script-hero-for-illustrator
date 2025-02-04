# Script Hero for Adobe Illustrator

**Script Hero** is a growing library of ExtendScript utility functions for Adobe Illustrator plus a collection of scripts written with the library. 

Over the years, I've written a bunch of scripts to help with Adobe Illustrator projects. As a result, I have dozens of scripts that do much the same thing with minor customizations. I would often start a new script by copy-pasting from existing ones. Then I'd spend time reminding myself how things work, adjusting, and testing. **Script Hero** started because I wanted a faster & easier way to reuse tested code across multiple projects. 

## Project Structure

```
Script-Hero
├── .vscode
├── docs
├── document-hero
├── library
│   ├── actions
│   ├── external
│   ├── helpers
│   ├── tests
│   └── utilities
├── swatch-hero
├── swatches-add
├── test-files
└── transform-hero
```

## Documentation

As a technical writer who works with all kinds of scripts, I aim for just-in-time documentation. I lean towards documenting things in-place and try to minimize the need to leave a project to read documentation. 

So, while there is some informative stuff in this repo's `docs` directory, the most useful info can be found in the files themselves. 

- Each directory in this repo has a `README` with good-to-know stuff.
- Every `jsx` file has a header with need-to-know information. 
- Utilities are documented in-place using JSDoc and a good amount of commenting. 
- A quick way to see all utilities is to open the module's file, scroll to the bottom, and look at the `return`. 
- Every utility module has a corresponding test module demonstrating how to work with utilities and see what they do. 


## VS Code Support

It's no secret that consistent code is easier to work with - especially when you put it down for a while. As mentioned, **Script Hero** started as a roundup of code I was repeating in various scripts. 

The [.vscode](.vscode/README.md) directory has all kinds of code snippets to help me refactor in a standardized way and to write scripts using the library. Things aren't perfectly standardized and may never be, but the broad & important strokes, like a modular approach & error handling, are solid and these snippets help support that.  

Everything in the `.vscode` directory is specific to ExtendScript and Adobe Illustrator and includes:

- Templates for scripts, utilities, and tests
- `@include` statements for every utility module
- JSDoc `@tags`
- Common loops and switches
- Function parameter checks
- A `settings.json` with spell check words


## Library

The only things you need to work with **Script Hero** are [global.jsx](./global.jsx) and the [library](./library/README.md) directory. 

- [library/utilities](./library/utilities/README.md) are organized as modules and are the heart of **Script Hero**.
- [library/tests](./library/tests/README.md) are the corresponding tests for each utility module. 
- [library/helpers](./library/helpers/README.md) are stand-alone scripts not meant to be used in workflows or by other scripts. 
- [library/actions](./library/actions/README.md) are Illustrator Action files used when something can't be scripted directly.
- [library/external](./library/external/README.md) holds 3rd party JavaScript libraries. There are none currently implemented in this project. 


## Scripts

Other directories in this repo contain scripts written using **Script Hero** utilities. Some scripts are meant to be customized as-needed. These settings are found in `global.jsx`. 

### Swatch Hero

The scripts in [swatch-hero](./swatch-hero/README.md) are what inspired **Script Hero**. 

- `swatch-legend` and `swatch-squares` create a grid of tiles for selected swatches. `swatch-squares` makes just a tile. `swatch-legend` adds text with Swatch info to the tile. 
- `swatch-data-export` and `item-color-export` export color data to a CSV file. Data include the source color comps and [conversions](./docs/color-conversion.md) to other color spaces.
- `swatches-random` randomly applies selected swatches to selected items. 

### Swatches Add

The scripts in [swatches-add](./swatches-add/) are templates for adding Swatches to a document. There is one for each type of Swatch - CMYK, RGB, LAB, and grayscale for both Process and Spot colors. 

### Transform Hero

I wrote the scripts in [transform-hero](./transform-hero/README.md) to help with random patterns. There is one for opacity, rotation, scale, translation, and z-index. The broad ideas are: 

- They work like `Transform Each` on selected items. 
- They can perform set or randomized operations.
- They can undo the operations they perform. 

### Document Hero

The scripts in `document-hero` are my current project. Here, the big ideas are:

- `document-export` for exporting to various formats and scales.
- `delete-unused-panel-items` for reducing file size.
- `file-info` for updating the `File > File Info` fields.
- `artboard-names-from-layers` for renaming artboards using layer names. 

## Contribute

If you have a suggestion or find a problem, I would love to know. Please create an issue.

FWW I am the furthest thing from a GitHub expert and this project is a work in progress. This is to say that I have no idea how to work with branches or pull requests. And I have zero time to learn right now. Everything I work on is immediately available on the main branch. If you'd like to help with that, please let me know.


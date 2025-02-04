# Script Hero: Library: Tests

**Script Hero** utilities are organized as modules. Every utility module has a corresponding test module found here. These are manual tests. Broadly, you uncomment a test, create the given scenario, and run the test file. 

The tests are meant to isolate and test individual utilities for both pass and fail scenarios. The pass scenarios are all there. The fail scenarios aren't standardized yet. Tests are also meant to demonstrate how to use utilities in a script. This includes:

- The needed `@include` statements.
- How to call the `module.utility`.
- How to use try-catch for propagated error handling. 


## Test Files

This repo has a `test-files` directory where you can find Illustrator files that are set up for some tests. 


## VS Code Support

This repo has a `.vscode` directory where you can find code snippets, including templates for test modules and functions. 


## How to Run a Test

Say you want to test the `swatchUtils.makeSwatchCMYK()` utility. 

1. Open `global.jsx` and enable `DEBUG` for `SWATCHUTILS`. This enables success messaging - utilities always throw their errors.
2. Open the `library/tests/test_swatchutils.jsx`. 
3. Scroll to the bottom of the test file and uncomment the relevant test. 
4. Create the given test scenario - usually an open document, selected items, or selected swatches. 
5. Use `Ctrl+F12` to run the test file. 

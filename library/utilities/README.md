# Script Hero: Library: Utilities

This directory is the heart of **Script Hero** - the utilities. Utilities are organized in modules that focus on different aspects of Illustrator - documents, swatches, layers and so on. 


## VS Code Support

This repo has a `.vscode` directory where you can find all kinds of code snippets, including:

- Templates for utility modules & functions.
- A script file template. 
- `@include` statements for each utility module. 


## global.jsx

The only things you need to use **Script Hero** are the `library` directory and `global.jsx`. This file holds the `DEBUG` toggle for each utility module plus script defaults. 


## How to use a Utility

To use a utility, start by importing its module into your script. **Script Hero** uses `@include` with relative links. 

```jsx
// @include '../library/utilities/swatchUtils.jsx'
```

Then use the utility inside a try-catch block. 

```jsx
(function myScript() {

  var functionID = 'myScript';
  var DEBUG = false;

  try {

    swatchUtils.makeSwatchCMYK('5R CMYK',0,100,100,0,'Hues CMYK');

    var message = 'SUCCESS CMYK Process swatches added.';
    if (DEBUG) alert(message, functionID);
    
  } catch (e) {
    e.message = 'ERROR\n' + e.message;
    alert(e.message, functionID)
  }

})();
```

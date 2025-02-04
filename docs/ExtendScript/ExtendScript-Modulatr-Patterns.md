
# Modular Patterns in Adobe ExtendScript

This topic covers some of the considerations and modular patterns Script Hero uses for code that is easy to maintain, expand, and repurpose. 


## 1. Separate Main Functions from Utilities

A key concept with modular coding is to think in terms of a main function that executes a series of tasks, and utility functions which perform discreet tasks and can be reused across multiple scripts or projects. 

```jsx
function sayHello() {
  alert('Hello, World!');
}

function sayGoodbye() {
  alert('Goodbye for now!');
}

function mainFunction() {
  sayHello();
  sayGoodbye();
}

mainFunction();
```

## 2. Scoping

Every scripting language uses scope to control access to variables and functions in different parts of your code. 

- Newer versions of JavaScript have 3 scopes: global, function, and block. 
- ExtendScript is based on ES3 and has 2 scopes: global and function. 

Specifically, ExtendScript does not have:

- `let` or `const` which provide block scoping.
- A native concept of private functions.


### 2.1. Global Scope

Variables that are defined outside of a function are in the global scope and can be accessed everywhere in your code. 

This makes the global scope a powerful tool that needs to be used with intention - especially with modular coding where the idea is to chain multiple utilities into more complex scripts.

```jsx
// Global scope
var doc = app.activeDocument;

function mainFunction() {
  // Function scope
  var swatches = doc.swatches;
}
```

It's common to see Illustrator scripts with global variables and code that executes in the global space. Even Adobe's own sample scripts do this. These scripts work fine because they're simple enough to not cause problems - not because they're well coded. 

Reasons to avoid the global space include: 

- **Namespace Pollution**: Global variables are accessible from anywhere in the code, which can lead to conflicts if multiple parts of the program accidentally use the same variable names.

- **Difficult Debugging**: Since global variables can be modified from anywhere, tracking down where a global variable was changed can be challenging, making debugging more complex.

- **Maintenance Challenges**: Code that heavily relies on global variables is harder to maintain and understand. Changes in one part of the program can have unexpected side effects in other parts, leading to fragile code.

- **Reduced Reusability**: Functions and modules that depend on global variables are less modular and harder to reuse in different contexts, as they rely on external state.


### 2.2. Function Scope

Broadly speaking, with ExtendScript, all variables are best defined within a function.

```jsx
function mainFunction() {
  // Function scope
  var doc = app.activeDocument;
  var swatches = doc.swatches;
}
```

### 2.3. Block Scope

As mentioned, ExtendScript is based on JavaScript ES3 and does not have a block scope. Specifically, ExtendScript only has `var` - it doesn't have `let` or `const`. 

When defined within a function, `var` is function scoped - it's available to and can be changed from any part of the function. 

To mimic the block scope, replace each `let` and `const` with a unique `var`. A good example is nested loops:

```jsx
function myUtility() {

  var selection = app.activeDocument.selection;

  for (var i = 0; i < selection.length; i++) {
    var item = selection[i];
    var properties = item.properties;

    for (var j = 0; j < properties.length; i++) {
      var property = properties[j];
    }
  }  
}
```

## 3. Utility Modules

A **utility** is a function that performs a discreet task and can be reused across multiple scripts and projects.

Script Hero uses the module pattern to create private and public functions within an object. This pattern helps encapsulate functionality and exposes only what's necessary.

```jsx
var greetUtils = (function () {

  function _privateUtility() {
    alert('I am private');
  }

  function sayHello() {
    alert('Hello, World!');
  }

  function sayGoodbye() {
    alert('Goodbye for now!');
  }

  // Expose public functions
  return {
    sayHello: sayHello,
    sayGoodbye: sayGoodBye
  };

})();


// Call public function to test
greetUtils.sayHello(); 
greetUtils.sayGoodbye(); 

// _privateUtility is not exposed, so this will throw an error.
// greetUtils._privateUtility(); 
```


## 4. IIFE Scripts

For our purposes, a **script** is a file the user is meant to execute using `CTRL+F12` or from `File > Scripts`. 

Script Hero uses immediately invoked function expressions (IIFE) to encapsulate code and avoid the global scope. 

```jsx
(function myScript() {

 // @include `./greetUtils.jsx`

  greetUtils.sayHello();

  var doc = app.activeDocument;
  var selection = doc.selection;

  // Do some stuff

  greetUtils.sayGoodbye();

})();
```

## 6. Error Handling

A key part of creating reusable utilities is determining how to propagate and handle errors gracefully. 

There's a bit of an art to throwing errors. For example, most utilities and scripts work on the `app.activeDocument`. 

- On the one hand you could say a script should check for the active document so utilities don't have to. 
- On the other hand, you could say that to ensure maximum modularity, each utility that needs it should check for the active document. 
- The reality is usually somewhere in between - Script Hero leans towards utilities that perform their own checks. 

Another art is deciding when an error should stop a script, or skip a portion of code, or do something else. This has a lot to do with understanding how a utility is meant to be used. For example, Script Hero has a `getSwatchByName()` utility.

- At first glance, you might think this method returns a `Swatch` object or `null` and it's up to the calling script to deal with a `null` result. 
- However, every script that uses this utility needs to stop executing if the swatch name cannot be found.
- For this reason, I decided that `getSwatchByName()` should either return a `Swatch` or throw an `Error`. 

As an art, there's many ways to approach error handling. While Script Here relies on try-catch, the most important thing is to decide on an approach and use it consistently. 

### 5.1. Logging and Alerts

The following examples contain alerts and log entries that are useful during development, but should be commented out to improve performance in production code. Thanks to propagation, `myScript` handles the messaging, making these lines redundant and unnecessary.

### 5.2. Using Try-Catch

Each Script Hero utility use try-catch-throw to propagate errors up to the script which called the utility. 

```jsx
var myUtils = (function () {

  function getActiveDocument() {

    var functionID = 'myUtils.getActiveDocument';

    try {

      if (!app.activeDocument) {
        throw new Error("No active document.");
      }

      var doc = app.activeDocument;
      return doc;

    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;    
      // alert(e.message, functionID);
      // $.writeln(e.message);  
      throw e;
    }
  }


  function getSelectedItems() {
  
    var functionID = 'myUtils.getSelectedItems';
  
    try {
  
      if (!app.activeDocument) {
        throw new Error('No active document.');
      }

      if (app.activeDocument.selection.length === 0) {
        throw new Error('No selected objects.');
      }

      var selection = app.activeDocument.selection;
      return selection;
  
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      // alert(e.message, functionID);
      // $.writeln(e.message);
      throw e;
    }
  }

  // Expose Public APIs
  return {
    getActiveDocument: getActiveDocument,
    getSelectedItems: getSelectedItems
  };

})();
```

Scripts use try-catch to handle any errors thrown by a utility, or by the script's unique code.

```jsx
(function myScript() {

  // @include `./myUtils.jsx`

  var functionTitle = 'My Script';

  try {

    var doc = myUtils.getActiveDocument();
    var selection = myUtils.getSelectedItems();

  } catch (e) {
    alert(e.message, functionTitle);
    // $.writeln(e.message);
  }

})();

```

### 5.3. Check Parameters

Script Here uses conditional statements to check a method's parameters. 

```jsx
function roundToDecimal(number, decimalPlaces) {

  var functionID = 'miscUtils.roundToDecimal';

  try {

    if (number === undefined || number === null) {
      throw new Error('Missing or undefined parameter: number.');
    }

    if (typeof number !== 'number' || isNaN(number)) {
      throw new Error('number must be a number.');
    }
    
    var rounded;

    if (decimalPlaces) {

      if (typeof decimalPlaces !== 'number' || isNaN(decimalPlaces)) {
        throw new Error('decimalPlaces must be a number.');
      }
      
      rounded = parseFloat(number.toFixed(decimalPlaces));

    } else {
      rounded = Math.round(number);
    }

    return rounded;

  } catch (e) {
    e.message = 'ERROR ' + functionID + '\n' + e.message;
    // alert(e.message, functionID);
    // $.writeln(e.message);
    throw e;
  }
}
```





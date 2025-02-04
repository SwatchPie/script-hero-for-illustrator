# Adobe ExtendScript ES3 Style Guide

Selecting and using conventions consistently greatly improves the readability and maintainability of your code.

This style guide outlines the conventions Script Hero follows. These are taken from the standards for JavaScript using `clang-format` with Google style. 

## 1. Reserved Words

Reserved words are keywords that have special meaning in JavaScript and cannot be used as identifiers for variables, functions, or other objects. Using these reserved words as identifiers can lead to errors or unexpected behavior in your code.

### 1.1. Current Reserved Words

```jsx
break      case       catch      continue   default
delete     do         else       false      finally
for        function   if         in         instanceof
new        null       return     switch     this
throw      true       try        typeof     var
void       while      with
```

### 1.2. Future Reserved Words

These words are reserved for possible use in future versions of JavaScript.

```jsx
abstract    boolean     byte          char        class
const       debugger    double        enum        export
extends     final       float         goto        implements
import      int         interface     long        native
package     private     protected     public      short
static      super       synchronized  throws      transient
volatile
```

## 2. Special Characters

Like reserved keywords, special characters can have specific meanings in different contexts.

As a best practice, avoid using special characters in file, function, and variable names. This helps ensure your code is compatible and portable across different environments and tools. 

Common characters to avoid include spaces, `.`, `$` `#`, `&`, `\`, `%`, `*`, `@`, and non-ASCII characters. 

## 3. Indenting Code

- Use spaces (not tabs) to indent code. This avoids problems with how various editors render tabs.
- Use 2 spaces per indentation level to keep coded compact and easy to read.

```jsx
// Function
function calculateTotal(price, quantity) {
  var total = price * quantity;
  return total;
}

// Loop
for (var i = 0; i < items.length; i++) {
  var item = items[i];
  processItem(item);
}

// Continuation lines
var result = someFunction(
  firstArgument,
  secondArgument,
  thirdArgument
);
```

## 4. Using Spaces

Use spaces consistently to improve code readability.  Here's how to use spaces effectively in different scenarios.

### 4.1. After Keywords

Always use a space after keywords like `if`, `for`, `while`, `switch`, etc.

```jsx
// Correct
if (condition) {
  // Code block
}

// Incorrect
if(condition) {
  // Code block
}
```

### 4.2. Inside Parentheses

Never put spaces just inside the parentheses.

```jsx
// Correct
if (condition) {
  // Code block
}

// Incorrect
if ( condition ) {
  // Code block
}
```

### 4.3. Around Operators

Always use a space before and after an operator.

```jsx
// Correct
var total = price * quantity;

// Incorrect
var total=price*quantity;
```

### 4.4. After Commas

Always use a space after comas in lists and in function arguments.

```jsx
// Correct
var array = [1, 2, 3, 4];

// Incorrect
var array = [1,2,3,4];    
```

## 5. Using Quotes

### 5.1. Single Quotes for String Literals

Always use single quotes for string literals.

```jsx
var message = 'Hello, world!';
```

### 5.2. Double Quotes for JSON

While ExtendScript has no native JSON object, you can include a JSON parsing and stringifying library in your ExtendScript.

When dealing with JSON, use double quotes (") for keys and values, as required by the JSON standard.

```jsx
var jsonString = '{"name": "John", "age": 30}';
var jsonObject = JSON.parse(jsonString);
```

### 5.3. Escaping Single Quotes

Use the backslash (`\`) to escape single quotes within strings.

```jsx
var quote = 'It\'s a beautiful day!';
```

## 6. File Names

### 6.1. No Spaces or Punctuation

File names are constructed using alphanumeric characters, hyphens, and underscores. Never use spaces, periods, or other special characters within a file name.

### 6.2 Selecting a Convention

Using underscores, hyphens, and camelCase are all acceptable ways to name files. 

```jsx
// Underscores align with the Google Style Guide
// which emphasizes readability. 
main_script.jsx

// Hyphens align with Web Development Conventions.
main-script.jsx

// camelCase aligns with JavaScript Practices.
mainScript.jsx
```

### 6.3. Versioning

If needed, append version numbers just before the file extension. This example is for 'Version 2.3'.

```jsx
// Underscores
main_script_v2_3.jsx

// Hyphens
main-script-v2-3.jsx

// camelCase
mainScript_v2_3.jsx
mainScript-v2-3.jsx
```

## 7. File Headers

A well-structured file header provides essential information about a script, making it easier to understand its purpose, authorship, and usage at a glance. 

### 7.1. Basic File Header

```javascript
/*
 * @file exportLayersToPNG.jsx
 * @author SwatchPie.io
 * @version 1.0
 * @date 2024-06-01
 * 
 * @description
 * This script exports all layers of the currently active document
 * in Adobe Illustrator to individual PNG files.
 */
```

### 7.2. Comprehensive File Header

```jsx
/*
 * @file exportLayersToPNG.jsx
 * @author SwatchPie.io
 * @version 1.0
 * @date 2024-06-01
 * 
 * @description
 * This script exports all layers of the currently active document
 * in Adobe Illustrator to individual PNG files.
 * 
 * @example
 * 1. Open the document in Adobe Illustrator.
 * 2. Run this script from the Scripts menu.
 *
 * @remarks
 * - The script will create a folder named 'ExportedLayers' in the same directory as the source document to save the PNG files.
 * - Ensure all layers are visible and named appropriately.
 *
 * @changelog
 * - v1.2 - 2024-06-10 - Added support for custom export resolutions.
 * - v1.1 - 2024-06-05 - Fixed bug with layer naming.
 * - v1.0 - 2024-06-01 - Initial release.
 *
 */
```

## 8. Function Names

### 8.1. camelCase Verb-Noun Phrases

- Function names should be descriptive verb-noun phrases.
- Function names should be camelCase. 
- Avoid ambiguous names and abbreviations.
- Never use special characters such as spaces, hyphens, and punctuation. 

```jsx
// Correct
initializeDocument(); 
resizeImage();
calculateTotal();

// Incorrect
initDoc();
doTask();
resize-image();
resize_image();
```

### 8.2 Prefixes for Similar Actions

Use the same verbs - like `get`, `set`, and `update` - to prefix functions that perform similar tasks. 

```jsx
getLayerName();
getSwatchName();

setLayerName();
setSwatchName();

updateLayerName();
updateSwatchName();
```

### 8.3. Prefixes for Booleans

Boolean functions test for truthfulness. Use prefixes that represent that truth.

```jsx
isVisible();
hasErrors();
canExport();
shouldUpdate();
```

### 8.4. Prefixes for Private Functions

While ExtendScript does not have a formal concept of private functions, they can be simulated using function scope or a module pattern. Use an underscore to prefix private functions.

```jsx
// Using function scope
function outerFunction() {

  function _privateFunction() {
    // This is a private function
    alert("I am private");
  }

  function publicFunction() {
    // This is a public function
    alert("I am public");

    // It can call private function
    _privateFunction(); 
  }

  // Call public function to test
  publicFunction(); 
}

outerFunction();
```

## 9. Documenting Functions

- Use JSDoc comments to document a function's purpose and parameters. 
- Use single line comments to document elements inside a function. 
- Always place single line comments above the element being documented - never at the end of the element's line. 

Here is an example of a well documented function:

```jsx
/**
 * Exports all layers in the active document to separate PNG files.
 * @function exportLayersToPNG
 * @param {string} exportPath - The file path where the PNG files will be saved.
 * @param {number=72} resolution - PPI resolution for exported files. Default = 72
 * @returns {boolean} - `true` if the export is successful.
 * @example
 * var success = exportLayersToPNG("/Users/janedoe/ExportedLayers", 300);
 * if (success) {
 *   alert("Layers exported successfully!");
 * } else {
 *   alert("Export failed.");
 * }
 *
 * @remarks
 * - Includes hidden layers in the export.
 * - Ensure the specified exportPath exists and is writable.
 */

function exportLayersToPNG(exportPath, resolution) {
  // Default resolution if not provided
  resolution = resolution || 72;

  try {
    var doc = app.activeDocument;
    var layers = doc.layers;
    
    // Create export folder if it doesn't exist
    var exportFolder = new Folder(exportPath);
    if (!exportFolder.exists) {
      exportFolder.create();
    }

    // Loop through layers and export each as PNG
    for (var i = 0; i < layers.length; i++) {
      var layer = layers[i];
      var fileName = exportPath + "/" + layer.name + ".png";
      var file = new File(fileName);

      var exportOptions = new ExportOptionsPNG24();
      exportOptions.horizontalScale = resolution / 72 * 100;
      exportOptions.verticalScale = resolution / 72 * 100;

      doc.exportFile(file, ExportType.PNG24, exportOptions);
    }

    return true;
      
  } catch (e) {
    alert("Error: " + e.message);
    return false;
  }
}
```

## 10. Variable Names

### 10.1. Descriptive camelCase Names

- Variable names should describe the value they hold or the purpose they serve. 
- Names should be camelCase with no special characters like hyphens or spaces.
- Avoid using single letters or abbreviations unless they are widely understood.

```jsx
function calculateTotal(price, quantity) {
  var totalCost = price * quantity;
  return totalCost;
}
```

### 10.2. Arrays and Collections

Use plural nouns for arrays or collections to indicate that they hold multiple items.

```jsx
var items = [1, 2, 3];
var users = ["Alice", "Bob"];
```

### 10.3. Temporary Variables

For short-lived, temporary variables, use clear and concise names. Common examples are i for loop indices and temp for temporary storage.

```jsx
var items = [10, 20, 30];
for (var i = 0; i < items.length; i++) {
  var item = items[i];
  console.log("Item value: " + item);
}
```



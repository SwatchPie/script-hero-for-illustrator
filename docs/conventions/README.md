# Scripting Conventions

This section outlines the conventions and patterns Script Hero adhere to. The important things to know are;

## Utilities

At its core, Script Hero is a library of reusable utility functions. Utilities are organized as modules such as `docUtils` and `swatchUtils`.

```jsx
var docUtils = (function() {

  function getActiveDocument() {}

  return {
    getActiveDocument: getActiveDocument
  }
})();
```

Scripts built using utilities are Immediately Invoked Function Expressions (IIFEs). To use a utility function, `@include` the utility file using the correct relative path. 

```jsx
// @include '../library/utilities/docUtils.jsx'

(function() {

  var doc = docUtils.getActiveDocument();

})();
```


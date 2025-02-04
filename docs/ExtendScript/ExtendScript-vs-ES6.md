# Key Differences Between ExtendScript and JavaScript ES6

JavaScript ES6 (2015) is the foundation of modern JavaScript development and is supported by all modern browsers and JavaScript environments. If you're learning or working with JavaScript, it's probably ES6. 

Adobe ExtendScript is based on JavaScript ES3 (1999). ExtendScript also includes a small number of features from JavaScript ES5 (2009). 

Developers familiar with ES6 should be aware of several key differences when working with ExtendScript.

## No Arrow Functions

ES3 does not support arrow functions. Use regular function expressions or declarations instead.

```js
// ES6
const add = (a, b) => a + b;

// ES3
function add(a, b) {
  return a + b;
}
```

## No `let` or `const`

Only `var` is available for variable declarations. Extra care is needed to avoid issues with variable scope and hoisting.

```js
// ES6
let x = 10;
const y = 20;

// ES3
var x = 10;
var y = 20;
```

## Limited Array Methods

ES3 does not have many of the array methods available in ES6, such as `forEach`, `map`, `filter`, and `reduce`. Use for loops for iteration.

```js
// ES6
const arr = [1, 2, 3];

arr.forEach(function(item) {
  console.log(item);
});

// ES3
var arr = [1, 2, 3];

for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```

## No String Literals

Use string concatenation instead of template literals.

```js
// ES6
const name = 'John';
const greeting = `Hello, ${name}!`;

// ES3
var name = 'John';
var greeting = 'Hello, ' + name + '!';
```

## No Default Parameters

Functions cannot have default parameters in ES3. Use conditional statements to set default values.

```js
// ES6
function greet(name = 'Guest') {
  return `Hello, ${name}`;
}

// ES3
function greet(name) {
  name = name || 'Guest';
  return 'Hello, ' + name;
}
```

## No Destructuring

Destructuring assignments are not available in ES3. Access object properties directly.

```js
// ES6
const person = { name: 'John', age: 30 };
const { name, age } = person;

// ES3
var person = {
  name: 'John',
  age: 30
};

var name = person.name;
var age = person.age;
```

## No Spread Operator

In ES6, the spread operator is used to expand elements of an array into another array or into function arguments.

### Arrays

Use methods like `concat()` for arrays and methods like`apply()` for function arguments.

```js
// ES6
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // arr2 becomes [1, 2, 3, 4, 5]

function sum(a, b, c) {
  return a + b + c;
}

const numbers = [1, 2, 3];
console.log(sum(...numbers)); // Equivalent to sum(1, 2, 3)

// ES3
var arr1 = [1, 2, 3];
var arr2 = arr1.concat([4, 5]); // arr2 becomes [1, 2, 3, 4, 5]

function sum(a, b, c) {
  return a + b + c;
}

var numbers = [1, 2, 3];
console.log(sum.apply(null, numbers)); // Equivalent to sum(1, 2, 3)
```

### Objects

In ES6, the spread operator can be used to copy properties from one object into another. In ES3, you can use a `for...in` loop to copy properties from one object to another.

```js
// ES6
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 }; // obj2 becomes { a: 1, b: 2, c: 3 }

// ES3
var obj1 = { a: 1, b: 2 };
var obj2 = {};

for (var key in obj1) {
  if (obj1.hasOwnProperty(key)) {
    obj2[key] = obj1[key];
  }
}

obj2.c = 3; // obj2 becomes { a: 1, b: 2, c: 3 }
```

## No `console.log`

ExtendScript does not support `console.log` for debugging. Instead, use `$.writeln()` or `alert()` for logging information.

```js
// ES6
console.log('Hello, World!');

// ES3 with ExtendScript
$.writeln('Hello, World!');
alert('Hello, World!');
```

## No Classes

Use function constructors and prototype inheritance to create objects and handle inheritance.

```js
// ES6
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

// ES3
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.getDetails = function() {
  return this.name + ' is ' + this.age + ' years old';
};
```

## No Modules (`import`/`export`)

Use `// @include` with a relative path to include other script files.

```js
// ES6
import { myFunction } from './myModule.js';

// ES3 - Note there is no semicolon here.
//@ include "./myModule.jsx"

myFunction();
```

Use immediately invoked function expressions (IIFE) for modular code.

```js
// ES6
import { myFunction } from './myModule.js';

// ExtendScript
var myModule = (function() {

  function myFunction() {
    // Module code
  }

  // Expose public APIs
  return {
    myFunction: myFunction,
  };

})();


// @include 'myModule.jsx`
var myVar = myModule.myFunction();

```

## No Promises

ExtendScript is single-threaded and does not support asynchronous operations directly. Use callbacks for asynchronous operations instead.

```js
// ES6
fetch(url)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

// ES3
function fetchData(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        callback(null, JSON.parse(xhr.responseText));
      } else {
        callback(new Error('Request failed'));
      }
    }
  };
  xhr.send();
}

fetchData(url, function(error, data) {
  if (error) {
    alert('Error: ' + error.message);
  } else {
    alert('Data: ' + JSON.stringify(data));
  }
});
```

## No `Symbol`

Use unique string values to create unique identifiers.

```js
// ES6
const uniqueKey = Symbol('unique');

// ES3
var uniqueKey = 'unique_' + Math.random().toString(36).substr(2, 9);
```

### No `Set` and `Map`

Use objects and arrays for similar functionality.

```js
// ES6
const set = new Set([1, 2, 3, 4, 4]);
set.add(5);

const map = new Map();
map.set('key', 'value');

// ES3
var set = [];

[1, 2, 3, 4, 4].forEach(function(item) {
  if (set.indexOf(item) === -1) {
    set.push(item);
  }
});

set.push(5);

var map = {};
map['key'] = 'value';
```


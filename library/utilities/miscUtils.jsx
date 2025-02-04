/**
 * @file Script-Hero\library\utilities\miscUtils.jsx
 * @author SwatchPie.io
 * @version 1.0
 * @date 2024-11-04
 * @license 'CC BY-NC 4.0'
 * 
 * @description
 * A module with utility functions for 
 * miscellaneous tasks.
 * 
 */


// @include '../../global.jsx'

var miscUtils = (function() {

  // Module Properties
  var DEBUG = global.DEBUG.MISCUTILS;
  var EPSILON = 2.220446049250313e-16; 

  //
  // Strings
  // 

  /**
   * Loops through an ordinary object and creates an 
   * alert-ready string of key:value pairs.
   * @function miscUtils.objectToString
   * @param {object} obj An object with key:value pairs.
   * @returns {string} An alert-ready string of object's key:value pairs.
   * @throws {Error} If missing or undefined parameter.
   * @example 
   * var myObject = {key1: val1, ...}
   * var alertString = miscUtils.objectToString(myObject);
   * alert(alertString, functionID);
   */
  function objectToString(obj) {

    var functionID = 'miscUtils.objectToString ';

    try {

      if (typeof obj !== 'object') {
        throw new Error('Parameter must be an object: obj.');
      }
      
      var result = '';

      for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          result += 'Key: ' + key + '\nValue: ' + obj[key] + '\nType: ' + (typeof obj[key] + '\n');
        }
      }

      var message = 'SUCCESS ' + functionID + '\n' + result;
      if (DEBUG) alert(message, functionID);

      return result;

    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      throw e;
    }
  }


  /**
   * Trims whitespace from the beginning and end of a string.
   * @function miscUtils.trimString
   * @param {string} str - The string to trim.
   * @returns {string} - The trimmed string.
   * @throws {Error} If missing or undefined parameter.
   * @example
   * var str  = ' I need to be trimmed. ';
   *     str = trimString(str);
   */
  function trimString(str) {
  
    var functionID = 'miscUtils.trimString';
  
    try {

      if (typeof str !== 'string') {
        throw new Error('Parameter must be a string: str');
      }

      var result  =  str.replace(/^\s+|\s+$/g, ''); 

      var message = 'SUCCESS ' + functionID + '\n' + result + '\nOriginal length: ' + str.length + '\nTrimmed length: ' + result.length;

      if (DEBUG) alert(message, functionID);
      
      return result;
  
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      throw e;
    }
  }


  /**
   * Parses a string to a string, boolean, number, or null.
   * @function miscUtils.parseString
   * @param {string} str - The string to parse.
   * @returns {{string|boolean|number|null}} The parsed string.
   * @throws {Error} If missing or undefined parameters.
   * @example 
   * var str = '27';
   *     str = parseString(str);
   */
  function parseString(str) {
  
    var functionID = 'miscUtils.parseString';
  
    try {

      if (typeof str !== 'string') {
        throw new Error('Parameter must be a string: str');
      }

      var result = str;
      
      if (str === 'Null' || str === 'null') {
        result = null;
      }
      if (str === 'True' || str === 'true') {
        result =  true;
      }  
      if (str === 'False' || str === 'false') {
        result = false;
      }  
      if (parseFloat(str)) {
        result = parseFloat(str);
      }

      var message = 'SUCCESS ' + functionID + '\n' + result + '\nType: ' + (typeof result);
      if (DEBUG) alert(message, functionID);

      return result;
  
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      throw e;
    }
  }

  //
  // Files
  //

  /**
   * Prompts user for a file's save location.
   * @function miscUtils.saveFileDialog
   * @param {string} fileName - The file name including file extension (my-file.csv).
   * @returns {File} A file object.
   * @throws {Error} If missing or undefined parameter.
   * @throws {Error} User cancels saving file.
   * @example
   * var file = miscUtils.saveFileDialog('texting.txt');
   * var name = file.name;
   * var path = file.fullName;
   * @remarks
   * Distinct from `docUtils.saveDocument()` for `.ai` files.
   */
  function saveFileDialog(fileName) {
  
    var functionID = 'miscUtils.saveFileDialog';
  
    try {

      if (typeof fileName !== 'string') {
        throw new Error('Parameter must be a string: fileName');
      }
      
      // Create a temporary file so we can auto-fill
      // the file name in the dialog.
      var temp = new File(fileName);
      var file = temp.saveDlg();

      if (!file) {
        throw new Error('Save file canceled.');
      }

      var message = 'SUCCESS ' + functionID + '\n' +  file.fullName;
      if (DEBUG) alert(message, functionID);

      return file;

    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      throw e;
    }
  }


  /**
   * Removes the extension from a file name.
   * @function miscUtils.getFileBaseName
   * @param {string} fileName - The `file.name` to process.
   * @returns {string} The file name minus the extension.
   * @throws {Error} If missing or undefined parameters.
   * @example 
   * var doc = docUtils.getActiveDocument();
   * var docTitle = miscUtils.getFileBaseName(doc.name);
   * @example
   * var csvFile = new File('/path/to/file.csv');
   * var csvBaseName = miscUtils.getFileBaseName(csvFile.name);
   * @remarks
   * - Replaces just the last extension.
   * - `demo.min.ai` > `demo.min`
   */
  function getFileBaseName(fileName) {
  
    var functionID = 'miscUtils.getFileBaseName';
  
    try {

      if (typeof fileName !== 'string') {
        throw new Error('Parameter must be a string: fileName');
      }
      
      var result = fileName.replace(/\.[^\.]+$/, ''); 

      var message = 'SUCCESS ' + functionID + '\n' + fileName + '\n' + result;
      if (DEBUG) alert(message, functionID);

      return result;
    
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      throw e;
    }  
  }

  //
  // Math 
  //

  /**
   * Rounds a number to a specified number of decimal places.
   * @function miscUtils.roundNumber
   * @param {number} number - The number to round.
   * @param {number} [decimalPlaces=0] - Number of decimal places. Default is a whole number.
   * @returns {number} The rounded number.
   * @throws {Error} If missing, undefined, or NaN parameters.
   * @example
   * var number = 3.1459;
   *     number = miscUtils.roundNumber(number, 2);
   * @remarks
   * - Works for any number of decimal places, including 0.
   * - Works with negative decimal places for rounding to tens, hundreds, and so on.
   * - Strips trailing zeros. 
   */
  function roundNumber(number, decimalPlaces) {

    var functionID = 'miscUtils.roundNumber';

    try {

      if (isNaN(number)) {
        throw new Error('Parameter must be a number: number');
      }

      var decimalPlacesDefault = 0;
      var decimalPlacesExists = !isNaN(decimalPlaces);
          decimalPlaces = decimalPlacesExists ? decimalPlaces : decimalPlacesDefault;

      var factor = Math.pow(10, decimalPlaces);
      var result = Math.round(number * factor) / factor;
          result = parseFloat(result.toFixed(decimalPlaces));
      
      var numberStr = '\nNumber: ' + number;
      var decStr = '\nDecimals: ' +  decimalPlaces;
      var resultStr = '\nRounded: ' + result;
      var message = 'SUCCESS ' + functionID + numberStr + decStr + resultStr;
      if (DEBUG) alert(message, functionID);

      return result;
      
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      throw e;
    }
  }


  /**
   * Generates a random number from an inclusive range.
   * @function miscUtils.generateRandomNumber 
   * @param {number} minVal - The lower limit of the range.
   * @param {number} maxVal - The upper limit of the range.
   * @param {number} [decimalPlaces=0] - Number of decimal places. Default is a whole number. 
   * @returns {number} The randomized number.
   * @throws {Error} If missing or undefined module property.
   * @throws {Error} If missing, undefined, or NaN parameters.
   * @example
   * var randomInteger = miscUtils.generateRandomNumber(-100, 50);
   * var randomFloat = miscUtils.generateRandomNumber(-100, 50, 3);
   * @remarks
   * - Inclusive means the result can equal `minVal` or `maxVal`.
   * - `Math.random()` results in 15 to 17 decimal places.
   */
  function generateRandomNumber(minVal, maxVal, decimalPlaces) {

    var functionID = 'miscUtils.generateRandomNumber';
    
    try {

      if (isNaN(EPSILON)) {
        throw new Error('Module property must be a number: EPSILON');
      }
      if (isNaN(minVal)) {
        throw new Error('Parameter must be a number: minVal');
      }
      if (isNaN(maxVal)) {
        throw new Error('Parameter must be a number: maxVal');
      }
      if (maxVal <= minVal) {
        throw new Error('minVal must be less than maxVal')
      }

      var decimalPlacesDefault = 0;
      var decimalPlacesExists = !isNaN(decimalPlaces);
      decimalPlaces = decimalPlacesExists ? decimalPlaces : decimalPlacesDefault;

      var result = Math.random() * (maxVal - minVal + EPSILON) + minVal;
          result = roundNumber(result, decimalPlaces);

      var minStr = '\nMinimum: ' + minVal;
      var maxStr = '\nMaximum: ' + maxVal;
      var decStr = '\nDecimals: ' + decimalPlaces;
      var resultStr = '\nRandom: ' + result;
      var message = 'SUCCESS ' + functionID + minStr + maxStr + decStr + resultStr;
      if (DEBUG) alert(message, functionID);

      return result;

    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      throw e;
    }
  }

  //
  // Arrays
  //

  /**
   * Check if a list (array) contains a specified value.
   * @function miscUtils.checkArrayValue
   * @param {{string|number|bool}} value - The value to check for.
   * @param {Array} array - The list to check.
   * @returns {boolean} `true` if value is present in array.
   * @throws {Error} If missing or undefined parameters.
   * @example
   * var colors = ['red', 'white', 'blue'];
   * var colorExists = miscUtils.checkArrayValue('red', colors);
   * @example
   * var numbers = [1, 2, 3];
   * var numberExists = miscUtils.checkArrayValue(3, numbers);
   * 
   */
  function checkArrayValue(value, array) {

    var functionID = 'miscUtils.checkArrayValue';

    try {

      if (typeof value === 'undefined' || value === null) {
        throw new Error('Missing or undefined parameter: value');
      }
      if (!(array instanceof Array)) {
        throw new Error('Parameter must be an array: array.');
      }
    
      var result = false;

      for (var i = 0; i < array.length; i++) {
        if (array[i] == value) {
          result = true;
          break;
        }
      }

      var message = 'SUCCESS ' + functionID + '\nValue: ' + value + '\nExists: ' + result;
      if (DEBUG) alert(message, functionID);

      return result;
    
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      throw e;
    }
  }


  /**
   * Removes a specified value from a list (array).
   * @function miscUtils.deleteArrayValue
   * @param {{string|number|boolean}} value - The value to remove.
   * @param {Array} array - The list to remove value from.
   * @returns {Array} A new list with the value removed. 
   * @throws {Error} If missing or undefined parameters.
   * @example
   * var colors = ['red', 'white', 'blue'];
   *     colors = deleteArrayValue('red', colors);
   * @example
   * var numbers = [1, 2, 3];
   * var numbersUpdated = miscUtils.deleteArrayValue(3, numbers);
   */
  function deleteArrayValue(value, array) {
  
    var functionID = 'miscUtils.deleteArrayValue';
  
    try {

      if (typeof value === 'undefined' || value === null) {
        throw new Error('Missing or undefined parameter: value');
      }
      if (!(array instanceof Array)) {
        throw new Error('Parameter must be an array: array.');
      }
      
      var result = [];

      for (var i = 0; i < array.length; i++) {
        var item = array[i];
        if (item !== value) {
          result.push(item);
        }
      }
 
      var message = 'SUCCESS ' + functionID + '\nValue deleted: ' + value;
      if (DEBUG) alert(message, functionID);

      return result; 
    
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      throw e;
    }
  }


  /**
   * Converts a list (array) to a string of comma separated values.
   * @function miscUtils.arrayToString
   * @param {Array} array - The list to convert.
   * @returns {string} The converted string.
   * @throws {Error} If missing or undefined parameters.
   * @example
   * var colors = ['red', 'white', 'blue'];
   * var colorsStr = miscUtils.arrayToString(colors);
   */
  function arrayToString(array) {

    var functionID = 'miscUtils.arrayToString';
  
    try {
  
      if (!(array instanceof Array)) {
        throw new Error('Parameter must be an array: array.');
      }

      var result = '';
      
      for (var i = 0; i < array.length; i++) {
        result += array[i]; 
        if (i < array.length - 1) {
          result += ', ';
        }
      }
      
      var message = 'SUCCESS ' + functionID + '\n' + result;
      if (DEBUG) alert(message, functionID);

      return result;
    
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      throw e;
    }
  }


  /**
   * Converts a string of values to a list (array).
   * @function miscUtils.stringToArray
   * @param {string} str - The string to convert.
   * @param {string} [splitOn=','] - What separates items in the string? Default is a comma.
   * @returns {Array} The string converted to a list.
   * @throws {Error} If missing or undefined parameters.
   * @example 
   * var commas = 'red, white, blue';
   *     commas = miscUtils.stringToArray(commas);
   * @example 
   * var spaces = 'red white blue';
   * var spacesList = miscUtils.stringToArray(spaces, ' ');
   * @remarks
   * - `splitOn` should be a comma `','` or a space `' '`.
   * - All list values will be strings - numbers and booleans need parsing.
   * - Use `itemUtils.parseString(value);` to convert strings.
   */
  function stringToArray(str, splitOn) {
  
    var functionID = 'miscUtils.stringToArray';
  
    try {

      if (typeof str !== 'string') {
        throw new Error('Parameter must be a string: str');
      }

      // Default split
      var splitOnDefault = ', ';
      var splitOnExists = (typeof splitOn === 'string');
      splitOn = splitOnExists ? splitOn : splitOnDefault;

      // Accumulate list
      var items = str.split(splitOn);
      var result = [];

      for (var i = 0; i < items.length; i++) {
        var item = items[i];
        result.push(item); 
      }

      var message = 'SUCCESS ' + functionID + '\n' + result;
      if (DEBUG) alert(message, functionID);

      return result;
    
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      throw e;
    }
  }


  /**
   * Shuffle an array using Fisher-Yates algorithm.
   * @function miscUtils.shuffleArray
   * @param {Array} array - An iterable collection.
   * @returns {Array} The original array, shuffled.
   * @throws {Error} If missing or undefined parameters.
   * @example 
   * var numbers = [1,2,3];
   *     numbers = miscUtils.shuffleArray(numbers);
   * @example
   * var alphas = ['A','B','C'];
   * var alphasShuffle = miscUtils.shuffleArray(alphas);
   */
  function shuffleArray(array) {
  
    var functionID = 'miscUtils.shuffleArray';
  
    try {

      if (!(array instanceof Array)) {
        throw new Error('Parameter must be an array: array.');
      }

      var result = array.slice();
      
      for (var i = result.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = result[i];
        result[i] = result[j];
        result[j] = temp;
      }

      var message = 'SUCCESS ' + functionID + '\nShuffled:\n' + result;
      if (DEBUG) alert(message, functionID);

      return result;
    
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      throw e;
    }
  }


  // Expose Methods
  return {
    // Strings
    objectToString: objectToString,
    trimString: trimString,
    parseString: parseString,
    // Files
    saveFileDialog: saveFileDialog,
    getFileBaseName: getFileBaseName,
    // Math
    roundNumber: roundNumber,
    generateRandomNumber: generateRandomNumber,
    // Arrays 
    checkArrayValue: checkArrayValue,
    deleteArrayValue: deleteArrayValue,
    arrayToString: arrayToString,
    stringToArray: stringToArray,
    shuffleArray: shuffleArray,
  };

})();


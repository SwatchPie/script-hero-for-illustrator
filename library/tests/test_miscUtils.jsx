/**
 * @file Script-Hero\library\tests\test_miscUtils.jsx
 * @author SwatchPie.io
 * @version 1.0
 * @date 2024-06-10
 * @license 'CC BY-NC 4.0'
 * 
 * @description
 * Manual tests for the miscUtils module.
 * 
 * Each `test_` function models a utility's
 * use in a larger script. 
 * 
 * Scroll to bottom to run tests.
 * 
 */


// @include '../utilities/miscUtils.jsx'

var test_miscUtils = (function () {

  // Strings

  function test_objectToString() {
  
    var functionID = 'test_objectToString';
  
    try {
  
      var obj = {
        isString: 'I am a string',
        isBool: true,
        isInt: 57,
        isDec: 24.86,
        isNull: null
      }

      var str = miscUtils.objectToString(obj);
    
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      alert(e.message, functionID);
    }   
  }

  function test_trimString() {
  
    var functionID = 'test_trimString';
  
    try {
  
      var str = ' I need to be trimmed ';      
          str = miscUtils.trimString(str);
    
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      alert(e.message, functionID);
    }
  }

  function test_parseString() {
  
    var functionID = 'test_parseString';
  
    try {

      var isString = 'I am a string';
          isString = miscUtils.parseString(isString);
      var isBool = 'True';
          isBool = miscUtils.parseString(isBool);
      var isInt = '27';
          isInt = miscUtils.parseString(isInt);
      var isDec = '57.42';
          isDec = miscUtils.parseString(isDec);
      var isNull = 'null';
          isNull = miscUtils.parseString(isNull);
    
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      alert(e.message, functionID);
    }
    
  }

  // Files

  function test_saveFileDialog() {
  
    var functionID = 'test_saveFileDialog';

    try {
    
      var file = miscUtils.saveFileDialog('test-file.md');
    
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      alert(e.message, functionID);
    }
  }

  function test_getFileBaseName() {
  
    var functionID = 'test_fileProto';
  
    try {
  
      var file = new File("/path/to/demo.min.ai");
      var baseName = miscUtils.getFileBaseName(file.name);
    
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      alert(e.message, functionID);
    }
  }  

  // Math

  function test_roundNumber() {
  
    var functionID = 'test_roundNumber';
  
    try {
  
      var number = 173.543987;
      var wholeNumber = miscUtils.roundNumber(number);
      var oneDecimal = miscUtils.roundNumber(number, 1);
      var twoDecimals = miscUtils.roundNumber(number, 2);
    
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      alert(e.message, functionID);
    }
  }

  function test_generateRandomNumber() {
  
    var functionID = 'test_generateRandomNumber';
  
    try {

      var randomInteger = miscUtils.generateRandomNumber(-10, 10);
      var randomFloat = miscUtils.generateRandomNumber(-10, 10, 3);
    
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      alert(e.message, functionID);
    }
  }


  // Arrays

  function test_checkArrayValue() {
  
    var functionID = 'test_checkArrayValue';

    try {

      var colors = ['red', 'white', 'blue'];
      var colorExists = miscUtils.checkArrayValue('red', colors);
          colorExists = miscUtils.checkArrayValue('orange', colors);

      var numbers = [1, 2, 3];
      var numberExists = miscUtils.checkArrayValue(3, numbers);
          numberExists = miscUtils.checkArrayValue(7, numbers);
    
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      alert(e.message, functionID);
    }
  }

  function test_deleteArrayValue() {
  
    var functionID = 'test_deleteArrayValue';
  
    try {
      var colors = ['red', 'white', 'blue'];
          colors = miscUtils.deleteArrayValue('red', colors);
          colors = miscUtils.deleteArrayValue('orange', colors);

      var numbers = [1, 2, 3];
          numbers = miscUtils.deleteArrayValue(3, numbers);
          numbers = miscUtils.deleteArrayValue(7, numbers);
    
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      alert(e.message, functionID);
    }
  }

  function test_arrayToString() {
  
    var functionID = 'test_arrayToString';
  
    try {
      var colors = ['red', 'white', 'blue'];
      var colorsStr = miscUtils.arrayToString(colors);

      var numbers = [1, 2, 3];
      var numbersStr = miscUtils.arrayToString(numbers);
    
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      alert(e.message, functionID);
    }
  }

  function test_stringToArray() {
  
    var functionID = 'test_stringToArray';
  
    try {

      var commas = 'red, white, blue';
          commas = miscUtils.stringToArray(commas);

      var spaces = 'red white blue';
          spaces = miscUtils.stringToArray(spaces, ' ');
    
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      alert(e.message, functionID);
    }
  }

  function test_shuffleArray() {
  
    var functionID = 'test_shuffleArray';
  
    try {
  
      var numbers = [0,1,2,3,4,5,6,7,8,9,10];
      var numbersShuffled = miscUtils.shuffleArray(numbers);

      var alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
      var alphaShuffled = miscUtils.shuffleArray(alpha);
    
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      alert(e.message, functionID);
    }
  }


  // Expose Methods
  return {
    test_objectToString: test_objectToString,
    test_parseString: test_parseString,
    test_saveFileDialog:test_saveFileDialog,
    test_getFileBaseName: test_getFileBaseName,
    test_trimString: test_trimString,
    test_roundNumber: test_roundNumber,
    test_generateRandomNumber: test_generateRandomNumber,
    test_checkArrayValue: test_checkArrayValue,
    test_deleteArrayValue: test_deleteArrayValue,
    test_arrayToString: test_arrayToString,
    test_stringToArray: test_stringToArray,
    test_shuffleArray: test_shuffleArray
  };
  
})();


/*
 * Run Tests
 * 
 * 1. Uncomment a single test.
 * 2. Create one of the given scenarios.
 * 3. Run this script with Ctrl+F12. 
 * 4. See a SUCCESS or ERROR alert as appropriate.
 * 5. Repeat for each scenario. 
 */

/////////////////////////////////////////////////////////////

// test_miscUtils.test_objectToString();

// Scenario: Illustrator is running.
// Pass: Alert with key:value pairs.

/////////////////////////////////////////////////////////////

// test_miscUtils.test_trimString();

// Scenario: Illustrator is running
// Pass: Alert showing string and lengths before & after trimming.

/////////////////////////////////////////////////////////////

// test_miscUtils.test_parseString();

// Scenario: Illustrator is running.
// Pass: Alert showing correctly parsed strings.

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

// test_miscUtils.test_saveFileDialog();

// Scenario: When prompted, select a save location.
// Pass: Alert with file name and path. 

// Scenario: When prompted, cancel the save action
// Pass: ERROR Save file canceled.

/////////////////////////////////////////////////////////////

// test_miscUtils.test_getFileBaseName();

// Scenario: Illustrator is running.
// Pass: Alert with the full file name and just the base name.

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

// test_miscUtils.test_roundNumber();

// Scenario: Run script.
// Pass: Alerts with a number rounded to 0, 1, and 2 decimals.

/////////////////////////////////////////////////////////////

// test_miscUtils.test_generateRandomNumber();

// Scenario: Illustrator is running
// Pass: Alerts with a random integer and 
//       a 3-decimal float between -10 and 10.
// Pass: Run multiple times and see different results.

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

// test_miscUtils.test_checkArrayValue();

// Scenario: Illustrator is running.
// Pass: 4 alerts showing true and false results for
//       a list of strings and a list of numbers. 

/////////////////////////////////////////////////////////////

// test_miscUtils.test_deleteArrayValue();

// Scenario: Illustrator is running.
// Pass: 4 Alerts showing existing and non-existent values
//       deleted from a list of strings and a list of numbers.

/////////////////////////////////////////////////////////////

// test_miscUtils.test_arrayToString();

// Scenario: Illustrator is running.
// Pass: 2 alerts showing string and numeric lists converted
//       to a comma-separated string with a space after each comma. 

/////////////////////////////////////////////////////////////

// test_miscUtils.test_stringToArray();

// Scenario: Illustrator is running.
// Pass: 2 alerts showing a comma-separated and a space-separated
//       string converted to equivalent lists (array).  

/////////////////////////////////////////////////////////////

// test_miscUtils.test_shuffleArray();

// Scenario: Illustrator is running.
// Pass: 2 alerts showing shuffled alphabetical and ordinal lists.
// Pass: Run multiple times to see different results. 

/////////////////////////////////////////////////////////////


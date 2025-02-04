/**
 * @file Script-Hero\library\tests\test_global.jsx
 * @author SwatchPie.io
 * @version 1.0
 * @date date
 * @license 'CC BY-NC 4.0'

 * @description
 * Manual tests for the global module.
 * 
 * Each `test_` function models a utility's
 * use in a larger script.
 * 
 * Scroll to bottom to run tests.
 * 
 */


// @include '../../global.jsx'
// @include '../utilities/miscUtils.jsx'

var test_global = (function() {

  function test_alertGlobals() {
  
    var functionID = 'test_alertGlobals';
  
    try {
  
      var alertString = miscUtils.objectToString (global);
      alert(alertString, functionID);

      // alert(global.author, functionID);
      // alert(global.url, functionID);

      // $.writeln(message);
  
    } catch (e) {
      alert(e.message, functionID);
      // $.writeln(e.message);
    }
  }


  // Expose Methods
  return {
    test_alertGlobals: test_alertGlobals
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

test_global.test_alertGlobals();

// Scenario: Illustrator is running.
// Pass: Alert with all global key:value pairs

/////////////////////////////////////////////////////////////




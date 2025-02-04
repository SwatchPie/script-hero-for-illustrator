/**
 * @file F:\Script-Hero\templates\test_utility.jsx
 * @author SwatchPie.io
 * @version 1.0
 * @date 2025-01-31
 * @license 'CC BY-NC 4.0'
 * 
 * @description
 * Manual tests for the `myUtils` module.
 * 
 * Each `test_` function models a utility's
 * use in a larger script.
 * 
 * Scroll to bottom to run tests.
 * 
 */


// @include '../utilities/utility.jsx'
// @include '../utilities/docUtils.jsx'
// @include '../utilities/itemUtils.jsx'
// @include '../utilities/miscUtils.jsx'

var test_myUtils = (function() {

  function test_myUtil() {
  
    var functionID = 'test_myUtil';
  
    try {
  
      
  
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      alert(e.message, functionID);
    }
  }

  // Expose Methods
  return {
    test_myUtil: test_myUtil,
  };

})();


/**
 * Run Tests
 * 
 *   1. Uncomment a single test.
 *   2. Create one of the given scenarios.
 *   3. Run this script with CTRL+F12.
 *   4. See a SUCCESS or ERROR alert as appropriate.
 *   5. Repeat for each scenario.
 * 
 */

/////////////////////////////////////////////////////////////

test_myUtils.test_myUtil();

// Scenario: An open document.
// Pass: An alert with some information.

/////////////////////////////////////////////////////////////


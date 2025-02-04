/**
 * @file script-hero/library/patterns/test-module.jsx
 * @author SwatchPie.io
 * @version 1.0
 * @date 2024-11-11
 * @license 'CC BY-NC 4.0'
 * 
 * @description
 * Example of a test module and method.
 * 
 * VS Code snippets:
 *    jsx-test-module
 *    jsx-test-function
 *    jsx-test-try-catch
 * 
 */

///////////////////////////////////////////////////////////////


/**
 * @file script-hero/library/tests/test_utilityUtils.jsx
 * @author SwatchPie.io
 * @version 1.0
 * @date date
 * @license 'CC BY-NC 4.0'

 * @description
 * Manual tests for the utilityUtils module.
 * 
 * Each `test_` function models a utility's
 * use in a larger script.
 * 
 * Scroll to bottom to run tests.
 * 
 */


// @include '../utilities/utilityUtils.jsx'
// @include '../utilities/docUtils.jsx'
// @include '../utilities/itemUtils.jsx'
// @include '../utilities/miscUtils.jsx'

var test_utilityUtils = (function() {

  /**
   * Description
   * @function util.test_method
   */
  function test_method() {

    var functionID = 'util.test_method';

    try {

      // $0      

      var message = 'SUCCESS ' + functionID + '\n';
      if (DEBUG) alert(message, functionID);

    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      throw e;
    }
  }


  // Expose Methods
  return {
    test_method: test_method,
  };

})();





/**
 * Run Tests
 * 
 *     1. Uncomment a single test.
 *     2. Create one of the given scenarios.
 *     3. Run this script with CTRL+F12.
 *     4. See a SUCCESS or ERROR alert as appropriate.
 *     5. Repeat for each scenario.
 */

/////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////

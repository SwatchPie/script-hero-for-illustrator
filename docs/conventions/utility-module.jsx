/**
 * @file script-hero/library/patterns/utility-module.jsx
 * @author SwatchPie.io
 * @version 1.0
 * @date 2024-11-11
 * @license 'CC BY-NC 4.0'
 * 
 * @description
 * Example of a utility module and method.
 * 
 * VS Code Snippets:
 *    - jsx-util-module
 *    - jsx-util-function
 *    - jsx-util-try-catch
 * 
 */

///////////////////////////////////////////////////////////////

/**
 * @file script-hero/library/utilities/artboardUtils.jsx
 * @author SwatchPie.io
 * @version 1.0
 * @date 2024-06-10
 * @license 'CC BY-NC 4.0'
 * 
 * @description
 * A module with utility functions for 
 * working with Artboards.
 * 
 */

// @include '../../global.jsx'
// @include './docUtils.jsx'
// @include './itemUtils.jsx'
// @include './miscUtils.jsx'

var artboardUtils = (function() {

  // Module Properties
  var DEBUG = global.DEBUG_ARTBOARDUTILS;

  /**
   * Description
   * @function util.utilityMethod
   */
  function utilityMethod() {

    var functionID = 'util.utilityMethod';

    try {

      

      var message = 'SUCCESS ' + functionID + '\n';
      if (DEBUG) alert(message, functionID);

    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      throw e;
    }
  }

  // Expose Methods
  return {
    utilityMethod: utilityMethod
  };

})();


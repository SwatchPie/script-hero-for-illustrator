/**
 * @file Script-Hero\templates\utility.jsx
 * @author SwatchPie.io
 * @version 1.0
 * @date 2025-01-31
 * @license 'CC BY-NC 4.0'
 * 
 * @description
 * A module with utility functions for 
 * working with description.
 * 
 */


// @include '../../global.jsx'
// @include './docUtils.jsx'
// @include './itemUtils.jsx'
// @include './miscUtils.jsx'

var utility = (function() {

  // Module Properties
  var DEBUG = global.UTILITY;

  /**
   * Description
   * @function utility.utilityName
   */
  function utilityName() {
  
    var functionID = 'utility.utilityName';
  
    try {
  
      // Code here
  
      // Debug
      var message = 'SUCCESS ' + functionID + '\n';
      if (DEBUG) alert(message, functionID);
  
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      throw e;
    }
  }
  
  
  // Expose Methods
  return {
    utilityName: utilityName
  };

})();


/**
 * @file Script-Hero\library\tests\test_layerUtils.jsx
 * @author SwatchPie.io
 * @version 1.0
 * @date 2024-06-10
 * @license 'CC BY-NC 4.0'
 * 
 * @description
 * Manual tests for the layerUtils module.
 * 
 * Each `test_` function models a utility's
 * use in a larger script. 
 * 
 * Scroll to bottom to run tests.
 * 
 */



// @include '../utilities/docUtils.jsx'
// @include '../utilities/layerUtils.jsx'

var test_layerUtils = (function () {

  function test_getMakeLayer() {
  
    var functionID = 'test_getMakeLayer';
  
    try {

      var doc = docUtils.getActiveDocument();
      var layer = layerUtils.getMakeLayer(doc, 'Get or Make Layer');
    
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      alert(e.message, functionID);
    }
  }

  function test_makeNewLayer() {
  
    var functionID = 'test_makeNewLayer';
  
    try {

      var doc = docUtils.getActiveDocument();
      var layer = layerUtils.makeNewLayer(doc, 'Make New Layer');
    
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      alert(e.message, functionID);
    }
  }


  // Expose Methods
  return {
    test_getMakeLayer: test_getMakeLayer,
    test_makeNewLayer: test_makeNewLayer,
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

// test_layerUtils.test_getMakeLayer();

// Scenario: No layer named 'Get Make Layer'
// Pass: Alert showing layer name.
//       Layer is added to Layer panel.

// Scenario: Run test again where 'Get Make Layer' exists
//           and layer is locked + hidden.
// Pass: Alert with layer name.
//       No duplicate layer in Layers panel.
//       Layer is unlocked, made visible, and made active.

/////////////////////////////////////////////////////////////

// test_layerUtils.test_makeNewLayer();

// Scenario: No layer named 'Make New Layer'
// Pass: Alert with layer name.
//       New layer in Layers panel.

// Scenario: Run test again where 'Make New Layer' exists.
// Pass: Alert with layer name.
//       A second layer in Layers panel.

/////////////////////////////////////////////////////////////



/////////////////////////////////////////////////////////////


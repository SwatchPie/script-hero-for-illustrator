/**
 * @file Script-Hero\library\tests\test_jsonUtils.jsx
 * @author SwatchPie.io
 * @version 1.0
 * @date 2024-11-24
 * @license 'CC BY-NC 4.0'
 * 
 * @testFile Script-Hero\test-files\jsonUtils\jsonUtils_layer-data.ai
 * 
 * @description
 * Manual tests for the `jsonUtils` module.
 * 
 * Each `test_` function models a utility's
 * use in a larger script. 
 * 
 * Scroll to bottom to run tests.
 * 
 */


// @include '../utilities/jsonUtils.jsx'
// @include '../utilities/docUtils.jsx'

var test_jsonUtils = (function () {

  function test_getJSONFile() {
  
    var functionID = 'test_getJSONFile';
  
    try {
      var jsonFile = jsonUtils.getJSONFile();
    
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      alert(e.message, functionID);
    }
  }

  function test_setJSONKeys() {
  
    var functionID = 'test_setJSONKeys';

    try {

      var doc = docUtils.getActiveDocument();
      var jsonFile = jsonUtils.getJSONFile();
      var layers = doc.layers;

      // Accumulate updates
      var jsonUpdates = {};

      for (var i = 0; i < layers.length; i++) {
        try {

          var layer = layers[i];
          var itemID = layer.name;
          var visible = layer.visible;
          var unlocked = !(layer.locked);
          var accessible = visible && unlocked;

          // A single key
          var singleKey = itemID + '_single';
          jsonUpdates[singleKey] = 'No children here.';

          // Nested keys
          jsonUpdates[itemID] = {};

          jsonUpdates[itemID]['visible'] = visible;
          jsonUpdates[itemID]['unlocked'] = unlocked;
          jsonUpdates[itemID]['accessible'] = accessible;

          jsonUpdates[itemID]['keyStr'] = 'Test String.';
          jsonUpdates[itemID]['keyInt'] = 27;
          jsonUpdates[itemID]['keyDec'] = 42.71;
          jsonUpdates[itemID]['keyNull'] = null;
       
        } catch (e) {
          e.message = 'ERROR Layer (' + i + ') ' + layer.name + '\n' + e.message;
          throw e; 
        }
      }  

      jsonUtils.setJSONKeys(jsonFile, jsonUpdates);
    
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      alert(e.message, functionID);
    }
  }

  function test_getJSONKey() {
  
    var functionID = 'test_getJSONKey';

    try {

      var doc = docUtils.getActiveDocument();
      var layers = doc.layers;

      var jsonFile = jsonUtils.getJSONFile();
      var jsonObject = jsonUtils.getJSONObject(jsonFile);

      for (var i = 0; i < layers.length; i++) {
        try {

          var layer = layers[i];
          var itemID = layer.name;

          // A single key
          var singleKey = itemID + '_single';
          var single = jsonUtils.getJSONKey(jsonObject, singleKey);

          // Nested keys
          var visibleKey = itemID + '.visible';
          var unlockedKey = itemID + '.unlocked';
          var accessibleKey = itemID + '.accessible';

          var visible = jsonUtils.getJSONKey(jsonObject, visibleKey);
          var unlocked = jsonUtils.getJSONKey(jsonObject, unlockedKey);
          var accessible = jsonUtils.getJSONKey(jsonObject, accessibleKey);

        } catch (e) {
          e.message = 'ERROR Layer (' + i + ') ' + layer.name + '\n' + e.message;
          throw e; 
        }
      }  

    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      alert(e.message, functionID);
    }
  }

  function test_deleteJSONKeys() {
  
    var functionID = 'test_deleteJSONKeys';

    try {

      var doc = docUtils.getActiveDocument();
      var layers = doc.layers;
      var jsonFile = jsonUtils.getJSONFile();

      // Accumulate kay paths
      var jsonKeyPaths = [];

      for (var i = 0; i < layers.length; i++) {
        try {

          var layer = layers[i];
          var itemID = layer.name;

          var singleKey = itemID + '_single';
          var visibleKey = itemID + '.visible';
          var unlockedKey = itemID + '.unlocked';
          var accessibleKey = itemID + '.accessible';

          jsonKeyPaths.push(singleKey);
          jsonKeyPaths.push(visibleKey);
          jsonKeyPaths.push(unlockedKey);
          jsonKeyPaths.push(accessibleKey);

        } catch (e) {
          e.message = 'ERROR Layer (' + i + ') ' + layer.name + '\n' + e.message;
          throw e; 
        }
      }  

      // Delete keys
      jsonUtils.deleteJSONKeys(jsonFile, jsonKeyPaths);
 
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      alert(e.message, functionID);
    }
  }


  // Expose Methods
  return {
    test_getJSONFile: test_getJSONFile,
    test_setJSONKeys: test_setJSONKeys,
    test_getJSONKey: test_getJSONKey,
    test_deleteJSONKeys: test_deleteJSONKeys,
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

// test_jsonUtils.test_getJSONFile();

// Scenario: An open document + no JSON file
// Pass: A new JSON file is created.

// Scenario: An open document + existing JSON file
// Pass: Existing file is not altered.

/////////////////////////////////////////////////////////////

// test_jsonUtils.test_setJSONKeys(); 

// Scenario: An open document with 3 layers:
//           - 1 unlocked and visible
//           - 1 locked and visible
//           - 1 unlocked and hidden
// Pass: JSON file is created if needed and 
//       reflects test keys for all 3 layers

/////////////////////////////////////////////////////////////

// test_jsonUtils.test_getJSONKey();

// Scenario: Open document + test_setJSONKeys()
// Pass: A series of alerts with key, value, and value type.

/////////////////////////////////////////////////////////////

// test_jsonUtils.test_deleteJSONKeys();

// Scenario: Open document + test_setJSONKeys();
// Pass: Alert indicating keys have been deleted.
//       JSON file no longer has: 
//       - The '*_single' keys.
//       - Child 'visible', 'unlocked', or `accessible` keys. 

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////


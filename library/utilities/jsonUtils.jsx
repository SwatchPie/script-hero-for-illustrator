/**
 * @file Script-Hero\library\utilities\jsonUtils.jsx
 * @author SwatchPie.io
 * @version 1.0
 * @date 2024-11-04
 * @license 'CC BY-NC 4.0'
 * 
 * @description
 * A module with utility functions for 
 * working with JSON.
 * 
 */


/**
 * `PageItems` have `item.tags` for storing persistent data.
 * The good thing about tags is that they are independent of 
 * the `item.name` and `item.index`. 
 * 
 * `Layers` do not have `layer.tags`. 
 * I explored using XMP metadata to store layer information.
 * Unfortunately, XMP metadata stored in custom namespaces
 * are not persistent.
 * 
 * For these reasons, we use JSON to store layer data.
 * Because layers don't have an internal UUID we can reference,
 * we must use `layer.name` in the key.
 * 
 * So JSON is vulnerable to the user changing a `layer.name`
 * in a way that `item.tags` are not. 
 * 
 */

/**  
 * We're using JSON to store layer-level data.
 * We're probably using a loop to add, update, 
 * get, or delete keys for multiple layers at a time. 
 * 
 * Instead of reading/writing a JSON file with each item iteration, we take the 
 * general approach of:
 * 
 * 1. Use `var jsonFile = getJSONFile(doc)` to get or create a JSON file for the doc.
 * 2. Use `var jsonObject = getJSONObject(jsonFile)` to get the contents of a file one time.
 * 3. Use loops to iterate the layers + `jsonObject`, and accumulate updates into a single object.
 * 3. Apply updates to the `jsonFile` in-bulk, one time. 
 * 
 * See: `library/tests/test_jsonUtils.jsx` for layer examples. 
 * 
 */


// @include '../../global.jsx'
// @include '../external/json2.js'
// @include './docUtils.jsx'
// @include './miscUtils.jsx'

var jsonUtils = (function() {

  // Module Properties
  var DEBUG = global.DEBUG.JSONUTILS;


  /**
   * Checks for an existing JSON file and creates a new one if needed.
   * The JSON file has the same name as an AI file.
   * The JSON file is automatically saved along side the AI file.
   * @function jsonUtils.getJSONFile
   * @returns {File} A file object for the JSON file.
   * @throws {Error} If no active document.
   * @throws {Error} If missing or undefined parameters.
   * @example 
   * var jsonFile = jsonUtils.getJSONFile();
   */
  function getJSONFile() {
  
    var functionID = 'jsonUtils.getJSONFile';
  
    try {

      var doc = docUtils.getActiveDocument();      
      docUtils.saveDocument();

      var baseName = miscUtils.getFileBaseName(doc.name);
      var jsonName = baseName + '.json';
      var jsonFile = new File(doc.path + '/' + jsonName);
      
      if (!jsonFile.exists) {
        jsonFile.open('w'); 
        jsonFile.write('{}');
        jsonFile.close();    
      }

      var message = 'SUCCESS ' + functionID + '\n' + jsonFile.fsName;
      if (DEBUG) alert(message, functionID);

      return jsonFile;
  
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      throw e;
    }
  }


  /**
   * Gets the contents of a JSON file as a parsed object.
   * @function jsonUtils.getJSONObject
   * @param {File} jsonFile - The file to parse.
   * @returns {object} File contents as a parsed object.
   * @throws {Error} If missing or undefined parameter.
   * @example 
   * var jsonFile = jsonUtils.getJSONFile();
   * var jsonObject = jsonUtils.getJSONObject(jsonFile);
   */
  function getJSONObject(jsonFile) {
  
    var functionID = 'jsonUtils.getJSONObject';
  
    try {

      if (!(jsonFile instanceof File)) {
        throw new Error('Parameter must be a file object: jsonFile.');
      }
      
      jsonFile.open('r');
      var jsonContent = jsonFile.read();
      jsonFile.close();

      var jsonObject = JSON.parse(jsonContent); 
  
      var message = 'SUCCESS ' + functionID + '\n' + jsonFile.fsName;
      if (DEBUG) alert(message, functionID);

      return jsonObject;
  
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      throw e;
    }
  }


  /**
   * Updates a JSON file.
   * @function jsonUtils.setJSONKeys
   * @param {File} jsonFile - A file object for the JSON file.
   * @param {object} jsonUpdates - An object containing key:value pairs.
   * @throws {Error} If missing or undefined parameters.
   * @example
   * var jsonFile = jsonUtils.getJSONFile();
   * var jsonUpdates = {key:Value, ...};
   * jsonUtils.setJSONKeys(jsonFile, jsonUpdates);
   */
  function setJSONKeys(jsonFile, jsonUpdates) {
  
    var functionID = 'jsonUtils.setJSONKeys';
  
    try {

      if (!(jsonFile instanceof File)) {
        throw new Error('Parameter must be a file object: jsonFile.');
      }
      if (typeof jsonUpdates !== 'object') {
        throw new Error('Parameter must be an object: jsonUpdates.');
      }
  
      // Get existing file contents
      var jsonObject = getJSONObject(jsonFile);

      // Merge jsonUpdates into jsonObject
      for (var key in jsonUpdates) {
        if (jsonUpdates.hasOwnProperty(key)) {
          jsonObject[key] = jsonUpdates[key];  
        }
      }

      // Save updated file
      jsonFile.open('w')
      jsonFile.write(JSON.stringify(jsonObject, null, 2)); 
      jsonFile.close();

      var message = 'SUCCESS ' + functionID + '\n' + jsonFile.fsName;
      if (DEBUG) alert(message, functionID);
  
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      throw e;
    }
  }


  /**
   * Get the value of a key in a JSON file.
   * Handles simple key paths like `single`.
   * Handles nested key paths like `parent.child.grand`. 
   * @function jsonUtils.getJSONKey
   * @param {object} jsonObject - A parsed JSON object.
   * @param {string} jsonKeyPath - Path to key to get. `parent.child`.
   * @returns {null} If key does not exist.
   * @returns {varied} The stored value - string, bool, int, dec, null.
   * @throws {Error} If missing or undefined parameters.
   * @example
   * var jsonFile = jsonUtils.getJSONFile();
   * var jsonObject = jsonUtils.getJSONObject(jsonFile);
   * var jsonKeyPath = 'parentKey.childKey';
   * var jsonValue = jsonUtils.getJSONKey(jsonObject, jsonKeyPath);
   */
  function getJSONKey(jsonObject, jsonKeyPath) {

    var functionID = 'jsonUtils.getJSONKey';
  
    try {

      if (typeof jsonObject !== 'object') {
        throw new Error('Parameter must be an object: jsonObject.');
      }
      if (typeof jsonKeyPath !== 'string') {
        throw new Error('Parameter must be a string: jsonKeyPath');
      }
  
      // Create a list of keys
      // 'parent.child' -> ['parent', 'child']
      var keys = jsonKeyPath.split('.');

      // Assign jsonObject to a variable so we can
      // update it to reflect the current traversal level.
      var jsonValue = jsonObject;
  
      for (var i = 0; i < keys.length; i++) {
        if (jsonValue.hasOwnProperty(keys[i])) {
          // Move deeper into the nested structure
          jsonValue = jsonValue[keys[i]];
        } else {
          jsonValue = null; 
          break; 
        }
      }
  
      var message = 'SUCCESS ' + functionID + '\nKey Path: ' + jsonKeyPath + '\nValue: ' + jsonValue + '\nType: ' + typeof jsonValue;
      if (DEBUG) alert(message, functionID);
  
      return jsonValue;
  
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      throw e;
    }
  }
  

  /**
   * Deletes keys from a JSON file. 
   * Handles simple key paths like `single`.
   * Handles nested key paths like `parent.child.grand`. 
   * @function jsonUtils.deleteJSONKeys
   * @param {File} jsonFile - A file object for the JSON file.
   * @param {Array} jsonKeyPaths - A list of key paths to delete.
   * @throws {Error} If missing or undefined parameters.
   * @example
   * var jsonFile = jsonUtils.getJSONFile();
   * var jsonKeyPaths = ['parent1.child1', 'parent2.child2', 'single'];
   * jsonUtils.deleteJSONKeys(jsonFile, jsonKeyPaths);
   */
  function deleteJSONKeys(jsonFile, jsonKeyPaths) {
    var functionID = 'jsonUtils.deleteJSONKeys';

    try {
      if (!(jsonFile instanceof File)) {
        throw new Error('Parameter must be a file object: jsonFile.');
      }
      if (!(jsonKeyPaths instanceof Array)) {
        throw new Error('Parameter must be an array: jsonKeyPaths.');
      }

      // Get existing file contents
      var jsonObject = getJSONObject(jsonFile);

      // Iterate through the list of key paths
      for (var i = 0; i < jsonKeyPaths.length; i++) {
        var keyPath = jsonKeyPaths[i];
        var keys = keyPath.split('.');
        
        // Simple, top-level path only
        if (keys.length === 1) {
          if (jsonObject.hasOwnProperty(keys[0])) {
            delete jsonObject[keys[0]];
          }
        // Nested key paths  
        } else {
          var parent = jsonObject;

          for (var j = 0; j < keys.length - 1; j++) {
            if (parent.hasOwnProperty(keys[j])) {
              parent = parent[keys[j]];
            } else {
              parent = null;
              break;
            }
          }
          if (parent && parent.hasOwnProperty(keys[keys.length - 1])) {
            delete parent[keys[keys.length - 1]];
          }
        }
      }

      // Save the updated file
      jsonFile.open('w');
      jsonFile.write(JSON.stringify(jsonObject, null, 2));
      jsonFile.close();

      var message = 'SUCCESS ' + functionID + '\n' + jsonFile.fsName;
      if (DEBUG) alert(message, functionID);

    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      throw e;
    }
  }


  // Expose Methods
  return {
    getJSONFile: getJSONFile, 
    getJSONObject: getJSONObject,
    setJSONKeys: setJSONKeys,
    getJSONKey: getJSONKey,
    deleteJSONKeys: deleteJSONKeys,
  };

})();


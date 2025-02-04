/**
 * @file Script-Hero\library\utilities\swatchUtils.jsx
 * @author SwatchPie.io
 * @version 1.0
 * @date 2024-11-19
 * @license 'CC BY-NC 4.0'
 * 
 * @description
 * A module with utility functions for 
 * working with swathes and swatch groups.
 * 
 */


// @include '../../global.jsx'
// @include './colorUtils.jsx'
// @include './miscUtils.jsx'

var swatchUtils = (function() {

  // Module Properties
  var DEBUG = global.DEBUG.SWATCHUTILS;
  
  
  //
  // Swatch Groups
  // 

  /**
   * Checks if a named SwatchGroup exists.
   * @function swatchUtils.checkSwatchGroupExists
   * @param {string} swatchGroupName - The name of the SwatchGroup to check for.
   * @returns {boolean} `true` if SwatchGroup exists, `false` otherwise.
   * @throws {Error} If no active document.
   * @throws {Error} If missing or undefined parameter.
   * @example 
   * var swatchGroupName = 'New Swatch Group';
   * var swatchGroupExists = swatchUtils.checkSwatchGroupExists(swatchGroupName)
   * if (swatchGroupExists) {}
   */
  function checkSwatchGroupExists(swatchGroupName) {

    var functionID = 'swatchUtils.checkSwatchGroupExists';

    try {
    
      if (!app.activeDocument) {
        throw new Error('No active document.');
      }
      if (typeof swatchGroupName !== 'string') {
        throw new Error('Parameter must be a string: swatchGroupName');
      }
    
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      throw e;
    }

    var doc = app.activeDocument;
    var swatchGroupExists;

    try {
      var targetGroup = doc.swatchGroups.getByName(swatchGroupName); 
      swatchGroupExists = true;   
    } catch (e) {
      swatchGroupExists = false;
    }

    var nameStr = '\nSwatch Group: ' +  swatchGroupName;
    var existsStr = '\nGroup Exists: ' + swatchGroupExists;
    var message = 'SUCCESS ' + functionID + nameStr + existsStr;
    if (DEBUG) alert(message, functionID); 
    
    return swatchGroupExists;
  }


  /**
   * Gets an existing SwatchGroup or creates a new one.
   * @function swatchUtils.makeGetSwatchGroup
   * @param {string} swatchGroupName The name of the SwatchGroup to create.
   * @returns {SwatchGroup} An object representing the group. 
   * @throws {Error} If no active document.
   * @throws {Error} If missing or undefined parameter.
   * @example 
   * var swatchGroup = swatchUtils.makeGetSwatchGroup('My Swatch Group');
   */
  function makeGetSwatchGroup(swatchGroupName) {
  
    var functionID = 'swatchUtils.makeGetSwatchGroup';

    try {
    
      if (!app.activeDocument) {
        throw new Error('No active document.');
      }
      if (typeof swatchGroupName !== 'string') {
        throw new Error('Parameter must be a string: swatchGroupName');
      }

      var doc = app.activeDocument;
      var swatchGroups = doc.swatchGroups;
      var swatchGroupExists = checkSwatchGroupExists(swatchGroupName);

      var swatchGroup;  

      if (swatchGroupExists) {
        swatchGroup = swatchGroups.getByName(swatchGroupName);
      } else {
        swatchGroup = swatchGroups.add();
        swatchGroup.name = swatchGroupName;
      }

      var message = 'SUCCESS ' + functionID + '\nGot Swatch Group:\n' +  swatchGroup.name;
      if (DEBUG) alert(message, functionID);

      return swatchGroup;
    
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      throw e;
    }
  }


  /**
   * Deletes a named SwatchGroup if it exists.
   * @function swatchUtils.deleteSwatchGroup
   * @param {string} swatchGroupName The name of the SwatchGroup to delete.
   * @returns {void} 
   * @throws {Error} If no active document.
   * @throws {Error} If missing or undefined parameter.
   * @example 
   * swatchUtils.deleteSwatchGroup('CMYK Brights');
   */
  function deleteSwatchGroup(swatchGroupName) {
  
    var functionID = 'swatchUtils.deleteSwatchGroup';

    try {

      if (!app.activeDocument) {
        throw new Error('No active document.');
      }
      if (typeof swatchGroupName !== 'string') {
        throw new Error('Parameter must be a string: swatchGroupName');
      }

      var doc = app.activeDocument;
      var swatchGroups = doc.swatchGroups;
      var swatchGroupExists = checkSwatchGroupExists(swatchGroupName);

      if (swatchGroupExists) {
        var swatchGroup = swatchGroups.getByName(swatchGroupName);
            swatchGroup.remove();
      } 
    
      var message = 'SUCCESS ' + functionID + '\nSwatch Group Deleted:\n' + swatchGroupName;
      if (DEBUG) alert(message, functionID);
    
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      throw e;
    }
  }


  /**
   * Deletes empty SwatchGroup objects.
   * @function swatchUtils.deleteEmptySwatchGroups
   * @returns {void} 
   * @throws {Error} If there is no active document.
   * @example 
   * swatchUtils.deleteEmptySwatchGroups();
   */
  function deleteEmptySwatchGroups() {

    var functionID = 'deleteEmptySwatchGroups';
  
    try {
      
      if (!app.activeDocument) {
        throw new Error('No active document.');
      }
      
      var doc = app.activeDocument;
      var swatchGroups = doc.swatchGroups;
  
      // Iterate in reverse because we are removing items
      for (var i = swatchGroups.length - 1; i >= 0; i--) {
  
        var swatchGroup = swatchGroups[i];
  
        // Skip the unnamed main group
        if (!swatchGroup.name) {
          if (DEBUG) alert('Main swatch group skipped.', functionID);
          continue;
        }

        // Check group for swatches
        var swatches = swatchGroup.getAllSwatches();
        var hasSwatches = swatches.length > 0;
        if (DEBUG) alert('Swatch Group: ' + swatchGroup.name + '\nHas Swatches: ' + hasSwatches);
        if (!hasSwatches) swatchGroup.remove();
      }
      
      var message = 'SUCCESS ' + functionID + '\nEmpty Swatch Groups deleted.';
      if (DEBUG) alert(message, functionID);
      
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      throw e;
    }
  }
  

  //
  // Swatches
  //

  /**
   * Gets the selected swatches in the active document.
   * @function swatchUtils.getSelectedSwatches
   * @returns {Swatches} A list of selected Swatch objects in the active document. 
   * @throws {Error} If there is no active document.
   * @throws {Error} If there are no selected swatches.
   * @example 
   * var swatches = swatchUtils.getSelectedSwatches();
   */
  function getSelectedSwatches() {

    var functionID = 'swatchUtils.getSelectedSwatches';

    try {
    
      if (!app.activeDocument) {
        throw new Error('No active document.');
      }
      if (app.activeDocument.swatches.getSelected().length === 0){
        throw new Error('No selected swatches.');
      }
         
      var doc = app.activeDocument;
      var swatches = doc.swatches.getSelected();
    
      var message = 'SUCCESS ' + functionID + '\nSelected Swatches: ' + swatches.length;
      if (DEBUG) alert(message, functionID);

      return swatches;
    
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      throw e;
    }
  }


  /**
   * Checks if a `Swatch` is a default swatch: 
   * NoColor, Registration, Black, White.
   * @function swatchUtils.checkDefaultSwatch
   * @param {Swatch} swatch - The swatch to check.
   * @returns {boolean} `true` if swatch is a default swatch.
   * @throws {Error} If missing or undefined parameter.
   */
  function checkDefaultSwatch(swatch) {
  
    var functionID = 'swatchUtils.checkDefaultSwatch';

    try {

      if (typeof swatch === 'undefined' || swatch === null) {
        throw new Error('Missing or undefined parameter: swatch');
      }

      var isDefault;
    
      switch (swatch.name) {
        case '[None]':
        case 'NoColor':     
        case '[Registration]':        
        case 'White':
        case 'Black':
          isDefault = true;
          break;
        default:
          isDefault = false;
          break;
      }   

      var message = 'SUCCESS ' + functionID + '\nSwatch Name: ' + swatch.name + '\nisDefault: ' + isDefault;
      if (DEBUG) alert(message, functionID);

      return isDefault;
    
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      throw e;
    }
  }


  /**
   * Adds a Swatch to a named SwatchGroup.
   * @function swatchUtils.addSwatchToGroup 
   * @param {Swatch} swatch - The swatch object to add to the group.
   * @param {string} swatchGroupName - The name of the SwatchGroup to add the Swatch to.
   * @throws {Error} If no active document.
   * @throws {Error} If missing or undefined parameters.
   */
  function addSwatchToGroup(swatch, swatchGroupName) {

    var functionID = 'swatchUtils.addSwatchToGroup';

    try {
    
      if (!app.activeDocument) {
        throw new Error('No active document.');
      }
      if (typeof swatch === 'undefined' || swatch === null) {
        throw new Error('Missing or undefined parameter: swatch');
      }
      if (typeof swatchGroupName !== 'string') {
        throw new Error('Parameter must be a string: swatchGroupName');
      }
      
      var swatchGroup = makeGetSwatchGroup(swatchGroupName);
          swatchGroup.addSwatch(swatch);
    
      var message = 'SUCCESS ' + functionID + '\n';
      if (DEBUG) alert(message, functionID);
    
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      throw e;
    }
  }


  /**
   * Deletes all Swatch objects except `NoColor` and `Registration`.
   * Also runs `deleteAllSwatchGroups()` to clean up empty groups. 
   * @function swatchUtils.deleteAllSwatches
   * @returns {void} 
   * @throws {Error} If no active document.
   * @example 
   * swatchUtils.deleteAllSwatches();
   */
  function deleteAllSwatches() {
  
    var functionID = 'swatchUtils.deleteAllSwatches';

    try {
    
      if (!app.activeDocument) {
        throw new Error('No active document.');
      }
      
      var doc = app.activeDocument;
      var swatches = doc.swatches;

      swatches.removeAll();
      deleteEmptySwatchGroups();
    
      var message = 'SUCCESS ' + functionID + '\nAll swatches and empty groups deleted.';
      if (DEBUG) alert(message, functionID);
    
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      throw e;
    }
  }


  /**
   * Generates a list of well-distributed swatch indexes
   * where the list is as long as the number of selected items.
   * @function swatchUtils.randomizeSwatchIndexes
   * @param {number} selectionLength - The number of selected PageItems.
   * @param {number} swatchesLength - The number of selected swatches.
   * @returns {array} A list of randomized swatch index numbers.
   * @throws {Error} If missing or undefined parameters.
   * @throws {Error} If params are NaN.
   * @example
   * `swatches-random.jsx`
   */
  function randomizeSwatchIndexes(selectionLength, swatchesLength) {

    var functionID = 'miscUtils.randomizeSwatchIndexes';

    try {
    
      if (isNaN(selectionLength)) {
        throw new Error('Parameter must be a number: selectionLength');
      }
      if (isNaN(swatchesLength)) {
        throw new Error('Parameter must be a number: swatchesLength');
      }

      var swatchIndexes = [];

      if (selectionLength === swatchesLength) {

        for (var i = 0; i < swatchesLength; i++) {
          swatchIndexes.push(i);
        }
      
        swatchIndexes = miscUtils.shuffleArray(swatchIndexes);

      } else if (selectionLength < swatchesLength) {

        var allIndexes = [];

        for (var i = 0; i < swatchesLength; i++) {
          allIndexes.push(i);
        }
      
        allIndexes = miscUtils.shuffleArray(allIndexes);
        swatchIndexes = allIndexes.slice(0, selectionLength);

      } else {
        // Calculate how many times each swatch should be used
        var factor = Math.floor(selectionLength / swatchesLength);
        var remainder = selectionLength % swatchesLength;

        // Fill the array with each swatch index used 'factor' times
        for (var j = 0; j < swatchesLength; j++) {
          for (var k = 0; k < factor; k++) {
            swatchIndexes.push(j);
          }
        }
        // Randomly add remaining swatches to fill up the remaining slots
        for (var l = 0; l < remainder; l++) {
          var randomIndex = Math.floor(Math.random() * swatchesLength);
          swatchIndexes.push(randomIndex);
        }

        swatchIndexes = miscUtils.shuffleArray(swatchIndexes);
        swatchIndexes = miscUtils.shuffleArray(swatchIndexes);
      }

      var selStr = '\nSelection Length: ' +  selectionLength;
      var swaStr = '\nSwatches Length: ' +  swatchesLength;
      var iStr = '\nRandom Indexes:\n' + swatchIndexes;
      var message = 'SUCCESS ' + functionID + selStr + swaStr + iStr;
      if (DEBUG) alert(message, functionID);

      return swatchIndexes;
    
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      throw e;
    }
  }  


  //
  // Process Colors
  // 

  /**
   * Checks if a non-SpotColor `Swatch.name` exists.
   * @function swatchUtils.checkSwatchNameExists
   * @private
   * @param {string} swatchName - The name of the swatch to check.
   * @returns {boolean} `true` if the swatch name exists, `false` otherwise.
   * @throws {Error} If no active document.
   * @throws {Error} If missing or undefined parameter.
   * @example 
   * var swatchName = 'My Swatch';
   * if (swatchUtils.checkSwatchNameExists(swatchName)) {}
   */
  function checkSwatchNameExists(swatchName) {

    var functionID = 'swatchUtils.checkSwatchNameExists';

    try {
    
      if (!app.activeDocument) {
        throw new Error('No active document.');
      }
      if (typeof swatchName !== 'string') {
        throw new Error('Parameter must be a string: swatchName');
      }

      var doc = app.activeDocument;
      var swatches = doc.swatches;
      var swatchExists = false;

      for (var i = 0; i < swatches.length; i++) {
        var swatch = swatches[i];
        if (swatch.name === swatchName && swatch.color.typename !== 'SpotColor') {
          swatchExists = true;
        }
      }
      
      var message = 'SUCCESS ' + functionID + '\nSwatch Name: ' + swatchName + '\nSwatch Exists: ' + swatchExists;
      if (DEBUG) alert(message, functionID);

      return swatchExists;
    
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      throw e;
    }
  }


  /**
   * Gets a non-SpotColor `Swatch` by `Swatch.name`.
   * @function swatchUtils.getSwatchByName
   * @private
   * @param {string} swatchName - The name of the swatch.
   * @returns {Swatch} The swatch with the specified name.
   * @throws {Error} Throws an error if the swatch cannot be found. 
   * @remarks
   * Use `checkSwatchNameExists` before this method.
   */
  function getSwatchByName(swatchName) {
  
    var functionID = 'swatchUtils.getSwatchByName';

    try {
    
      if (!app.activeDocument) {
        throw new Error('No active document.');
      }
      if (typeof swatchName !== 'string') {
        throw new Error('Parameter must be a string: swatchName');
      }
      
      var doc = app.activeDocument;
      var swatches = doc.swatches;
      var swatch = null;

      for (var i = 0; i < swatches.length; i++) {
        if (swatches[i].name === swatchName && swatches[i].color.typename !== 'SpotColor') {
          swatch = swatches[i];
        }
      }

      if (!swatch) {
        throw new Error('Swatch not found: ' + swatchName);
      }
      
      var message = 'SUCCESS ' + functionID + '\nGot Swatch: ' + swatch.name;
      if (DEBUG) alert(message, functionID);

      return swatch;
    
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      throw e;
    }
  }


  /**
   * Creates a new `CMYKColor` then creates a new `Swatch` from the color. 
   * - Optionally adds `Swatch` to a named `SwatchGroup`. 
   * - Skips creating duplicate `Swatch.name`.
   * @function swatchUtils.makeSwatchCMYK
   * @param {string} swatchName - The new swatch name.
   * @param {number} c - The percentage of cyan (0-100).
   * @param {number} m - The percentage of magenta (0-100).
   * @param {number} y - The percentage of yellow (0-100).
   * @param {number} k - The percentage of black (0-100).
   * @param {string} [swatchGroupName] - Optional. Name of the SwatchGroup to add swatch to.
   * @returns {Swatch} A swatch object. 
   * @throws {Error} If no active document.
   * @throws {Error} If missing or undefined parameters.
   * @throws {Error} If params are NaN or out of range.
   */
  function makeSwatchCMYK(swatchName, c, m, y, k, swatchGroupName) {

    var functionID = 'swatchUtils.makeSwatchCMYK';

    try {
    
      if (typeof swatchName !== 'string') {
        throw new Error('Parameter must be a string: swatchName');
      }

      var doc = app.activeDocument;
      var swatches = doc.swatches;
      var swatchExists = checkSwatchNameExists(swatchName);
      var swatch;

      if (swatchExists) {
        swatch = getSwatchByName(swatchName);

      } else {
        var swatchColor = colorUtils.makeColorCMYK(c,m,y,k);
        swatch = swatches.add();
        swatch.name = swatchName;
        swatch.color = swatchColor;
      }

      var groupParamExists = (typeof swatchGroupName === 'string');
      if (groupParamExists) addSwatchToGroup(swatch, swatchGroupName);
    
      var nameStr = '\nSwatch Name: ' + swatch.name;
      var colorStr = '\nCMYK: ' + c + ', ' + m + ', ' + y + ', ' + k;
      var message = 'SUCCESS ' + functionID + nameStr + colorStr;
      if (DEBUG) alert(message, functionID);

      return swatch;
    
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      throw e;
    }
  }


  /**
   * Creates a new `GrayColor` then creates a new `Swatch` from the color. 
   * - Optionally adds `Swatch` to a named `SwatchGroup`. 
   * - Skips creating duplicate `Swatch.name`.
   * @function swatchUtils.makeSwatchGray
   * @param {string} swatchName - The new swatch name.
   * @param {number} gray - The percentage of gray (0-100).
   * @param {string} [swatchGroupName] - Optional. Name of the SwatchGroup to add swatch to.
   * @returns {Swatch} A swatch object. 
   * @throws {Error} If no active document.
   * @throws {Error} If missing or undefined parameters.
   * @throws {Error} If params are NaN or out of range.   
   */
  function makeSwatchGray(swatchName, gray, swatchGroupName) {

    var functionID = 'swatchUtils.makeSwatchGray';

    try {
    
      if (typeof swatchName !== 'string') {
        throw new Error('Parameter must be a string: swatchName');
      }
      if (isNaN(gray) || gray < 0 || gray > 100) {
        throw new Error('Parameter must be a number: 0 <= gray <= 100');
      }

      var doc = app.activeDocument;
      var swatches = doc.swatches;
      var swatchExists = checkSwatchNameExists(swatchName);
      var swatch;

      if (swatchExists) {
        swatch = getSwatchByName(swatchName);

      } else {
        var swatchColor = colorUtils.makeColorGray(gray);
        swatch = swatches.add();
        swatch.name = swatchName;
        swatch.color = swatchColor;
      }

      var groupParamExists = (typeof swatchGroupName === 'string');
      if (groupParamExists) addSwatchToGroup(swatch, swatchGroupName);
    
      var nameStr = '\nSwatch Name: ' + swatch.name;
      var colorStr = '\Gray: ' + gray;
      var message = 'SUCCESS ' + functionID + nameStr + colorStr;
      if (DEBUG) alert(message, functionID);

      return swatch;
    
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      throw e;
    }  
  }


  /**
   * Creates a new `LabColor` then creates a new `Swatch` from the color. 
   * - Optionally adds `Swatch` to a named `SwatchGroup`. 
   * - Skips creating duplicate `Swatch.name`.
   * @function swatchUtils.makeSwatchLab
   * @param {string} swatchName - The new swatch name.
   * @param {number} l - The lightness value (0 black to 100 white).
   * @param {number} a - The red-green value (-128 green to 127 red).
   * @param {number} b - The the yellow-blue (-128 blue to 127 yellow).
   * @param {string} [swatchGroupName] - Optional. Name of the SwatchGroup to add swatch to.
   * @returns {Swatch} A swatch object. 
   * @throws {Error} If no active document.
   * @throws {Error} If missing or undefined parameters.
   * @throws {Error} If params are NaN or out of range.
   */
  function makeSwatchLab(swatchName, l, a, b, swatchGroupName) {

    var functionID = 'swatchUtils.makeSwatchLab';

    try {
    
      if (typeof swatchName !== 'string') {
        throw new Error('Parameter must be a string: swatchName');
      }

      var doc = app.activeDocument;
      var swatches = doc.swatches;
      var swatchExists = checkSwatchNameExists(swatchName);
      var swatch;

      if (swatchExists) {
        swatch = getSwatchByName(swatchName);

      } else {
        var swatchColor = colorUtils.makeColorLab(l,a,b);
        swatch = swatches.add();
        swatch.name = swatchName;
        swatch.color = swatchColor;
      }

      var groupParamExists = (typeof swatchGroupName === 'string');
      if (groupParamExists) addSwatchToGroup(swatch, swatchGroupName);
    
      var nameStr = '\nSwatch Name: ' + swatch.name;
      var colorStr = '\nLab: ' + l + ', ' + a + ', ' + b;
      var message = 'SUCCESS ' + functionID + nameStr + colorStr;
      if (DEBUG) alert(message, functionID);

      return swatch;
    
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      throw e;
    }
  }


  /**
   * Creates a new `RGBColor` then creates a new `Swatch` from the color. 
   * - Optionally adds `Swatch` to a named `SwatchGroup`. 
   * - Skips creating duplicate `Swatch.name`.
   * @function swatchUtils.makeSwatchRGB
   * @param {string} swatchName - The new swatch name.
   * @param {number} r - The red value (0-255).
   * @param {number} g - The green value (0-255).
   * @param {number} b - The blue value (0-255).
   * @param {string} [swatchGroupName] - Optional. Name of the SwatchGroup to add swatch to.
   * @returns {Swatch} A swatch object. 
   * @throws {Error} If no active document.
   * @throws {Error} If missing or undefined parameters.
   * @throws {Error} If params are NaN or out of range.
   */
  function makeSwatchRGB(swatchName, r, g, b, swatchGroupName) {

    var functionID = 'swatchUtils.makeSwatchRGB';

    try {
    
      if (typeof swatchName !== 'string') {
        throw new Error('Parameter must be a string: swatchName');
      }

      var doc = app.activeDocument;
      var swatches = doc.swatches;
      var swatchExists = checkSwatchNameExists(swatchName);
      var swatch;

      if (swatchExists) {
        swatch = getSwatchByName(swatchName);

      } else {
        var swatchColor = colorUtils.makeColorRGB(r,g,b);
        swatch = swatches.add();
        swatch.name = swatchName;
        swatch.color = swatchColor;
      }

      var groupParamExists = (typeof swatchGroupName === 'string');
      if (groupParamExists) addSwatchToGroup(swatch, swatchGroupName);
    
      var nameStr = '\nSwatch Name: ' + swatch.name;
      var colorStr = '\nRGB: ' + r + ', ' + g + ', ' + b;
      var message = 'SUCCESS ' + functionID + nameStr + colorStr;
      if (DEBUG) alert(message, functionID);

      return swatch;
    
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      throw e;
    }
  }

  //
  // Spot Colors
  //

  /**
   * Checks if a SpotColor `Swatch.name` exists.
   * @function swatchUtils.checkSpotSwatchNameExists
   * @private
   * @param {string} swatchName - The name of the swatch to check.
   * @returns {boolean} `true` if the swatch name exists, `false` otherwise.
   * @throws {Error} If no active document.
   * @throws {Error} If missing or undefined parameter.
   * @example 
   * var swatchName = 'My Swatch';
   * if (checkSpotSwatchNameExists(swatchName)) {}
   */
  function checkSpotSwatchNameExists(swatchName) {

    var functionID = 'swatchUtils.checkSpotSwatchNameExists';

    try {
    
      if (!app.activeDocument) {
        throw new Error('No active document.');
      }
      if (typeof swatchName !== 'string') {
        throw new Error('Parameter must be a string: swatchName');
      }
    
      var doc = app.activeDocument;
      var swatches = doc.swatches;
      var swatchExists = false;

      for (var i = 0; i < swatches.length; i++) {
        var swatch = swatches[i];
        if (swatch.name === swatchName && swatch.color.typename === 'SpotColor') {
          swatchExists = true;
        }
      }
      
      var message = 'SUCCESS ' + functionID + '\nSpot Swatch Name: ' + swatchName + '\nSpot Swatch Exists: ' + swatchExists;
      if (DEBUG) alert(message, functionID);

      return swatchExists;
    
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      throw e;
    }
  }


  /**
   * Gets a spot swatch by name from the active document.
   * @function swatchUtils.getSpotSwatchByName
   * @private
   * @param {string} name - The name of the swatch.
   * @returns {Swatch} The spot swatch with the specified name.
   * @throws {Error} Throws an error if the spot swatch cannot be found. */
  function getSpotSwatchByName(swatchName) {
  
    var functionID = 'swatchUtils.getSpotSwatchByName';

    try {
    
      if (!app.activeDocument) {
        throw new Error('No active document.');
      }
      if (typeof swatchName !== 'string') {
        throw new Error('Parameter must be a string: swatchName');
      }
      
      var doc = app.activeDocument;
      var swatches = doc.swatches;
      var swatch = null;

      for (var i = 0; i < swatches.length; i++) {
        if (swatches[i].name === swatchName && swatches[i].color.typename === 'SpotColor') {
          swatch = swatches[i];
        }
      }

      if (!swatch) {
        throw new Error('Spot Swatch not found:\n' + swatchName);
      }
      
      var message = 'SUCCESS ' + functionID + '\nGot Swatch: ' + swatch.name;
      if (DEBUG) alert(message, functionID);

      return swatch;
    
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      throw e;
    } 
  }


  /**
   * Deletes all Spot objects except [Registration].
   * Also runs `deleteEmptySwatchGroups` to clean up empty groups.
   * @function swatchUtils.deleteAllSpots
   * @returns {void} 
   * @throws {Error} If no active document.
   * @example 
   * swatchUtils.deleteAllSpots();
   */
  function deleteAllSpots() {
  
    var functionID = 'swatchUtils.deleteAllSpots';

    try {
    
      if (!app.activeDocument) {
        throw new Error('No active document.');
      }
      
      var doc = app.activeDocument;
      var spots = doc.spots;    

      spots.removeAll();
      deleteEmptySwatchGroups();

      var message = 'SUCCESS ' + functionID + '\nAll Spots deleted.';
      if (DEBUG) alert(message, functionID);
    
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      throw e;
    }
  }


  /**
   * Creates a new CMYK `SpotColor` then creates a new `Swatch` from the color.
   * - Optionally adds `Swatch` to a named `SwatchGroup`. 
   * - Skips creating duplicate `Swatch.name`.
   * @function swatchUtils.makeSwatchSpotCMYK
   * @param {string} swatchName - The new swatch name.
   * @param {number} c - The percentage of cyan (0-100).
   * @param {number} m - The percentage of magenta (0-100).
   * @param {number} y - The percentage of yellow (0-100).
   * @param {number} k - The percentage of black (0-100).
   * @param {string} [swatchGroupName] - Optional. Name of the SwatchGroup to add swatch to.
   * @returns {Swatch} A swatch object.
   * @throws {Error} If no active document.
   * @throws {Error} If missing or undefined parameters.
   * @throws {Error} If params are NaN or out of range.
   */
  function makeSwatchSpotCMYK(swatchName, c, m, y, k, swatchGroupName) {

    var functionID = 'swatchUtils.makeSwatchSpotCMYK';

    try {

      if (!app.activeDocument) {
        throw new Error('No active document.');
      }
      if (typeof swatchName !== 'string') {
        throw new Error('Parameter must be a string: swatchName');
      }

      colorUtils.checkValuesCMYK(c,m,y,k);

      var swatchExists = checkSpotSwatchNameExists(swatchName);

      if (!swatchExists) {
        var spot = colorUtils.makeSpotCMYK(swatchName, c, m, y, k);
      }

      var swatch = getSpotSwatchByName(swatchName);

      var groupParamExists = (typeof swatchGroupName === 'string');
      if (groupParamExists) addSwatchToGroup(swatch, swatchGroupName);
    
      var nameStr = '\nSwatch Name: ' + swatch.name;
      var colorStr = '\nSpot CMYK: ' + c + ', ' + m + ', ' + y + ', ' + k;
      var message = 'SUCCESS ' + functionID + nameStr + colorStr;
      if (DEBUG) alert(message, functionID);

      return swatch;
    
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      throw e;
    }
  }


  /**
   * Creates a new LAB `SpotColor` then creates a new `Swatch` from the color.
   * - Optionally adds `Swatch` to a named `SwatchGroup`. 
   * - Skips creating duplicate `Swatch.name`.
   * @function swatchUtils.makeSwatchSpotLab
   * @param {string} swatchName - The new swatch name.
   * @param {number} l - The lightness value (0 black to 100 white).
   * @param {number} a - The red-green value (-128 green to 127 red).
   * @param {number} b - The the yellow-blue (-128 blue to 127 yellow).
   * @param {string} [swatchGroupName] - Optional. Name of the SwatchGroup to add swatch to.
   * @returns {Swatch} A swatch object.
   * @throws {Error} If no active document.
   * @throws {Error} If missing or undefined parameters.
   * @throws {Error} If params are NaN or out of range.
   */
  function makeSwatchSpotLab(swatchName, l, a, b, swatchGroupName) {

    var functionID = 'swatchUtils.makeSwatchSpotLab';

    try {

      if (!app.activeDocument) {
        throw new Error('No active document.');
      }
      if (typeof swatchName !== 'string') {
        throw new Error('Parameter must be a string: swatchName');
      }

      colorUtils.checkValuesLab(l,a,b);

      var swatchExists = checkSpotSwatchNameExists(swatchName);

      if (!swatchExists) {
        var spot = colorUtils.makeSpotLab(swatchName, l, a, b);
      }

      var swatch = getSpotSwatchByName(swatchName);

      var groupParamExists = (typeof swatchGroupName === 'string');
      if (groupParamExists) addSwatchToGroup(swatch, swatchGroupName);
    
      var nameStr = '\nSwatch Name: ' + swatch.name;
      var colorStr = '\nSpot Lab: ' + l + ', ' + a + ', ' + b;
      var message = 'SUCCESS ' + functionID + nameStr + colorStr;
      if (DEBUG) alert(message, functionID);

      return swatch;
    
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      throw e;
    }
  }
  

  /**
   * Creates a new RGB `SpotColor` then creates a new `Swatch` from the color.
   * - Optionally adds `Swatch` to a named `SwatchGroup`. 
   * - Skips creating duplicate `Swatch.name`.
   * @function swatchUtils.makeSwatchSpotRGB
   * @param {string} swatchName - The new swatch name.
   * @param {number} r - The red value (0-255).
   * @param {number} g - The green value (0-255).
   * @param {number} b - The blue value (0-255).
   * @param {string} [swatchGroupName] - Optional. Name of the SwatchGroup to add swatch to.
   * @returns {Swatch} A swatch object.
   * @throws {Error} If no active document.
   * @throws {Error} If missing or undefined parameters.
   * @throws {Error} If params are NaN or out of range.
   */
  function makeSwatchSpotRGB(swatchName, r, g, b, swatchGroupName) {

    var functionID = 'swatchUtils.makeSwatchSpotRGB';

    try {

      if (!app.activeDocument) {
        throw new Error('No active document.');
      }
      if (typeof swatchName !== 'string') {
        throw new Error('Parameter must be a string: swatchName');
      }

      colorUtils.checkValuesRGB(r,g,b);

      var swatchExists = checkSpotSwatchNameExists(swatchName);

      if (!swatchExists) {
        var spot = colorUtils.makeSpotRGB(swatchName, r,g,b);
      }

      var swatch = getSpotSwatchByName(swatchName);

      var groupParamExists = (typeof swatchGroupName === 'string');
      if (groupParamExists) addSwatchToGroup(swatch, swatchGroupName);
    
      var nameStr = '\nSwatch Name: ' + swatch.name;
      var colorStr = '\nSpot RGB: ' + r + ', ' + g + ', ' + b;
      var message = 'SUCCESS ' + functionID + nameStr + colorStr;
      if (DEBUG) alert(message, functionID);

      return swatch;
    
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      throw e;
    }
  }  


  // Expose Methods
  return {
    // Swatch Groups
    checkSwatchGroupExists: checkSwatchGroupExists,
    makeGetSwatchGroup: makeGetSwatchGroup,
    deleteSwatchGroup: deleteSwatchGroup,  
    deleteEmptySwatchGroups: deleteEmptySwatchGroups,
    // Swatches
    getSelectedSwatches:getSelectedSwatches,
    checkDefaultSwatch: checkDefaultSwatch,
    addSwatchToGroup:addSwatchToGroup,
    deleteAllSwatches:deleteAllSwatches,
    randomizeSwatchIndexes: randomizeSwatchIndexes,
    // Process Colors
    makeSwatchCMYK: makeSwatchCMYK,
    makeSwatchGray: makeSwatchGray,
    makeSwatchLab:makeSwatchLab,
    makeSwatchRGB: makeSwatchRGB,
    // Spot Colors
    deleteAllSpots: deleteAllSpots,
    makeSwatchSpotCMYK: makeSwatchSpotCMYK,
    makeSwatchSpotLab: makeSwatchSpotLab,
    makeSwatchSpotRGB: makeSwatchSpotRGB,
  };

})();


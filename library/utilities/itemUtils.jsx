/**
 * @file Script-Hero\library\utilities\itemUtils.jsx
 * @author SwatchPie.io
 * @version 1.0
 * @date 2024-09-24
 * @license 'CC BY-NC 4.0'
 * 
 * @description
 * A module with utility functions for 
 * working with `PageItems`.
 * 
 */


// @include '../../global.jsx'
// @include './jsonUtils.jsx'

var itemUtils = (function() {

  // Module Properties
  var DEBUG = global.DEBUG.ITEMUTILS;
  var SCALE_OPTS = global.SCALE_OPTS;

  var isHiddenTag = 'isHiddenTag';
  var isLockedTag = 'isLockedTag';
  var scaleFactorTag = 'scaleFactorTag';
  var rotationDegreesTag = 'rotationDegreesTag';
  var rotationCenterTagX = 'rotationCenterTagX';
  var rotationCenterTagY = 'rotationCenterTagY';
  var translateTagX = 'translateTagX';
  var translateTagY = 'translateTagY';

  //
  // Selected PageItems
  //

  /**
   * Gets selected `PageItems` in the active document.
   * @function itemUtils.getSelectedItems
   * @returns {PageItems} An array of selected page items.
   * @throws {Error} If there is no active document.
   * @throws {Error} If there are no selected objects.
   * @example
   * var selection = itemUtils.getSelectedItems();
   */
  function getSelectedItems() {

    var functionID = 'itemUtils.getSelectedItems';

    try {

      if (!app.activeDocument) {
        throw new Error('No active document.');
      }
      if (app.activeDocument.selection.length === 0) {
        throw new Error('No selected objects.');
      }

      var selection = app.activeDocument.selection;

      var message = 'SUCCESS ' + functionID + '\nSelected Items: ' + selection.length;
      if (DEBUG) alert(message, functionID);

      return selection;
    
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      throw e;
    }
  }


  /**
   * Creates a new, active selection by randomly selecting 
   * a percentage of `PageItems` from the current selection.
   * @function itemUtils.randomizeSelection
   * @param {number} randomizePercent - The percentage of objects to randomly select (0-100).
   * @returns {PageItems} The randomly selected PageItems.
   * @throws {Error} If missing or undefined parameter.
   * @throws {Error} If there are no selected objects.
   * @throws {Error} If `randomizePercent` is NaN or out of range.
   * @example
   * var randomSelection = itemUtils.randomizeSelection(80);
   */
  function randomizeSelection(randomizePercent) {

    var functionID = 'itemUtils.randomizeSelection';

    try {

      if (!app.activeDocument) {
        throw new Error('No active document.');
      }
      if (app.activeDocument.selection.length === 0) {
        throw new Error('No selected items.');
      }
      if (isNaN(randomizePercent) || randomizePercent < 0 || randomizePercent > 100) {
        throw new Error('Parameter must be a number: 0 <= randomizePercent <= 100');
      }

      // Calculate the number of objects to select
      var selection = app.activeDocument.selection;
      var numToSelect = Math.floor(selection.length * (randomizePercent / 100));

      // Shuffle the selection array
      var shuffledSelection = miscUtils.shuffleArray(selection.slice());

      // Pick every n-th item to distribute selection well
      var interval = Math.floor(shuffledSelection.length / numToSelect);
      var randomSelection = [];

      for (var i = 0; i < numToSelect; i++) {
        randomSelection.push(shuffledSelection[i * interval]);
      }

      // Make the randomSelection the current selection in Illustrator
      app.activeDocument.selection = randomSelection;

      // Return the randomized selection  
      var selectionStr = '\nSelected Items: ' + selection.length;
      var percentStr = '\nRandom Percent: ' + randomizePercent;
      var randomStr = '\nRandom Items: ' + randomSelection.length;
      var message = 'SUCCESS ' + functionID + selectionStr + percentStr + randomStr;
      if (DEBUG) alert(message, functionID);

      return randomSelection;
    
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      throw e;
    }
  }


  //
  // PageItem Tags
  //

  /**
   * Displays an alert with all tag names and values for a `PageItem`.
   * @function itemUtils.alertItemTags
   * @param {PageItem} item - The item to get tags for.
   * @returns {void}
   * @throws {Error} If missing or undefined parameter.
   * @example
   * var selection = itemUtils.getSelectedItems();
   * var item = selection[0];
   * itemUtils.alertItemTags(item);
   */
  function alertItemTags(item) {

    var functionID = 'itemUtils.alertItemTags';

    try {

      if (item === undefined || item === null) {
        throw new Error('Missing or undefined parameter: item.');
      }
      
      var tags = item.tags;
      var alertString = '';

      if (tags.length === 0) {
        alertString += 'No tags found';
      } else {
        for (var i = 0; i < tags.length; i++) {
          alertString += tags[i].name + ': ' + tags[i].value;
          if (i !== tags.length - 1) {
            alertString += '\n';
          }
        }
      }

      alert(alertString, functionID);

    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      throw e;
    }
  }


  /**
   * Sets or updates a PageItem tag.
   * @function itemUtils.setItemTag
   * @param {PageItem} pageItem - A single `PageItem` object.
   * @param {string} tagName - Name of the tag to set.
   * @param {{string|bool|number}} tagValue - Value to store in the tag.
   * @throws {Error} If missing or undefined parameters.
   * @example
   * var selection = itemUtils.getSelectedItems();
   * var item = selection[0];
   * itemUtils.setItemTag(item, 'scaleFactorTag', 2);
   */
  function setItemTag(item, tagName, tagValue) {
  
    var functionID = 'itemUtils.setItemTag';
  
    try {

      if (typeof item === 'undefined' || item === null) {
        throw new Error('Missing or undefined parameter: item');
      }
      if (typeof tagName !== 'string') {
        throw new Error('Parameter must be a string: tagName');
      }
      if (typeof tagValue === 'undefined' || tagValue === null) {
        throw new Error('Missing or undefined parameter: tagValue');
      }

      var tagExists = checkTagExists(item, tagName);

      if (tagExists) {
        var tags = item.tags;
        for (var i = 0; i < tags.length; i++) {
          if (tags[i].name === tagName) {
            tags[i].value = tagValue;
            break;
          }
        } 
      } else {
        var tag = item.tags.add();
            tag.name = tagName;
            tag.value = tagValue;
      }
  
      var message = 'SUCCESS ' + functionID + '\nTag Exists: ' + tagExists + '\nTag Name: ' + tagName + '\nTag Value: ' + tagValue;
      if (DEBUG) alert(message, functionID);
  
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      throw e;
    }
  }
  

  /**
   * Checks a `PageItem` for a `tag.name`.
   * @function itemUtils.checkTagExists
   * @param {PageItem} item - The item to check.
   * @param {string} tagName - The `tag.name` to check for.
   * @returns {boolean} `true` if tag exists.
   * @throws {Error} If missing or undefined parameters.
   * @example
   * var selection = itemUtils.getSelectedItems();
   * var item = selection[0];
   * var tagExists = itemUtils.checkTagExists(item, visibleTag)
   */
  function checkTagExists(item, tagName) {

    var functionID = 'itemUtils.checkTagExists';

    try {

      if (item === undefined || item === null) {
        throw new Error('Missing or undefined parameter: item.');
      }
      if (typeof tagName !== 'string') {
        throw new Error('Parameter must be a string: tagName');
      }
      
      var tags = item.tags;
      var tagExists = false;

      for (var i = 0; i < tags.length; i++) {
        if (tags[i].name === tagName) {
          tagExists = true;
          break;
        }
      }   

      var message = 'SUCCESS ' + functionID + '\nTag Name: ' + tagName + '\nTag Exists: ' + tagExists;
      if (DEBUG) alert(message, functionID);

      return tagExists;
    
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      throw e;
    }
  }


  /**
   * Returns a tag's value for a `PageItem`.
   * Parses the result to a string, bool, number, null
   * @function itemUtils.getTagByName
   * @param {PageItem} item - The item to check.
   * @param {string} tagName - The `tag.name` to get the `tag.value` of.
   * @returns {{string|bool|number|null}} The tag's value parsed to a string, bool, or number.
   * @throws {Error} If missing or undefined parameters.
   * @example
   * var selection = itemUtils.getSelectedItems();
   * var item = selection[0];
   * var tagValue = itemUtils.getTagByName(item, visibleTag);
   */
  function getTagByName(item, tagName) {

    var functionID = 'itemUtils.getTagByName';

    try {

      if (typeof item === 'undefined' || item === null) {
        throw new Error('Missing or undefined parameter: item');
      }
      if (typeof tagName !== 'string') {
        throw new Error('Parameter must be a string: tagName');
      }
      
      var tags = item.tags;
      var tagValue = null;

      for (var i = 0; i < tags.length; i++) {
        var tag = tags[i];

        if (tag.name === tagName) {
          var tagValue = tag.value;
              tagValue = miscUtils.parseString(tagValue);
          break;
        }
      }   

      var nameStr = '\nTag Name: ' + tagName;
      var valStr = '\nTag Value: ' + tagValue;
      var typeStr = '\nValue Type: ' +  (typeof tagValue);
      var message = 'SUCCESS ' + functionID + nameStr + valStr + typeStr;
      if (DEBUG) alert(message, functionID);

      return tagValue;
    
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      throw e;
    }
  }


  /**
   * Removes a tag from a `PageItem`.
   * @function miscUtils.removeTag
   * @param {PageItem} item - The item to check.
   * @param {string} tagName - The `tag.name` to check for.
   * @returns {void}
   * @throws {Error} If missing or undefined parameters.
   * @example
   * var selection = itemUtils.getSelectedItems();
   * var item = selection[0];
   * itemUtils.removeTag(item, visibleTag);
   */
  function removeTag(item, tagName) {

    var functionID = 'miscUtils.removeTag';

    try {

      if (typeof item === 'undefined' || item === null) {
        throw new Error('Missing or undefined parameter: item');
      }
      if (typeof tagName !== 'string') {
        throw new Error('Parameter must be a string: tagName');
      }

      // Iterate in reverse when removing
      var tags = item.tags;

      for (var i = tags.length - 1; i >= 0; i--) {
        var tag = tags[i];
        if (tag.name === tagName) {
          tag.remove();
          break;
        }
      }

      var message = 'SUCCESS ' + functionID + '\nRemoved Tag: ' + tagName;
      if (DEBUG) alert(message, functionID);
    
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      throw e;
    }
  }


  //
  // Opacity Methods
  //

  /**
   * Sets the opacity of a `PageItem`.
   * @function itemUtils.setItemOpacity
   * @param {PageItem} item - The item to set opacity for.
   * @param {number} percent - The opacity level to set (0-100).
   * @returns {void}
   * @throws {Error} If missing or undefined parameters.
   * @throws {Error} If `percent` is NaN or out of range.
   * @example
   * var selection = itemUtils.getSelectedItems();
   * var item = selection[0];
   * itemUtils.setItemOpacity(item, 80);
   */
  function setItemOpacity(item, percent) {

    var functionID = 'itemUtils.setItemOpacity';

    try {

      if (typeof item === 'undefined' || item === null) {
        throw new Error('Missing or undefined parameter: item');
      }
      if (isNaN(percent) || percent < 0 || percent > 100) {
        throw new Error('Parameter must be a number: 0 <= percent <= 100');
      }
    
      item.opacity = percent;
    
      var message = 'SUCCESS ' + functionID + '\nOpacity Percent: ' + item.opacity;
      if (DEBUG) alert(message, functionID);
    
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      throw e;
    }
  }


  /**
   * Sets the opacity of a `PageItem` with a randomized percent. 
   * @function itemUtils.setItemOpacityRandom
   * @param {number} minOpacity - The lowest opacity to use (0-100).
   * @param {number} maxOpacity - The highest opacity to use (0-100). 
   * @returns {void}
   * @throws {Error} If missing or undefined parameters
   * @throws {Error} If either percent is NaN or out of range.
   * @example
   * var selection = itemUtils.getSelectedItems();
   * var item = selection[0];
   * itemUtils.setItemOpacityRandom(item, 20, 90);
   */
  function setItemOpacityRandom(item, minOpacity, maxOpacity) {

    var functionID = 'itemUtils.setItemOpacityRandom';

    try {

      if (typeof item === 'undefined' || item === null) {
        throw new Error('Missing or undefined parameter: item');
      }
      if (isNaN(minOpacity) || minOpacity < 0 || minOpacity > 100) {
        throw new Error('Parameter must be a number: 0 <= minOpacity <= 100');
      }
      if (isNaN(maxOpacity) || maxOpacity < 0 || maxOpacity > 100) {
        throw new Error('Parameter must be a number: 0 <= maxOpacity <= 100');
      }
      if (minOpacity >= maxOpacity) {
        throw new Error('minOpacity must be less than maxOpacity');
      }

      // Randomize percent
      var randomOpacity = miscUtils.generateRandomNumber(minOpacity, maxOpacity);

      // Set opacity
      item.opacity = randomOpacity;

      var minStr = '\nMinimum Opacity: ' + minOpacity;
      var maxStr = '\nMaximum Opacity: ' + maxOpacity;
      var randStr = '\nRandom Opacity: ' + item.opacity;
      var message = 'SUCCESS ' + functionID + minStr + maxStr + randStr;
      if (DEBUG) alert(message, functionID);
    
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      throw e;
    }
  }


  //
  // Scaling Methods
  //

  /**
   * Proportionately scales a `PageItem`. 
   * Sets or updates the custom `scaleFactorTag`.
   * @function itemUtils.setScale 
   * @param {PageItem} item - The object to scale.
   * @param {number} scaleFactor - The factor by which to scale (0-10).
   * @returns {void}
   * @throws {Error} If missing or undefined parameters.
   * @throws {Error} If `scaleFactor` is NaN or out of range.
   * @example
   * var selection = itemUtils.getSelectedItems();
   * var item = selection[0];
   * itemUtils.scaleItem(item, 2);
   * @remarks
   * - Scale is XY proportionate.
   * - Transform is from center of each item.
   * - Strokes, patterns, and effects are scaled.
   */
  function scaleItem(item, scaleFactor) {

    var functionID = 'itemUtils.scaleItem';

    try {

      if (typeof SCALE_OPTS !== 'object') {
        throw new Error('Missing or undefined module object: SCALE_OPTS.');
      }
      if (typeof item === 'undefined' || item === null) {
        throw new Error('Missing or undefined parameter: item');
      }
      if (isNaN(scaleFactor) || scaleFactor < 0 || scaleFactor > 10) {
        throw new Error('Parameter must be a number: 0 <= scaleFactor <= 10');
      }

      var scalePercent = scaleFactor * 100;
      var tagExists = checkTagExists(item, scaleFactorTag);
      var currentFactor = tagExists ? getTagByName(item, scaleFactorTag) : 1;
      var accumulatedFactor = currentFactor * scaleFactor;

      // Set or update tag
      setItemTag(item, scaleFactorTag, accumulatedFactor);

      // Resize object
      item.resize(
        scalePercent, // Horizontal scale percent
        scalePercent, // Vertical scale percent
        true, // Change positions of other objects
        true, // Change positions of other points
        SCALE_OPTS.scalePatternFills, // Scale pattern fills
        SCALE_OPTS.scaleStrokesEffects, // Scale strokes and effects
        scalePercent, // Horizontal scale percent for strokes and effects
        Transformation.CENTER // Transform from the center
      );
  
      var currentStr = '\nCurrent Scale Factor: ' + currentFactor;
      var scaleStr = '\nNew Scale Factor: ' + scaleFactor
      var percentStr = '\nScale Percent: ' + scalePercent;
      var accumStr = '\nAccumulated Factor: ' + accumulatedFactor;  
      var message = 'SUCCESS ' + functionID + currentStr + scaleStr + percentStr + accumStr;
      if (DEBUG) alert(message, functionID);
    
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      throw e;
    }
  }


  /**
   * Scales a `PageItem` using a randomized scale factor.
   * Sets or updates the custom scale tracking tag.
   * @function itemUtils.scaleItemRandom 
   * @param {PageItem} item - The object to scale.
   * @param {number} minFactor - The minimum factor by which to scale objects (0-10).
   * @param {number} maxFactor - The maximum factor by which to scale objects (0-10).
   * @returns {void}
   * @throws {Error} If missing or undefined parameters.
   * @throws {Error} If `minFactor` or `maxFactor` is NaN or out of range.
   * @throws {Error} If `minFactor` > `maxFactor`.
   * @example
   * var selection = itemUtils.getSelectedItems();
   * var item = selection[0];
   * scaleItemRandom(item, 0.8, 1.2);
   * @remarks
   * - Scale is XY proportionate.
   * - Transform is from center of each item.
   * - Strokes, patterns, and effects are scaled.
   */
  function scaleItemRandom(item, minFactor, maxFactor) {

    var functionID = 'itemUtils.scaleItemRandom';
    
    try {
    
      if (typeof item === 'undefined' || item === null) {
        throw new Error('Missing or undefined parameter: item');
      }
      if (isNaN(minFactor) || minFactor < 0 || minFactor > 10) {
        throw new Error('Parameter must be a number: 0 <= minFactor <= 10');
      }
      if (isNaN(maxFactor) || maxFactor < 0 || maxFactor > 10) {
        throw new Error('Parameter must be a number: 0 <= maxFactor <= 10');
      }
      if (minFactor >= maxFactor) {
        throw new Error('minFactor must be less than maxFactor.');
      }

      // Randomize scale factor, 2 decimal places
      var scaleFactor = miscUtils.generateRandomNumber(minFactor, maxFactor, 2);

      // Scale item + set tag
      scaleItem(item, scaleFactor);

      var minStr = '\nMin Scale Factor: ' + minFactor;
      var maxStr = '\nMax Scale Factor: ' + maxFactor;
      var randStr = '\nRandom Scale Factor: ' +  scaleFactor;
      var message = 'SUCCESS ' + functionID + minStr + maxStr + randStr;
      if (DEBUG) alert(message, functionID);
    
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      throw e;
    }
  }


  /**
   * Resets any `PageItem` scaling performed and tracked by Script Hero.
   * Removes related item tags if they exist. 
   * @function itemUtils.resetItemScale
   * @param {PageItem} item - The item to reset.
   * @returns {void}
   * @throws {Error} If missing or undefined parameter.
   * @example
   * var selection = itemUtils.getSelectedItems();
   * var item = selection[0];
   * itemUtils.resetItemScale(item);
   */
  function resetItemScale(item) {

    var functionID = 'itemUtils.resetItemScale';

    try {

      if (typeof item === 'undefined' || item === null) {
        throw new Error('Missing or undefined parameter: item');
      }

      // Check tags
      var tagExists = checkTagExists(item, scaleFactorTag);

      if (!tagExists){
        var returnMessage = 'SUCCESS ' + functionID + '\nCurrent Scale Factor: 1 \nItem skipped.';
        if (DEBUG) alert(returnMessage, functionID);
        return;
      }

      var currentFactor = getTagByName(item, scaleFactorTag);
      var inverseFactor = 1 / currentFactor;
      var scalePercent = inverseFactor * 100;

      // Remove tag
      removeTag(item, scaleFactorTag);      

      // Reset object scale
      item.resize(
        scalePercent, // Horizontal scale percent
        scalePercent, // Vertical scale percent
        true, // Change positions of other objects
        true, // Change positions of other points
        true, // Scale pattern fills
        true, // Scale strokes and effects
        scalePercent, // Horizontal scale percent for strokes and effects
        Transformation.CENTER // Transform from the center
      ); 
      
      var currentStr = '\nCurrent Scale Factor: ' +  currentFactor;
      var inverseStr = '\nInverse Scale Factor: ' + inverseFactor;
      var percentStr = '\nInverse Scale Percent: ' + scalePercent;
      var message = 'SUCCESS ' + functionID + currentStr + inverseStr + percentStr;
      if (DEBUG) alert(message, functionID);
    
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      throw e;
    }
  }


  //
  // Rotation Methods
  //

  /**
   * @remarks
   * - Rotates item around its center point.
   * - Negative degrees = clockwise rotation.
   * - Positive degrees = counterclockwise rotation.
   * @remarks
   * - When rotated with a script, the item's bounding box IS NOT rotated.
   * - When rotated manually in the UI, the item's bounding box IS rotated.   
   */

  /**
   * Converts rotation degrees to radians.
   * @function itemUtils.degreesToRadians
   * @private
   * @param {number} degrees - Rotation as degrees (-360 to 360).
   * @returns {number} Rotation as radians.
   * @throws {Error} If missing or undefined parameter.
   * @throws {Error} If `degrees` is NaN or out of range.
   */
  function degreesToRadians(degrees) {

    var functionID = 'itemUtils.degreesToRadians';

    try {

      if (typeof degrees !== 'number' || isNaN(degrees)) {
        throw new Error('Parameter must be a number: degrees');
      }
      if (degrees < -360 || degrees > 360) {
        throw new Error('Parameter is out of range: -360 <= degrees <= 360');
      }

      var radians = degrees * Math.PI / 180;

      var message = 'SUCCESS ' + functionID + '\nDegrees: ' +  degrees + '\nRadians: ' + radians;
      if (DEBUG) alert(message, functionID);

      return radians;
    
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      throw e;
    }
  }


  /**
   * Converts rotation radians to degrees.
   * @function itemUtils.radiansToDegrees 
   * @private
   * @param {number} radians - Rotation as radians.
   * @returns {number} Rotation as degrees.
   * @throws {Error} If missing or undefined parameter.
   * @throws {Error} If `radians` is NaN.
   */
  function radiansToDegrees(radians) {

    var functionID = 'itemUtils.radiansToDegrees';

    try {

      if (typeof radians !== 'number' || isNaN(radians)) {
        throw new Error('Parameter must be a number: radians');
      }
    
      var degrees = Math.round((radians * 180 / Math.PI) * 1000) / 1000;
      
      var message = 'SUCCESS ' + functionID + '\nRadians: ' + radians + '\nDegrees: ' + degrees;
      if (DEBUG) alert(message, functionID);

      return degrees;
    
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      throw e;
    }
  } 


  /**
   * Rotates a `PageItem` by the given degrees.
   * Sets or updates related custom tags. 
   * @function itemUtils.rotateItem
   * @param {PageItem} item - The item to rotate.
   * @param {number} degrees - The number of rotation degrees (-360 to 360).
   * @throws {Error} If missing or undefined parameters.
   * @throws {Error} If `degrees` is NaN or out of range.
   * @example
   * var selection = itemUtils.getSelectedItems();
   * var item = selection[0];
   * itemUtils.rotateItem(item, -30);
   */
  function rotateItem(item, degrees) {

    var functionID = 'itemUtils.rotateItem';

    try {
    
      if (typeof item === 'undefined' || item === null) {
        throw new Error('Missing or undefined parameter: item');
      }
      if (isNaN(degrees) || degrees < (-360) || degrees > 360) {
        throw new Error('Parameter must be a number: (-360) <= degrees <= 360');
      }

      // Check tags
      var degreesTagExists = checkTagExists(item, rotationDegreesTag);
      var currentDegrees = degreesTagExists ? getTagByName(item, rotationDegreesTag) : 0;
      var accumulatedDegrees = currentDegrees + degrees;

      // Update
      setItemTag(item, rotationDegreesTag, accumulatedDegrees);

      if (!degreesTagExists) {
        var bounds = item.geometricBounds;
        var deltaX = (bounds[0] + bounds[2]) / 2;
        var deltaY = (bounds[1] + bounds[3]) / 2;        

        setItemTag(item, rotationCenterTagX, deltaX);
        setItemTag(item, rotationCenterTagY, deltaY);      
      }

      // Rotate item
      item.rotate(
        degrees, // Degree of rotation
        true, // Rotate entire object
        true, // Rotate fill patterns
        true, // Rotate gradients
        true, // Rotate stroke patterns
        Transformation.CENTER // Point around which to rotate
      );
    
      var nameStr = '\nTag Name: ' + rotationDegreesTag;
      var currentStr = '\nCurrent Rotation Degrees: ' + currentDegrees;
      var accumStr = '\nAccumulated Rotation Degrees: ' +  accumulatedDegrees; 
      var message = 'SUCCESS ' + functionID + nameStr + currentStr + accumStr;
      if (DEBUG) alert(message, functionID);
    
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      throw e;
    }
  }


  /**
   * Rotates a `PageItem` a randomized number of degrees.
   * @function itemUtils.rotateItemRandom
   * @param {PageItem} item - The object to rotate
   * @param {number} clockwiseDegrees - Maximum degree of clockwise rotation (0 to 180);
   * @param {number} counterDegrees - Maximum degree of counterclockwise rotation (0 to 180);
   * @remarks
   * - Note that `clockwiseDegrees` is entered as a positive number. 
   * - The limited rotation ranges prevent duplicates like 330 and (-30). 
   * @returns {void}
   * @throws {Error} If missing or undefined parameters.
   * @throws {Error} If `clockwiseDegrees` or `counterDegrees` are NaN or out of range.
   * @example
   * var selection = itemUtils.getSelectedItems();
   * var item = selection[0];
   * itemUtils.rotateItemRandom(item)
   */
  function rotateItemRandom(item, clockwiseDegrees, counterDegrees) {

    var functionID = 'itemUtils.rotateItemRandom';

    try {
    
      if (typeof item === 'undefined' || item === null) {
        throw new Error('Missing or undefined parameter: item');
      }
      if (isNaN(clockwiseDegrees) || clockwiseDegrees < (-180) || clockwiseDegrees > 180) {
        throw new Error('Parameter must be a number: (-180) <= clockwiseDegrees <= 180');
      }
      if (isNaN(counterDegrees) || counterDegrees < (-180) || counterDegrees > 180) {
        throw new Error('Parameter must be a number: (-180) <= counterDegrees <= 180');
      }

      // Adjust clockwise rotation
      clockwiseDegrees = clockwiseDegrees * (-1);

      // Randomize rotation angle
      var rotationDegrees = miscUtils.generateRandomNumber(clockwiseDegrees, counterDegrees)
      
      // Rotate item
      rotateItem(item, rotationDegrees);

      var cwStr = '\nClockwise Degrees: ' + clockwiseDegrees;
      var ccwStr = '\nCounterclockwise Degrees: ' + counterDegrees;
      var randStr = '\nRandom Degrees: ' + rotationDegrees
      var message = 'SUCCESS ' + functionID + cwStr + ccwStr + randStr;
      if (DEBUG) alert(message, functionID);

    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      throw e;
    }
  }


  /**
   * Resets any `PageItem` rotation performed and tracked by Script Hero.
   * Removes relevant custom tags;
   * @function itemUtils.resetItemRotation
   * @param {PageItem} item - The item to reset.
   * @returns {void}
   * @throws {Error} If missing or undefined parameter.
   * @example
   * var selection = itemUtils.getSelectedItems();
   * var item = selection[0];
   * itemUtils.resetItemRotation(item);
   */
  function resetItemRotation(item) {

    var functionID = 'itemUtils.resetItemRotation';

    try {
    
      if (typeof item === 'undefined' || item === null) {
        throw new Error('Missing or undefined parameter: item');
      }

      // Check tags
      var degreesTagExists = checkTagExists(item, rotationDegreesTag);

      if (!degreesTagExists) {
        var returnMessage = 'SUCCESS ' + functionID + '\nCurrent Rotation Degrees: 0 \nItem skipped.';
        if (DEBUG) alert(returnMessage, functionID);
        return;
      }

      // Get tagged values
      var currentDegrees = getTagByName(item, rotationDegreesTag);
      var inverseDegrees = currentDegrees * (-1);
      var originalDeltaX = getTagByName(item, rotationCenterTagX);
      var originalDeltaY = getTagByName(item, rotationCenterTagY);

      // Reset rotation
      item.rotate(
        inverseDegrees, // Degree of rotation
        true, // Rotate entire object
        true, // Rotate fill patterns
        true, // Rotate gradients
        true, // Rotate stroke patterns
        Transformation.CENTER // Point around which to rotate
      );  
    
      // Capture current center point
      var bounds = item.geometricBounds;
      var deltaX = (bounds[0] + bounds[2]) / 2;
      var deltaY = (bounds[1] + bounds[3]) / 2;

      // Calculate inverses
      var inverseDeltaX = originalDeltaX - deltaX;
      var inverseDeltaY = originalDeltaY - deltaY;

      // Reset center point
      var translationMatrix = app.getTranslationMatrix(inverseDeltaX, inverseDeltaY);
      item.transform(translationMatrix);
      
      // Remove tags
      removeTag(item, rotationDegreesTag);
      removeTag(item, rotationCenterTagX);
      removeTag(item, rotationCenterTagY);

      var currentStr = '\nCurrent Rotation Degrees: ' + currentDegrees;
      var inverseStr = '\nInverse Rotation Degrees: ' + inverseDegrees;
      var xStr = '\nOriginal X: ' + originalDeltaX;
      var yStr = '\nOriginal Y: ' + originalDeltaY;
      var message = 'SUCCESS ' + functionID + currentStr + inverseStr + xStr + yStr;
      if (DEBUG) alert(message, functionID);
    
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      throw e;
    }
  }


  //
  // Translation Methods
  // 

  /**
   * Moves a `PageItem`. 
   * Sets or updates the related `translationDelta*` tags.
   * @function itemUtils.translateItem
   * @param {PageItem} item - The object to move.
   * @param {number} deltaX - Horizontal (x-axis) translation value as document units.
   * @param {number} deltaY - Vertical (y-axis) translation value as document units.
   * @remarks
   * - Positive deltas move items right and up.
   * - Negative deltas move items left and down. 
   * @returns {void}
   * @throws {Error} If missing or undefined parameters.
   * @throws {Error} If `deltaX` or `deltaY` is NaN.
   * @throws {Error} If the translation would move objects off the document canvas.
   * @example
   * var selection = itemUtils.getSelectedItems();
   * var item = selection[0];
   * itemUtils.translateItem(item, 60, 100);
   */
  function translateItem(item, deltaX, deltaY) {

    var functionID = 'itemUtils.translateItem';

    try {
    
      if (typeof item === 'undefined' || item === null) {
        throw new Error('Missing or undefined parameter: item');
      }
      if (isNaN(deltaX)) {
        throw new Error('Parameter must be a number: deltaX');
      }
      if (isNaN(deltaY)) {
        throw new Error('Parameter must be a number: deltaY');
      }

      // Check Tags and accumulate
      var xExists = checkTagExists(item, translateTagX);
      var xCurrent = xExists ? getTagByName(item, translateTagX) : 0;
      var xAccum = xCurrent + deltaX;

      var yExists = checkTagExists(item, translateTagY);
      var yCurrent = yExists ? getTagByName(item, translateTagY) : 0;
      var yAccum = yCurrent + deltaY;

      // Set tags
      setItemTag(item, translateTagX, xAccum);
      setItemTag(item, translateTagY, yAccum);
 
      // Move item
      var translationMatrix = app.getTranslationMatrix(deltaX, deltaY);
      item.transform(translationMatrix);

      // Debug
      var deltaXStr = '\nDelta X: ' + deltaX;
      var xCurrentStr = '\nCurrent X: ' + xCurrent;
      var xAccumStr = '\nAccumulated X: ' + xAccum;
      var xStr = deltaXStr + xCurrentStr + xAccumStr;

      var deltaYStr = '\n\nDelta Y: ' + deltaY;
      var yCurrentStr = '\nCurrent Y: ' + yCurrent;
      var yAccumStr = '\nAccumulated Y: ' + yAccum;
      var yStr = deltaYStr + yCurrentStr + yAccumStr;

      var message = 'SUCCESS ' + functionID + xStr + yStr;
      if (DEBUG) alert(message, functionID);
    
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      throw e;
    }
  }


  /**
   * Resets any `PageItem` translations performed by Script Hero.
   * Removes related custom tags.
   * @function itemUtils.resetItemTranslation
   * @param {PageItem} item - The item to reset.
   * @returns {void}
   * @throws {Error} If missing or undefined parameter.
   * @example
   * var selection = itemUtils.getSelectedItems();
   * var item = selection[0];
   * itemUtils.resetItemTranslation(item);
   */
  function resetItemTranslation(item) {

    var functionID = 'itemUtils.resetItemTranslation';

    try {

      if (typeof item === 'undefined' || item === null) {
        throw new Error('Missing or undefined parameter: item');
      }
    
      // Check Tags and invert
      var xExists = checkTagExists(item, translateTagX);
      var xCurrent = xExists ? getTagByName(item, translateTagX) : 0;
      var xInverse = xCurrent * -1;

      var yExists = checkTagExists(item, translateTagY);
      var yCurrent = yExists ? getTagByName(item, translateTagY) : 0;
      var yInverse = yCurrent * -1;

      if (!xExists) {
        var returnMessage = 'SUCCESS ' + functionID + '\nNo translation tags.\nItem skipped.';
        if (DEBUG) alert(returnMessage, functionID);
        return;
      }

      // Reset translation
      var translationMatrix = app.getTranslationMatrix(xInverse, yInverse);
      item.transform(translationMatrix);

      // Remove tags
      removeTag(item, translateTagX);
      removeTag(item, translateTagY);
    
      var xCurrentStr = '\nCurrent X: ' + xCurrent;
      var xInverseStr = '\nInverse X: ' + xInverse;
      var yCurrentStr = '\nCurrent Y: ' + yCurrent;
      var yInverseStr = '\nInverse Y: ' + yInverse
      var message = 'SUCCESS ' + functionID + xCurrentStr + xInverseStr + yCurrentStr + yInverseStr;
      if (DEBUG) alert(message, functionID);
    
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      throw e;
    }
  }


  //
  // Z-index Methods
  //

  /**
   * Takes a selection of `PageItems` and randomizes their Z-index.
   * @function itemUtils.setRandomZOrder
   * @param {PageItems} pageItems - A collection of `PageItem` objects.
   * @returns {void}
   * @example
   * var selection = itemUtils.getSelectedItems();
   * itemUtils.setRandomZOrder(selection);
   * @remarks
   * - Items can be selected from multiple layers.
   * - Items remain on their current layers.
   * - Item order is randomized within each layer.
   */
  function setRandomZOrder(pageItems) {
  
    var functionID = 'itemUtils.setRandomZOrder';

    try {
    
      if (typeof pageItems === 'undefined' || pageItems === null) {
        throw new Error('Missing or undefined parameter: pageItems');
      }

      var zOrderMethods = [
        ZOrderMethod.SENDTOBACK,
        ZOrderMethod.BRINGTOFRONT,
        ZOrderMethod.SENDBACKWARD,
        ZOrderMethod.BRINGFORWARD
      ];

      for (var i = 0; i < selection.length; i++) {
        var item = selection[i];
        
        // Randomly select a ZOrderMethod
        var randomZOrderMethod = zOrderMethods[Math.floor(Math.random() * zOrderMethods.length)];
        
        // Apply the random ZOrderMethod
        item.zOrder(randomZOrderMethod);
      }

      var message = 'SUCCESS ' + functionID + '\nZ-Order randomized.';
      if (DEBUG) alert(message, functionID);
    
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      throw e;
    }
  }


  //
  // Unlock-Show and Relock-Hide
  // 

  /**
   * These methods work on all items in a document.
   * 
   * They are useful for doing things like making background layers,
   * and moving them to the bottom of the Layers panel.
   * 
   * They track the visibility and locked state of:
   *    - Layers using `jso
   * nUtils`
   *    - PageItems using `item.tags`
   * 
   * The order of use is important: 
   *    1. `unlockShowLayers`
   *    2. `unlockShowItems`
   *    3. `relockHideItems`
   *    4. `relockHideLayers`
   * 
   */


  /**
   * Unlocks and makes visible all Layers.
   * @function itemUtils.unlockShowLayers
   * @returns {void}
   * @throws {Error} If no active document.
   */
  function unlockShowLayers() {
  
    var functionID = 'itemUtils.unlockShowLayers';
  
    try {
  
      if (!app.activeDocument) {
        throw new Error('No active document.');
      }
      
      var doc = app.activeDocument;
      var layers = doc.layers;

      var jsonFile = jsonUtils.getJSONFile();
      var jsonUpdates = {};

      for (var i = 0; i < layers.length; i++) {
        try {

          var layer = layers[i];
          var itemID = layer.name;

          // Capture current state
          jsonUpdates[itemID] = {};
          jsonUpdates[itemID][isHiddenTag] = !(layer.visible);
          jsonUpdates[itemID][isLockedTag] = layer.locked;

          // Unlock and show
          layer.visible = true;
          layer.locked = false;
       
        } catch (e) {
          e.message = 'ERROR Layer (' + i + ') ' + layer.name + '\n' + e.message;
          throw e; 
        }
      }  

      // Save states to JSON
      jsonUtils.setJSONKeys(jsonFile, jsonUpdates);
  
      var message = 'SUCCESS ' + functionID + '\nAll layers unlocked and visible.';
      if (DEBUG) alert(message, functionID);
  
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      throw e;
    }
  }

  /**
   * Unlocks and makes visible all of a Layer's PageItems.
   * @function itemUtils.unlockShowItems
   * @private
   * @returns {void}
   * @throws {Error} If no active document.
   * @throws {Error} If missing or undefined parameters.
   */
  function unlockShowItems() {
  
    var functionID = 'itemUtils.unlockShowItems';
  
    try {

      if (!app.activeDocument) {
        throw new Error('No active document.');
      }
      
      var doc = app.activeDocument; 
      var layers = doc.layers;
      
      for (var i = 0; i < layers.length; i++) {
        var layer = layers[i];
        processItems(layer.pageItems);
      }
      
      var message = 'SUCCESS ' + functionID + '\nLayer processed.';
      if (DEBUG) alert(message, functionID);
  
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      throw e;
    }

    function processItems(pageItems) {
    
      var functionID = 'processItems';
    
      try {
    
        if (typeof pageItems === 'undefined' || pageItems === null) {
          throw new Error('Missing or undefined parameter: pageItems');
        }
      
        for (var j = 0; j < pageItems.length; j++) {
          var item = pageItems[j];

          try {
            switch (item.typename) {
              case "GroupItem":

                // Capture current states
                setItemTag(item, isHiddenTag, item.hidden);
                setItemTag(item, isLockedTag, item.locked);

                // Unlock and show
                item.hidden = false;
                item.locked = false;

                // Recursive
                processItems(item.pageItems);
                break;
      
              default:
                // Capture current states
                setItemTag(item, isHiddenTag, item.hidden);
                setItemTag(item, isLockedTag, item.locked);

                // Unlock and show
                item.hidden = false;
                item.locked = false;                
                break;
            }

          } catch (e) {
            e.message = 'ERROR ' + functionID + '\nItem Index: ' + j + '\n' + e.message;
            throw e; 
          }
        }

        var message = 'SUCCESS ' + functionID + '\nLayer items unlocked and visible.';
        if (DEBUG) alert(message, functionID);
    
      } catch (e) {
        e.message = 'ERROR ' + functionID + '\n' + e.message;
        throw e;
      }
    }

  }
  
  /**
   * Reverses `unlockShowItems()`
   * @function itemUtils.relockHideItems
   * @returns {void}
   * @throws {Error} If no active document.
   * @throws {Error} If missing or undefined parameters.
   */
  function relockHideItems() {
  
    var functionID = 'itemUtils.relockHideItems';
  
    try {
      
      if (!app.activeDocument) {
        throw new Error('No active document.');
      }
      
      var doc = app.activeDocument; 
      var layers = doc.layers;
      
      for (var i = 0; i < layers.length; i++) {
        var layer = layers[i];
        processItems(layer.pageItems);
      }
      
      var message = 'SUCCESS ' + functionID + '\nLayer processed.';
      if (DEBUG) alert(message, functionID);
  
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      throw e;
    }

    function processItems(pageItems) {
    
      var functionID = 'processItems';
    
      try {
    
        if (typeof pageItems === 'undefined' || pageItems === null) {
          throw new Error('Missing or undefined parameter: pageItems');
        }
      
        for (var j = 0; j < pageItems.length; j++) {
          var item = pageItems[j];
          try {
            switch (item.typename) {
              case "GroupItem":
                // Get original states
                var isLocked = getTagByName(item, isLockedTag);
                var isHidden = getTagByName(item, isHiddenTag);

                // Restore original states
                if (isLocked) item.locked = true;
                if (isHidden) item.hidden = true;
                  
                // Remove tags
                removeTag(item, isHiddenTag);
                removeTag(item, isHiddenTag);

                // Recursive
                processItems(item.pageItems);
                break;
      
              default:
                // Get original states
                var isLocked = getTagByName(item, isLockedTag);
                var isHidden = getTagByName(item, isHiddenTag);

                // Restore original states
                if (isLocked) item.locked = true;
                if (isHidden) item.hidden = true;
                  
                // Remove tags
                removeTag(item, isHiddenTag);
                removeTag(item, isHiddenTag);
                break;
            }
          } catch (e) {
            e.message = 'ERROR ' + functionID + '\nItem Index: ' + j + '\n' + e.message;
            throw e; 
          }
        }

        var message = 'SUCCESS ' + functionID + '\nLayer items relocked and hidden.';
        if (DEBUG) alert(message, functionID);
    
      } catch (e) {
        e.message = 'ERROR ' + functionID + '\n' + e.message;
        throw e;
      }
    }
  }

  /**
   * Reverses `unlockShowLayers()`.
   * @function itemUtils.relockHideLayers
   * @returns {void}
   * @throws {Error} If no active document.
   */
  function relockHideLayers() {
  
    var functionID = 'itemUtils.relockHideLayers';
  
    try {
  
      if (!app.activeDocument) {
        throw new Error('No active document.');
      }
      
      var doc = app.activeDocument;
      var layers = doc.layers;
      var jsonFile = jsonUtils.getJSONFile();
      var jsonObject = jsonUtils.getJSONObject(jsonFile);

      // Accumulate kay paths
      var jsonKeyPaths = [];

      for (var i = 0; i < layers.length; i++) {
        try {

          var layer = layers[i];
          var itemID = layer.name;

          // Define keys
          var isHiddenTagPath = itemID + '.' + isHiddenTag;
          var isLockedTagPath = itemID + '.' + isLockedTag;

          // Get original states
          var isHidden = jsonUtils.getJSONKey(jsonObject, isHiddenTagPath); 
          var isLocked = jsonUtils.getJSONKey(jsonObject, isLockedTagPath); 

          // Restore original states
          if (isHidden) layer.visible = false;
          if (isLocked) layer.locked = true;

          // Push keys for deletion
          jsonKeyPaths.push(isHiddenTagPath);
          jsonKeyPaths.push(isLockedTagPath);

        } catch (e) {
          e.message = 'ERROR Layer (' + i + ') ' + layer.name + '\n' + e.message;
          throw e; 
        }
      }  

      // Delete keys
      jsonUtils.deleteJSONKeys(jsonFile, jsonKeyPaths);
  
      var message = 'SUCCESS ' + functionID + '\nLayers relocked and hidden.';
      if (DEBUG) alert(message, functionID);
  
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      throw e;
    }
  }  
  

  //
  // Expose Methods
  //
  return {
    // Selection
    getSelectedItems: getSelectedItems,
    randomizeSelection: randomizeSelection,
    // Tags
    alertItemTags: alertItemTags,
    setItemTag: setItemTag,
    checkTagExists: checkTagExists,
    getTagByName: getTagByName,
    removeTag: removeTag,
    // Opacity
    setItemOpacity: setItemOpacity,
    setItemOpacityRandom: setItemOpacityRandom,
    // Scale
    scaleItem: scaleItem,
    scaleItemRandom: scaleItemRandom,
    resetItemScale: resetItemScale,
    // Rotate
    rotateItem: rotateItem,
    rotateItemRandom: rotateItemRandom,
    resetItemRotation: resetItemRotation,
    // Translate
    translateItem: translateItem,
    resetItemTranslation: resetItemTranslation,
    // Z-index
    setRandomZOrder: setRandomZOrder,
    // Unlock-Show
    unlockShowLayers: unlockShowLayers,
    unlockShowItems: unlockShowItems,
    relockHideItems: relockHideItems,
    relockHideLayers: relockHideLayers
  };

})();


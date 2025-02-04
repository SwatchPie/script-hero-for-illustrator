/**
 * @file script-hero/library/patterns/JSDoc.jsx
 * @author SwatchPie.io
 * @version 1.0
 * @date 2024-11-12
 * @license 'CC BY-NC 4.0'
 * 
 * @description
 * Example of JSDoc strings.
 * 
 * VS Code snippets: 
 *    @param-
 *    @returns- 
 *    @throws-
 *    @examp-
 * 
 */


// 
// General Format
//

/**
 * Description
 * @function util.method
 * @param
 * @returns 
 * @throws 
 * @example 
 * @remarks
 */
function method() {

  var functionID = 'util.method';

  try {    
    var message = 'SUCCESS ' + functionID + '\n';
    if (DEBUG) alert(message, functionID);
  } catch (e) {
    e.message = 'ERROR ' + functionID + '\n' + e.message;
    throw e;
  }
}


// 
// @param-
//

/**
 * @function util.function
 * @param {Document} param - The active document.
 * @param {Array} array - A list of DESCRIPTION.
 * @param {Artboard} artboard - A `Artboard` object.
 * @param {Artboards} artboards - A collection of `Artboard` objects.
 * @param {boolean} param - `true` if DESCRIPTION.
 * @param {boolean} [param=true] - Optional. `true` if DESCRIPTION.
 * @param {Color} param - A `Color` object for fills and swatches.
 * @param {CompoundPathItem} param - A  `CompoundPathItem` object.
 * @param {CompoundPathItems} param - A collection of `CompoundPathItem` objects.
 * @param {File} file - A `File` object.
 * @param {GroupItem} param - A `GroupItem` object. 
 * @param {Layer} layer - A `Layer` object.
 * @param {Layers} layers - A collection of `Layer` objects.
 * @param {Matrix} matrix - A `Matrix` object for transformation operations.
 * @param {number} param - DESCRIPTION.
 * @param {number} [param=100] - Optional. DESCRIPTION.
 * @param {object} param - An ordinary object with DESCRIPTION.
 * @param {object} [param=default] - Optional. An ordinary object with DESCRIPTION.
 * @param {Rect} param - A `Rect` object.
 * @param {string} param - DESCRIPTION
 * @param {Swatch} swatch - A `Swatch` object.
 * @param {Swatches} swatches - A collection of `Swatch` objects.
 * @param {Symbol} symbol - A `Symbol` object, used for symbol instances and libraries.
 * @param {Symbols} symbols - A collection of `Symbol` objects.
 * @param {PageItem} pageItem - A single `PageItem`object.
 * @param {PageItems} pageItems - A collection of `PageItem` objects.
 * @param {PathItem} pathItem - A `PathItem` object.
 * @param {PathItems} pathItems - A collection of `PathItem` objects.
 * @param {Pattern} pattern - A `Pattern` object for fills and swatches.
 * @param {TextFrame} textFrame - A `TextFrame` object.
 * @param {TextFrames} textFrames - A collection of `TextFrame` objects.
 * @param {TransformationMatrix} param - A `TransformationMatrix` object for complex transformations.
 * @param {UnitValue} unitVal - A `UnitValue` object for managing different measurement units.
 * 
 */


//
// @returns-  
//

/**
 * @returns {Document} The active document.
 * @returns {Array} An array of ${1:description}.
 * @returns {Artboard} An `Artboard` object.
 * @returns {Artboards} A collection of `Artboard` objects.
 * @returns {boolean} `true` if ${1:description}.
 * @returns {Color} A `Color` object for fills and swatches.
 * @returns {CompoundPathItem} A `CompoundPathItem` object.
 * @returns {CompoundPathItems} A collection of `CompoundPathItem` objects.
 * @returns {File} A `File` object.
 * @returns {GroupItem} A `GroupItem` object.
 * @returns {Layer} A `Layer` object.
 * @returns {Layers} A collection of `Layer` objects.
 * @returns {Matrix} A `Matrix` object for transformation operations.
 * @returns {number} ${1:description}.
 * @returns {object} An ordinary object with ${1:description}.
 * @returns {Rect} A `Rect` object.
 * @returns {string} ${1:description}.
 * @returns {Swatch} A `Swatch` object.
 * @returns {Swatches} A collection of `Swatch` objects.
 * @returns {Symbol} A `Symbol` object, used for symbol instances and libraries.
 * @returns {Symbols} A collection of `Symbol` objects.
 * @returns {PageItem} A single `PageItem` object.
 * @returns {PageItems} A collection of `PageItem` objects.
 * @returns {PathItem} A `PathItem` object.
 * @returns {PathItems} A collection of `PathItem` objects.
 * @returns {Pattern} A `Pattern` object for fills and swatches.
 * @returns {TextFrame} A `TextFrame` object.
 * @returns {TextFrames} A collection of `TextFrame` objects.
 * @returns {TransformationMatrix} A `TransformationMatrix` object for complex transformations.
 * @returns {UnitValue} A `UnitValue` object for managing different measurement units.
 * 
 */


//
// @throws-
// 

/**
 * @throws {Error} condition.
 * @throws {Error} If no active document.
 * @throws {Error} If no selected items.
 * @throws {Error} If missing or undefined module properties.
 * @throws {Error} If `param` is NaN or out of range.
 * @throws {Error} If no selected swatches.
 * 
 */


// 
// @examp-
// 

/**
 * @example 
 * var colors = ['red', 'white', 'blue'];
 * var numbers = [1, 2, 3];
 * @example
 * var doc = docUtils.getActiveDocument();
 * var artboards = doc.artboards;
 * var artboard = artboards[0];
 * @example
 * var doc = docUtils.getActiveDocument();
 * @example
 * var selection = itemUtils.getSelectedItems();
 * var item = selection[0];
 * @example
 * var swatches = swatchUtils.getSelectedSwatches();
 * var swatch = swatches[0];
 * 
 * 
 */


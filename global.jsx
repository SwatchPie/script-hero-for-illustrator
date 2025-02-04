/**
 * @file Script-Hero\global.jsx
 * @author SwatchPie.io
 * @version 1.0
 * @date 2024-11-04
 * @license 'CC BY-NC 4.0'

 * @description
 * A module with global properties that serves 3 key purposes:
 * 
 *   1. Consistency & reuse of variables across the library & projects.
 *   2. Centralize customizations in one location for ease-of-use.
 *   3. Separation of customizations from the library & projects for easier maintenance.
 * 
 */

var global = (function() {

  // ----------------------------------------------------
  // Debug Properties
  // ----------------------------------------------------

  /**
   * Utility methods always throw their errors,
   * which are caught by the larger, calling script.
   * 
   * Utility methods also have success messaging
   * that's useful during debugging. 
   * 
   * Each property below enables-disables this
   * success messaging for an entire utility module.
   */

  var DEBUG = {
    ARTBOARDUTILS: false, // WIP
    COLORUTILS: false, // Done
    DOCUTILS: false, // Done
    GROUPUTILS: false, // WIP
    ITEMUTILS: false, //  Done
    JSONUTILS: false, // Done
    LAYERUTILS: false, // Done, Backgrounds layer
    MISCUTILS: false, // Done
    SCRIPTUIUTILS: false, // Done
    SWATCHUTILS: false, // Done
  }

  // ----------------------------------------------------
  // Document Properties
  // File > File Info
  // ----------------------------------------------------

  var DOC_META = {
    authors: ['SwatchPie.io'], // Ordered array
    copyrightStatus: 'True', // 'True' or 'False' uppercase strings
    copyrightURL: 'https://swatchpie.io'
  }

  // ----------------------------------------------------
  // Transform Options
  // ----------------------------------------------------

  var SCALE_OPTS = {
    scaleStrokesEffects: true,
    scalePatternFills: true,
  }

  // ----------------------------------------------------
  // Export Options
  // ----------------------------------------------------

  /**
   * Many workflows require exporting a document with various formats, scales,
   * and quality. 
   * 
   * The export methods are located in `docUtils.jsx`. 
   * The default export options are in the objects below. These must exist. 
   * You can also pass a custom 'OPTS' object using the same keys in the global objects. 
   * 
   * To keep images organized and prevent overwrites, these scripts let you: 
   * 
   * - Use a default save directory which has the export options in the directory name.
   * - Set a custom save directory by adding an optional `saveDirTail` key to the options. 
   * 
   */

  /**
   * antiAliasing: true = art optimized
   * transparency: false = white
   * Edit > Adobe PDF Presets
   */

  var PNG8_OPTS = {
    scale: 1, 
    transparency: true, 
    antiAliasing: false, 
    saveDirTail: '/my-png8'
  };

  var PNG24_OPTS = {
    scale: 1, 
    transparency: true, 
    antiAliasing: false, 
    saveDirTail: '/my-png24'
  };

  var JPG_OPTS = {
    scale: 1, 
    quality: 100, 
    antiAliasing: true,  
    saveDirTail: '/my-jpg'
  };

  var PDF_OPTS = {
    preset: '[Illustrator Default]',
    // preset: '[High Quality Print]',
    // preset: '[Press Quality]',
    // preset: '[Smallest File Size]', 
    preserveEditability: false, 
  };

  // ----------------------------------------------------
  // Delete Unused Panel Item Defaults
  // ----------------------------------------------------

  var DUPI_OPTS = {
    deleteSwatches: false,
    deleteBrushes: true,
    deleteStyles: true,
    deleteSymbols: true
  }

  // ----------------------------------------------------
  // Swatch Legend Defaults
  // ----------------------------------------------------

  var SL_OPTS = {
    printData: true,
    printName: true,
    printCMYK: true,
    printLAB: true,
    printRGB: true,
    printHEX: true,
    printGray: true,
    textSize: 24,
    commaSep: true, // Comma (true) or space (false) to separate color components
    tileWidth: 340,
    tileHeight: 220,
    numColumns: 3,
    marginsLR: 60,
    marginsTB: 40
  }

  // ----------------------------------------------------
  // Expose Globals
  // ----------------------------------------------------

  return {
    DEBUG: DEBUG,
    DOC_META: DOC_META,
    SCALE_OPTS: SCALE_OPTS,
    PNG8_OPTS: PNG8_OPTS,
    PNG24_OPTS: PNG24_OPTS,
    JPG_OPTS: JPG_OPTS,
    PDF_OPTS: PDF_OPTS,
    DUPI_OPTS: DUPI_OPTS,
    SL_OPTS: SL_OPTS
  };

})();


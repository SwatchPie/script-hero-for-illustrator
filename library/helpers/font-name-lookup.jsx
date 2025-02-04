/**
 * @file Script-Hero\library\helpers\font-name-lookup.jsx
 * @author SwatchPie.io
 * @version 1.0
 * @date 2024-09-26
 * @license 'CC BY-NC 4.0'
 * 
 * @description
 * Look up the machine name of installed
 * fonts. These are the names used in scripts. 
 * 
 * @example
 * 1. Launch Illustrator.
 * 2. Use `CTRL+F12` to run this script.
 * 
 */


// @include '../utilities/scriptUIUtils.jsx'

(function fontNameLookup() {

  var functionID = 'fontNameLookup';
  var functionTitle = 'Font Machine Name Lookup';

  try {

    // Window
    var win = new Window('dialog', functionTitle);
        win.alignChildren = 'fill';

    // Font search
    var fontGroup = scriptUIUtils.fontSearch(win);

    // Show the dialog
    win.show();

  } catch (e) {
    scriptUIUtils.alertBox(functionTitle, e.message);
  }

})();


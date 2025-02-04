/**
 * @file Script-Hero\document-hero\artboard-names-from-layers.jsx
 * @author SwatchPie.io
 * @version 1.0
 * @date 2025-02-01
 * @license 'CC BY-NC 4.0'
 * 
 * @description
 * Renames Artboards using Layer Names.
 * 
 * @example
 * 1. Lock or hide Layers that should not be used as Artboard names.
 * 2. Use `CTRL+F12` to run this script.
 * 
 */


// @include '../library/utilities/docUtils.jsx'
// @include '../library/utilities/scriptUIUtils.jsx'

var DEBUG = false;

(function artboardNames() {

  var functionID = 'artboardNames';
  var functionTitle = 'Artboard Names from Layers';

  try {

    // Get Document, Artboards, and Layers
    var doc = docUtils.getActiveDocument();
    var artboards = doc.artboards;
    var layers = doc.layers;

    // Gather Layer names
    var layerNames = [];

    for (var i = 0; i < layers.length; i++) {
      var layer = layers[i];

      if (layer.visible === true && layer.locked === false) {
        layerNames.push(layer.name);
      }
    }

    // Bail if lengths don't match
    if (layerNames.length != artboards.length) {
      throw new Error(layerNames.length + ' Unlocked and visible layers\n' + artboards.length + ' Artboards');
    }

    // Prompt to continue
    var promptContinue = scriptUIUtils.promptConfirm(functionTitle, 'Rename Artboards?');

    if (!promptContinue) {
      return;
    }

    // Rename Artboards
    for (var j = 0; j < artboards.length; j++) {
      var artboard = artboards[j];
      artboard.name = layerNames[j];
    }

    // Debug
    var message = 'SUCCESS ' + functionID + '\nRenamed Artboards';
    if (DEBUG) alert(message, functionID);

  } catch (e) {
    e.message = 'ERROR ' + functionID + '\n' + e.message;
    scriptUIUtils.alertBox(functionTitle, e.message);
  }

})();

/**
 * @file script-hero/library/patterns/loops.jsx 
 * @author SwatchPie.io
 * @version 1.0
 * @date date
 * @license 'CC BY-NC 4.0'
 * 
 * @description
 * Examples of how to iterate objects.
 * 
 * VS Code snippets:
 *    loop-
 *    switch-
 * 
 */


// loop-artboards-all
var artboards  = doc.artboards;

for (var i = 0; i < artboards.length; i++) {
  var artboard = artboards[i];
}

// loop-artboards-all-reverse
var artboards  = doc.artboards;

for (var i = artboards.length - 1; i >= 0; i--) {
  var artboard = artboards[i];
}


// loop-documents-all
var documents = app.documents;

for (var i = 0; i < documents.length; i++) {
  var doc = documents[i];
  doc.activate();
}

// loop-documents-all-reverse
var documents = app.documents;

for (var i = documents.length - 1; i >= 0; i--) {
  var doc = documents[i];
  doc.activate();
}


// loop-items-selected
var selection = itemUtils.getSelectedItems();

for (var i = 0; i < documents.length; i++) {
  var doc = selection[i];
}

// loop-items-selected-reverse
var selection = itemUtils.getSelectedItems();

for (var i = selection.length - 1; i >= 0; i--) {
  var item = selection[i];
}


// loop-layers-all
var layers  = doc.layers;

for (var i = 0; i < layers.length; i++) {
  var layer = layers[i];
}

// loop-layers-reverse
var layers  = doc.layers;

for (var i = layers.length - 1; i >= 0; i--) {
  var layer = layers[i];
}


// loop-swatches-all
var swatches = doc.swatches;

for (var i = 0; i < swatches.length; i++) {
  var swatch = swatches[i];
}

// loop-swatches-all-reverse
var swatches = doc.swatches;

for (var i = swatches.length - 1; i >= 0; i--) {
  var swatch = swatches[i];
}


// loop-swatches-selected
var swatches = swatchUtils.getSelectedSwatches();

for (var i = 0; i < swatches.length; i++) {
  var swatch = swatches[i];
}

// loop-swatches-selected-reverse
var swatches = swatchUtils.getSelectedSwatches();

for (var i = swatches.length - 1; i >= 0; i--) {
  var swatch = swatches[i];
}


// switch-doc-color-mode
var colorMode = doc.documentColorSpace;

switch (colorMode) {
  case DocumentColorSpace.RGB:
    break;
  case DocumentColorSpace.CMYK:
    break;
  default:
    throw new Error('Unknown documentColorSpace.')
}

// switch-item-typename
var selection = itemUtils.getSelectedItems();

for (var j = 0; j < selection.length; j++) {
  var item = selection[j];
  try {
    switch (item.typename) {
      case 'GroupItem':
        // Group logic
        // Recursive logic for item.
        break;
      case 'CompoundPathItem':
      case 'PathItem':
      case 'SymbolItem':
      case 'TextFrame':
      case 'PlacedItem':
      case 'RasterItem':
      case 'MeshItem':
      case 'PluginItem':
      case 'GraphItem':
      case 'LegacyTextItem':
        break;
      default:
        // Throw error, Silent, Other logic
    }
  } catch (e) {
    e.message = 'ERROR '+ functionID + '\nItem Index: ' + i + '\n' + e.message;
    throw e;
  }
}


// 
// textFrames
//

var selection = itemUtils.getSelectedItems();

for (var j = 0; j < selection.length; j++) {
  var item = selection[j];
  try {
    switch (item.typename) {
      case 'GroupItem':
        processItemsContinue(item.pageItems); 
        break;

      case 'TextFrame':
        var textRange = item.textRange; 
        textRange.characterAttributes.textFont = app.textFonts.getByName("Arial"); 
        textRange.characterAttributes.size = 24; 
        textRange.characterAttributes.fillColor = new RGBColor(); 
        textRange.characterAttributes.fillColor.red = 255;
        textRange.characterAttributes.fillColor.green = 0;
        textRange.characterAttributes.fillColor.blue = 0;
        break;

      default:
        break;
    }
  } catch (e) {
    e.message = 'ERROR '+ functionID + '\nItem Index: ' + j + '\n' + e.message;
    throw e;
  }
}


/**
 * Iterates all Layers and PageItems in a document.
 * @function procLayerGroupItemStop
 * @throws {Error} If no active document.
 */
function procLayerGroupItem() {

  var functionID = 'procLayerGroupItem';

  try {

    if (!app.activeDocument) {
      throw new Error('No active document.');
    }
    
    var doc = app.activeDocument;
    var layers = doc.layers;
    
    for (var i = 0; i < layers.length; i++) {
      try {
        var layer = layers[i];
        if (layer.locked || !layer.visible) continue;

        // $0

        processItems(layer.pageItems);        
      
      } catch (e) {
        e.message = 'ERROR ' + layer.name + ' [' + i + ']\n' + e.message;
        throw e;
      }
    }
    
    var message = 'SUCCESS ' + functionID + '\nProcessed accessible Layers, Groups, and PageItems.';
    if (DEBUG) alert(message, functionID);

  } catch (e) {
    e.message = 'ERROR ' + functionID + '\n' + e.message;
    alert(e.message, functionID);
    // throw e;
  }

  function processItems(pageItems) {
  
    var functionID = 'processItems';

    try {
  
      if (typeof pageItems === 'undefined' || pageItems === null) {
        throw new Error('Missing or undefined parameter: pageItems');
      } 
      
      for (var j = 0; j < pageItems.length; j++) {
        var item = pageItems[j];
        if (item.locked || item.hidden ) continue;
        
        try {
          switch (item.typename) {
            case 'GroupItem':
              // Group logic
              processItems(item.pageItems);
              break;
            case 'CompoundPathItem':
            case 'PathItem':
            case 'SymbolItem':
            case 'TextFrame':
            case 'PlacedItem':
            case 'RasterItem':
            case 'MeshItem':
            case 'PluginItem':
            case 'GraphItem':
            case 'LegacyTextItem':
              break;
            default:
              break;
          }
        } catch (e) {
          e.message = 'ERROR ' + 'pageItem[' + j + ']\n' + e.message;
          throw e;
        }
      }
  
      var message = 'SUCCESS ' + functionID + '\nProcessed Layer PageItems.';
      if (DEBUG) alert(message, functionID);
  
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      throw e;
    }
  }
}



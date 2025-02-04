/**
 * @file Script-Hero\swatch-hero\item-fill-export.jsx
 * @author SwatchPie.io
 * @version 1.0
 * @date 2025-02-01
 * @license 'CC BY-NC 4.0'
 * 
 * @testFile Script-Hero\test-files\swatch-hero\item-fill-export.ai
 * 
 * @description
 * Exports item fill colors to CSV.
 * 
 * @example
 * 1. Open a document.
 * 2. Use `CTRL+F12` to run this script.
 * 
 * @remarks
 * - Skips locked and hidden items. 
 * 
 */


// @include '../library/utilities/docUtils.jsx'
// @include '../library/utilities/colorUtils.jsx'
// @include '../library/utilities/swatchUtils.jsx'
// @include '../library/utilities/scriptUIUtils.jsx' 

var DEBUG = false;

(function itemFillExport() {

  var functionID = 'itemFillExport';
  var functionTitle = 'Export Item Fill Data';

  try {

    // Get doc and layers
    var doc = docUtils.getActiveDocument();
    var layers = doc.layers; 

    // Prompt to continue
    var promptContinue = scriptUIUtils.promptConfirm(functionTitle, 'Export swatch data to CSV?');

    if (!promptContinue) {
      return;
    }

    // Check and prompt for document save
    docUtils.saveDocument();

    // Open the CSV file for writing
    var csvName = doc.name.replace(/\.ai$/i, '');
    var csvFile = new File(doc.path + '/' + csvName + '.csv');
    csvFile.open('w');

    // Write the CSV headers
    csvFile.writeln('sourceSpace,itemName,colorTypename,sourceComps,cmykComps,grayComps,labComps,rgbComps,hexComps');

    // Loop layers
    for (var i = 0; i < layers.length; i++) {
      try {
        var layer = layers[i];
        if (layer.locked || !layer.visible) continue;
        processItems(layer.pageItems);        
      
      } catch (e) {
        e.message = 'ERROR ' + layer.name + ' [' + i + ']\n' + e.message;
        throw e;
      }
    }

    // Process `PageItems`
    function processItems(pageItems) {
    
      var functionID = 'processItems';
  
      try {
    
        if (typeof pageItems === 'undefined' || pageItems === null) {
          throw new Error('Missing or undefined parameter: pageItems');
        } 
        
        for (var j = 0; j < pageItems.length; j++) {

          var item = pageItems[j];
          if (item.locked || item.hidden) continue; 

          try {
            switch (item.typename) {

              case 'GroupItem':
                processItems(item.pageItems);
                break;

              case 'PathItem':
                var itemName = item.name;
                var itemFill = item.fillColor;
                var colorTypename;

                // Skip gradients, patterns, transparent
                if (itemFill.typename === 'PatternColor' || itemFill.typename === 'NoColor' || itemFill.typename === 'GradientColor') {
                  continue;
                }

                // Process vs Spot kind
                if (itemFill.typename === 'SpotColor') {
                  colorTypename = itemFill.spot.spotKind;
                } else {
                  colorTypename = itemFill.typename;
                } 

                // Get swatch ImageColorSpace and components
                var source = colorUtils.getColorSourceComps(itemFill);
                var sourceSpace = source.sourceSpace;
                var sourceComps = source.sourceComps;

                // Convert to CMYK
                var cmyk = colorUtils.convertColorToCMYK(sourceSpace, sourceComps);
                var cmykComps = cmyk.targetCompsR;

                // Convert to GrayScale
                var gray = colorUtils.convertColorToGray(sourceSpace, sourceComps);
                var grayComps = gray.targetCompsR;

                // Convert to LAB
                var lab = colorUtils.convertColorToLab(sourceSpace, sourceComps);
                var labComps = lab.targetCompsR;

                // Convert to RGB
                var rgb = colorUtils.convertColorToRGB(sourceSpace, sourceComps);
                var rgbComps = rgb.targetCompsR;

                // Convert to HEX
                var hex = colorUtils.convertColorToHex(sourceSpace, sourceComps);
                var hexComps = hex.targetComps;
                
                // Write swatch data to CSV file
                var row = sourceSpace + ',' + itemName + ',' + colorTypename + ',' + sourceComps.join(' ') + ',' + cmykComps.join(' ') + ',' + grayComps.join(' ') + ',' + labComps.join(' ') + ',' + rgbComps.join(' ') + ',' + hexComps;

                csvFile.writeln(row);

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

    // Close the CSV file
    csvFile.close();

    // Alert user
    var message = 'CSV saved to:\n' + csvFile.fsName;
    scriptUIUtils.alertBox(functionTitle, message);

    // Debug
    var message = 'SUCCESS ' + functionID + '\n';
    if (DEBUG) alert(message, functionID);

  } catch (e) {
    e.message = 'ERROR ' + functionID + '\n' + e.message;
    scriptUIUtils.alertBox(functionTitle, e.message);
  }

})();


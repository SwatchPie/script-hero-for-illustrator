/**
 * @file Script-Hero\swatch-hero\swatches-export.jsx
 * @author SwatchPie.io
 * @version 1.0
 * @date 2025-02-01
 * @license 'CC BY-NC 4.0'
 * 
 * @description
 * Exports swatch data to CSV. 
 * 
 * @example
 * 1. Open a document. 
 * 2. Use `CTRL+F12` to run this script.
 * 
 * @remarks
 * - CSV inherits its name and save location from the document.
 * - Exports data for process and spot colors.
 * - Skips gradients, patterns, registration. 
 * - Running this script multiple times overwrites the CSV file. 
 * 
 * @remarks 
 * CSV columns: 
 *    swatchName, colorTypeName, sourceSpace, sourceComps,
 *    cmykComps, grayComps, labComps, rgbComps, hexComps
 * 
 */


// @include '../library/utilities/docUtils.jsx'
// @include '../library/utilities/colorUtils.jsx'
// @include '../library/utilities/swatchUtils.jsx'
// @include '../library/utilities/scriptUIUtils.jsx' 

var DEBUG = false;

(function swatchesExport() {

  var functionID = 'swatchesExport';
  var functionTitle = 'Export Swatch Data';

  try {

    // Get doc and swatches
    var doc = docUtils.getActiveDocument();
    var swatches = doc.swatches;

    if (swatches.length === 0) {
      scriptUIUtils.alertBox(functionTitle, 'No swatches found.');
      return;
    }

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
    csvFile.writeln('sourceSpace,swatchName,colorTypename,sourceComps,cmykComps,grayComps,labComps,rgbComps,hexComps');
    
    // Loop swatches
    for (var i = 0; i < swatches.length; i++) {

      var swatch = swatches[i];
      var swatchName = swatch.name;
      var swatchColor = swatch.color;
      var colorTypename;

      // Skip gradients, patterns, transparent, registration
      if (swatchColor.typename === 'PatternColor' || swatchColor.typename === 'NoColor' || swatchColor.typename === 'GradientColor' || swatchName === 'Registration' || swatchName === '[Registration]') {
        continue;
      }

      // Process vs Spot kind
      if (swatchColor.typename === 'SpotColor') {
        colorTypename = swatchColor.spot.spotKind;
      } else {
        colorTypename = swatchColor.typename;
      }    

      // Get swatch ImageColorSpace and components
      var source = colorUtils.getColorSourceComps(swatchColor);
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
      var row = sourceSpace + ',' + swatchName + ',' + colorTypename + ',' + sourceComps.join(' ') + ',' + cmykComps.join(' ') + ',' + grayComps.join(' ') + ',' + labComps.join(' ') + ',' + rgbComps.join(' ') + ',' + hexComps;

      csvFile.writeln(row);

    } // for

    // Close the CSV file
    csvFile.close();

    // Alert user
    var alertString = 'CSV saved to:\n' + csvFile.fsName;
    scriptUIUtils.alertBox(functionTitle, alertString, 572);

    // Debug
    // var message = 'SUCCESS ' + functionID + '\n' + csvFile.fsName;
    // if (DEBUG) alert(message, functionID);

  } catch (e) {
    e.message = 'ERROR ' + functionID + '\n' + e.message;
    scriptUIUtils.alertBox(functionTitle, e.message);
  }

})();


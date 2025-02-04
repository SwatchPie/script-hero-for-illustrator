/**
 * @file Script-Hero\swatches-add\swatches-add-rgb.jsx
 * @author SwatchPie.io
 * @version 1.0
 * @date 2024-07-10
 * @license 'CC BY-NC 4.0'
 * 
 * @description
 * Demonstrates bulk creation of RGB Process swatches.
 * 
 * @example
 * 1. Open a document in RGB mode.
 * 2. Use `CTRL+F12` to run this script.
 * 3. When prompted, keep or delete existing swatches.
 * 4. New swatches are added to the Swatches panel.
 * 5. Optionally, both new and existing swatches are grouped.
 * 
 */


// @include '../library/utilities/swatchUtils.jsx'
// @include '../library/utilities/scriptUIUtils.jsx'

(function addSwatchesRGB() {

  var functionID = 'addSwatchesRGB';
  var functionTitle = 'Add RGB Swatches';
  var DEBUG = false;

  try {

    // Prompt for swatch clean up
    var  promptCleanup = scriptUIUtils.promptConfirm(functionTitle, 'Delete existing swatches?');

    if (promptCleanup) {
      swatchUtils.deleteAllSwatches();
    }

    // Add Swatches
    swatchUtils.makeSwatchRGB('RGB 2.5R',255,0,63.75,'RGB Process');
    swatchUtils.makeSwatchRGB('RGB 5R',255,0,0,'RGB Process');
    swatchUtils.makeSwatchRGB('RGB 7.5R',255,32,0,'RGB Process');
    swatchUtils.makeSwatchRGB('RGB 10R',255,64,0,'RGB Process');
    swatchUtils.makeSwatchRGB('RGB 2.5YR',255,96,0,'RGB Process');
    swatchUtils.makeSwatchRGB('RGB 5YR',255,128,0,'RGB Process');
    swatchUtils.makeSwatchRGB('RGB 7.5YR',255,160,0,'RGB Process');
    swatchUtils.makeSwatchRGB('RGB 10YR',255,192,0,'RGB Process');
    swatchUtils.makeSwatchRGB('RGB 2.5Y',255,224,0,'RGB Process');
    swatchUtils.makeSwatchRGB('RGB 5Y',255,255,0,'RGB Process');
    swatchUtils.makeSwatchRGB('RGB 7.5Y',224,255,0,'RGB Process');
    swatchUtils.makeSwatchRGB('RGB 10Y',192,255,0,'RGB Process');
    swatchUtils.makeSwatchRGB('RGB 2.5GY',160,255,0,'RGB Process');
    swatchUtils.makeSwatchRGB('RGB 5GY',128,255,0,'RGB Process');
    swatchUtils.makeSwatchRGB('RGB 7.5GY',96,255,0,'RGB Process');
    swatchUtils.makeSwatchRGB('RGB 10GY',64,255,0,'RGB Process');
    swatchUtils.makeSwatchRGB('RGB 2.5G',32,255,0,'RGB Process');
    swatchUtils.makeSwatchRGB('RGB 5G',0,255,0,'RGB Process');
    swatchUtils.makeSwatchRGB('RGB 7.5G',0,255,63.75,'RGB Process');
    swatchUtils.makeSwatchRGB('RGB 10G',0,255,127.5,'RGB Process');
    swatchUtils.makeSwatchRGB('RGB 2.5BG',0,255,191.25,'RGB Process');
    swatchUtils.makeSwatchRGB('RGB 5BG',0,255,255,'RGB Process');
    swatchUtils.makeSwatchRGB('RGB 7.5BG',0,244,255,'RGB Process');
    swatchUtils.makeSwatchRGB('RGB 10BG',0,192,255,'RGB Process');
    swatchUtils.makeSwatchRGB('RGB 2.5B',0,160,255,'RGB Process');
    swatchUtils.makeSwatchRGB('RGB 5B',0,128,255,'RGB Process');
    swatchUtils.makeSwatchRGB('RGB 7.5B',0,96,255,'RGB Process');
    swatchUtils.makeSwatchRGB('RGB 10B',0,64,255,'RGB Process');
    swatchUtils.makeSwatchRGB('RGB 2.5PB',0,32,255,'RGB Process');
    swatchUtils.makeSwatchRGB('RGB 5PB',0,0,255,'RGB Process');
    swatchUtils.makeSwatchRGB('RGB 7.5PB',32,0,255,'RGB Process');
    swatchUtils.makeSwatchRGB('RGB 10PB',64,0,255,'RGB Process');
    swatchUtils.makeSwatchRGB('RGB 2.5P',96,0,255,'RGB Process');
    swatchUtils.makeSwatchRGB('RGB 5P',128,0,255,'RGB Process');
    swatchUtils.makeSwatchRGB('RGB 7.5P',160,0,255,'RGB Process');
    swatchUtils.makeSwatchRGB('RGB 10P',192,0,255,'RGB Process');
    swatchUtils.makeSwatchRGB('RGB 2.5RP',224,0,255,'RGB Process');
    swatchUtils.makeSwatchRGB('RGB 5RP',255,0,255,'RGB Process');
    swatchUtils.makeSwatchRGB('RGB 7.5RP',255,0,191.25,'RGB Process');
    swatchUtils.makeSwatchRGB('RGB 10RP',255,0,127.5,'RGB Process');
    
    // Debug
    var message = 'SUCCESS ' + functionID + '\nRGB Process swatches added.';
    if (DEBUG) alert(message, functionID);
    
  } catch (e) {
    e.message = 'ERROR ' + functionID + '\n' + e.message;
    scriptUIUtils.alertBox(functionTitle, e.message);
  }

})();


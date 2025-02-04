/**
 * @file F:\Script-Hero\swatch-hero\swatch-legend.jsx
 * @author SwatchPie.io
 * @version 1.0
 * @date 2025-02-01
 * @license 'CC BY-NC 4.0'
 * 
 * @description
 * Creates a tile with color data for selected swatches.
 * 
 * @example
 * 1. Open a document in CMYK mode.
 * 2. Select some swatches or a swatch group.
 * 3. Use `CTRL+F12` to run this script.
 * 
 */


// @include '../global.jsx'
// @include '../library/utilities/colorUtils.jsx'
// @include '../library/utilities/docUtils.jsx'
// @include '../library/utilities/layerUtils.jsx'
// @include '../library/utilities/miscUtils.jsx'
// @include '../library/utilities/scriptUIUtils.jsx'
// @include '../library/utilities/swatchUtils.jsx'

var DEBUG = false;
var SL_OPTS = global.SL_OPTS;

(function swatchLegendUI() {

  var functionID = 'swatchLegendUI';
  var functionTitle = 'Swatch Legend';

  try {

    if (typeof SL_OPTS !== 'object') {
      throw new Error('Missing or undefined module object: SL_OPTS.');
    }
    if (!app.activeDocument) {
      throw new Error('No active document.');
    }
    if (app.activeDocument.swatches.getSelected().length === 0){
      throw new Error('No selected swatches.');
    }

    //
    // Default checkbox states
    //
    var printNameState = SL_OPTS.printData ? SL_OPTS.printName : SL_OPTS.printData;
    var printCMYKState = SL_OPTS.printData ? SL_OPTS.printCMYK : SL_OPTS.printData;
    var printLABState = SL_OPTS.printData ? SL_OPTS.printLAB : SL_OPTS.printData;
    var printRGBState = SL_OPTS.printData ? SL_OPTS.printRGB : SL_OPTS.printData;
    var printHEXState = SL_OPTS.printData ? SL_OPTS.printHEX : SL_OPTS.printData;
    var printGrayState = SL_OPTS.printData ? SL_OPTS.printGray : SL_OPTS.printData;

    //
    // Data panel
    //
    var win = new Window('dialog', functionTitle);
        win.alignChildren = 'fill';

    var dataPanel = win.add('panel', undefined, 'Data');
        dataPanel.alignChildren = 'left';
        dataPanel.margins = scriptUIUtils.panelMargins;

    // Radio group
    var dataRadioGroup = dataPanel.add('group', undefined);
        dataRadioGroup.orientation = 'row';

    var printData = dataRadioGroup.add('radiobutton', undefined, 'Print Data');
        printData.value = SL_OPTS.printData;
    var noData = dataRadioGroup.add('radiobutton', undefined, 'Hide Data');
        noData.value = !printData.value;

    // Checkbox group
    var dataCheckboxGroup = dataPanel.add('group', undefined);
        dataCheckboxGroup.orientation = 'row';

    var printName = scriptUIUtils.checkBox(dataCheckboxGroup, 'Name', printNameState);
        printName.enabled = printData.value;
    var printCMYK = scriptUIUtils.checkBox(dataCheckboxGroup, 'CMYK', printCMYKState);
        printCMYK.enabled = printData.value;
    var printLAB =  scriptUIUtils.checkBox(dataCheckboxGroup, 'Lab', printLABState);
        printLAB.enabled = printData.value;
    var printRGB =  scriptUIUtils.checkBox(dataCheckboxGroup, 'RGB', printRGBState);
        printRGB.enabled = printData.value;
    var printHEX =  scriptUIUtils.checkBox(dataCheckboxGroup, 'Hex', printHEXState);
        printHEX.enabled = printData.value;
    var printGray = scriptUIUtils.checkBox(dataCheckboxGroup, 'GS', printGrayState);
        printGray.enabled = printData.value;

    //
    // Text panel
    //
    var textPanel = win.add('panel', undefined, 'Text');
        textPanel.margins = scriptUIUtils.panelMargins;

    // Text column wrap
    var textColumnWrap = textPanel.add('group', undefined);
        textColumnWrap.orientation = 'row';
        textColumnWrap.alignChildren = ['left', 'top']; // Ensures children align left
        textColumnWrap.alignment = ['left', 'top']; // Makes sure it stays floated left
        textColumnWrap.spacing = 10; // Ensures a small gap between the columns

    // Text size column
    var textSizeGroup = textColumnWrap.add('group', undefined);
        textSizeGroup.orientation = 'column'; // Stack elements inside this group vertically
        textSizeGroup.alignChildren = ['left', 'top']; // Ensures elements are aligned left
        textSizeGroup.alignment = ['left', 'top']; // Ensures the entire group is aligned left
        textSizeGroup.preferredSize.width = 160; // Adjust width as needed

    var textSize = scriptUIUtils.numberField(textSizeGroup, 'Text Size', 8, 300, SL_OPTS.textSize, 4);
        textSize.enabled = printData.value;

    // Data separator column
    var separatorGroup = textColumnWrap.add('group', undefined);
        separatorGroup.orientation = 'row'; 
        separatorGroup.alignChildren = ['left', 'bottom']; // Ensures left alignment
        separatorGroup.alignment = ['left', 'bottom']; // Floats it left

    var commaRadio = separatorGroup.add('radiobutton', undefined, 'Comma');
        commaRadio.value = SL_OPTS.commaSep; 
        commaRadio.enabled = printData.value;
    var spaceRadio = separatorGroup.add('radiobutton', undefined, 'Space');
        spaceRadio.value = !commaRadio.value;
        spaceRadio.enabled = printData.value;

    // Font search group
    var fontName = scriptUIUtils.fontSearch(textPanel);
        fontName.enabled = printData.value;

    //
    // Tile panel
    // 
    var tilePanel = win.add('panel', undefined, 'Tile');
        tilePanel.orientation = 'row';
        tilePanel.alignChildren = 'fill';
        tilePanel.margins = scriptUIUtils.panelMargins;

    // Left column
    var tileLeftGroup = tilePanel.add('group', undefined);
        tileLeftGroup.orientation = 'column';
        tileLeftGroup.alignChildren = ['left', 'top'];
        tileLeftGroup.preferredSize.width = 200; // Adjust 

    var tileWidth = scriptUIUtils.numberField(tileLeftGroup, 'Tile Width', 32, 1200, SL_OPTS.tileWidth);
    var tileHeight = scriptUIUtils.numberField(tileLeftGroup, 'Tile Height', 32, 1200, SL_OPTS.tileHeight);
    var numColumns = scriptUIUtils.numberField(tileLeftGroup, 'Number of Columns', 1, 100, SL_OPTS.numColumns);

    // Right column
    var tileRightGroup = tilePanel.add('group', undefined);
        tileRightGroup.orientation = 'column';
        tileRightGroup.alignChildren = ['left', 'top'];
        tileRightGroup.preferredSize.width = 200; // Adjust 

    var marginsLR = scriptUIUtils.numberField(tileRightGroup, 'Left-Right Margin', 0, 500, SL_OPTS.marginsLR);
    var marginsTB = scriptUIUtils.numberField(tileRightGroup, 'Top-Bottom Margin', 0, 500, SL_OPTS.marginsTB);

    //
    // Radio handlers
    //
    printData.onClick = printDataHandler;
    noData.onClick = printDataHandler;

    function printDataHandler() {
      printName.enabled = printData.value;
      printCMYK.enabled = printData.value;
      printLAB.enabled = printData.value;
      printRGB.enabled = printData.value;
      printRGB.enabled = printData.value;
      printHEX.enabled = printData.value;
      printGray.enabled = printData.value;
      fontName.enabled = printData.value;
      textSize.enabled = printData.value;
      commaRadio.enabled = printData.value;
      spaceRadio.enabled = printData.value;
    }  

    //
    // Run Button Group
    //
    var runGroup = win.add('group', undefined);
        runGroup.orientation = 'column';
        runGroup.alignment = 'fill';

    // Run button and handler
    var runButton = runGroup.add('button', undefined, 'Run');
        runButton.alignment = 'fill'
        runButton.onClick = runButtonHandler;

    function runButtonHandler() {

      var functionID = 'runButtonHandler';

      try {
        // Gather input values
        var options = {
          printData: printData.value,
          printName: printName.value,
          printCMYK: printCMYK.value,
          printGray: printGray.value,
          printLAB: printLAB.value,
          printRGB: printRGB.value,
          printHEX: printHEX.value,
          fontName: fontName.selection.text,
          textSize: parseFloat(textSize.text),
          dataSep: commaRadio.value == true ? ', ' : ' ',
          tileWidth: parseFloat(tileWidth.text),
          tileHeight: parseFloat(tileHeight.text),
          numColumns: parseFloat(numColumns.text),
          marginsLR: parseFloat(marginsLR.text),
          marginsTB: parseFloat(marginsTB.text),
        };

        // Debug
        var optionsString = miscUtils.objectToString(options);
        if (DEBUG) alert(optionsString, functionID);

        // Pass options
        swatchLegend(options);

        // Close the dialog
        win.close();

      } catch (e) {
        e.message = 'ERROR ' + functionID + '\n' + e.message;
        throw e;
      }
    };

    //
    // Show dialog + debug
    //
    win.show();

    var message = 'SUCCESS ' + functionID + '\n';
    if (DEBUG) alert(message, functionID);

  } catch (e) {
    e.message = 'ERROR ' + functionID + '\n' + e.message;
    scriptUIUtils.alertBox(functionID, e.message);
  }

})();


function swatchLegend(options) {

  var functionID = 'swatchLegend';

  try {

    if (typeof options !== 'object') {
      throw new Error('Parameter must be an object: options.');
    }

    //
    // Unpack and set  defaults
    // 

    // Working layer name
    var workingLayerName = 'Swatch Legend';

    // Print data booleans
    var printData = options.printData;
    var printName = options.printName;
    var printCMYK = options.printCMYK;
    var printGray = options.printGray;
    var printHEX = options.printHEX;
    var printLAB = options.printLAB;
    var printRGB = options.printRGB;

    // Number of tile columns
    var columns = options.numColumns;

    // Tile width + height in document units
    var tileWidth = options.tileWidth;
    var tileHeight = options.tileHeight;

    // Margin between each tile in document units
    var marginsTB = options.marginsTB;
    var marginsLR = options.marginsLR;

    // Text options
    var fontName = options.fontName;
    var textSize = options.textSize;
    var dataSep = options.dataSep;

    // Adjust for Large Canvas mode
    // scaleFactor == 10, so divide by 100
    if (docUtils.checkLargeCanvas()) {
      textSize = textSize / 100;
      tileWidth = tileWidth / 100;
      tileHeight = tileHeight / 100;
      marginsTB = marginsTB / 100;
      marginsLR = marginsLR / 100;
    }

    // Padding between tile and inner text in document units 
    var padTB = textSize * 0.68;
    var padLR = textSize * 0.68;   
    
    // Grayscale threshold % for determining text color.
    // Higher than this percent is a dark color and text will be white.
    var gsThreshold = 50;

    // `.gray` auto-converts to CMYK or RGB
    var textBlack = new GrayColor();
        textBlack.gray = 100;

    var textWhite = new GrayColor();
        textWhite.gray = 0;

    //
    // Start Operations
    //    

    var doc = docUtils.getActiveDocument();
    var swatches = swatchUtils.getSelectedSwatches();
    var workingLayer = layerUtils.makeNewLayer(doc, workingLayerName);

    // Create a group to hold all tiles
    var allTiles = doc.groupItems.add(); 
        allTiles.name = 'Tiles';
        allTiles.move(doc, ElementPlacement.PLACEATBEGINNING);  

    // Main Loop
    for (var i = 0; i < swatches.length; i++) {

      var swatch = swatches[i];
      var swatchName = swatch.name;
      var swatchColor = swatch.color;

      // Skip gradients, patterns, NoColor, Registration
      if (swatchColor.typename === 'PatternColor' || swatchColor.typename === 'NoColor' || swatchColor.typename === 'GradientColor' || swatchName === '[Registration]') {
        continue;
      }

      // Collect tile text
      if (printData) {

        // Init data array and push swatch name
        var colorData = [];
      
        // Get swatch's base color space and components
        var source = colorUtils.getColorSourceComps(swatchColor);
        var sourceSpace = source.sourceSpace;
        var sourceComps = source.sourceComps;

        // Swatch name
        if (printName) colorData.push(swatchName); 

        // Convert to CMYK
        if (printCMYK) {
          var cmykColor = colorUtils.convertColorToCMYK(sourceSpace, sourceComps);
          var cmykComps = cmykColor.targetCompsR;
          var cmykString = cmykColor.targetLabel + ' ' + cmykComps.join(dataSep);
          colorData.push(cmykString);          
        }

        // Convert to LAB
        if (printLAB) {
          var labColor = colorUtils.convertColorToLab(sourceSpace, sourceComps);
          var labComps = labColor.targetCompsR;
          var labString = labColor.targetLabel + ' ' + labComps.join(dataSep);
          colorData.push(labString); 
        }

        // Convert to RGB
        if (printRGB) {
          var rgbColor = colorUtils.convertColorToRGB(sourceSpace, sourceComps);
          var rgbComps  = rgbColor.targetCompsR;
          var rgbString = rgbColor.targetLabel + ' ' + rgbComps.join(dataSep);
          colorData.push(rgbString);              
        }

        // Convert to HEX
        if (printHEX) {
          var hexColor = colorUtils.convertColorToHex(sourceSpace, sourceComps);
          var hexComps = hexColor.targetComps;
          var hexString = hexColor.targetLabel + ' ' + hexComps;
          colorData.push(hexString);          
        }

        // Convert to GrayScale
        // Always needed for determining text color.
        var grayColor = colorUtils.convertColorToGray(sourceSpace, sourceComps);
        var grayComps = grayColor.targetCompsR;
        var grayString = grayColor.targetLabel + ' ' + grayComps.join(dataSep);

        if (printGray) {
          colorData.push(grayString);
        }
      }

      // Make tile
      var tileGroup = doc.groupItems.add();
          tileGroup.name = swatchName;
  
      var x = (tileWidth + marginsLR) * (i % columns);
      var y = (tileHeight + marginsTB) * Math.floor(i / columns) * -1;
  
      // Add color object
      var swatchRect = doc.pathItems.rectangle(y, x, tileWidth, tileHeight);
          swatchRect.fillColor = swatchColor;
          swatchRect.stroked = false;
          swatchRect.name = swatchName;
  
      // Add text
      if (printData) {
        var textRect = doc.pathItems.rectangle(y - padTB, x + padLR, tileWidth - (2 * padLR), tileHeight - (2 * padTB));

        var textColor = grayComps[0] <= gsThreshold ? textBlack : textWhite;
        var text = colorData.join('\r');

        var textFrame = doc.textFrames.areaText(textRect);
            textFrame.textRange.fillColor = textColor;
            textFrame.textRange.size = textSize;
            textFrame.textRange.characterAttributes.textFont = app.textFonts.getByName(fontName);
            textFrame.contents = text;        
      }
  
      // Move tile into position
      swatchRect.move(tileGroup, ElementPlacement.PLACEATBEGINNING);
      if (printData) textFrame.move(tileGroup, ElementPlacement.PLACEATBEGINNING);
      tileGroup.move(allTiles, ElementPlacement.PLACEATEND);

    } // Main loop    

    // Debug
    var message = 'SUCCESS ' + functionID + '\n';
    if (DEBUG) alert(message, functionID);

  } catch (e) {
    e.message = 'ERROR ' + functionID + '\n' + e.message;
    throw e;
  }
}


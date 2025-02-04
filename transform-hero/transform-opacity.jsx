/**
 * @file Script-Hero\transform-hero\transform-opacity.jsx
 * @author SwatchPie.io
 * @version 1.0
 * @date 2025-01-31
 * @license 'CC BY-NC 4.0'
 * 
 * @description
 * Sets opacity for selected items.
 * - Set a fixed or randomized opacity.
 * - Set opacity for all selected items, or a random percent of selected items.
 * - Easily reset opacity to 100%. 
 * 
 * @example
 * 1. Open a document.
 * 2. Use `CTRL+F12` to run this script.
 * 
 */


// @include '../library/utilities/itemUtils.jsx'
// @include '../library/utilities/miscUtils.jsx'
// @include '../library/utilities/scriptUIUtils.jsx'

var DEBUG = false;

(function transformOpacityUI() {

  var functionID = 'transformOpacityUI';
  var functionTitle = 'Transform Opacity';

  try {

    if (!app.activeDocument) {
      throw new Error('No active document.');
    }
    if (app.activeDocument.selection.length === 0) {
      throw new Error('No selected items.');
    }
    
    var win = new Window('dialog', functionTitle);
        win.alignChildren = 'fill';

    //
    // Panel: Selection
    //
    var selectionPanel = win.add('panel', undefined, 'Selection');
        selectionPanel.orientation = 'column';
        selectionPanel.alignChildren = 'left';
        selectionPanel.margins = scriptUIUtils.panelMargins;

    // Add row to hold radio buttons
    var selectionRadioGroup = selectionPanel.add('group', undefined);
        selectionRadioGroup.orientation = 'row';

    // Add the radio buttons and set default
    var allSelectedRadio = selectionRadioGroup.add('radiobutton', undefined, 'All Items');
        allSelectedRadio.value = true; 
        
    var randomSelectRadio = selectionRadioGroup.add('radiobutton', undefined, 'Random Items');
    
    // Add fields
    var randomSelectionField = scriptUIUtils.numberField(selectionPanel, 'Random Selection Percent', 1, 100, 50);

    // Set field defaults
    randomSelectionField.enabled = false;

    // Radio handler
    allSelectedRadio.onClick = selectionRadioHandler;
    randomSelectRadio.onClick = selectionRadioHandler;

    // Enable fields based on radio selection
    function selectionRadioHandler() {
      randomSelectionField.enabled = randomSelectRadio.value;
    }

    //
    // Panel: Opacity
    //
    var opacityPanel = win.add('panel', undefined, 'Opacity');
        opacityPanel.orientation = 'column';
        opacityPanel.alignChildren = 'left';
        opacityPanel.margins = scriptUIUtils.panelMargins;

    // Add row to hold radio buttons
    var opacityRadioGroup = opacityPanel.add('group', undefined);
        opacityRadioGroup.orientation = 'row';

    // Add the radio buttons and set default
    var setOpacityRadio = opacityRadioGroup.add('radiobutton', undefined, 'Set Opacity');
        setOpacityRadio.value = true; 
    var randomOpacityRadio = opacityRadioGroup.add('radiobutton', undefined, 'Random Opacity');

    // Add fields
    var opacityField = scriptUIUtils.numberField(opacityPanel, 'Opacity Percent', 0, 100, 50);
    var minOpacityField = scriptUIUtils.numberField(opacityPanel, 'Minimum Opacity Percent', 0, 100, 20);
    var maxOpacityField = scriptUIUtils.numberField(opacityPanel, 'Maximum Opacity Percent', 0, 100, 100);

    // Set field defaults
    opacityField.enabled = true;
    minOpacityField.enabled = false;
    maxOpacityField.enabled = false;

    // Radio handler
    setOpacityRadio.onClick = opacityRadioHandler;
    randomOpacityRadio.onClick = opacityRadioHandler;

    // Enable fields based on radio selection
    function opacityRadioHandler() {
      opacityField.enabled = setOpacityRadio.value;
      minOpacityField.enabled = randomOpacityRadio.value;
      maxOpacityField.enabled = randomOpacityRadio.value;
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
          selectionRandomizeBool: randomSelectRadio.value,
          selectionPercent: parseFloat(randomSelectionField.text),
          opacityRandomizeBool: randomOpacityRadio.value,
          opacityPercent: parseFloat(opacityField.text),
          minOpacityPercent: parseFloat(minOpacityField.text),
          maxOpacityPercent: parseFloat(maxOpacityField.text),
        };

        // Debug
        var optionsString = miscUtils.objectToString(options);
        if (DEBUG) alert(optionsString, functionID);

        // Pass options
        transformOpacity(options);

        // Close the dialog
        win.close();

      } catch (e) {
        e.message = 'ERROR ' + functionID + '\n' + e.message;
        throw e;
      }
    };

    //
    // Reset Button Group
    //
    var resetGroup = win.add('group', undefined);
        resetGroup.orientation = 'column';
        resetGroup.alignment = 'fill';

    // Rest button and handler
    var resetButton = resetGroup.add('button', undefined, 'Reset');
        resetButton.alignment = 'fill'
        resetButton.onClick = resetButtonHandler;

    function resetButtonHandler() {

      var functionID = 'resetButtonHandler';

      try {
        // Run reset function
        transformOpacityReset();

        // Debug
        var message = 'SUCCESS ' + functionID + '\n';
        if (DEBUG) alert(message, functionID);

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


function transformOpacity(options) {

  var functionID = 'transformOpacity';

  try {

    if (typeof options !== 'object') {
      throw new Error('Parameter must be an object: options.');
    }

    if (options.selectionRandomizeBool) {
      itemUtils.randomizeSelection(options.selectionPercent);
    }

    var selection = itemUtils.getSelectedItems();
    
    for (var i = 0; i < selection.length; i++) {
      var item = selection[i];
    
      if (options.opacityRandomizeBool) {
        itemUtils.setItemOpacityRandom(item, options.minOpacityPercent, options.maxOpacityPercent);
      } else {
        itemUtils.setItemOpacity(item, options.opacityPercent);
      }
    }

    // Debug
    var message = 'SUCCESS ' + functionID + '\n';
    if (DEBUG) alert(message, functionID);

  } catch (e) {
    e.message = 'ERROR ' + functionID + '\n' + e.message;
    throw e;
  }
}


function transformOpacityReset() {

  var functionID = 'transformOpacityReset';

  try {

    var selection = itemUtils.getSelectedItems();
    
    for (var i = 0; i < selection.length; i++) {
      var item = selection[i];
      itemUtils.setItemOpacity(item, 100);
    }

    // Debug
    var message = 'SUCCESS ' + functionID + '\n';
    if (DEBUG) alert(message, functionID);

  } catch (e) {
    e.message = 'ERROR ' + functionID + '\n' + e.message;
    throw e;
  }
}


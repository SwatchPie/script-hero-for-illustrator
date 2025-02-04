/**
 * @file Script-Hero\transform-hero\transform-rotate.jsx
 * @author SwatchPie.io
 * @version 1.0
 * @date 2025-01-31
 * @license 'CC BY-NC 4.0'
 * 
 * @description
 * Rotates selected items.
 * - Set a fixed or random rotation.
 * - Rotate all selected items or a random percent of selected items. 
 * - Undo rotation performed by this script. 
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

(function transformRotateUI() {

  var functionID = 'transformRotateUI';
  var functionTitle = 'Transform Rotate';

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

    function selectionRadioHandler() {
      randomSelectionField.enabled = randomSelectRadio.value;
    }

    //
    // Panel: Rotation
    //
    var rotationPanel = win.add('panel', undefined, 'Rotation');
        rotationPanel.orientation = 'column';
        rotationPanel.alignChildren = 'left';
        rotationPanel.margins = scriptUIUtils.panelMargins;

    // Add row to hold radio buttons
    var rotationRadioGroup = rotationPanel.add('group', undefined);
        rotationRadioGroup.orientation = 'row';

    // Add the radio buttons and set default
    var setRotationRadio = rotationRadioGroup.add('radiobutton', undefined, 'Set Rotation');
        setRotationRadio.value = true; 
    var randomRotationRadio = rotationRadioGroup.add('radiobutton', undefined, 'Random Rotation');

    // Add fields
    var rotationField = scriptUIUtils.numberField(rotationPanel, 'Rotation Degrees', -180, 180, 30, 4);
    var cwRotationField = scriptUIUtils.numberField(rotationPanel, 'Max Clockwise Rotation', 0, 180, 30, 4);
    var ccwRotationField = scriptUIUtils.numberField(rotationPanel, 'Max Counter Clockwise Rotation', 0, 180, 30, 4);

    // Set field defaults
    rotationField.enabled = true;
    cwRotationField.enabled = false;
    ccwRotationField.enabled = false;

    // Radio handler
    setRotationRadio.onClick = rotationRadioHandler;
    randomRotationRadio.onClick = rotationRadioHandler;

    function rotationRadioHandler() {
      rotationField.enabled = setRotationRadio.value;
      cwRotationField.enabled = randomRotationRadio.value;
      ccwRotationField.enabled = randomRotationRadio.value;
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
          rotationRandomizeBool: randomRotationRadio.value,
          rotationDegree: parseFloat(rotationField.text),
          maxCWRotation: parseFloat(cwRotationField.text),
          maxCCWRotation: parseFloat(ccwRotationField.text),
        };

        // Debug
        var optionsString = miscUtils.objectToString(options);
        if (DEBUG) alert(optionsString, functionID);

        // Pass options
        transformRotate(options);

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
        transformRotateReset();

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


function transformRotate(options) {

  var functionID = 'transformRotate';

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

      if (options.rotationRandomizeBool) {
        itemUtils.rotateItemRandom(item, options.maxCWRotation, options.maxCCWRotation);
      } else {
        itemUtils.rotateItem(item, options.rotationDegree);
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


function transformRotateReset() {

  var functionID = 'transformRotateReset';

  try {

    var selection = itemUtils.getSelectedItems();
    
    for (var i = 0; i < selection.length; i++) {
      var item = selection[i];
      itemUtils.resetItemRotation(item);
    }

    // Debug
    var message = 'SUCCESS ' + functionID + '\n';
    if (DEBUG) alert(message, functionID);

  } catch (e) {
    e.message = 'ERROR ' + functionID + '\n' + e.message;
    throw e;
  }
}


/**
 * @file Script-Hero/templates/sui.jsx
 * @author SwatchPie.io
 * @version 1.0
 * @date 2025-01-31
 * @license 'CC BY-NC 4.0'
 * 
 * @description
 * A template for Script UI scripts
 * using the 'Script Hero' library. 
 * 
 */


// @include '../library/utilities/miscUtils.jsx'
// @include '../library/utilities/scriptUIUtils.jsx'

var DEBUG = true;

(function scriptNameUI() {

  var functionID = 'scriptNameUI';
  var functionTitle = 'Script Title';

  try {

    if (!app.activeDocument) {
      throw new Error('No active document.');
    }

    var win = new Window('dialog', functionTitle);
        win.alignChildren = 'fill';

    //
    // Code here
    //

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
        scriptNameReset();        
      
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
          hello: 'Hello, World!',
          goodbye: 'So long for now :)'
        };

        // Debug
        var optionsString = miscUtils.objectToString(options);
        if (DEBUG) alert(optionsString, functionID);

        // Pass options
        scriptName(options);

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


function scriptName(options) {

  var functionID = 'scriptName';

  try {

    if (typeof options !== 'object') {
      throw new Error('Parameter must be an object: options.');
    }

    // Code here

    // Debug
    var message = 'SUCCESS ' + functionID + '\n';
    if (DEBUG) alert(message, functionID);

  } catch (e) {
    e.message = 'ERROR ' + functionID + '\n' + e.message;
    throw e;
  }
}

function scriptNameReset() {

  var functionID = 'scriptNameReset';

  try {

    // Code here

    // Debug
    var message = 'SUCCESS ' + functionID + '\n';
    if (DEBUG) alert(message, functionID);

  } catch (e) {
    e.message = 'ERROR ' + functionID + '\n' + e.message;
    throw e;
  }
}


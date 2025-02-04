/**
 * @file Script-Hero\library\tests\test_scriptUIUtils.jsx
 * @author SwatchPie.io
 * @version 1.0
 * @date 2024-11-11
 * @license 'CC BY-NC 4.0'
 * 
 * @description
 * Displays a ScriptUI window for
 * testing UI components.
 * 
 * @example
 * 1. Open a document.
 * 2. Use `CTRL+F12` to run this script.
 * 
 */


// @include '../utilities/miscUtils.jsx'
// @include '../utilities/scriptUIUtils.jsx'

var DEBUG = true;

(function myScriptUI() {

  var functionID = 'myScriptUI';
  var functionTitle = 'UI Title';
  
  try {

    if (!app.activeDocument) {
      throw new Error('No active document.');
    }
    
    //
    // Window
    //
    var win = new Window('dialog', functionTitle);
        win.alignChildren = 'fill'; 
        
    //
    // Checkboxes
    // 
    var colorDataPanel = win.add('panel', undefined, 'Checkboxes');
        colorDataPanel.orientation = 'column';
        colorDataPanel.alignChildren = ['fill', 'top']; 
        colorDataPanel.margins = scriptUIUtils.panelMargins;

    var colorDataGroup = colorDataPanel.add('group', undefined);
        colorDataGroup.orientation = 'row';
        colorDataGroup.alignment = 'fill';

    var cbFalse = scriptUIUtils.checkBox(colorDataGroup, 'Unchecked by Default');
    var cbTrue = scriptUIUtils.checkBox(colorDataGroup, 'Checked', true);

    //
    // Font search panel
    //
    var fontName = scriptUIUtils.fontSearch(win);

    //
    // Enable and disable fields 
    // Number fields
    // 
    var opacityPanel = win.add('panel', undefined, 'Opacity');
        opacityPanel.orientation = 'column';
        opacityPanel.alignChildren = ['fill', 'top']; 
        opacityPanel.margins = scriptUIUtils.panelMargins;

    var opacityRadios = opacityPanel.add('group');
        opacityRadios.orientation = 'row';
        opacityRadios.alignment = 'fill';

    var opacityRadioFixed = opacityRadios.add('radiobutton', undefined, 'Fixed');
        opacityRadioFixed.value = true;
        opacityRadioFixed.onClick = opacityRadioHandler;

    var opacityRadioRandom = opacityRadios.add('radiobutton', undefined, 'Random');
        opacityRadioRandom.onClick = opacityRadioHandler;

    var opacityPercentFixed = scriptUIUtils.numberField(opacityPanel, 'Opacity Percent', 0, 100, 50);
        opacityPercentFixed.enabled = true;

    var opacityPercentMin = scriptUIUtils.numberField(opacityPanel, 'Minimum Opacity Percent', 0, 100, 0);
        opacityPercentMin.enabled = false;

    var opacityPercentMax = scriptUIUtils.numberField(opacityPanel, 'Maximum Opacity Percent', 0, 100, 100);
        opacityPercentMax.enabled = false;

    function opacityRadioHandler() {
      opacityPercentFixed.enabled = opacityRadioFixed.value;
      opacityPercentMin.enabled   = opacityRadioRandom.value;
      opacityPercentMax.enabled   = opacityRadioRandom.value;
    }


    //
    // Run Button
    //
    var runGroup = win.add('group', undefined);
        runGroup.orientation = 'column';
        runGroup.alignment = 'fill';

    var runBtn = runGroup.add('button', undefined, 'Run');
        runBtn.alignment = 'fill'
        runBtn.onClick = runBtnHandler;

    function runBtnHandler() {

      var functionID = 'runBtnHandler';
      if (DEBUG) alert('SUCCESS Run button clicked.');
    
      try {
        var options = {
          cbFalse: cbFalse.value,
          cbTrue: cbTrue.value,
          fontName: fontName.selection.text,
          opacityRandom: opacityRadioRandom.value,
          opacityFixed: parseFloat(opacityPercentFixed.text),
          opacityMin: parseFloat(opacityPercentMin.text),
          opacityMax: parseFloat(opacityPercentMax.text),
        };
    
        var message = miscUtils.objectToString(options);
        if (DEBUG) alert('SUCCESS Run Options:\n' + message, functionID);
    
        // Pass options and close window
        myScript(options);
        win.close();
        
      } catch (e) {
        e.message = 'ERROR ' + functionID + '\n' + e.message;
        throw e;
      }
    }
    
    // Show the dialog
    win.show();

  } catch (e) {
    e.message = 'ERROR ' + functionID + '\n' + e.message;
    scriptUIUtils.alertBox(functionTitle, e.message);
  }

})();


function myScript(options) {

  var functionID = 'myScript';

  try {

    if (typeof options === 'undefined' || options === null) {
      throw new Error('Missing or undefined parameter: options');
    }

    var message = 'Continue with these options?\n' + miscUtils.objectToString(options);
    var promptContinue = scriptUIUtils.promptConfirm('Continue?', message);
    
    if (!promptContinue) {
      scriptUIUtils.alertBox(functionID, 'User clicked No or X.\nTest complete.')
      return
    }

    scriptUIUtils.alertBox(functionID, 'User clicked Yes.\nTest complete.')

  } catch (e) {
    e.message = 'ERROR ' + functionID + '\n' + e.message;
    alert(e.message, functionID);
  }
}


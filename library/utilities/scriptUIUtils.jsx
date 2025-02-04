/**
 * @file Script-Hero\library\utilities\scriptUIUtils.jsx
 * @author SwatchPie.io
 * @version 1.0
 * @date 2024-06-10
 * @license 'CC BY-NC 4.0'
 * 
 * @description
 * A module with utility functions for 
 * common ScriptUI components.
 * 
 */


// @include '../../global.jsx'

var scriptUIUtils = (function() {

  // Module Properties
  var DEBUG = global.DEBUG.SCRIPTUIUTILS;
  var panelMargins = [12, 20, 12, 12];


  /**
   * Displays a ScriptUI alert dialog with a message and OK button.
   * @function scriptUIUtils.alertBox
   * @param {string} title - The title of the dialog.
   * @param {string} message - The message to display in the dialog.
   * @param {number} [textWidth=256] - Optional width of dialog in points/pixels.
   * @throws {Error} If missing parameters.
   * @example
   * scriptUIUtils.alertBox('Alert Title', 'This is an alert message.', 300);
   */
  function alertBox(title, message, textWidth) {

    var functionID = 'scriptUIUtils.alertBox';

    try {

      if (typeof title !== 'string') {
        throw new Error('Parameter must be a string: title');
      }
      if (typeof message !== 'string') {
        throw new Error('Parameter must be a string: message');
      }

      var textWidthDefault = 256;
      var textWidthExists = !isNaN(textWidth);
      textWidth = textWidthExists ? textWidth : textWidthDefault;
      
      var dialog = new Window('dialog', title);
      
      var text = dialog.add('statictext', undefined, message, {multiline: true});
          text.alignment = 'left';
          text.preferredSize.width = textWidth;
      
      var okButton = dialog.add('button', undefined, 'OK', {name: 'ok'});
      
      okButton.onClick = function() {
          dialog.close();
      };
      
      dialog.show();

    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      throw e;
    }
  }


  /**
   * Displays a ScriptUI confirmation dialog with Yes and No buttons.
   * @function scriptUIUtils.promptConfirm
   * @param {string} title - The title of the dialog.
   * @param {string} message - The message to display in the dialog.
   * @param {string} [defaultBtn='yes'] - Sets the `'yes'` or `'no'` button as default. 
   * @returns {boolean} `true` if the Yes button is clicked.
   * @throws {Error} If missing or undefined parameters.
   * @example
   * var promptContinue = scriptUIUtils.promptConfirm('Swatches', 'Delete existing swatches?');
   * 
   * if (!promptContinue) {
   *  // User clicked No or X
   * }
   */
  function promptConfirm(title, message, defaultBtn) {

    var functionID = 'scriptUIUtils.promptConfirm';

    try {

      if (typeof title !== 'string') {
        throw new Error('Parameter must be a string: title');
      }
      if (typeof message !== 'string') {
        throw new Error('Parameter must be a string: message');
      }

      // Identify button default
      var defaultBtnDefault = 'yes';
      var defaultBtnExists = (typeof defaultBtn === 'string') && (defaultBtn === 'yes' || defaultBtn === 'no');
      defaultBtn = defaultBtnExists ? defaultBtn : defaultBtnDefault;

      var dialog = new Window('dialog', title);

      var text = dialog.add('statictext', undefined, message, {multiline: true});
          text.alignment = 'left';
      
      var btnGroup = dialog.add('group');
          btnGroup.alignment = 'center';

      var yesButton = btnGroup.add('button', undefined, 'Yes', {name: 'yes'});
      var noButton = btnGroup.add('button', undefined, 'No', {name: 'no'});

      // Set the default button
      if (defaultBtn === 'yes') {
        dialog.defaultElement = yesButton;
      } else {
        dialog.defaultElement = noButton;
      }

      // Handle the button clicks
      var result = false; 
      noButton.onClick = function() {
          result = false;
          dialog.close();
      };
      yesButton.onClick = function() {
          result = true;
          dialog.close();
      };
      
      dialog.show();
      return result; 

    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      throw e;
    }
  }


  /**
   * Inserts a reusable ScriptUI checkbox.
   * @function scriptUIUtils.checkBox
   * @param {group} parent - The parent group or panel to which the checkbox will be added.
   * @param {string} text - The label text for the checkbox.
   * @param {boolean} [state=false] - `false` when box is unchecked.
   * @returns {checkbox} The created checkbox.
   * @throws {Error} If missing parameters.
   * @example 
   * var checkboxA = scriptUIUtils.checkBox(colorsGroup, 'CMYK');
   * var checkboxAState = checkboxA.value;
   * if (checkboxAState) {
   *   // Checkbox is checked
   * }
   */
  function checkBox(parent, label, state) {

    var functionID = 'scriptUIUtils.checkBox';

    try {

      if (typeof parent === 'undefined' || parent === null) {
        throw new Error('Missing or undefined parameter: parent');
      }
      if (typeof label !== 'string') {
        throw new Error('Parameter must be a string: label');
      }

      var stateDefault = false;
      var stateExists = (typeof state === "boolean");
      state = stateExists ? state : stateDefault;

      var checkbox = parent.add('checkbox', undefined, label);
          checkbox.value = state;

      return checkbox;

    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      throw e;
    }
  }

  
  /**
   * Inserts a reusable ScriptUI number input field.
   * If input NaN, user is alerted and field is reset to default.
   * @function scriptUIUtils.numberField
   * @param {Group} parent - The parent group or panel to which the number field will be added.
   * @param {string} label - The label text for the number field.
   * @param {number} minVal - The minimum value for the number field.
   * @param {number} maxVal - The maximum value for the number field.
   * @param {number} defaultValue - The default value for the number field.
   * @param {number} [chars] - Optional length of field as number of characters. 
   * @returns {EditText} An SUI number field.
   * @throws {Error} If there are any missing parameters.
   * @example 
   * var numberField = scriptUIUtils.numberField(group, 'Enter a number', 0, 100, 50);
   * var number = parseFloat(numberField.text);
   */
  function numberField(parent, label, minVal, maxVal, defaultValue, chars) {

    var functionID = 'scriptUIUtils.numberField';
    var functionTitle = 'Number Check';

    try {

      if (typeof parent === 'undefined' || parent === null) {
        throw new Error('Missing or undefined parameter: parent');
      }
      if (typeof label !== 'string') {
        throw new Error('Parameter must be a string: label');
      }
      if (isNaN(minVal)) {
        throw new Error('Parameter must be a number: minVal');
      }
      if (isNaN(maxVal)) {
        throw new Error('Parameter must be a number: maxVal');
      }
      if (minVal >= maxVal) {
        throw new Error('minVal cannot be >= maxVal.');
      }
      if (isNaN(defaultValue)) {
        throw new Error('Parameter must be a number: defaultValue');
      }
      if (defaultValue < minVal || defaultValue > maxVal) {
        throw new Error('Parameter is out of range: minVal <= defaultValue <= maxVal');
      }

      // Use the number of characters in `maxVal` to set default field width
      var charsDefault = maxVal.toString().length;
      var charsExists = !isNaN(chars);
      chars = charsExists && chars > charsDefault ? chars : charsDefault;
    
      // Create a group for the label and the number field
      var group = parent.add('group');
      group.orientation = 'row';

      // Add the number field
      var numField = group.add('edittext', undefined, defaultValue.toString());

      // Set the size of the number field to max characters.
      numField.characters = chars;

      // Add the label
      group.add('statictext', undefined, label);

      // Ensure the value is within the specified range
      numField.onChange = function() {
        try {

          if (isNaN(parseFloat(numField.text))) {
            throw new Error(numField.text + ' is not a number');
          }

          var value = parseFloat(numField.text);

          if (value < minVal || value > maxVal ) {
            throw new Error('Enter a number between ' + minVal + ' and ' + maxVal);
          }

          numField.text = value.toString();

        } catch (e) {
          alertBox(functionTitle, e.message);
          numField.text = defaultValue.toString(); 
        }
      };

      return numField;

    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      throw e;
    }
  }

  
  /**
   * Displays a font search and select group.
   * @function scriptUIUtils.fontSearch
   * @param {panel} parent - The parent panel to which the font search group is added.
   * @returns {dropdown} ScriptUI dropdown.
   * @throws {Error} If missing parent parameter.
   * @example
   * var fontPanel = scriptUIUtils.fontSearch();
   * var fontName = fontPanel.selection.text;
   * textFrame.textRange.characterAttributes.textFont = app.textFonts.getByName(fontName);
   */
  function fontSearch(parent) {

    var functionID = 'fontSearch';
    var functionTitle = 'Font Search';
    var defaultFont = 'MyriadPro-Regular';

    try {
      if (typeof parent === 'undefined' || parent === null) {
        throw new Error('Missing or undefined parameter: parent');
      }

      // Add Search group
      var fontSearchGroup = parent.add('group');
          fontSearchGroup.orientation = 'row';
          fontSearchGroup.alignment = 'fill';
          fontSearchGroup.alignChildren = ['fill', 'top']; 

      // Add elements to Search group
      var fontSearchBox = fontSearchGroup.add('edittext', undefined, defaultFont);
          fontSearchBox.alignment = ['fill', 'top'];
          fontSearchBox.preferredSize = [-1, 25]; 
      
      var fontSearchBtn = fontSearchGroup.add('button', undefined, 'Search');
          fontSearchBtn.alignment = ['right', 'top'];
          fontSearchBtn.onClick = fontSearchBtnHandler;

      // Add Result group
      var fontResultGroup = parent.add('group');
          fontResultGroup.orientation = 'row';
          fontResultGroup.alignment = ['fill', 'top']; 
          fontResultGroup.alignChildren = ['fill', 'top']; 
      
      // Add dropdown list for fonts
      var fontDropdown = fontResultGroup.add('dropdownlist', undefined, []);
          fontDropdown.alignment = ['fill', 'top']; 
          fontDropdown.preferredSize.width = -1; 
          fontDropdown.preferredSize.height = 25; 
          fontDropdown.add('item', defaultFont);
          fontDropdown.selection = 0;

      // Search button click handler
      function fontSearchBtnHandler() {
        var searchFor = fontSearchBox.text.toLowerCase();
        var fonts = app.textFonts;
        var fontList = [];
    
        for (var i = 0; i < fonts.length; i++) {
          if (fonts[i].name.toLowerCase().indexOf(searchFor) !== -1) {
            fontList.push(fonts[i].name);
          }
        }
    
        if (fontList.length > 0) {
          // alertBox(functionTitle, fontList.join("\n"));
          fontDropdown.removeAll();

          for (var j = 0; j < fontList.length; j++) {
            fontDropdown.add('item', fontList[j]);
          }

          fontDropdown.selection = 0;

        } else {
          alertBox(functionTitle,'No fonts found');
          fontSearchBox.text = defaultFont;
          fontDropdown.removeAll();
          fontDropdown.add('item', defaultFont);
          fontDropdown.selection = 0;
        }
      }

      // var message = 'SUCCESS ' + functionID;
      // alert(message, functionID);
      // $.writeln(message);
      return fontDropdown;


    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      // alert(e.message, functionID);
      // $.writeln(e.message);
      throw e;
    }
  }


  // Expose Methods
  return {
    panelMargins: panelMargins,
    alertBox: alertBox,
    promptConfirm: promptConfirm,
    checkBox: checkBox,
    numberField: numberField,
    fontSearch: fontSearch
  };

})();


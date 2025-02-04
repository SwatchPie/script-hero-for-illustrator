/**
 * @file Script-Hero\library\helpers\alert-app-properties.jsx
 * @author SwatchPie.io
 * @version 1.0
 * @date 2024-08-16
 * @license 'CC BY-NC 4.0'
 * 
 * @description
 * Displays an alert with Illustrator's `Application` properties.
 * 
 * @example
 * 1. Open Illustrator.
 * 2. Use `CTRL+F12` to run this script.
 * 3. An alert with Illustrator `Application` properties is displayed. 
 */


// @include '../utilities/miscUtils.jsx'

(function alertAppProperties() {

  var functionID = 'alertAppProperties';
  var functionTitle = 'Application Properties';

  try {

    var alertInfo = {
      name: app.name,
      version: app.version,
      buildNumber: app.buildNumber,
      locale: app.locale,
      scriptingVersion: app.scriptingVersion,
      path: app.path
    };

    var alertString = '';
    for (var key in alertInfo) {
      if (alertInfo.hasOwnProperty(key)) {
        alertString += '[' + key + ']\n' + alertInfo[key] + '\n\n';
      }
    }

    alert(alertString, functionTitle);

  } catch (e) {
    e.message = 'ERROR ' + e.message;    
    alert(e.message, functionTitle);
  }

})();


/////////////////////////////////////////////////////////////

// name: Adobe Illustrator

// version: 28.6.0

// buildNumber: 7098

// locale: en_US

// scriptingVersion: 28.0

// path: /c/Program%20Files/Adobe/Adobe%20Illustrator%202024

/////////////////////////////////////////////////////////////


/**
 * @file Script-Hero\library\helpers\alert-presets-directories.jsx
 * @author SwatchPie.io
 * @version 1.0
 * @date 2024-08-16
 * @license 'CC BY-NC 4.0'
 * 
 * @description
 * Displays an alert with Illustrator's default Presets directories.
 * 
 * @example
 * 1. Open Illustrator.
 * 2. Use `CTRL+F12` to run this script.
 * 3. An alert with Illustrator Presets directories is displayed.
 *  
 * @remarks
 * - Adobe has changed directory structures over the years.
 * - This seems to have stabilized over recent versions. 
 * - This is a way to test for the currently known, default `Presets` directory.
 * - If found, this method iterates `Presets` and displays its immediate children.
 * 
 */


(function alertPresetsDirectories() {

  var functionID = 'alertPresetsDirectories';
  var functionTitle = 'Presets Directories';

  try {

    var presets = new Folder(app.path + '/Presets/' + app.locale);

    if (!presets.exists) {
      throw new Error('Could not locate the default Presets directory expected at:\n' + presets.fsName);
    }  

    var alertInfo = [];
    var contents = presets.getFiles();

    for (var i = 0; i < contents.length; i++) {
      var item = contents[i];
      alertInfo.push(item.fsName);
    }

    alert(alertInfo.join("\n\n"), functionTitle);

  } catch (e) {
    e.message = 'ERROR ' + e.message;    
    alert(e.message, functionTitle);
  }

})();


/////////////////////////////////////////////////////////////

// "C:\Program Files\Adobe\Adobe Illustrator 2024\Presets\en_US\Swatches"
// "C:\Program Files\Adobe\Adobe Illustrator 2024\Presets\en_US\Symbols"
// "C:\Program Files\Adobe\Adobe Illustrator 2024\Presets\en_US\Tools"
// "C:\Program Files\Adobe\Adobe Illustrator 2024\Presets\en_US\Workspaces"
// "C:\Program Files\Adobe\Adobe Illustrator 2024\Presets\en_US\Actions"
// "C:\Program Files\Adobe\Adobe Illustrator 2024\Presets\en_US\Brushes"
// "C:\Program Files\Adobe\Adobe Illustrator 2024\Presets\en_US\Graphic Styles"
// "C:\Program Files\Adobe\Adobe Illustrator 2024\Presets\en_US\Keyboard Shortcuts"
// "C:\Program Files\Adobe\Adobe Illustrator 2024\Presets\en_US\Save for Web Settings"
// "C:\Program Files\Adobe\Adobe Illustrator 2024\Presets\en_US\Scripts"

/////////////////////////////////////////////////////////////


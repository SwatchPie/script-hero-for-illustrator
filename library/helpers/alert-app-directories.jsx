/**
 * @file Script-Hero\library\helpers\alert-app-directories.jsx
 * @author SwatchPie.io
 * @version 1.0
 * @date 2024-08-16
 * @license 'CC BY-NC 4.0'
 * 
 * @description
 * Displays an alert with Illustrator's default Application directories.
 * 
 * @example
 * 1. Open Illustrator.
 * 2. Use `CTRL+F12` to run this script.
 * 3. An alert with Illustrator Application directories is displayed. 
 */


(function alertAppDirectories() {

  var functionID = 'alertAppDirectories';
  var functionTitle = 'Application Directories';

  try {

    var alertInfo = {
      appData: Folder.appData,
      appPackage: Folder.appPackage,
      commonFiles: Folder.commonFiles,
      current: Folder.current,
      desktop: Folder.desktop,
      fs: Folder.fs,
      myDocuments: Folder.myDocuments,
      startup: Folder.startup,
      system: Folder.system,
      temp: Folder.temp,
      trash: Folder.trash,
      userData: Folder.userData
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

// appData
// /c/ProgramData

// appPackage
// /c/Program%20Files/Adobe/Adobe%20Illustrator%202024/Support%20Files/Contents/Windows

// commonFiles
// /c/Program%20Files/Common%20Files

// current
// ~/AppData/Local/Temp/...

// desktop
// ~/Desktop

// fs
// Windows

// myDocuments
// ~/Documents

// startup
// /c/Program%20Files/Adobe/Adobe%20Illustrator%202024/Support%20Files/Contents/Windows

// system
// /c/WINDOWS/SYSTEM32

// temp
// ~/AppData/Local/Temp

// trash
// null

// userData
// ~/AppData/Roaming

/////////////////////////////////////////////////////////////


/**
 * @file Script-Hero\library\utilities\docUtils.jsx
 * @author SwatchPie.io
 * @version 1.0
 * @date 2024-06-10
 * @license 'CC BY-NC 4.0'
 * 
 * @description
 * A module with utility functions for 
 * working with document data.
 * 
 */


// @include '../../global.jsx'
// @include '../external/json2.js'
// @include './miscUtils.jsx'

var docUtils = (function() {

  // ----------------------------------------------------
  // Module Properties
  // ----------------------------------------------------

  var DEBUG = global.DEBUG.DOCUTILS;
  
  var DOC_META = global.DOC_META
  var PNG8_OPTS = global.PNG8_OPTS;
  var PNG24_OPTS = global.PNG24_OPTS;
  var JPG_OPTS = global.JPG_OPTS;
  var PDF_OPTS = global.PDF_OPTS;
  var DUPI_OPTS = global.DUPI_OPTS;

  // ----------------------------------------------------
  // General Doc Methods
  // ----------------------------------------------------

  /**
   * Gets the current active (open and frontmost) document.
   * @function docUtils.getActiveDocument
   * @returns {Document} An object representing the active document.
   * @throws {Error} If there is no active (open) document.
   * @example 
   * var doc = docUtils.getActiveDocument();
   * @snippet `var-doc`
   */
  function getActiveDocument() {

    var functionID = 'docUtils.getActiveDocument';

    try {

      if (!app.activeDocument) {
        throw new Error('No active document.');
      }

      var doc = app.activeDocument;
      
      var message = 'SUCCESS ' + functionID + '\n' + doc.name;
      if (DEBUG) alert(message, functionID);

      return doc;
  
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      throw e;
    }
  }


  /**
   * Saves the active document.
   * If the document is new and unsaved, prompts the user with a Save dialog.
   * If the document has been previously saved, silently saves. 
   * @function docUtils.saveDocument
   * @returns {void}
   * @throws {Error} If no active document.
   * @throws {Error} If the new document Save is canceled.
   * @example
   * docUtils.saveDocument(); 
   */
  function saveDocument() {

    var functionID = 'docUtils.saveDocument';
    var functionTitle = 'Save Document;'

    try {

      if (!app.activeDocument) {
        throw new Error('No active document.');
      }
      
      var doc = app.activeDocument;
      
      // Check for new, unsaved documents and display Save dialog.
      if (!doc.path || doc.path == '') {

        alert('Save document to continue.', functionTitle);
        var saveFile = File.saveDialog(functionTitle, '*.ai');

        if (!saveFile) {
          throw new Error('Save canceled. Script stopped.');
        }

        doc.saveAs(saveFile);
      }

      // Silently save existing documents.
      if (!doc.saved) {
        doc.save();
      }

      var message = 'SUCCESS ' + functionID + '\nSaved: ' + doc.name;
      if (DEBUG) alert(message, functionID);
  
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      throw e;
    }
  }
  

  /**
   * Checks for Large Canvas mode so things like
   * font and object sizes can be adjusted accordingly. 
   * @function docUtils.checkLargeCanvas
   * @returns {boolean} `true` if document is in Large Canvas mode.
   * @throws {Error} If no active document.
   * @throws {Error} If missing or undefined parameters.
   * @example
   * var doc = docUtils.getActiveDocument();
   * var fontSize = 24;
   * if (docUtils.checkLargeCanvas()) {
   *    fontSize = fontSize / 100;
   * }
   * @remarks
   * Standard canvas is:
   *    - 227 inches
   *    - 16,344 points / pixels
   * 
   * Large Canvas mode can be triggered by:
   *    - 1 large artboard - ie 1 18000x18000 board
   *    - Multiple smaller artboards - ie 6 6000x6000 boards
   * 
   * Large Canvas scaleFactor = 10. 
   * Say the user provides a font size of 24
   * and the document is in Large Canvas mode.
   * 
   * Unaltered, the result is a font that tries
   * to be 2400.
   *    - This doesn't match what the user entered or intended.
   *    - Most fonts can only scale to about 300 points.
   * 
   * The solution is to divide such numbers by 100.
   * This is true even when Large Canvas is triggered
   * by multiple artboards (which surprised me).
   * 
   */
  function checkLargeCanvas() {
  
    var functionID = 'docUtils.checkLargeCanvas';
  
    try {

      if (!app.activeDocument) {
        throw new Error('No active document.');
      }
      
      var doc = app.activeDocument;
      var isLargeCanvas = doc.scaleFactor === 10;
      
      var message = 'SUCCESS ' + functionID + '\n' + doc.name + '\nLarge Canvas: ' + isLargeCanvas;
      if (DEBUG) alert(message, functionID);

      return isLargeCanvas;
  
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      throw e;
    }
  }


  /**
   * Deletes unused panel items: 
   * Swatches, Brushes, Symbols, Graphic Styles.
   * @function docUtils.deleteUnusedPanelItems
   * @returns {void}
   * @throws {Error} If no active document.
   * @throws {Error} If actions file cannot be located.
   * @example 
   * docUtils.deleteUnusedPanelItems(); 
   * @remarks
   * Works by loading, running, then unloading
   * `/actions/delete-unused-panel-items.aia`.
   */
  function deleteUnusedPanelItems(options) {
  
    var functionID = 'docUtils.deleteUnusedPanelItems';
  
    try {

      if (typeof DUPI_OPTS !== 'object') {
        throw new Error('Missing or undefined module object: DUPI_OPTS.');
      }
      if (!app.activeDocument) {
        throw new Error('No active document.');
      }

      // Defaults
      var optionsExists = typeof options === 'object'; 
      options = optionsExists ? options : DUPI_OPTS;
            
      // Define files
      var actionsDirectory = File($.fileName).parent.parent + '/actions';
      var actionsFile = new File(actionsDirectory + '/delete-unused-panel-items.aia');
  
      // Check file exists
      if (!actionsFile.exists ) {
        throw new Error('Missing file:\n' + actionsFile.fullName);
      }
  
      // Load actions
      app.loadAction(actionsFile);
  
      // Do actions
      if (options.deleteSwatches) app.doScript('delete-unused-swatches', 'delete-unused-panel-items');
      if (options.deleteBrushes) app.doScript('delete-unused-brushes', 'delete-unused-panel-items');
      if (options.deleteStyles) app.doScript('delete-unused-graphic-styles', 'delete-unused-panel-items');
      if (options.deleteSymbols) app.doScript('delete-unused-symbols', 'delete-unused-panel-items');
  
      // Unload actions
      app.unloadAction('delete-unused-panel-items', '');
  
      var message = 'SUCCESS ' + functionID + '\nUnused panel items deleted.\n' + actionsFile.fsName;
      if (DEBUG) alert(message, functionID);
  
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      throw e;
    }
  }

  // ----------------------------------------------------
  // Document XMP Metadata
  // ----------------------------------------------------

  /**
   * Loads the XMP library if needed.
   * @function docUtils.loadXMPLibrary
   * @returns {void}
   * @throws {Error} If library fails to load.
   * @remarks
   * - External objects like libraries are NOT persistent across sessions.
   * - Call this function at the start of any method that interacts with XMP.
   * @example
   * docUtils.loadXMPLibrary();
   */
  function loadXMPLibrary() {
  
    var functionID = 'docUtils.loadXMPLibrary';
  
    try {

      if (!(ExternalObject.AdobeXMPScript instanceof ExternalObject)) {
        ExternalObject.AdobeXMPScript = new ExternalObject('lib:AdobeXMPScript');
      }

      var message = 'SUCCESS ' + functionID + '\n' + 'XMP library loaded.';
      if (DEBUG) alert(message, functionID);
  
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      throw e;
    }   
  } 


  /**
   * Sets metadata at File > File Info > Basic.
   * @function docUtils.setDocMetadata
   * @param {object} [meta=global.DOC_META] - An object with metadata.
   * @returns {void}
   * @throws {Error} If no active document.
   * @throws {Error} If missing or undefined module properties.
   * @throws {Error} If missing or undefined parameters.
   * @example
   * docUtils.setDocMetadata();
   */
  function setDocMetadata(meta) {
  
    var functionID = 'docUtils.setDocMetadata';
  
    try {

      if (!app.activeDocument) {
        throw new Error('No active document.');
      }

      if (typeof DOC_META !== 'object') {
        throw new Error('Missing or invalid module object: DOC_META.');
      }
      
      // Define properties
      var doc = app.activeDocument;

      var metaDefault = DOC_META;
      var metaExists = (typeof meta === 'object');
      meta = metaExists ? meta : metaDefault;
      
      var authors =  meta.authors;
      var copyrightStatus = meta.copyrightStatus;
      var copyrightURL = meta.copyrightURL;

      // Load the XMP library if not already loaded
      loadXMPLibrary();

      // Save the document so we have a `doc.name`
      saveDocument();

      // Documents always have an XMPString, but good to check.
      if (!doc.XMPString) {
        throw new Error('No doc.XMPString found.');
      }

      // Get the existing XMP metadata
      var xmp = new XMPMeta(doc.XMPString);

      // Set the title field to match file name.
      var docTitle = miscUtils.getFileBaseName(doc.name);
      xmp.setLocalizedText(XMPConst.NS_DC, 'title', null, 'en-US', docTitle);
      
      // Set the Author field. Note 'creator' is an array, so clear then append.
      xmp.deleteProperty(XMPConst.NS_DC, 'creator'); 

      for (var i = 0; i < authors.length; i++) {
        var author = authors[i];
        xmp.appendArrayItem(XMPConst.NS_DC, 'creator', author, 0, XMPConst.ARRAY_IS_ORDERED);
      }
      
      // Set the Copyright Status field.
      xmp.setProperty(XMPConst.NS_XMP_RIGHTS, 'Marked', copyrightStatus);
      
      // Set the Copyright Info URL field.
      if (copyrightStatus === 'True') {
        xmp.setProperty(XMPConst.NS_XMP_RIGHTS, 'WebStatement', copyrightURL);
      }

      // Apply the modified XMP metadata back to the document
      doc.XMPString = xmp.serialize();

      // Save the document for good measure
      saveDocument();

      var message = 'SUCCESS ' + functionID + '\nMetadata updated:\n' + doc.name;
      if (DEBUG) alert(message, functionID);
  
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      throw e;
    }
  }

  // ----------------------------------------------------
  // Document Export
  // ----------------------------------------------------

  /**
   * Many workflows require exporting a document with various formats, scales,
   * and quality. 
   * 
   * The default export options are objects in `global.jsx`. These must exist. 
   * You can also pass a custom 'OPTS' object using the same keys in the global objects. 
   * 
   * To keep images organized and prevent overwrites, these scripts let you: 
   * 
   * - Use a default save directory which has the export options in the directory name.
   * - Set a custom save directory by adding an optional `saveDirTail` key to the options. 
   * 
   */

  /**
   * Exports each artboard in a document as a PNG8.
   * @function docUtils.exportPNG8
   * @param {object} [options=global.PNG8_OPTS] - An object with PNG save options.
   * @returns {void}
   * @throws {Error} If missing or undefined module properties.
   * @throws {Error} If missing or undefined parameters.
   * @example
   * docUtils.exportPNG8();
   * docUtils.exportPNG8(MY_OPTS);
   */
  function exportPNG8(options) {

    var functionID = 'docUtils.exportPNG8';
  
    try {

      if (typeof PNG8_OPTS !== 'object') {
        throw new Error('Missing or undefined module object: PNG8_OPTS.');
      }
      
      // Get and save document
      var doc = getActiveDocument();
      saveDocument();

      // Set options
      var optionsExists = (typeof options === 'object'); 
      options = optionsExists ? options : PNG8_OPTS;

      var png8 = new ExportOptionsPNG8();
          png8.verticalScale = options.scale * 100; 
          png8.horizontalScale = options.scale * 100; 
          png8.transparency = options.transparency;
          png8.antiAliasing = options.antiAliasing; 
          png8.artBoardClipping = true;       
      
      // Set save directory based on options
      var saveDirPath;

      if (options.hasOwnProperty('saveDirTail')) {
        saveDirPath = doc.path + options.saveDirTail;
      } else {
        var formatStr = '/png8';
        var scaleStr = '_' + options.scale + 'x';
        var transparencyStr = '_transp-' + options.transparency;
        var antiAliasingStr = '_aa-' + options.antiAliasing;
        saveDirPath = doc.path + formatStr + scaleStr + transparencyStr + antiAliasingStr;
      }

      if (DEBUG) alert('saveDirPath\n' + saveDirPath, functionID);

      var saveDir = new Folder(saveDirPath);
      if (!saveDir.exists) saveDir.create();

      if (DEBUG) alert('saveDir\n' + saveDir.fsName, functionID);
    
      // Loop artboards
      var artboards = doc.artboards;

      for (var i = 0; i < artboards.length; i++) {

        var artboard = artboards[i];
        doc.artboards.setActiveArtboardIndex(i); 

        // Set file name
        var fileName = artboard.name + '.png';

        // Set file save path
        var savePath = saveDir + '/' + fileName;
        var saveFile = new File(savePath);
        var format = ExportType.PNG8;

        if (DEBUG) alert('saveFile\n' + saveFile.fsName);

        // Save file
        doc.exportFile(saveFile, format, png8);
      }

      var message = 'SUCCESS ' + functionID + '\nExported PNGs for:\n' + doc.path ;
      if (DEBUG) alert(message, functionID);
  
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      throw e;
    }
  }


  /**
   * Exports each artboard in a document as a PNG24.
   * @function docUtils.exportPNG24
   * @param {object} [options=global.PNG24_OPTS] - An object with PNG save options.
   * @returns {void}
   * @throws {Error} If missing or undefined module properties.
   * @throws {Error} If missing or undefined parameters.
   * @example
   * docUtils.exportPNG24();
   * docUtils.exportPNG24(MY_OPTS);
   */
    function exportPNG24(options) {

      var functionID = 'docUtils.exportPNG24';

      try {
  
        if (typeof PNG24_OPTS !== 'object') {
          throw new Error('Missing or undefined module object: PNG24_OPTS.');
        }
        
        // Get and save document
        var doc = getActiveDocument();
        saveDocument();
  
        // Set options
        var optionsExists = (typeof options === 'object'); 
        options = optionsExists ? options : PNG24_OPTS;
  
        var png24 = new ExportOptionsPNG24();
            png24.verticalScale = options.scale * 100; 
            png24.horizontalScale = options.scale * 100; 
            png24.transparency = options.transparency;
            png24.antiAliasing = options.antiAliasing; 
            png24.artBoardClipping = true;       
        
        // Set save directory based on options
        var saveDirPath;
  
        if (options.hasOwnProperty('saveDirTail')) {
          saveDirPath = doc.path + options.saveDirTail;
        } else {
          var formatStr = '/png24';
          var scaleStr = '_' + options.scale + 'x';
          var transparencyStr = '_transp-' + options.transparency;
          var antiAliasingStr = '_aa-' + options.antiAliasing;
          saveDirPath = doc.path + formatStr + scaleStr + transparencyStr + antiAliasingStr;
        }
  
        if (DEBUG) alert('saveDirPath\n' + saveDirPath, functionID);
  
        var saveDir = new Folder(saveDirPath);
        if (!saveDir.exists) saveDir.create();
  
        if (DEBUG) alert('saveDir\n' + saveDir.fsName, functionID);
      
        // Loop artboards
        var artboards = doc.artboards;
  
        for (var i = 0; i < artboards.length; i++) {
  
          var artboard = artboards[i];
          doc.artboards.setActiveArtboardIndex(i); 
  
          // Set file name
          var fileName = artboard.name + '.png';
  
          // Set file save path
          var savePath = saveDir + '/' + fileName;
          var saveFile = new File(savePath);
          var format = ExportType.PNG24;
  
          if (DEBUG) alert('saveFile\n' + saveFile.fsName);
  
          // Save file
          doc.exportFile(saveFile, format, png24);
        }
  
        var message = 'SUCCESS ' + functionID + '\nExported PNGs for:\n' + doc.path ;
        if (DEBUG) alert(message, functionID);
    
      } catch (e) {
        e.message = 'ERROR ' + functionID + '\n' + e.message;
        throw e;
      }
    }


  /**
   * Exports each artboard in a document as a JPG.
   * @function docUtils.exportJPG
   * @param {object} [opts=global.JPG_OPTS] - An object with JPG save options.
   * @returns {void}
   * @throws {Error} If missing or undefined module properties.
   * @throws {Error} If missing or undefined parameters.
   * @example
   * // Use the global opts
   * docUtils.exportJPG();
   */
  function exportJPG(options) {

    var functionID = 'docUtils.exportJPG';
  
    try {

      if (typeof JPG_OPTS !== 'object') {
        throw new Error('Missing or undefined module object: JPG_OPTS.');
      }
      
      // Get and save document
      var doc = getActiveDocument();
      saveDocument();

      // Set options
      var optionsExists = (typeof options === 'object'); 
      options = optionsExists ? options : JPG_OPTS;

      var jpeg = new ExportOptionsJPEG();
          jpeg.verticalScale = options.scale * 100;
          jpeg.horizontalScale = options.scale * 100;
          jpeg.qualitySetting = Math.max(0, Math.min(options.quality, 100)); 
          jpeg.antiAliasing = options.antiAliasing;
          jpeg.artBoardClipping = true;    
      
      // Set save directory based on options
      var saveDirPath;

      if (options.hasOwnProperty('saveDirTail')) {
        saveDirPath = doc.path + options.saveDirTail;
      } else {
        var formatStr = '/png24';
        var scaleStr = '_' + options.scale + 'x';
        var transparencyStr = '_transp-' + options.transparency;
        var antiAliasingStr = '_aa-' + options.antiAliasing;
        saveDirPath = doc.path + formatStr + scaleStr + transparencyStr + antiAliasingStr;
      }

      if (DEBUG) alert('saveDirPath\n' + saveDirPath, functionID);

      var saveDir = new Folder(saveDirPath);
      if (!saveDir.exists) saveDir.create();

      if (DEBUG) alert('saveDir\n' + saveDir.fsName, functionID);
    
      // Loop artboards
      var artboards = doc.artboards;

      for (var i = 0; i < artboards.length; i++) {

        var artboard = artboards[i];
        doc.artboards.setActiveArtboardIndex(i); 

        // Set file name
        var fileName = artboard.name + '.jpg';

        // Set file save path
        var savePath = saveDir + '/' + fileName;
        var saveFile = new File(savePath);
        var format = ExportType.JPEG;

        if (DEBUG) alert('saveFile\n' + saveFile.fsName);

        // Save file
        doc.exportFile(saveFile, format, jpeg);
      }

      var message = 'SUCCESS ' + functionID + '\nExported JPGs for:\n' + doc.path ;
      if (DEBUG) alert(message, functionID);
  
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      throw e;
    }
  }


  /**
   * Converts a PDF preset like `'[Smallest File Size]'`
   * to `'_smallest-file-size'` for use in file names.
   * @function docUtils.prepPDFPresetString
   * @param {string} preset - The preset to process.
   * @returns {string} The prepared string.
   * @throws {Error} If missing or undefined parameters.
   * @example 
   * var preset = '[Smallest File Size]';
   * var presetStr = docUtils.prepPDFPresetString(preset);
   */
  function prepPDFPresetString(preset) {
  
    var functionID = 'docUtils.prepPDFPresetString';
  
    try {

      if (typeof preset !== 'string') {
        throw new Error('Parameter must be a string: preset.');
      }
      
      // Remove square brackets if they exist
      var cleanName = preset.replace(/[\[\]]/g, '');

      // Split the name into words
      var words = cleanName.split(' ');

      // Convert each word to lowercase
      for (var i = 0; i < words.length; i++) {
        words[i] = words[i].toLowerCase();
      }

      // Return the formatted string
      var presetStr = '_' + words.join('-');
  
      var message = 'SUCCESS ' + functionID + '\nPDF preset string:\n' + presetStr;
      if (DEBUG) alert(message, functionID);

      return presetStr;
  
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      throw e;
    }
  }


  /**
   * Exports a document as a PDF. 
   * @function docUtils.exportPDF
   * @param {object} [options=global.PDF_OPTS] - An object with PDF save options.
   * @returns {void}
   * @throws {Error} If missing or module properties.
   * @throws {Error} If missing or undefined parameters.
   * @example
   * // Use the global opts
   * docUtils.exportPDF();
   * $.sleep(1000);
   * @remarks
   * Say you have a `processPDFs()` that runs `exportPDF`
   * multiple times with unique options.
   * 
   * This workflow presents a hurdle because PDFs are created using `saveAs()`.
   * With `saveAs()`, Illustrator closes the original `doc.ai`,
   * replaces it with the new `doc.pdf`, and makes it the `app.activeDocument` 
   *
   * It would be better if the original `doc.ai` remained open and active 
   * as it does with `exportFile()` or 'File > Save a Copy'. 
   * 
   * Instead, we have to do some weird stuff that amounts to the following:
   * 1. Get and store the original active document.
   * 2. Create a new `doc.pdf`. 
   * 3. Optionally close the new `doc.pdf`. Comment this out if you are on a slower machine.
   * 4. Reopen the original `doc.ai` and make it active. 
   * 5. Add some amount of `$.sleep()` after each run to give `doc.ai` time to open. 
   */
  function exportPDF(options) {

    var functionID = 'docUtils.exportPDF';

    try {

      if (typeof PDF_OPTS !== 'object') {
        throw new Error('Missing or undefined module object: JPG_OPTS.');
      }
      
      // Get and save document
      var doc = getActiveDocument();
      saveDocument();

      // Capture original document
      var originalDoc = new File(doc.fullName);

      // Set options
      var optsExists = (typeof opts === 'object'); 
      options = optsExists ? options : PDF_OPTS;

      var pdf = new PDFSaveOptions();
          pdf.preset = options.preset;
          pdf.preserveEditability = options.preserveEditability;
          pdf.viewAfterSaving = false;
          pdf.generateThumbnails = true; 

      // Set save directory based on options
      var saveDirPath;

      if (options.hasOwnProperty('saveDirTail')) {
        saveDirPath = doc.path + options.saveDirTail;
      } else {
        var formatStr = '/pdf';
        var presetStr = prepPDFPresetString(options.preset);
        var editableStr = options.preserveEditability ? '_editable' : '_flat'; 
        var saveDirPath = doc.path + formatStr + presetStr + editableStr;
      }

      if (DEBUG) alert('saveDirPath\n' + saveDirPath, functionID);   

      var saveDir = new Folder(saveDirPath);
      if (!saveDir.exists) saveDir.create();

      if (DEBUG) alert('saveDir\n' + saveDir.fsName, functionID);

      // Set file name
      var docBaseName = miscUtils.getFileBaseName(doc.name);
      var fileName = docBaseName + '.pdf';

      // Set file save path
      var savePath = saveDir + '/' + fileName;
      var saveFile = new File(savePath);

      // Save the document as a PDF
      doc.saveAs(saveFile, pdf);

      // Close the PDF - Comment out on slower machines
      // app.activeDocument.close(SaveOptions.DONOTSAVECHANGES); 

      // Reopen the original document and make it active
      var reopenedDoc = app.open(originalDoc); 
          reopenedDoc.activate();

      var message = 'SUCCESS ' + functionID + '\nExported PDF:\n' + saveFile.fsName;
      if (DEBUG) alert(message, functionID);

    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      throw e;
    }
  }

  // ----------------------------------------------------
  // Expose Methods
  // ----------------------------------------------------
  
  return {
    getActiveDocument: getActiveDocument,
    saveDocument: saveDocument,
    checkLargeCanvas: checkLargeCanvas,
    deleteUnusedPanelItems: deleteUnusedPanelItems,
    // Document XMP Metadata
    loadXMPLibrary: loadXMPLibrary,
    setDocMetadata: setDocMetadata,
    // File Export
    exportPNG8: exportPNG8,
    exportPNG24: exportPNG24,
    exportJPG: exportJPG,
    prepPDFPresetString: prepPDFPresetString,
    exportPDF: exportPDF,
  };

})();


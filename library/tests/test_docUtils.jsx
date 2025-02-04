/**
 * @file Script-Hero\library\tests\test_docUtils.jsx
 * @author SwatchPie.io
 * @version 1.0
 * @date 2024-11-04
 * @license 'CC BY-NC 4.0'
 * 
 * @testFile Script-Hero\test-files\docUtils_*
 * 
 * @description
 * Manual tests for the docUtils module.
 * 
 * Each `test_` function models a utility's
 * use in a larger script. 
 * 
 * Scroll to bottom to run tests.
 * 
 */


// @include '../utilities/docUtils.jsx'
// @include '../utilities/miscUtils.jsx'

var test_docUtils = (function () {

  function test_getActiveDocument() {
  
    var functionID = 'test_getActiveDocument';
  
    try {
  
      var doc = docUtils.getActiveDocument();

    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      alert(e.message, functionID);
    }
  }

  function test_saveDocument() {
  
    var functionID = 'test_saveDocument';
  
    try {

      docUtils.saveDocument();
  
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      alert(e.message, functionID);
    }
  }

  function test_checkLargeCanvas() {
  
    var functionID = 'test_checkLargeCanvas';
  
    try {

      var isLargeCanvas = docUtils.checkLargeCanvas();
  
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      alert(e.message, functionID);
    }
  }
  
  function test_deleteUnusedPanelItems() {
  
    var functionID = 'test_deleteUnusedPanelItems';
  
    try {
  
      docUtils.deleteUnusedPanelItems();
  
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      alert(e.message, functionID);
    }
  }

  // Document XMP Metadata

  function test_loadXMPLibrary() {
  
    var functionID = 'test_loadXMPLibrary';
  
    try {
  
      docUtils.loadXMPLibrary();
      
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      alert(e.message, functionID);
    }
  }

  function test_setDocMetadata() {
  
    var functionID = 'test_setDocMetadata';
  
    try {
  
      docUtils.setDocMetadata();

    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      alert(e.message, functionID);
    }
  }

  // Document Export

  function test_exportPNG8() {
  
    var functionID = 'test_exportPNG8';
  
    try {
      
      var opts_2 = {
        scale: 2, 
        transparency: true, 
        antiAliasing: true, 
      };

      var opts_3 = {
        scale: 2, 
        transparency: false, 
        antiAliasing: false, 
      };

      alert ('Starting Test 1 of 3', functionID);
      docUtils.exportPNG8();

      alert ('Starting Test 2 of 3', functionID);
      docUtils.exportPNG8(opts_2);

      alert ('Starting Test 3 of 3', functionID);
      docUtils.exportPNG8(opts_3);

      alert ('Tests Complete', functionID);

    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      alert(e.message, functionID);
    }
  }

  function test_exportPNG24() {
  
    var functionID = 'test_exportPNG24';
  
    try {
      
      var opts_2 = {
        scale: 2, 
        transparency: true, 
        antiAliasing: true, 
      };

      var opts_3 = {
        scale: 2, 
        transparency: false, 
        antiAliasing: false, 
      };

      alert ('Starting Test 1 of 3', functionID);
      docUtils.exportPNG24();

      alert ('Starting Test 2 of 3', functionID);
      docUtils.exportPNG24(opts_2);

      alert ('Starting Test 3 of 3', functionID);
      docUtils.exportPNG24(opts_3);

      alert ('Tests Complete', functionID);

    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      alert(e.message, functionID);
    }
  }

  function test_exportJPG() {
  
    var functionID = 'test_exportJPG';
  
    try {

      var opts_2 = {
        scale: 1, 
        quality: 70, 
        antiAliasing: true, 
      };

      var opts_3 = {
        scale: 2, 
        quality: 100, 
        antiAliasing: true, 
      };

      var opts_4 = {
        scale: 2, 
        quality: 100, 
        antiAliasing: false, 
      };
      
      alert('Starting Test 1 of 4', functionID);
      docUtils.exportJPG();

      alert('Starting Test 2 of 4');
      docUtils.exportJPG(opts_2);

      alert('Starting Test 3 of 4')
      docUtils.exportJPG(opts_3);

      alert('Starting Test 4 of 4')
      docUtils.exportJPG(opts_4);

      alert('Tests Complete', functionID);

    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      alert(e.message, functionID);
    }
  }

  function test_prepPDFPresetString() {
  
    var functionID = 'test_prepPDFPresetString';
  
    try {
  
      var pre1 = docUtils.prepPDFPresetString('[Illustrator Default]');
      var pre2 = docUtils.prepPDFPresetString('[High Quality Print]');
      var pre3 = docUtils.prepPDFPresetString('[Press Quality]');
      var pre4 = docUtils.prepPDFPresetString('[Smallest File Size]');
  
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      alert(e.message, functionID);
    }
  }

  function test_exportPDF() {
  
    var functionID = 'test_exportPDF';
  
    try {

      var opts_2 = {
        preset: '[High Quality Print]',
        preserveEditability: true, 
      };

      var opts_3 = {
        preset: '[Press Quality]',
        preserveEditability: false, 
      };

      var opts_4 = {
        preset: '[Smallest File Size]', 
        preserveEditability: true, 
      };
    
      alert('Starting Test 1 of 4', functionID);
      docUtils.exportPDF();
      $.sleep(1000);

      alert('Starting Test 2 of 4');
      $.sleep(1000);
      docUtils.exportPDF(opts_2);

      alert('Starting Test 3 of 4');
      $.sleep(1000);
      docUtils.exportPDF(opts_3);

      alert('Starting Test 4 of 4')
      $.sleep(1000);
      docUtils.exportPDF(opts_4);

      alert('Tests Complete', functionID);
  
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      alert(e.message, functionID);
    }
  }

  // Expose Methods
  return {
    test_getActiveDocument: test_getActiveDocument,
    test_saveDocument: test_saveDocument,
    test_checkLargeCanvas: test_checkLargeCanvas,
    test_deleteUnusedPanelItems: test_deleteUnusedPanelItems,
    // Document XMP Metadata
    test_loadXMPLibrary: test_loadXMPLibrary,
    test_setDocMetadata: test_setDocMetadata,
    // Document Export
    test_exportPNG8: test_exportPNG8,
    test_exportPNG24: test_exportPNG24,
    test_exportJPG: test_exportJPG,
    test_prepPDFPresetString: test_prepPDFPresetString,
    test_exportPDF: test_exportPDF
  };
  
})();


/*
 * Run Tests
 * 
 * 1. Uncomment a single test.
 * 2. Create one of the given scenarios.
 * 3. Run this script with Ctrl+F12. 
 * 4. See a SUCCESS or ERROR alert as appropriate.
 * 5. Repeat for each scenario. 
 */

/////////////////////////////////////////////////////////////

// test_docUtils.test_getActiveDocument();

// Scenario: No open documents.
// Pass: ERROR alert with propagated error.

// Scenario: At least one open document.
// Pass: SUCCESS alert

/////////////////////////////////////////////////////////////

// test_docUtils.test_saveDocument();

// Scenario: A new, unsaved document.
// Pass: User is prompted with the 'Save' dialog.

// Scenario: An existing document with unsaved changes.
// Pass: Document is silently saved. 

/////////////////////////////////////////////////////////////

// test_docUtils.test_checkLargeCanvas();

// Scenario: A document with 1 small artboard.
// Scenario: A document with 1 large artboard.
// Scenario: A document with multiple artboards.
// Pass: Alert showing correct `isLargeCanvas` bool.

/////////////////////////////////////////////////////////////

// test_docUtils.test_deleteUnusedPanelItems();

// Scenario: An open document with unused panel items. 
// Pass: Unused items removed from Swatches, Brushes,
//       Graphic Styles, and Symbols panels. 

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

// test_docUtils.test_loadXMPLibrary()

// Scenario: An open document.
// Pass: Alert confirming library has loaded.

/////////////////////////////////////////////////////////////

// test_docUtils.test_setDocMetadata();

// Scenario: global.jsx > DOC_META set.
//           An open document. 
// Pass: File > File Info > Basic shows updated meta data.

// Try on saved and unsaved documents.
// Try on documents with and without existing File > Info. 

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

// test_docUtils.test_exportPNG8();
// test_docUtils.test_exportPNG24();
// test_docUtils.test_exportJPG();

// Scenario: An open document with multiple artboards.
// Pass: PNG files are saved along side the document 
//       in folders named for the save options used.

/////////////////////////////////////////////////////////////

// test_docUtils.test_prepPDFPresetString();

// Scenario: Illustrator is running.
// Pass: Alert with PDF preset converted to a string for file names.

// test_docUtils.test_exportPDF();

// Scenario: An open document with multiple artboards.
// Pass: PDF files are saved along side the document 
//       in folders named for the save options used.

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////


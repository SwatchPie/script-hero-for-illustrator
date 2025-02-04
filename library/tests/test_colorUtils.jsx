/**
 * @file Script-Hero\library\tests\test_colorUtils.jsx
 * @author SwatchPie.io
 * @version 1.0
 * @date 2024-11-19
 * @license 'CC BY-NC 4.0'

 * @description
 * Manual tests for the colorUtils module.
 * 
 * Each `test_` function models a utility's
 * use in a larger script.
 * 
 * Scroll to bottom to run tests.
 * 
 */


// @include '../utilities/colorUtils.jsx'

var test_colorUtils = (function() {

  // Value Checks

  function test_checkValuesCMYK() {
  
    var functionID = 'test_checkValuesCMYK';
  
    try {
  
      var success = colorUtils.checkValuesCMYK(40,20,0,10);
      var err = colorUtils.checkValuesCMYK(40,-20,0,10);
  
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      alert(e.message, functionID);
    }
  }

  function test_checkValuesRGB() {
  
    var functionID = 'test_checkValuesRGB';
  
    try {
  
      var success = colorUtils.checkValuesRGB(200, 10, 40);
      var err = colorUtils.checkValuesRGB(200, 10, -40); 
  
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      alert(e.message, functionID);
    }
  }
  
  function test_checkValuesLab() {
  
    var functionID = 'test_checkValuesLab';
  
    try {
  
      var success = colorUtils.checkValuesLab(50, -10, 100);
      var err = colorUtils.checkValuesLab(50, -10, -140); 
  
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      alert(e.message, functionID);
    }
  }

  // Process Colors

  function test_makeColorCMYK() {
  
    var functionID = 'test_makeColorCMYK';
  
    try {
  
      var result = colorUtils.makeColorCMYK(100,50,0,0);

    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      alert(e.message, functionID);
    }
  }

  function test_makeColorGray() {
  
    var functionID = 'test_makeColorGray';
  
    try {
  
      var result = colorUtils.makeColorGray(30);
  
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      alert(e.message, functionID);
    }
  }

  function test_makeColorLab() {
  
    var functionID = 'test_makeColorLab';
  
    try {
  
      var result = colorUtils.makeColorLab(40, -10, 30);
  
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      alert(e.message, functionID);
    }
  }

  function test_makeColorRGB() {
  
    var functionID = 'test_makeColorRGB';
  
    try {
  
      var result = colorUtils.makeColorRGB(0, 200, 160);
  
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      alert(e.message, functionID);
    }
  }

  // Spot Colors

  function test_makeSpotCMYK() {
  
    var functionID = 'test_makeSpotCMYK';
  
    try {
  
      var result = colorUtils.makeSpotCMYK('Test CMYK Spot',100,50,0,0);
  
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      alert(e.message, functionID);
    }
  }

  function test_makeSpotLab() {
  
    var functionID = 'test_makeSpotLab';
  
    try {
  
      var result = colorUtils.makeSpotLab('Test Spot Lab', 40, 71, 22);
  
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      alert(e.message, functionID);
    }
  }

  function test_makeSpotRGB() {
  
    var functionID = 'test_makeSpotRGB';
  
    try {
  
      var result = colorUtils.makeSpotRGB('Test Spot RGB', 117, 204, 66);
  
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      alert(e.message, functionID);
    }
  }

  // Color Conversion

  function test_getColorSourceComps() {
  
    var functionID = 'test_getColorSourceComps';
  
    try {

      if (app.activeDocument.swatches.getSelected().length === 0){
        throw new Error('No selected swatches.');
      }
        
      var swatches = app.activeDocument.swatches.getSelected();
      
      for (var i = 0; i < swatches.length; i++) {
        var swatch = swatches[i];
        var swatchColor = swatch.color;
        var swatchSourceComps = colorUtils.getColorSourceComps(swatchColor);
      }
  
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      alert(e.message, functionID);
    }
  }

  function test_convertColorToCMYK() {
  
    var functionID = 'test_convertColorToCMYK';
  
    try {
  
      if (app.activeDocument.swatches.getSelected().length === 0){
        throw new Error('No selected swatches.');
      }

      var swatches = app.activeDocument.swatches.getSelected();
      
      for (var i = 0; i < swatches.length; i++) {
        var swatch = swatches[i];
        var swatchColor = swatch.color;

        var source = colorUtils.getColorSourceComps(swatchColor);
        var sourceSpace = source.sourceSpace;
        var sourceComps = source.sourceComps;

        var convertedColor = colorUtils.convertColorToCMYK(sourceSpace, sourceComps);
      }
  
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      alert(e.message, functionID);
    }
  }

  function test_convertColorToGray() {
  
    var functionID = 'test_convertColorToGray';
  
    try {
  
      if (app.activeDocument.swatches.getSelected().length === 0){
        throw new Error('No selected swatches.');
      }

      var swatches = app.activeDocument.swatches.getSelected();
      
      for (var i = 0; i < swatches.length; i++) {
        var swatch = swatches[i];
        var swatchColor = swatch.color;

        var source = colorUtils.getColorSourceComps(swatchColor);
        var sourceSpace = source.sourceSpace;
        var sourceComps = source.sourceComps;

        var convertedColor = colorUtils.convertColorToGray(sourceSpace, sourceComps);
      } 
  
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      alert(e.message, functionID);
    }
  }

  function test_convertColorToLab() {
  
    var functionID = 'test_convertColorToLab';
  
    try {
  
      if (app.activeDocument.swatches.getSelected().length === 0){
        throw new Error('No selected swatches.');
      }

      var swatches = app.activeDocument.swatches.getSelected();
      
      for (var i = 0; i < swatches.length; i++) {
        var swatch = swatches[i];
        var swatchColor = swatch.color;

        var source = colorUtils.getColorSourceComps(swatchColor);
        var sourceSpace = source.sourceSpace;
        var sourceComps = source.sourceComps;

        var convertedColor = colorUtils.convertColorToLab(sourceSpace, sourceComps);
      }  
  
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      alert(e.message, functionID);
    }
  }

  function test_convertColorToRGB() {
  
    var functionID = 'test_convertColorToRGB';
  
    try {
  
      if (app.activeDocument.swatches.getSelected().length === 0){
        throw new Error('No selected swatches.');
      }

      var swatches = app.activeDocument.swatches.getSelected();
      
      for (var i = 0; i < swatches.length; i++) {
        var swatch = swatches[i];
        var swatchColor = swatch.color;

        var source = colorUtils.getColorSourceComps(swatchColor);
        var sourceSpace = source.sourceSpace;
        var sourceComps = source.sourceComps;

        var convertedColor = colorUtils.convertColorToRGB(sourceSpace, sourceComps);
      }  
  
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      alert(e.message, functionID);
    }
  }

  function test_convertColorToHex() {
  
    var functionID = 'test_convertColorToHex';
  
    try {
  
      if (app.activeDocument.swatches.getSelected().length === 0){
        throw new Error('No selected swatches.');
      }

      var swatches = app.activeDocument.swatches.getSelected();
      
      for (var i = 0; i < swatches.length; i++) {
        var swatch = swatches[i];
        var swatchColor = swatch.color;

        var source = colorUtils.getColorSourceComps(swatchColor);
        var sourceSpace = source.sourceSpace;
        var sourceComps = source.sourceComps;

        var convertedColor = colorUtils.convertColorToHex(sourceSpace, sourceComps);
      } 
  
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      alert(e.message, functionID);
    }
  }

  // Expose Methods
  return {
    // Value Checks
    test_checkValuesCMYK: test_checkValuesCMYK,
    test_checkValuesRGB: test_checkValuesRGB,
    test_checkValuesLab: test_checkValuesLab,
    // Process Colors
    test_makeColorCMYK: test_makeColorCMYK,
    test_makeColorGray: test_makeColorGray,
    test_makeColorLab: test_makeColorLab,
    test_makeColorRGB: test_makeColorRGB,
    // Spot Colors
    test_makeSpotCMYK: test_makeSpotCMYK,
    test_makeSpotLab: test_makeSpotLab,
    test_makeSpotRGB: test_makeSpotRGB,
    // Color Conversion
    test_getColorSourceComps: test_getColorSourceComps,
    test_convertColorToCMYK: test_convertColorToCMYK,
    test_convertColorToGray: test_convertColorToGray,
    test_convertColorToLab: test_convertColorToLab,
    test_convertColorToRGB: test_convertColorToRGB,
    test_convertColorToHex: test_convertColorToHex
  };

})();


/**
 * Run Tests
 * 
 *   1. Uncomment a single test.
 *   2. Create one of the given scenarios.
 *   3. Run this script with CTRL+F12.
 *   4. See a SUCCESS or ERROR alert as appropriate.
 *   5. Repeat for each scenario.
 */

/////////////////////////////////////////////////////////////

test_colorUtils.test_checkValuesCMYK();
// test_colorUtils.test_checkValuesRGB();
// test_colorUtils.test_checkValuesLab();

// Scenario: Illustrator is running
// Pass: A SUCCESS and ERROR alert for each test. 

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

// test_colorUtils.test_makeColorCMYK();
// test_colorUtils.test_makeColorGray();
// test_colorUtils.test_makeColorLab();
// test_colorUtils.test_makeColorRGB();

// Scenario: Illustrator is running
// Pass: 2 SUCCESS alerts for each test. 

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

// test_colorUtils.test_makeSpotCMYK();
// test_colorUtils.test_makeSpotLab();
// test_colorUtils.test_makeSpotRGB();

// Scenario: An open document.
// Pass: A series 4 SUCCESS alerts for each test.
//       3 new global swatches in the UI.
// Pass: Repeat test. Spot name should exist,
//       and no new swatches should be created. 

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

// test_colorUtils.test_getColorSourceComps();

// Scenario: Selected swatches. A mix of process and spot colors.
// Pass: SUCCESS alert for each swatch.

/////////////////////////////////////////////////////////////

// test_colorUtils.test_convertColorToCMYK();
// test_colorUtils.test_convertColorToGray();
// test_colorUtils.test_convertColorToLab();
// test_colorUtils.test_convertColorToRGB();
// test_colorUtils.test_convertColorToHex();

// Scenario: Selected swatches. A mix of process and spot colors.
// Pass: A series of SUCCESS alerts for each swatch.

// Try these tests in both RGB and CMYK Document Color Mode.

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////


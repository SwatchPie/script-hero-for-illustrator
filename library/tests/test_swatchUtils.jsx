/**
 * @file Script-Hero\library\tests\test_swatchUtils.jsx
 * @author SwatchPie.io
 * @version 1.0
 * @date 2024-06-10
 * @license 'CC BY-NC 4.0'
 * 
 * @description
 * Manual tests for the swatchUtils module.
 * 
 * Each `test_` function models a utility's
 * use in a larger script. 
 * 
 * Scroll to bottom to run tests.
 * 
 */


// @include '../utilities/docUtils.jsx'
// @include '../utilities/colorUtils.jsx'
// @include '../utilities/swatchUtils.jsx'

var test_swatchUtils = (function () {

  // Swatch Groups

  function test_checkSwatchGroupExists() {
  
    var functionID = 'test_checkSwatchGroupExists';

    try {

      var oneExists = swatchUtils.checkSwatchGroupExists('Group One');
      var twoExists = swatchUtils.checkSwatchGroupExists('Group Two');  

      // var message = 'SUCCESS ' +  functionID + '\n';
      // alert(message, functionID);
    
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      alert(e.message, functionID);
    }
  }

  function test_makeGetSwatchGroup() {

    var functionID = 'test_makeGetSwatchGroup';

    try {

      var groupOne = swatchUtils.makeGetSwatchGroup('Group One');
      var groupTwo = swatchUtils.makeGetSwatchGroup('Group Two');
      var groupThree = swatchUtils.makeGetSwatchGroup('Group Three');  

      // var message = 'SUCCESS ' +  functionID + '\n';
      // alert(message, functionID);
    
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      alert(e.message, functionID);
    }
  }

  function test_deleteSwatchGroup() {
  
    var functionID = 'test_deleteSwatchGroup';
  
    try {
  
      swatchUtils.deleteSwatchGroup('Group One');
      swatchUtils.deleteSwatchGroup('Group Two');
  
      // var message = 'SUCCESS ' + functionID + '\n';
      // alert(message, functionID);
  
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      alert(e.message, functionID);
    }
  }
  
  function test_deleteEmptySwatchGroups() {
  
    var functionID = 'test_deleteEmptySwatchGroups';
  
    try {
  
      swatchUtils.deleteEmptySwatchGroups();
  
      // var message = 'SUCCESS ' + functionID + '\n';
      // alert(message, functionID);
  
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      alert(e.message, functionID);
    }
  }

  // Swatches

  function test_getSelectedSwatches() {
  
    var functionID = 'test_getSelectedSwatches';

    try {

      var swatches = swatchUtils.getSelectedSwatches();
    
      // var message = 'SUCCESS ' +  functionID + '\n';
      // alert(message, functionID);
    
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      alert(e.message, functionID);
    }
  }

  function test_checkDefaultSwatch() {
  
    var functionID = 'test_checkDefaultSwatch';

    try {

      var swatches = app.activeDocument.swatches.getSelected();
      
      for (var i = 0; i < swatches.length; i++) {
        var swatch = swatches[i];
        var isDefault = swatchUtils.checkDefaultSwatch(swatch);
      }    

      // var message = 'SUCCESS ' +  functionID + '\n';
      // alert(message, functionID);
    
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      alert(e.message, functionID);
    }
  }

  function test_addSwatchToGroup() {
  
    var functionID = 'test_addSwatchToGroup';
  
    try {

      var swatch = app.activeDocument.swatches[2];
      swatchUtils.addSwatchToGroup(swatch, 'Group One');
  
      // var message = 'SUCCESS ' + functionID + '\n';
      // alert(message, functionID);
  
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      alert(e.message, functionID);
    }
  }

  function test_deleteAllSwatches() {

    var functionID = 'test_deleteAllSwatches';

    try {

      swatchUtils.deleteAllSwatches();
    
      // var message = 'SUCCESS ' +  functionID + '\n';
      // alert(message, functionID);
    
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      alert(e.message, functionID);
    }
  }

  function test_randomizeSwatchIndexes() {
  
    var functionID = 'test_randomizeSwatchIndexes';
  
    try {
  
      swatchUtils.randomizeSwatchIndexes(10, 10);
      swatchUtils.randomizeSwatchIndexes(10, 20);
      swatchUtils.randomizeSwatchIndexes(20, 4);
  
      // var message = 'SUCCESS ' + functionID + '\n';
      // alert(message, functionID);
  
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      alert(e.message, functionID);
    }
  }


  // Process Colors

  function test_makeSwatchCMYK() {

    var functionID = 'test_makeSwatchCMYK';

    try {

      swatchUtils.makeSwatchCMYK('CMYK 2.5R',0,100,75,0,'CMYK Process');
      swatchUtils.makeSwatchCMYK('CMYK 5R',0,100,100,0,'CMYK Process');
      swatchUtils.makeSwatchCMYK('CMYK 7.5R',0,87.5,100,0,'CMYK Process');
      swatchUtils.makeSwatchCMYK('CMYK 10R',0,75,100,0,'CMYK Process'); 

      // var message = 'SUCCESS ' +  functionID + '\n';
      // alert(message, functionID);
    
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      alert(e.message, functionID);
    }
  }
  
  function test_makeSwatchGray() {

    var functionID = 'test_makeSwatchGray';
  
    try {

      swatchUtils.makeSwatchGray('Gray 60',60,'Gray Color');
      swatchUtils.makeSwatchGray('Gray 50',50,'Gray Color');
      swatchUtils.makeSwatchGray('Gray 40',40,'Gray Color');
      swatchUtils.makeSwatchGray('Gray 30',30,'Gray Color');
    
      // var message = 'SUCCESS ' +  functionID + '\n';
      // alert(message, functionID);
    
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      alert(e.message, functionID);
    }
    
  }

  function test_makeSwatchLab() {

    var functionID = 'test_makeSwatchLab';
  
    try {

      swatchUtils.makeSwatchLab('Lab GY',100,-60,127,'Lab Process');
      swatchUtils.makeSwatchLab('Lab G',100,-128,127,'Lab Process');
      swatchUtils.makeSwatchLab('Lab BG',100,-128,40,'Lab Process');
      swatchUtils.makeSwatchLab('Lab B',0,-128,-128,'Lab Process');
    
      // var message = 'SUCCESS ' +  functionID + '\n';
      // alert(message, functionID);
    
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      alert(e.message, functionID);
    }
    
  }

  function test_makeSwatchRGB() {

    var functionID = 'test_makeSwatchRGB';

    try {

      swatchUtils.makeSwatchRGB('RGB 2.5YR',255,96,0,'RGB Process');
      swatchUtils.makeSwatchRGB('RGB 5YR',255,128,0,'RGB Process');
      swatchUtils.makeSwatchRGB('RGB 7.5YR',255,160,0,'RGB Process');
      swatchUtils.makeSwatchRGB('RGB 10YR',255,192,0,'RGB Process');   

      // var message = 'SUCCESS ' +  functionID + '\n';
      // alert(message, functionID);
    
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      alert(e.message, functionID);
    }
  }

  // Spot Colors

  function test_makeSwatchSpotCMYK() {

    var functionID = 'test_makeSwatchSpotCMYK';

    try {

      swatchUtils.makeSwatchSpotCMYK('CMYK Spot 5G',100,0,100,0,'CMYK Spots');
      swatchUtils.makeSwatchSpotCMYK('CMYK Spot 5BG',100,0,0,0,'CMYK Spots');
      swatchUtils.makeSwatchSpotCMYK('CMYK Spot 5B',100,50,0,0,'CMYK Spots');
      swatchUtils.makeSwatchSpotCMYK('CMYK Spot 5PB',100,100,0,0,'CMYK Spots');
    
      // var message = 'SUCCESS ' +  functionID + '\n';
      // alert(message, functionID);
    
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      alert(e.message, functionID);
    }
  }

  function test_makeSwatchSpotLab() {

    var functionID = 'test_makeSwatchSpotLab';
  
    try {

      swatchUtils.makeSwatchSpotLab('Lab Spot YR',100,127,127,'Lab Spots');
      swatchUtils.makeSwatchSpotLab('Lab Spot Y',100,0,127,'Lab Spots');
      swatchUtils.makeSwatchSpotLab('Lab Spot G',100,-128,127,'Lab Spots');
      swatchUtils.makeSwatchSpotLab('Lab Spot B',0,-128,-128,'Lab Spots');

      // var message = 'SUCCESS ' +  functionID + '\n';
      // alert(message, functionID);
    
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      alert(e.message, functionID);
    }
  }

  function test_makeSwatchSpotRGB() {

    var functionID = 'test_makeSwatchSpotRGB';
  
    try {

      swatchUtils.makeSwatchSpotRGB('RGB Spot 5G',0,255,0,'RGB Spots');
      swatchUtils.makeSwatchSpotRGB('RGB Spot 5BG',0,255,255,'RGB Spots');
      swatchUtils.makeSwatchSpotRGB('RGB Spot 5B',0,128,255,'RGB Spots');
      swatchUtils.makeSwatchSpotRGB('RGB Spot 5PB',0,0,255,'RGB Spots');
    
      // var message = 'SUCCESS ' +  functionID + '\n';
      // alert(message, functionID);
    
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      alert(e.message, functionID);
    }
  }

  function test_deleteAllSpots() {
  
    var functionID = 'test_deleteAllSpots';

    try {
      swatchUtils.deleteAllSpots();
    
      // var message = 'SUCCESS ' +  functionID + '\n';
      // alert(message, functionID);
    
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      alert(e.message, functionID);
    }
  }

  function test_getSpotInternalColor() {
  
    var functionID = 'test_getSpotInternalColor';

    try {

      var doc = app.activeDocument;
      var spots = doc.spots;    

      for (var i = 0; i < spots.length; i++) {

        var spot = spots[i];
        var name = spot.name;
        var kind = spot.spotKind;

        if (spot.name === '[Registration]') {
          continue;
        }

        var color = spot.getInternalColor();

        var nameStr = '\nSpot Name: ' + name;
        var kindStr = '\nSpot Type: ' + kind;
        var colorStr = '\nSpot Internal Color:\n' + color;
        var message = 'SUCCESS ' +  functionID + nameStr + kindStr + colorStr;
        alert(message, functionID);
      }
    
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      alert(e.message, functionID);
    }
  }  


  // Expose Methods
  return {
    // Swatch Groups
    test_checkSwatchGroupExists: test_checkSwatchGroupExists,
    test_makeGetSwatchGroup: test_makeGetSwatchGroup,
    test_deleteSwatchGroup: test_deleteSwatchGroup,
    test_deleteEmptySwatchGroups: test_deleteEmptySwatchGroups,
    // Swatches
    test_getSelectedSwatches: test_getSelectedSwatches,
    test_checkDefaultSwatch: test_checkDefaultSwatch,
    test_addSwatchToGroup: test_addSwatchToGroup,
    test_deleteAllSwatches: test_deleteAllSwatches,
    test_randomizeSwatchIndexes: test_randomizeSwatchIndexes,
    // Process Colors
    test_makeSwatchCMYK: test_makeSwatchCMYK,
    test_makeSwatchGray: test_makeSwatchGray,
    test_makeSwatchLab: test_makeSwatchLab,
    test_makeSwatchRGB: test_makeSwatchRGB,
    // Spot Colors
    test_makeSwatchSpotCMYK: test_makeSwatchSpotCMYK,
    test_makeSwatchSpotLab: test_makeSwatchSpotLab,
    test_makeSwatchSpotRGB: test_makeSwatchSpotRGB,
    test_deleteAllSpots: test_deleteAllSpots,
    test_getSpotInternalColor: test_getSpotInternalColor,
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

// test_swatchUtils.test_checkSwatchGroupExists();

// Checks for 2 group names: 
// - Group One
// - Group Two

// Scenario: One group exists, the other doesn't.
// Pass: Alert for each group showing correct bool. 

/////////////////////////////////////////////////////////////

// test_swatchUtils.test_makeGetSwatchGroup();

// Gets or makes:
// - Group One
// - Group Two
// - Group Three

// Scenario: Some exist, some do not.
// Pass: Alerts for each group + groups added to UI.

/////////////////////////////////////////////////////////////

// test_swatchUtils.test_deleteSwatchGroup();

// Deletes:
// - Group One
// - Group Two

// Scenario: One exists, one does not.
// Pass: Alerts for each group + groups deleted from UI.

/////////////////////////////////////////////////////////////

// test_swatchUtils.test_deleteEmptySwatchGroups();

// Scenario: At least one empty swatch group.
// Pass: Alert + group deleted from UI.

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

// test_swatchUtils.test_getSelectedSwatches();

// Scenario: An open document with selected swatches.
// Pass: A SUCCESS alert with the number of swatches is displayed.

// Scenario: An open document with no selected swatches.
// Pass: An ERROR alert. 

/////////////////////////////////////////////////////////////

// test_swatchUtils.test_checkDefaultSwatch();

// Scenario: An open doc with selected swatches.
// Pass: Alert bool showing if Swatch is: None, Registration, White, Black.

/////////////////////////////////////////////////////////////

// test_swatchUtils.test_addSwatchToGroup();

// Scenario: Doc with at least 4 swatches - test_makeGetSwatchGroup()
// Pass: Alert + 3rd swatch added to 'Group One'.

/////////////////////////////////////////////////////////////

// test_swatchUtils.test_deleteAllSwatches();

// Scenario: Doc with swatches and swatch groups.
// Pass: Alerts + all swatches deleted in UI.

/////////////////////////////////////////////////////////////

// test_swatchUtils.test_randomizeSwatchIndexes();

// Scenario: Illustrator is running
// Pass: Alerts showing well-distributed results.

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

// test_swatchUtils.test_makeSwatchCMYK();
// test_swatchUtils.test_makeSwatchGray();
// test_swatchUtils.test_makeSwatchLab();
// test_swatchUtils.test_makeSwatchRGB();

// These tests yield a lot of alerts.
// I suggest turning off DEBUG unless needed. 

// Scenario: An open document.
// Pass: Alerts for each swatch added.
//       New swatches in the UI.

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

// test_swatchUtils.test_makeSwatchSpotLab();
// test_swatchUtils.test_makeSwatchSpotRGB();
// test_swatchUtils.test_makeSwatchSpotCMYK();

// These tests yield a lot of alerts.
// I suggest turning off DEBUG unless needed. 

// Scenario: An open document.
// Pass: Alerts for each swatch added.
//       New swatches in the UI.

/////////////////////////////////////////////////////////////

// Testing helpers

// test_swatchUtils.test_deleteAllSpots();
// test_swatchUtils.test_getSpotInternalColor();

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////


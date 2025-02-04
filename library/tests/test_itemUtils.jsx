/**
 * @file Script-Hero\library\tests\test_itemUtils.jsx
 * @author SwatchPie.io
 * @version 1.0
 * @date 2024-09-26
 * @license 'CC BY-NC 4.0'
 * 
 * @testFile Script-Hero\test-files\itemUtils\*.ai
 * 
 * @description
 * Manual tests for the itemUtils module.
 * 
 * Each `test_` function models a utility's
 * use in a larger script.
 * 
 * Scroll to bottom to run tests.
 * 
 */


// @include '../utilities/docUtils.jsx'
// @include '../utilities/itemUtils.jsx'

var test_itemUtils = (function() {

  // Selected PageItems

  function test_getSelectedItems() {
  
    var functionID = 'test_getSelectedItems';
  
    try {

      var selection = itemUtils.getSelectedItems();
    
      // var message = 'SUCCESS ' +  functionID + '\n';
      // alert(message, functionID);
    
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      alert(e.message, functionID);
    }
    
  }

  function test_randomizeSelection() {
  
    var functionID = 'test_randomizeSelection';

    try {

      var randomSelection = itemUtils.randomizeSelection(50);
    
      // var message = 'SUCCESS ' +  functionID + '\n';
      // alert(message, functionID);
    
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      alert(e.message, functionID);
    }
  }


  // PageItem Tags

  var tagString = 'tagString';
  var tagBool = 'tagBool';
  var tagNum = 'tagNum';

  function test_setItemTag() {
  
    var functionID = 'test_setItemTag';
  
    try {
  
      var selection = app.activeDocument.selection;
      
      for (var i = 0; i < selection.length; i++) {

        var item = selection[i];
        itemUtils.setItemTag(item, tagBool, true);
        itemUtils.setItemTag(item, tagNum, 42);
        itemUtils.setItemTag(item, tagString, 'I am a string');

        // var message = 'SUCCESS ' + functionID + '\n';
        // alert(message, functionID);        
      }
  
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      alert(e.message, functionID);
    }
  }

  function test_alertItemTags() {
  
    var functionID = 'test_alertItemTags';
  
    try {
  
      var selection = app.activeDocument.selection;
      
      for (var i = 0; i < selection.length; i++) {
        var item = selection[i];
        itemUtils.alertItemTags(item);
      }
      
      // var message = 'SUCCESS ' + functionID + '\n';
      // alert(message, functionID);
  
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      alert(e.message, functionID);
    }
  }

  function test_getTagByName() {
  
    var functionID = 'test_getTagByName';
  
    try {
  
      var selection = app.activeDocument.selection;
      
      for (var i = 0; i < selection.length; i++) {
        var item = selection[i];
        var strVal  = itemUtils.getTagByName(item, tagString);
        var boolVal = itemUtils.getTagByName(item, tagBool);
        var numVal  = itemUtils.getTagByName(item, tagNum);
      }
  
      // var message = 'SUCCESS ' + functionID + '\n';
      // alert(message, functionID);
  
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      alert(e.message, functionID);
    }
  }

  function test_removeTag() {
  
    var functionID = 'test_removeTag';
  
    try {
  
      var selection = app.activeDocument.selection;
      
      for (var i = 0; i < selection.length; i++) {
        var item = selection[i];
        itemUtils.removeTag(item, tagString);
        itemUtils.removeTag(item, tagBool);
        itemUtils.removeTag(item, tagNum);
      }
  
      // var message = 'SUCCESS ' + functionID + '\n';
      // alert(message, functionID);
  
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      alert(e.message, functionID);
    }
  }
  
  // Opacity

  function test_setItemOpacity() {
  
    var functionID = 'test_setItemOpacity';
  
    try {
  
      var selection = app.activeDocument.selection;
  
      for (var i = 0; i < selection.length; i++) {
        var item = selection[i];
        itemUtils.setItemOpacity(item, 50);
      }
  
      // var message = 'SUCCESS ' +  functionID + '\n';
      // alert(message, functionID);
    
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      alert(e.message, functionID);
    }
  }

  function test_setItemOpacityRandom() {
  
    var functionID = 'test_setItemOpacityRandom';
  
    try {
  
      var selection = app.activeDocument.selection;
  
      for (var i = 0; i < selection.length; i++) {
        var item = selection[i];
        itemUtils.setItemOpacityRandom(item, 20, 80);
      }
  
      // var message = 'SUCCESS ' +  functionID + '\n';
      // alert(message, functionID);
    
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      alert(e.message, functionID);
    }
  }

  // Scale

  function test_scaleItem() {
  
    var functionID = 'test_scaleItem';
  
    try {
  
      var selection = app.activeDocument.selection;
  
      for (var i = 0; i < selection.length; i++) {
        var item = selection[i];
        itemUtils.scaleItem(item, 1.25);
      }

      // var message = 'SUCCESS ' +  functionID + '\n';
      // alert(message, functionID);
    
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      alert(e.message, functionID);
    }
  }

  function test_scaleItemRandom() {
  
    var functionID = 'test_scaleItemRandom';
  
    try {
  
      var selection = app.activeDocument.selection;
  
      for (var i = 0; i < selection.length; i++) {
        var item = selection[i];
        itemUtils.scaleItemRandom(item, 0.8, 1.2);
      }
  
      // var message = 'SUCCESS ' +  functionID + '\n';
      // alert(message, functionID);
    
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      alert(e.message, functionID);
    }
  }

  function test_resetItemScale() {
  
    var functionID = 'test_resetItemScale';
  
    try {
  
      var selection = app.activeDocument.selection;
  
      for (var i = 0; i < selection.length; i++) {
        var item = selection[i];
        itemUtils.resetItemScale(item);
      }
      
      // var message = 'SUCCESS ' +  functionID + '\n';
      // alert(message, functionID);
    
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      alert(e.message, functionID);
    }
    
  }

  // Rotate

  function test_rotateItem() {
  
    var functionID = 'test_rotateItem';
  
    try {

      var selection = app.activeDocument.selection;
    
      for (var i = 0; i < selection.length; i++) {
        var item = selection[i];
        itemUtils.rotateItem(item, -30);
      }    
      // var message = 'SUCCESS ' +  functionID + '\n';
      // alert(message, functionID);
    
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      alert(e.message, functionID);
    }
  }

  function test_rotateItemRandom() {
  
    var functionID = 'test_rotateItemRandom';

    try {

      var selection = app.activeDocument.selection;
  
      for (var i = 0; i < selection.length; i++) {
        var item = selection[i];
        itemUtils.rotateItemRandom(item, 45, 45);
      }   

      // var message = 'SUCCESS ' +  functionID + '\n';
      // alert(message, functionID);
    
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      alert(e.message, functionID);
    }
  }

  function test_resetItemRotation() {
  
    var functionID = 'test_resetItemRotation';
  
    try {

      var selection = app.activeDocument.selection;
  
      for (var i = 0; i < selection.length; i++) {
        var item = selection[i];
        itemUtils.resetItemRotation(item);
      }    

      // var message = 'SUCCESS ' +  functionID + '\n';
      // alert(message, functionID);
    
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      alert(e.message, functionID);
    }
  }

  // Translate

  function test_translateItem() {
  
    var functionID = 'test_translateItem';

    try {

      var selection = app.activeDocument.selection;
  
      for (var i = 0; i < selection.length; i++) {
        var item = selection[i];
        itemUtils.translateItem(item, 50, 100);
      }    

      // var message = 'SUCCESS ' +  functionID + '\n';
      // alert(message, functionID);
    
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      alert(e.message, functionID);
    }
  }

  function test_resetItemTranslation() {
  
    var functionID = 'test_resetItemTranslation';

    try {

      var selection = app.activeDocument.selection;
  
      for (var i = 0; i < selection.length; i++) {
        var item = selection[i];
        itemUtils.resetItemTranslation(item);
      }

      // var message = 'SUCCESS ' +  functionID + '\n';
      // alert(message, functionID);
    
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      alert(e.message, functionID);
    }
  }

  // Z-index

  function test_setRandomZOrder() {
  
    var functionID = 'test_setRandomZOrder';
  
    try {
  
      var selection = app.activeDocument.selection;
      itemUtils.setRandomZOrder(selection);
  
      // var message = 'SUCCESS ' + functionID + '\n';
      // alert(message, functionID);
  
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      alert(e.message, functionID);
    }
  }

  // Unlock-Show and Relock-Hide

  function test_unlockShowLayers() {
  
    var functionID = 'test_unlockShowLayers';
  
    try {
  
      itemUtils.unlockShowLayers();    
  
      // var message = 'SUCCESS ' + functionID + '\n';
      // alert(message, functionID);
  
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      alert(e.message, functionID);
    }
  }

  function test_unlockShowItems() {
  
    var functionID = 'test_unlockShowItems';
  
    try {
  
      itemUtils.unlockShowItems();    
  
      // var message = 'SUCCESS ' + functionID + '\n';
      // alert(message, functionID);
  
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      alert(e.message, functionID);
    }
  }

  function test_relockHideItems() {
  
    var functionID = 'test_relockHideItems';
  
    try {
  
      itemUtils.relockHideItems();
  
      // var message = 'SUCCESS ' + functionID + '\n';
      // alert(message, functionID);
  
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      alert(e.message, functionID);
    }
  }

  function test_relockHideLayers() {
  
    var functionID = 'test_relockHideLayers';
  
    try {
  
      itemUtils.relockHideLayers();
  
      // var message = 'SUCCESS ' + functionID + '\n';
      // alert(message, functionID);
  
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      alert(e.message, functionID);
    }
  }


  // Expose Methods
  return {
    // Selection
    test_getSelectedItems: test_getSelectedItems,
    test_randomizeSelection: test_randomizeSelection,
    // Tags
    test_setItemTag: test_setItemTag,
    test_alertItemTags: test_alertItemTags,
    test_getTagByName: test_getTagByName,
    test_removeTag: test_removeTag,
    // Opacity
    test_setItemOpacity: test_setItemOpacity,
    test_setItemOpacityRandom: test_setItemOpacityRandom,
    // Scale
    test_scaleItem: test_scaleItem,
    test_scaleItemRandom: test_scaleItemRandom,
    test_resetItemScale: test_resetItemScale,
    // Rotate
    test_rotateItem: test_rotateItem,
    test_rotateItemRandom: test_rotateItemRandom,
    test_resetItemRotation: test_resetItemRotation,
    // Translate
    test_translateItem: test_translateItem,
    test_resetItemTranslation: test_resetItemTranslation,
    // Z-index
    test_setRandomZOrder: test_setRandomZOrder,
    // Unlock-Show
    test_unlockShowLayers: test_unlockShowLayers,
    test_unlockShowItems: test_unlockShowItems,
    test_relockHideItems: test_relockHideItems,
    test_relockHideLayers: test_relockHideLayers,
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

// test_itemUtils.test_getSelectedItems();

// Scenario: An open document with selected items.
// Pass: Alert showing the correct number of selected items.

// Scenario: No selected items.
// Pass: Error alert.

/////////////////////////////////////////////////////////////

// test_itemUtils.test_randomizeSelection();

// Scenario: An open document with selected items.
// Pass: Alert showing 50% of original selection items.
//       UI shows new selection. 

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

// test_itemUtils.test_setItemTag();
// test_itemUtils.test_alertItemTags();

// Scenario: An open document with a small number of selected items.
// Pass: Alerts for each item and tag set. 

/////////////////////////////////////////////////////////////

// test_itemUtils.test_getTagByName();

// Scenario: Selected items + test_setItemTags()
// Pass: An alert for item and tag.

/////////////////////////////////////////////////////////////

// test_itemUtils.test_removeTag();
// test_itemUtils.test_alertItemTags();

// Scenario: Selected items + test_setItemTags()
// Pass: Alerts for each item and tag removed.
//       Final alert showing 'No tags found'. 

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

// test_itemUtils.test_setItemOpacity();

// Scenario: An open document with selected items.
// Pass: Alert for each item.
//       UI shows items with 50% opacity.

/////////////////////////////////////////////////////////////

// test_itemUtils.test_setItemOpacityRandom();

// Scenario: An open document with selected items.
// Pass: Alert for each item.
//       UI shows items with 20%-80% random opacities.

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

// test_itemUtils.test_scaleItem();
// test_itemUtils.test_alertItemTags();

// Scenario: An open document with selected items.
// Pass: Alert for each item.
//       UI shows items with 1.25 scale.

// Run this twice to test accumulated scale.

/////////////////////////////////////////////////////////////

// test_itemUtils.test_scaleItemRandom();
// test_itemUtils.test_alertItemTags();

// Scenario: An open document with selected items.
// Pass: Alert for each item.
//       UI shows items with 0.8 to 1.2 random scales.

// Run this twice to test accumulated scale. 

/////////////////////////////////////////////////////////////

// test_itemUtils.test_resetItemScale();
// test_itemUtils.test_alertItemTags();

// Scenario: Selected items + test_scaleItem*() 
// Pass: Alert for each item. 
//       UI shows items with original scale.

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

// test_itemUtils.test_rotateItem();
// test_itemUtils.test_alertItemTags();

// Scenario: An open document with selected items.
// Pass: Alert for each item.
//       UI shows items with 30 degree clockwise rotation.

// Run this multiple times to test accumulated rotation.

/////////////////////////////////////////////////////////////

// test_itemUtils.test_rotateItemRandom();
// test_itemUtils.test_alertItemTags();

// Scenario: An open document with selected items.
// Pass: Alert for each item.
//       UI shows items with -45 to 45 degree rotations.

// Run this multiple times to test accumulated rotation.

/////////////////////////////////////////////////////////////

// test_itemUtils.test_resetItemRotation();
// test_itemUtils.test_alertItemTags();

// Scenario: Selected items + test_rotateItem*()
// Pass: Alert for each item.
//       UI shows items with original rotation.

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

// test_itemUtils.test_translateItem();
// test_itemUtils.test_alertItemTags();

// Scenario: Selected items.
// Pass: Alert for each item. 
//       UI shows items 50px right and 100px up.

// Run this multiple times to test accumulated translation.

/////////////////////////////////////////////////////////////

// test_itemUtils.test_resetItemTranslation();
// test_itemUtils.test_alertItemTags();

// Scenario: Selected items + test_translateItems
// Pass: Alert for each item.
//       UI shows items with original positions.

// Run this multiple times to test accumulated translation.

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

// test_itemUtils.test_setRandomZOrder();

// Scenario: Multiple items on multiple layers selected. 
// Pass: Alerts for each item. 
//       Z-order changes in Layers panel
//       Items remain on their current layer. 

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

// test_itemUtils.test_unlockShowLayers();
// test_itemUtils.test_unlockShowItems();

// Scenario: A document with multiple layers and items
//           with varied states of locked and visible states.
// Pass: All layers and items are made visible and unlocked. 

/////////////////////////////////////////////////////////////

// test_itemUtils.test_relockHideItems();
// test_itemUtils.test_relockHideLayers();

// Scenario: test_unlockShowLayers + test_unlockShowItems
// Pass: All layers and items are restored to their 
//       original visible and unlocked states.

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////


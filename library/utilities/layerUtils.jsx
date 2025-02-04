/**
 * @file Script-Hero\library\utilities\layerUtils.jsx
 * @author SwatchPie.io
 * @version 1.0
 * @date 2024-06-10
 * @license 'CC BY-NC 4.0'
 * 
 * @description
 * A module with utility functions for 
 * working with Layers.
 * 
 * @remarks
 * Layers made active via script will not appear 
 * active in the Layers panel until something 
 * subsequent is done with the layer. 
 * 
 * For example, adding an object, as shown in test_layers.jsx.
 * 
 */


// @include '../../global.jsx'
// @include './miscUtils.jsx'
// @include './colorUtils.jsx'

var layerUtils = (function() {

  // Module Properties
  var DEBUG = global.DEBUG.LAYERUTILS;

  
  /**
   * Checks if a named Layer object exists.
   * @function layerUtils.checkLayerExists
   * @param {Document} doc - The active document.
   * @param {string} layerName - The name of the Layer to check for.
   * @returns {boolean} `true` if Layer exists.
   * @throws {Error} If no active document.
   * @throws {Error} If missing or undefined parameter.
   * @example
   * var doc = docUtils.getActiveDocument();
   * var layerName = 'Backgrounds';
   * var layerExists = layerUtils.checkLayerExists(doc, layerName);
   */
  function checkLayerExists(doc, layerName) {
  
    var functionID = 'layerUtils.checkLayerExists';
  
    try {

      if (!(doc instanceof Document)) {
        throw new Error('Parameter must be a Document object: doc');
      }
      if (typeof layerName !== 'string') {
        throw new Error('Parameter must be a string: layerName');
      }

      var layers = doc.layers;
      var result = false;
      
      for (var i = 0; i < layers.length; i++) {
        var layer = layers[i];
        if (layer.name === layerName) result = true;
      }
      
      var message = 'SUCCESS ' + functionID + '\nLayer: ' + layerName + '\nExists: ' + result;
      if (DEBUG) alert(message, functionID);

      return result;
    
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      throw e;
    }
  }


  /**
   * Gets a layer by names if it exists. 
   * Makes a new layer if needed.
   * Unlocks layer. Makes layer visible. Makes layer active.
   * @function layerUtils.getMakeLayer
   * @param {Document} doc - The active document.
   * @param {string} layerName - The name of the Layer to get or make.
   * @returns {Layer} The Layer object.
   * @throws {Error} If missing or undefined parameters.
   * @example
   * var doc = docUtils.getActiveDocument();
   * var layerName = 'Backgrounds';
   * var layer = layerUtils.getMakeLayer(doc, layerName);
   */
  function getMakeLayer(doc, layerName) {
  
    var functionID = 'layerUtils.getMakeLayer';
  
    try {

      if (!(doc instanceof Document)) {
        throw new Error('Parameter must be a Document object: doc');
      }
      if (typeof layerName !== 'string') {
        throw new Error('Parameter must be a string: layerName');
      }
      
      var layer;

      if (checkLayerExists(doc, layerName)) {
        layer = doc.layers.getByName(layerName);
      } else {
        layer = doc.layers.add();
        layer.name = layerName;
      }
  
      layer.visible = true;
      layer.locked = false;
      doc.activeLayer = layer;
 
      var message = 'SUCCESS ' + functionID + '\nActive layer:\n' + layer.name;
      if (DEBUG) alert(message, functionID);

      return layer;
    
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      throw e;
    }
  }


  /**
   * Creates a new Layer regardless of existing layers with the same name.
   * Unlocks layer. Makes layer visible. Makes layer active.
   * @function layerUtils.makeNewLayer
   * @param {Document} doc - The active document.
   * @param {string} layerName - The name of the Layer to make.
   * @returns {Layer} A layer object.
   * @throws {Error} If missing or undefined parameters.
   * @example
   * var doc = docUtils.getActiveDocument();
   * var layerName = 'Backgrounds';
   * var layer = layerUtils.makeNewLayer(doc, layerName);
   */
  function makeNewLayer(doc, layerName) {

    var functionID = 'layerUtils.makeNewLayer';
  
    try {

      if (!(doc instanceof Document)) {
        throw new Error('Parameter must be a Document object: doc');
      }
      if (typeof layerName !== 'string') {
        throw new Error('Parameter must be a string: layerName');
      }
      
      var layer = doc.layers.add();
          layer.name = layerName;
          layer.visible = true;
          layer.locked = false;

      doc.activeLayer = layer;

      var message = 'SUCCESS ' + functionID + '\nNew layer:\n' + layer.name;
      if (DEBUG) alert(message, functionID);

      return layer;
    
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      throw e;
    }
  }

  
  // Expose Methods
  return {
    getMakeLayer: getMakeLayer,
    makeNewLayer: makeNewLayer,
  };

})();


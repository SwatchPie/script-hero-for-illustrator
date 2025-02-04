/**
 * @file script-hero/library/patterns/parameter-checks.jsx 
 * @author SwatchPie.io
 * @version 1.0
 * @date 2024-11-10
 * @license 'CC BY-NC 4.0'
 * 
 * @description
 * Examples for checking required and optional
 * method parameters.
 * 
 * VS Code snippets: 
 *    check-
 * 
 */


// check-generic
if (typeof param === 'undefined' || param === null) {
  throw new Error('Missing or undefined parameter: param');
}

// check-active-doc
// var doc = docutils.getActiveDocument();
if (!app.activeDocument) {
  throw new Error('No active document.');
}

var doc = app.activeDocument;

// check-selected-items
// var selection = itemUtils.getSelectedItems();
if (app.activeDocument.selection.length === 0) {
  throw new Error('No selected items.');
}

var selection = app.activeDocument.selection;

// check-selected-swatches
// var swatches = swatchUtils.getSelectedSwatches();
if (app.activeDocument.swatches.getSelected().length === 0){
  throw new Error('No selected swatches.');
}

var swatches = doc.swatches.getSelected();


// check-array-req
if (!param || !(param instanceof Array)) {
  throw new Error('Parameter must be an array: param.');
}
// check-array-opt
var paramDefault = defaultVal;
var paramExists = !param || !(param instanceof Array);
param = paramExists ? param : paramDefault;


// check-bool-req
if (typeof param !== 'boolean') {
  throw new Error('Parameter must be a boolean: param.');
}
// check-bool-opt
var paramDefault = true;
param = (typeof param === 'boolean') ? param : paramDefault;


// check-colorSpace-cmyk
if (!(doc.documentColorSpace === DocumentColorSpace.CMYK)) {
  throw new Error('Document must be in CMYK Color Mode.');
}
// check-colorSpace-rgb
if (!(doc.documentColorSpace === DocumentColorSpace.RGB)) {
  throw new Error('Document must be in RGB Color Mode.');
}

// check-doc-req
if (!(doc instanceof Document)) {
  throw new Error('Parameter must be a Document object: doc');
}
// check-file-req
if (!(param instanceof File)) {
  throw new Error('Parameter must be a File object: param');
}


// check-item-visible
if (!item.hidden) {};
// check-item-hidden
if (item.hidden) {};
// check-item-unlocked
if (!item.locked) {};
// check-item-locked
if (item.locked) {};

// check-layer-visible
if (layer.visible) {};
// check-layer-hidden
if (!layer.visible) {};
// check-layer-locked
if (layer.locked) {};
// check-layer-unlocked
if (!layer.locked) {};


// check-num-req
if (typeof param !== 'number' || isNaN(param)) {
  throw new Error('Parameter must be a number: param');
}

// check-num-opt
var paramDefault = 0;
var paramExists = (typeof param === 'number') && !isNaN(param);
param = paramExists ? param : paramDefault;

// check-num-clamp
// Silently handle out-of-range numbers
var paramDefault = 0;
var paramExists = (typeof param === 'number') && !isNaN(param);
param = paramExists ? Math.min(maxVal, Math.max(minVal, param)) : paramDefault;

// check-num-range
if (typeof param !== 'number' || isNaN(param) || param < ninVal || param > maxVal) {
  throw new Error('Parameter must be a number: ninVal <= param <= maxVal');
}


// check-obj-req
if (!param || param === null || !(typeof param === 'object') || (param instanceof Array)) {
  throw new Error('Missing or invalid object: param.');
}

// check-obj-opt
var paramDefault = {};
var paramExists = !param || param === null || !(typeof param === 'object') || (param instanceof Array);
param = paramExists ? param : paramDefault;


// check-return
if (!param) {
  var returnMessage = 'SUCCESS ' + functionID + '\n';
  if (DEBUG) alert(returnMessage, functionID);
  return;
}


// check-str-req
if (typeof param !== 'string') {
  throw new Error('Parameter must be a string: param');
}
// check-str-opt
var paramDefault = '';
param = (typeof param === 'string') ? param : paramDefault;


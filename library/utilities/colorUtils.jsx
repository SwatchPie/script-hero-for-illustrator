/**
 * @file Script-Hero\library\utilities\colorUtils.jsx
 * @author SwatchPie.io
 * @version 1.0
 * @date 2024-06-10
 * @license 'CC BY-NC 4.0'
 * 
 * @description
 * A module with utility functions for 
 * creating and converting colors.
 * 
 */


// @include '../../global.jsx'
// @include './miscUtils.jsx'

var colorUtils = (function() {

  // Module Properties
  var DEBUG = global.DEBUG.COLORUTILS;


  // 
  // Value Checks
  //

  /**
   * Checks CMYK values to ensure they are
   * numbers and within range.
   * @function colorUtils.checkValuesCMYK
   * @param {number} c - Cyan (0-100).
   * @param {number} m - Magenta (0-100).
   * @param {number} y - Yellow (0-100).
   * @param {number} k - Black (0-100).
   * @returns {void}
   * @throws {Error} If missing or undefined parameters.
   * @throws {Error} If any parameter is NaN or out-of-range.
   */
  function checkValuesCMYK(c, m, y, k) {
  
    var functionID = 'colorUtils.checkValuesCMYK';
  
    try {

      if (isNaN(c) || c < 0 || c > 100) {
        throw new Error('Parameter must be a number: 0 <= c <= 100');
      }
      if (isNaN(m) || m < 0 || m > 100) {
        throw new Error('Parameter must be a number: 0 <= m <= 100');
      }
      if (isNaN(y) || y < 0 || y > 100) {
        throw new Error('Parameter must be a number: 0 <= y <= 100');
      }
      if (isNaN(k) || k < 0 || k > 100) {
        throw new Error('Parameter must be a number: 0 <= k <= 100');
      }

      var message = 'SUCCESS ' + functionID + '\nValid CMYK Values:\n' + c + ', ' + m + ', ' + y + ', ' + k;
      if (DEBUG) alert(message, functionID);
  
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      throw e;
    }
  }


  /**
   * Checks LAB values to ensure they are 
   * numbers and within range.
   * @function colorUtils.checkValuesLab
   * @param {number} l - Lightness (0 black to 100 white).
   * @param {number} a - Red-green (-128 green to 127 red).
   * @param {number} b - Yellow-blue (-128 blue to 127 yellow).
   * @returns {void}
   * @throws {Error} If missing or undefined parameters.
   * @throws {Error} If any parameter is NaN or out-of-range.
   */
  function checkValuesLab(l, a, b) {
  
    var functionID = 'colorUtils.checkValuesLab';
  
    try {

      if (isNaN(l) || l < 0 || l > 100) {
        throw new Error('Parameter must be a number: 0 <= l <= 100');
      }
      if (isNaN(a) || a < -128 || a > 127) {
        throw new Error('Parameter must be a number: -128 <= a <= 127');
      }
      if (isNaN(b) || b < -128 || b > 127) {
        throw new Error('Parameter must be a number: -128 <= b <= 127');
      }
      
      var labStr = l +  ', ' + a + ', ' + b;
      var message = 'SUCCESS ' + functionID + '\nValid LAB Values:\n' + labStr;
      if (DEBUG) alert(message, functionID);
  
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      throw e;
    }
  }


  /**
   * Checks RGB values to ensure they are
   * numbers and within range.
   * @function colorUtils.checkValuesRGB
   * @param {number} r - Red (0-255).
   * @param {number} g - Green (0-255).
   * @param {number} b - Blue (0-255).
   * @returns {void}
   * @throws {Error} If missing or undefined parameters.
   * @throws {Error} If any parameter is NaN or out-of-range.   
   */
  function checkValuesRGB(r, g, b) {
  
    var functionID = 'colorUtils.checkValuesRGB';
  
    try {
  
      if (isNaN(r) || r < 0 || r > 255) {
        throw new Error('Parameter must be a number: 0 <= r <= 255');
      }
      if (isNaN(g) || g < 0 || g > 255) {
        throw new Error('Parameter must be a number: 0 <= g <= 255');
      }
      if (isNaN(b) || b < 0 || b > 255) {
        throw new Error('Parameter must be a number: 0 <= b <= 255');
      }
      
      var rgbStr = r + ', ' +  g + ', ' + b;
      var message = 'SUCCESS ' + functionID + '\nValid RGB Values:\n ' + rgbStr;
      if (DEBUG) alert(message, functionID);
  
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      throw e;
    }
  }


  //
  // Process Colors
  //

  /**
   * Creates a new CMYKColor.
   * @function colorUtils.makeColorCMYK
   * @param {number} c - Cyan (0-100).
   * @param {number} m - Magenta (0-100).
   * @param {number} y - Yellow (0-100).
   * @param {number} k - Black (0-100).
   * @returns {CMYKColor} A Color object.
   * @throws {Error} If missing or undefined parameters.
   * @throws {Error} If any param is NaN or out of range.
  */
  function makeColorCMYK(c, m, y, k) {
  
    var functionID = 'colorUtils.makeColorCMYK';

    try {
    
      checkValuesCMYK(c,m,y,k);

      var color = new CMYKColor();
      color.cyan = c;
      color.magenta = m;
      color.yellow = y;
      color.black = k;
  
      var cmykStr = c + ', ' + m + ', ' + y + ', ' + k;
      var message = 'SUCCESS ' + functionID + '\nCMYK Process Color: ' + cmykStr;
      if (DEBUG) alert(message, functionID);

      return color;
    
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      throw e;
    }
  }


  /**
   * Creates a new GrayColor.
   * @function colorUtils.makeColorGray
   * @param {number} gray - Gray (0-100).
   * @returns {GrayColor} A Color object. 
   * @throws {Error} If missing or undefined parameters.
   * @throws {Error} If param is NaN or out of range.
   */
  function makeColorGray(gray) {
  
    var functionID = 'colorUtils.makeColorGray';

    try {
    
      if (isNaN(gray) || gray < 0 || gray > 100) {
        throw new Error('Parameter must be a number: 0 <= gray <= 100');
      }
    
      var color = new GrayColor();
      color.gray = gray;

      var message = 'SUCCESS ' + functionID + '\nGrayscale Color: ' + gray;
      if (DEBUG) alert(message, functionID);

      return color;
    
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      throw e;
    }
  }


  /**
   * Creates a new LabColor.
   * @function colorUtils.makeColorLab
   * @param {number} l - Lightness (0 black to 100 white).
   * @param {number} a - Red-green (-128 green to 127 red).
   * @param {number} b - Yellow-blue (-128 blue to 127 yellow).
   * @returns {LabColor} A color object. 
   * @throws {Error} If missing or undefined parameters.
   * @throws {Error} If any param is NaN or out of range.
   */
  function makeColorLab(l, a, b) {
  
    var functionID = 'colorUtils.makeColorLab';

    try {
    
      checkValuesLab(l,a,b);

      var color = new LabColor();
      color.l = l;
      color.a = a;
      color.b = b;
    
      var labStr = l +  ', ' + a + ', ' + b;
      var message = 'SUCCESS ' + functionID + '\nLab Process Color: ' + labStr;
      if (DEBUG) alert(message, functionID);

      return color;
    
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      throw e;
    }
  }


  /**
   * Creates a new RGBColor. 
   * @function colorUtils.makeColorRGB
   * @param {number} r - Red (0-255).
   * @param {number} g - Green (0-255).
   * @param {number} b - Blue (0-255).
   * @returns {RGBColor} A color object. 
   * @throws {Error} If missing or undefined parameters.
   * @throws {Error} If any param is NaN or out of range.
   */
  function makeColorRGB(r, g, b) {
  
    var functionID = 'colorUtils.makeColorRGB';

    try {
    
      checkValuesRGB(r,g,b);

      var color = new RGBColor();
      color.red = r;
      color.green = g;
      color.blue = b;
    
      var rgbStr = r + ', ' +  g + ', ' + b;
      var message = 'SUCCESS ' + functionID + '\nRGB Process Color: ' + rgbStr;
      if (DEBUG) alert(message, functionID);

      return color;
    
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      throw e;
    }
  }


  //
  // Spot Colors
  //

  /**
   * Checks if Spot.name exists.
   * @function colorUtils.checkSpotNameExists
   * @param {string} spotName - The name of the SwatchGroup to check for.
   * @returns {boolean} `true` if `Spot.name` exists.
   * @throws {Error} If no active document.
   * @throws {Error} If missing or undefined parameter.
   * @example 
   * var spotName = 'RGB Red Spot';
   * var spotNameExists = colorUtils.checkSpotNameExists(spotName)
   * if (spotNameExists) {}
   * @remarks
   * - Many objects have a `getByName`.
   * - If the name doesn't exist, these methods throw an error.
   * - Hence the try-catch approach to obtain a bool. 
   */
  function checkSpotNameExists(spotName) {

    var functionID = 'colorUtils.checkSpotNameExists';

    try {
    
      if (!app.activeDocument) {
        throw new Error('No active document.');
      }
      if (typeof spotName !== 'string') {
        throw new Error('Parameter must be a string: spotName');
      }
      
      var doc = app.activeDocument;
      var spotExists;
  
      try {
        var spot = doc.spots.getByName(spotName);
        spotExists = true;
      } catch (e) {
        spotExists = false
      }

      var resultStr = '\nSpot Name: ' + spotName + '\nSpot Exists: ' + spotExists;
      var message = 'SUCCESS ' + functionID + resultStr;
      if (DEBUG) alert(message, functionID);

      return spotExists;
    
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      throw e;
    }
  }


  /**
   * Creates a new Spot CMYK object if the Spot.name doesn't exist,
   * Implicitly creates a Swatch object. 
   * @function colorUtils.makeSpotCMYK
   * @param {string} spotName - The Spot object name.
   * @param {number} c - Cyan (0-100).
   * @param {number} m - Magenta (0-100).
   * @param {number} y - Yellow (0-100).
   * @param {number} k - Black (0-100).
   * @returns {Spot} A Spot object containing the color definition. 
   * @throws {Error} If no active document.
   * @throws {Error} If missing or undefined parameters.
   * @throws {Error} If params are NaN or out of range.
  */
  function makeSpotCMYK(spotName, c, m, y, k) {

    var functionID = 'colorUtils.makeSpotCMYK';

    try {
    
      if (!app.activeDocument) {
        throw new Error('No active document.');
      }
      if (typeof spotName !== 'string') {
        throw new Error('Parameter must be a string: spotName');
      }

      var doc = app.activeDocument;
      var spot;

      if (checkSpotNameExists(spotName)) {
        spot = doc.spots.getByName(spotName);

      } else {
        var color = makeColorCMYK(c,m,y,k);
        spot = doc.spots.add();
        spot.name = spotName;
        spot.colorType = ColorModel.SPOT;
        spot.color = color;        
      }
      
      var cmykStr = c + ', ' + m + ', ' + y + ', ' + k;
      var message = 'SUCCESS ' + functionID + '\nCMYK Spot Color: ' + cmykStr;
      if (DEBUG) alert(message, functionID);

      return spot;
    
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      throw e;
    }
  }


  /**
   * Creates a new Spot LAB object if the Spot.name doesn't exist,
   * Implicitly creates a Swatch object. 
   * @function colorUtils.makeSpotLab
   * @param {string} spotName - The Spot object name.
   * @param {number} l - Lightness (0 black to 100 white).
   * @param {number} a - Red-green (-128 green to 127 red).
   * @param {number} b - Yellow-blue (-128 blue to 127 yellow).
   * @returns {Spot} A Spot object containing the color definition. 
   * @throws {Error} If no active document.
   * @throws {Error} If missing or undefined parameters.
   * @throws {Error} If params are NaN or out of range.
  */
  function makeSpotLab(spotName, l, a, b) {

    var functionID = 'colorUtils.makeSpotLab';

    try {

      if (!app.activeDocument) {
        throw new Error('No active document.');
      }
      if (typeof spotName !== 'string') {
        throw new Error('Parameter must be a string: spotName');
      }

      var doc = app.activeDocument;
      var spot;

      if (checkSpotNameExists(spotName)) {
        spot = doc.spots.getByName(spotName);

      } else {
        var color = makeColorLab(l,a,b);
        spot = doc.spots.add();
        spot.name = spotName;
        spot.colorType = ColorModel.SPOT;
        spot.color = color;        
      }
  
      var labStr = l +  ', ' + a + ', ' + b;
      var message = 'SUCCESS ' + functionID + '\nLab Spot Color: ' + labStr;
      if (DEBUG) alert(message, functionID);

      return spot;
    
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      throw e;
    }
  }


  /**
   * Creates a new Spot RGB object if the Spot.name doesn't exist,
   * Implicitly creates a Swatch object. 
   * @function colorUtils.makeSpotRGB
   * @param {string} spotName - The Spot and Swatch object name.
   * @param {number} r - Red (0-255).
   * @param {number} g - Green (0-255).
   * @param {number} b - Blue (0-255).
   * @returns {Spot} A Spot object containing the color definition. 
   * @throws {Error} If no active document.
   * @throws {Error} If missing or undefined parameters.
   * @throws {Error} If params are NaN or out of range.  
   */
  function makeSpotRGB(spotName, r, g, b) {

    var functionID = 'colorUtils.makeSpotRGB';

    try {

      if (!app.activeDocument) {
        throw new Error('No active document.');
      }
      if (typeof spotName !== 'string') {
        throw new Error('Parameter must be a string: spotName');
      }

      var doc = app.activeDocument;
      var spot;

      if (checkSpotNameExists(spotName)) {
        spot = doc.spots.getByName(spotName);

      } else {
        var color = makeColorRGB(r,g,b);
        spot = doc.spots.add();
        spot.name = spotName;
        spot.colorType = ColorModel.SPOT;
        spot.color = color;        
      }
  
      var rgbStr = r + ', ' +  g + ', ' + b;
      var message = 'SUCCESS ' + functionID + '\nRGB Spot Color: ' + rgbStr;
      if (DEBUG) alert(message, functionID);

      return spot;
    
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      throw e;
    }
  }


  //
  // Color Conversion
  //

  /**
   * @example
   * var swatches = swatchUtils.getSelectedSwatches();
   * var swatch = swatches[0];
   * var source = colorUtils.getColorSourceComps(swatch.color);
   * var cmyk = colorUtils.convertColorToCMYK(source.sourceSpace, source.sourceComps);
   * var cmykComps = cmyk.targetComps; // [0,20,40,0]
   */

  /**
   * Returns the source color space and values for a `Color` object.
   * These become the parameters in color conversion methods.
   * @function colorUtils.getColorSourceComps
   * @param {Color} color - A color object
   * @returns {object} 
   * @returns {ImageColorSpace} sourceSpace - i.e.  ImageColorSpace.CMYK
   * @returns {Array} sourceComps - The source color components. A list of numbers.
   * @throws {Error} If no active document.
   * @throws {Error} If missing or undefined parameter.
   * @example 
   * var color = makeColorCMYK(0, 80, 20, 0);
   * var colorComps = colorUtils.getColorSourceComps(color);
   * var sourceSpace = colorComps.sourceSpace;
   * var sourceComps = colorComps.sourceComps;
   */
  function getColorSourceComps(color) {

    var functionID = 'colorUtils.getColorSourceComps';
    var sourceSpace;
    var sourceComps = [];

    try {

      if (!app.activeDocument) {
        throw new Error('No active document.');
      }
      if (typeof color === 'undefined' || color === null) {
        throw new Error('Missing or undefined parameter: color');
      }

      switch (color.typename) {
        case 'CMYKColor':
          sourceSpace = ImageColorSpace.CMYK;
          sourceComps = [color.cyan, color.magenta, color.yellow, color.black];
          break;
        case 'GrayColor':
          sourceSpace = ImageColorSpace.GrayScale;
          sourceComps = [color.gray];
          break;
        case 'LabColor':
          sourceSpace = ImageColorSpace.LAB;
          sourceComps = [color.l, color.a, color.b];
          break;
        case 'RGBColor':
          sourceSpace = ImageColorSpace.RGB;
          sourceComps = [color.red, color.green, color.blue];
          break;
        case 'SpotColor':
          sourceComps = color.spot.getInternalColor();
          switch (color.spot.spotKind) {
            case SpotColorKind.SPOTCMYK:
              sourceSpace = ImageColorSpace.CMYK;
              break;
            case SpotColorKind.SPOTRGB:
              sourceSpace = ImageColorSpace.RGB;
              break;
            case SpotColorKind.SPOTLAB:
              sourceSpace = ImageColorSpace.LAB;
              break;
            default:
              throw new Error('Unsupported spotKind: ' + color.spot.spotKind);
          }
          break;
        default:
          throw new Error('Unsupported color type: ' + color.typename);
      }

      var spaceStr = '\nsourceSpace: ' + sourceSpace;
      var compsStr = '\nsourceComps: ' + sourceComps;
      var message = 'SUCCESS ' + functionID + spaceStr + compsStr;
      if (DEBUG) alert(message, functionID);

      return {
        sourceSpace: sourceSpace,
        sourceComps: sourceComps
      }; 
    
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      throw e;
    }
  }


  /**
   * Converts a color into other color spaces.
   * @function colorUtils.convertColor
   * @param {ImageColorSpace} sourceSpace - i.e.  ImageColorSpace.CMYK.
   * @param {Array} sourceComps - The source color components. A list of numbers.
   * @param {ImageColorSpace} targetSpace - i.e.  ImageColorSpace.CMYK
   * @param {string} targetLabel - Human 'CMYK', 'RGB', and so on.
   * @param {number} decimals - The number of decimal places for rounding. 
   * @returns {object} An object with the target color space, label, and components.
   * @returns {ImageColorSpace} targetSpace - i.e.  ImageColorSpace.CMYK.
   * @returns {string} targetLabel - Human 'CMYK', 'RGB', and so on.
   * @returns {Array} targetComps - The target color components. A list of numbers.
   * @returns {Array} targetCompsR - The target color comps rounded. A list of numbers.
   * @throws {Error} If missing or undefined parameters.
   * 
   */
  function convertColor(sourceSpace, sourceComps, targetSpace, targetLabel, decimals) {
  
    var functionID = 'colorUtils.convertColor';
  
    try {
  
      if (typeof sourceSpace === 'undefined' || sourceSpace === null) {
        throw new Error('Missing or undefined parameter: sourceSpace');
      }
      if (typeof sourceComps === 'undefined' || sourceComps === null) {
        throw new Error('Missing or undefined parameter: sourceComps');
      }
      if (typeof targetSpace === 'undefined' || targetSpace === null) {
        throw new Error('Missing or undefined parameter: targetSpace');
      }
      if (typeof targetLabel !== 'string') {
        throw new Error('Parameter must be a string: targetLabel');
      }
      if (isNaN(decimals) || decimals < 0 || decimals > 6) {
        throw new Error('Parameter must be a number: 0 <= decimals <= 6');
      }
      
      var targetComps;
      var targetCompsR = [];

      if (sourceSpace === targetSpace) {
        targetComps = sourceComps;
      } else {
        targetComps = app.convertSampleColor(sourceSpace, sourceComps, targetSpace, ColorConvertPurpose.previewpurpose);      
      }
  
      for (var i = 0; i < targetComps.length; i++) {
        var rVal = miscUtils.roundNumber(targetComps[i], decimals);
        targetCompsR.push(rVal);
      }

      var sourceStr = '\nsourceSpace: ' + sourceSpace + '\nsourceComps: ' + sourceComps;
      var labelStr = '\ntargetLabel: ' + targetLabel;
      var targetStr = '\ntargetSpace: ' + targetSpace + '\ntargetComps: ' + targetComps;
      var roundedStr = '\ntargetCompsR: ' + targetCompsR;
      var message = 'SUCCESS ' + functionID + sourceStr + labelStr + targetStr + roundedStr;
      if (DEBUG) alert(message, functionID);

      return {
        targetSpace: targetSpace,
        targetLabel: targetLabel,
        targetComps: targetComps,
        targetCompsR: targetCompsR
      }; 
  
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      throw e;
    }
  }
  
  
  /**
   * Converts a color to CMYK using the ICC profile
   * configured at Edit > Color Settings.
   * @function colorUtils.convertColorToCMYK
   * @param {ImageColorSpace} sourceSpace - i.e.  ImageColorSpace.RGB.
   * @param {Array} sourceComps - The source color components. A list of numbers.
   * @param {number} [decimals=2] - Optional. The number of decimal places for rounding. 
   * @returns {object} An object with the target color space, label, and components.
   * @returns {ImageColorSpace} targetSpace - ImageColorSpace.CMYK.
   * @returns {string} targetLabel - Human 'CMYK'.
   * @returns {Array} targetComps - The target color components. A list of numbers.
   * @returns {Array} targetCompsR - The target color comps rounded. A list of numbers.
   * @throws {Error} If no active document.
   * @throws {Error} If missing or undefined parameters.
   * @example See test_swatchUtils.jsx.
   */
  function convertColorToCMYK(sourceSpace, sourceComps, decimals) {
  
    var functionID = 'colorUtils.convertColorToCMYK';

    try {
    
      if (typeof sourceSpace === 'undefined' || sourceSpace === null) {
        throw new Error('Missing or undefined parameter: sourceSpace');
      }
      if (typeof sourceComps === 'undefined' || sourceComps === null) {
        throw new Error('Missing or undefined parameter: sourceComps');
      }

      var decimalsDefault = 2;
      var decimalsExists = (typeof decimals === 'number') && !isNaN(decimals);
      decimals = decimalsExists ? decimals : decimalsDefault;
      
      var targetSpace = ImageColorSpace.CMYK;
      var targetLabel = 'CMYK';

      var target = convertColor(sourceSpace, sourceComps, targetSpace, targetLabel, decimals);
 
      var message = 'SUCCESS ' + functionID + '\nColor converted to CMYK.';
      if (DEBUG) alert(message, functionID);

      return target;

    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      throw e;
    }
  }


  /**
   * Converts a color to CMYK K% using the ICC profile
   * configured at Edit > Color Settings.
   * @function colorUtils.convertColorToGray
   * @param {ImageColorSpace} sourceSpace - i.e.  ImageColorSpace.CMYK
   * @param {Array} sourceComps - The source color components. A list of numbers.
   * @param {number} [decimals=2] - Optional. The number of decimal places for rounding.
   * @returns {object} An object with the target color space, label, and components.
   * @returns {ImageColorSpace} targetSpace - ImageColorSpace.GrayScale
   * @returns {string} targetLabel - Human 'Gray'.
   * @returns {Array} targetComps - The target color components. A list of numbers.
   * @returns {Array} targetCompsR - The target color comps rounded. A list of numbers. 
   * @throws {Error} If no active document.
   * @throws {Error} If missing or undefined parameters.
   * @example See test_swatchUtils.jsx.
   */
  function convertColorToGray(sourceSpace, sourceComps, decimals) {
  
    var functionID = 'colorUtils.convertColorToGray';
  
    try {
    
      if (typeof sourceSpace === 'undefined' || sourceSpace === null) {
        throw new Error('Missing or undefined parameter: sourceSpace');
      }
      if (typeof sourceComps === 'undefined' || sourceComps === null) {
        throw new Error('Missing or undefined parameter: sourceComps');
      }

      var decimalsDefault = 2;
      var decimalsExists = (typeof decimals === 'number') && !isNaN(decimals);
      decimals = decimalsExists ? decimals : decimalsDefault;

      var targetSpace = ImageColorSpace.GrayScale;
      var targetLabel = 'Gray';

      var target = convertColor(sourceSpace, sourceComps, targetSpace, targetLabel, decimals);
 
      var message = 'SUCCESS ' + functionID + '\nColor converted to Grayscale.';
      if (DEBUG) alert(message, functionID);

      return target;
    
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      throw e;
    }
  }


  /**
   * Converts a color to CIE Lab D50.
   * @function colorUtils.convertColorToLab
   * @param {ImageColorSpace} sourceSpace - i.e.  ImageColorSpace.CMYK
   * @param {Array} sourceComps - The source color components. A list of numbers.
   * @param {number} [decimals=2] - Optional. The number of decimal places for rounding.
   * @returns {object} An object with the target color space, label, and components.
   * @returns {ImageColorSpace} targetSpace - ImageColorSpace.LAB
   * @returns {string} targetLabel - Human 'LAB'.
   * @returns {Array} targetComps - The target color components. A list of numbers.
   * @returns {Array} targetCompsR - The target color comps rounded. A list of numbers. 
   * @throws {Error} If no active document.
   * @throws {Error} If missing or undefined parameters.
   * @example See test_swatchUtils.jsx.
   */
  function convertColorToLab(sourceSpace, sourceComps, decimals) {
  
    var functionID = 'colorUtils.convertColorToLab';

    try {
    
      if (typeof sourceSpace === 'undefined' || sourceSpace === null) {
        throw new Error('Missing or undefined parameter: sourceSpace');
      }
      if (typeof sourceComps === 'undefined' || sourceComps === null) {
        throw new Error('Missing or undefined parameter: sourceComps');
      }

      var decimalsDefault = 2;
      var decimalsExists = (typeof decimals === 'number') && !isNaN(decimals);
      decimals = decimalsExists ? decimals : decimalsDefault;
    
      var targetSpace = ImageColorSpace.LAB;
      var targetLabel = 'LAB';

      var target = convertColor(sourceSpace, sourceComps, targetSpace, targetLabel, decimals);
 
      var message = 'SUCCESS ' + functionID + '\nColor converted to Lab.';
      if (DEBUG) alert(message, functionID);

      return target;
    
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      throw e;
    }
  }


  /**
   * Converts a color to RGB using the ICC profile
   * configured at Edit > Color Settings.
   * @function colorUtils.convertColorToRGB
   * @param {ImageColorSpace} sourceSpace - i.e.  ImageColorSpace.CMYK
   * @param {Array} sourceComps - The source color components. A list of numbers.
   * @param {number} [decimals=0] - Optional. The number of decimal places for rounding.
   * @returns {object} An object with the target color space, label, and components.
   * @returns {ImageColorSpace} targetSpace - ImageColorSpace.RGB
   * @returns {string} targetLabel - Human 'RGB'.
   * @returns {Array} targetComps - The target color components. A list of numbers.
   * @returns {Array} targetCompsR - The target color comps rounded. A list of numbers. 
   * @throws {Error} If no active document.
   * @throws {Error} If missing or undefined parameters.
   * @example See test_swatchUtils.jsx.
   */
  function convertColorToRGB(sourceSpace, sourceComps, decimals) {
  
    var functionID = 'colorUtils.convertColorToRGB';

    try {
    
      if (typeof sourceSpace === 'undefined' || sourceSpace === null) {
        throw new Error('Missing or undefined parameter: sourceSpace');
      }
      if (typeof sourceComps === 'undefined' || sourceComps === null) {
        throw new Error('Missing or undefined parameter: sourceComps');
      }

      var decimalsDefault = 2;
      var decimalsExists = (typeof decimals === 'number') && !isNaN(decimals);
      decimals = decimalsExists ? decimals : decimalsDefault;

      var targetSpace = ImageColorSpace.RGB;
      var targetLabel = 'RGB';

      var target = convertColor(sourceSpace, sourceComps, targetSpace, targetLabel, decimals);
 
      var message = 'SUCCESS ' + functionID + '\nColor converted to RGB.';
      if (DEBUG) alert(message, functionID);

      return target;
    
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      throw e;
    }
  }


  /**
   * Converts a color to RGB and then to HEX using the ICC profile
   * configured at Edit > Color Settings.
   * @function colorUtils.convertColorToHex
   * @param {string} sourceSpace - The source color space.
   * @param {array} sourceComps - The source color components. A list of numbers.
   * @returns {object} An object with the target color space, label, and components.
   * @returns {ImageColorSpace} targetSpace - ImageColorSpace.RGB
   * @returns {string} targetLabel - Human 'HEX'.
   * @returns {Array} targetComps - The target hex value. A list with 1 string.
   * @returns {Array} targetCompsR - The target hex value. A list with 1 string. 
   * @throws {Error} If no active document.
   * @throws {Error} If missing or undefined parameters.
   * @example See test_swatchUtils.jsx.
   */
  function convertColorToHex(sourceSpace, sourceComps) {
  
    var functionID = 'colorUtils.convertColorToHex';
  
    try {

      if (sourceSpace === undefined || sourceSpace === null) {
        throw new Error('Missing or undefined parameter: sourceSpace.');
      }
      if (sourceComps === undefined || sourceComps === null) {
        throw new Error('Missing or undefined parameter: sourceComps.');
      }
      
      var targetSpace = ImageColorSpace.RGB;
      var targetLabel = 'HEX';
      var targetComps = [];
      var rgbComps;

      if (sourceSpace === targetSpace) {
        rgbComps = sourceComps;

      } else {
        var rgb = convertColorToRGB(sourceSpace, sourceComps);
        rgbComps = rgb.targetCompsR;
      }

      var hex = '#';
      
      for (var i = 0; i < rgbComps.length; i++) {
        var comp = rgbComps[i];
        var str = comp.toString(16);
        var upper = str.toUpperCase();
        var result = upper.length == 1 ? '0' + upper : upper;  
        hex += result;
      }
      
      targetComps.push(hex);

      var sourceStr = '\nsourceSpace: ' + sourceSpace + '\nsourceComps: ' + sourceComps;
      var labelStr = '\ntargetLabel: ' + targetLabel;
      var targetStr = '\ntargetSpace: ' + targetSpace + '\ntargetComps: ' + targetComps;
      var roundedStr = '\ntargetCompsR: ' + targetComps;

      var message = 'SUCCESS ' + functionID + sourceStr + labelStr + targetStr + roundedStr;
      if (DEBUG) alert(message, functionID);

      // Match return format of other colors
      return {
        targetSpace: targetSpace,
        targetLabel: targetLabel,
        targetComps: targetComps,
        targetCompsR: targetComps
      };      
    
    } catch (e) {
      e.message = 'ERROR ' + functionID + '\n' + e.message;
      throw e;
    }
  }


  // Expose Methods
  return {
    // Value Checks
    checkValuesCMYK: checkValuesCMYK,
    checkValuesRGB: checkValuesRGB,
    checkValuesLab: checkValuesLab,
    // Process Colors
    makeColorCMYK: makeColorCMYK,
    makeColorGray: makeColorGray,
    makeColorLab: makeColorLab,
    makeColorRGB: makeColorRGB,
    // Spot Colors
    makeSpotCMYK: makeSpotCMYK,
    makeSpotLab: makeSpotLab,
    makeSpotRGB: makeSpotRGB,
    // Color Conversion
    getColorSourceComps: getColorSourceComps,
    convertColorToCMYK: convertColorToCMYK,
    convertColorToGray: convertColorToGray,
    convertColorToLab: convertColorToLab,
    convertColorToRGB: convertColorToRGB,
    convertColorToHex: convertColorToHex
  };

})();


# Adobe Illustrator 2024 Scripting Dictionary

## ScreenMode

The screen mode.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| MULTIWINDOW | readonly | Display multiple windows. | int | 1 |
| DESKTOP | readonly | Full screen with menu bar. | int | 2 |
| FULLSCREEN | readonly | Full screen without menu bar. | int | 3 |

## ColorType

The color model.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| None | readonly | No description available. | int | 6 |
| CMYK | readonly | No description available. | int | 1 |
| GRAY | readonly | No description available. | int | 0 |
| RGB | readonly | No description available. | int | 5 |
| SPOT | readonly | No description available. | int | 3 |
| PATTERN | readonly | No description available. | int | 2 |
| GRADIENT | readonly | No description available. | int | 4 |

## DocumentColorSpace

The color spaces available for documents.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| RGB | readonly | RGB document color space. | int | 1 |
| CMYK | readonly | CMYK document color space. | int | 2 |

## DocumentPresetType

The preset types available for new documents.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| Print | readonly | The default Print document preset. | int | 1 |
| Web | readonly | The default Web document preset. | int | 2 |
| Mobile | readonly | The default Mobile document preset. | int | 3 |
| Video | readonly | The default Video and Film document preset. | int | 4 |
| BasicCMYK | readonly | The default CMYK document preset. | int | 5 |
| BasicRGB | readonly | The default RGB document preset. | int | 6 |

## DocumentRasterResolution

The raster resolutions available when creating a new document.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| ScreenResolution | readonly | Low raster resolution, 72 PPI. | int | 1 |
| MediumResolution | readonly | Medium raster resolution, 150 PPI. | int | 2 |
| HighResolution | readonly | High raster resolution, 300 PPI. | int | 3 |

## DocumentTransparencyGrid

The transparency grid for the new document, in video presets.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| TransparencyGridNone | readonly | No grids. | int | 0 |
| TransparencyGridLight | readonly | Light grid colors. | int | 1 |
| TransparencyGridMedium | readonly | Medium grid colors. | int | 2 |
| TransparencyGridDark | readonly | Dark color grids. | int | 3 |
| TransparencyGridRed | readonly | Red grids. | int | 4 |
| TransparencyGridOrange | readonly | Orange grids. | int | 5 |
| TransparencyGridGreen | readonly | Green grids. | int | 6 |
| TransparencyGridBlue | readonly | Blue grids. | int | 7 |
| TransparencyGridPurple | readonly | Purple grids. | int | 8 |

## DocumentPreviewMode

The preview modes available when creating a new document.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| DefaultPreview | readonly | Default Preview mode. | int | 1 |
| PixelPreview | readonly | Pixel Preview mode. | int | 2 |
| OverprintPreview | readonly | Overprint Preview Mode. | int | 3 |

## DocumentArtboardLayout

The layout of artboards in document.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| GridByRow | readonly | Arrange artboards in Grid by Row pattern. | int | 1 |
| GridByCol | readonly | Arrange artboards in Grid by Column pattern. | int | 2 |
| Row | readonly | Arrange artboards in a single row. | int | 3 |
| Column | readonly | Arrange artboards in a single column. | int | 4 |
| RLGridByRow | readonly | Arrange artboards in Grid by Row pattern from right-to-left. | int | 5 |
| RLGridByCol | readonly | Arrange artboards in Grid by Column pattern from right-to-left. | int | 6 |
| RLRow | readonly | Arrange artboards in a single row from right-to-left. | int | 7 |

## ImageColorSpace

The color space.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| GrayScale | readonly | Gray color space. | int | 1 |
| RGB | readonly | RGB color space. | int | 2 |
| CMYK | readonly | CMYK color space. | int | 3 |
| LAB | readonly | LAB color space. | int | 4 |
| Separation | readonly | Separation color space. | int | 5 |
| DeviceN | readonly | DeviceN color space. | int | 6 |
| Indexed | readonly | Indexed color space. | int | 7 |

## StrokeCap

The stroke cap.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| BUTTENDCAP | readonly | Butted cap. | int | 1 |
| ROUNDENDCAP | readonly | Rounded cap. | int | 2 |
| PROJECTINGENDCAP | readonly | Projecting cap. | int | 3 |

## StrokeJoin

The stroke joint.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| MITERENDJOIN | readonly | Mitered joints. | int | 1 |
| ROUNDENDJOIN | readonly | Rounded joints. | int | 2 |
| BEVELENDJOIN | readonly | Beveled joints. | int | 3 |

## PathPointSelection

The path point selection state.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| NOSELECTION | readonly | Path point not selected. | int | 1 |
| ANCHORPOINT | readonly | Anchor point selected. | int | 2 |
| LEFTDIRECTION | readonly | Left direction point selected. | int | 3 |
| RIGHTDIRECTION | readonly | Right direction point selected. | int | 4 |
| LEFTRIGHTPOINT | readonly | Left and right direction points selected. | int | 5 |

## PointType

The path point type: smooth/corner.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| SMOOTH | readonly | Smooth path point. | int | 1 |
| CORNER | readonly | Corner point. | int | 2 |

## TextType

The type of text art.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| POINTTEXT | readonly | Text from a point. | int | 0 |
| AREATEXT | readonly | Text within an area. | int | 1 |
| PATHTEXT | readonly | Text on a path. | int | 2 |

## TextAntialias

The type of text antialiasing.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| NONE | readonly | Text from a point. | int | 1 |
| SHARP | readonly | Text within an area. | int | 2 |
| CRISP | readonly | Text on a path. | int | 3 |
| STRONG | readonly | Text on a path. | int | 4 |

## GradientType

The gradient type.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| LINEAR | readonly | Linear gradient. | int | 1 |
| RADIAL | readonly | No description available. | int | 2 |

## TextOrientation

The orientation.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| HORIZONTAL | readonly | Horizontal orientation. | int | 0 |
| VERTICAL | readonly | Vertical orientation. | int | 1 |

## CropOptions

The crop style.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| Standard | readonly | Standard crop style. | int | 1 |
| Japanese | readonly | Japanese crop style. | int | 2 |

## RasterLinkState

The raster link state.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| NODATA | readonly | Image data is not set. | int | 1 |
| DATAFROMFILE | readonly | Image data is from the linked file. | int | 2 |
| DATAMODIFIED | readonly | Image data has been modified. | int | 3 |

## TabStopAlignment

The tab alignment.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| Left | readonly | No description available. | int | 0 |
| Center | readonly | No description available. | int | 1 |
| Right | readonly | No description available. | int | 2 |
| Decimal | readonly | No description available. | int | 3 |

## Justification

The paragraph alignment.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| LEFT | readonly | No description available. | int | 0 |
| RIGHT | readonly | No description available. | int | 1 |
| CENTER | readonly | No description available. | int | 2 |
| FULLJUSTIFYLASTLINELEFT | readonly | No description available. | int | 3 |
| FULLJUSTIFYLASTLINERIGHT | readonly | No description available. | int | 4 |
| FULLJUSTIFYLASTLINECENTER | readonly | No description available. | int | 5 |
| FULLJUSTIFY | readonly | No description available. | int | 6 |

## Transformation

The transformation type.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| DOCUMENTORIGIN | readonly | Transform relative to the illustration's page origin. | int | 1 |
| TOPLEFT | readonly | Transform relative to the object's top left corner. | int | 2 |
| LEFT | readonly | Transform relative to the object's left edge. | int | 3 |
| BOTTOMLEFT | readonly | Transform relative to the object's bottom left corner. | int | 4 |
| TOP | readonly | Transform relative to the object's top edge. | int | 5 |
| CENTER | readonly | Transform relative to the object's center. | int | 6 |
| BOTTOM | readonly | Transform relative to the object's bottom edge. | int | 7 |
| TOPRIGHT | readonly | Transform relative to the object's top right corner. | int | 8 |
| RIGHT | readonly | Transform relative to the object's right edge. | int | 9 |
| BOTTOMRIGHT | readonly | Transform relative to the object's bottom right corner. | int | 10 |

## LibraryType

Illustrator library types.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| ILLUSTRATORARTWORK | readonly | Illustrator artwork. | int | 1 |
| SWATCHES | readonly | Illustrator swatches library. | int | 2 |
| BRUSHES | readonly | Illustrator brushes library. | int | 3 |
| GRAPHICSTYLES | readonly | Illustrator graphic styles library. | int | 4 |
| SYMBOLS | readonly | Illustrator symbols library. | int | 5 |

## DocumentType

Savable document types.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| ILLUSTRATOR | readonly | Illustrator file format. | int | 1 |
| EPS | readonly | EPS file format. | int | 2 |
| PDF | readonly | Acrobat PDF file format. | int | 3 |
| FXG | readonly | FXG file format. | int | 4 |

## ExportForScreensScaleType

Export for screens scale type.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| SCALEBYFACTOR | readonly | Scale artwork by factors like 1x, 2x, 3x and so on, where 1x means 72 ppi. | int | 0 |
| SCALEBYWIDTH | readonly | Scale artwork by specifying artwork width in pixels like 100px, 124px etc. Height of the artwork is adjusted automatically to maintain the aspect ratio. | int | 1 |
| SCALEBYHEIGHT | readonly | Scale artwork by specifying artwork height in pixels like 100px, 124px etc. Width of the artwork is adjusted automatically to maintain the aspect ratio. | int | 2 |
| SCALEBYRESOLUTION | readonly | Scale artwork by specifying resolution in ppi like 72 ppi, 100 ppi, 144 ppi etc. | int | 3 |

## ExportForScreensType

Export for screens type.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| SE_JPEG100 | readonly | Export file in JPEG (100% quality) format. | int | 1 |
| SE_JPEG80 | readonly | Export file in JPEG (80% quality) format. | int | 2 |
| SE_JPEG50 | readonly | Export file in JPEG (50% quality) format. | int | 3 |
| SE_JPEG20 | readonly | Export file in JPEG (20% quality) format. | int | 4 |
| SE_SVG | readonly | Export file in SVG format. | int | 5 |
| SE_PNG8 | readonly | Export file in PNG 8-bit format. | int | 6 |
| SE_PNG24 | readonly | Export file in PNG 24-bit format. | int | 7 |
| SE_PDF | readonly | Export file in Acrobat PDF format. | int | 8 |

## ExportType

Export file types.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| JPEG | readonly | JPEG export file format. | int | 1 |
| PHOTOSHOP | readonly | Photoshop export file format. | int | 2 |
| SVG | readonly | SVG export file format. | int | 3 |
| PNG8 | readonly | PNG 8-bit export file format. | int | 4 |
| PNG24 | readonly | PNG 24-bit export file format. | int | 5 |
| GIF | readonly | GIF export file format. | int | 6 |
| AUTOCAD | readonly | AutoCAD export file format. | int | 8 |
| TIFF | readonly | TIFF export file format. | int | 9 |
| WOSVG | readonly | Web Optimized SVG export file format. | int | 10 |

## ColorReductionMethod

Method used to reduce color for PNG8 and GIF export formats.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| SELECTIVE | readonly | No description available. | int | 0x536C7476 |
| ADAPTIVE | readonly | No description available. | int | 0x41647074 |
| PERCEPTUAL | readonly | No description available. | int | 0x50726370 |
| WEB | readonly | No description available. | int | 0x57656220 |

## ColorDitherMethod

Method used to dither colors for PNG8 and GIF export formats.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| NOREDUCTION | readonly | No dithering. | int | 0x4E6F6E65 |
| DIFFUSION | readonly | No description available. | int | 0x4466736E |
| PATTERNDITHER | readonly | No description available. | int | 0x5074726E |
| NOISE | readonly | No description available. | int | 0x424E6F69 |

## Compatibility

The compatibility type.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| ILLUSTRATOR3 | readonly | No description available. | int | 3 |
| JAPANESEVERSION3 | readonly | No description available. | int | 3 |
| ILLUSTRATOR8 | readonly | No description available. | int | 8 |
| ILLUSTRATOR9 | readonly | No description available. | int | 9 |
| ILLUSTRATOR10 | readonly | No description available. | int | 10 |
| ILLUSTRATOR11 | readonly | No description available. | int | 11 |
| ILLUSTRATOR12 | readonly | No description available. | int | 12 |
| ILLUSTRATOR13 | readonly | No description available. | int | 13 |
| ILLUSTRATOR14 | readonly | No description available. | int | 14 |
| ILLUSTRATOR15 | readonly | No description available. | int | 15 |
| ILLUSTRATOR16 | readonly | No description available. | int | 16 |
| ILLUSTRATOR17 | readonly | No description available. | int | 17 |
| ILLUSTRATOR24 | readonly | No description available. | int | 24 |

## PDFXStandard

This provides a means for matching the color characteristics of a PDF document.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| PDFXNONE | readonly | The user isn't complying with any PDF standard. | int | 1 |
| PDFX1A2001 | readonly | Supports only a CMYK and spot color workflow, targeted to a specific output device. | int | 2 |
| PDFX1A2003 | readonly | Supports only a CMYK and spot color workflow, targeted to a specific output device. | int | 3 |
| PDFX32001 | readonly | Supports a color-managed workflow, allowing the use of device-independent color in addition to CMYK and spot colors. | int | 4 |
| PDFX32002 | readonly | Supports a color-managed workflow, allowing the use of device-independent color in addition to CMYK and spot colors. | int | 4 |
| PDFX32003 | readonly | Supports a color-managed workflow, allowing the use of device-independent color in addition to CMYK and spot colors. | int | 5 |
| PDFX42007 | readonly | Supports a color-managed workflow, allowing the use of device-independent color in addition to CMYK and spot colors. | int | 6 |

## PDFCompatibility

The PDF compatibility type.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| ACROBAT4 | readonly | Acrobat version 4. | int | 4 |
| ACROBAT5 | readonly | Acrobat version 5. | int | 5 |
| ACROBAT6 | readonly | Acrobat version 6. | int | 6 |
| ACROBAT7 | readonly | Acrobat version 7. | int | 7 |
| ACROBAT8 | readonly | Acrobat version 8. | int | 8 |

## PhotoshopCompatibility

The Photoshop compatibility type.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| PHOTOSHOP8 | readonly | Photoshop version 8. | int | 1 |
| PHOTOSHOP6 | readonly | Photoshop version 6. | int | 2 |

## CompressionQuality

The compression type.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| None | readonly | Automatic compression. | int | 1 |
| JPEGMINIMUM | readonly | No description available. | int | 3 |
| JPEGLOW | readonly | No description available. | int | 4 |
| JPEGMEDIUM | readonly | No description available. | int | 5 |
| JPEGHIGH | readonly | No description available. | int | 6 |
| JPEGMAXIMUM | readonly | No description available. | int | 7 |
| ZIP4BIT | readonly | No description available. | int | 8 |
| ZIP8BIT | readonly | No description available. | int | 9 |
| AUTOMATICJPEGMINIMUM | readonly | Automatically choose between JPEG and ZIP performing minimum compression depending on images. | int | 10 |
| AUTOMATICJPEGLOW | readonly | Automatic JPEG compression low. | int | 11 |
| AUTOMATICJPEGMEDIUM | readonly | Automatic JPEG compression medium. | int | 12 |
| AUTOMATICJPEGHIGH | readonly | Automatic JPEG compression high. | int | 13 |
| AUTOMATICJPEGMAXIMUM | readonly | Automatic JPEG compression maximum. | int | 14 |
| AUTOMATICJPEG2000MINIMUM | readonly | Automatic JPEG2000 compression minimum. | int | 15 |
| AUTOMATICJPEG2000LOW | readonly | Automatic JPEG2000 compression low. | int | 16 |
| AUTOMATICJPEG2000MEDIUM | readonly | Automatic JPEG2000 compression medium. | int | 17 |
| AUTOMATICJPEG2000HIGH | readonly | Automatic JPEG2000 compression high. | int | 18 |
| AUTOMATICJPEG2000MAXIMUM | readonly | Automatic JPEG2000 compression maximum. | int | 19 |
| AUTOMATICJPEG2000LOSSLESS | readonly | Automatic JPEG2000 compression lossless. | int | 20 |
| JPEG2000MINIMUM | readonly | No description available. | int | 21 |
| JPEG2000LOW | readonly | No description available. | int | 22 |
| JPEG2000MEDIUM | readonly | No description available. | int | 23 |
| JPEG2000HIGH | readonly | No description available. | int | 24 |
| JPEG2000MAXIMUM | readonly | No description available. | int | 25 |
| JPEG2000LOSSLESS | readonly | No description available. | int | 26 |

## ColorConversion

PDF color conversion policy.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| None | readonly | Preserves color data as is. | int | 0 |
| COLORCONVERSIONTODEST | readonly | Converts all colors to the profile selected for Destination. | int | 1 |
| COLORCONVERSIONREPURPOSE | readonly | Preserves color numbers for untagged content in the same color space as the destination profile. Not available with CMS off. | int | 2 |

## ColorDestination

PDF destination profile.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| None | readonly | N/A. | int | 0 |
| COLORDESTINATIONDOCCMYK | readonly | Converts all colors to the profile selected for Destination. | int | 1 |
| COLORDESTINATIONWORKINGCMYK | readonly | Preserves color numbers for untagged content in the same color space as the destination profile. Not available with CMS off. | int | 2 |
| COLORDESTINATIONDOCRGB | readonly | Preserves color numbers for untagged content in the same color space as the destination profile. Not available with CMS off. | int | 3 |
| COLORDESTINATIONWORKINGRGB | readonly | Preserves color numbers for untagged content in the same color space as the destination profile. Not available with CMS off. | int | 4 |
| COLORDESTINATIONPROFILE | readonly | Preserves color numbers for untagged content in the same color space as the destination profile. Not available with CMS off. | int | 5 |

## ColorProfile

PDF ICC profile inclusion.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| None | readonly | All profiles removed (embedProfile == false) | int | 0 |
| INCLUDEALLPROFILE | readonly | Everything gets tagged (embedProfile == true) | int | 1 |
| LEAVEPROFILEUNCHANGED | readonly | Leave tagged items tagged, untagged items untagged. | int | 2 |
| INCLUDERGBPROFILE | readonly | Tag all RGB, leave CMYK unchanged. | int | 3 |
| INCLUDEDESTPROFILE | readonly | Everything ends up tagged with the destination profile. | int | 4 |

## MonochromeCompression

The monochrome compression type.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| None | readonly | Automatic compression. | int | 0 |
| CCIT3 | readonly | CCITT Group 3 compression. | int | 1 |
| CCIT4 | readonly | CCITT Group 4 compression. | int | 2 |
| MONOZIP | readonly | ZIP compression. | int | 3 |
| RUNLENGTH | readonly | RLE compression. | int | 4 |

## PDFTrimMarkWeight

Pdf trim mark weight options.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| TRIMMARKWEIGHT0125 | readonly | No description available. | int | 1 |
| TRIMMARKWEIGHT025 | readonly | No description available. | int | 2 |
| TRIMMARKWEIGHT05 | readonly | No description available. | int | 3 |

## PDFOverprint

Pdf overprint options.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| PRESERVEPDFOVERPRINT | readonly | Preserve overprint. | int | 1 |
| DISCARDPDFOVERPRINT | readonly | Discard overprint. | int | 2 |

## PDFPrintAllowedEnum

Pdf print permissions.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| PRINT128NONE | readonly | Printing allowed none - 128bit. | int | 1 |
| PRINT128LOWRESOLUTION | readonly | Print allowed only in low resolution - 128bit. | int | 2 |
| PRINT128HIGHRESOLUTION | readonly | Print high resolution allowed - 128bit. | int | 3 |
| PRINT40NONE | readonly | Printing allowed none - 40bit. | int | 4 |
| PRINT40HIGHRESOLUTION | readonly | Print high resolution allowed - 40bit. | int | 5 |

## PDFChangesAllowedEnum

Options available for making changes to a pdf document.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| CHANGE128NONE | readonly | No changes allowed - 128bit. | int | 1 |
| CHANGE128EDITPAGE | readonly | Editing page allowed - 128bit. | int | 2 |
| CHANGE128FILLFORM | readonly | Filling in of form field and signing allowed - 128bit. | int | 3 |
| CHANGE128COMMENTING | readonly | Comment allowed - 128bit. | int | 4 |
| CHANGE128ANYCHANGES | readonly | Any changes allowed except extracting of pages- 128bit. | int | 5 |
| CHANGE40NONE | readonly | No changes allowed - 40bit. | int | 6 |
| CHANGE40COMMENTING | readonly | Comment allowed - 40bit. | int | 7 |
| CHANGE40PAGELAYOUT | readonly | Page layout allowed - 40bit. | int | 8 |
| CHANGE40ANYCHANGES | readonly | Any changes allowed except extracting of pages- 40bit. | int | 9 |

## DownsampleMethod

The resample type.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| NODOWNSAMPLE | readonly | Downsampling. | int | 0 |
| AVERAGEDOWNSAMPLE | readonly | Average Downsampling. | int | 1 |
| SUBSAMPLE | readonly | Subsampling. | int | 2 |
| BICUBICDOWNSAMPLE | readonly | Bicubic Downsampling. | int | 3 |

## EPSPreview

The preview type.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| None | readonly | No preview. | int | 1 |
| BWMACINTOSH | readonly | Black and white Macintosh preview. | int | 2 |
| COLORMACINTOSH | readonly | Color Macintosh preview. | int | 3 |
| BWTIFF | readonly | Black and white PC preview. | int | 4 |
| COLORTIFF | readonly | Color PC preview. | int | 6 |
| TRANSPARENTCOLORTIFF | readonly | Transparent color PC preview (8 or later) | int | 5 |

## EPSPostScriptLevelEnum

The PostScript levels available when saving EPS files.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| LEVEL2 | readonly | PostScript Level 2. | int | 2 |
| LEVEL3 | readonly | PostScript Level 3. | int | 3 |

## PrinterPostScriptLevelEnum

The PostScript levels supported by various printers.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| PSLEVEL1 | readonly | PostScript Level 1. | int | 1 |
| PSLEVEL2 | readonly | PostScript Level 2. | int | 2 |
| PSLEVEL3 | readonly | PostScript Level 3. | int | 3 |

## SaveOptions

The options that may be applied when saving a file.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| SAVECHANGES | readonly | Save changes. | int | 1 |
| DONOTSAVECHANGES | readonly | Do not save changes. | int | 2 |
| PROMPTTOSAVECHANGES | readonly | Ask the user whether to save. | int | 3 |

## RulerUnits

No description available.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| Unknown | readonly | Ruler units are unknown. | int | 1 |
| Inches | readonly | Ruler units are unknown. | int | 2 |
| Centimeters | readonly | Ruler units are measured in centimeters. | int | 3 |
| Points | readonly | Ruler units are measured in points. | int | 4 |
| Picas | readonly | Ruler units are measured in picas. | int | 5 |
| Millimeters | readonly | Ruler units are measured in millimeters. | int | 6 |
| Qs | readonly | Ruler units are measured in Qs. | int | 7 |
| Pixels | readonly | Ruler units are measured in pixels. | int | 8 |
| FeetInches | readonly | Ruler units are measured in pixels. | int | 9 |
| Meters | readonly | Ruler units are measured in pixels. | int | 10 |
| Yards | readonly | Ruler units are measured in pixels. | int | 11 |
| Feet | readonly | Ruler units are measured in pixels. | int | 12 |

## BlendModes

Blend modes used when compositing an object.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| NORMAL | readonly | No description available. | int | 0 |
| MULTIPLY | readonly | No description available. | int | 1 |
| SCREEN | readonly | No description available. | int | 2 |
| OVERLAY | readonly | No description available. | int | 3 |
| SOFTLIGHT | readonly | No description available. | int | 4 |
| HARDLIGHT | readonly | No description available. | int | 5 |
| COLORDODGE | readonly | No description available. | int | 6 |
| COLORBURN | readonly | No description available. | int | 7 |
| DARKEN | readonly | No description available. | int | 8 |
| LIGHTEN | readonly | No description available. | int | 9 |
| DIFFERENCE | readonly | No description available. | int | 10 |
| EXCLUSION | readonly | No description available. | int | 11 |
| HUE | readonly | No description available. | int | 12 |
| SATURATIONBLEND | readonly | No description available. | int | 13 |
| COLORBLEND | readonly | No description available. | int | 14 |
| LUMINOSITY | readonly | No description available. | int | 15 |

## KnockoutState

Knockout state of a page item.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| Unknown | readonly | Unknown/uninitialized knockout state. | int | -1 |
| DISABLED | readonly | Knockout off. | int | 0 |
| ENABLED | readonly | Knockout off. | int | 1 |
| INHERITED | readonly | Knockout state inherited from group? | int | 2 |

## ZOrderMethod

How to re-arrange the art item.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| BRINGTOFRONT | readonly | Move art to front of it's group or layer. | int | 1 |
| BRINGFORWARD | readonly | Move art one step forward in it's group or layer. | int | 2 |
| SENDBACKWARD | readonly | Move art one step backwards in it's group or layer. | int | 3 |
| SENDTOBACK | readonly | Move art to back of it's group or layer. | int | 4 |

## SVGDTDVersion

The version of the SVG DTD.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| SVG1_0 | readonly | SVG 1.0. | int | 1 |
| SVG1_1 | readonly | SVG 1.1. | int | 2 |
| SVGTINY1_1 | readonly | SVG Tiny 1.1. | int | 3 |
| SVGTINY1_1PLUS | readonly | SVG Tiny 1.1 Plus. | int | 4 |
| SVGBASIC1_1 | readonly | SVG Basic 1.1. | int | 5 |
| SVGTINY1_2 | readonly | SVG Tiny 1.2. | int | 6 |

## SVGFontType

What font type to include with the file?

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| SVGFONT | readonly | No description available. | int | 2 |
| OUTLINEFONT | readonly | No description available. | int | 3 |

## SVGFontSubsetting

What fonts to include with the file?

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| None | readonly | Use system fonts. | int | 1 |
| GLYPHSUSED | readonly | No description available. | int | 2 |
| COMMONENGLISH | readonly | No description available. | int | 3 |
| GLYPHSUSEDPLUSENGLISH | readonly | No description available. | int | 4 |
| COMMONROMAN | readonly | No description available. | int | 5 |
| GLYPHSUSEDPLUSROMAN | readonly | No description available. | int | 6 |
| ALLGLYPHS | readonly | No description available. | int | 7 |

## SVGDocumentEncoding

No description available.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| ASCII | readonly | ISO 8859-1. | int | 1 |
| UTF8 | readonly | No description available. | int | 2 |
| UTF16 | readonly | No description available. | int | 3 |

## SVGCSSPropertyLocation

No description available.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| ENTITIES | readonly | Style attributes with entity reference. | int | 2 |
| STYLEATTRIBUTES | readonly | No description available. | int | 1 |
| STYLEELEMENTS | readonly | No description available. | int | 3 |
| PRESENTATIONATTRIBUTES | readonly | No description available. | int | 4 |

## SVGIdType

Type of SVG Id.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| SVGIDMINIMAL | readonly | Style attributes with entity reference. | int | 0 |
| SVGIDREGULAR | readonly | No description available. | int | 1 |
| SVGIDUNIQUE | readonly | No description available. | int | 2 |

## RasterImageLocation

Decide where the raster images will be stored.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| EMBED | readonly | Embed the raster images in the svg file. | int | 0 |
| LINK | readonly | No description available. | int | 1 |
| PRESERVE | readonly | No description available. | int | 2 |

## OutputFlattening

How should transparency be flattened for pre-AI9 file formats.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| PRESERVEPATHS | readonly | Discard transparency. | int | 0 |
| PRESERVEAPPEARANCE | readonly | No description available. | int | 1 |

## ColorModel

Color model of the custom color.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| REGISTRATION | readonly | Registration color (prints on in all separations) | int | 0 |
| PROCESS | readonly | Process color (mixed ink) | int | 1 |
| SPOT | readonly | Spot color (separate ink) | int | 2 |

## SpotColorKind

Custom color kind of the spot color.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| SPOTCMYK | readonly | Solid ink, expressed in four CMYK values. | int | 0 |
| SPOTRGB | readonly | Solid color, expressed as three RGB values. | int | 1 |
| SPOTLAB | readonly | Lab color. Only valid for spot colors. | int | 2 |

## VariableKind

No description available.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| Unknown | readonly | No description available. | int | 1 |
| VISIBILITY | readonly | No description available. | int | 2 |
| TEXTUAL | readonly | No description available. | int | 3 |
| IMAGE | readonly | No description available. | int | 4 |
| GRAPH | readonly | No description available. | int | 5 |

## AutoCADExportFileFormat

No description available.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| DXF | readonly | No description available. | int | 0 |
| DWG | readonly | No description available. | int | 1 |

## AutoCADCompatibility

No description available.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| AutoCADRelease13 | readonly | No description available. | int | 0 |
| AutoCADRelease14 | readonly | No description available. | int | 1 |
| AutoCADRelease15 | readonly | No description available. | int | 2 |
| AutoCADRelease18 | readonly | No description available. | int | 3 |
| AutoCADRelease21 | readonly | No description available. | int | 4 |
| AutoCADRelease24 | readonly | No description available. | int | 5 |

## AutoCADUnit

No description available.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| Points | readonly | No description available. | int | 0 |
| Picas | readonly | No description available. | int | 1 |
| Inches | readonly | No description available. | int | 2 |
| Millimeters | readonly | No description available. | int | 3 |
| Centimeters | readonly | No description available. | int | 4 |
| Pixels | readonly | No description available. | int | 5 |

## AutoCADColors

No description available.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| Max8Colors | readonly | No description available. | int | 0 |
| Max16Colors | readonly | No description available. | int | 1 |
| Max256Colors | readonly | No description available. | int | 2 |
| TrueColors | readonly | No description available. | int | 3 |

## AutoCADRasterFormat

No description available.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| PNG | readonly | No description available. | int | 0 |
| JPEG | readonly | No description available. | int | 1 |

## AutoCADExportOption

No description available.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| PreserveAppearance | readonly | No description available. | int | 0 |
| MaximumEditability | readonly | No description available. | int | 1 |

## AutoCADGlobalScaleOption

No description available.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| OriginalSize | readonly | No description available. | int | 0 |
| FitArtboard | readonly | No description available. | int | 1 |
| ScaleByValue | readonly | No description available. | int | 2 |

## TIFFByteOrder

Byte Order of TIFF file.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| IBMPC | readonly | No description available. | int | 0 |
| MACINTOSH | readonly | No description available. | int | 1 |

## UserInteractionLevel

COM user interaction enumeration.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| DONTDISPLAYALERTS | readonly | No description available. | int | -1 |
| DISPLAYALERTS | readonly | No description available. | int | 2 |

## PolarityValues

No description available.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| POSITIVE | readonly | No description available. | int | 1 |
| NEGATIVE | readonly | No description available. | int | -1 |

## JavaScriptExecutionMode

When should a JavaScript debugger be shown.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| never | readonly | Never show the JavaScript debugger. Treat runtime errors by throwing a JavaScript exceptions. | int | 1 |
| OnRuntimeError | readonly | Show the JavaScript debugger is a runtime error occurs. | int | 2 |
| BeforeRunning | readonly | Show the JavaScript debugger at the first line of the JavaScript. | int | 3 |

## PrintArtworkDesignation

The artwork layers/objects to be printed.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| VISIBLEPRINTABLELAYERS | readonly | Print visible printable layers. | int | 0 |
| VISIBLELAYERS | readonly | Print visible layers. | int | 1 |
| ALLLAYERS | readonly | Print all layers. | int | 2 |

## PrintingBounds

The printing bounds type.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| ARTBOARDBOUNDS | readonly | Use artboard bounds. | int | 0 |
| ARTWORKBOUNDS | readonly | Use artwork bounds. | int | 1 |
| CROPBOUNDS | readonly | Use crop bounds. | int | 2 |

## PrintColorSeparationMode

The color separation mode.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| COMPOSITE | readonly | The composite mode. | int | 0 |
| HOSTBASEDSEPARATION | readonly | The host based color separation mode. | int | 1 |
| INRIPSEPARATION | readonly | The InRIP color separation mode. | int | 2 |

## PrintOrientation

The artwork printing orientation.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| PORTRAIT | readonly | Portrait. | int | 0 |
| LANDSCAPE | readonly | Landscape. | int | 1 |
| REVERSEPORTRAIT | readonly | Reverse portrait. | int | 2 |
| REVERSELANDSCAPE | readonly | Reverse landscape. | int | 3 |
| AUTOROTATE | readonly | Auto Rotate. | int | 4 |

## PrintPosition

The artwork printing position on media.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| TRANSLATETOPLEFT | readonly | Translate to the top left of media. | int | 1 |
| TRANSLATETOP | readonly | Translate to the top center of media. | int | 2 |
| TRANSLATETOPRIGHT | readonly | Translate to the top right of media. | int | 3 |
| TRANSLATELEFT | readonly | Translate to the left center of media. | int | 4 |
| TRANSLATECENTER | readonly | Translate to the center of media. | int | 5 |
| TRANSLATERIGHT | readonly | Translate to the right center of media. | int | 6 |
| TRANSLATEBOTTOMLEFT | readonly | Translate to the bottom left of media. | int | 7 |
| TRANSLATEBOTTOM | readonly | Translate to the bottom center of media. | int | 8 |
| TRANSLATEBOTTOMRIGHT | readonly | Translate to the bottom right of media. | int | 9 |

## PrintTiling

The page tiling type.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| TILESINGLEFULLPAGE | readonly | Tile single full page. | int | 0 |
| TILEFULLPAGES | readonly | Tile full pages. | int | 1 |
| TILEIMAGEABLEAREAS | readonly | Tile imageable areas. | int | 2 |

## PageMarksTypes

The page marks style type.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| Roman | readonly | Roman page marks style. | int | 0 |
| Japanese | readonly | Japanese page marks style. | int | 1 |

## PrintFontDownloadMode

The printer font download mode.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| DOWNLOADNONE | readonly | Download none. | int | 0 |
| DOWNLOADSUBSET | readonly | Download subset. | int | 1 |
| DOWNLOADCOMPLETE | readonly | Download complete. | int | 2 |

## FontSubstitutionPolicy

The font substitution policy.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| SUBSTITUTEOBLIQUE | readonly | Substitute oblique font. | int | 0 |
| SUBSTITUTETINT | readonly | Substitute tint font. | int | 1 |
| SUBSTITUTEDEVICE | readonly | Substitute device font. | int | 2 |

## PostScriptImageCompressionType

The PostScript image compression type.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| IMAGECOMPRESSIONNONE | readonly | No image compression. | int | 0 |
| RLE | readonly | RLE image compression. | int | 1 |
| JPEG | readonly | JPEG image compression. | int | 2 |

## PrintColorProfile

The color profile type.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| OLDSTYLEPROFILE | readonly | Use old style AI color profile. | int | 0 |
| SOURCEPROFILE | readonly | Same as source color profile. | int | 1 |
| PRINTERPROFILE | readonly | Same as printer color profile. | int | 2 |
| CUSTOMPROFILE | readonly | Use custom color profile. | int | 3 |

## PrintColorIntent

The color intent type.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| PERCEPTUALINTENT | readonly | Perceptual color intent. | int | 0 |
| SATURATIONINTENT | readonly | Saturation color intent. | int | 1 |
| RELATIVECOLORIMETRIC | readonly | Relative colorimetric. | int | 2 |
| ABSOLUTECOLORIMETRIC | readonly | Absolute colorimetric. | int | 3 |

## PrinterTypeEnum

The printer type.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| Unknown | readonly | Unknown printer type. | int | 0 |
| POSTSCRIPTPRINTER | readonly | PostScript printer. | int | 1 |
| NONPOSTSCRIPTPRINTER | readonly | Non PostScript printer. | int | 2 |

## PrinterColorMode

The printer color mode.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| COLORPRINTER | readonly | Color printer. | int | 0 |
| GRAYSCALEPRINTER | readonly | Grayscale printer. | int | 1 |
| BLACKANDWHITEPRINTER | readonly | Black and white printer. | int | 2 |

## InkPrintStatus

The ink printing status.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| DISABLEINK | readonly | Disable the ink during print. | int | 0 |
| ENABLEINK | readonly | Enable the ink during print. | int | 1 |
| CONVERTINK | readonly | Convert to process color during print. | int | 2 |

## InkType

The ink type.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| CYANINK | readonly | Cyan color ink. | int | 0 |
| MAGENTAINK | readonly | Magenta color ink. | int | 1 |
| YELLOWINK | readonly | Yellow color ink. | int | 2 |
| BLACKINK | readonly | Black color ink. | int | 3 |
| CUSTOMINK | readonly | Custom color ink. | int | 4 |

## TrappingType

The trapping type.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| NORMALTRAPPING | readonly | Normal trapping type. | int | 0 |
| TRANSPARENT | readonly | Transparent trapping type. | int | 1 |
| OPAQUE | readonly | Opaque trapping type. | int | 2 |
| IGNOREOPAQUE | readonly | Ignore opaque trapping type. | int | 3 |

## AutoKernType

The auto kern type.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| NOAUTOKERN | readonly | No auto kerning. | int | 0 |
| AUTO | readonly | Auto kerning. | int | 1 |
| OPTICAL | readonly | Optical kerning. | int | 2 |
| METRICSROMANONLY | readonly | Metrics roman only. | int | 3 |

## AutoLeadingType

The auto leading type.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| BOTTOMTOBOTTOM | readonly | Roman leading type. | int | 0 |
| TOPTOTOP | readonly | Japanese leading type. | int | 1 |

## CaseChangeType

The case change type.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| UPPERCASE | readonly | Change to upper case. | int | 0 |
| LOWERCASE | readonly | Change to lower case. | int | 1 |
| TITLECASE | readonly | Change to title case. | int | 2 |
| SENTENCECASE | readonly | Change to sentence case. | int | 3 |

## FontCapsOption

The font capitalization option.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| NORMALCAPS | readonly | Normal caps. | int | 0 |
| SMALLCAPS | readonly | Small caps. | int | 1 |
| ALLCAPS | readonly | All caps. | int | 2 |
| ALLSMALLCAPS | readonly | All small caps. | int | 3 |

## FontBaselineOption

The font baseline option.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| NORMALBASELINE | readonly | Normal baseline. | int | 0 |
| SUPERSCRIPT | readonly | Fauxed superscript baseline. | int | 1 |
| SUBSCRIPT | readonly | Fauxed subscript baseline. | int | 2 |

## FontOpenTypePositionOption

The OpenType font position option.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| OPENTYPEDEFAULT | readonly | Default position. | int | 0 |
| OPENTYPESUPERSCRIPT | readonly | OpenType superscript position. | int | 1 |
| OPENTYPESUBSCRIPT | readonly | OpenType subscript position. | int | 2 |
| NUMERATOR | readonly | OpenType numerator position. | int | 3 |
| DENOMINATOR | readonly | OpenType denominator position. | int | 4 |

## FigureStyleType

The figure style type.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| DEFAULTFIGURESTYLE | readonly | Default figure style. | int | 0 |
| TABULAR | readonly | Tabular lining style. | int | 1 |
| PROPORTIONALOLDSTYLE | readonly | Proportional oldstyle. | int | 2 |
| PROPORTIONAL | readonly | Proportional lining style. | int | 3 |
| TABULAROLDSTYLE | readonly | Tabular oldstyle. | int | 4 |

## BaselineDirectionType

The baseline direction type.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| Standard | readonly | No description available. | int | 1 |
| VerticalRotated | readonly | No description available. | int | 2 |
| TateChuYoko | readonly | No description available. | int | 3 |

## LanguageType

The language of text.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| ENGLISH | readonly | No description available. | int | 0 |
| FINNISH | readonly | No description available. | int | 1 |
| STANDARDFRENCH | readonly | No description available. | int | 2 |
| CANADIANFRENCH | readonly | No description available. | int | 3 |
| STANDARDGERMAN | readonly | No description available. | int | 4 |
| OLDGERMAN | readonly | No description available. | int | 5 |
| SWISSGERMAN | readonly | No description available. | int | 6 |
| ITALIAN | readonly | No description available. | int | 7 |
| BOKMALNORWEGIAN | readonly | No description available. | int | 8 |
| NYNORSKNORWEGIAN | readonly | Nynorsk Norwegian. | int | 9 |
| STANDARDPORTUGUESE | readonly | No description available. | int | 10 |
| BRAZILLIANPORTUGUESE | readonly | No description available. | int | 11 |
| SPANISH | readonly | No description available. | int | 12 |
| SWEDISH | readonly | No description available. | int | 13 |
| UKENGLISH | readonly | No description available. | int | 14 |
| DUTCH | readonly | No description available. | int | 15 |
| DANISH | readonly | No description available. | int | 16 |
| CATALAN | readonly | No description available. | int | 17 |
| RUSSIAN | readonly | No description available. | int | 18 |
| UKRANIAN | readonly | No description available. | int | 19 |
| BULGARIAN | readonly | No description available. | int | 20 |
| SERBIAN | readonly | No description available. | int | 21 |
| CZECH | readonly | No description available. | int | 22 |
| POLISH | readonly | No description available. | int | 23 |
| RUMANIAN | readonly | No description available. | int | 24 |
| GREEK | readonly | No description available. | int | 25 |
| TURKISH | readonly | No description available. | int | 26 |
| ICELANDIC | readonly | No description available. | int | 27 |
| HUNGARIAN | readonly | No description available. | int | 28 |
| CHINESE | readonly | No description available. | int | 29 |
| JAPANESE | readonly | No description available. | int | 30 |
| ARABIC | readonly | No description available. | int | 39 |
| FARSI | readonly | No description available. | int | 41 |
| GERMAN2006REFORM | readonly | No description available. | int | 42 |
| DUTCH2005REFORM | readonly | No description available. | int | 43 |
| SWISSGERMAN2006REFORM | readonly | No description available. | int | 44 |
| HINDI | readonly | No description available. | int | 49 |
| MARATHI | readonly | No description available. | int | 50 |
| BENGALIINDIA | readonly | No description available. | int | 51 |
| PUNJABI | readonly | No description available. | int | 52 |
| GUJARATI | readonly | No description available. | int | 53 |
| ORIYA | readonly | No description available. | int | 54 |
| TAMIL | readonly | No description available. | int | 55 |
| TELUGU | readonly | No description available. | int | 56 |
| KANNADA | readonly | No description available. | int | 57 |
| MALAYALAM | readonly | No description available. | int | 58 |

## AlternateGlyphsForm

The alternate glyphs form of text.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| DEFAULTFORM | readonly | No description available. | int | 0 |
| TRADITIONAL | readonly | No description available. | int | 1 |
| EXPERT | readonly | No description available. | int | 2 |
| JIS78FORM | readonly | No description available. | int | 3 |
| JIS83FORM | readonly | No description available. | int | 4 |
| HALFWIDTH | readonly | No description available. | int | 5 |
| THIRDWIDTH | readonly | No description available. | int | 6 |
| QUARTERWIDTH | readonly | No description available. | int | 7 |
| FULLWIDTH | readonly | No description available. | int | 8 |
| PROPORTIONALWIDTH | readonly | No description available. | int | 9 |
| JIS90FORM | readonly | No description available. | int | 10 |
| JIS04FORM | readonly | No description available. | int | 11 |

## StyleRunAlignmentType

The style run alignment.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| bottom | readonly | No description available. | int | 0 |
| icfBottom | readonly | No description available. | int | 1 |
| ROMANBASELINE | readonly | No description available. | int | 2 |
| center | readonly | No description available. | int | 3 |
| icfTop | readonly | No description available. | int | 4 |
| top | readonly | No description available. | int | 5 |

## WariChuJustificationType

The Wari-Chu alignment type.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| Left | readonly | No description available. | int | 0 |
| Right | readonly | No description available. | int | 1 |
| Center | readonly | No description available. | int | 2 |
| WARICHUFULLJUSTIFYLASTLINELEFT | readonly | No description available. | int | 3 |
| WARICHUFULLJUSTIFYLASTLINERIGHT | readonly | No description available. | int | 4 |
| WARICHUFULLJUSTIFYLASTLINECENTER | readonly | No description available. | int | 5 |
| WARICHUFULLJUSTIFY | readonly | No description available. | int | 6 |
| WARICHUAUTOJUSTIFY | readonly | No description available. | int | 7 |

## KashidasType

The kashida type constants.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| DEFAULT_KASHIDAS | readonly | No description available. | int | 0 |
| KASHIDAS_ON | readonly | No description available. | int | 0 |
| KASHIDAS_OFF | readonly | No description available. | int | 1 |

## DirOverrideType

Direction override type constants.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| DEFAULT_DIRECTION | readonly | No description available. | int | 0 |
| LEFT_TO_RIGHT_DIRECTION | readonly | No description available. | int | 1 |
| RIGHT_TO_LEFT_DIRECTION | readonly | No description available. | int | 2 |

## DigitSetType

Digit set type constants.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| DEFAULT_DIGITS | readonly | No description available. | int | 0 |
| ARABIC_DIGITS | readonly | No description available. | int | 1 |
| HINDI_DIGITS | readonly | No description available. | int | 2 |
| FARSI_DIGITS | readonly | No description available. | int | 3 |

## DiacVPosType

Diacritic vertical position type constants.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| DEFAULT_POSITION | readonly | No description available. | int | 0 |
| LOOSE_POSITION | readonly | No description available. | int | 1 |
| MEDIUM_POSITION | readonly | No description available. | int | 2 |
| TIGHT_POSITION | readonly | No description available. | int | 3 |
| OPENTYPE_POSITION | readonly | No description available. | int | 4 |

## KashidaWidthType

The kashida width type constants.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| kashidaNone | readonly | No description available. | int | 0 |
| kashidaSmall | readonly | No description available. | int | 1 |
| kashidaMedium | readonly | No description available. | int | 2 |
| kashidaLong | readonly | No description available. | int | 3 |
| kashidaStylistic | readonly | No description available. | int | 4 |

## ComposerEngineType

The composer type constants.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| latinCJKComposer | readonly | No description available. | int | 0 |
| optycaComposer | readonly | No description available. | int | 1 |
| adornment | readonly | No description available. | int | 2 |

## ParagraphDirectionType

The composer type constants.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| LEFT_TO_RIGHT_DIRECTION | readonly | No description available. | int | 0 |
| RIGHT_TO_LEFT_DIRECTION | readonly | No description available. | int | 1 |

## BurasagariTypeEnum

The Burasagari type.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| None | readonly | No description available. | int | 0 |
| Standard | readonly | No description available. | int | 1 |
| Forced | readonly | No description available. | int | 2 |

## KinsokuOrderEnum

The preferred Kinsoku order.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| PUSHIN | readonly | No description available. | int | 0 |
| PUSHOUTFIRST | readonly | No description available. | int | 1 |
| PUSHOUTONLY | readonly | No description available. | int | 2 |

## PDFBoxType

Crop box.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| PDFARTBOX | readonly | Crop to ArtBox. The art box defines the extent of the page's meaningful content (including potential white space) as intended by the page's creator. | int | 0 |
| PDFCROPBOX | readonly | Crop to CropBox. The crop box is the region of the page to display and to print. | int | 1 |
| PDFTRIMBOX | readonly | Crop to TrimBox. The trim box specifies the positioning of the page's content within the imposition. | int | 2 |
| PDFBLEEDBOX | readonly | Crop to BleedBox. The bleed box defines the region to which the contents of the page should be clipped when output in a production environment. | int | 3 |
| PDFMEDIABOX | readonly | Crop to MediaBox. The media box is a natural size of the page. For example, the dimensions of A4 sheet of paper. | int | 4 |
| PDFBOUNDINGBOX | readonly | Crop to Bounding Box. The bounding box is the rectangle that encloses all text, graphics, and images on the page. | int | 5 |

## TracingMethodType

The tracing method: abutting and overlapping.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| TRACINGMETHODABUTTING | readonly | Tracing abutting method. | int | 0 |
| TRACINGMETHODOVERLAPPING | readonly | Tracing overlapping method. | int | 1 |

## TracingModeType

The tracing mode: color, grayscale, black and white.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| TRACINGMODECOLOR | readonly | Color tracing mode. | int | 0 |
| TRACINGMODEGRAY | readonly | Grayscale tracing mode. | int | 1 |
| TRACINGMODEBLACKANDWHITE | readonly | Black and white tracing mode. | int | 2 |

## TracingColorType

The input color type Full Color or Limited colors.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| TRACINGLIMITEDCOLOR | readonly | Use Limited colors for Tracing. | int | 0 |
| TRACINGFULLCOLOR | readonly | Use Full colors for Tracing. | int | 1 |

## ViewType

Controls the type of vector view.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| TRACINGVIEWVECTORTRACINGRESULT | readonly | View artwork. | int | 0 |
| TRACINGVIEWVECTOROUTLINESWITHTRACING | readonly | View paths and transparent fills. | int | 1 |
| TRACINGVIEWVECTOROUTLINES | readonly | View just the paths. | int | 2 |
| TRACINGVIEWVECTORWITHTRANSPARENTIMAGE | readonly | View Outlines with Transparent Image. | int | 3 |
| TRACINGVIEWIMAGE | readonly | View Source Image. | int | 4 |

## RasterizationColorModel

Controls the color model for the rasterization.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| DEFAULTCOLORMODEL | readonly | Rasterize in the default document color space. | int | 1 |
| GRAYSCALE | readonly | Rasterize as grayscale image. | int | 2 |
| BITMAP | readonly | Rasterize as 1-bit bitmap. | int | 3 |

## AntiAliasingMethod

Controls the type of antialiasing method used in the rasterization.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| None | readonly | No anti-aliasing allowed. | int | 0 |
| ARTOPTIMIZED | readonly | Optimize for the art object. | int | 1 |
| TYPEOPTIMIZED | readonly | Optimize for the type object. | int | 2 |

## ColorConvertPurpose

Denotes the purpose of color conversion using ConvertSmapleColor method.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| defaultpurpose | readonly | Do standard conversion, without black preservation. | int | 0 |
| previewpurpose | readonly | Conversion options appropriate to creating an image for screen display. | int | 1 |
| exportpurpose | readonly | Conversion options appropriate to creating an image for print or export. | int | 2 |
| dummypurpose | readonly | Dummy option. | int | 4 |

## FXGVersion

The FXG file format version.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| VERSION1PT0 | readonly | FXG version 1.0. | int | 1 |
| VERSION2PT0 | readonly | FXG version 2.0. | int | 2 |

## FiltersPreservePolicy

Filters preserve policy used by FXG file format.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| EXPANDFILTERS | readonly | Preserve the appearance of filters by expanding it. | int | 1 |
| RASTERIZEFILTERS | readonly | Preserve the appearance of filters by rasterizing it. | int | 2 |
| KEEPFILTERSEDITABLE | readonly | Preserve the editability of filters. | int | 3 |

## TextPreservePolicy

Text preserve policy used by FXG file format.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| OUTLINETEXT | readonly | Preserve the appearance of text by outlining it. | int | 1 |
| RASTERIZETEXT | readonly | Preserve the appearance of text by rasterizing it. | int | 2 |
| KEEPTEXTEDITABLE | readonly | Preserve the editability of text. | int | 3 |
| AUTOMATICALLYCONVERTTEXT | readonly | Automatically convert text. | int | 4 |

## GradientsPreservePolicy

Gradients preserve policy used by FXG file format.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| KEEPGRADIENTSEDITABLE | readonly | Preserve the editability of gradients. | int | 3 |
| AUTOMATICALLYCONVERTGRADIENTS | readonly | Automatically Convert Gradients. | int | 4 |

## BlendsExpandPolicy

Blends Expand policy used by FXG file format.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| AUTOMATICALLYCONVERTBLENDS | readonly | Automatically Convert Blends. | int | 1 |
| RASTERIZEBLENDS | readonly | Expand Blends by Rasterizing. | int | 2 |

## CoordinateSystem

Coordinate system used by Illustrator.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| DOCUMENTCOORDINATESYSTEM | readonly | Document coordinate system. | int | 0 |
| ARTBOARDCOORDINATESYSTEM | readonly | Artboard coordinate system. | int | 1 |

## SymbolRegistrationPoint

The symbol registration point.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| SYMBOLTOPLEFTPOINT | readonly | Top left point of symbol bounding box. | int | 1 |
| SYMBOLTOPMIDDLEPOINT | readonly | Top middle point of symbol bounding box. | int | 2 |
| SYMBOLTOPRIGHTPOINT | readonly | Top right point of symbol bounding box. | int | 3 |
| SYMBOLMIDDLELEFTPOINT | readonly | Middle left point of symbol bounding box. | int | 4 |
| SYMBOLCENTERPOINT | readonly | Center point of symbol bounding box. | int | 5 |
| SYMBOLMIDDLERIGHTPOINT | readonly | Middle right point of symbol bounding box. | int | 6 |
| SYMBOLBOTTOMLEFTPOINT | readonly | Bottom left point of symbol bounding box. | int | 7 |
| SYMBOLBOTTOMMIDDLEPOINT | readonly | Bottom middle point of symbol bounding box. | int | 8 |
| SYMBOLBOTTOMRIGHTPOINT | readonly | Bottom right point of symbol bounding box. | int | 9 |

## PerspectiveGridPlaneType

Perspective grid plane types.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| NOPLANE | readonly | Invalid Perspective Grid Plane Type. | int | 0 |
| LEFTPLANE | readonly | Perspective Grid Left Plane Type. | int | 1 |
| RIGHTPLANE | readonly | Perspective Grid Right Plane Type. | int | 2 |
| FLOORPLANE | readonly | Perspective Grid Floor Plane Type. | int | 3 |

## FirstBaselineType

Text Item First baseline types.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| BASELINEASCENT | readonly | First Baseline Ascent Type. | int | 0 |
| BASELINECAPHEIGHT | readonly | First baseline Cap Height Type. | int | 1 |
| BASELINELEADING | readonly | First Baseline Leading Type. | int | 2 |
| BASELINEXHEIGHT | readonly | First Baseline x Height Type. | int | 3 |
| BASELINEEMBOXHEIGHT | readonly | First Baseline Em Box Height Type. | int | 4 |
| BASELINEFIXED | readonly | First Baseline Fixed Type. | int | 5 |
| BASELINELEGACY | readonly | First Baseline Legacy Type. | int | 6 |

## DocumentLayoutStyle

Document layout style types.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| CASCADE | readonly | Arranges document in cascaded style. | int | 0 |
| HORIZONTALTILE | readonly | Arranges documents as horizontal tiles. | int | 1 |
| VERTICALTILE | readonly | Arranges documents as vertical tiles. | int | 2 |
| FLOATALL | readonly | Arranges all documents floating layout. | int | 3 |
| CONSOLIDATEALL | readonly | Consolidates all documents. | int | 4 |

## JPEGCompressionMethodType

JPEG Compression Method type.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| BASELINESTANDARD | readonly | Select Baseline (Standard) to use a format recognized by most web browsers. | int | 0 |
| BASELINEOPTIMIZED | readonly | Select Baseline Optimized for optimized color and a slightly smaller file size. Not supported by all web browsers. | int | 1 |
| PROGRESSIVE | readonly | Select Progressive to display a series of increasingly detailed scans (you specify how many in ProgressiveScan) as the image downloads. Not supported by all web browsers. | int | 2 |

## RepeatGridShiftFlipType

Grid Repeat shift and flip type.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| NOSF | readonly | Create a normal grid of arts. | int | 0 |
| HORIZONTALSF | readonly | Create a grid after shifting alternate rows by half or flip the alternate rows about y axis. | int | 1 |
| VERTICALSF | readonly | Create a grid after shifting alternate columns by half or flip the alternate rows about x axis. | int | 2 |
| HORIZONTALANDVERTICALSF | readonly | Create a grid after shifting both alternate rows and columns by half or flip the alternate rows about both x and y axis. | int | 3 |

## RadialRepeatUpdate

Each flag represent which property of radial repeat gets updated.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| RADIUSOFART | readonly | Update the radius of radial repeat art. | int | 2 |
| NUMBEROFINSTANCES | readonly | Update number of instances of radial repeat art. | int | 32 |
| REVERSEOVERLAP | readonly | Update reverse overlap of radial repeat art. | int | 64 |
| RADIALALL | readonly | Update all the properties of radial repeat art. | int | 127 |

## GridRepeatUpdate

Each flag represent which property of grid repeat gets updated.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| HORIZONTALSPACING | readonly | Update spacing between rows of grid repeat art. | int | 4 |
| VERTICALSPACING | readonly | Update spacing between columns of grid repeat art. | int | 8 |
| GRIDALL | readonly | Update all the properties of grid repeat art. | int | 63 |

## SymmetryRepeatUpdate

Each flag represent which property of symmetry repeat gets updated.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| AXISROTATION | readonly | Update axis rotation angle wrt x-axis. | int | 2 |
| SYMMETRYALL | readonly | Update all the properties of symmetry repeat art. | int | 7 |

## Assets

A collection of assets.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| parent | readonly | The object's container. | Object | N/A |
| typename | readonly | The class name of the object. | string | N/A |
| length | readonly | Number of elements in the collection. | int | N/A |

## Artboards

A collection of artboards.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| parent | readonly | The object's container. | Object | N/A |
| typename | readonly | The class name of the object. | string | N/A |
| length | readonly | Number of elements in the collection. | int | N/A |

## Documents

A collection of documents.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| parent | readonly | The object's container. | Object | N/A |
| typename | readonly | The class name of the object. | string | N/A |
| length | readonly | Number of elements in the collection. | int | N/A |

## Layers

A collection of layers.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| parent | readonly | The object's container. | Object | N/A |
| typename | readonly | The class name of the object. | string | N/A |
| length | readonly | Number of elements in the collection. | int | N/A |

## GroupItems

A collection of group items.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| parent | readonly | The object's container. | Object | N/A |
| typename | readonly | The class name of the object. | string | N/A |
| length | readonly | Number of elements in the collection. | int | N/A |

## PageItems

A collection of page items.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| parent | readonly | The object's container. | Object | N/A |
| typename | readonly | The class name of the object. | string | N/A |
| length | readonly | Number of elements in the collection. | int | N/A |

## PathItems

A collection of path items.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| parent | readonly | The object's container. | Object | N/A |
| typename | readonly | The class name of the object. | string | N/A |
| length | readonly | Number of elements in the collection. | int | N/A |

## PathPoints

A collection of path points.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| parent | readonly | The object's container. | Object | N/A |
| typename | readonly | The class name of the object. | string | N/A |
| length | readonly | Number of elements in the collection. | int | N/A |

## CompoundPathItems

A collection of compound path items.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| parent | readonly | The object's container. | Object | N/A |
| typename | readonly | The class name of the object. | string | N/A |
| length | readonly | Number of elements in the collection. | int | N/A |

## Stories

A collection of stories.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| parent | readonly | The object's container. | Object | N/A |
| typename | readonly | The class name of the object. | string | N/A |
| length | readonly | Number of elements in the collection. | int | N/A |

## TextFrameItems

A collection of text frame items.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| parent | readonly | The object's container. | Object | N/A |
| typename | readonly | The class name of the object. | string | N/A |
| length | readonly | Number of elements in the collection. | int | N/A |

## LegacyTextItems

A collection of legacy text items.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| parent | readonly | The object's container. | Object | N/A |
| typename | readonly | The class name of the object. | string | N/A |
| length | readonly | Number of elements in the collection. | int | N/A |

## TextRanges

A collection of text range items.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| parent | readonly | The object's container. | Object | N/A |
| typename | readonly | The class name of the object. | string | N/A |
| length | readonly | Number of elements in the collection. | int | N/A |

## InsertionPoints

A collection of insertion points.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| parent | readonly | The object's container. | Object | N/A |
| typename | readonly | The class name of the object. | string | N/A |
| length | readonly | Number of elements in the collection. | int | N/A |

## Characters

A collection of characters.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| parent | readonly | The object's container. | Object | N/A |
| typename | readonly | The class name of the object. | string | N/A |
| length | readonly | Number of elements in the collection. | int | N/A |

## Words

A collection of words.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| parent | readonly | The object's container. | Object | N/A |
| typename | readonly | The class name of the object. | string | N/A |
| length | readonly | Number of elements in the collection. | int | N/A |

## Lines

A collection of lines.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| parent | readonly | The object's container. | Object | N/A |
| typename | readonly | The class name of the object. | string | N/A |
| length | readonly | Number of elements in the collection. | int | N/A |

## Paragraphs

A collection of Paragraphs.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| parent | readonly | The object's container. | Object | N/A |
| typename | readonly | The class name of the object. | string | N/A |
| length | readonly | Number of elements in the collection. | int | N/A |

## CharacterStyles

A collection of character styles.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| parent | readonly | The object's container. | Object | N/A |
| typename | readonly | The class name of the object. | string | N/A |
| length | readonly | Number of elements in the collection. | int | N/A |

## ParagraphStyles

A collection of paragraph styles.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| parent | readonly | The object's container. | Object | N/A |
| typename | readonly | The class name of the object. | string | N/A |
| length | readonly | Number of elements in the collection. | int | N/A |

## Spots

A collection of custom spot colors.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| parent | readonly | The object's container. | Object | N/A |
| typename | readonly | The class name of the object. | string | N/A |
| length | readonly | Number of elements in the collection. | int | N/A |

## Swatches

A collection of swatches.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| parent | readonly | The object's container. | Object | N/A |
| typename | readonly | The class name of the object. | string | N/A |
| length | readonly | Number of elements in the collection. | int | N/A |

## SwatchGroups

A collection of Swatch groups.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| parent | readonly | The object's container. | Object | N/A |
| typename | readonly | The class name of the object. | string | N/A |
| length | readonly | Number of elements in the collection. | int | N/A |

## Gradients

A collection of gradients.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| parent | readonly | The object's container. | Object | N/A |
| typename | readonly | The class name of the object. | string | N/A |
| length | readonly | Number of elements in the collection. | int | N/A |

## GradientStops

A collection of gradient stops.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| parent | readonly | The object's container. | Object | N/A |
| typename | readonly | The class name of the object. | string | N/A |
| length | readonly | Number of elements in the collection. | int | N/A |

## Patterns

A collection of patterns.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| parent | readonly | The object's container. | Object | N/A |
| typename | readonly | The class name of the object. | string | N/A |
| length | readonly | Number of elements in the collection. | int | N/A |

## Symbols

A collection of symbols.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| parent | readonly | The object's container. | Object | N/A |
| typename | readonly | The class name of the object. | string | N/A |
| length | readonly | Number of elements in the collection. | int | N/A |

## SymbolItems

A collection of symbol items.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| parent | readonly | The object's container. | Object | N/A |
| typename | readonly | The class name of the object. | string | N/A |
| length | readonly | Number of elements in the collection. | int | N/A |

## Brushes

A collection of brushes.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| parent | readonly | The object's container. | Object | N/A |
| typename | readonly | The class name of the object. | string | N/A |
| length | readonly | Number of elements in the collection. | int | N/A |

## ArtStyles

A collection of art styles.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| parent | readonly | The object's container. | Object | N/A |
| typename | readonly | The class name of the object. | string | N/A |
| length | readonly | Number of elements in the collection. | int | N/A |

## TextFonts

A collection of fonts.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| parent | readonly | The object's container. | Object | N/A |
| typename | readonly | The class name of the object. | string | N/A |
| length | readonly | Number of elements in the collection. | int | N/A |

## Tags

The collection of tags associated with a page item.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| parent | readonly | The object's container. | Object | N/A |
| typename | readonly | The class name of the object. | string | N/A |
| length | readonly | Number of elements in the collection. | int | N/A |

## RasterItems

No description available.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| parent | readonly | The object's container. | Object | N/A |
| typename | readonly | The class name of the object. | string | N/A |
| length | readonly | Number of elements in the collection. | int | N/A |

## PlacedItems

No description available.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| parent | readonly | The object's container. | Object | N/A |
| typename | readonly | The class name of the object. | string | N/A |
| length | readonly | Number of elements in the collection. | int | N/A |

## EmbeddedItems

EmbeddedItems Collection.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| parent | readonly | The object's container. | Object | N/A |
| typename | readonly | The class name of the object. | string | N/A |
| length | readonly | Number of elements in the collection. | int | N/A |

## MeshItems

No description available.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| parent | readonly | The object's container. | Object | N/A |
| typename | readonly | The class name of the object. | string | N/A |
| length | readonly | Number of elements in the collection. | int | N/A |

## GraphItems

No description available.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| parent | readonly | The object's container. | Object | N/A |
| typename | readonly | The class name of the object. | string | N/A |
| length | readonly | Number of elements in the collection. | int | N/A |

## PluginItems

No description available.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| parent | readonly | The object's container. | Object | N/A |
| typename | readonly | The class name of the object. | string | N/A |
| length | readonly | Number of elements in the collection. | int | N/A |

## NonNativeItems

No description available.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| parent | readonly | The object's container. | Object | N/A |
| typename | readonly | The class name of the object. | string | N/A |
| length | readonly | Number of elements in the collection. | int | N/A |

## Views

A collection of views.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| parent | readonly | The object's container. | Object | N/A |
| typename | readonly | The class name of the object. | string | N/A |
| length | readonly | Number of elements in the collection. | int | N/A |

## Variables

A collection of variables.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| parent | readonly | The object's container. | Object | N/A |
| typename | readonly | The class name of the object. | string | N/A |
| length | readonly | Number of elements in the collection. | int | N/A |

## DataSets

A collection of datasets.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| parent | readonly | The object's container. | Object | N/A |
| typename | readonly | The class name of the object. | string | N/A |
| length | readonly | Number of elements in the collection. | int | N/A |

## SymmetryRepeatItems

A collection of symmetry repeat items.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| parent | readonly | The object's container. | Object | N/A |
| typename | readonly | The class name of the object. | string | N/A |
| length | readonly | Number of elements in the collection. | int | N/A |

## RadialRepeatItems

A collection of radial repeat items.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| parent | readonly | The object's container. | Object | N/A |
| typename | readonly | The class name of the object. | string | N/A |
| length | readonly | Number of elements in the collection. | int | N/A |

## GridRepeatItems

A collection of grid repeat items.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| parent | readonly | The object's container. | Object | N/A |
| typename | readonly | The class name of the object. | string | N/A |
| length | readonly | Number of elements in the collection. | int | N/A |

## OpenOptions

Options which may be supplied when opening a file.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| updateLegacyText | None | Choose to update all text objects for documents saved with legacy texts (pre-Illustrator 11) | bool | false |
| updateLegacyGradientMesh | None | Choose to preserve the spot colors in the gradient mesh objects for legacy documents (pre-Illustrator CS3) | bool | true |
| openAs | None | Open the file as library. | LibraryType | LibraryType.ILLUSTRATORARTWORK |
| preserveLegacyArtboard | None | Preserve Legacy Artboard (pre-Illustrator CS4) when opening in CS4 or later. | bool | true |
| convertCropAreaToArtboard | None | Convert crop area to Artboard when opening legacy document (pre-Illustrator CS4) in CS4 or later. If false then crop areas are discarded. | bool | true |
| createArtboardWithArtworkBoundingBox | None | Create Artboard with dimentions of artwork bounding box when opening legacy document (pre-Illustrator CS4) in CS4 or later. | bool | false |
| convertTilesToArtboard | None | Convert print tiles to Artboard when opening legacy document (pre-Illustrator CS4) in CS4 or later. | bool | false |
| addToRecentFiles | None | Add this file to the list of recently opened files. | bool | true |

## FXGSaveOptions

Options which may be supplied when saving a document as an FXG file.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| saveMultipleArtboards | None | All the artboards or range of the artboards will be saved. | bool | false |
| artboardRange | None | If SaveMultipleArtboards is true,this will be considered for multi-asset extraction which specifies artboard range.Empty string will extracts all the artboards.Default is empty string. | string | None |
| version | None | The version of the FXG file format to create. | FXGVersion | FXGVersion.VERSION2PT0 |
| preserveEditingCapabilities | None | Choose to preserve the editing capabilities of FXG. | bool | true |
| includeUnusedSymbols | None | Choose to include unused symbols. | bool | false |
| downsampleLinkedImages | None | Choose to downsample the linked images(72ppi) | bool | false |
| includeMetadata | None | Choose to include metadata (XMP) | bool | false |
| filtersPolicy | None | The policy used by FXG to preserve filters. | FiltersPreservePolicy | FiltersPreservePolicy.KEEPFILTERSEDITABLE |
| textPolicy | None | The policy used by FXG to preserve text. | TextPreservePolicy | TextPreservePolicy.AUTOMATICALLYCONVERTTEXT |
| gradientsPolicy | None | The policy used by FXG to preserve gradients. | GradientsPreservePolicy | GradientsPreservePolicy.AUTOMATICALLYCONVERTGRADIENTS |
| blendsPolicy | None | The policy used by FXG to expand blends. | BlendsExpandPolicy | BlendsExpandPolicy.AUTOMATICALLYCONVERTBLENDS |

## EPSSaveOptions

Options which may be supplied when saving a document as an Illustrator EPS file.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| compatibility | None | What Illustrator file format version to create. | Compatibility | Compatibility.ILLUSTRATOR24 |
| preview | None | EPS preview format. | EPSPreview | N/A |
| embedLinkedFiles | None | Are linked image files to be included in the saved document. | bool | false |
| includeDocumentThumbnails | None | Include thumbnail image of the EPS artwork. | bool | true |
| embedAllFonts | None | Embed all fonts used by the document in the saved file (version 7 or later) | bool | false |
| cmykPostScript | None | Use CMYK PostScript. | bool | true |
| postScript | None | PostScript level to use (level 1 valid for file format version 8 or older) | EPSPostScriptLevelEnum | EPSPostScriptLevelEnum.LEVEL2 |
| flattenOutput | None | How should transparency be flattened for older file format versions (pre-version 9) | OutputFlattening | OutputFlattening.PRESERVEAPPEARANCE |
| compatibleGradientPrinting | None | Create a raster item of the gradient or gradient mesh so that PostScript Level 2 printers can print the object. | bool | false |
| overprint | None | No description available. | PDFOverprint | PDFOverprint.PRESERVEPDFOVERPRINT |
| saveMultipleArtboards | None | All the artboards or range of the artboards will be saved. | bool | false |
| artboardRange | None | If SaveMultipleArtboards is true,this will be considered for multi-asset extraction which specifies artboard range.Empty string will extracts all the artboards.Default is empty string. | string | None |

## PDFSaveOptions

Options which may be supplied when saving a document as a PDF file.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| pDFPreset | None | The max string length is 255 bytes. Name of PDF preset to use. | string | N/A |
| compatibility | None | The version of the Acrobat file format to create. | PDFCompatibility | PDFCompatibility.ACROBAT5 |
| pDFXStandard | None | This control includes the None option for when the user is not complying with any PDF standard. | PDFXStandard | PDFXStandard.PDFXNONE |
| pDFXStandardDescription | None | This displays the description from the selected preset. | string | N/A |
| preserveEditability | None | Preserve Illustrator editing capabilities when saving the document. | bool | true |
| generateThumbnails | None | Generate thumbnails for the saved document. | bool | true |
| optimization | None | Should the PDF document be optimized for fast web viewing. | bool | false |
| viewAfterSaving | None | View PDF after saving. | bool | false |
| colorCompression | None | How should color bitmap images be compressed. | CompressionQuality | CompressionQuality.None |
| colorTileSize | None | Tile size when compressing with JPEG2000. | Int32 | 256 |
| colorDownsamplingMethod | None | How should color bitmap images be resampled. | DownsampleMethod | DownsampleMethod.NODOWNSAMPLE |
| colorDownsampling | None | If zero, no downsampling, otherwise, the resolution to downsample color bitmap images to. | number | 150 |
| colorDownsamplingImageThreshold | None | Downsample if the image's resolution is above this value. | number | 225 |
| grayscaleCompression | None | How should grayscale bitmap images be compressed. | CompressionQuality | CompressionQuality.None |
| grayscaleTileSize | None | Tile size when compressing with JPEG2000. | Int32 | 256 |
| grayscaleDownsamplingMethod | None | How should grayscale bitmap images be resampled. | DownsampleMethod | DownsampleMethod.NODOWNSAMPLE |
| grayscaleDownsampling | None | If zero, no downsampling, otherwise, the resolution to downsample grayscale images to. | number | 150 |
| grayscaleDownsamplingImageThreshold | None | Downsample if the image's resolution is above this value. | number | 225 |
| monochromeCompression | None | How should monochrome bitmap images be compressed. | MonochromeCompression | MonochromeCompression.None |
| monochromeDownsamplingMethod | None | How should monochrome bitmap images be resampled. | DownsampleMethod | DownsampleMethod.NODOWNSAMPLE |
| monochromeDownsampling | None | If zero, no downsampling, otherwise, the resolution to downsample images to. | number | 300 |
| monochromeDownsamplingImageThreshold | None | Downsample if the image's resolution is above this value. | number | 450 |
| compressArt | None | Should line art and text be compressed? | bool | true |
| trimMarks | None | Draw trim marks. | bool | false |
| registrationMarks | None | Draw registration marks. | bool | false |
| colorBars | None | Draw color bars. | bool | false |
| pageInformation | None | Draw page information. | bool | false |
| pageMarksType | None | The page marks style. | PageMarksTypes | PageMarksTypes.Roman |
| trimMarkWeight | None | Trim mark weight. | PDFTrimMarkWeight | PDFTrimMarkWeight.TRIMMARKWEIGHT0125 |
| offset | None | Custom offset (in points) for using the custom paper. | number | 0 |
| bleedOffsetRect | None | The bleed offset rect. | Rect | N/A |
| bleedLink | None | Link 4 bleed values. | bool | true |
| colorConversionID | None | PDF color conversion policy. Three choices are available: (1)No Color Conversion (2) Repurpose (3) Convert to Destination. | ColorConversion | ColorConversion.None |
| colorDestinationID | None | When NoColorConversion is specified for Color Conversion, NoColorDestination is set. | ColorDestination | ColorDestination.None |
| colorProfileID | None | If CMS is off, Don't Include Profiles is set. | ColorProfile | ColorProfile.None |
| outputIntentProfile | None | When CMS is on, the output intent profile is the same profile selected for Destination in the Color group box. | string | None |
| outputCondition | None | This is an optional comment which, if present, is added to the PDF file and describes the intended printing condition. | string | None |
| outputConditionID | None | If selected for Output Intent Profile Name, you can set the name of a registered printing condition. | string | None |
| registryName | None | URL to the site where the specified output condition is registered. No validation is performed on the URL. | string | None |
| trapped | None | This indicates if manual trapping has been prepared in the document. | bool | false |
| fontSubsetThreshold | None | Include a subset of fonts when less than this percentage of characters are used. | number | 100 |
| flattenerPreset | None | The transparency flattener preset name. | string | N/A |
| flattenerOptions | None | The printing flattener options. | PrintFlattenerOptions | N/A |
| printerResolution | None | Flattening printer resolution. | number | 800 |
| acrobatLayers | None | Create acrobat layers from top-level layers - acrobat 6 only option. | bool | false |
| requireDocumentPassword | None | Require a password to open the document. | bool | false |
| documentPassword | None | A password string to open the document. | string | None |
| requirePermissionPassword | None | Use a password to restrict editing security settings. | bool | false |
| permissionPassword | None | A password string to restrict editing security settings. | string | None |
| pDFAllowPrinting | None | PDF security printing permission. | PDFPrintAllowedEnum | PDFPrintAllowedEnum.PRINT128HIGHRESOLUTION |
| pDFChangesAllowed | None | PDF security changes allowed. | PDFChangesAllowedEnum | PDFChangesAllowedEnum.CHANGE128ANYCHANGES |
| enableCopy | None | Enable copying of text 128-bit. | bool | true |
| enableAccess | None | Enable accessing 128-bit. | bool | true |
| enablePlainText | None | Enable plaintext metadata 128-bit - available only for acrobat 6. | bool | false |
| enableCopyAccess | None | Enable copying and accessing 40-bit. | bool | true |
| artboardRange | None | Considered for multi-asset extraction which specifies artboard range.Empty string will extracts all the artboards.Default is empty string. | string | None |

## IllustratorSaveOptions

Options which may be supplied when saving a document as an Illustrator file.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| compatibility | None | What Illustrator file format version to create. | Compatibility | Compatibility.ILLUSTRATOR24 |
| fontSubsetThreshold | None | Include a subset of fonts when less than this percentage of characters are used (version 9 or later) | number | 100 |
| embedICCProfile | None | Embed the document's ICC profile in the saved file (version 9 or later) | bool | false |
| embedLinkedFiles | None | Are linked image files to be included in the saved document (versions 7 or later) | bool | false |
| flattenOutput | None | How should transparency be flattened for older file format versions (pre-version 9) | OutputFlattening | OutputFlattening.PRESERVEAPPEARANCE |
| pdfCompatible | None | Save as a PDF compatible file (version 10 or later) | bool | true |
| compressed | None | Should the saved file be compressed (version 10 or later) | bool | true |
| saveMultipleArtboards | None | All the artboards or range of the artboards will be saved. | bool | false |
| artboardRange | None | If SaveMultipleArtboards is true ,this will be considered for multi-asset extraction which specifies artboard range.Empty string will extracts all the artboards.Default is empty string. | string | None |

## Matrix

No description available.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| mValueA | None | No description available. | number | N/A |
| mValueB | None | No description available. | number | N/A |
| mValueC | None | No description available. | number | N/A |
| mValueD | None | No description available. | number | N/A |
| mValueTX | None | No description available. | number | N/A |
| mValueTY | None | No description available. | number | N/A |

## ExportForScreensItemToExport

An item that needs to be exported; for example, a document, artboard, or asset.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| artboards | None | Range of artboards to export [possible values: '', 'all'(default), range] | string | all |
| assets | None | Array of asset id to export (default:empty) | Int32 | N/A |
| document | None | Whether to export the document or not. | bool | false |

## ExportForScreensOptionsJPEG

Options which may be provided when exporting a document as a JPEG100 file.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| compressionMethod | None | Should the image be compressed. | JPEGCompressionMethodType | JPEGCompressionMethodType.BASELINESTANDARD |
| progressiveScan | None | Specify the number of detailed scans when downloading a JPEG file using the Progressive option as the CompressionMethod. | Int32 | 3 |
| antiAliasing | None | Should the resulting image be antialiased. | AntiAliasingMethod | AntiAliasingMethod.ARTOPTIMIZED |
| embedICCProfile | None | Embed an ICC profile when exporting. | bool | false |
| scaleType | None | How should the resulting image be scaled. | ExportForScreensScaleType | ExportForScreensScaleType.SCALEBYFACTOR |
| scaleTypeValue | None | The value by which the resulting image should be scaled. | number | 1 |

## ExportForScreensOptionsPNG8

Options which may be provided when exporting a document as an 8 bit PNG file.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| colorCount | None | Number of colors in exported color table. | Int32 | 128 |
| transparency | None | Should the resulting image use transparency. | bool | true |
| interlaced | None | Should the resulting image be interlaced. | bool | false |
| matte | None | Should the artboard be matted with a color. | bool | true |
| matteColor | None | The color to use when matting the artboard (default: white) | RGBColor | N/A |
| antiAliasing | None | Should the resulting image be antialiased. | AntiAliasingMethod | AntiAliasingMethod.ARTOPTIMIZED |
| scaleType | None | How should the resulting image be scaled. | ExportForScreensScaleType | ExportForScreensScaleType.SCALEBYFACTOR |
| scaleTypeValue | None | The value by which the resulting image should be scaled. | number | 1 |

## ExportForScreensOptionsPNG24

Options which may be provided when exporting a document as an 24 bit PNG file.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| transparency | None | Should the resulting image use transparency. | bool | true |
| antiAliasing | None | Should the resulting image be antialiased. | AntiAliasingMethod | AntiAliasingMethod.ARTOPTIMIZED |
| backgroundBlack | None | Should the resulting image rasterize against a black background (with value true) or white background(with value false) if it doesn't use transparency. | bool | false |
| interlaced | None | Should the resulting image be interlaced. | bool | false |
| scaleType | None | How should the resulting image be scaled. | ExportForScreensScaleType | ExportForScreensScaleType.SCALEBYFACTOR |
| scaleTypeValue | None | The value by which the resulting image should be scaled. | number | 1 |

## ExportForScreensOptionsWebOptimizedSVG

Options which may be provided when exporting a document as a web optimized SVG file.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| fontType | None | The type of font that should be included in the exported file. | SVGFontType | SVGFontType.SVGFONT |
| coordinatePrecision | None | Decimal precision for element coordinate values. | Int32 | 3 |
| cssProperties | None | How should the CSS properties of the document be included in the document. | SVGCSSPropertyLocation | SVGCSSPropertyLocation.STYLEATTRIBUTES |
| svgId | None | How object names (IDs) are generated in exported SVG. | SVGIdType | SVGIdType.SVGIDREGULAR |
| svgMinify | None | Reduces the size of the svg. | bool | false |
| svgResponsive | None | Makes the SVG Responsive. | bool | true |
| rasterImageLocation | None | Should the raster images in the exported file be included. | RasterImageLocation | RasterImageLocation.PRESERVE |

## ExportForScreensPDFOptions

Options which may be provided when exporting a document as a PDF file.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| pdfPreset | None | The max string length is 255 bytes. Name of PDF preset to use. | string | None |

## ExportOptionsJPEG

Options which may be supplied when exporting a document as a JPEG file.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| qualitySetting | None | Quality of resulting image. | Int32 | 30 |
| optimization | None | Should the image be optimized for web viewing. | bool | true |
| blurAmount | None | Blur the resulting image this much. | number | 0 |
| matte | None | Should the artboard be matted with a color. | bool | true |
| matteColor | None | The color to use when matting the artboard (default: white) | RGBColor | N/A |
| horizontalScale | None | Horizontal scaling factor. | number | 100 |
| verticalScale | None | Vertical scaling factor. | number | 100 |
| antiAliasing | None | Should the resulting image be antialiased. | bool | true |
| artBoardClipping | None | Should the resulting image be clipped to the artboard. | bool | false |
| saveAsHTML | None | Should the resulting image be saved as HTML. | bool | false |

## ExportOptionsPNG8

Options which may be supplied when exporting a document as an 8 bit PNG file.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| colorCount | None | Number of colors in exported color table. | Int32 | 128 |
| colorReduction | None | Method used to reduce the number of colors. | ColorReductionMethod | ColorReductionMethod.SELECTIVE |
| colorDither | None | Method used to dither colors. | ColorDitherMethod | ColorDitherMethod.DIFFUSION |
| ditherPercent | None | How much should the colors be dithered. | Int32 | 88 |
| webSnap | None | How much should the color table be changed to match the web palette. | Int32 | 0 |
| transparency | None | Should the resulting image use transparency. | bool | true |
| interlaced | None | Should the resulting image be interlaced. | bool | false |
| matte | None | Should the artboard be matted with a color. | bool | true |
| matteColor | None | The color to use when matting the artboard (default: white) | RGBColor | N/A |
| horizontalScale | None | Horizontal scaling factor. | number | 100 |
| verticalScale | None | Vertical scaling factor. | number | 100 |
| antiAliasing | None | Should the resulting image be antialiased. | bool | true |
| artBoardClipping | None | Should the resulting image be clipped to the artboard. | bool | false |
| saveAsHTML | None | Should the resulting image be saved as HTML. | bool | false |

## ExportOptionsPNG24

Options which may be supplied when exporting a document as an 24 bit PNG file.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| transparency | None | Should the resulting image use transparency. | bool | true |
| matte | None | Should the artboard be matted with a color. | bool | true |
| matteColor | None | The color to use when matting the artboard (default: white) | RGBColor | N/A |
| horizontalScale | None | Horizontal scaling factor. | number | 100 |
| verticalScale | None | Vertical scaling factor. | number | 100 |
| antiAliasing | None | Should the resulting image be antialiased. | bool | true |
| artBoardClipping | None | Should the resulting image be clipped to the artboard. | bool | false |
| saveAsHTML | None | Should the resulting image be saved as HTML. | bool | false |
| dimensions | None | Dimensions in which to contain the resulting raster. | Dimensions | N/A |

## ExportOptionsGIF

Options which may be supplied when exporting a document as a GIF file.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| colorCount | None | Number of colors in exported color table. | Int32 | 128 |
| colorReduction | None | Method used to reduce the number of colors. | ColorReductionMethod | ColorReductionMethod.SELECTIVE |
| infoLossPercent | None | Level of information loss during compression. | Int32 | 0 |
| colorDither | None | Method used to dither colors. | ColorDitherMethod | ColorDitherMethod.DIFFUSION |
| ditherPercent | None | How much should the colors be dithered. | Int32 | 88 |
| webSnap | None | How much should the color table be changed to match the web pallet. | Int32 | 0 |
| transparency | None | Should the resulting image use transparency. | bool | true |
| interlaced | None | Should the resulting image be interlaced. | bool | false |
| matte | None | Should the artboard be matted with a color. | bool | true |
| matteColor | None | The color to use when matting the artboard (default: white) | RGBColor | N/A |
| horizontalScale | None | Horizontal scaling factor. | number | 100 |
| verticalScale | None | Vertical scaling factor. | number | 100 |
| antiAliasing | None | Should the resulting image be antialiased. | bool | true |
| artBoardClipping | None | Should the resulting image be clipped to the artboard. | bool | false |
| saveAsHTML | None | Should the resulting image be saved as HTML. | bool | false |

## ExportOptionsPhotoshop

Options which may be supplied when exporting a document as a Photoshop file.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| imageColorSpace | None | The color space of the exported file. | ImageColorSpace | ImageColorSpace.RGB |
| resolution | None | The resolution of the exported file. | number | 150 |
| antiAliasing | None | Should the resulting image be antialiased. | bool | true |
| writeLayers | None | Preserve document layers when exporting. | bool | true |
| editableText | None | Export text objects as editable text layers. | bool | true |
| embedICCProfile | None | Embed an ICC profile when exporting. | bool | false |
| warnings | None | Should a warning dialog be displayed because of conflicts in the export settings. | bool | true |
| maximumEditability | None | Preserve as much of the original document's structure as possible when exporting. | bool | true |
| saveMultipleArtboards | None | All the artboards or range of the artboards will be exported. | bool | false |
| artboardRange | None | If SaveMultipleArtboards is true,this will be considered for multi-asset extraction which specifies artboard range.Empty string will extracts all the artboards.Default is empty string. | string | None |

## ExportOptionsSVG

Options which may be supplied when exporting a document as an SVG file.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| DTD | None | The version of DTD that the exported file should be conforming to. | SVGDTDVersion | SVGDTDVersion.SVG1_1 |
| fontType | None | The type of font that should be included in the exported file. | SVGFontType | SVGFontType.SVGFONT |
| fontSubsetting | None | What font glyphs should be included in the exported file. | SVGFontSubsetting | SVGFontSubsetting.ALLGLYPHS |
| embedRasterImages | None | Should the raster images in the exported file be included. | bool | false |
| coordinatePrecision | None | Decimal precision for element coordinate values. | Int32 | 3 |
| documentEncoding | None | How should the text in the document be encoded. | SVGDocumentEncoding | SVGDocumentEncoding.ASCII |
| cssProperties | None | How should the CSS properties of the document be included in the document. | SVGCSSPropertyLocation | SVGCSSPropertyLocation.STYLEATTRIBUTES |
| compressed | None | Should the exported file be compressed. | bool | false |
| optimizeForSVGViewer | None | No description available. | bool | false |
| includeVariablesAndDatasets | None | No description available. | bool | false |
| includeFileInfo | None | No description available. | bool | false |
| includeUnusedStyles | None | No description available. | bool | false |
| slices | None | Preserve slice data in exported document. | bool | false |
| preserveEditability | None | Preserve Illustrator editing capabilities when exporting the document. | bool | false |
| sVGAutoKerning | None | Is SVG auto kerning allowed? | bool | false |
| sVGTextOnPath | None | Is SVG text-on-path construct allowed? | bool | false |
| saveMultipleArtboards | None | All the artboards or range of the artboards will be saved. | bool | false |
| artboardRange | None | If SaveMultipleArtboards is true,this will be considered for multi-asset extraction which specifies artboard range.Empty string will extracts all the artboards.Default is empty string. | string | None |

## ExportOptionsWebOptimizedSVG

Options which may be supplied when exporting a document as a Web optimized SVG file.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| fontType | None | The type of font that should be included in the exported file. | SVGFontType | SVGFontType.SVGFONT |
| coordinatePrecision | None | Decimal precision for element coordinate values. | Int32 | 3 |
| cssProperties | None | How should the CSS properties of the document be included in the document. | SVGCSSPropertyLocation | SVGCSSPropertyLocation.STYLEATTRIBUTES |
| svgId | None | How object names (IDs) are generated in exported SVG. | SVGIdType | SVGIdType.SVGIDREGULAR |
| svgMinify | None | Reduces the size of the svg. | bool | false |
| svgResponsive | None | Makes the SVG Responsive. | bool | true |
| rasterImageLocation | None | Should the raster images in the exported file be included. | RasterImageLocation | RasterImageLocation.PRESERVE |
| saveMultipleArtboards | None | All the artboards or range of the artboards will be saved. | bool | false |
| artboardRange | None | If SaveMultipleArtboards is true,this will be considered for multi-asset extraction which specifies artboard range.Empty string will extracts all the artboards.Default is empty string. | string | None |

## ExportOptionsAutoCAD

Options which may be supplied when exporting a document to AutoCAD formats (.dwg or .dxf)

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| exportFileFormat | None | Which format to export the file as. | AutoCADExportFileFormat | AutoCADExportFileFormat.DWG |
| version | None | Release of AutoCAD to export to. | AutoCADCompatibility | AutoCADCompatibility.AutoCADRelease24 |
| unitScaleRatio | None | Ratio by which to scale the output. | number | 1.0 |
| unit | None | Units from which to map. | AutoCADUnit | AutoCADUnit.Millimeters |
| colors | None | Number of colors to export into the AutoCAD file. | AutoCADColors | AutoCADColors.TrueColors |
| rasterFormat | None | Raster format in which to export raster art. | AutoCADRasterFormat | AutoCADRasterFormat.PNG |
| exportOption | None | Whether to preserve appearance or editability during export. | AutoCADExportOption | AutoCADExportOption.MaximumEditability |
| exportSelectedArtOnly | None | Export selected art only. | bool | false |
| alterPathsForAppearance | None | Alter paths for appearance. | bool | false |
| convertTextToOutlines | None | Whether to convert text to outlines. | bool | false |
| scaleLineweights | None | Whether to scale lineweights by the same amount as rest of the drawing. | bool | false |

## ExportOptionsTIFF

Options which may be supplied when exporting a document as a TIFF file.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| imageColorSpace | None | The color space of the exported file. | ImageColorSpace | ImageColorSpace.RGB |
| resolution | None | The resolution of the exported file. | number | 150 |
| antiAliasing | None | Should the resulting image be antialiased. | AntiAliasingMethod | AntiAliasingMethod.ARTOPTIMIZED |
| lZWCompression | None | Compress TIFF file with LZW Compression when exporting. | bool | false |
| byteOrder | None | Mac or PC byte order when exporting. | TIFFByteOrder | TIFFByteOrder.IBMPC |
| embedICCProfile | None | Embed an ICC profile when exporting. | bool | false |
| saveMultipleArtboards | None | All the artboards or range of the artboards will be exported. | bool | false |
| artboardRange | None | If SaveMultipleArtboards is true,this will be considered for multi-asset extraction which specifies artboard range.Empty string will extracts all the artboards.Default is empty string. | string | None |

## Color

The parent class for all color values used in Illustrator. See the specific color classes for more information.

## LabColor

An Lab color specification.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| l | None | The L color value (between 0.0 and 100.0) | number | 0.0 |
| a | None | The a color value (between -128.0 and 127.0) | number | 0.0 |
| b | None | The b color value (between -128.0 and 127.0) | number | 0.0 |

## Dimensions

Dimensions (height and width)

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| width | None | The Width parameter. | number | N/A |
| height | None | The Height parameter. | number | N/A |

## RGBColor

An RGB color specification.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| red | None | The red color value (between 0.0 and 255.0) | number | 0.0 |
| green | None | The green color value (between 0.0 and 255.0) | number | 0.0 |
| blue | None | The blue color value (between 0.0 and 255.0) | number | 0.0 |

## CMYKColor

A CMYK color specification.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| cyan | None | The cyan color value (between 0.0 and 100.0) | number | 0.0 |
| magenta | None | The magenta color value (between 0.0 and 100.0) | number | 0.0 |
| yellow | None | The yellow color value (between 0.0 and 100.0) | number | 0.0 |
| black | None | The black color value (between 0.0 and 100.0) | number | 0.0 |

## GrayColor

A gray color specification.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| gray | None | The gray value (between 0.0 and 100.0) | number | 0.0 |

## NoColor

Represents the 'none' color.

## SpotColor

Information about the spot color.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| tint | None | Percentage level of tint to be applied to the spot color. | number | 100.0 |
| spot | None | No description available. | Spot | N/A |

## PatternColor

A Pattern color specification.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| shiftDistance | None | The distance to translate the (unscaled) prototype before filling. | number | 0 |
| shiftAngle | None | The angle to translate the (unscaled) prototype before filling. | number | 0 |
| scaleFactor | None | The fraction to scale the prototype before filling. | Point | N/A |
| rotation | None | The angle to rotate the before filling. | number | 0 |
| reflect | None | Whether or not the prototype is reflected before filling. | bool | false |
| reflectAngle | None | The axis around which to reflect. | number | 0 |
| shearAngle | None | The angle to slant the shear by. | number | 0 |
| shearAxis | None | The axis to shear with respect to. | number | 0 |
| matrix | None | Additional transformation arising from manipulating the path. | Matrix | N/A |
| pattern | None | No description available. | Pattern | N/A |

## GradientColor

A Gradient color specification.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| origin | None | The gradient vector origin. | Point | N/A |
| angle | None | The gradient vector angle. | number | 0 |
| length | None | The gradient vector length. | number | 0 |
| hiliteAngle | None | The gradient hilite vector angle. | number | 0 |
| hiliteLength | None | The gradient hilite vector length. | number | 0 |
| matrix | None | Additional transformation arising from manipulating the path. | Matrix | N/A |
| gradient | None | Reference to the object defining the gradient. | Gradient | N/A |

## TabStopInfo

Tab stop information (returned by tab stops from a paragraph object)

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| alignment | None | The alignment of the tab stop. | TabStopAlignment | TabStopAlignment.Left |
| decimalCharacter | None | The character used for decimal tab stops. | string | . |
| position | None | The position of the tab stop expressed in points. | number | 0 |
| leader | None | The leader dot. | string | N/A |

## Printer

An installed printer.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| name | None | The printer name. | string | N/A |
| printerInfo | None | The printer information. | PrinterInfo | N/A |

## PrinterInfo

Printer information.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| printerType | None | The printer type. | PrinterTypeEnum | N/A |
| postScriptLevel | None | The PostScript level. | PrinterPostScriptLevelEnum | N/A |
| colorSupport | None | The printer color capability. | PrinterColorMode | N/A |
| deviceResolution | None | The printer default resolution. | number | N/A |
| maxDeviceResolution | None | The printer maximum device resolution. | number | N/A |
| inRIPSeparationSupport | None | Does the printer support InRIP color separation? | bool | N/A |
| binaryPrintingSupport | None | Does the printer support binary printing? | bool | N/A |
| paperSizes | None | The list of supported paper sizes. | Paper | N/A |
| customPaperSupport | None | Does the printer support custom paper size? | bool | N/A |
| customPaperTransverseSupport | None | Does the printer support custom paper transverse? | bool | N/A |
| minPaperWidth | None | Custom paper's minimum width. | number | N/A |
| maxPaperWidth | None | Custom paper's maximum width. | number | N/A |
| minPaperHeight | None | Custom paper's minimum height. | number | N/A |
| maxPaperHeight | None | Custom paper's maximum height. | number | N/A |
| minPaperHeightOffset | None | Custom paper's minimum height offset. | number | N/A |
| maxPaperHeightOffset | None | Custom paper's maximum height offset. | number | N/A |
| minPaperWidthOffset | None | Custom paper's minimum width offset. | number | N/A |
| maxPaperWidthOffset | None | Custom paper's maximum width offset. | number | N/A |

## PPDFile

A PPD file.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| name | None | The PPD model name. | string | N/A |
| PPDInfo | None | The PPD file information. | PPDFileInfo | N/A |

## PPDFileInfo

PPD file information.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| languageLevel | None | The PostScript language level. | string | N/A |
| PPDFilePath | None | Path specification for the PPD file. | File | N/A |
| screenList | None | List of color separation screens. | Screen | N/A |
| screenSpotFunctionList | None | List of color separation screen spot functions. | ScreenSpotFunction | N/A |

## Paper

Paper size.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| name | None | The paper name. | string | N/A |
| paperInfo | None | The paper information. | PaperInfo | N/A |

## PaperInfo

Paper information.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| width | None | The paper's width (in points) | number | N/A |
| height | None | The paper's height (in points) | number | N/A |
| imageableArea | None | The imageable area. | Rect | N/A |
| customPaper | None | Is it a custom paper? | bool | N/A |

## Screen

Color separation screen.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| name | None | The color separation screen name. | string | N/A |
| screenInfo | None | The color separation screen information. | ScreenInfo | N/A |

## ScreenInfo

Screen information.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| defaultScreen | None | Is it the default screen? | bool | N/A |
| frequency | None | The screen's frequency. | number | N/A |
| angle | None | The screen's angle (in degrees) | number | N/A |

## ScreenSpotFunction

Color separation screen spot function.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| name | None | The color separation screen spot function name. | string | N/A |
| spotFunction | None | The spot function in terms of the PostScript commands. | string | N/A |

## Ink

Printer's ink.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| name | None | The ink's name. | string | N/A |
| inkInfo | None | The ink information. | InkInfo | N/A |

## InkInfo

Ink information.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| printingStatus | None | The ink printing status. | InkPrintStatus | N/A |
| kind | None | The ink type. | InkType | N/A |
| trapping | None | The trapping type. | TrappingType | N/A |
| trappingOrder | None | The order of trapping for the ink. | Int32 | N/A |
| density | None | The neutral density. | number | N/A |
| frequency | None | The ink's frequency. | number | N/A |
| angle | None | The ink's screen angle (in degrees) | number | N/A |
| customColor | None | The color of the custom ink. | Color | N/A |
| dotShape | None | The dot shape name. | string | N/A |

## DocumentPreset

The new document preset to use for creating a new document.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| title | None | The title for the new document. | string | Untitled |
| width | None | The width for the new document. | number | 612.0 |
| height | None | The height for the new document. | number | 792.0 |
| numArtboards | None | Number of artboards for new document.Range (1:100). | Int32 | 1 |
| artboardLayout | None | Layout for artboards. | DocumentArtboardLayout | DocumentArtboardLayout.GridByRow |
| artboardSpacing | None | Spacing between artboards. | number | 20.0 |
| artboardRowsOrCols | None | Number of rows (for rows layout) OR column(for column layouts)of artboards.Range is 1 to (docNumArtboards - 1) or 1 for single row or column layouts. | Int32 | 1 |
| colorMode | None | The color mode for the new document. | DocumentColorSpace | DocumentColorSpace.CMYK |
| units | None | The units for the new document. | RulerUnits | RulerUnits.Points |
| previewMode | None | The preview mode for the new document. | DocumentPreviewMode | DocumentPreviewMode.DefaultPreview |
| rasterResolution | None | The raster resolution for the new document. | DocumentRasterResolution | DocumentRasterResolution.ScreenResolution |
| transparencyGrid | None | The transparency grid for the new document. | DocumentTransparencyGrid | DocumentTransparencyGrid.TransparencyGridNone |
| documentBleedOffset | None | Document bleed offset rect. | Rect | N/A |
| documentBleedLink | None | Document link for bleed values. | bool | true |

## PrintOptions

The print options.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| printerName | None | The name of the printer to print to. | string | N/A |
| PPDName | None | The name of the PPD to use. | string | N/A |
| printPreset | None | The name of a print preset to use. | string | N/A |
| flattenerPreset | None | The transparency flattener preset name. | string | N/A |
| paperOptions | None | The paper options. | PrintPaperOptions | N/A |
| jobOptions | None | The printing job options. | PrintJobOptions | N/A |
| colorSeparationOptions | None | The printing color separation options. | PrintColorSeparationOptions | N/A |
| coordinateOptions | None | The printing coordinate options. | PrintCoordinateOptions | N/A |
| pageMarksOptions | None | The printing page marks options. | PrintPageMarksOptions | N/A |
| fontOptions | None | The printing font options. | PrintFontOptions | N/A |
| postScriptOptions | None | The printing PostScript options. | PrintPostScriptOptions | N/A |
| colorManagementOptions | None | The printing color management options. | PrintColorManagementOptions | N/A |
| flattenerOptions | None | The printing flattener options. | PrintFlattenerOptions | N/A |

## PrintPaperOptions

The paper options.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| name | None | The paper's name. | string | N/A |
| width | None | The custom width (in points) for using the custom paper. | number | 0 |
| height | None | The custom height (in points) for using the custom paper. | number | 0 |
| offset | None | Custom offset (in points) for using the custom paper. | number | 0 |
| transverse | None | Whether to transverse the artwork (rotate 90 degrees) on the custom paper. | bool | false |

## PrintJobOptions

The print job options.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| designation | None | The layers/objects to be printed. | PrintArtworkDesignation | PrintArtworkDesignation.VISIBLEPRINTABLELAYERS |
| printArea | None | The printing bounds. | PrintingBounds | PrintingBounds.ARTBOARDBOUNDS |
| copies | None | The number of copies to print. | Int32 | 1 |
| reversePages | None | Print pages in reverse order. | bool | false |
| collate | None | Whether to collate print pages. | bool | false |
| file | None | The file to be printed to. | File | N/A |
| printAsBitmap | None | Whether to print as bitmap. | bool | false |
| bitmapResolution | None | The bitmap resolution. | number | 0 |
| name | None | The print job name. | string | N/A |
| printAllArtboards | None | Whether to print all artboards. | bool | true |
| artboardRange | None | Artboard Range to be printed if PrintAllArtboards is false. | string | 1- |

## PrintColorSeparationOptions

Print color separation options.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| colorSeparationMode | None | The color separation type. | PrintColorSeparationMode | PrintColorSeparationMode.COMPOSITE |
| convertSpotColors | None | Whether to convert all spot colors to process colors. | bool | false |
| overPrintBlack | None | Whether to overprint in black. | bool | false |
| inkList | None | The list of inks for color separation. | Ink | N/A |

## PrintCoordinateOptions

The print coordinate options.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| orientation | None | The artwork orientation. | PrintOrientation | PrintOrientation.PORTRAIT |
| emulsion | None | Whether to flip artwork horizontally. | bool | false |
| position | None | The artwork position on media. | PrintPosition | PrintPosition.TRANSLATECENTER |
| fitToPage | None | Whether to proportionally scale the artwork to fit on the page. | bool | false |
| horizontalScale | None | The horizontal scaling factor expressed as a percentage (100 = 100%) | number | 100 |
| verticalScale | None | The vertical scaling factor expressed as a percentage (100 = 100%) | number | 100 |
| tiling | None | The page tiling mode. | PrintTiling | PrintTiling.TILESINGLEFULLPAGE |

## PrintPageMarksOptions

The page marks options.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| pageMarksType | None | The page marks style. | PageMarksTypes | PageMarksTypes.Roman |
| trimMarksWeight | None | Stroke weight of trim marks. | number | 0.125 |
| trimMarks | None | Whether to enable trim marks printing. | bool | false |
| registrationMarks | None | Whether to enable registration marks printing. | bool | false |
| colorBars | None | Whether to enable color bars printing. | bool | false |
| pageInfoMarks | None | Whether to enable page info marks printing. | bool | false |
| bleedOffsetRect | None | The bleed offset rect. | Rect | N/A |
| marksOffsetRect | None | The page marks offset rect. | Rect | N/A |

## PrintFontOptions

The font options for printing.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| downloadFonts | None | The font download mode. | PrintFontDownloadMode | PrintFontDownloadMode.DOWNLOADSUBSET |
| fontSubstitution | None | The font substitution policy. | FontSubstitutionPolicy | FontSubstitutionPolicy.SUBSTITUTEOBLIQUE |

## PrintPostScriptOptions

The PostScript options.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| postScriptLevel | None | The PostScript language level. | PrinterPostScriptLevelEnum | PrinterPostScriptLevelEnum.PSLEVEL2 |
| binaryPrinting | None | Whether to print in binary mode. | bool | false |
| negativePrinting | None | Whether to print in negative mode. | bool | false |
| imageCompression | None | The image compression type. | PostScriptImageCompressionType | PostScriptImageCompressionType.IMAGECOMPRESSIONNONE |
| forceContinuousTone | None | Whether to force continuous tone. | bool | false |
| compatibleShading | None | Use PostScript level 1 compatible gradient and gradient mesh printing. | bool | false |
| shadingResolution | None | The shading resolution. | number | 300 |

## PrintColorManagementOptions

The color management options.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| colorProfileMode | None | The color management profile mode. | PrintColorProfile | PrintColorProfile.SOURCEPROFILE |
| intent | None | The color management intent type. | PrintColorIntent | PrintColorIntent.RELATIVECOLORIMETRIC |
| name | None | The color management profile name. | string | N/A |

## PrintFlattenerOptions

The transparency flattening options.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| flatteningBalance | None | The flattening balance. | Int32 | 100 |
| rasterizationResolution | None | The rasterization resolution. | number | 300 |
| gradientResolution | None | The gradient resolution. | number | 300 |
| convertTextToOutlines | None | Whether to convert all text to outlines. | bool | false |
| convertStrokesToOutlines | None | Whether to convert all strokes to outlines. | bool | false |
| clipComplexRegions | None | Whether to clip complex regions. | bool | false |
| overprint | None | Overprint. | PDFOverprint | PDFOverprint.PRESERVEPDFOVERPRINT |

## ImageCaptureOptions

Options which may be supplied when capturing a portion of the artwork as an 24 bit PNG file.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| resolution | None | The resolution of the captured image file. | number | 150 |
| transparency | None | Should the resulting image use transparency. | bool | false |
| matte | None | Should the artboard be matted with a color. | bool | false |
| matteColor | None | The color to use when matting the artboard (default: white) | RGBColor | N/A |
| antiAliasing | None | Should the resulting image be antialiased. | bool | false |

## RasterEffectOptions

The document raster effects settings.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| colorModel | None | The color model for the rasterization. | RasterizationColorModel | RasterizationColorModel.DEFAULTCOLORMODEL |
| resolution | None | The rasterization resolution in dots-per-inch (dpi) | number | 300 |
| transparency | None | Should the resulting image use transparency. | bool | false |
| antiAliasing | None | Should the resulting image be antialiased. | bool | false |
| clippingMask | None | Should a clipping mask be created for the resulting image. | bool | false |
| convertSpotColors | None | Whether to convert all spot colors to process colors in the resulting image. | bool | false |
| padding | None | The amount of white space (in points) to be added around the object during rasterization. | number | 0 |

## RasterizeOptions

Options which may be supplied when rasterizing the artwork.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| colorModel | None | The color model for the rasterization. | RasterizationColorModel | RasterizationColorModel.DEFAULTCOLORMODEL |
| resolution | None | The rasterization resolution in dots-per-inch (dpi) | number | 300 |
| transparency | None | Should the resulting image use transparency. | bool | false |
| antiAliasingMethod | None | The type of antialiasing method. | AntiAliasingMethod | AntiAliasingMethod.ARTOPTIMIZED |
| clippingMask | None | Should a clipping mask be created for the resulting image. | bool | false |
| convertSpotColors | None | Whether to convert all spot colors to process colors in the resulting image. | bool | false |
| convertTextToOutlines | None | Should all text be converted to outlines before rasterization. | bool | false |
| includeLayers | None | Should the resulting image incorporates the layer attributes (such as opacity and blend mode) | bool | false |
| backgroundBlack | None | Should rasterize against a black background instead of white. | bool | false |
| padding | None | The amount of white space (in points) to be added around the object during rasterization. | number | 0 |

## RadialRepeatConfig

Options for radial repaat art configuration.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| numberOfInstances | None | Number of instances of radial repeat art. | Int32 | 8 |
| reverseOverlap | None | Reverse overlap of radial repeat art. | bool | false |
| radius | None | Radius of radial repeat art. | number | -1 |

## GridRepeatConfig

Options for grid repaat art configuration.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| horizontalSpacing | None | Spacing between each rows. | number | 10 |
| verticalSpacing | None | Spacing between each columns. | number | 10 |
| patternType | None | Shift type of grid repeat art. | RepeatGridShiftFlipType | RepeatGridShiftFlipType.NOSF |
| rowFlipType | None | Row flip type of grid repeat art. | RepeatGridShiftFlipType | RepeatGridShiftFlipType.NOSF |
| columnFlipType | None | Column flip type of grid repeat art. | RepeatGridShiftFlipType | RepeatGridShiftFlipType.NOSF |

## SymmetryRepeatConfig

Options for symmetry repaat art configuration.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| axisRotationAngleInRadians | None | Symmetry axis rotation angle wrt x-axis in anti-clockwise fashion. | number | 1.57 |

## Application

The Adobe Illustrator application.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| parent | readonly | The object's container. | Object | N/A |
| typename | readonly | The class name of the object. | string | N/A |
| name | readonly | The application's name. | string | N/A |
| path | readonly | Path specification for the application. | File | N/A |
| activeDocument | None | The active document. | Document | N/A |
| userAdobeID | readonly | The current users adobe id. | string | N/A |
| userGUID | readonly | The current user's GUID. | string | N/A |
| version | readonly | The version of the Adobe Illustrator application. | string | N/A |
| buildNumber | readonly | The build number of the Adobe Illustrator application. | string | N/A |
| locale | readonly | The Locale of the Adobe Illustrator application. | string | N/A |
| scriptingVersion | readonly | The version of the Scripting plugin. | string | N/A |
| freeMemory | readonly | The amount of unused memory within the Adobe Illustrator partition. | Int32 | N/A |
| browserAvailable | readonly | Is a web browser available? | bool | N/A |
| selection | None | The selection visible to the user. | any | N/A |
| visible | readonly | Is the application visible. | bool | N/A |
| userInteractionLevel | None | What level of interaction with the user should be allowed when handling script commands. | UserInteractionLevel | N/A |
| coordinateSystem | None | Coordinate System used by script. | CoordinateSystem | N/A |
| preferences | readonly | Preferences for Illustrator. | Preferences | N/A |
| printerList | readonly | The list of installed printers. | Printer | N/A |
| PPDFileList | readonly | The list of PPD files currently available for use. For performance reasons, the PPDFile entry only contains the model name and file spec of each PPD file. | PPDFile | N/A |
| printPresetsList | readonly | The list of print preset names currently available for use. | string | N/A |
| startupPresetsList | readonly | The list of presets available for creating a new document. | string | N/A |
| PDFPresetsList | readonly | The list of PDF preset names currently available for use. | string | N/A |
| flattenerPresetsList | readonly | The list of flattener style names currently available for use. | string | N/A |
| tracingPresetsList | readonly | The list of tracing preset names currently available for use. | string | N/A |
| colorSettingsList | readonly | The list of color settings files currently available for use. | File | N/A |
| defaultColorSettings | readonly | The default color settings file for the current application locale. | File | N/A |
| pasteRemembersLayers | None | Does paste operation remember layers structure? | bool | N/A |
| documents | readonly | The open documents. | Documents | N/A |
| homeScreenVisible | readonly | True if home Screen is Visible. | bool | N/A |
| textFonts | readonly | Installed fonts. | TextFonts | N/A |

## Document

A document.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| parent | readonly | The object's container. | Object | N/A |
| typename | readonly | The class name of the object. | string | N/A |
| stationery | readonly | Is the file a stationery file? | bool | N/A |
| fullName | readonly | The file associated with the document. | File | N/A |
| activeLayer | None | The active layer. | Layer | N/A |
| activeView | readonly | The document's current view. | View | N/A |
| geometricBounds | readonly | The bounds of the illustration excluding stroke width. | Rect | N/A |
| visibleBounds | readonly | The visible bounds of the illustration including stroke width. | Rect | N/A |
| rulerOrigin | None | No description available. | Point | N/A |
| rulerUnits | readonly | No description available. | RulerUnits | N/A |
| pageOrigin | None | No description available. | Point | N/A |
| cropBox | None | No description available. | Rect | N/A |
| cropStyle | None | No description available. | CropOptions | N/A |
| width | readonly | No description available. | number | N/A |
| height | readonly | No description available. | number | N/A |
| showPlacedImages | readonly | No description available. | bool | N/A |
| outputResolution | readonly | No description available. | number | N/A |
| printTiles | readonly | No description available. | bool | N/A |
| selection | None | The selection within the document. | any | N/A |
| splitLongPaths | readonly | No description available. | bool | N/A |
| tileFullPages | readonly | No description available. | bool | N/A |
| useDefaultScreen | readonly | No description available. | bool | N/A |
| documentColorSpace | readonly | The color space used for the document. | DocumentColorSpace | N/A |
| name | readonly | The document's name. | string | N/A |
| path | readonly | Path specification for the document. | File | N/A |
| isCloudDocument | readonly | Is the document saved on cloud. | bool | N/A |
| cloudPath | readonly | Path specification for the cloud document. | string | N/A |
| saved | None | Has the document been saved? | bool | N/A |
| defaultFilled | None | Should a new path be filled? | bool | N/A |
| defaultFillColor | None | Default fill color. | Color | N/A |
| defaultFillOverprint | None | Will art beneath a filled object be overprinted by default? | bool | N/A |
| defaultStroked | None | Should a new path be stroked? | bool | N/A |
| defaultStrokeColor | None | Default stroke color. | Color | N/A |
| defaultStrokeOverprint | None | Will art beneath a stroked object be overprinted by default? | bool | N/A |
| defaultStrokeWidth | None | Default width of stroke. | number | N/A |
| defaultStrokeDashes | None | Default dash lengths (set to {} for a solid line) | number | N/A |
| defaultStrokeDashOffset | None | The default distance into the dash pattern at which the pattern should be started. | number | N/A |
| defaultStrokeCap | None | Default type of line capping. | StrokeCap | N/A |
| defaultStrokeJoin | None | Default type of joints. | StrokeJoin | N/A |
| defaultStrokeMiterLimit | None | Specifies whether a join is mitered (pointed) or beveled (squared-off) by default. | number | N/A |
| activeDataSet | None | The active data set. | DataSet | N/A |
| variablesLocked | None | The locked variables. | bool | N/A |
| XMPString | None | The XMP packet string associated with the document. | string | N/A |
| rasterEffectSettings | None | The document raster effects settings. | RasterEffectOptions | N/A |
| colorProfileName | readonly | The name of the color profile of the document. | string | N/A |
| scaleFactor | readonly | The scale factor of the document. | number | N/A |
| assets | readonly | All assets in the document. | Assets | N/A |
| artboards | readonly | All artboards in the document. | Artboards | N/A |
| compoundPathItems | readonly | The compound path artwork in this collection. | CompoundPathItems | N/A |
| layers | readonly | The layers in this document. | Layers | N/A |
| pageItems | readonly | All the artwork in this document. | PageItems | N/A |
| pathItems | readonly | The path artwork in this document. | PathItems | N/A |
| tags | readonly | The tags in this document. | Tags | N/A |
| views | readonly | The views in this document. | Views | N/A |
| rasterItems | readonly | The raster art items in this document. | RasterItems | N/A |
| placedItems | readonly | The placed art items in this document. | PlacedItems | N/A |
| embeddedItems | readonly | The embedded art items in this layer. | EmbeddedItems | N/A |
| meshItems | readonly | The mesh art items in this document. | MeshItems | N/A |
| pluginItems | readonly | The plugin art items in this document. | PluginItems | N/A |
| graphItems | readonly | The graph art items in this document. | GraphItems | N/A |
| nonNativeItems | readonly | The non-native art items in this document. | NonNativeItems | N/A |
| groupItems | readonly | The group items in this document. | GroupItems | N/A |
| textFrames | readonly | The text frame items in this document. | TextFrameItems | N/A |
| stories | readonly | The story items in this document. | Stories | N/A |
| characterStyles | readonly | The list of character styles in this document. | CharacterStyles | N/A |
| paragraphStyles | readonly | The list of paragraph styles in this document. | ParagraphStyles | N/A |
| kinsokuSet | readonly | The Kinsoku set. | string | N/A |
| mojikumiSet | readonly | The Mojikumi set. | string | N/A |
| swatches | readonly | The swatches in this document. | Swatches | N/A |
| swatchGroups | readonly | The Swatch Groups in this document. | SwatchGroups | N/A |
| gradients | readonly | The gradients available in this document. | Gradients | N/A |
| patterns | readonly | The patterns available in this document. | Patterns | N/A |
| spots | readonly | The custom spot colors available in this document. | Spots | N/A |
| symbols | readonly | The symbols defined in this document. | Symbols | N/A |
| symbolItems | readonly | The symbol items in this document. | SymbolItems | N/A |
| brushes | readonly | The brushes defined in this document. | Brushes | N/A |
| graphicStyles | readonly | The graphic styles defined in this document. | ArtStyles | N/A |
| variables | readonly | The variables defined in this document. | Variables | N/A |
| inkList | readonly | The list of inks in this document. | Ink | N/A |
| dataSets | readonly | The data sets defined in this document. | DataSets | N/A |
| legacyTextItems | readonly | The text frame items in this story. | LegacyTextItems | N/A |
| symmetryRepeatItems | readonly | The symmetry repeat items in this document. | SymmetryRepeatItems | N/A |
| radialRepeatItems | readonly | The radial repeat items in this document. | RadialRepeatItems | N/A |
| gridRepeatItems | readonly | The grid repeat items in this document. | GridRepeatItems | N/A |

## Layer

A layer.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| parent | readonly | The object's container. | Object | N/A |
| typename | readonly | The class name of the object. | string | N/A |
| visible | None | Is the layer visible? | bool | N/A |
| locked | None | Is the layer editable? | bool | N/A |
| printable | None | Is the layer printable? | bool | N/A |
| hasSelectedArtwork | None | Is any artwork in this layer selected? Setting this property to false deselects all artwork in the layer. | bool | N/A |
| preview | None | Is the layer rendered in preview mode? | bool | N/A |
| dimPlacedImages | None | Is rendered as dimmed in this layer? | bool | N/A |
| color | None | Color used when outlining artwork in this layer. | RGBColor | N/A |
| name | None | The layer's name. | string | N/A |
| opacity | None | The layer's opacity (between 0.0 and 100.0) | number | N/A |
| zOrderPosition | readonly | The drawing order of the layer. | Int32 | N/A |
| absoluteZOrderPosition | readonly | The absolute drawing order of the layer. | Int32 | N/A |
| sliced | None | Is the layer sliced (default: false) | bool | N/A |
| blendingMode | None | The mode used when compositing an object. | BlendModes | N/A |
| isIsolated | None | Is the artwork isolated. | bool | N/A |
| artworkKnockout | None | Is the artwork used to create a knockout. | KnockoutState | N/A |
| compoundPathItems | readonly | The compound path artwork in this layer. | CompoundPathItems | N/A |
| pageItems | readonly | All the artwork in this layer. | PageItems | N/A |
| pathItems | readonly | The path artwork in this layer. | PathItems | N/A |
| rasterItems | readonly | The raster art items in this layer. | RasterItems | N/A |
| placedItems | readonly | The placed art items in this layer. | PlacedItems | N/A |
| meshItems | readonly | The mesh art items in this layer. | MeshItems | N/A |
| pluginItems | readonly | The plugin art items in this layer. | PluginItems | N/A |
| graphItems | readonly | The graph art items in this layer. | GraphItems | N/A |
| nonNativeItems | readonly | The non-native art items in this layer. | NonNativeItems | N/A |
| groupItems | readonly | The group items in this layer. | GroupItems | N/A |
| textFrames | readonly | The text frame items in this layer. | TextFrameItems | N/A |
| layers | readonly | Nested layers. | Layers | N/A |
| symbolItems | readonly | The symbol items in this layer. | SymbolItems | N/A |
| legacyTextItems | readonly | The text frame items in this story. | LegacyTextItems | N/A |
| symmetryRepeatItems | readonly | The symmetry repeat items in this layer. | SymmetryRepeatItems | N/A |
| radialRepeatItems | readonly | The radial repeat items in this layer. | RadialRepeatItems | N/A |
| gridRepeatItems | readonly | The grid repeat items in this layer. | GridRepeatItems | N/A |

## View

A view.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| parent | readonly | The object's container. | Object | N/A |
| typename | readonly | The class name of the object. | string | N/A |
| bounds | readonly | The bounding rectangle of this view. | Rect | N/A |
| centerPoint | None | The center point of this view. | Point | N/A |
| zoom | None | The zoom factor of this view. | number | N/A |
| visibleZoom | None | The zoom factor of this view that is visible to user. | number | N/A |
| rotate | None | The rotation angle of this view. | number | N/A |
| screenMode | None | The mode of display. | ScreenMode | N/A |

## Gradient

A gradient.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| parent | readonly | The object's container. | Object | N/A |
| typename | readonly | The class name of the object. | string | N/A |
| type | None | The gradient type. | GradientType | N/A |
| name | None | The gradient's name. | string | N/A |
| gradientStops | readonly | The stops in this gradient. | GradientStops | N/A |

## GradientStop

A gradient stop.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| parent | readonly | The object's container. | Object | N/A |
| typename | readonly | The class name of the object. | string | N/A |
| midPoint | None | Midpoint key value in percent. | number | N/A |
| rampPoint | None | Location of color in the blend (in percent) | number | N/A |
| color | None | The color linked to this gradient stop. | Color | N/A |
| opacity | None | The opacity (between 0.0 and 100.0) value for the gradient stop. | number | N/A |

## Preferences

Preferences for Illustrator.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| parent | readonly | The object's container. | Object | N/A |
| typename | readonly | The class name of the object. | string | N/A |
| photoshopFileOptions | readonly | Options to use when opening or placing a Photoshop file. | OpenOptionsPhotoshop | N/A |
| PDFFileOptions | readonly | Options to use when opening or placing a PDF file. | OpenOptionsPDF | N/A |
| AutoCADFileOptions | readonly | Options to use when opening or placing a AutoCAD file. | OpenOptionsAutoCAD | N/A |

## Spot

A custom color.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| parent | readonly | The object's container. | Object | N/A |
| typename | readonly | The class name of the object. | string | N/A |
| name | None | The custom color's name. | string | N/A |
| color | None | No description available. | Color | N/A |
| colorType | None | Type of the custom color. | ColorModel | N/A |
| spotKind | readonly | Kind of the spot color (i.e. RGB, CMYK or LAB), it is the name of color kind contained in spot. | SpotColorKind | N/A |

## Variable

Dynamic object used to create data-driven graphics.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| parent | readonly | The object's container. | Object | N/A |
| typename | readonly | The class name of the object. | string | N/A |
| kind | None | The variable's type. | VariableKind | N/A |
| name | None | The name of this variable. | string | N/A |
| pageItems | readonly | All the artwork in this document. | PageItems | N/A |

## DataSet

A set of variables and their associated dynamic data which will be used for dynamic publishing.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| parent | readonly | The object's container. | Object | N/A |
| typename | readonly | The class name of the object. | string | N/A |
| name | None | The name of this dataset. | string | N/A |

## Swatch

A color swatch.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| parent | readonly | The object's container. | Object | N/A |
| typename | readonly | The class name of the object. | string | N/A |
| name | None | The swatch's name. | string | N/A |
| color | None | The color information of the swatch. | Color | N/A |

## SwatchGroup

A Swatch group.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| parent | readonly | The object's container. | Object | N/A |
| typename | readonly | The class name of the object. | string | N/A |
| name | None | Name of the swatch group. | string | N/A |

## Pattern

A pattern.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| parent | readonly | The object's container. | Object | N/A |
| typename | readonly | The class name of the object. | string | N/A |
| name | None | The pattern's name. | string | N/A |

## Symbol

A symbol.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| parent | readonly | The object's container. | Object | N/A |
| typename | readonly | The class name of the object. | string | N/A |
| name | None | The symbol's name. | string | N/A |

## Brush

A brush.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| parent | readonly | The object's container. | Object | N/A |
| typename | readonly | The class name of the object. | string | N/A |
| name | None | The brush's name. | string | N/A |

## ArtStyle

An art style.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| parent | readonly | The object's container. | Object | N/A |
| typename | readonly | The class name of the object. | string | N/A |
| name | None | The art style's name. | string | N/A |

## TextFont

An installed font.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| parent | readonly | The object's container. | Object | N/A |
| typename | readonly | The class name of the object. | string | N/A |
| name | readonly | The font's full name. | string | N/A |
| family | readonly | The font's family name. | string | N/A |
| style | readonly | The font's style name. | string | N/A |
| axisVector | readonly | The font's Axis Vector. | number | N/A |

## PageItem

A page item object.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| parent | readonly | The object's container. | Object | N/A |
| typename | readonly | The class name of the object. | string | N/A |
| URL | None | The value of the Adobe URL tag assigned to this artwork item. | string | N/A |
| note | None | The note assigned to this artwork item. | string | N/A |
| layer | readonly | The layer to which this artwork belongs. | Layer | N/A |
| locked | None | Is this artwork item locked? | bool | N/A |
| hidden | None | Is this artwork item hidden? | bool | N/A |
| selected | None | Is this artwork item selected? | bool | N/A |
| position | None | The position of the top left corner of the art item. | Point | N/A |
| width | None | The width of the art item. | number | N/A |
| height | None | The height of the art item. | number | N/A |
| geometricBounds | readonly | The bounds of the artwork excluding stroke width. | Rect | N/A |
| visibleBounds | readonly | The visible bounds of the artwork including stroke width. | Rect | N/A |
| controlBounds | readonly | The bounds of the artwork including stroke width and controls. | Rect | N/A |
| name | None | The item's name. | string | N/A |
| uuid | readonly | The item's unique identifier. | string | N/A |
| blendingMode | None | The mode used when compositing an object. | BlendModes | N/A |
| opacity | None | The object's opacity (between 0.0 and 100.0) | number | N/A |
| isIsolated | None | Is the artwork isolated. | bool | N/A |
| artworkKnockout | None | Is the artwork used to create a knockout. | KnockoutState | N/A |
| zOrderPosition | readonly | The drawing order of the art within it's group or layer. | Int32 | N/A |
| absoluteZOrderPosition | readonly | The absolute drawing order of the layer. | Int32 | N/A |
| editable | readonly | Can the art item be modified. | bool | N/A |
| sliced | None | Is the art item sliced (default: false) | bool | N/A |
| top | None | The top position of the art item. | number | N/A |
| left | None | The left position of the art item. | number | N/A |
| visibilityVariable | None | The visibility variable bound to this page item. | any | N/A |
| tags | readonly | The collection of tags associated with this page item. | Tags | N/A |
| pixelAligned | None | Is this artwork item aligned to Pixel Grid? | bool | N/A |
| wrapped | None | Wrap text frame objects around this object (text frame must be above the object) | bool | N/A |
| wrapOffset | None | Use this offset when wrapping text around this object. | number | N/A |
| wrapInside | None | Should the text frame object be wrapped inside this object? | bool | N/A |

## CompoundPathItem

Compound path artwork item.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| parent | readonly | The object's container. | Object | N/A |
| typename | readonly | The class name of the object. | string | N/A |
| pathItems | readonly | The path artwork in this compound path. | PathItems | N/A |

## Tag

A tag associated with a piece of artwork.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| parent | readonly | The object's container. | Object | N/A |
| typename | readonly | The class name of the object. | string | N/A |
| name | None | The tag's name. | string | N/A |
| value | None | The data stored in this tag. | string | N/A |

## PathItem

An artwork path item.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| parent | readonly | The object's container. | Object | N/A |
| typename | readonly | The class name of the object. | string | N/A |
| closed | None | Is this path closed? | bool | N/A |
| area | readonly | The area of this path in square points. | number | N/A |
| length | readonly | The length of this path in points. | number | N/A |
| guides | None | Is this path a guide object? | bool | N/A |
| filled | None | Should the path be filled? | bool | N/A |
| fillColor | None | Fill color. | Color | N/A |
| fillOverprint | None | Will art beneath a filled object be overprinted? | bool | N/A |
| stroked | None | Should the path be stroked? | bool | N/A |
| strokeColor | None | Stroke color. | Color | N/A |
| strokeOverprint | None | Will art beneath a stroked object be overprinted? | bool | N/A |
| strokeWidth | None | Width of stroke. | number | N/A |
| strokeDashes | None | Dash lengths (set to {} for a solid line) | number | N/A |
| strokeDashOffset | None | The default distance into the dash pattern at which the pattern should be started. | number | N/A |
| strokeCap | None | Type of line capping. | StrokeCap | N/A |
| strokeJoin | None | Type of joints. | StrokeJoin | N/A |
| strokeMiterLimit | None | Whether a join is mitered (pointed) or beveled (squared-off) | number | N/A |
| clipping | None | Should this be used as a clipping path? | bool | N/A |
| evenodd | None | Should the even-odd rule be used to determine insideness? | bool | N/A |
| resolution | None | The resolution of the path. | number | N/A |
| selectedPathPoints | readonly | All the selected points in the path. | ObjectArray | N/A |
| polarity | None | The polarity the path. | PolarityValues | N/A |
| pathPoints | readonly | No description available. | PathPoints | N/A |

## PathPoint

A point on a path.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| parent | readonly | The object's container. | Object | N/A |
| typename | readonly | The class name of the object. | string | N/A |
| anchor | None | The position (coordinates) of the anchor point. | Point | N/A |
| leftDirection | None | Location of the left direction point (in position) | Point | N/A |
| rightDirection | None | Location of the right direction point (out position) | Point | N/A |
| pointType | None | The type of point: smooth/corner. | PointType | N/A |
| selected | None | The path point selected state. | PathPointSelection | N/A |

## RasterItem

Raster artwork item.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| parent | readonly | The object's container. | Object | N/A |
| typename | readonly | The class name of the object. | string | N/A |
| file | readonly | The file containing the raster artwork. | File | N/A |
| matrix | None | The transformation matrix of the raster art object. | Matrix | N/A |
| boundingBox | None | Dimensions of raster art object regardless of transformations. | Rect | N/A |
| imageColorSpace | readonly | The color space of the raster image. | ImageColorSpace | N/A |
| embedded | None | Is the raster art embedded within the illustration? | bool | N/A |
| overprint | None | Is the raster art overprinting? | bool | N/A |
| colorizedGrayscale | readonly | Is the raster art a colorized grayscale image? | bool | N/A |
| transparent | readonly | Is the raster art transparent? | bool | N/A |
| channels | readonly | The number of image channels. | Int32 | N/A |
| bitsPerChannel | readonly | The number of bits per channel. | Int32 | N/A |
| colorants | readonly | List of colorant names. | string | N/A |
| status | readonly | Status of the linked image. | RasterLinkState | N/A |
| contentVariable | None | The content variable bound to this raster art object. | any | N/A |

## PlacedItem

Placed artwork item.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| parent | readonly | The object's container. | Object | N/A |
| typename | readonly | The class name of the object. | string | N/A |
| file | None | The file containing the placed artwork. | File | N/A |
| matrix | None | The transformation matrix of the placed art object. | Matrix | N/A |
| boundingBox | readonly | Dimensions of placed art object, regardless of transformations. | Rect | N/A |
| contentVariable | None | The content variable bound to this placed art object. | any | N/A |

## EmbedItem

Embedded artwork item.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| parent | readonly | The object's container. | Object | N/A |
| typename | readonly | The class name of the object. | string | N/A |
| file | None | The file containing the placed artwork. | File | N/A |

## GraphItem

Graph artwork item.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| parent | readonly | The object's container. | Object | N/A |
| typename | readonly | The class name of the object. | string | N/A |
| contentVariable | None | The content variable bound to this graph. | any | N/A |

## NonNativeItem

Non-native artwork item.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| parent | readonly | The object's container. | Object | N/A |
| typename | readonly | The class name of the object. | string | N/A |

## MeshItem

Mesh artwork item.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| parent | readonly | The object's container. | Object | N/A |
| typename | readonly | The class name of the object. | string | N/A |

## PluginItem

Plugin artwork item.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| parent | readonly | The object's container. | Object | N/A |
| typename | readonly | The class name of the object. | string | N/A |
| isTracing | readonly | Is the plugin group a tracing? | bool | N/A |
| tracing | readonly | The tracing object associated with this plugin item. | TracingObject | N/A |

## GroupItem

An artwork group item.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| parent | readonly | The object's container. | Object | N/A |
| typename | readonly | The class name of the object. | string | N/A |
| clipped | None | Are the group elements clipped to the clipping path? | bool | N/A |
| groupItems | readonly | The group items in this group. | GroupItems | N/A |
| pageItems | readonly | All the artwork in this group. | PageItems | N/A |
| compoundPathItems | readonly | The compound path artwork in this group. | CompoundPathItems | N/A |
| pathItems | readonly | The path artwork in this group. | PathItems | N/A |
| rasterItems | readonly | The raster art items in this group. | RasterItems | N/A |
| placedItems | readonly | The placed art items in this group. | PlacedItems | N/A |
| meshItems | readonly | The mesh art items in this group. | MeshItems | N/A |
| pluginItems | readonly | The plugin art items in this group. | PluginItems | N/A |
| graphItems | readonly | The graph art items in this group. | GraphItems | N/A |
| nonNativeItems | readonly | The non-native art items in this group. | NonNativeItems | N/A |
| textFrames | readonly | The text frame items in this group. | TextFrameItems | N/A |
| symbolItems | readonly | The symbol items in this group. | SymbolItems | N/A |
| legacyTextItems | readonly | The text frame items in this story. | LegacyTextItems | N/A |
| symmetryRepeatItems | readonly | The symmetry repeat items in this document. | SymmetryRepeatItems | N/A |
| radialRepeatItems | readonly | The radial repeat items in this document. | RadialRepeatItems | N/A |
| gridRepeatItems | readonly | The grid repeat items in this document. | GridRepeatItems | N/A |

## SymbolItem

An instance of a Symbol.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| parent | readonly | The object's container. | Object | N/A |
| typename | readonly | The class name of the object. | string | N/A |
| symbol | None | The symbol that was used to create this symbol item. | Symbol | N/A |

## TextPath

A text path item.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| parent | readonly | The object's container. | Object | N/A |
| typename | readonly | The class name of the object. | string | N/A |
| position | None | The position of the top left corner of the text path. | Point | N/A |
| width | None | The width of the text path. | number | N/A |
| height | None | The height of the text path. | number | N/A |
| blendingMode | None | The mode used when compositing an object. | BlendModes | N/A |
| opacity | None | The object's opacity (between 0.0 and 100.0) | number | N/A |
| editable | readonly | Can the text path be modified. | bool | N/A |
| top | None | The top position of the text path. | number | N/A |
| left | None | The left position of the text path. | number | N/A |
| closed | None | Is this path closed? | bool | N/A |
| area | readonly | The area of this path in square points. | number | N/A |
| guides | None | Is this path a guide object? | bool | N/A |
| filled | None | Should the path be filled? | bool | N/A |
| fillColor | None | Fill color. | Color | N/A |
| fillOverprint | None | Will art beneath a filled object be overprinted? | bool | N/A |
| stroked | None | Should the path be stroked? | bool | N/A |
| strokeColor | None | Stroke color. | Color | N/A |
| strokeOverprint | None | Will art beneath a stroked object be overprinted? | bool | N/A |
| strokeWidth | None | Width of stroke. | number | N/A |
| strokeDashes | None | Dash lengths (set to {} for a solid line) | number | N/A |
| strokeDashOffset | None | The default distance into the dash pattern at which the pattern should be started. | number | N/A |
| strokeCap | None | Type of line capping. | StrokeCap | N/A |
| strokeJoin | None | Type of joints. | StrokeJoin | N/A |
| strokeMiterLimit | None | Whether a join is mitered (pointed) or beveled (squared-off) | number | N/A |
| clipping | None | Should this be used as a clipping path? | bool | N/A |
| evenodd | None | Should the even-odd rule be used to determine insideness? | bool | N/A |
| resolution | None | The resolution of the path. | number | N/A |
| note | None | Note assigned to the path. | string | N/A |
| selectedPathPoints | readonly | All the selected points in the path. | ObjectArray | N/A |
| polarity | None | The polarity the path. | PolarityValues | N/A |
| pathPoints | readonly | No description available. | PathPoints | N/A |

## Story

A contiguous block of text.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| parent | readonly | The object's container. | Object | N/A |
| typename | readonly | The class name of the object. | string | N/A |
| textRange | readonly | The text range of the story. | TextRange | N/A |
| textFrames | readonly | The text frame items in this story. | TextFrameItems | N/A |
| textSelection | readonly | The selected text (ranges) in the story. | TextRange | N/A |
| characters | readonly | All the characters in this text range. | Characters | N/A |
| words | readonly | All the words in this text range. | Words | N/A |
| lines | readonly | All the lines in this text range. | Lines | N/A |
| paragraphs | readonly | All the paragraphs in this text range. | Paragraphs | N/A |
| textRanges | readonly | All the text in this text range. | TextRanges | N/A |
| insertionPoints | readonly | All the insertion points in this text range. | InsertionPoints | N/A |
| length | readonly | The number of characters in the story. | Int32 | N/A |

## TextFrameItem

Text frame item.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| parent | readonly | The object's container. | Object | N/A |
| typename | readonly | The class name of the object. | string | N/A |
| story | readonly | The story of the text frame. | Story | N/A |
| contents | None | The text contents of this text frame. | string | N/A |
| textRange | readonly | The text range of the text frame. | TextRange | N/A |
| textSelection | readonly | The selected text (ranges) in the story. | TextRange | N/A |
| rowCount | None | The row count in the text frame (area text only) | Int32 | N/A |
| columnCount | None | The column count in the text frame (area text only) | Int32 | N/A |
| rowGutter | None | The row gutter in the text frame (area text only) | number | N/A |
| columnGutter | None | The column gutter in the text frame (area text only) | number | N/A |
| flowLinksHorizontally | None | Flow text between linked frame horizontally first. (area text only) | bool | N/A |
| spacing | None | The amount of spacing (path text only) | number | N/A |
| opticalAlignment | None | Is the optical alignment active? | bool | N/A |
| kind | readonly | The type of a text frame item. | TextType | N/A |
| contentVariable | None | The content variable bound to this text art item. | any | N/A |
| orientation | None | The orientation of the text in the frame. | TextOrientation | N/A |
| textPath | readonly | The path for the text frame (area and path text) | TextPath | N/A |
| anchor | None | The position of the anchor point (start of base line for point text) | Point | N/A |
| startTValue | None | The start position of text along a path, as a value relative to the path's segments (path text only) | number | N/A |
| endTValue | None | The end position of text along a path, as a value relative to the path's segments (path text only) | number | N/A |
| previousFrame | None | The linked text frame preceding this one. | TextFrameItem | N/A |
| nextFrame | None | The linked text frame following this one. | TextFrameItem | N/A |
| matrix | readonly | The transformation matrix of the text frame object. | Matrix | N/A |
| antialias | None | The type of a text anti-aliasing on text frame item. | TextAntialias | N/A |
| firstBaseline | None | The first baseline offset type for text frame item (for Area Text only) | FirstBaselineType | N/A |
| firstBaselineMin | None | The first baseline offset minimum value for text frame item (for Area Text only) | number | N/A |
| characters | readonly | All the characters in this text range. | Characters | N/A |
| words | readonly | All the words in this text range. | Words | N/A |
| lines | readonly | All the lines in this text range. | Lines | N/A |
| paragraphs | readonly | All the paragraphs in this text range. | Paragraphs | N/A |
| textRanges | readonly | All the text in this text range. | TextRanges | N/A |
| insertionPoints | readonly | All the insertion points in this text range. | InsertionPoints | N/A |

## LegacyTextItem

Unconverted legacy text items from documents in pre-version 11 formats.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| parent | readonly | The object's container. | Object | N/A |
| typename | readonly | The class name of the object. | string | N/A |
| converted | readonly | Has the legacy text item been updated to a native text frame item? | bool | N/A |

## TextRange

A range of characters from a text item.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| parent | readonly | The object's container. | Object | N/A |
| typename | readonly | The class name of the object. | string | N/A |
| characterOffset | None | Offset of the first character of the range from the beginning of the story, in characters. | Int32 | N/A |
| length | None | Length of text range. | Int32 | N/A |
| contents | None | The text string. | string | N/A |
| kerning | None | Controls the spacing between two characters (in milli-ems) | Int32 | N/A |
| story | readonly | The story of the text range. | Story | N/A |
| textSelection | readonly | The selected text (ranges) in the text range. | TextRange | N/A |
| characters | readonly | All the characters in this text range. | Characters | N/A |
| words | readonly | All the words in this text range. | Words | N/A |
| lines | readonly | All the lines in this text range. | Lines | N/A |
| paragraphs | readonly | All the paragraphs in this text range. | Paragraphs | N/A |
| textRanges | readonly | All the text in this text range. | TextRanges | N/A |
| insertionPoints | readonly | All the insertion points in this text range. | InsertionPoints | N/A |
| characterStyles | readonly | List of referenced character styles in the text range. | CharacterStyles | N/A |
| paragraphStyles | readonly | List of referenced paragraph styles in the text range. | ParagraphStyles | N/A |
| characterAttributes | readonly | The character properties for the text range. | CharacterAttributes | N/A |
| paragraphAttributes | readonly | The paragraph properties for the text range. | ParagraphAttributes | N/A |
| start | None | Start index of the text range. | Int32 | N/A |
| end | None | End index of the text range. | Int32 | N/A |

## InsertionPoint

A location between characters, used to insert new text objects.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| parent | readonly | The object's container. | Object | N/A |
| typename | readonly | The class name of the object. | string | N/A |
| story | readonly | The story of the text range. | Story | N/A |
| characters | readonly | All the characters in this text range. | Characters | N/A |
| words | readonly | All the words in this text range. | Words | N/A |
| lines | readonly | All the lines in this text range. | Lines | N/A |
| paragraphs | readonly | All the paragraphs in this text range. | Paragraphs | N/A |
| textRanges | readonly | All the text in this text range. | TextRanges | N/A |

## CharacterStyle

A named style that remembers character attributes.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| parent | readonly | The object's container. | Object | N/A |
| typename | readonly | The class name of the object. | string | N/A |
| name | None | The character style's name. | string | N/A |
| characterAttributes | readonly | The character properties for the text range. | CharacterAttributes | N/A |

## ParagraphStyle

A named style that remembers paragraph attributes.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| parent | readonly | The object's container. | Object | N/A |
| typename | readonly | The class name of the object. | string | N/A |
| name | None | The paragraph style's name. | string | N/A |
| characterAttributes | readonly | The character properties for the text range. | CharacterAttributes | N/A |
| paragraphAttributes | readonly | The paragraph properties for the text range. | ParagraphAttributes | N/A |

## CharacterAttributes

Properties of a character.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| parent | readonly | The object's container. | Object | N/A |
| typename | readonly | The class name of the object. | string | N/A |
| textFont | None | The text font. | TextFont | N/A |
| size | None | Font size in points. | number | N/A |
| horizontalScale | None | Character horizontal scaling factor expressed as a percentage (100 = 100%) | number | N/A |
| verticalScale | None | Character vertical scaling factor expressed as a percentage (100 = 100%) | number | N/A |
| autoLeading | None | Whether to use automatic leading. | bool | N/A |
| leading | None | The amount of space between two lines of text (in points) | number | N/A |
| tracking | None | The tracking or range kerning amount in thousands of an em. | Int32 | N/A |
| baselineShift | None | The amount of shift (in points) of the text baseline. | number | N/A |
| rotation | None | The character rotation angle (in degrees) | number | N/A |
| kerningMethod | None | The automatic kerning method to use. | AutoKernType | N/A |
| capitalization | None | The case of text. | FontCapsOption | N/A |
| baselinePosition | None | The baseline position of text. | FontBaselineOption | N/A |
| openTypePosition | None | The OpenType baseline position. | FontOpenTypePositionOption | N/A |
| ligature | None | Whether the ligature should be used. | bool | N/A |
| discretionaryLigature | None | Whether the discretionary ligature should be used. | bool | N/A |
| contextualLigature | None | Whether the contextual ligature should be used. | bool | N/A |
| fractions | None | Whether the OpenType fractions should be used. | bool | N/A |
| ordinals | None | Whether the OpenType ordinals should be used. | bool | N/A |
| swash | None | Whether the OpenType swash should be used. | bool | N/A |
| titling | None | Whether the OpenType titling alternates should be used. | bool | N/A |
| connectionForms | None | Whether the OpenType connection forms should be used. | bool | N/A |
| stylisticAlternates | None | Whether the OpenType stylistic alternates should be used. | bool | N/A |
| ornaments | None | Whether the OpenType ornaments should be used. | bool | N/A |
| figureStyle | None | Which figure style to use in OpenType font. | FigureStyleType | N/A |
| proportionalMetrics | None | Does the Japanese OpenType support proportional font? | bool | N/A |
| kana | None | Does the Japanese OpenType support kana? | bool | N/A |
| italics | None | Does the Japanese OpenType support italics? | bool | N/A |
| baselineDirection | None | The Japanese text baseline direction. | BaselineDirectionType | N/A |
| language | None | The language of text. | LanguageType | N/A |
| alternateGlyphs | None | The alternate glyphs form. | AlternateGlyphsForm | N/A |
| Tsume | None | The percentage of space reduction around a Japanese character (100 = 100%) | number | N/A |
| alignment | None | The character alignment type. | StyleRunAlignmentType | N/A |
| wariChuEnabled | None | Whether WariChu is enabled. | bool | N/A |
| wariChuLines | None | The number of Wari-Chu (multiple text lines fit into a space meant for one) lines. | Int32 | N/A |
| wariChuLineGap | None | The Wari-Chu line gap. | Int32 | N/A |
| wariChuScale | None | The Wari-Chu scale. | number | N/A |
| wariChuCharactersBeforeBreak | None | No description available. | Int32 | N/A |
| wariChuCharactersAfterBreak | None | No description available. | Int32 | N/A |
| wariChuJustification | None | No description available. | WariChuJustificationType | N/A |
| tateChuYokoVertical | None | The Tate-Chu-Yoko vertical adjustment in points. | Int32 | N/A |
| tateChuYokoHorizontal | None | The Tate-Chu-Yoko horizontal adjustment in points. | Int32 | N/A |
| akiLeft | None | The em amount of left aki. | number | N/A |
| akiRight | None | The em amount of right aki amount. | number | N/A |
| noBreak | None | Whether line breaks are allowed. | bool | N/A |
| fillColor | None | The color of the text fill. | Color | N/A |
| strokeColor | None | The color of the text stroke. | Color | N/A |
| overprintStroke | None | Whether to overprint the stroke of the text. | bool | N/A |
| overprintFill | None | Whether to overprint the fill of the text. | bool | N/A |
| strokeWeight | None | Line width of stroke. | number | N/A |
| underline | None | Whether to underline the text. | bool | N/A |
| strikeThrough | None | Whether to draw a strike through line over the text. | bool | N/A |
| kashidas | None | Kashidas attribute. | KashidasType | N/A |
| dirOverride | None | Direction override attribute. | DirOverrideType | N/A |
| digitSet | None | Digit set attribute. | DigitSetType | N/A |
| diacVPos | None | Diacritics positioning attribute. | DiacVPosType | N/A |
| diacXOffset | None | Diacritics x offset attribute. | number | N/A |
| diacYOffset | None | Diacritics y offset attribute. | number | N/A |
| justificationAlternates | None | Justification alternates attribute. | bool | N/A |
| stylisticSets | None | Stylistic sets attribute. | Int32 | N/A |

## ParagraphAttributes

Properties of a paragraph.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| parent | readonly | The object's container. | Object | N/A |
| typename | readonly | The class name of the object. | string | N/A |
| justification | None | Paragraph justification. | Justification | N/A |
| firstLineIndent | None | First line left indent expressed in points. | number | N/A |
| leftIndent | None | Left indent of margin expressed in points. | number | N/A |
| rightIndent | None | Right indent of margin expressed in points. | number | N/A |
| spaceBefore | None | Spacing before paragraph in points. | number | N/A |
| spaceAfter | None | Spacing after paragraph in points. | number | N/A |
| hyphenation | None | Is hyphenation enabled for the paragraph? | bool | N/A |
| minimumHyphenatedWordSize | None | Minimum hyphenated word size. | Int32 | N/A |
| minimumBeforeHyphen | None | Minimum number of characters before a hyphen. | Int32 | N/A |
| minimumAfterHyphen | None | Minimum number of characters after a hyphen. | Int32 | N/A |
| maximumConsecutiveHyphens | None | Maximum number of consecutive hypenated lines. | Int32 | N/A |
| hyphenationZone | None | Size of the hyphenation zone. | number | N/A |
| hyphenateCapitalizedWords | None | Is hyphenation enabled for the capitalized words? | bool | N/A |
| hyphenationPreference | None | Hyphenation preference scale for better spacing (0) or fewer hyphens (1) | number | N/A |
| desiredWordSpacing | None | Desired word spacing expressed as a percentage. | number | N/A |
| maximumWordSpacing | None | Maximum word spacing expressed as a percentage. | number | N/A |
| minimumWordSpacing | None | Minimum word spacing expressed as a percentage. | number | N/A |
| desiredLetterSpacing | None | Desired letter spacing expressed as a percentage. | number | N/A |
| maximumLetterSpacing | None | Maximum letter spacing expressed as a percentage. | number | N/A |
| minimumLetterSpacing | None | Minimum letter spacing expressed as a percentage. | number | N/A |
| desiredGlyphScaling | None | Desired glyph scaling expressed as a percentage. | number | N/A |
| maximumGlyphScaling | None | Maximum glyph scaling expressed as a percentage. | number | N/A |
| minimumGlyphScaling | None | Minimum glyph scaling expressed as a percentage. | number | N/A |
| singleWordJustification | None | Single word justification. | Justification | N/A |
| autoLeadingAmount | None | Auto leading amount (in percentage) | number | N/A |
| leadingType | None | Auto leading type. | AutoLeadingType | N/A |
| tabStops | None | Tab stop settings. | TabStopInfo | N/A |
| romanHanging | None | Is Roman hanging punctuation enabled? | bool | N/A |
| bunriKinshi | None | Is BunriKinshi enabled? | bool | N/A |
| burasagariType | None | The Burasagari type. | BurasagariTypeEnum | N/A |
| kinsokuOrder | None | The preferred Kinsoku order. | KinsokuOrderEnum | N/A |
| kurikaeshiMojiShori | None | Is KurikaeshiMojiShori enabled? | bool | N/A |
| kinsoku | None | The Kinsoku Shori name. | string | N/A |
| mojikumi | None | The Mojikumi name. | string | N/A |
| everyLineComposer | None | Whether to enable every line composer (as opposed to single line composer)? | bool | N/A |
| paragraphDirection | None | Main writing direction attribute. | ParagraphDirectionType | N/A |
| kashidaWidth | None | The Kashida Width attribute. | KashidaWidthType | N/A |
| composerEngine | None | Composer engine attribute. | ComposerEngineType | N/A |

## OpenOptionsPhotoshop

Options which are applied when opening or placing a Photoshop file.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| parent | readonly | The object's container. | Object | N/A |
| typename | readonly | The class name of the object. | string | N/A |
| preserveLayers | None | Should layers be Preserve when the document is converted (default: true) | bool | N/A |
| preserveImageMaps | None | Should image maps be preserved when the document is converted (default: true) | bool | N/A |
| preserveSlices | None | Should slices be preserved when the document is converted (default: true) | bool | N/A |
| preserveHiddenLayers | None | Should hidden layers be preserved when the document is converted (default: false) | bool | N/A |
| layerComp | None | Should use the specified LayerComp. | string | N/A |

## OpenOptionsPDF

Options which may be supplied when opening a PDF file.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| parent | readonly | The object's container. | Object | N/A |
| typename | readonly | The class name of the object. | string | N/A |
| pageToOpen | None | What page should be used when opening a multipage document (default: 1) | Int32 | N/A |
| pDFCropToBox | None | What box should be used when placing a multipage document (default: PDF media box) | PDFBoxType | N/A |
| pageRangeToOpen | None | Range of pages when opening a multipage document [possible values: 'all', range(for example: '1,2,3-5,8')] | string | N/A |
| placeAsLinks | None | Import PDF pages as links for optimal performance (default: true for PageRangeToOpen=all; false otherwise) | bool | N/A |

## OpenOptionsAutoCAD

Options which may be supplied when opening a AutoCAD file.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| parent | readonly | The object's container. | Object | N/A |
| typename | readonly | The class name of the object. | string | N/A |
| globalScaleOption | None | How to scale the AutoCAD drawing on import (default: Fit Artboard) | AutoCADGlobalScaleOption | N/A |
| globalScalePercent | None | Percentage scaling to apply globally on the AutoCAD drawing (default: 1.0) | number | N/A |
| unitScaleRatio | None | Ratio by which to scale while mapping the units (default: 1.0) | number | N/A |
| unit | None | Units to which to map (default: Millimeters) | AutoCADUnit | N/A |
| selectedLayoutName | None | Name of layout in the AutoCAD drawing to import. | string | N/A |
| centerArtwork | None | To center the created artwork on the artboard (default: true) | bool | N/A |
| mergeLayers | None | To merge the layers of the artwork (default: false) | bool | N/A |
| scaleLineweights | None | To scale lineweights by the same amount as rest of the drawing (default: false) | bool | N/A |

## TracingOptions

Tracing options that guide the tracing process.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| parent | readonly | The object's container. | Object | N/A |
| typename | readonly | The class name of the object. | string | N/A |
| preset | readonly | The name of the preset in use. Read-only. | string | N/A |
| viewMode | None | The visualization mode. | ViewType | N/A |
| tracingMode | None | The tracing mode: color, gray, black and white. | TracingModeType | N/A |
| tracingColorTypeValue | None | Color Type used for tracing, TracingLimitedColor or TracingFullColor . | TracingColorType | N/A |
| palette | None | The color palette (Library) name used for tracing. Use 'Document Library' or any other imported library name. | string | N/A |
| colorGroup | None | The color group name used for tracing. Use 'All' or any color group name available in color Palette (library). | string | N/A |
| tracingColors | None | Maximum number of colors allowed for tracing when TracingColorTypeValue is TracingLimitedColor. | Int32 | N/A |
| colorFidelity | None | ColorFidelity when TracingColorTypeValue is TracingFullColor. | number | N/A |
| threshold | None | The threshold value for a black and white mode tracing. | Int32 | N/A |
| grayLevels | None | The gray levels for a grayscale mode tracing.. | Int32 | N/A |
| pathFidelity | None | Path fidelity for tracing. | number | N/A |
| cornerFidelity | None | Corner fidelity for tracing. | number | N/A |
| noiseFidelity | None | Specifies minimum area of pixels to be vectorized. | number | N/A |
| tracingMethod | None | Method for tracing, either abutting or adjoining paths. | TracingMethodType | N/A |
| fills | None | Tracing with fills. Fills, Strokes or both must be on. | bool | N/A |
| strokes | None | Tracing with strokes. Fills, Strokes or both must be on. | bool | N/A |
| maxStrokeWeight | None | Maximum stroke weight (stroke only). | number | N/A |
| snapCurveToLines | None | Controls whether to snap curve to lines. | bool | N/A |
| ignoreWhite | None | Controls whether to ignore white fill color. Works only if TracingMethod is TracingMethodAbutting and mode is Black and white. | bool | N/A |

## TracingObject

A tracing object.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| parent | readonly | The object's container. | Object | N/A |
| typename | readonly | The class name of the object. | string | N/A |
| sourceArt | readonly | The source art used when creating a new tracing object. | PageItem | N/A |
| tracingOptions | readonly | The options used when tracing the artwork. | TracingOptions | N/A |
| pathCount | readonly | The number of paths in the tracing result. | Int32 | N/A |
| anchorCount | readonly | The number of anchors in the tracing result. | Int32 | N/A |
| usedColorCount | readonly | The number of colors used in the tracing result. | Int32 | N/A |

## Asset

An (exportable) asset.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| parent | readonly | The object's container. | Object | N/A |
| typename | readonly | The class name of the object. | string | N/A |
| assetID | readonly | The UID for the asset which is unique within a document. | Int32 | N/A |
| assetName | None | Name of the asset. | string | N/A |

## Artboard

An artboard object.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| parent | readonly | The object's container. | Object | N/A |
| typename | readonly | The class name of the object. | string | N/A |
| artboardRect | None | Size and position of artboard. | Rect | N/A |
| rulerPAR | None | Pixel aspect ratio, used in ruler visualization if the units are pixels. | number | N/A |
| showCenter | None | Show center mark. | bool | N/A |
| showCrossHairs | None | Show cross hairs. | bool | N/A |
| showSafeAreas | None | Show title and action safe areas (for video) | bool | N/A |
| rulerOrigin | None | Ruler origin of artboard.It is relative to left-bottom corner of the Artboard. | Point | N/A |
| name | None | The name of the artboard. | string | N/A |

## SymmetryRepeatItem

A symmetry repeat item.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| parent | readonly | The object's container. | Object | N/A |
| typename | readonly | The class name of the object. | string | N/A |
| symmetryConfig | readonly | Symmetry repeat config for repeat art. | SymmetryRepeatConfig | N/A |

## RadialRepeatItem

A radial repeat item.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| parent | readonly | The object's container. | Object | N/A |
| typename | readonly | The class name of the object. | string | N/A |
| radialConfig | readonly | Radial repeat config for repeat art. | RadialRepeatConfig | N/A |

## GridRepeatItem

A grid repeat item.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| parent | readonly | The object's container. | Object | N/A |
| typename | readonly | The class name of the object. | string | N/A |
| gridConfig | readonly | Grid repeat config for repeat art. | GridRepeatConfig | N/A |

## Point

Describes a point. This class is also a two-element collection.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| x | None | The left coordinate. | number | N/A |
| y | None | The top coordinate. | number | N/A |
| left | None | The left coordinate. | number | N/A |
| top | None | The top coordinate. | number | N/A |
| length | readonly | The array length. | number | 2 |

## Rectangle

Describes a rectangle. This class is also a four-element collection.

| Property Name | Read/Write Access | Description | Data Type | Value |
|---------------|-------------------|-------------|-----------|-------|
| x | None | The left coordinate. | number | N/A |
| y | None | The top coordinate. | number | N/A |
| width | None | The width. | number | N/A |
| height | None | The height. | number | N/A |
| left | None | The left coordinate. | number | N/A |
| right | None | The right coordinate. | number | N/A |
| top | None | The top coordinate. | number | N/A |
| bottom | None | The bottom coordinate. | number | N/A |
| length | readonly | The array length. | number | 4 |


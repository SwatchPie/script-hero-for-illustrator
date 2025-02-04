# Color Conversion in Adobe Illustrator

Illustrator and Script Hero convert color data using:

- The document's workspace (CMYK or RGB).
- The ICC Profiles configured at `Edit > Color Settings`.
- Baked-in settings such as the CIE 1976 LAB color space.

Converting a color into another space always results in a loss of the original data - converting the color back to its original space cannot restore the original data. 

The most accurate data comes from these combinations:

- CMYK document + CMYK process swatches
- RGB document + RGB process swatches
- Spot colors which always retain their original color space and data.

This table summarizes the automatic conversions that happen when:

- A swatch library is imported.
- A swatch is created manually in the Swatches panel.
- Swatches are added to a document via a script.

This table also demonstrates the reverse. For example, to convert a CMYK color to grayscale, Illustrator first converts the color to RGB. 

| Document  | Swatch Type | Swatch Mode | Converts To  |
|-----------|-------------|-------------|--------------|
| CMYK      | Process     | Grayscale   | CMYK         |
| CMYK      | Process     | RGB         | CMYK         |
| CMYK      | Process     | HSB         | RGB > CMYK   |
| CMYK      | Process     | CMYK        | CMYK         |
| CMYK      | Process     | Lab         | CMYK         |
| CMYK      | Spot        | Grayscale   | RGB > CMYK   |
| CMYK      | Spot        | RGB         | RGB          |
| CMYK      | Spot        | HSB         | RGB          |
| CMYK      | Spot        | CMYK        | CMYK         |
| CMYK      | Spot        | Lab         | CIE 1976 LAB |
| RGB       | Process     | Grayscale   | Grayscale    |
| RGB       | Process     | RGB         | RGB          |
| RGB       | Process     | HSB         | RGB          |
| RGB       | Process     | CMYK        | RGB          |
| RGB       | Process     | Lab         | RGB          |
| RGB       | Spot        | Grayscale   | CMYK         |
| RGB       | Spot        | RGB         | RGB          |
| RGB       | Spot        | HSB         | RGB          |
| RGB       | Spot        | CMYK        | CMYK         |
| RGB       | Spot        | Lab         | CIE 1976 LAB |


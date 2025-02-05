# PANTONE Dupes

Not too long ago, Adobe and Pantone parted ways and the Pantone colorbooks were removed from Adobe apps. I work in the Print-On-Demand space and generally don't need Spot colors. That said, I often used the Pantone CMYK libraries. 

When the colorbooks were removed, I did pay for the Pantone plugins, but found them ridiculous. Then I installed an older version of Illustrator and grabbed the Pantone colorbooks from the program files. This was good enough for me at the time. 

These days, if I try and load one of these colorbooks, Illustrator warns me about it. I don't know what happens if you try using these colors because I have zero time to test. Instead, I:

1. Loaded each library one at a time. 
2. Added the Pantone colors to the main Swatches panel. 
3. Used `swatch-hero/swatches-export.jsx` to export the color data. 
4. Used Google Sheets to clean up the data and prepare `makeSwatchCMYK()` for each.
5. Used a `swatches-add/swatches-add-cmyk.jsx` template to bring the renamed swatches back into Illustrator.
6. Optionally, save them as `.ase`. 


```js
// Some spreadsheet functions
=TEXT(D2, "00")
=TEXT(B2, "000")
="swatchUtils.makeSwatchCMYK('"&$C2&"',"&$D2&","&$E2&","&$F2&","&$G2&");"
```

## Scripts

These scripts add color swatches to an Illustrator document. 

Note that the Pantone CMYK colorbooks contain CMYK Process colors, so these do not need converting into a different color space. The CMYK values have been rounded to 2 decimal places, but are still a very close match to the original colors. 

- [pantone_cmyk_coated.jsx](./pantone_cmyk_coated.jsx)
- [pantone_cmyk_uncoated.jsx](./pantone_cmyk_uncoated.jsx) 

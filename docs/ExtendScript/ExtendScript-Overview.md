# Overview of the Adobe ExtendScript Framework

Here is an overview of the Adobe ExtendScript framework.

## ECMAScript 

ECMAScript is the official name of JavaScript. If you already use JavaScript, you're probably most familiar with ECMAScript 5 (ES5) or newer versions.   

## Adobe ExtendScript Framework

The Adobe ExtendScript framework is a scripting platform based on ECMAScript 3 (ES3) - an older version of JavaScript. 

ExtendScript is used to automate tasks and extend the functionality of these applications:

- Adobe Illustrator
- Adobe Photoshop
- Adobe InDesign
- Adobe After Effects
- Adobe InCopy

ExtendScript supports cross-application scripting and has robust tools for file and folder manipulation, enhancing its utility for batch processing and complex workflows. 

Note that each application has its own set of objects, methods, and properties within the ExtendScript framework. 

Other Adobe applications, such as Adobe Premiere Pro and Adobe XD, have their own scripting environments and do not use ExtendScript.


## ExtendScript Language

ExtendScript extends JavaScript ES3 with Adobe-specific objects, methods, and properties. ExtendScript is commonly referred to by its file extension - JSX. 

Many Illustrator scripts are a single JSX file that users run from either `File > Scripts` or `Ctrl+F12`. 

To write ExtendScript, change the file extension from `.js` to `.jsx` - there are no external libraries needed. 

JSX can display basic alert boxes and single-input prompts using OS-native styles. However, using multiple prompts is a poor user experience. Many times, it's more efficient to open a JSX file and edit variables manually than it is to run a script with multiple prompts. 


## ScriptUI

ScriptUI is a module within ExtendScript that lets you build dialogs for users to enter variables and run a script. ScriptUI is a great choice when: 

- You want to prompt for multiple user-defined variables all at once.
- The intended user isn't comfortable opening a JSX file and editing variables manually.
- Matching Adobe's style adds value to a script you plan to share or sell.

To learn more about ScriptUI, see:

- Peter Kahrel: [ScriptUI for Dummies](https://creativepro.com/files/kahrel/indesign/scriptui.html) (InDesign, but plenty realavent)
- Joonas Pääkkö: [ScriptUI Dialog Builder](https://scriptui.joonas.me/)


## CEP and UXP

CEP and UXP are Adobe platforms for building persistent, asynchronous panels and plugins using HTML, CSS, and JavaScript. 

Neither is directly related to Script Hero or its use of ExtendScript - this information is for reference and clarity. 

- **Common Extensibility Platform** (CEP) is the current platform. It uses the Chromium Embedded Framework (CEF) and is (supposedly) being phased out. 

- **Unified Extensibility Platform** (UXP) is a newer platform that uses a more efficient engine than the CEF. 

Adobe is slated to complete the transition from CEP to UXP across its Creative Cloud applications, including Illustrator in 2024.

I'm writing this in August 2024 and as of now, Adobe's Developer Console still links Illustrator with CEP. And the UXP documentation for Photoshop is minimal and dated 2022. Which leads me to suspect that CEP will be around for a while longer.  

For more information, see:

- GitHub: [Common Extensibility Platform](https://github.com/Adobe-CEP)
- Adobe Developer: [UXP for Adobe Photoshop 2022](https://developer.adobe.com/photoshop/uxp/2022/)


## ESTK

The Adobe ExtendScript Toolkit (ESTK) was an integrated development environment (IDE) specifically designed for writing, editing, and debugging ExtendScript code. Adobe announced the deprecation of ESTK in 2017 and it is no longer being maintained. 

- GitHub: [ExtendScript Toolkit](https://github.com/Adobe-CEP/CEP-Resources/blob/master/ExtendScript-Toolkit/Readme.md)


## ExtendScript Debugger

In 2019, Adobe released the ExtendScript Debugger extension for VSCode. I've spent days trying to get both versions 1 and 2 working on Windows. It was beyond frustrating literally made me cry. 

The bottom line is that this extension is only worth exploring if you're building CEP panels. 

- VisualStudio Marketplace: [ExtendScript Debugger](https://marketplace.visualstudio.com/items?itemName=Adobe.extendscript-debug&ssr=false#version-history)




# Script Hero: Library: Actions

This directory holds Adobe Illustrator Actions files. These are useful for things that cannot be scripted directly. Right now the only instance of this can be seen in `document-hero/delete-unused-panel-items.jsx`. I just so happen to keep my other action files here too.

## How to use Action Files in Scripts

```jsx
// Define files
var actionsDirectory = File($.fileName).parent.parent + '/library/actions';
var actionsFile = new File(actionsDirectory + '/delete-unused-panel-items.aia');

// Check file exists
if (!actionsFile.exists ) {
  throw new Error('Missing file:\n' + actionsFile.fullName);
}

// Load actions
app.loadAction(actionsFile);

// Do actions
app.doScript('delete-unused-swatches', 'delete-unused-panel-items');
app.doScript('delete-unused-brushes', 'delete-unused-panel-items');
app.doScript('delete-unused-graphic-styles', 'delete-unused-panel-items');
app.doScript('delete-unused-symbols', 'delete-unused-panel-items');

// Unload actions
app.unloadAction('delete-unused-panel-items', '');
```


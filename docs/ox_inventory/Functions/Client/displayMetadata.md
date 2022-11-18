Sets a metadata property to display in the tooltip.

```lua
exports.ox_inventory:displayMetadata(metadata, value)
```
* metadata: `table` or `string`
  * If metadata is a string then it's the metadata property you want to display, value is **not** optional then.
  * Can be a table of key-value pairs, key being the metadata property and value being the label for that property.
* value?: `string`
  * Label for the string metadata property to be displayed.

**Example:**
```lua
exports.ox_inventory:displayMetadata('mustard', 'Mustard')
```

```lua
exports.ox_inventory:displayMetadata({
    mustard = 'Mustard',
    ketchup = 'Ketchup'
})
```

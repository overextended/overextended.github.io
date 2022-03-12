Sets a metadata property to display in the tooltip.

```lua
-- metadata: table or string
-- value: string (optional)
exports.ox_inventory:displayMetadata(metadata, value)
```

`metadata` can either be table or string, if it's a string it's the metadata property
that you want to display, `value` is **not** optional then.

`value` represents the _label_ for the property you want to display.

Otherwise `metadata` can be a table of key value pairs, key being the metadata property
and value being the label for that metadata.

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
Get all slot ids in an inventory matching the given name and metadata.

```lua
exports.ox_inventory:GetSlotIdsWithItem(inv, itemName, metadata, strict)
```

- inv: `table` or `string` or `number`
- itemName: `string`
- metadata?: `table`
- strict?: `boolean`
  - Strictly match metadata properties, otherwise use partial matching.

**Returns:** `number[]?`

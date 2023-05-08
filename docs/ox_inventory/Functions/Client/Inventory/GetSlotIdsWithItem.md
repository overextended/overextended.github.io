Get all slot ids in the player's inventory matching the given name and metadata.

```lua
exports.ox_inventory:GetSlotIdsWithItem(itemName, metadata, strict)
```

- itemName: `string`
- metadata?: `table`
- strict?: `boolean`
  - Strictly match metadata properties, otherwise use partial matching.

**Returns:** `number[]?`

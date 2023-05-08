Get the total item count for all items in the player's inventory with the given name and metadata.

```lua
exports.ox_inventory:GetItemCount(itemName, metadata, strict)
```

- itemName: `string`
- metadata?: `table`
- strict?: `boolean`
  - Strictly match metadata properties, otherwise use partial matching.

**Returns:** `number?`

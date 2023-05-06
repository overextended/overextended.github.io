Returns _generic_ item data from the specified inventory, with the total count.

```lua
exports.ox_inventory:GetItem(inv, item, metadata, returnsCount)
```

* inv: `table` or `string` or `number`
* item: `table` or `string`
  * Can be items array.
* metadata?: `any`
  * Only returns the count of items that strictly match the given metadata.
* returnsCount?: `boolean`

If `returnsCount` is set to true, the returned value will be the `count` based on
how many times the item was found.

Otherwise returns the data related to the item _and_ its total count found in the inventory.

**Example**:

```lua
local item = ox_inventory:GetItem(source, 'water', nil, false)

print(json.encode(item, {indent=true}))
--[[
    {
        "consume": 1,
        "count": 15,
        "stack": true,
        "name": "water",
        "weight": 500,
        "label": "Water",
        "close": true
    }
]]
```

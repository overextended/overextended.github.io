Adds an item into the specified inventory.

Should be used alongside [CanCarryItem](./CanCarryItem.md) otherwise, the maximum weight may be exceeded.

```lua
exports.ox_inventory:AddItem(inv, item, count, metadata, slot, cb)
```

- inv: `table` or `string` or `number`
  - The inventory's unique id, or a table with the id and owner.
    - playerId: `1`
    - inventoryId: `gloveVGH283`
    - `{ id = 'personallocker', owner = 'license:xxxxxx'}`
- item: `string`
  - The name of the item to add to the target.
- count: `number`
  - The number of items to add.
- metadata?: `table` or `string`
  - A table of unique data to attach to the item object. A string will create a table with the "type" field.
- slot?: `number`
  - A specific slot to add the item to. If the slot is invalid, the first available slot will be used instead.
- cb?: function(success: `boolean`, response?: `string`)

Returns `success, response` if cb is undefined, otherwise they are used in the callback only.

**Example:**

```lua
local success, response = exports.ox_inventory:AddItem('gloveVGH283', 'bread', 4)

if not success then
    -- if no slots are available, the value will be "inventory_full"
    return print(response)
end

print(json.encode(response, {indent=true}))
--[[
    {
        "metadata": [],
        "label": "Bread",
        "slot": 1,
        "stack": true,
        "close": true,
        "name": "bread",
        "count": 1,
        "weight": 150
    }
]]
```

**Possible value of the "response" argument, on failure:**

- "invalid_item": the item doesn't exist
- "invalid_inventory": the inventory doesn't exist
- "inventory_full": no free slots

Removes the specified item from the specified inventory.

```lua
exports.ox_inventory:RemoveItem(inv, item, count, metadata, slot)
```

- inv: `table` or `string` or `number`
  - The inventory's unique id, or a table with the id and owner.
    - playerId: `1`
    - inventoryId: `gloveVGH283`
    - `{ id = 'personallocker', owner = 'license:xxxxxx'}`
- item: `string`
  - The name of the item to remove from the target.
- count: `number`
  - The number of items to remove.
- metadata?: `table` or `string`
  - Only remove items with matching metadata properties.
- slot?: `number`
  - A specific slot to remove the item from. If the slot is invalid, the first available slot will be used instead.
- cb?: function(success: `boolean`, response?: `string`)

Returns success: `boolean`, response: `string?`.

**Possible value of "response" on failure:**

- "invalid_item": the item doesn't exist
- "invalid_inventory": the inventory doesn't exist
- "not_enough_items": inventory did not contain enough of the given item

**Example:**

```lua
-- Removes 2 water from the glovebox for the given plate.
local success = exports.ox_inventory:RemoveItem('gloveVGH283', 'water', 2)
```

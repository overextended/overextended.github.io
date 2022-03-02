Returns true or false depending if the inventory can carry the specified item.

The function checks for inventory weight and available slots.

```lua
-- inv: string or number
-- item: table or string
-- count: number
-- metadata: table or string (optional)
exports.ox_inventory:CanCarryItem(inv, item, count, metadata)
```
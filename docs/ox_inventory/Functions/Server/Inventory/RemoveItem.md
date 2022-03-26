Removes the specified item from the specified inventory.

```lua
-- inv: string or table
-- item: table or string
-- count: number
-- metadata: table or string (optional)
-- slot: number (optional)
exports.ox_inventory:RemoveItem(inv, item, count, metadata, slot)
```

**Example:**
```lua
-- Removes 1 water from the inventory
exports.ox_inventory:RemoveItem(source, 'water', 1)
```
Searches the inventory for a specified item.

```lua
-- search: string
-- item: table or string
-- metadata: table or string (optional)
exports.ox_inventory:Search(search, item, metadata)
```
If the `search` argument is defined as `'slots'` the return will be a table
of slots where the item was found at.

Otherwise if the `search` argument is defined as `'count'` the return value
will be the amount of the specified item in player's inventory.

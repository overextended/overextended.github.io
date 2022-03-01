Searches the inventory for a specified item.

```lua
-- search: string or number ('slots' | 1, 'count' | 2)
-- item: table or string
-- metadata: table or string (optional)
expors.ox_inventory:Search(search, item, metadata)
```
If the `search` argument is defined as `'slots'` or `1` the return will be a table
of slots where the item was found at.

Otherwise if the `search` argument is defined as `'count'` or `2` the return value
will be the amount of the specified item in player's inventory.